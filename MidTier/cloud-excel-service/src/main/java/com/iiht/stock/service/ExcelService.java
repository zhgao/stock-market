package com.iiht.stock.service;
import java.util.List;
import org.springframework.data.domain.Page;

import com.iiht.stock.entity.*;
public interface ExcelService {
	/**
	 * 分页查询用户列表
	 * 
	 * @param page
	 * @param pageSize
	 * @return
	 */
	public Page<CompanyEntity> findAll(int page, int pageSize);
	
	/**
	 * 查询所有用户列表
	 * 
	 * @return
	 */
	public List<CompanyEntity> findAllUsers();
	
	/**
	 * 根据ID查询一个用户
	 * 
	 * @param 
	 * @return
	 */
	public CompanyEntity findUserById(Integer id);
	
	/**
	 * 注册一个用户
	 * 
	 * @param user
	 * @return
	 */
	public CompanyEntity registUser(CompanyEntity user);
	
	/**
	 * 更新用户信息
	 * 
	 * @param user
	 * @return
	 */
	public CompanyEntity updateUser(CompanyEntity user);
	
	/**
	 * 激活用户
	 * 
	 * @param id
	 * @return
	 */
	public CompanyEntity activeUser(Integer id);
	
	/**
	 * 删除一个用户
	 * 
	 * @param id
	 */
	public void delete(Integer id);
}
