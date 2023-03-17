sap.ui.define(
  [
    "MyUI5WebApp/src/app/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/base/Log",
  ],
  function (BaseController, Filter, FilterOperator) {
    "use strict";

    return BaseController.extend(
      "MyUI5WebApp.src.pages.listaTarefas.ListaTarefas",
      {
        onPress: function (oEvent) {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          var oItem = oEvent.getSource();

          oRouter.navTo("detalhes", {
            todoPath: window.encodeURIComponent(
              oItem.getBindingContext("todo").getPath().substr(1)
            ),
          });
        },
        onFilterTodo: function (oEvent) {
          var aFilter = [];

          var sQuery = oEvent.getParameter("query");

          if (sQuery) {
            aFilter.push(new Filter("title", FilterOperator.Contains, sQuery));
          }

          var oTodoList = this.byId("todosTable");
          var oBinding = oTodoList.getBinding("items");

          oBinding.filter(aFilter);
        },
      }
    );
  }
);
