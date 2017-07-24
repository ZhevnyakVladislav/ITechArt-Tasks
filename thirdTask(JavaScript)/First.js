;(function() {
    Array.prototype.firstByCondition = function(funct) {
        if(typeof funct != 'function') {
            throw '';
        }
        for (var i = 0; i < this.length; i++) {
            if(funct(this[i], i, this)) {
                return this[i];
            }
        }
    }
})();