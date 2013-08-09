<?php

abstract class D{

	static $_mysqli;

	static function getConn(){

		if(!self::$_mysqli){

			self::$_mysqli = new mysqli('localhost', 'cashregister', 'cashregister', 'cashregister');
		}

		return self::$_mysqli;
	}

	static function q($query){

		$mysqli = self::getConn();
		return $mysqli->query($query);
	}

	static function id(){

		$mysqli = self::getConn();
		return $mysqli->insert_id;
	}
}