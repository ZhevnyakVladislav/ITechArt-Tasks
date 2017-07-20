describe("CachingCalculator", function() { 

	// больше тестов, например что кеширует после вызова с другими агрументами и тд
	describe("Cache function", function() { 
		
		it("Function call only once with the same parameters", function() {
			// не нужна эта строка
			var cachefunc = CachingCalculator(StringCalculator.addition); 
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