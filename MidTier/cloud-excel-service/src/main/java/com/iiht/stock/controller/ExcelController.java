package com.iiht.stock.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.iiht.stock.entity.CompanyEntity;
import com.iiht.stock.service.ExcelService;

@RestController
@RequestMapping("/api/user")

public class ExcelController {
	@Autowired
	private ExcelService excelService;
	
	@PostMapping("/active/{id}")
	public ResponseEntity<CompanyEntity> regist(CompanyEntity company){
		CompanyEntity companyEntity = excelService.uploadExcel(company);
		return ResponseEntity.status(HttpStatus.CREATED).body(companyEntity); 
	}
	
	

}