/*jslint browser: true, white: true*/
/*global Main, Order, Payment, Keypad, User, ItemManager, API, $, Selection, Screen, ParseFloat*/

var Keypad = {

	/**
	 * Initialize the keypad
	 *
	 * -Add click event to the numbers
	 */

	init: function(){

		"use strict";

		$('key-pad').getElements('.Key').addEvent(
			'click', this.keyPress.bind(this)
		);
	},

	/**
	 * Catch the click event on a key
	 *
	 * @param event
	 */

	keyPress: function(event){

		"use strict";

		var key = event.target.get('data-value'),
			field = $('keypad_input');

		if(key === 'c'){

			this.fireEvent(field.value);
			field.value = '';
		}
		else if(key === 'b'){

			field.value = field.value.substring(0, field.value.length - 1);
		}
		else{

			field.value = field.value + key;
		}
	},

	/**
	 * Add the event to call when keypad enter is pressed
	 *
	 * @param callback
	 */

	addEvent: function(callback){

		"use strict";

		// Remove previous events, only one event can exist at the same time

		this.removeEvents();
		$('key-pad').addEvent('submit', callback);
	},

	/**
	 * Fire the event
	 *
	 * @param value
	 */

	fireEvent: function(value){

		"use strict";

		$('key-pad').fireEvent('submit', value);

		// Remove all events after firing it.

		this.removeEvents();
	},

	/**
	 * Remove all events
	 */

	removeEvents: function(){

		"use strict";

		$('key-pad').removeEvents();
	}
};