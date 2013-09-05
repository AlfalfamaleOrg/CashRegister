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
				],
				'logout' => [
					'allow' => true
				]
			],
			'Item' => [
				'all' => [
					'allow' => true
				],
				'save' => [
					'allow' => true
				],
				'add' => [
					'allow' => true
				],
				'delete' => [
					'allow' => true
				]
			],
			'Order' => [
				'add' => [
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