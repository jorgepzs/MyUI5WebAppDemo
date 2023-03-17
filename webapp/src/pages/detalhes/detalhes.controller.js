sap.ui.define(
  ["sap/ui/core/mvc/Controller", ],
  function (Controller) {
    "use strict";

    return Controller.extend("MyUI5WebApp.src.pages.detalhes.detalhes", {
      onInit: function () {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter
          .getRoute("detalhes")
          .attachPatternMatched(this._onObjectMatched, this);
      },

      __onObjectMatched: function (oEvent) {
        this.getView().bindElement({
          path:
            "/" +
            window.decodeURIComponent(
              oEvent.getParameter("arguments").todoPath
            ),
          model: "todo",
        });
        console.log(todoPath);
      },

      onNavBack: function () {},
    });
  }
);
