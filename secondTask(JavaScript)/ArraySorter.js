var ArraySorter = (function () {
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    };

    return {
        quickSort: function (array) {
            if (array.length <= 1) { return array; }

            var less = [];
            var greater = [];
            var pivot = array.splice(Math.floor(array.length / 2), 1);
            for (var i = array.length - 1; i >= 0; i--) {
              if (array[i] <= pivot) {
                less.push(array[i]);
              } else {
                greater.push(array[i]);
              }
            }

            return this.quickSort.call(this, less)
                .concat(pivot, this.quickSort.call(this, greater));
          },

        heapSort: function (array) {
            function heapOrder(array) {
              for (var i = Math.floor(array.length / 2); i >= 0; i--) {
                downHeap(array, i, array.length);
              }
            };

            function downHeap(heap, i, max) {
              var I_BIG;
              var c1;
              var c2;
              while (i < max) {
                I_BIG = i;
                c1 = 2 * i + 1;
                c2 = c1 + 1;
                if (c1 < max && heap[c1] > heap[I_BIG])
                    I_BIG = c1;
                if (c2 < max && heap[c2] > heap[I_BIG])
                    I_BIG = c2;
                if (I_BIG == i) return;
                swap(heap, i, I_BIG);
                i = I_BIG;
              }
            };

            heapOrder(array);
            for (var end = array.length - 1; end > 0; end--) {
              swap(array, 0, end);
              downHeap(array, 0, end);
            }

            return array;
          },

        bubbleSort: function (array) {
            var length = array.length;
            for (var i = length - 1; i > 0; i--) {
              for (var j = (length - i); j > 0; j--) {
                if (array[j] < array[j - 1]) {
                  swap(array, j, j - 1);
                }
              }
            }

            return array;
          },

        insertSort: function (array) {
            var length = array.length;
            for (var i = 1; i < length; i++) {
              var tmp = array[i];
              for (var j = i - 1; j >= 0 && array[j] > tmp; j--) {
                array[j + 1] = array[j];
              }

              array[j + 1] = tmp;
            }

            return array;
          },
      };
  })();
