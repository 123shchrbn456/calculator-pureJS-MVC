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

// Init app
function init() {
    view.bindBtnsNumbersEvent(btnsNumbersEventHandler);
    view.bindBtnsMathSymbolsEvent(btnsMathSymbolsEventHandler);

    model.addEventListener("statechange", () => {
        view.updateInput(model.state);
    });
}

window.addEventListener("load", init);
