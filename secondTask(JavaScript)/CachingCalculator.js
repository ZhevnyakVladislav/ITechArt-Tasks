(function() {

    function CachingCalculator(func) {
        var lastA, lastB;
        var cache = [];
        return function(a, b) {
            var value = cache.find(function(obj) {
                if(obj.firstVar == a && obj.secondVar == b) {
                    return obj.value;
                }
            });
            if (value) {
                return value;
            }
            value = func(a,b);
            cache.push({ firstVar: a, secondVar:b, value: value});
            lastA = a;
            lastB = b;
            return value;
        };
    }


    window.CachingCalculator = CachingCalculator;

})();