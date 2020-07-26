import { Script } from './script';
import { Form } from './form';
const script = new Script();

let formNode = document.querySelector('form');
new Form(formNode);
