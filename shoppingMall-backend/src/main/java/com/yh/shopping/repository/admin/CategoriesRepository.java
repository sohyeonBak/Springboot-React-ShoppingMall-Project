package com.yh.shopping.repository.admin;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yh.shopping.model.admin.Categories;

public interface CategoriesRepository extends JpaRepository<Categories, Long>{
	
}
