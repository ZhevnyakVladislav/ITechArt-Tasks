;(function () {
    function linearUnfold(funct, initialVlue) {
      if (typeof funct != 'function' && !initialVlue) {
        throw 'error parameters';
      }

      var array = [];
      var value = [0, initialVlue];
      do {
        value = funct(value[1]);
        array.push(value[0]);
      } while (value[1]);
      return array;
    }

    window.linearUnfold = linearUnfold;
  })();
