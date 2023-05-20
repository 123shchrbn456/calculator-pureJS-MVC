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
        // здесь нужно взять все числа и математические символы, поместить в массив и вернуть только те элементы которые !== undefined
        const manipulator = state.manipulator;
        this.$.input.value = 0;
        if (!manipulator) this.$.input.value = state.firstNumber;

        if (manipulator) {
            this.$.input.value = state.firstNumber + state.manipulator;
        }

        // this.$.input.value = state.firstNumber + state.manipulator;
    }

    bindBtnsNumbersEvent(handler) {
        this.$.btnsNumbers.forEach((btn) => btn.addEventListener("click", handler));
    }

    bindBtnsMathSymbolsEvent(handler) {
        this.$.btnsMathSymbols.forEach((btn) => btn.addEventListener("click", handler));
    }

    showResult() {
        //
    }
}

export default new View();
