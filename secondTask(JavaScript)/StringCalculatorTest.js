describe("StringCalculator", function() {

    describe("String addition", function() {
        
        it("Add number 5 to 5 number is number 10", function() {
                assert.equal(StringCalculator.addition(5,5), 10);
        });

        it('Add string \'2.5\' to number 2.5 is number 5', function() {
            assert.isNumber(StringCalculator.addition('2,3',4),'expected number');
        })

        it('Add string \'2,3\' to string \'8.5\' is number 10.8', function() {
            assert.isNumber(StringCalculator.addition('2,3','8.5'),'expected number');
        })
    });

    describe("String substraction", function() {
        
        it("Subtract number 6 to 5 number is number 1", function() {
                assert.equal(StringCalculator.substraction(6,5), 1);
        });

        it('Subtract string \'6.5\' to number 4.4 is number 2.1', function() {
            assert.isNumber(StringCalculator.substraction('6.5',4.1),'expected number');
        })

        it('Subtract string \'8.5\' to string \'2,3\' is number 10.8', function() {
            assert.isNumber(StringCalculator.substraction('8.5','2,3'),'expected number');
        })
    });

    describe("String multiplication", function() {
        
        it("Multiply number 6 to 5 number is number 30", function() {
                assert.equal(StringCalculator.multiplication(6,5), 30);
        });

        it('Multiply string \'6.5\' to number 4.4 is number 28.6', function() {
            assert.isNumber(StringCalculator.multiplication('6.5',4.1),'expected number');
        })

        it('Multiply  string \'8.5\' to string \'2,3\' is number 19.55', function() {
            assert.isNumber(StringCalculator.multiplication('8.5','2,3'),'expected number');
        })
    });

    describe("String division", function() {
        
        it("Devide number 24 by 4 number is number 6", function() {
                assert.equal(StringCalculator.division(24, 4), 6);
        });

        it('Devide string \'6.5\' by number 4.4 is number 1.47', function() {
            assert.isNumber(StringCalculator.multiplication('6.5',4.1),'expected number');
        })

        it('Devide  string \'8.5\' by string \'2,3\' is number 3.69', function() {
            assert.isNumber(StringCalculator.multiplication('8.5','2,3'),'expected number');
        })
    });

    describe("String equality", function() {
        
        it("Number 5 equal number 5", function() {
                assert.equal(StringCalculator.equality(5,5),true);
        });

        it('String \'2.5\' equal number 2.5', function() {
            assert.equal(StringCalculator.equality('2.5',2.5),true);
        })

        it('String \'2,3\' equal number 2.3', function() {
            assert.equal(StringCalculator.equality('2,3',2.3),true);
        })
    });
});