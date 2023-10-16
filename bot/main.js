function changeBackgroundColor() {
    const colors = ['#ff5733', '#33ff57', '#5733ff', '#33fff7', '#f733ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

document.addEventListener('DOMContentLoaded', function () {
    const changeBackgroundButton = document.querySelector('#change-background-button');
    changeBackgroundButton.addEventListener('click', changeBackgroundColor);
});
