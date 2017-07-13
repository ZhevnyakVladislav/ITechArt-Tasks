(function() {
    
    function CachingCalculator(func) {
        var lastA, lastB, value;
        return function(a, b) {
            if(a==lastA && b == lastB)
            {
                console.log('cache');
                return CachingCalculator.cache;
            }
            CachingCalculator.cache = func(a,b);
            lastA = a;
            lastB = b;
            return CachingCalculator.cache;
        };
    }


    window.CachingCalculator = CachingCalculator;

})();