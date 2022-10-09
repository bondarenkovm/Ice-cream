(() => {
const refs = {
openModalBtn: document.querySelector("[hero-modal-open]"),
closeModalBtn: document.querySelector("[hero-modal-close]"),
modal: document.querySelector("[hero-modal]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
refs.modal.classList.toggle("is-hidden");
}
})();

(() => {
const refs = {
openModalBtn: document.querySelector("[products-modal-open]"),
closeModalBtn: document.querySelector("[products-modal-close]"),
modal: document.querySelector("[products-modal]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
refs.modal.classList.toggle("is-hidden");
}
})();

(() => {
const refs = {
openModalBtn: document.querySelector("[read-more-modal-open]"),
closeModalBtn: document.querySelector("[read-more-modal-close]"),
modal: document.querySelector("[read-more-modal]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
refs.modal.classList.toggle("is-hidden");
}
})();

(() => {
const refs = {
openModalBtn: document.querySelector("[location-modal-open]"),
closeModalBtn: document.querySelector("[location-modal-close]"),
modal: document.querySelector("[location-modal]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
refs.modal.classList.toggle("is-hidden");
}
})();

(() => {
const refs = {
openModalBtn: document.querySelector("[franchise-modal-open]"),
closeModalBtn: document.querySelector("[franchise-modal-close]"),
modal: document.querySelector("[franchise-modal]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
refs.modal.classList.toggle("is-hidden");
}
})();