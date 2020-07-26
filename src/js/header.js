export class Header {
  constructor() {
    this.burgerBtn = document.querySelector('.menu__btn');
    this.burgerMenuBox = document.querySelector('.menu__box');
    this.opacityBlock = document.querySelector('.additionalBlock');

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
