(function() {

    // REVIEW: сохраняется только предыдущий результат
    // если сделать
    // add(1,2)
    // add(2,3)
    // add(1,2) -- берется не из кеша
    //

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