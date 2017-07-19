(function(){
    Array.prototype.myMap =  function(func) {
        if (typeof func != "function" ) {
            return this;
        }
        var newArray = [];
        for (var i = 0; i < this.length; i++) {
            var element = func(this[i], i, this);
            if(element) {
                newArray.push(element);
            }
        }
        return newArray;
    }
})();
