package com.iiht.stock.service;
import com.iiht.stock.repository.*;
import com.iiht.stock.entity.CompanyEntity;
import com.iiht.stock.entity.IpoEntity;
import com.iiht.stock.exception.StockBusinessException;
import com.iiht.stock.result.CommonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

public class IpoServiceImpl implements IpoService {
        @Autowired
        private IpoRepository IpoRepository;
        @Autowired
        private RestTemplate restTemplate;

        final String SERVICE_NAME = "cloud-company-service";

        public Page<IpoEntity> findAll(int page, int pageSize) {
            // TODO Auto-generated method stub
            return null;
        }

        public IpoEntity findIpoById(Integer id) {
            return IpoRepository.findById(id);
        }

        public IpoEntity findIpoByIpoName(String IpoName){
            return IpoRepository.findByIpoName(IpoName);
        }

        public List<IpoEntity> findAllIpos(){
            CommonResult<CompanyEntity> result = restTemplate.getForObject("http://springcloud-company-service/api/company/1", CommonResult.class);
            return IpoRepository.findAll();
        }

    @Override
    public IpoEntity findIpoByName(Integer id) {
        return null;
    }

    public IpoEntity createIpo(IpoEntity Ipo) {
            return IpoRepository.save(Ipo);
        }


        public IpoEntity updateIpo(IpoEntity Ipo) {
            return IpoRepository.save(Ipo);
        }

    @Override
    public void deleteIpo(Integer id) {

    }

}