describe('Interest Calculation Tests', function () {
    it('should calculate the monthly rate correctly', function () {
      const values = {
        amount: 10000,
        years: 3,
        rate: 6
      }
      expect(calculateMonthlyPayment(values)).toEqual('304.22');
    });
  
    it("should return a result with 2 decimal places", function () {
      const values = {
        amount: 9992.7,
        years: 3,
        rate: 6
      }
      expect(calculateMonthlyPayment(values)).toEqual('304.00');
    });
  
    it('should calculate short durations correctly', function () {
      const values = {
        amount: 20000,
        years: 0.25,
        rate: 5
      }
      expect(calculateMonthlyPayment(values)).toEqual('6722.30');
    });
  
    it('should calculate interest rates close to zero correctly', function () {
      const values = {
        amount: 10000,
        years: 6,
        rate: 0.05
      }
      expect(calculateMonthlyPayment(values)).toEqual('139.10');
    });
  });