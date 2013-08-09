/*jslint browser: true, white: true*/
/*global Main, Order, Payment, Keypad, User, ItemManager, API, $, Selection, Screen, ParseFloat*/

var Payment = {

	init: function(){

		"use strict";

		$('Payment').hide();
		$('payment_item_dummy').hide();

		$('payment_complete').addEvent('click', this.finishPayment.bind(this));
		$('payment_cancel').addEvent('click', this.clear);
	},

	show: function(items){

		"use strict";

		var total = 0;

		Object.keys(items).each(function(key){

			var payment_item = $('payment_item_dummy').clone(),
				price = items[key].count * items[key].price;

			payment_item.set('id', 'payment_item_' + key);
			payment_item.getElements('.Name').set('text', items[key].name);
			payment_item.getElements('.Count').set('text', items[key].count);

			total += price;

			payment_item.getElements('.Price').set('text', price.toFixed(2));

			payment_item.inject('payment_item_dummy', 'after').show();
		});

		$('payment_total').getElements('.Price').set('text', total.toFixed(2));

		Screen.show('Payment');
	},

	finishPayment: function(){

		"use strict";

		this.clear();
		Order.clear();
	},

	clear: function(){

		"use strict";

		Object.keys(Order.items).each(function(key){

			$('payment_item_' + key).destroy();
		});

		Screen.show('Main');
	}
};