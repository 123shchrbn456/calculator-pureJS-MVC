import view from "./view.js";
import model from "./model.js";

function btnsNumbersEventHandler(e) {
    model.btnNumbersHandler(e.target.id);
}

function init() {
    view.bindBtnsNumbersEvent(btnsNumbersEventHandler);

    model.addEventListener("statechange", () => {
        view.updateInput(model.state);
    });
}

window.addEventListener("load", init);
