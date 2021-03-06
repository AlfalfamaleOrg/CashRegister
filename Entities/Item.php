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
					'id' => $row->id,
					'type_id' => $row->type_id,
					'price_inc' => $row->price_inc,
					'cost_exc' => $row->cost_exc,
					'tax' => 10
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

	public function add($data){

		$name = $data['name'];
		$price_inc = $data['price_inc'];

		D::q("
			INSERT INTO items (name, price_inc)
			VALUES ('$name', $price_inc)
		");

		$this->_success = true;
		$this->_data = [
			'id' => D::id(),
			'name' => $name,
			'price' => $price_inc
		];
	}

	public function delete($data){

		$id = $data['id'];

		D::q("DELETE FROM items WHERE id = $id");
		$this->_success = true;
	}
}