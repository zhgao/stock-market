package com.iiht.stock.repository;

import com.iiht.stock.entity.IpoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface IpoRepository extends JpaRepository<IpoEntity, Integer>{
	
	public IpoEntity findById(Integer id);
	public IpoEntity findByIpoName(String IpoName);
	
	@Modifying
	@Transactional
	@Query(value = "update s_Ipo u set u.conformed='1' where u.id=?",nativeQuery = true)
	public int activeIpo(@Param("id")Integer id);
}
