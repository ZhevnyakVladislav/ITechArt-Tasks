var BinaryConverter = (function () {

    function convertToNumber(value, from) {
        var result = 0;
        for (var i = 0; i < value.length; i++) {
            result += value[i] * Math.pow(from,i);
        }
        return result;
    }
    
    function convertToEnd(value, to) {
        var array = [];
        while( value >= to ) {
            var a = value % to;
            console.log(a);
            array.push(a);
            value = Math.floor(value / to);
        }
        array.push(value);
        return array;
    }
    return {
        convert: function(value, from, to) {
            return convertToEnd(convertToNumber(value,from),to);
        }
    }

})();