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

    calculateResult() {
        if (Boolean(this.state.firstNumber) && Boolean(this.state.manipulator) && Boolean(this.state.secondNumber)) {
            console.log("срабатывает");
            // using eval is not safe
            this.state.calculateResult = eval(
                `${this.state.firstNumber} ${this.state.manipulator} ${this.state.secondNumber}`
            );
            this.dispatchEvent(new Event("statechange"));
        }
    }

    clearInput() {
        this.state = {
            firstNumber: 0,
            secondNumber: undefined,
            manipulator: undefined,
            inputData: undefined,
            inputCalculatedResult: undefined,
        };
        this.dispatchEvent(new Event("statechange"));
    }
}

export default new Model();
