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

                this.Notify();
            })
        }
    }
}

function MakeAsNavbarSubject(navbarPrototype) {
    navbarPrototype._observers = [];
    navbarPrototype.Attach = function (observer) { this._observers.push(observer); }
    navbarPrototype.Detach = function (observer) { this._observers = this._observers.filter(o => o !== observer) }
    navbarPrototype.Notify = function () {
        for (const observer of navbarPrototype._observers) {
            observer.UpdateFromNavbar(this);
        }
    }
}

MakeAsNavbarSubject(Navbar.prototype);