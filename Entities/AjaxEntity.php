<?php

class AjaxEntity{

	protected $_success;
	protected $_data = [];
	protected $_message;

	final function output(){

		return [
			'success' => $this->_success,
			'data' => $this->_data,
			'message' => $this->_message
		];
	}
}