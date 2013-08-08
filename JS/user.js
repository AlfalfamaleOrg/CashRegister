var User = {

	name: null,

	init: function(){

		$('LoginForm').addEvent('submit', this.loginFormSubmit.bind(this));
		$('logout').addEvent('click', this.logout.bind(this));

		API.GET('User', 'current', {}, function(data){

			this.setUser(data.name);
		}.bind(this));
	},

	loginFormSubmit: function(event){

		event.preventDefault();
		var name = event.target.name.value;
		var password = event.target.password.value;

		this.name = name;
		this.login(password);
	},

	login: function(password){

		API.POST('User', 'login', {
			name: this.name,
			password: password
		}, function(data){

			this.setUser(data.name);
		}.bind(this));
	},

	logout: function(){

		API.POST('User', 'logout', {}, function(){

			location.reload();
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