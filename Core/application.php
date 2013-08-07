<?php

class Application{

	private static $_singleton = null;
	private $_User = null;

	private function __construct(){

		$this->_retrieveUser();
	}

	public static function Singleton(){

		if(is_null(self::$_singleton)){

			self::$_singleton = new self();
		}

		return self::$_singleton;
	}

	public function __get($name){

		switch($name){

			case 'User':

				return $this->_User;
		}
	}

	private function _retrieveUser(){

		session_start();

		if(!isset($_SESSION['user'])){

			return;
		}

		$this->_User = new User();
		$this->_User->id = $_SESSION['user']['id'];
		$this->_User->name = $_SESSION['user']['name'];
	}

	public function run(){

		$method = $_SERVER['REQUEST_METHOD'];
		$entity = $_GET['entity'];
		$action = $_GET['action'];

		$postData = $_POST;
		$getData = $_GET;

		unset($getData['entity']);
		unset($getData['action']);

		if(Router::validateRequest($this->_User, $entity, $action)){

			$Entity = new $entity();

			if($method == 'GET'){

				$data = $getData;
			}
			else{

				$data = $postData;
			}

			$Entity->$action($data);

			echo json_encode($Entity->output());
		}
		else{

			echo json_encode(['success' => false, 'message' => 'Ongeldig verzoek']);
		}
	}
}