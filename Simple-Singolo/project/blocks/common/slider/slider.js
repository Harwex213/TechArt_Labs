const SliderContentClassName = "slider__content";
const SliderBtnLeftClassName = "slider__button_pos_left";
const SliderBtnRightClassName = "slider__button_pos_right";
const SliderContentIsGrabbableClassName = "slider__content_isGrabbable";
const SliderContentIsGrabbingClassName = "slider__content_isGrabbing";

class Slider {
    _content
    _leftButton
    _rightButton
    _isSliderInfinity

    _currentSlideIndex
    _lastSlideIndex
    _currentContentWidth
    _currentTranslation
    _isTransitionOn

    _isMouseOver
    _initialOffsetX

    constructor(sliderSelectorName, isInfinity, isDraggable) {
        const slider = document.querySelector(sliderSelectorName);
        this._isSliderInfinity = isInfinity;
        if (slider === null) {
            return;
        }

        this._content = slider.querySelector(`.${SliderContentClassName}`);
        this._leftButton = slider.querySelector(`.${SliderBtnLeftClassName}`);
        this._rightButton = slider.querySelector(`.${SliderBtnRightClassName}`);

        this._currentSlideIndex = 0;
        if (this._isSliderInfinity) {
            this._MakeInfinity();
        }
        this._lastSlideIndex = this._content.children.length - 1;
        this._isTransitionOn = false;
        this._currentContentWidth = this._content.getBoundingClientRect().width;

        this._Init();
        if (isDraggable) {
            this._MakeDraggable();
        }
    }

    _Init() {
        this.SetContentTransform();

        document.querySelectorAll("div").forEach(d => d.ondragstart = _ => false);

        window.addEventListener("resize", () => {
            this._currentContentWidth = this._content.getBoundingClientRect().width;
            this.SetContentTransform();
        })

        this._content.addEventListener("transitionstart", () => {
            this._isTransitionOn = true;
        });
        this._content.addEventListener("transitioncancel", () => {
            this._OnTransitionEnd();
            if (this._isSliderInfinity) {
                this._OnInfinityTransitionEnd();
            }
        })
        this._content.addEventListener("transitionend", () => {
            this._OnTransitionEnd();
            if (this._isSliderInfinity) {
                this._OnInfinityTransitionEnd();
            }
        });

        this._leftButton.addEventListener("click", () => this.MoveToPreviousSlide());
        this._rightButton.addEventListener("click", () => this.MoveToNextSlide());
    }

    _MakeDraggable() {
        this._isMouseOver = false;
        this._initialOffsetX = 0;
        this._content.classList.add(SliderContentIsGrabbableClassName);

        this._content.addEventListener("mousedown", e => {
            if (this._isTransitionOn) {
                return;
            }

            this._initialOffsetX = e.clientX;
            this._isMouseOver = true;
            this._content.classList.add(SliderContentIsGrabbingClassName);
        })
        this._content.addEventListener("mouseleave", e => this._DraggingFinished(e));
        this._content.addEventListener("mouseup", e => this._DraggingFinished(e))
        this._content.addEventListener("mousemove", e => {
            if (this._isMouseOver) {
                const delta = this._initialOffsetX - e.clientX;
                this._content.style.transform = `translateX(-${this._currentTranslation + delta}px)`;
            }
        });
    }

    _DraggingFinished(eventListener) {
        if (!this._isMouseOver) {
            return;
        }
        this._content.classList.remove("slider__content_isGrabbing");
        this._isMouseOver = false;

        this.SetContentTransform(this._currentTranslation + this._initialOffsetX - eventListener.clientX);
        let draggingOffset = this._currentTranslation - (this._currentContentWidth * this._currentSlideIndex);
        if (Math.abs(draggingOffset) / this._currentContentWidth > 0.2) {
            draggingOffset > 0 ? this.MoveToNextSlide() : this.MoveToPreviousSlide();
        }
        else {
            this.StayAtCurrentSlide();
        }
    }

    _MakeInfinity() {
        const firstSlideClone = this._content.children[0].cloneNode(true);
        const lastSlideClone = this._content.children[this._content.children.length - 1].cloneNode(true);

        this._content.lastElementChild.after(firstSlideClone);
        this._content.firstElementChild.before(lastSlideClone);

        this._currentSlideIndex = 1;
    }

    _OnTransitionEnd() {
        this._isTransitionOn = false;
        this.SliderTransitionOff();
    }

    _OnInfinityTransitionEnd() {
        switch (this._currentSlideIndex) {
            case 0:
                this._currentSlideIndex = this._lastSlideIndex - 1;
                break;
            case this._lastSlideIndex:
                this._currentSlideIndex = 1;
                break;
        }
        this.SetContentTransform();
    }

    SetContentTransform(newTranslationWidth = this._currentContentWidth * this._currentSlideIndex) {
        this._currentTranslation = newTranslationWidth;
        this._content.style.transform = `translateX(-${this._currentTranslation}px)`;
    }

    SliderTransitionOff() {
        this._content.style.transition = "";
    }

    SliderTransitionOn() {
        this._content.style.transition = "transform 600ms ease";
    }

    StayAtCurrentSlide() {
        this._currentSlideIndex--;
        this.MoveToNextSlide();
    }

    MoveToNextSlide() {
        if (this._isTransitionOn) {
            return;
        }

        this.SliderTransitionOn();
        this._currentSlideIndex++;
        if (!this._isSliderInfinity && this._currentSlideIndex > this._lastSlideIndex) {
            this._currentSlideIndex--;
            return;
        }

        this.SetContentTransform();
    }

    MoveToPreviousSlide() {
        if (this._isTransitionOn) {
            return;
        }

        this.SliderTransitionOn();
        this._currentSlideIndex--;
        if (!this._isSliderInfinity && this._currentSlideIndex < 0) {
            this._currentSlideIndex++;
            return;
        }

        this.SetContentTransform();
    }
}