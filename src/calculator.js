

export function divide(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }

    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw new Error('Arguments cannot be NaN');
    }

    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }

    return a / b;
}