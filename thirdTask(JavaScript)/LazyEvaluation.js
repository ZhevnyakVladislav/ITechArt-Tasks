;(function () {
    function lazyEvaluation(funct) {
      var params = Array.prototype.slice.call(arguments, 1);
      return function () {
        return funct.apply(this, params);
      };
    }

    window.lazyEvaluation = lazyEvaluation;
  })();
