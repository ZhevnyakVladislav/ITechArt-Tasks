(function(){
    function partialApplication() {
        var context = this;
        var params = Array.prototype.slice.call(arguments);
        var funct = params.pop();
        return function() {
            var params2 = Array.prototype.slice.call(arguments);
            var newParams = params.concat(params2);
            return funct.apply(context,newParams);
        }
    }
    window.partialApplication = partialApplication;
})();