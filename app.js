//Дэлгэцтэй ажиллах контоллер
var uiController = (function () {})();

//санхүүтэй ажиллах контроллер
var financeController = (function () {})();

//Програмын холбогч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    //1.оруулах өгөгдлийг дэлгэцнээс олжавна.
    console.log("дэлгэцнээс өгөгдөл авах хэсэг");
    //2. олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    //3.олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана.
    //4. төсвийг тооцоолно.
    //5. эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
