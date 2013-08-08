var Selection = {

	classname: 'Selected',

	findElement: function(element, classname){

		if(element.hasClass(classname)){

			return element;
		}

		return element.getParent('.' + classname);
	},

	select: function(target){

		this.deselectAll();
		target.addClass(this.classname);
	},

	deselect: function(target){

		target.removeClass(this.classname);
	},

	deselectAll: function(){

		$$('.' + this.classname).removeClass(this.classname);
	},

	selected: function(target){

		return target.hasClass(this.classname);
	}
};