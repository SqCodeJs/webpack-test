
import { Button } from './components/buttons/button.js';
import { sharedFunction } from './components/shared/shared.js';

const showMessage = (text) => {
    const div = document.createElement('div');
    div.innerHTML = text;
    document.querySelector('body').appendChild(div);
}

showMessage('To jest test');
const btn = new Button();
btn.render(sharedFunction())
sharedFunction();
