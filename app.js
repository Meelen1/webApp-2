//Дэлгэцтэй ажиллах контоллер
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

//санхүүтэй ажиллах контроллер
var financeController = (function () {})();

//Програмын холбогч контроллер
var appController = (function (uiController, financeController) {
  var DOM = uiController.getDOMstrings();

  var ctrlAddItem = function () {
    //1.оруулах өгөгдлийг дэлгэцнээс олжавна.
    console.log(uiController.getInput());
    //2. олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    //3.олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана.
    //4. төсвийг тооцоолно.
    //5. эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };

  document.querySelector(DOM.addBtn).addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
