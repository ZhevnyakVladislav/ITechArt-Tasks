var ArrayProcessingTool = (function () {
    return {
        getMaxSubSum1: function (array) {
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

                return maxSum;
              },

        getMaxSubSum2: function (array) {
            var maxSum = 0;
            var sum = 0;
            for (var i = 0; i < array.length; i++) {
              var subArr = [];
              for (var j = 0; j < array.length - i; j++) {
                subArr.push(array.slice(i, j + i + 1));
                var sum = subArr[subArr.length - 1].reduce(function (sum, current) {
                        return sum + current;
                      }, 0);

                if (maxSum < sum) {
                  maxSum = sum;
                } else if (sum < 0) {
                  sum = 0;
                }
              }
            }

            return maxSum;
          },

        getMin: function (array) {
            return Math.min.apply(this, array);
          },

        getMax: function (array) {
            return Math.max.apply(this, array);
          },

        getMedium: function (array) {
            array.sort(function (a, b) { return a - b; });

            var index = parseInt(array.length / 2);
            if (array.length % 2 == 0)
            {
              return (array[index] + array[index - 1]) / 2;
            } else {
              return (array[index]);
            }
          },

        getMaxIcrSeq: function (array) {
            var sequence = [];
            var maxSequence = [];
            sequence.push(array[0]);
            for (var i = 1; i < array.length + 1; i++) {
              if (array[i] > array[i - 1]) {
                sequence.push(array[i]);
              } else {
                if (maxSequence.length < sequence.length) {
                  maxSequence = sequence;
                }

                sequence = [];
                sequence.push(array[i]);
              }
            }

            return maxSequence;
          },
      };
  })();
