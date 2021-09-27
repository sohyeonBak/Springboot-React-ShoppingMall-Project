package com.yh.shopping.controller.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yh.shopping.config.oauth.PrincipalOauth2UserService;
import com.yh.shopping.model.user.User;
import com.yh.shopping.service.user.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UserApiController {
	
	private final UserService userService;
	private final PrincipalOauth2UserService principalOauth2UserService;
	
	@CrossOrigin
	@PostMapping("join")
	public ResponseEntity<?> save(@RequestBody User user) {
		return new ResponseEntity<>(userService.회원가입(user), HttpStatus.CREATED);
	}
	
	@CrossOrigin
	@GetMapping("/oauthLogin")
	public ResponseEntity<?> oauthLogin(Authentication authentication, @AuthenticationPrincipal OAuth2User oauth) {
		System.out.println("/test/oauth/login=============");
		OAuth2User oauth2User = (OAuth2User) authentication.getPrincipal(); // Authentication 세션정보를 OAuth2User로 다운캐스팅
		System.out.println("/authentication : "+ oauth2User.getAttributes()); // OAuth2User로 프로필 받기
		
		System.out.println("oauth2User : "+oauth.getAttributes()); 
		System.out.println("oauthLogin: "+oauth.getName());
		System.out.println("여기 사람있어요!! ");
		return new ResponseEntity<>("testOauth", HttpStatus.CREATED);
	}
	
	
}
