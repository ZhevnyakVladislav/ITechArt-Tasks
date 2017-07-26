// you can import individual functions with curvy brackets
import MyPromise from './Promise';

(function () {
  window.getAsync = MyPromise.getAsync;
  window.setAsync = MyPromise.setAsync;
})();
