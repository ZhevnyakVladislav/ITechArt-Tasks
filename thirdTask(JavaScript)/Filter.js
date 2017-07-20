(function(){
    Array.prototype.myFilter =  function(func) {
        if (typeof func != "function" ) {
            return this;
        }
        var newArray = [];
        for (var i = 0; i < this.length; i++) {
            if(func(this[i], i, this)) {
                newArray.push(this[i]);
            }
        }
        return newArray;
    }
})();