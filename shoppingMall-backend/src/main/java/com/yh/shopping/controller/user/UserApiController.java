package com.yh.shopping.controller.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yh.shopping.model.user.User;
import com.yh.shopping.service.user.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UserApiController {
	
	private final UserService userService;
	
	@CrossOrigin
	@PostMapping("join")
	public ResponseEntity<?> save(@RequestBody User user) {
		return new ResponseEntity<>(userService.회원가입(user), HttpStatus.CREATED);
	}
	
	
}
