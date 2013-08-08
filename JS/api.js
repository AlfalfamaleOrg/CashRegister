var API = {

	POST: function(entity, action, params){

		this.CALL('POST', entity, action, params);
	},

	GET: function(entity, action, params){

		this.CALL('GET', entity, action, params);
	},

	CALL: function(method, entity, action, params){

		new Request({
			method: method,
			url: 'ajax.php?entity=' + entity + '&action=' + action,
			data: params.data,
			onSuccess: function(response){

				var data = JSON.decode(response);

				if(data.success){

					if(typeof params.success == 'function'){

						params.success(data.data);
					}
				}
				else{

					if(typeof params.failure == 'function'){

						params.failure(data.message);
					}
				}
			}
		}).send();
	}
};