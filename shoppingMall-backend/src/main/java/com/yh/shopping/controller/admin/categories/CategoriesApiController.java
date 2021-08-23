package com.yh.shopping.controller.admin.categories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yh.shopping.model.admin.Categories;
import com.yh.shopping.service.admin.CategoriesService;

@RestController
public class CategoriesApiController {

	@Autowired
	private CategoriesService categoriesService;
	
	@CrossOrigin
	@PostMapping("categories")
	public ResponseEntity<?> save(@RequestBody Categories categories){
		return new ResponseEntity<>(categoriesService.카테고리등록(categories), HttpStatus.CREATED); 
	}
	
	@GetMapping("categories")
	public ResponseEntity<?> findAll(){
		return new ResponseEntity<>(categoriesService.카테고리목록(), HttpStatus.OK); 
	}
	
}
