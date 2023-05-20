import view from "./view.js";
import model from "./model.js";

// Numbers
function btnsNumbersEventHandler(e) {
    const number = e.target.id;
    model.btnNumbersHandler(number);
}

// Math Thymbols
function btnsMathSymbolsEventHandler(e) {
    const mathSymbol = e.target.id;
    model.btnMathSymbolsHandler(mathSymbol);
}

function calculateResultEventHandler() {
    model.calculateResult();
}

function clearInputHandler() {
    model.clearInput();
}

// Init app
function init() {
    view.bindBtnsNumbersEvent(btnsNumbersEventHandler);
    view.bindBtnsMathSymbolsEvent(btnsMathSymbolsEventHandler);

    view.bindCalculateResultEvent(calculateResultEventHandler);

    view.bindClearInputEvent(clearInputHandler);

    model.addEventListener("statechange", () => {
        view.updateInput(model.state);
    });
}

window.addEventListener("load", init);
