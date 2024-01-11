import Photo from './bird.jpg'
import { Button } from './components/buttons/button.js'

const addImg = (img) => {
    console.log('i', img);
    const image = document.createElement('img');
    image.src = img;
    const body = document.querySelector('body');
    body.appendChild(image);
}

addImg(Photo);
const btn = new Button();
btn.render();