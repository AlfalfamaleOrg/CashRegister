var Order = {

	items: {},

	addItem: function(id, name, price){

		if(this.items[id]){

			$('order_item_' + id).getElements('.Count').set('text', ++this.items[id].count);
			$('order_item_' + id).getElements('.TotalPrice').set(
				'text',
				parseFloat(this.items[id].count * this.items[id].price, 10).toFixed(2)
			);
		}
		else{

			this.items[id] = {name: name, price: parseFloat(price, 10).toFixed(2), count: 1};

			var order_item = $('order_item_dummy').clone();

			order_item.set('id', 'order_item_' + id);
			order_item.getElements('.Name').set('text', name);
			order_item.getElements('.TotalPrice, .SinglePrice').set('text', parseFloat(price, 10).toFixed(2));
			order_item.getElements('.Count').set('text', 1);

			order_item.inject('order_item_dummy', 'before').show();
		}

		var total = 0;

		Object.keys(this.items).each(function(key){

			total += (Order.items[key].count * Order.items[key].price);
		});

		$('order_total').getElements('.Price').set('text', total.toFixed(2));
	}
};