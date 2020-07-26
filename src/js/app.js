import { Script } from './script';
import { Form } from './form';
import { Header } from './header';

const script = new Script();
const headerScript = new Header();

let formNode = document.querySelector('form');
new Form(formNode);
