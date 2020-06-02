/**  
 * Project Name:common  
 * File Name:StockRequestException.java  
 * Package Name:com.iiht.stock.com.iiht.stock.exception
 * Date:2020年5月16日上午8:33:53  
 *  
*/

package com.iiht.stock.exception;

import org.springframework.validation.Errors;

@SuppressWarnings("serial")
public class StockRequestException extends RuntimeException {
	private String errorCode;
	private String errorMsg;
	private Errors errors;
	
	public StockRequestException(String errorCode, String errorMsg) {
		this.errorCode = errorCode;
		this.errorMsg = errorMsg;
	}
	
	public StockRequestException(String errorCode, Errors errors) {
		this.errorCode = errorCode;
		this.errors = errors;
	}
	
	public StockRequestException(String errorCode, String errorMsg, Errors errors) {
		this.errorCode = errorCode;
		this.errorMsg = errorMsg;
		this.errors = errors;
	}

	public String getErrorCode() {
		return errorCode;
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	public Errors getErrors() {
		return errors;
	}

}
