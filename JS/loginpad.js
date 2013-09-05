/*jslint browser: true, white: true*/
/*global Main, Order, Payment, Keypad, User, ItemManager, API, $, Selection, Screen, ParseFloat*/

var Loginpad = {

	target: null,

	/**
	 * Initialize the keypad
	 *
	 * -Add click event to the keys
	 */

	init: function(){

		"use strict";

		$('LoginForm').getElements('input').addEvent('focus', function(event){

			this.target = event.target;
		}.bind(this));

		$('LoginForm').name.focus();

		$('login-key-pad').getElements('button').addEvent(
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

		var key = event.target.get('text'),
			field = this.target;

		if(key === 'Backspace'){

			field.value = field.value.substring(0, field.value.length - 1);
		}
		else{

			field.value = field.value + key;
		}
	}
};