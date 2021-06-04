export class Index {

    IndexOverflowHidden() {
        document.querySelector(".index").classList.add("index_overflow_hidden");
    }

    IndexOverflowAuto() {
        document.querySelector(".index").classList.remove("index_overflow_hidden");
    }
}