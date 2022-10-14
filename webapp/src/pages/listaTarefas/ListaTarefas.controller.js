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
			this.listModel = this.createRestModel("todos");
			this.listModel.get();
			this.getView().setModel(this.listModel);

		},

		onItemPress(oEvent){		
			console.log(oEvent.getSource().getBindingContext().getObject());
		}

		


	});

});
