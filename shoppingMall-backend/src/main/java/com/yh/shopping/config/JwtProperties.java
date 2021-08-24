package com.yh.shopping.config;

public interface JwtProperties {
	String SECRET = "yh"; // 개인키
	int EXPIRATION_TIME = 1000*60*60*3; // 3시간 (1000=1초) 
	String TOKEN_PREFIX = "Bearer ";
	String HEADER_STRING = "Authorization";
}
