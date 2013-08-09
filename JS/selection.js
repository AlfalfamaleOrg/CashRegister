/*jslint browser: true, white: true*/
/*global Main, Order, Payment, Keypad, User, ItemManager, API, $, $$, Selection, Screen, ParseFloat*/

var Selection = {

	classname: 'Selected',

	findElement: function(element, classname){

		"use strict";

		if(element.hasClass(classname)){

			return element;
		}

		return element.getParent('.' + classname);
	},

	select: function(target){

		"use strict";

		this.deselectAll();
		target.addClass(this.classname);
	},

	deselect: function(target){

		"use strict";

		target.removeClass(this.classname);
	},

	deselectAll: function(){

		"use strict";

		$$('.' + this.classname).removeClass(this.classname);
	},

	selected: function(target){

		"use strict";

		return target.hasClass(this.classname);
	}
};