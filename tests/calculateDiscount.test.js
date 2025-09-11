import calculateDiscount from '../utils/calculateDiscount';

describe('calculateDiscount', () => {
    it('should return discounted price correctly', () => {
        const testCases = [
            {
                price: 100,
                discount: 50,
                result: 50,
            },
            {
                price: 10,
                discount: 70,
                result: 3,
            },
            {
                price: 100521,
                discount: 10,
                result: 90468.9,
            },
            {
                price: 630,
                discount: 25,
                result: 472.5,
            },
            {
                price: 7865321,
                discount: 64,
                result: 2831515.56,
            },
        ];
        testCases.forEach(test => {
            const result = calculateDiscount(test.price, test.discount);
            expect(result).toBe(test.result);
        })
    });
    it('should throw if price is below 0', () => {
        expect(() => calculateDiscount(-456, 50)).toThrow("Price must be non-negative");
    });
    it('should throw if discount is below 0', () => {
        expect(() => calculateDiscount(100, -1)).toThrow(Error);
    });
    it('should throw if discount is above 100', () => {
        expect(() => calculateDiscount(100, 101)).toThrow("Discount must be between 0 and 100");
    });
    it('should round discounted price', () => {
        const spy = jest.spyOn(Math, 'round');
        calculateDiscount(100, 50);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    })
})