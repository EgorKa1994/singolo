import { Portfolio } from './portfolio';

export class Script {
  constructor() {
    this.container = document.querySelector('.container');

    this.arrowLeft = document.querySelector('.arrow_left');
    this.arrowRight = document.querySelector('.arrow_right');

    this.portfolio = new Portfolio();

    this.portfolioBlock = document.querySelector('.portfolio_img');
    this.portfolioArr = this.portfolioBlock.querySelectorAll('div');

    this.filterList = document.querySelector('.filter-list');

    this._init();
  }

  _init() {
    window.addEventListener(
      'scroll',
      this._listenSliderBlockPosition.bind(this)
    );

    this.filterList.addEventListener(
      'click',
      this._handleClickWebBtn.bind(this)
    );
  }

  _listenSliderBlockPosition() {
    if (this.container.offsetWidth <= 375 && window.pageYOffset >= 95) {
      this._changeArrow('none');
    } else {
      this._changeArrow('block');
    }
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
