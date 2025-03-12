//Navigation menu ................


let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

toggler.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};






document.querySelectorAll(".slider-container").forEach((container, i) => {
    let index = 0;
    const slider = container.querySelector(".slider");
    const slides = container.querySelectorAll(".slide").length;

    function moveSlide(step) {
        index = (index + step + slides) % slides;
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    function autoSlide() {
        moveSlide(1);
    }


    container.querySelector(".prev").addEventListener("click", () => {
        moveSlide(-1);
        resetAutoSlide();
    });

    container.querySelector(".next").addEventListener("click", () => {
        moveSlide(1);
        resetAutoSlide();
    });

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 3000);
    }
    });




