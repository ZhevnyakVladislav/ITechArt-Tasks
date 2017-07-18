var StringCalculator = (function() {
    
    function replace(value) {
        if (typeof value == 'string') {
            return Number(value.replace(/,/, '.'));
        } 
        return Number(value);
    }

    function convertNumber(a, b, operand) {
        var length1 = a.toString().split(/[\.|,]/)[1];
        var length2 = b.toString().split(/[\.|,]/)[1];
        length1 = (typeof length1 == 'undefined') ? 0 : length1.length;
        length2 = (typeof length2 == 'undefined') ? 0 : length2.length;
        var length = Math.max(length1,length2);
        a = replace(a) * Math.pow(10,length);
        b = replace(b) * Math.pow(10,length);
        if (operand == '*') {
            return (eval(a + operand + b)) / Math.pow(10, length + length);
        } else if (operand == '/') {
            return (eval(a + operand + b)) / Math.pow(10, length - length);
        }
        return (eval(a + operand + b)) / Math.pow(10,length);
    }

    return {
        
        addition: function(a, b) {
            return convertNumber(a, b, '+');
        },

        substraction: function(a, b) {
            return convertNumber(a, b, '-');
        },

        multiplication: function(a, b) {
            return convertNumber(a, b, '*');
        },

        division: function(a, b) {
            return convertNumber(a, b, '/') ;
        },

        equality: function(a, b) {
            if (replace(a) == replace(b)) {
                return true;
            }
            return false;
        }
    };
})();