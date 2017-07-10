var ArrayProcessingTool = (function() {
    return {
         getMaxSubSum: function (array) {
                 var maxSum = 0;
                 var sum = 0;
                 for (var i = 0; i < array.length; i++) {
                     sum += array[i];
                     if (maxSum < sum) {
                         maxSum = sum;
                     } else if (sum < 0) {
                         sum = 0;
                     }
                 }
                 return  maxSum;
         } 
    }
})();