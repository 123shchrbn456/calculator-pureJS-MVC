class View {
    $ = {};
    constructor() {
        this.$.input = document.querySelector(".calculator-input");
        this.$.btnsNumbers = document.querySelectorAll(".btn-number");
        this.$.btnsMathSymbols = document.querySelectorAll(".btn-math__symbol");
        this.$.btnsNumbersAdditions = document.querySelectorAll(".btn-number-addition");
        this.$.btnMathResult = document.querySelector(".btn-math__result");
        this.$.btnClearInput = document.querySelector(".btn-input__clear");
    }

    updateInput(state) {
        if (state.calculateResult) {
            this.$.input.value = state.calculateResult;
            return;
        }
        // здесь нужно взять все числа и математические символы, поместить в массив и вернуть только те элементы которые !== undefined
        // should collect each clicked number and math symbols in the array and return only elements that are !== undefined
        this.$.input.value = 0;
        if (!state.manipulator) this.$.input.value = state.firstNumber;

        if (state.manipulator) {
            this.$.input.value = state.firstNumber + state.manipulator;
        }

        if (state.manipulator && state.secondNumber) {
            this.$.input.value = state.firstNumber + state.manipulator + state.secondNumber;
        }
    }

    bindBtnsNumbersEvent(handler) {
        this.$.btnsNumbers.forEach((btn) => btn.addEventListener("click", handler));
    }

    bindBtnsMathSymbolsEvent(handler) {
        this.$.btnsMathSymbols.forEach((btn) => btn.addEventListener("click", handler));
    }

    bindCalculateResultEvent(handler) {
        this.$.btnMathResult.addEventListener("click", handler);
    }

    bindClearInputEvent(handler) {
        this.$.btnClearInput.addEventListener("click", handler);
    }
}

export default new View();
