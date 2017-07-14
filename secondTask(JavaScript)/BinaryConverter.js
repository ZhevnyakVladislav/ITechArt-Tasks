var BinaryConverter = (function () {

    
    function to2System(number) {
        var array = [];
        value = number;
        do {
            a = value / 2;
            value = parseInt(a);
            array.push( a == value ? 0 : 1);
        } while(a >= 2)
        array.push(Math.floor(a));
        return array;
    }

    function binaryArrSum(a, b) {
        var length = a.length > b.length ? a.length : b.length;
        var value = [];
        var add = 0;
        for (var  i = 0; i < length; i++) {
            a[i] = isNaN(a[i]) ? 0 : a[i];
            b[i] = isNaN(b[i]) ? 0 : b[i];
            var curr = a[i] + b[i] + add;
            if (curr == 2) {
                value.push(0);
                var add = 1;
            } else if (curr == 3) {
                value.push(1);
                add = 1;
            } else {
                value.push(curr);
                add = 0;
            }
        }
        value.push(add);
        return value;
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
        
        from10To2: function (array) {
            var numberArr = [];
            value = [0];
            for (var i = 0; i < array.length; i++) {
                value = binaryArrSum(value, to2System(array[i] * Math.pow(10,i)));
            }
            return parseInt(value.reverse().join(''));
        }
    }    
})();