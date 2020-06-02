package com.iiht.stock.entity;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="ipo")
public class IpoEntity {

    private Long id;

    @Id
    @GeneratedValue
    @Column(name="id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name="COMPANY_NAME")
    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
    @Column(name="STOCK_EXCHANGE")
    public String getStockExchange() {
        return stockExchange;
    }

    public void setStockExchange(String stockExchange) {
        this.stockExchange = stockExchange;
    }
    @Column(name="PRICE_PER_SHARE")
    public String getPricePerShare() {
        return pricePerShare;
    }

    public void setPricePerShare(String pricePerShare) {
        this.pricePerShare = pricePerShare;
    }
    @Column(name="TNOS")
    public String getTnos() {
        return tnos;
    }

    public void setTnos(String tnos) {
        this.tnos = tnos;
    }
    @Column(name="OPEN_DATE_TIME")
    public Date getOpenDateTime() {
        return openDateTime;
    }

    public void setOpenDateTime(Date openDateTime) {
        this.openDateTime = openDateTime;
    }
    @Column(name="REMARKS")
    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    private String companyName;
    private String stockExchange;
    private String pricePerShare;
    private String tnos;
    private Date openDateTime;
    private String remarks;

}
