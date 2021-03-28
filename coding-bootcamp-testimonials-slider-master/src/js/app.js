const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;
display(index);

function display(index) {
    slides.forEach((slides) => {
        slides.style.display = 'none';
    });
    slides[index].style.display = 'flex';
}

function nextSlide() {
    index++;
    if (index > slides.length - 1) {
        index = 0;
    }
    display(index);
}
function prevSlide() {
    index--;
    if (index < 0 ) {
        index = slides.length -1;
    }
    display(index);
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);