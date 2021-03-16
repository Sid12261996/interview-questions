function multiply(num1) {
    return function internalMultiply(num2) {
        return function moreInnerMultiply(num3) {
            return num1 * num2 * num3;
        }
    }
}

const multiply = multiply(1)(2)(3)
console.log(m)
