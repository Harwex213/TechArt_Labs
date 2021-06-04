import {Index} from "../index";

function HeaderNavbarBehaviorStart() {
    function RotateBurger() {
        let isRotated = navbarBurger.classList.contains("header__navbar-burger_rotated");
        if (isRotated)
            navbarBurger.classList.remove("header__navbar-burger_rotated");
        else
            navbarBurger.classList.add("header__navbar-burger_rotated");
        return isRotated;
    }

    function ShowMobileBar() {
        new Index().IndexOverflowHidden();
        header.classList.add("header_overflow_hidden");
        navbar.classList.add("header__navbar_visible");
        navbarMobileBackground.classList.add("header__navbar-mobile-bg_visible");
        logo.classList.add("header__logo_pos_left");
    }

    function HideMobileBar() {
        new Index().IndexOverflowAuto();
        header.classList.remove("header_overflow_hidden");
        navbar.classList.remove("header__navbar_visible");
        navbarMobileBackground.classList.remove("header__navbar-mobile-bg_visible");
        logo.classList.remove("header__logo_pos_left")
    }

    function Action() {
        RotateBurger() ? HideMobileBar() : ShowMobileBar();
    }

    const header = document.querySelector(".header");
    const navbar = document.querySelector(".header__navbar");
    const navbarMobileBackground = document.querySelector(".header__navbar-mobile-bg");
    const navbarBurger = document.querySelector(".header__navbar-burger");
    const logo = document.querySelector(".header__logo");

    navbarMobileBackground.addEventListener("click", () => Action());

    navbarBurger.addEventListener("click", () => Action())
}
HeaderNavbarBehaviorStart();