class View {
    $ = {};
    constructor() {
        this.$.input = document.querySelector(".calculator-input");
        this.$.btns = document.querySelectorAll("button");
    }

    bindBtnsEvent(handler) {
        this.$.btns.forEach((btn) => btn.addEventListener("click", handler));
    }

    showResult() {
        //
    }
}

export default new View();
