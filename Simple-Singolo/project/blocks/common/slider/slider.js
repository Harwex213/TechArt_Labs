const SliderContentClassName = "slider__content";
const SliderBtnLeftClassName = "slider__button_pos_left";
const SliderBtnRightClassName = "slider__button_pos_right";

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

    constructor(sliderSelectorName, isInfinity) {
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
        this._SliderInitialDragBehavior();
    }

    _Init() {
        this.SetContentTransform();

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

    _MakeInfinity() {
        const firstSlideClone = this._content.children[0].cloneNode(true);
        const lastSlideClone = this._content.children[this._content.children.length - 1].cloneNode(true);

        this._content.lastElementChild.after(firstSlideClone);
        this._content.firstElementChild.before(lastSlideClone);

        this._currentSlideIndex = 1;
    }

    _OnTransitionEnd() {
        this._isTransitionOn = false;
        this.UnmakeSlideTransition();
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

    UnmakeSlideTransition() {
        this._content.style.transition = "";
    }

    MakeSlideTransition() {
        this._content.style.transition = "transform 600ms ease";
    }

    MoveToNextSlide() {
        if (this._isTransitionOn) {
            return;
        }

        this.MakeSlideTransition();
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

        this.MakeSlideTransition();
        this._currentSlideIndex--;
        if (!this._isSliderInfinity && this._currentSlideIndex < 0) {
            this._currentSlideIndex++;
            return;
        }

        this.SetContentTransform();
    }

    _SliderInitialDragBehavior() {
        let MakeDragging = e => {
            const GetCurrentSlide = () => {
                this._currentSlideIndex--;
                this.MoveToNextSlide();
            }
            const DraggingOff = () => {
                isMouseDown = false;
                this._content.classList.remove("slider__content_isGrabbing");
            }

            if (this._isTransitionOn || !isMouseDown) {
                DraggingOff();
                return;
            }
            DraggingOff();

            this.SetContentTransform(this._currentTranslation + offsetXInMouseDown - e.clientX);
            let draggingOffset = this._currentTranslation - (this._currentContentWidth * this._currentSlideIndex);
            if (Math.abs(draggingOffset) / this._currentContentWidth > 0.2) {
                draggingOffset > 0 ? this.MoveToNextSlide() : this.MoveToPreviousSlide();
            }
            else {
                GetCurrentSlide();
            }
        };

        document.querySelectorAll("div").forEach(d => d.ondragstart = _ => false);



        let isMouseDown = false;
        let offsetXInMouseDown = 0;
        this._content.addEventListener("mousedown", e => {
            if (this._isTransitionOn) {
                isMouseDown = false;
                return;
            }

            offsetXInMouseDown = e.clientX;
            isMouseDown = true;
            this._content.classList.add("slider__content_isGrabbing");
        })
        this._content.addEventListener("mouseleave", e => MakeDragging(e));
        this._content.addEventListener("mouseup", e => MakeDragging(e))
        this._content.addEventListener("mousemove", e => {
            if (isMouseDown) {
                const delta = offsetXInMouseDown - e.clientX;
                this._content.style.transform = `translateX(-${this._currentTranslation + delta}px)`;
            }
        });
    }
}