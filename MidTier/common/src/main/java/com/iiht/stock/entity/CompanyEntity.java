package com.iiht.stock.entity;


import javax.persistence.*;

@Entity
@Table(name="company")
public class CompanyEntity {
	private Long id;
	private String companyName;
	private String turnOver;
	private String ceo;
	private String bod;
	private String lise;
	private String sector;
	private String writeup;
	private String csciese;


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
	@Column(name="TURN_OVER")
	public String getTurnOver() {
		return turnOver;
	}

	public void setTurnOver(String turnOver) {
		this.turnOver = turnOver;
	}
	@Column(name="CEO")
	public String getCeo() {
		return ceo;
	}

	public void setCeo(String ceo) {
		this.ceo = ceo;
	}
	@Column(name="BOD")
	public String getBod() {
		return bod;
	}

	public void setBod(String bod) {
		this.bod = bod;
	}
	@Column(name="LISE")
	public String getLise() {
		return lise;
	}

	public void setLise(String lise) {
		this.lise = lise;
	}
	@Column(name="SECTOR")
	public String getSector() {
		return sector;
	}

	public void setSector(String sector) {
		this.sector = sector;
	}
	@Column(name="WRITEUP")
	public String getWriteup() {
		return writeup;
	}
	public void setWriteup(String writeup) {
		this.writeup = writeup;
	}
	@Column(name="CSCIESE")
	public String getCsciese() {
		return csciese;
	}

	public void setCsciese(String csciese) {
		this.csciese = csciese;
	}
}
  
