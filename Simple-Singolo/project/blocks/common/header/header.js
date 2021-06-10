class Header {
    isMobileHeaderOpen

    _header
    _navbar
    _navbarMobileBackground
    _navbarBurger
    _logo

    constructor(headerSelectorName) {
        this._header = document.querySelector(headerSelectorName);
        if (this._header === null) {
            return;
        }

        this._navbar = this._header.querySelector(".header__navbar");
        this._navbarMobileBackground = this._header.querySelector(".header__navbar-mobile-bg");
        this._navbarBurger = this._header.querySelector(".header__navbar-burger");
        this._logo = this._header.querySelector(".header__logo");

        this.isMobileHeaderOpen = false;

        this._Init();
    }

    _Init() {
        this._navbarMobileBackground.addEventListener("click", () => this.ActionWithMobileHeader());
        this._navbarBurger.addEventListener("click", () => this.ActionWithMobileHeader())
    }

    ActionWithMobileHeader() {
        this.RotateBurger() ? this.HideMobileBar() : this.ShowMobileBar();
    }

    RotateBurger() {
        const isRotated = this._navbarBurger.classList.contains("header__navbar-burger_rotated");
        if (isRotated)
            this._navbarBurger.classList.remove("header__navbar-burger_rotated");
        else
            this._navbarBurger.classList.add("header__navbar-burger_rotated");
        return isRotated;
    }

    ShowMobileBar() {
        this.isMobileHeaderOpen = true;
        new Index().IndexOverflowHidden();

        this._header.classList.add("header_overflow_hidden");
        this._navbar.classList.add("header__navbar_visible");
        this._navbarMobileBackground.classList.add("header__navbar-mobile-bg_visible");
        this._logo.classList.add("header__logo_pos_left");
    }

    HideMobileBar() {
        this.isMobileHeaderOpen = false;
        new Index().IndexOverflowAuto();

        this._header.classList.remove("header_overflow_hidden");
        this._navbar.classList.remove("header__navbar_visible");
        this._navbarMobileBackground.classList.remove("header__navbar-mobile-bg_visible");
        this._logo.classList.remove("header__logo_pos_left")
    }

    UpdateFromNavbar(navbarSubject) {
        this.ActionWithMobileHeader();
    }
}