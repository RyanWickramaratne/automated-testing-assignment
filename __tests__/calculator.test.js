import { divide } from "../src/calculator.js";


describe("divide (a,b)", () => {
    
    // Positive test cases
    test("divides two positive numbers", () => {
        expect(divide(10, 2)).toBe(5);
    });

    // Negative test cases
    test("throws error when arguments are not numbers", () => {
        expect(() => divide("10", 2)).toThrow("Both arguments must be numbers");
        expect(() => divide(10, "2")).toThrow("Both arguments must be numbers");
        expect(() => divide(null, 2)).toThrow("Both arguments must be numbers");
        expect(() => divide(10, undefined)).toThrow("Both arguments must be numbers");
    });

    test("throws TypeError if a is NaN", () => {
        expect(() => divide(NaN, 2)).toThrow(TypeError);
        expect(() => divide(NaN, 2)).toThrow("Arguments cannot be NaN");
    });

    test("throws TypeError if b is NaN", () => {
        expect(() => divide(10, NaN)).toThrow(TypeError);
        expect(() => divide(10, NaN)).toThrow("Arguments cannot be NaN");
    });

    test("throws RangeError when dividing by zero", () => {
        expect(() => divide(10, 0)).toThrow(RangeError);
        expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
    });
});



