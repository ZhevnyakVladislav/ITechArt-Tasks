var StringCalculator = (function() {
    return {
        addition: function(a, b) {
            console.log();
            return Number(a.replace(/,/, '.')) + Number(b.replace(/,/, '.'));
        },

        substraction: function(a, b) {
            return Number(a.replace(/,/, '.')) - Number(b.replace(/,/, '.'));
        },

        multiplication: function(a, b) {
            return Number(a.replace(/,/, '.')) * Number(b.replace(/,/, '.'));
        },

        division: function(a, b) {
            return Number(a.replace(/,/, '.')) / Number(b.replace(/,/, '.'));
        },

        equality: function(a, b) {
            if (Number(a.replace(/,/, '.')) == Number(b.replace(/,/, '.'))) {
                return true;
            }
            return false;
        }
    };
})();