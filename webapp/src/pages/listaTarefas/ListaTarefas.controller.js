sap.ui.define(
	[
		"MyUI5WebApp/src/app/BaseController",
		"sap/m/MessageToast",
		'MyUI5WebApp/model/RestModel',

	],
	function (BaseController, MessageToast, RestModel) {
	"use strict";

	return BaseController.extend("MyUI5WebApp.src.pages.listaTarefas.ListaTarefas", {

		onInit : function () {
			
		},

		onItemPress(oEvent){		
			console.log(oEvent.getSource().getBindingContext().getObject());
		}

		


	});

});
