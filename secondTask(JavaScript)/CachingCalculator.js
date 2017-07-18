(function() {

    function CachingCalculator(func) {
        var cache = [];
        return function(a, b) {
            var value = cache.find(function(obj) {
                if(obj.firstVar == a && obj.secondVar == b) {
                    return obj;
                }
            });
            if (value) {
                return value.value;
            }
            value =  func(a,b);
            cache.push({ firstVar: a, secondVar:b, value: value});
            return value;
        };
    }
    window.CachingCalculator = CachingCalculator;

})();