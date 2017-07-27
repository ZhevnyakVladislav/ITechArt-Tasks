// you can import individual functions with curvy brackets
import {getAsync, setAsync} from './Promise';

(function() {
    window.getAsync = getAsync;
    window.setAsync = setAsync;
})();
