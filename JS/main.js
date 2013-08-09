/*jslint browser: true, white: true*/
/*global Main, Order, Payment, Keypad, User, ItemManager, API, $, Selection, Screen, ParseFloat*/

var Main = {

	/**
	 * Initialize the main screen.
	 *
	 * -Hide the main screen
	 * -Hide the dummy item
	 */

	init: function(){

		"use strict";

		$('Main').hide();
		$('item_dummy').hide();
	},

	/**
	 * Load all items from the server
	 */

	loadItems: function(){

		"use strict";

		API.GET('Item', 'all', {
			'success': function(data){

				this.insertItems(data.items);
				ItemManager.insertItems(data.items);
			}.bind(this)
		});
	},

	/**
	 * Insert all loaded items
	 *
	 * @param items
	 */

	insertItems: function(items){

		"use strict";

		items.each(function(item){

			var product = $('item_dummy').clone();

			product.set({
				'id': ('item_' + item.id),
				'data-id': item.id,
				'events': {
					'click': function(){

						Order.addItem(item.id, item.name, item.price);
					}
				}
			});

			product.getElements('.Name').set('text', item.name);
			product.getElements('.Price').set('text', item.price);

			product.inject('item_dummy', 'before').show();
		});
	}
};