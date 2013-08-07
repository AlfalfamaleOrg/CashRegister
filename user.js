var User = {

	name: null,

	init: function(){

		$('LoginForm').addEvent('submit', this.loginFormSubmit);

		API.GET('User', 'current', {}, function(data){

			User.setUser(data.name);
		});
	},

	loginFormSubmit: function(event){

		event.preventDefault();
		var name = event.target.name.value;
		var password = event.target.password.value;

		User.name = name;
		User.login(password);
	},

	login: function(password){

		API.POST('User', 'login', {
			name: this.name,
			password: password
		}, function(data){

			User.setUser(data.name);
		});
	},

	setUser: function(name){

		this.name = name;

		$$('.UserName').set('text', name);

		$$('.Screen').hide();
		$('Main').show();

		Main.loadItems();
	}
};