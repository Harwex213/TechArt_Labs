class Index {
    IndexOverflowHidden() {
        document.querySelector(".index").classList.add("index_overflow_hidden");
    }

    IndexOverflowAuto() {
        document.querySelector(".index").classList.remove("index_overflow_hidden");
    }
}

new Header(".index__header");
new Slider(".index__slider", true, true);