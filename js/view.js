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
        this.$.input.value = 0;
        this.$.input.value = state.firstNumber;
    }

    bindBtnsNumbersEvent(handler) {
        this.$.btnsNumbers.forEach((btn) => btn.addEventListener("click", handler));
    }

    showResult() {
        //
    }
}

export default new View();
