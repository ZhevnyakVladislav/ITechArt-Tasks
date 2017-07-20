describe("CachingCalculator", function() { 

	describe("Cache function", function() { 
		
		it("Function call only once with the same parameters", function() {
			var spy = chai.spy(StringCalculator.addition); 
			var cachefunc = CachingCalculator(spy); 
			cachefunc(2,3); 
			cachefunc(2,3); 
			cachefunc(3,4);
			cachefunc(3,4);
			cachefunc(5,6);
			cachefunc(5,6);
			cachefunc(2,3); 
			chai.expect(spy).to.have.been.called.exactly(3); 
		}); 
	}); 
});