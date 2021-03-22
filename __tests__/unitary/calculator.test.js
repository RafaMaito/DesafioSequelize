import Calculator from '../../src/app/services/Calculator';

describe('calculator', () => {
  describe('sum', () => {
    it('should sum two numbers when...', () => {
      expect.assertions(1);
      const calculator = new Calculator();
      const result = calculator.sum(2, 2);

      expect(result).toBe(4);
    });
    it('should sum two negative numbers...', () => {
      expect.assertions(1);
      const calculator = new Calculator();
      const result2 = calculator.sum(-10, -2);

      expect(result2).toBe(-12);
    });
    it('should sum two strings numbers...', () => {
      expect.assertions(2);
      const calculator = new Calculator();

      const result = calculator.sum('2', '2');
      expect(result).toBe(4);

      const result2 = calculator.sum('2', 2);
      expect(result2).toBe(4);
    });
  });
});
