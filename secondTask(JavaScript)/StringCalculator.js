var StringCalculator = (function() {
    
    function replace(value) {
        if (typeof value == 'string') {
            return Number(value.replace(/,/, '.'));
        } 
        return Number(value);
    }
    return {
        
        addition: function(a, b) {
            console.log();
            return replace(a) + replace(b);
        },

        substraction: function(a, b) {
            return replace(a) - replace(a);
        },

        multiplication: function(a, b) {
            return replace(a) * replace(a);
        },

        division: function(a, b) {
            return replace(a) / replace(a);
        },

        equality: function(a, b) {
            if (replace(a) == replace(a)) {
                return true;
            }
            return false;
        }
    };
})();