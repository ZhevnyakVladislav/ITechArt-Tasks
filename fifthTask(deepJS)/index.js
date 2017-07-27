import {getAsync, setAsync, getAsyncFew, getAsyncAwait} from './Promise';

(function() {
    window.getAsync = getAsync;
    window.setAsync = setAsync;
    window.getAsyncFew = getAsyncFew;
    window.getAsyncAwait = getAsyncAwait;
})();
