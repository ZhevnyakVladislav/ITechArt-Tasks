(function(){
    function Currying(func) {
        var args = [];
        return function inner(a) {
            args.push(a);
            if(args.length == func.length) {
                return func.apply(this, args.splice(0,args.length));
            }
            return inner;
        }
    }

    window.Currying = Currying;
})();