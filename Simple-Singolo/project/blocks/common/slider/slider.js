export class Slider {
    _sliderLeftButton = document.querySelector(".slider__button");
    _sliderRightButton = document.querySelector(".slider__button_direction_right");
    _sliderContent = document.querySelector(".slider__content");
    _currentSliderItemIndex = 0;
    _currentClientWidth = this._sliderContent.getBoundingClientRect().width;

    SetSliderContentTransform() {
        this._sliderContent.style.transform = `translateX(-${this._currentClientWidth * this._currentSliderItemIndex}px)`;
    }

    MakeSlowlySlideTransition() {
        this._sliderContent.style.transition = "transform 500ms linear";
    }

    MakeFastSlideTransition() {
        this._sliderContent.style.transition = "transform 350ms ease-in";
    }

    GetNextImage() {
        this._currentSliderItemIndex++;
        if (this._currentSliderItemIndex === this._sliderContent.children.length) {
            this._currentSliderItemIndex = 0;
            this.MakeFastSlideTransition();
        }

        this.SetSliderContentTransform();
    }

    GetPreviousImage() {
        this._currentSliderItemIndex--;
        if (this._currentSliderItemIndex === -1) {
            this._currentSliderItemIndex = this._sliderContent.children.length - 1;
            this.MakeFastSlideTransition();
        }

        this.SetSliderContentTransform();
    }

    constructor() {
        if (this._sliderContent.children.length === 0) {
            return;
        }

        if (!this._sliderContent.children[0].classList.contains("slider__content-item_current")) {
            this._sliderContent.children[0].classList.add("slider__content-item_current");
        }

        window.addEventListener("resize", () => {
            this._currentClientWidth = this._sliderContent.getBoundingClientRect().width;
            this.SetSliderContentTransform();
        })

        // TODO: Make drag and drop slider
        // const firstElementClone = this._sliderContent.children[0].cloneNode(true);
        // const lastElementClone = this._sliderContent.children[this._sliderContent.children.length - 1].cloneNode(true);
        //
        // firstElementClone.classList.add("slider__content-item_clone");
        // this._sliderContent.lastElementChild.after(firstElementClone);
        // lastElementClone.classList.add("slider__content-item_clone");
        // this._sliderContent.firstElementChild.before(lastElementClone);
        this._sliderContent.addEventListener("transitionend", () => this.MakeSlowlySlideTransition());

        this.SetSliderContentTransform();
        this._sliderLeftButton.addEventListener("click", () => this.GetPreviousImage());
        this._sliderRightButton.addEventListener("click", () => this.GetNextImage());
    }
}