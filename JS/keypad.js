var Keypad = {

	init: function(){

		$('key-pad').getElements('.Key').addEvent(
			'click', this.keyPress.bind(this)
		);
	},

	keyPress: function(event){

		var key = event.target.get('data-value');
		var field = $('keypad_input');

		if(key == 'c'){

			this.fireEvent(field.value);
			field.value = '';
		}
		else if(key == 'b'){

			field.value = field.value.substring(0, field.value.length - 1);
		}
		else{

			field.value = field.value + key;
		}
	},

	addEvent: function(callback){

		this.removeEvents();
		$('key-pad').addEvent('submit', callback);
	},

	fireEvent: function(value){

		$('key-pad').fireEvent('submit', value);
		this.removeEvents();
	},

	removeEvents: function(){

		$('key-pad').removeEvents();
	}
};