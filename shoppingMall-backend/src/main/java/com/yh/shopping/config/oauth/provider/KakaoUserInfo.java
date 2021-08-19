package com.yh.shopping.config.oauth.provider;

import java.util.Map;

public class KakaoUserInfo implements OAuth2UserInfo{

	private Map<String, Object> attributes; // oauth2User.getAttributes();
	private Map<String, Object> kakao_account; // email 받기
	private Map<String, Object> properties; // 닉네임 받기
	
	public KakaoUserInfo(Map<String, Object> attributes) {
		this.attributes = attributes;
	}
	
	@Override
	public String getProviderId() {
		return String.valueOf(attributes.get("id"));
	}

	@Override
	public String getProvider() {
		return "kakao";
	}

	@Override
	public String getEmail() {
		kakao_account = (Map<String, Object>) attributes.get("kakao_account");
		return (String) kakao_account.get("email");
	}

	@Override
	public String getName() {
		properties = (Map<String, Object>) attributes.get("properties");
		return (String) properties.get("nickname");
	}
	
}
