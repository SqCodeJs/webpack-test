import './button.scss';

export class Button {
    render(text) {
        const btn = document.createElement('button');
        btn.innerHTML = text;
        btn.onclick = () => console.log('klik');
        document.querySelector('body').appendChild(btn);
    }
}