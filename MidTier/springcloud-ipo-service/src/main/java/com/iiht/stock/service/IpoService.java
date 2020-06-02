package com.iiht.stock.service;

import com.iiht.stock.entity.*;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IpoService {

	public Page<IpoEntity> findAll(int page, int pageSize);
	
	public List<IpoEntity> findAllIpos();
	
	public IpoEntity findIpoByName(Integer id);

	public IpoEntity updateIpo(IpoEntity ipo);

	public void deleteIpo(Integer id);
	
}
