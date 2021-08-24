package com.yh.shopping.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yh.shopping.model.user.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	User findByUsername(String username);
}
