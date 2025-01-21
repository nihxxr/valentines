document.addEventListener("DOMContentLoaded", () => {
  const slide1 = document.getElementById("slide1");
  const slide2 = document.getElementById("slide2");
  const slide3 = document.getElementById("slide3");
  const music = document.getElementById("backgroundMusic");
  const confettiCanvas = document.getElementById("confettiCanvas");

  const yesButton1 = document.getElementById("yesButton1");
  const yesButton2 = document.getElementById("yesButton2");
  const sureButton = document.getElementById("sureButton");

  // Move to Slide 2
  const showSlide2 = () => {
    slide1.classList.add("hidden");
    slide2.classList.remove("hidden");
  };

  // Move to Slide 3 and Start Confetti
  const showSlide3 = () => {
    slide2.classList.add("hidden");
    slide3.classList.remove("hidden");
    music.play();
    startConfetti();
  };

  // Confetti Function
  const startConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  yesButton1.addEventListener("click", showSlide2);
  yesButton2.addEventListener("click", showSlide2);
  sureButton.addEventListener("click", showSlide3);
});
