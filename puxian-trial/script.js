const scrollRevealOption = {
distance: "50px",
origin: "bottom",
duration: 1000,
};

//header container
ScrollReveal().reveal(".header__container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container .btn",{
    ...scrollRevealOption,
    delay: 500,
});


//about container
ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__container .section__subheader",{
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__container .btn", {
    ...scrollRevealOption,
    delay: 1500,
});

const initSlider = () => {
    const imageList = document.querySelectorAll(".slider_wrapper .image-item")
    const slideButtons = document.querySelectorAll(".slider_wrapper .slide_button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slides" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"})
        });
    });
}

window.addEventListener("load", initSlider);