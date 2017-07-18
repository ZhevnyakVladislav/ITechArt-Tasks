describe("BinaryConverter", function() {

    describe("Convert reverse array", function() {
        
        it("Array [0,2,0,1] from 2 to 10 is [2,1]", function() {
            assert.sameMembers(BinaryConverter.convert([0, 2, 0, 1], 2, 10), [2, 1], 'not same members');
        });

        it("Array [0,2,0,1] from 3 to 8 is [3,1]", function() {
            assert.sameMembers(BinaryConverter.convert([2, 0, 1], 3, 8), [3, 1], 'not same members');
        });

        it("Array [4,2] from 8 to 4 is [0,1,1]", function() {
            assert.sameMembers(BinaryConverter.convert([4, 2], 8, 4), [0, 1, 1], 'not same members');
        });
    });

});