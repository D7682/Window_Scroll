let button = document.getElementById('button');

onscroll = () => {
    console.log(pageYOffset);
}



button.onmouseover = () => {
    document.body.style.background = 'red';
}

button.onmouseout = () => {
    document.body.style.background = 'blue';
}

button.onclick = () => {
    console.log('hello');
}