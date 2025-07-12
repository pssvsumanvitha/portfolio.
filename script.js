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
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card');
  let current = 0;

  function updateCards() {
    cards.forEach(card => card.className = 'card'); // reset all

    cards[current].classList.add('active');

    const prev = (current - 1 + cards.length) % cards.length;
    const next = (current + 1) % cards.length;

    cards[prev].classList.add('prev');
    cards[next].classList.add('next');
  }

  document.getElementById('prev').addEventListener('click', () => {
    current = (current - 1 + cards.length) % cards.length;
    updateCards();
  });

  document.getElementById('next').addEventListener('click', () => {
    current = (current + 1) % cards.length;
    updateCards();
  });

  updateCards(); // initialize
});
