export class Script {
  constructor() {
    this.burgerBtn = document.querySelector('.menu__btn');
    this.burgerMenuBox = document.querySelector('.menu__box');
    this.appWrap = document.querySelector('.appWrap');
    this.sliderWrap = document.querySelector('.slider-wrap');
    this.opacityBlock = document.querySelector('.additionalBlock');
    this.logo = document.querySelector('.header_title');

    ////////////////////////////////////////////////
    this.arrowLeft = document.querySelector('.arrow_left');
    this.arrowRight = document.querySelector('.arrow_right');
    ///////////////////////////////////////////////
    this.firstSlide = document.querySelector('#firstSlide');
    this.secondSlide = document.querySelector('#secondSlide');
    this.sliderArr = [this.firstSlide, this.secondSlide];

    this._init();
  }

  _init() {
    this.burgerBtn.addEventListener(
      'click',
      this._handleClickBurgerIcon.bind(this)
    );

    this.burgerMenuBox.addEventListener(
      'click',
      this._handleClickBurgerMenu.bind(this)
    );

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

  _handleClickBurgerMenu() {
    this._closeBurgerMenu();
  }

  _handleClickBurgerIcon() {
    this.burgerBtn.classList.toggle('turn-burger');
    this.burgerMenuBox.classList.toggle('show_menu');
    if (this.burgerMenuBox.classList.contains('show_menu')) {
      this.opacityBlock.style.opacity = '.3';
      this.opacityBlock.style.transitionDuration = '2.5s';
      this.opacityBlock.style.transitionTimingFunction = 'ease-in';
    } else {
      this._closeBurgerMenu();
    }
  }

  _closeBurgerMenu() {
    this.burgerBtn.classList.remove('turn-burger');
    this.burgerMenuBox.classList.remove('show_menu');
    this.opacityBlock.style.opacity = '0';
    this.opacityBlock.style.transitionDuration = '0.1s';
  }

  _changeSlides() {
    this.sliderArr.forEach((item) => {
      item.classList.toggle('slide-hide');
      item.classList.toggle('slide-show');
    });
    this.sliderWrap.classList.toggle('slider-wrap__bg_blue');
    if (this.sliderWrap.classList.contains('slider-wrap__bg_blue')) {
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
