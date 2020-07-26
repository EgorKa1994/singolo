import { Script } from './script';
import { Form } from './form';
import { Header } from './header';
import { Slider } from './slider';

const script = new Script();
const headerScript = new Header();

let sliderWrap = document.querySelector('.slider-wrap');
const slider = new Slider(sliderWrap);

let formNode = document.querySelector('form');
new Form(formNode);
