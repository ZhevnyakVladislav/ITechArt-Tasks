describe("CachingCalculator", function() {

    describe("Cache function", function() {
        
        it("Array [0,2,0,1] from 2 to 10 is [2,1]", function() {
            var cachefunc = CachingCalculator(StringCalculator.addition);
            var spy = chai.spy(StringCalculator.addition(2,3));
            cachefunc(2,3);
            spy.should.have.been.called()
        });
    });
});