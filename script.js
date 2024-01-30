// script.js

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navbarLinks = document.querySelectorAll("#navbar a");

    navbarLinks.forEach((link, index) => {
        link.addEventListener("click", () => {
            sections[index].scrollIntoView({ behavior: "smooth" });
        });
    });
});
