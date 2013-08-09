var Main = {

	/**
	 * Initialize the main screen.
	 *
	 * -Hide the main screen
	 * -Hide the dummy item
	 */

	init: function(){

		$('Main').hide();
		$('item_dummy').hide();
	},

	/**
	 * Load all items from the server
	 */

	loadItems: function(){

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

		items.each(function(item){

			var product = $('item_dummy').clone();

			product.set({
				'id': ('item_' + item.id),
				'data-id': item.id,
				'events': {
					'click': function(event){

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