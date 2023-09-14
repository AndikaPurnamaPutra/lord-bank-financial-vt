console.log("hallo");

// Navbar Mobile
const navbarToggler = document.querySelector(".nav-btn-responsive");

navbarToggler.addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.toggle("active");
});

// logic respondsive

// const btnRes = document.querySelector('.nav-btn-respondsive');
// const menu = document.querySelector('.nav-menu');

// btnRes.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   btnRes.classList.toggle('cross');
// });


// slick
$(document).ready(function () {
    $(".slider-partner").slick({
        variableWidth: true,
        autoplay: true,
        centerMode: true,
        arrows: false,
        autoplaySpeed: 0,
        cssEase: "linear",
        speed: 5000,
    });

    $(".slider-control").slick({
        variableWidth: true,
        autoplay: true,
        centerMode: true,
        arrows: false,
        autoplaySpeed: 0,
        cssEase: "linear",
        speed: 5000,
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".btn-arrow",
        },
        loop: true,
    });
});
