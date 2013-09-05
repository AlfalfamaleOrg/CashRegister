<?php

class Order extends AjaxEntity{

	public function add($data){

		$user_id = Application::Singleton()->User->id;

		D::q("INSERT INTO orders SET user_id = $user_id");

		$order_id = D::id();

		foreach($data as $item_id => $details){

			$price = $details['price'];
			$count = $details['count'];
			$vat = 0;

			D::q("
				INSERT INTO orders_items (
					order_id, item_id, price_inc, price_vat, count
				) VALUES (
					$order_id, $item_id, $price, $vat, $count
				)
			");
		}

		$this->_success = true;
	}
}