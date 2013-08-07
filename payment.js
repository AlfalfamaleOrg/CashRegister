var Payment = {

	init: function(){

		$('Payment').hide();
		$('payment_item_dummy').hide();

		$('payment_complete').addEvent('click', this.finishPayment);
	},

	show: function(items){

		var total = 0;

		Object.keys(items).each(function(key){

			var payment_item = $('payment_item_dummy').clone();

			payment_item.set('id', 'payment_item_' + key);
			payment_item.getElements('.Name').set('text', items[key].name);
			payment_item.getElements('.Count').set('text', items[key].count);

			var price = items[key].count *  items[key].price;
			total += price;

			payment_item.getElements('.Price').set('text', price.toFixed(2));

			payment_item.inject('payment_item_dummy', 'after').show();
		});

		$('payment_total').getElements('.Price').set('text', total.toFixed(2));

		$$('.Screen').hide();
		$('Payment').show();
	},

	finishPayment: function(){

		Object.keys(Order.items).each(function(key){

			$('order_item_' + key).destroy();
			$('payment_item_' + key).destroy();
		});

		Order.items = {};
		Order.calculateTotal();

		$$('.Screen').hide();
		$('Main').show();
	}
};