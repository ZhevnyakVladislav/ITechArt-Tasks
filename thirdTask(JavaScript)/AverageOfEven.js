;(function() {
    function averageOfEven(array) {
        array = array.myFilter(function(element) { return element % 2 == 0;});
        return linearFold(array, function(a,b) {
            return (a + b);
        }) / array.length;
    };
    window.averageOfEven = averageOfEven;
})();