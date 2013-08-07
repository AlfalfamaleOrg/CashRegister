var Main = {

	init: function(){

		$('Main').hide();
		$('item_dummy').hide();
		$('order_item_dummy').hide();
	},

	loadItems: function(){

		API.GET('Item', 'all', {}, function(data){
			Main.insertItems(data.items);
		});
	},

	insertItems: function(items){

		items.each(function(item){

			var product = $('item_dummy').clone();

			product.set('id', 'item_' + item.id);
			product.getElements('.Name').set('text', item.name);
			product.getElements('.Price').set('text', item.price);

			product.addEvent('click', function(event){

				Order.addItem(item.id, item.name, item.price);
			});

			product.inject('item_dummy', 'after').show();
		});
	}
};