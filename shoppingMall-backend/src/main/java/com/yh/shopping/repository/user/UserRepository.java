package com.yh.shopping.repository.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yh.shopping.model.user.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	Optional<User> findByUsername(String username);
}
