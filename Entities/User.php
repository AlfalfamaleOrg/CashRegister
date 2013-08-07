<?php

class User extends AjaxEntity{

	private $_id;
	private $_name;

	public function __set($name, $value){

		switch($name){

			case 'id':

				$this->_id = $value;
				break;

			case 'name':

				$this->_name = $value;
				break;
		}
	}

	public function __get($name){

		switch($name){

			case 'name':

				return $this->_name;
		}
	}

	public function login($data){

		if(!isset($data['name']) || !isset($data['password'])){

			$this->_success = false;
			return;
		}

		$name = $data['name'];
		$password = $data['password'];

		if($user = $this->_authenticate($name, $password)){

			$_SESSION['user'] = $user;
			$this->_data['name'] = $user['name'];
			$this->_success = true;
			return;
		}

		$this->_success = false;
	}

	public function current($data){

		$User = Application::Singleton()->User;

		if($User instanceof User){

			$this->_success = true;
			$this->_data['name'] = $User->name;
		}
		else{

			$this->_success = false;
		}
	}

	protected function _authenticate($name, $password){

		$result = D::q("
			SELECT * FROM users WHERE login = '$name'
		");

		if($result->num_rows != 1){

			return false;
		}

		$row = $result->fetch_object();

		if($password != $row->password){

			return false;
		}

		return ['name' => $row->name, 'id' => $row->id];
	}
}