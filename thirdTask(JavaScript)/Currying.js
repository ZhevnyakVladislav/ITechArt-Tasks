(function(){
    function Currying(func) {
        var args = [];
        return function inner (a) {
            if(a) {
                args.push(a);
                return inner;
            } 
            var params = args;
            args = [];
            return func.apply(this, params);
        }
    }

    window.Currying = Currying;
})();