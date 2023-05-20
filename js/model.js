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
        console.log(number);
        this.state.manipulator === undefined ? (this.state.firstNumber = number) : (this.state.secondNumber = number);
        // закладка
        this.dispatchEvent(new Event("statechange"));
    }

    calculateResult(mathSymbol) {
        //
    }
}

export default new Model();
