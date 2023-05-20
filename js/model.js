class Model extends EventTarget {
    constructor() {
        super();
        this.state = {
            firstNumber: undefined,
            secondNumber: undefined,
            manipulator: undefined,
            inputData: undefined,
            inputCalculatedResult: undefined,
        };
    }

    btnNumbersHandler(number) {
        number = Number(number);
        this.state.manipulator === undefined ? (this.state.firstNumber = number) : (this.state.secondNumber = number);
        this.dispatchEvent(new Event("statechange"));
    }

    btnMathSymbolsHandler(mathSymbol) {
        this.state.manipulator = mathSymbol;
        this.dispatchEvent(new Event("statechange"));
    }

    calculateResult(mathSymbol) {
        //
    }
}

export default new Model();
