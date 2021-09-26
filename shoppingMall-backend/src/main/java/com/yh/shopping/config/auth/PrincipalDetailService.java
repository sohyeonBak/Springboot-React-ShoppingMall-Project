package com.yh.shopping.config.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.yh.shopping.model.user.User;
import com.yh.shopping.repository.user.UserRepository;
import com.yh.shopping.service.user.UserService;

@Service
public class PrincipalDetailService implements UserDetailsService{
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		System.out.println("username : "+username);
		User userEntity = userService.회원찾기(username);
		System.out.println("userEntity:" +userEntity);
		if(userEntity != null) {
			return new PrincipalDetails(userEntity);
		}
		return null;
		
	}
}
