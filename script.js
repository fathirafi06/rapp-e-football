
// ==================================
// 1. ANIMASI SAAT HALAMAN DIBUKA
// ==================================

document.addEventListener("DOMContentLoaded", function () {

    const profile = document.querySelector(".profile");
    const main = document.querySelector("main");

    profile.classList.add("show");
    main.classList.add("show");

});


// ==================================
// 2. EFEK KLIK LINK CARD
// ==================================

const linkCards = document.querySelectorAll(".link-card");

linkCards.forEach(function (card) {

    card.addEventListener("click", function () {

        console.log("Pengunjung memilih: " +
        card.querySelector("h3").textContent);

    });

});


// ==================================
// 3. TOMBOL KEMBALI KE ATAS
// ==================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==================================
// 4. COPYRIGHT OTOMATIS
// ==================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
