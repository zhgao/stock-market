/**  
 * Project Name:common  
 * File Name:UserModel.java  
 * Package Name:com.iiht.stock.com.iiht.stock.entity
 * Date:2020年5月12日下午7:37:29  
 * Copyright (c) 2020, chenzhou1025@126.com All Rights Reserved.  
 *  
*/

package com.iiht.stock.entity;

import org.hibernate.validator.constraints.NotBlank;

public class UserModel extends UserEntity{
	@NotBlank
	private String userName;
	
	private String confirmPassword;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}
	
}
