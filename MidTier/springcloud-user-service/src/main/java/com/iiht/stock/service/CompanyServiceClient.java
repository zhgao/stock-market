
package com.iiht.stock.service;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.iiht.stock.entity.CompanyEntity;


@FeignClient("cloud-company-service")
public interface CompanyServiceClient {
	@RequestMapping(
			method=RequestMethod.GET,
			value="/api/company/{id}",
			consumes="application/json"
			)
	public CompanyEntity queryCompanyEntityById(Long id);
}
  
