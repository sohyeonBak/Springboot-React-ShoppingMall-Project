package com.yh.shopping.jwt;

import java.io.IOException;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.yh.shopping.config.JwtProperties;
import com.yh.shopping.config.auth.PrincipalDetails;
import com.yh.shopping.model.user.User;

import lombok.RequiredArgsConstructor;

// 스프링 시큐리티에서 UsernamePasswordAuthenticationFilter 가 있음.
// /login 요청해서 username, password 전송하면 (post)
// UsernamePasswordAuthenticationFilter 동작을 함.

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter{

	private final AuthenticationManager authenticationManager;
	private final JwtProperties jwtProperties;
	
	
	// /login 요청을 하면 로그인 시도를 위해서 실행되는 함수
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		System.out.println("JwtAuthenticationFilter : 로그인 시도 중");
		
		// 1. username, password 받아서
		// 2. 정상인지 로그인 시도를 한다.
		//     -AuthenticationManager로 로그인 시도를 하면 
		//     -PrincipalDetailsService가 호출 loadUserByUsername() 함수 실행.
		// 3. PrinciaplDetails를 세션에 담고 (권한 관리를 위해서)
		// 4. JWT토큰을 만들어서 응답해주면 됨.
		
		try {
			/*
			BufferedReader br = request.getReader();
			String input = null;
			while((input = br.readLine()) != null) {
				System.out.println(input);
			}
			*/
			ObjectMapper om = new ObjectMapper();
			User user = om.readValue(request.getInputStream(), User.class);
			System.out.println(user);
			
			UsernamePasswordAuthenticationToken authenticationToken =
					new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword());
			
			// PrincipalDetailsService의 loadUserByUsername() 함수 실행된 후 정상이면 authentication이 리턴됨.
			// DB에 있는 username과 password가 일치한다.
			Authentication authentication =
					authenticationManager.authenticate(authenticationToken);
			
			
			PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
			System.out.println("로그인 완료됨 :"+principalDetails.getUser().getUsername()); // 값이 있다면 로그인 정상적으로 되었다는 뜻
			
			// authentication 객체가 session 영역에 저장을 해야하고 그 방법이 return 해주면 됨.
			// 리턴의 이유는 권한 관리를 security가 대신 해주기 때문에 편하려고 하는거임.
			// 굳이 JWT 토큰을 사용하면서 세션을 만들 이유가 없음. 근데 단지 권한 처리때문에 session 넣어 줍니다.
			
			return authentication; 
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	// attemptAuthentication실행 후 인증이 정상적으로 되었으면 successfulAuthentication 함수가 실행 됨.
	// JWT 토큰을 만들어서 request 요청한 사용자에게 JWT 토큰을 response 해주면 됨.
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		System.out.println("successfulAuthentication 실행됨 : 인증이완료되었다는 뜻임");
		PrincipalDetails principalDetails = (PrincipalDetails) authResult.getPrincipal();
		
		// Create JWT Token
		// RSA방식은 아니고 Hash암호방식
        String jwtToken = JWT.create()
                .withSubject("jwt토큰")
                .withExpiresAt(new Date(System.currentTimeMillis() + jwtProperties.EXPIRATION_TIME)) // 현재시간 + 3시간 만료 시간 (1000 = 1초)
                .withClaim("id", principalDetails.getUser().getId())
                .withClaim("username", principalDetails.getUser().getUsername())
                .sign(Algorithm.HMAC512(jwtProperties.SECRET));
        
        System.out.println("jwtToken : "+jwtToken);
		
        response.addHeader(jwtProperties.HEADER_STRING, jwtProperties.TOKEN_PREFIX+jwtToken); // Bearer하고 띄어쓰기 필수 (스페이스)
	}
	
}
