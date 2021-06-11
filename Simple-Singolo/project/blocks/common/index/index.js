class Index {
    IndexOverflowHidden() {
        document.querySelector(".index").classList.add("index_overflow_hidden");
    }

    IndexOverflowAuto() {
        document.querySelector(".index").classList.remove("index_overflow_hidden");
    }
}

const navbar = new Navbar(".header__navbar");
const header = new Header(".index__header");
navbar.Attach(header);
const slider = new Slider(".index__slider", true, true);
const slider2 = new Slider(".index__slider2", true, true);