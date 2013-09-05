/*jslint browser: true, white: true*/
/*global Main, Order, Payment, Keypad, User, ItemManager, API, $, Selection, Screen, ParseFloat*/

var ItemManager = {

	items: {},
	currentId: {},
	form: null,

	init: function(){

		"use strict";

		this.form = $('ManageItemForm');

		this.form.addEvent('submit', this.formSubmit);

		$('ItemManager').getElements('.ClearSelection').addEvent('click', this.clearSelection.bind(this));

		$('ItemManagerDeleteItemButton').addEvent('click', this.deleteItem.bind(this));
	},

	insertItems: function(items){

		"use strict";

		items.each(this.insertItem.bind(this));
	},

	insertItem: function(item){

		"use strict";

		item.price_exc = ((item.price_inc / (100 + item.tax)) * 100).toFixed(2);
		item.cost_inc = ((item.cost_exc / 100) * (100 + item.tax)).toFixed(2);
		item.profit = (((item.price_exc - item.cost_exc) / item.cost_exc) * 100).toFixed(0);

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
		product.getElements('.Profit').set('text', item.frofit);

		product.inject('manage_item_dummy', 'before').show();

		ItemManager.clearSelection();
	}.bind(this),

	selectItem: function(event){

		"use strict";

		var target = Selection.findElement(event.target, 'Item');

		ItemManager.currentId = target.get('data-id');

		Selection.select(target);

		var item = ItemManager.items[ItemManager.currentId];

		ItemManager.fillForm(item);
	},

	clearSelection: function(){

		"use strict";

		this.form.name.value = '';
		this.form.id.value = '';
		this.form.price_inc.value = '';

		Selection.deselectAll();
	},

	fillForm: function(item){

		this.form.name.value = item.name;
		this.form.id.value = item.id;
		this.form.price_exc.value = item.price_exc;
		this.form.price_inc.value = item.price_inc;
		this.form.cost_exc.value = item.cost_exc;
		this.form.cost_inc.value = item.cost_inc;
		this.form.profit.value = item.profit + '%';
	},

	formSubmit: function(event){

		"use strict";

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

		"use strict";

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

		"use strict";

		API.POST('Item', 'add', {
			'data': {
				name: form.name.value,
				price_inc: form.price_inc.value
			},
			'success': ItemManager.insertItem
		});
	},

	deleteItem: function(){

		"use strict";

		API.POST('Item', 'delete', {
			'data': {
				id: this.form.id.value
			},
			'success': function(){

				$('manage_item_' + this.form.id.value).destroy();
				this.clearSelection();
			}.bind(this)
		});
	},

	updateItem: function(data){

		"use strict";

		ItemManager.clearSelection();

		ItemManager.items[data.id] = data;

		$('manage_item_' + data.id).getElements('.Name').set('text', data.name);
		$('manage_item_' + data.id).getElements('.Price').set('text', ParseFloat(data.price, 10).toFixed(2));
	}
};