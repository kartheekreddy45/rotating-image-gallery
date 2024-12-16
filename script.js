const imageContainerE1 = document.querySelector('.image-container');

const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');
let x = 0;
let timer;

prevEl.addEventListener('click', () => {
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
})

nextEl.addEventListener('click', () => {
    x = x - 45;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery(){
    imageContainerE1.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x - 45;
    }, 3000);
}