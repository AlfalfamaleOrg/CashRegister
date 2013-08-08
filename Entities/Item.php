<?php

class Item extends AjaxEntity{

	public function all($data){

		$result = D::q('
			SELECT * FROM items
		');

		if($result->num_rows > 0){

			$this->_success = true;

			while($row = $result->fetch_object()){

				$this->_data['items'][] = [
					'name' => $row->name,
					'price' => $row->price_inc,
					'id' => $row->id
				];
			}
		}
	}

	public function save($data){

		$id = $data['id'];
		$name = $data['name'];
		$price_inc = $data['price_inc'];

		D::q("
			UPDATE items
			SET name = '$name',
				price_inc = $price_inc
			WHERE id = $id;
		");

		$this->_success = true;
		$this->_data = [
			'id' => $id,
			'name' => $name,
			'price' => $price_inc
		];
	}
}