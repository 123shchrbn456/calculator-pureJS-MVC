import view from "./view.js";
import model from "./model.js";

function btnsEventHandler(e) {
    alert(e.target.id);
}

function init() {
    view.bindBtnsEvent(btnsEventHandler);
}

window.addEventListener("load", init);
