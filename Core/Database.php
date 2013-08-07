<?php

abstract class D{

	static function q($query){

		$mysqli = new mysqli('localhost', 'cashregister', 'cashregister', 'cashregister');
		return $mysqli->query($query);
	}
}