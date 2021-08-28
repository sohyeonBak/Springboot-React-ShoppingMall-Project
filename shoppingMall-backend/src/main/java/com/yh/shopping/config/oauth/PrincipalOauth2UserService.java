package com.yh.shopping.config.oauth;

import java.util.Date;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.yh.shopping.config.JwtProperties;
import com.yh.shopping.config.auth.PrincipalDetails;
import com.yh.shopping.config.oauth.provider.FacebookUserInfo;
import com.yh.shopping.config.oauth.provider.GoogleUserInfo;
import com.yh.shopping.config.oauth.provider.KakaoUserInfo;
import com.yh.shopping.config.oauth.provider.NaverUserInfo;
import com.yh.shopping.config.oauth.provider.OAuth2UserInfo;
import com.yh.shopping.model.RoleType;
import com.yh.shopping.model.user.User;
import com.yh.shopping.repository.user.UserRepository;


@Service
public class PrincipalOauth2UserService extends DefaultOAuth2UserService{
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	private UserRepository userRepositoy;
	
	@Autowired
	HttpServletResponse response;
	
	private  JwtProperties jwtProperties;
	
	// 구글로 부터 받은 userRequest 데이터에 대한 후처리되는 함수
	// 함수 종료시 @AuthenticationPrincipal 어노테이션이 만들어진다.
	@Override
	public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
		System.out.println("getClientRegistration : "+userRequest.getClientRegistration()); // registrationId로 어떤 OAuth로 로그인 했는지 확인가능. 
		System.out.println("getAccessToken : "+userRequest.getAccessToken().getTokenValue());
		
		
		OAuth2User oauth2User = super.loadUser(userRequest);
		// 구글로그인 버튼 클릭 -> 구글로그인창 -> 로그인을 완료 -> code를 리턴(OAuth-Client라이브러리가 받음) -> AccessToken요청
		// 여기 까지가 userRequest 정보 -> loadUser함수 호출 -> 구글로부터 회원프로필 받아준다.
		System.out.println("getAuthorities : "+oauth2User.getAttributes());
		
		// OAuth들 관리 하기 위해 우리가 만든 인터페이스
		OAuth2UserInfo oAuth2UserInfo = null;
		if(userRequest.getClientRegistration().getRegistrationId().equals("google")) {
			System.out.println("구글 로그인 요청");
			oAuth2UserInfo = new GoogleUserInfo(oauth2User.getAttributes());
		}else if(userRequest.getClientRegistration().getRegistrationId().equals("facebook")) {
			System.out.println("페이스북 로그인 요청");
			oAuth2UserInfo = new FacebookUserInfo(oauth2User.getAttributes());
		}else if(userRequest.getClientRegistration().getRegistrationId().equals("kakao")) {
			System.out.println("카카오 로그인 요청");
			oAuth2UserInfo = new KakaoUserInfo(oauth2User.getAttributes());
		}else if(userRequest.getClientRegistration().getRegistrationId().equals("naver")) {
			System.out.println("네이버 로그인 요청");
			oAuth2UserInfo = new NaverUserInfo((Map)oauth2User.getAttributes().get("response"));
		}else {
			System.out.println("우리는 구글과 페이스북과 네이버와 카카오만 지원해요");
		}
		
		System.out.println("name : "+ oAuth2UserInfo.getName());
		System.out.println("getEmail : "+ oAuth2UserInfo.getEmail());
		System.out.println("getProviderId : "+ oAuth2UserInfo.getProviderId());
		
		
		String provider = oAuth2UserInfo.getProvider(); // google
		String providerId = oAuth2UserInfo.getProviderId();
		String username = provider+"_"+providerId; // google_112188858007110237324
		String password = bCryptPasswordEncoder.encode("겟인데어");
		String email = oAuth2UserInfo.getEmail();
		RoleType role = RoleType.ROLE_USER;
		
		User userEntity = userRepositoy.findByUsername(username);
		
		
		if(userEntity == null) {
			System.out.println("OAuth 로그인이 최초입니다.");
			userEntity = User.builder()
					.username(username)
					.password(password)
					.email(email)
					.role(role)
					.provider(provider)
					.providerId(providerId)
					.build();
			userRepositoy.save(userEntity);
		}
		
		String jwtToken = JWT.create()
                .withSubject("jwt토큰")
                .withExpiresAt(new Date(System.currentTimeMillis() + jwtProperties.EXPIRATION_TIME)) // 현재시간 + 3시간 만료 시간 (1000 = 1초)
                .withClaim("id", userEntity.getId())
                .withClaim("username", oAuth2UserInfo.getName())
                .sign(Algorithm.HMAC512(jwtProperties.SECRET));
		
		System.out.println("jwtToken : "+jwtToken);
		response.addHeader(jwtProperties.HEADER_STRING, jwtProperties.TOKEN_PREFIX+jwtToken);
		
		return new PrincipalDetails(userEntity, oauth2User.getAttributes());
	}
}
