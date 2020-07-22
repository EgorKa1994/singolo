export class Script {
  constructor() {
    this.burgerBtn = document.querySelector('.menu__btn');
    this.burgerMenuBox = document.querySelector('.menu__box');
    this.appWrap = document.querySelector('.appWrap');
    this.opacityBlock = document.querySelector('.additionalBlock');
    this.logo = document.querySelector('.header_title');
    this.arrowLeft = document.querySelector('.arrow_left');
    this.arrowRight = document.querySelector('.arrow_right');
    this.sliderTwoPhones = document.querySelector('.slider1');
    this.sliderThreePhones = document.querySelector('.slider2');

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
      this._handleClickRightArrow.bind(this)
    );
  }

  _handleClickRightArrow() {
    this.sliderThreePhones.style.order = '2';
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
}
