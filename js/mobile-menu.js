// Отримуємо посилання на елементи
const mobileMenuBackdrop = document.getElementById("mobileMenuBackdrop");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const openMenuBtn = document.getElementById("openMenuBtn"); // Додай кнопку для відкриття меню (або через інший елемент)

//Обробник події для відкриття меню (за допомогою openMenuBtn або іншого елемента)
openMenuBtn.addEventListener("click", () => {
  mobileMenuBackdrop.classList.add("is-open"); // Додаємо клас для відкриття
});

// Обробник події для закриття меню (при натисканні кнопки)
closeMenuBtn.addEventListener("click", () => {
  mobileMenuBackdrop.classList.remove("is-open"); // Забираємо клас для закриття
});

// Можна додати обробник для закриття при кліку на backdrop
mobileMenuBackdrop.addEventListener("click", (event) => {
  if (event.target === mobileMenuBackdrop) {
    mobileMenuBackdrop.classList.remove("is-open"); // Закриття при кліку на backdrop
  }
});
