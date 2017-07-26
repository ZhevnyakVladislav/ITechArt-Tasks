(function () {
  Array.prototype.myMap =  function (func) {
        if (typeof func != 'function') {
          return this;
        }

        var newArray = [];
        for (var i = 0; i < this.length; i++) {
          newArray.push(func(this[i], i, this));
        }

        return newArray;
      };
})();
