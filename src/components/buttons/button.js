import './button.scss';

export class Button {
    render() {
        const btn = document.createElement('button');
        btn.innerHTML = 'to jest przycisk';
        btn.onclick = () => console.log('klik');
        document.querySelector('body').appendChild(btn);
    }
}