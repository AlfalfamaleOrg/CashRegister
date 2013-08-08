var Main = {

	init: function(){

		$('Main').hide();
		$('item_dummy').hide();
	},

	loadItems: function(){

		API.GET('Item', 'all', {
			'success': function(data){

				this.insertItems(data.items);
			}.bind(this)
		});
	},

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

			product.inject('item_dummy', 'after').show();
		});
	}
};