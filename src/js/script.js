import { Portfolio } from './portfolio';

export class Script {
  constructor() {
    this.appWrap = document.querySelector('.appWrap');
    this.container = document.querySelector('.container');

    //////////header
    this.burgerBtn = document.querySelector('.menu__btn');
    this.burgerMenuBox = document.querySelector('.menu__box');

    //////////slider
    this.sliderWrap = document.querySelector('.slider-wrap');
    this.opacityBlock = document.querySelector('.additionalBlock');
    this.logo = document.querySelector('.header_title');

    this.arrowLeft = document.querySelector('.arrow_left');
    this.arrowRight = document.querySelector('.arrow_right');

    this.firstSlide = document.querySelector('#firstSlide');
    this.secondSlide = document.querySelector('#secondSlide');
    this.sliderArr = [this.firstSlide, this.secondSlide];

    ///////portfolio

    this.portfolio = new Portfolio();

    this.portfolioBlock = document.querySelector('.portfolio_img');
    this.portfolioArr = this.portfolioBlock.querySelectorAll('div');

    this.filterList = document.querySelector('.filter-list');

    //////////////////////////////////////////////////////////////////////////

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

    window.addEventListener(
      'scroll',
      this._listenSliderBlockPosition.bind(this)
    );

    this.filterList.addEventListener(
      'click',
      this._handleClickWebBtn.bind(this)
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

  _listenSliderBlockPosition() {
    if (this.container.offsetWidth <= 375 && window.pageYOffset >= 95) {
      this._changeArrow('none');
    } else {
      this._changeArrow('block');
    }
  }

  ////////////////////////////////////////////////////////

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

  _changeArrow(display) {
    this.arrowLeft.style.display = display;
    this.arrowRight.style.display = display;
  }

  _handleClickWebBtn(e) {
    let filter = e.target.getAttribute('id');
    let imgArr = [];
    if (!filter) {
      return;
    } else if (filter == 'all') {
      for (let i = 0; i < 12; i++) {
        imgArr.push(i);
      }
      this.portfolio.render(imgArr);
      return;
    } else {
      this.portfolioArr.forEach((item, index) => {
        if (item.getAttribute('data-example') == filter) {
          imgArr.push(index);
        }
      });
      this.portfolio.render(imgArr);
    }
  }
}
