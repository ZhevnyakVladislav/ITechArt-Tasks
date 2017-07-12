var StringCalculator = (function() {
    return {
        addition: function(a, b) {
            return Number(a) + Number(b);
        },

        substraction: function(a, b) {
            return Number(a) - Number(b);
        },

        multiplication: function(a, b) {
            return Number(a) * Number(b);
        },

        division: function(a, b) {
            return Number(a) / Number(b);
        },

        equality: function(a, b) {
            if (Number(a) == Number(b)) {
                return true;
            }
            return false;
        }
    };
})();