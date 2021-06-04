import {Index} from "../index";

export class Header {
    header = document.querySelector(".header");
    navbar = document.querySelector(".header__navbar");
    navbarMobileBackground = document.querySelector(".header__navbar-mobile-bg");
    navbarBurger = document.querySelector(".header__navbar-burger");
    logo = document.querySelector(".header__logo");

    RotateBurger() {
        let isRotated = this.navbarBurger.classList.contains("header__navbar-burger_rotated");
        if (isRotated)
            this.navbarBurger.classList.remove("header__navbar-burger_rotated");
        else
            this.navbarBurger.classList.add("header__navbar-burger_rotated");
        return isRotated;
    }

    ShowMobileBar() {
        new Index().IndexOverflowHidden();
        this.header.classList.add("header_overflow_hidden");
        this.navbar.classList.add("header__navbar_visible");
        this.navbarMobileBackground.classList.add("header__navbar-mobile-bg_visible");
        this.logo.classList.add("header__logo_pos_left");
    }

    HideMobileBar() {
        new Index().IndexOverflowAuto();
        this.header.classList.remove("header_overflow_hidden");
        this.navbar.classList.remove("header__navbar_visible");
        this.navbarMobileBackground.classList.remove("header__navbar-mobile-bg_visible");
        this.logo.classList.remove("header__logo_pos_left")
    }

    constructor() {
        function Action(headerClass) {
            headerClass.RotateBurger() ? headerClass.HideMobileBar() : headerClass.ShowMobileBar();
        }

        this.navbarMobileBackground.addEventListener("click", () => Action(this));
        this.navbarBurger.addEventListener("click", () => Action(this))
    }
}