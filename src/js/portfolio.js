import imgSrc0 from '../img//portfolio/portfolio-1.png';
import imgSrc1 from '../img//portfolio/portfolio-2.png';
import imgSrc2 from '../img//portfolio/portfolio-3.png';
import imgSrc3 from '../img//portfolio/portfolio-4.png';
import imgSrc4 from '../img//portfolio/portfolio-5.png';
import imgSrc5 from '../img//portfolio/portfolio-6.png';
import imgSrc6 from '../img//portfolio/portfolio-7.png';
import imgSrc7 from '../img//portfolio/portfolio-8.png';
import imgSrc8 from '../img//portfolio/portfolio-9.png';
import imgSrc9 from '../img//portfolio/portfolio-10.png';
import imgSrc10 from '../img//portfolio/portfolio-11.png';
import imgSrc11 from '../img//portfolio/portfolio-12.png';

export class Portfolio {
  constructor() {
    this.imageLinksAll = [
      imgSrc0,
      imgSrc1,
      imgSrc2,
      imgSrc3,
      imgSrc4,
      imgSrc5,
      imgSrc6,
      imgSrc7,
      imgSrc8,
      imgSrc9,
      imgSrc10,
      imgSrc11,
    ];
    this.dataIdArr = [
      'web',
      'graphic',
      'web',
      'art',
      'graphic',
      'art',
      'graphic',
      'art',
      'art',
      'graphic',
      'web',
      'graphic',
    ];
    this.portfolioBlock = document.querySelector('.portfolio_img');

    this.filterList = document.querySelector('.filter-list');
  }

  render(choosenLinks) {
    this.imageLinksChoosen = choosenLinks;
    this.portfolioBlock.innerHTML = '';
    this.imageLinksChoosen.forEach((item) => {
      let template = `<div data-example=${this.dataIdArr[item]}>
      <img src=${this.imageLinksAll[item]} alt="port${item}">
      </div>`;
      this.portfolioBlock.innerHTML = this.portfolioBlock.innerHTML + template;
    });
  }
}
