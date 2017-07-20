;(function() {
    function averageOfEven(array) {
        var value = 0;
        var length = 0;
        array.myFilter(function(element) { return element % 2 == 0;})
            .myMap(function(element) { 
            value+= element;
            length++;
        });
        return value / length;
    };
    window.averageOfEven = averageOfEven;
})();