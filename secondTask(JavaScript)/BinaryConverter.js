var BinaryConverter = (function () {

    
    function toSystem(value, system) {
        var a = 1;
        while(a > 1) {
            a = value % system;
            if (a = 1);

        }
    }

    return {
        from2To10: function(array) {
            var value = 0;
            for (var i = 0; i < array.length ; i++) {
                if (array[i] == 1) {
                    value += Math.pow(2, i);
                }
            }
            return value;
        },
        // REVIEW: не запилено
        from10To2: function (array) {
            
            var value = 0;

            console.log(15/2);
            
            return true;
        }
    }    
})();