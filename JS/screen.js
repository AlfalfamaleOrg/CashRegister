var Screen = {

	show: function(screen){

		$$('.Screen').hide();
		$(screen).show();
	},

	openPopup: function(screen){

		$(screen).show();
	},

	closePopup: function(screen){

		$(screen).hide();
	}
};