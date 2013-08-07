<?php

abstract class Router{

	public static function validateRequest($User, $entity, $action){

		$routes = [
			'User' => [
				'login' => [
					'userless' => true,
					'allow' => true
				],
				'current' => [
					'userless' => true,
					'allow' => true
				]
			],
			'Item' => [
				'all' => [
					'allow' => true
				]
			]
		];

		if(isset($routes[$entity][$action])){

			if(!($User instanceof User)){

				return !empty($routes[$entity][$action]['userless']);
			}

			return !empty($routes[$entity][$action]['allow']);
		}

		return false;
	}
}