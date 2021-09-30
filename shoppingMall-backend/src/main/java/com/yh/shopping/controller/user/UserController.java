package com.yh.shopping.controller.user;

import java.util.Date;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.yh.shopping.config.JwtProperties;
import com.yh.shopping.model.user.KakaoProfile;
import com.yh.shopping.model.user.OAuthToken;
import com.yh.shopping.model.user.User;
import com.yh.shopping.service.user.UserService;

// 인증이 안된 사용자들이 출입할 수 있는 경로를 /auth/** 허용
// 그냥 주소가 / 이면 index.jsp 허용
// static 이하에 있는 /js/**, /css/**, /image/** 허용

@Controller
public class UserController {
	
	@Value("${yh.key}")
	private String yhKey;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	HttpServletResponse res;
	
	private  JwtProperties jwtProperties;
	
	@GetMapping("/auth/kakao/callback")
	public String kakaoCallback(String code) {
		
		// ================= 토큰 요청 ======================
		RestTemplate rt = new RestTemplate();
		// HttpHeader 오브젝트 생성
		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
		
		// HttpBody 오브젝트 생성
		MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
		params.add("grant_type", "authorization_code");
		params.add("client_id", "9f2407a32eb59fd6f8274ae8c537b676");
		params.add("redirect_uri", "http://localhost:3000/login/oauth2/code/kakao");
		params.add("code", code);
		
		
		// HttpHeader와 HttpBody를 하나의 오브젝트에 담기
		HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest =
				new HttpEntity<>(params, headers);
		
		// Http 요청하기 - Post방식으로 - 그리고 response 변수의 응답 받음.
		ResponseEntity<String> response = rt.exchange(
				"https://kauth.kakao.com/oauth/token",
				HttpMethod.POST,
				kakaoTokenRequest,
				String.class
				);
		
		//  JSON 토큰 JAVA로 처리
		// Gson, Json Simple, ObjectMapper
		ObjectMapper objectMapper = new ObjectMapper();
		OAuthToken oauthToken = null;
		
		try {
			oauthToken = objectMapper.readValue(response.getBody(), OAuthToken.class);
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		
		System.out.println("카카오 엑세스 토큰 : "+oauthToken.getAccess_token());
		
		
		// ================= 회원 정보 요청 =====================
		RestTemplate rt2 = new RestTemplate();
		// HttpHeader 오브젝트 생성
		HttpHeaders headers2 = new HttpHeaders();
		headers2.add("Authorization", "Bearer "+oauthToken.getAccess_token());
		headers2.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
		
		// HttpHeader와 HttpBody를 하나의 오브젝트에 담기
		HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest2 =
				new HttpEntity<>(headers2);
		
		// Http 요청하기 - Post방식으로 - 그리고 response 변수의 응답 받음.
		ResponseEntity<String> response2 = rt2.exchange(
				"https://kapi.kakao.com/v2/user/me",
				HttpMethod.POST,
				kakaoProfileRequest2,
				String.class
				);
		System.out.println(response2.getBody());
		
		// JSON 회원정보 JAVA로 처리 
		ObjectMapper objectMapper2 = new ObjectMapper();
		KakaoProfile kakaoProfile = null;
		
		try {
			kakaoProfile = objectMapper2.readValue(response2.getBody(), KakaoProfile.class);
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		
		// JSON 회원정보 데이터 JAVA로 잘 처리됐나 확인
		// User 오브젝트 : username, password, email
		System.out.println("카카오 아이디(번호) : "+kakaoProfile.getId()); // 시퀀스 같은거
		System.out.println("카카오 이메일 : "+kakaoProfile.getKakao_account().getEmail());
		
		System.out.println("쇼핑몰서버 유저네임 : "+kakaoProfile.getKakao_account().getEmail()+"_"+kakaoProfile.getId());
		System.out.println("쇼핑몰서버 이메일 : "+kakaoProfile.getKakao_account().getEmail());
		// UUID garbagePassword = UUID.randomUUID(); 
		// System.out.println("쇼핑몰서버 패스워드 : "+garbagePassword);
		System.out.println("쇼핑몰서버 패스워드 : "+yhKey);
		
		// ========== 로그인 및 회원가입 처리 ==============
		
		User kakaoUser = User.builder()
				.username(kakaoProfile.getKakao_account().getEmail()+"_"+kakaoProfile.getId())
				.password(yhKey)
				.email(kakaoProfile.getKakao_account().getEmail())
				.provider("kakao")
				.providerId(kakaoProfile.getId())
				.build();
		
		// 가입자 혹은 비가입자 체크 해서 처리
		User originUser = userService.회원찾기(kakaoUser.getUsername());
		
		// 비가입자면 회원가입 하고 로그인 처리
		if(originUser.getUsername() == null) {
			System.out.println("기존 회원이 아니기에 자동 회원가입을 진행합니다.");
			userService.회원가입(kakaoUser);
		}
		
		// 로그인 처리
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(kakaoUser.getUsername(), yhKey));
		SecurityContextHolder.getContext().setAuthentication(authentication); 
		System.out.println("카카오 로그인 완료");
		
		String jwtToken = JWT.create()
                .withSubject("jwt토큰")
                .withExpiresAt(new Date(System.currentTimeMillis() + jwtProperties.EXPIRATION_TIME)) // 현재시간 + 3시간 만료 시간 (1000 = 1초)
                .withClaim("id", originUser.getId())
                .withClaim("username", kakaoUser.getUsername())
                .sign(Algorithm.HMAC512(jwtProperties.SECRET));
		
		System.out.println("jwtToken : "+jwtToken);
		res.addHeader(jwtProperties.HEADER_STRING, jwtProperties.TOKEN_PREFIX+jwtToken);
		
		return "카카오 로그인 성공";
	}
	
	
	
	@GetMapping("/user/updateForm")
	public String updateForm() {
		return "user/updateForm";
	}
}
