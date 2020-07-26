export class Slider {
  constructor(block) {
    this.block = block;
    this.opacityBlock = document.querySelector('.additionalBlock');

    this.arrowLeft = document.querySelector('.arrow_left');
    this.arrowRight = document.querySelector('.arrow_right');

    this.firstSlide = document.querySelector('#firstSlide');
    this.secondSlide = document.querySelector('#secondSlide');
    this.sliderArr = [this.firstSlide, this.secondSlide];

    this._init();
  }

  _init() {
    this.arrowRight.addEventListener(
      'click',
      this._handleClickLeftRightArrow.bind(this)
    );

    this.arrowLeft.addEventListener(
      'click',
      this._handleClickLeftRightArrow.bind(this)
    );
  }

  _handleClickLeftRightArrow() {
    this._changeSlides();
  }

  _changeSlides() {
    this.sliderArr.forEach((item) => {
      item.classList.toggle('slide-hide');
      item.classList.toggle('slide-show');
    });
    this.block.classList.toggle('slider-wrap__bg_blue');
    if (this.block.classList.contains('slider-wrap__bg_blue')) {
      this._changeArrowColor('5679D4');
    } else {
      this._changeArrowColor('E94348');
    }
  }

  _changeArrowColor(color) {
    document.querySelector('#arrLeftColor').style.fill = color;
    document.querySelector('#arrRightColor').style.fill = color;
  }
}
