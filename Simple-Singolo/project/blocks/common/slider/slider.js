export class Slider {
    _sliderLeftButton = document.querySelector(".slider__button");
    _sliderRightButton = document.querySelector(".slider__button_direction_right");
    _sliderContent = document.querySelector(".slider__content");
    _currentSliderItemIndex = 0;
    _currentClientWidth = 0;
    _currentTranslation = 0;
    _isTransitionOn = false;

    SetSliderContentTransform(newTranslationWidth) {
        this._currentTranslation = newTranslationWidth;
        this._sliderContent.style.transform = `translateX(-${this._currentTranslation}px)`;
    }

    UnmakeSlideTransition() {
        this._sliderContent.style.transition = "";
    }

    MakeSlideTransition() {
        this._sliderContent.style.transition = "transform 600ms ease";
    }

    GetNextSlide() {
        if (this._isTransitionOn) {
            return;
        }

        this.MakeSlideTransition();
        this._currentSliderItemIndex++;
        if (this._currentSliderItemIndex === this._sliderContent.children.length) {
            this._currentSliderItemIndex = 0;
        }

        this.SetSliderContentTransform(this._currentClientWidth * this._currentSliderItemIndex);
    }

    GetPreviousSlide() {
        if (this._isTransitionOn) {
            return;
        }

        this.MakeSlideTransition();
        this._currentSliderItemIndex--;
        if (this._currentSliderItemIndex === -1) {
            this._currentSliderItemIndex = this._sliderContent.children.length - 1;
        }

        this.SetSliderContentTransform(this._currentClientWidth * this._currentSliderItemIndex);
    }

    _MoveCurrentSlideToFirst() {
        this._currentSliderItemIndex = 1;
        this.SetSliderContentTransform(this._currentClientWidth * this._currentSliderItemIndex);
    }

    _MoveCurrentSlideToLast() {
        this._currentSliderItemIndex = this._sliderContent.children.length - 2;
        this.SetSliderContentTransform(this._currentClientWidth * this._currentSliderItemIndex);
    }

    _SliderInitialBehavior() {
        const TransitionEnd = () => {
            this._isTransitionOn = false;
            this.UnmakeSlideTransition();

            if (this._currentSliderItemIndex === 0) {
                this._MoveCurrentSlideToLast();
            }

            if (this._currentSliderItemIndex === this._sliderContent.children.length - 1) {
                this._MoveCurrentSlideToFirst();
            }
        }

        if (!this._sliderContent.children[0].classList.contains("slider__content-item_current")) {
            this._sliderContent.children[0].classList.add("slider__content-item_current");
        }

        this._currentSliderItemIndex = 1;
        this._currentClientWidth = this._sliderContent.getBoundingClientRect().width;
        this._currentTranslation = this._currentClientWidth * this._currentSliderItemIndex;

        window.addEventListener("resize", () => {
            this._currentClientWidth = this._sliderContent.getBoundingClientRect().width;
            this.SetSliderContentTransform();
        })

        this._sliderContent.addEventListener("transitionstart", () => {
            this._isTransitionOn = true;
        });
        this._sliderContent.addEventListener("transitioncancel", () => {
            TransitionEnd();
        })
        this._sliderContent.addEventListener("transitionend", () => {
            TransitionEnd();
        });

        this.SetSliderContentTransform(this._currentClientWidth * this._currentSliderItemIndex);

        this._sliderLeftButton.addEventListener("click", () => this.GetPreviousSlide());
        this._sliderRightButton.addEventListener("click", () => this.GetNextSlide());
    }

    _SliderInitialDragBehavior() {
        let MakeDragging = e => {
            const GetCurrentSlide = () => {
                this._currentSliderItemIndex--;
                this.GetNextSlide();
            }
            const DraggingOff = () => {
                isMouseDown = false;
                this._sliderContent.classList.remove("slider__content_isGrabbing");
            }

            if (this._isTransitionOn || !isMouseDown) {
                DraggingOff();
                return;
            }
            DraggingOff();

            this.SetSliderContentTransform(this._currentTranslation + offsetXInMouseDown - e.clientX);
            let draggingOffset = this._currentTranslation - (this._currentClientWidth * this._currentSliderItemIndex);
            if (Math.abs(draggingOffset) / this._currentClientWidth > 0.2) {
                draggingOffset > 0 ? this.GetNextSlide() : this.GetPreviousSlide();
            }
            else {
                GetCurrentSlide();
            }
        };

        document.querySelectorAll("div").forEach(d => d.ondragstart = _ => false);

        const firstElementClone = this._sliderContent.children[0].cloneNode(true);
        const lastElementClone = this._sliderContent.children[this._sliderContent.children.length - 1].cloneNode(true);
        firstElementClone.classList.add("slider__content-item_clone");
        this._sliderContent.lastElementChild.after(firstElementClone);
        lastElementClone.classList.add("slider__content-item_clone");
        this._sliderContent.firstElementChild.before(lastElementClone);

        let isMouseDown = false;
        let offsetXInMouseDown = 0;
        this._sliderContent.addEventListener("mousedown", e => {
            if (this._isTransitionOn) {
                isMouseDown = false;
                return;
            }

            offsetXInMouseDown = e.clientX;
            isMouseDown = true;
            this._sliderContent.classList.add("slider__content_isGrabbing");
        })
        this._sliderContent.addEventListener("mouseleave", e => MakeDragging(e));
        this._sliderContent.addEventListener("mouseup", e => MakeDragging(e))
        this._sliderContent.addEventListener("mousemove", e => {
            if (isMouseDown) {
                const delta = offsetXInMouseDown - e.clientX;
                this._sliderContent.style.transform = `translateX(-${this._currentTranslation + delta}px)`;
            }
        });
    }

    constructor() {
        if (this._sliderContent.children.length === 0) {
            return;
        }

        this._SliderInitialBehavior();
        this._SliderInitialDragBehavior();
    }
}