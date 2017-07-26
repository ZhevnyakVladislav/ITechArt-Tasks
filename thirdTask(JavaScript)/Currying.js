(function () {
  function buildNext(func, argsCount, args) {
    return function (nextArg) {
        var newArgs = args.concat([nextArg]);
        if (newArgs.length == argsCount) {
          return func.apply(this, newArgs);
        } else {
          return buildNext(func, argsCount, newArgs);
        }
      };
  }

  function currying(func) {
    var argsCount = func.length;
    return buildNext(func, argsCount, []);
  }

  window.currying = currying;
})();
