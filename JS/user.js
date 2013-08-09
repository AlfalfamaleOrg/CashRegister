/*jslint browser: true, white: true*/
/*global $, $$, API, Screen*/

var User = {

	name: null,

	init: function(){

		"use strict";

		$('LoginForm').addEvent('submit', this.loginFormSubmit.bind(this));
		$('logout').addEvent('click', this.logout.bind(this));

		API.GET('User', 'current', {
			'success': function(data){

				this.setUser(data.name);
			}.bind(this)
		});
	},

	loginFormSubmit: function(event){

		"use strict";

		event.preventDefault();
		var name = event.target.name.value,
			password = event.target.password.value;

		this.name = name;
		this.login(password);
	},

	login: function(password){

		"use strict";

		API.POST('User', 'login', {
			'data': {
				name: this.name,
				password: password
			},
			'success': function(data){

				this.setUser(data.name);
			}.bind(this)
		});
	},

	logout: function(){

		"use strict";

		API.POST('User', 'logout', {
			'success': function(){

				location.reload();
			}
		});
	},

	setUser: function(name){

		"use strict";

		this.name = name;

		$$('.UserName').set('text', name);

		Main.loadItems();

		Screen.show('Main');
	}
};