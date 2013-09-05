/*jslint browser: true, white: true*/
/*global Main, Order, Payment, Keypad, User, ItemManager, Screen*/

window.addEvent('domready', function(){

	"use strict";

	Main.init();
	Order.init();
	Payment.init();
	Keypad.init();
	Loginpad.init();
	User.init();
	ItemManager.init();
	Screen.init();
});