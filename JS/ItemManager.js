var ItemManager = {

	items: {},

	init: function(){

		$('ManageItemsButton').addEvent('click', function(){

			Screen.show('ItemManager');
		});

		$('ItemManagerShowMainButton').addEvent('click', function(){

			location.reload();
		});

		$('SaveItem').addEvent('submit', this.formSubmit);
		$('ItemManagerClearFormButton').addEvent('click', function(){

			ItemManager.clearForm();
			Selection.deselectAll();
		});

		$('ItemManagerDeleteItemButton').addEvent('click', function(){

			ItemManager.deleteItem($('SaveItem'));
		});
	},

	insertItems: function(items){

		items.each(ItemManager.insertItem);
	},

	insertItem: function(item){

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

		product.inject('manage_item_dummy', 'before').show();
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

	formSubmit: function(event){

		event.preventDefault();

		var form = event.target;

		if(form.id.value){

			ItemManager.saveItem(form);
		}
		else{

			ItemManager.addItem(form);
		}
	},

	saveItem: function(form){

		API.POST('Item', 'save', {
			'data': {
				id: form.id.value,
				name: form.name.value,
				price_inc: form.price_inc.value
			},
			'success': ItemManager.updateItem
		});
	},

	addItem: function(form){

		API.POST('Item', 'add', {
			'data': {
				name: form.name.value,
				price_inc: form.price_inc.value
			},
			'success': function(data){

				ItemManager.insertItem(data);
				ItemManager.clearForm();
			}
		});
	},

	deleteItem: function(form){

		API.POST('Item', 'delete', {
			'data': {
				id: form.id.value
			},
			'success': function(){

				$('manage_item_' + form.id.value).destroy();
				ItemManager.clearForm();
				Selection.deselectAll();
			}
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