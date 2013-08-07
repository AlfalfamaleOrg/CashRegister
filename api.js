var API = {

	POST: function(entity, action, data, success, failure){

		this.CALL('POST', entity, action, data, success, failure);
	},

	GET: function(entity, action, data, success, failure){

		this.CALL('GET', entity, action, data, success, failure);
	},

	CALL: function(method, entity, action, data, success, failure){

		new Request({
			method: method,
			url: 'ajax.php?entity=' + entity + '&action=' + action,
			data: data,
			onSuccess: function(response){

				var data = JSON.decode(response);

				if(data.success){

					if(typeof success == 'function'){

						success(data.data);
					}
				}
				else{

					if(typeof failure == 'function'){

						failure(data.message);
					}
				}
			}
		}).send();
	}
};