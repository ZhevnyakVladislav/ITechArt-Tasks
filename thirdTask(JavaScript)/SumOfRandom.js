;(function() {
    function generateRandom(a, b) {
        if(!b) {
            b = a;
            a = 0;
        }
        return Math.floor(Math.random()*(b-a) + a);
    };
    
    function getRandomArray(count, a, b) {
        var array = [];
        for (var i = 0; i < count; i++) {
            array.push(generateRandom(a,b));
        }
        return array;
    }

    function sumOfTenRandom(a,b) {
        var array = getRandomArray(10, a, b)
        var sum = 0;
        var length = 0;
        array.myMap(function(element) {
            sum += element;
            length++;
        });
       return sum / length;;
    }
    window.sumOfTenRandom = sumOfTenRandom;
})();