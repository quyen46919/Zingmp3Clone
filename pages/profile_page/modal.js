const openModal = document.getElementById("open");
const closeModal = document.getElementById("close");
const overlay = document.getElementById("overlay");

const modal = document.getElementById("modal");


openModal.addEventListener("click", () => {
    if (modal == null) return
    modal.classList.add("active");
    overlay.classList.add("active");
})
closeModal.addEventListener("click", () => {
    if (modal == null) return
    modal.classList.remove("active");
    overlay.classList.remove("active");
})

overlay.addEventListener("click", () => {
    if (modal == null) return
    modal.classList.remove("active");
    overlay.classList.remove("active");
})