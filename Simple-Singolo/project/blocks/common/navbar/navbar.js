class Navbar {
    _navbar
    _links

    constructor(navbarSelectorName) {
        this._navbar = document.querySelector(navbarSelectorName)
        this._links = this._navbar.querySelectorAll(".navbar__link")

        this._Init();
    }

    _Init() {
        for (const link of this._links) {
            link.addEventListener("click", e => {
                e.preventDefault();

                document.querySelector(`.${link.dataset.link_destination.substr(0)}`).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            })
        }
    }
}