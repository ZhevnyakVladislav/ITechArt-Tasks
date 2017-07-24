(function(){
    // wrong
    function Currying(func) {
        return function (a) {
            var args = [];
            args.push(a);
            var inner = function (b) {
                args.push(b);
                if(args.length == func.length) {
                    return func.apply(this, args.splice(0,args.length));
                }
                return inner;
            }
            return inner;
        }
    }
    window.Currying = Currying;
})();
