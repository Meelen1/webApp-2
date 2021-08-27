var uiController = (function () {
  var x = 100;

  function add(y) {
    return x + y;
  }

  return {
    publicAdd: function (a) {
      a = add(a);
      console.log("боловсруулсан утга : " + a);
    },
  };
})();
var find = (function () {})();
var financeController = (function () {})();

var appController = (function (uiController, fnController) {
  uiController.publicAdd(50);
})(uiController, financeController);

var hunController = (function () {
  var bodol = "Javascript толгой эргүүлмээр юм";
  function tsusGuih() {}

  function huchilturugchiigAgaaraasSorjTsusruuOruulah() {}

  return {
    yarih: function () {
      console.log("hi");
    },
  };
})();
