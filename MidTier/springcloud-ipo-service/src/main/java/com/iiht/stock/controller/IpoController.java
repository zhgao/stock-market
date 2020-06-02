package com.iiht.stock.controller;

import com.iiht.stock.entity.*;
import com.iiht.stock.service.IpoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@RestController
@RequestMapping("/api/ipo")

public class IpoController {
	@Autowired
	private IpoService ipoService;

	@GetMapping
	public List<IpoEntity> findAllIpos() {
		return ipoService.findAllIpos();
	}

	@PutMapping
	public ResponseEntity<IpoEntity> update(IpoEntity Ipo) {
		IpoEntity IpoEntity = ipoService.updateIpo(Ipo);
		return ResponseEntity.ok(IpoEntity);
	}


	@DeleteMapping("/{id}")
	public ResponseEntity<String> delete(@PathVariable Integer id) {
		ipoService.deleteIpo(id);
		return ResponseEntity.ok("Delete Ipo successfully.");
	}
}
