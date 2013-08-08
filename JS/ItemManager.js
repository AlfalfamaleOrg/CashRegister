var ItemManager = {

	items: {},

	init: function(){

		$('ManageItemsButton').addEvent('click', function(){

			Screen.show('ItemManager');
		});

		$('ItemManagerShowMainButton').addEvent('click', function(){

			Screen.show('Main');
		});

		$('SaveItem').addEvent('submit', this.saveItem);
	},

	insertItems: function(items){

		items.each(function(item){

			ItemManager.items[item.id] = item;

			var product = $('manage_item_dummy').clone();

			product.set({
				'id': ('manage_item_' + item.id),
				'data-id': item.id,
				'events': {
					'click': ItemManager.selectItem
				}
			});

			product.getElements('.Name').set('text', item.name);
			product.getElements('.Price').set('text', item.price);

			product.inject('manage_item_dummy', 'after').show();
		});
	},

	selectItem: function(event){

		var target = Selection.findElement(event.target, 'Item');
		var id = target.get('data-id');

		Selection.select(target);

		ItemManager.setForm(ItemManager.items[id]);
	},

	setForm: function(item){

		$('SaveItem').name.value = item.name;
		$('SaveItem').id.value = item.id;
		$('SaveItem').price_inc.value = item.price;
	},

	clearForm: function(){

		$('SaveItem').name.value = '';
		$('SaveItem').id.value = '';
		$('SaveItem').price_inc.value = '';
	},

	saveItem: function(event){

		event.preventDefault();

		var form = event.target;

		API.POST('Item', 'save', {
			'data': {
				id: form.id.value,
				name: form.name.value,
				price_inc: form.price_inc.value
			},
			'success': ItemManager.updateItem
		});
	},

	updateItem: function(data){

		Selection.deselectAll();

		ItemManager.clearForm();

		ItemManager.items[data.id] = data;

		$('manage_item_' + data.id).getElements('.Name').set('text', data.name);
		$('manage_item_' + data.id).getElements('.Price').set('text', ParseFloat(data.price, 10).toFixed(2));
	}
};