var typed = new Typed(".text", {
    strings: ["Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener("DOMContentLoaded", function () {
    const emailButton = document.querySelector(".email-btn");

    emailButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = "mailto:22a31a4425@gmail.com";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.querySelector(".whatsapp-btn");

    whatsappButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default action
        const userNumber = "+918885087726"; // Replace with your number
        const url = `https://wa.me/${userNumber}`;

        if (confirm("Do you want to open WhatsApp?")) {
            window.open(url, "_blank");
        }
    });
});
const cards = document.querySelectorAll('.cards li');
let activeIndex = 2; // starts at third card

function updateActiveCard() {
  cards.forEach((card, index) => {
    card.classList.toggle('active', index === activeIndex);
  });
}

document.getElementById('prev').addEventListener('click', () => {
  activeIndex = (activeIndex - 1 + cards.length) % cards.length;
  updateActiveCard();
});

document.getElementById('next').addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % cards.length;
  updateActiveCard();
});
