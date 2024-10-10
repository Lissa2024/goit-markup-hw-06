const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
  backdrop: document.querySelector(".backdrop_overlay"),
};

// Відкриття модального вікна
refs.openModalBtn.addEventListener("click", toggleModal);

// Закриття модального вікна через кнопку
refs.closeModalBtn.addEventListener("click", toggleModal);

// Закриття модального вікна через клік по фону
refs.backdrop.addEventListener("click", handleBackdropClick);

// Закриття модального вікна через клавішу "Escape"
window.addEventListener("keydown", handleKeyDown);

function toggleModal() {
  refs.modal.classList.toggle("is-open");
}

function handleBackdropClick(event) {
  if (event.target === refs.backdrop) {
    toggleModal();
  }
}

function handleKeyDown(event) {
  if (event.code === "Escape" && refs.modal.classList.contains("is-open")) {
    toggleModal();
  }
}
