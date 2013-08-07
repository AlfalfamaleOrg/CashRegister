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
}