/*jslint browser: true, white: true*/
/*global Main, Order, Payment, Keypad, User, ItemManager, API, $, Selection, Screen, ParseFloat*/

var Screen = {

	init: function(){

		$$('.ChangeScreen').addEvent('click', function(event){

			var target = event.target.get('data-screen');

			if(target === 'reload'){

				location.reload();
				return;
			}

			if($(target)){

				Screen.show(target);
				return;
			}

			console.log('Element met id: ' + target + ' bestaat niet!');
		});
	},

	show: function(screen){

		"use strict";

		$$('.Screen').hide();
		$(screen).show();
	},

	openPopup: function(screen){

		"use strict";

		$(screen).show();
	},

	closePopup: function(screen){

		"use strict";

		$(screen).hide();
	}
};