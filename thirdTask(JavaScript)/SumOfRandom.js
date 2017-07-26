;(function () {
    function generateRandom(a, b) {
      if (!b) {
        b = a;
        a = 0;
      }

      return Math.floor(Math.random() * (b - a) + a);
    };

    function getRandomArray(count, a, b) {
      return linearUnfold(function (length) {
        for (var i = 0; i < length; i++) {
          return [generateRandom(a, b), i];
        }
      }, count);
    }

    function sumOfTenRandom(a, b) {
      var array = getRandomArray(10, a, b);
      return linearFold(array, function (x, y) {
        return x + y;
      });
    }

    window.sumOfTenRandom = sumOfTenRandom;
  })();
