(function(){
    function PartialApplication() {
        var context = this;
        params = Array.prototype.slice.call(arguments);
        var funct = params.pop();
        return function() {
            params2 = Array.prototype.slice.call(arguments);
            var newParams = params.concat(params2);
            return funct.apply(context,newParams);
        }
    }
    window.PartialApplication = PartialApplication;
})();