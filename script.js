document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card-inner");
  const frontImage = document.querySelector(".card-front .card-image");
  const backImage = document.querySelector(".card-back .card-image");
});

cards.forEach((card, index) => {
  anime({
    targets: card,
    translateY: [
      { value: -15, duration: 500, easing: "easeOutQuad" },
      { value: 0, duration: 500, easing: "easeOutQuad" },
    ],
    loop: true,
    delay: index * 500,
  });
});

anime({
  targets: card,
  translateY: [
    { value: -20, duration: 500, easing: "easeOutQuad" },
    { value: 0, duration: 500, easing: "easeOutQuad" },
  ],
  loop: true,
  delay: 1000,
});

card.addEventListener("mouseenter", function () {
  anime({
    targets: card,
    rotateY: 180,
    duration: 600,
    easing: "easeInOutQuad",
    complete: function () {
      card.style.transform = "rotateY(180deg)";
    },
  });
});

card.addEventListener("mouseleave", function () {
  anime({
    targets: card,
    rotateY: 0,
    duration: 600,
    easing: "easeInOutQuad",
    complete: function () {
      card.style.transform = "rotateY(0deg)";
    },
  });
});
