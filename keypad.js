var Keypad = {

	init: function(){

		$('key-pad').getElements('.Key').addEvent('click', this.keyPress);
	},

	keyPress: function(event){

		var key = event.target.get('data-value');

		if(key == 'c'){

			$('key-pad').fireEvent('submit', $('keypad_input').value);
			$('keypad_input').value = '';
		}
		else if(key == 'b'){

			var new_value = $('keypad_input').value.substring(0, $('keypad_input').value.length - 1);

			$('keypad_input').value = new_value;
		}
		else{

			var current = $('keypad_input').value;

			$('keypad_input').value = (current + key);
		}
	}
};