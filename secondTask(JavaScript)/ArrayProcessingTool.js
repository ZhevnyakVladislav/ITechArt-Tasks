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
         },

         getMin: function (array) {
             return Math.min.apply(this, array);
         },

         getMax: function (array) {
             return Math.max.apply(this, array);
         }, 

         getMedium: function (array) {
            array.sort(function(a,b) { return a - b });
            var index = parseInt(array.length / 2);
            if (array.length % 2 == 0)
            {
                return (array[index] + array[index - 1 ]) / 2;
            } else {
                return (array[index]);
            }
        },

        getMaxIcrSeq: function (array) {
            var sequence = [];
            var maxSequence = [];
            sequence.push(array[0]);
            for (var i = 1; i < array.length + 1; i++) {
                if (array[i] > array[i-1])
                {
                    sequence.push(array[i]);
                } else  {
                    if (maxSequence.length < sequence.length) {
                        maxSequence = sequence;
                    } 
                    sequence=[];
                    sequence.push(array[i]);
                }
            }
            return maxSequence;
        }
    }
})();