var Order = {

	items: {},

	init: function(){

		$('show_payment').addEvent('click', function(){

			Payment.show(this.items);
		}.bind(this));

		$('clear_order').addEvent('click', this.clear.bind(this));
	},

	selectItem: function(event){

		var target = Selection.findElement(event.target, 'OrderItem');
		var id = target.get('data-id');

		Selection.select(target);

		Keypad.addEvent(function(value){

			Order.setCount(id, value);
			Selection.deselect(target);
		});
	},

	addItem: function(id, name, price){

		Selection.deselectAll();
		var order_item = null;

		if(this.items[id]){

			this.setCount(id, ++this.items[id].count);

			order_item = $('order_item_' + id);
		}
		else{

			this.items[id] = {
				name: name,
				price: parseFloat(price, 10),
				count: 1
			};

			order_item = $('order_item_dummy').clone();

			order_item.set({
				'id': 'order_item_' + id,
				'data-id': id,
				'events': {
					'click': this.selectItem
				}
			});

			order_item.getElements('.Name').set('text', name);
			order_item.getElements('.SinglePrice').set('text', this.items[id].price.toFixed(2));

			order_item.getElements('.Remove').addEvent('click', function(){

				Order.removeItem(id);
			});

			order_item.inject('order_item_dummy', 'before').show();

			this.setCount(id, 1);
		}

		Selection.select(order_item);

		this.calculateTotal();

		Keypad.addEvent(function(value){

			Order.setCount(id, value);
			Selection.deselect(order_item);
		});
	},

	setCount: function(id, value){

		if(value == 0){

			delete this.items[id];
			$('order_item_' + id).destroy();
			return;
		}

		this.items[id].count = value;
		$('order_item_' + id).getElements('.Count').set('text', value);
		$('order_item_' + id).getElements('.TotalPrice').set(
			'text',
			(value * this.items[id].price).toFixed(2)
		);
		this.calculateTotal();
	},

	calculateTotal: function(){

		var total = 0;

		Object.keys(this.items).each(function(key){

			if(this.items[key]){

				total += (this.items[key].count * this.items[key].price);
			}
		}.bind(this));

		$('order_total').getElements('.Price').set('text', total.toFixed(2));
	},

	removeItem: function(id){

		if(this.items[id]){

			this.setCount(id, --this.items[id].count);
		}

		this.calculateTotal();
	},

	clear: function(){

		Object.keys(this.items).each(function(key){

			delete this.items[key];
			$('order_item_' + key).destroy();
		});

		this.calculateTotal();
	}
};