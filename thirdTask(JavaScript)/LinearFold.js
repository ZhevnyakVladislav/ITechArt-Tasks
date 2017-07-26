;(function () {
    function linearFold(array, funct, initialVlue) {
      if (typeof array != 'array' && typeof funct != 'function') {
        throw 'error parameters';
      }

      var previousValue = initialVlue;
      var start = 0;
      if (initialVlue == undefined) {
        start = 1;
        previousValue = array[0];
      }

      for (var i = start; i < array.length; i++) {
        previousValue = funct(previousValue, array[i], i, array);
      }

      return previousValue;
    }

    window.linearFold = linearFold;
  })();
