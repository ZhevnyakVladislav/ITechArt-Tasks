(function () {
  function partialApplication() {
    var _this = this;
    var params = Array.prototype.slice.call(arguments);
    var funct = params.pop();
    return function () {
        var params2 = Array.prototype.slice.call(arguments);
        var newParams = params.concat(params2);
        return funct.apply(_this, newParams);
      };
  }

  window.partialApplication = partialApplication;
})();
