const about = document.querySelector(".about");
const shareIcon = document.querySelector(".about__share-icon");

shareIcon.addEventListener('click', (e) => {
    about.classList.toggle('active');
});

