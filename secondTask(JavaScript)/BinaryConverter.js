var BinaryConverter = (function () {
    return {
        from2To10: function(array) {
            var number = array.join('');
            return parseInt(number, 2);
        },
        from10To2: function (number) {
            return parseInt(number).toString(2).split('');
        }
    }    
})();