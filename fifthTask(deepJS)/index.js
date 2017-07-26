import MyPromise from './Promise';

(function () {
  window.getAsync = MyPromise.getAsync;
  window.setAsync = MyPromise.setAsync;
})();
