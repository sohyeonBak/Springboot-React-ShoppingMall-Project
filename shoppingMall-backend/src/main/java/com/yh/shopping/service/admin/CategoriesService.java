package com.yh.shopping.service.admin;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yh.shopping.model.admin.Categories;
import com.yh.shopping.repository.admin.CategoriesRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoriesService {
	
	private final CategoriesRepository categoriesRepository;
	
	@Transactional
	public Categories 카테고리등록(Categories categories) {
		return categoriesRepository.save(categories);
	}
	
	@Transactional(readOnly = true)
	public List<Categories> 카테고리목록(){
		return categoriesRepository.findAll();
	}
	
	
}
