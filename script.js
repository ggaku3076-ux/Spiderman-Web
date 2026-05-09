const statusByMode = {
  impact: "Impact Web aktif. Target bisa dihentikan cepat tanpa kerusakan besar.",
  scanner: "Spider Scanner aktif. Radar kota sedang membaca pergerakan di sekitar distrik.",
  stealth: "Shadow Suit aktif. Patroli masuk mode senyap dengan jejak rendah.",
};

const gearButtons = document.querySelectorAll(".gear-item");
const signalText = document.querySelector("#signalText");
const signalButton = document.querySelector("#signalButton");

gearButtons.forEach((button) => {
  button.addEventListener("click", () => {
    gearButtons.forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    signalText.textContent = statusByMode[button.dataset.mode];
  });
});

signalButton.addEventListener("click", () => {
  signalButton.classList.remove("flash");
  void signalButton.offsetWidth;
  signalButton.classList.add("flash");
  signalText.textContent = "Spider Signal terkirim. Tim patroli bergerak ke titik prioritas.";
});
