import BinaryConverter from './BinaryConverter';
import CachingCalculator from'./CachingCalculator';
import PartialApplication from'./PartialApplication';
import LazyEvaluation from'./LazyEvaluation';
import LinearFold from'./LinearFold';


(function(){
    window.lazyEvaluation = LazyEvaluation;
    window.linearFold = LinearFold;
    window.partialApplication = PartialApplication;
    window.cachingCalculator = CachingCalculator;
    window.BinaryConverter = BinaryConverter;
})();