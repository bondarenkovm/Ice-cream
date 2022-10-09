(() => {
    const refs = {
        openHeroBtn: document.querySelector("[hero-modal-open]"),
        closeHeroBtn: document.querySelector("[hero-modal-close]"),
        modalHero: document.querySelector("[hero-modal]"),

        openProductBtn: document.querySelector("[product-modal-open]"),
        closeProductBtn: document.querySelector("[product-modal-close]"),
        modalProduct: document.querySelector("[product-modal]"),
        
        openReadBtn: document.querySelector("[read-modal-open]"),
        closeReadBtn: document.querySelector("[read-modal-close]"),
        modalRead: document.querySelector("[read-modal]"),

        openLocationBtn: document.querySelector("[location-modal-open]"),
        closeLocationBtn: document.querySelector("[location-modal-close]"),
        modalLocation: document.querySelector("[location-modal]"),

        openFranchiseBtn: document.querySelector("[franchise-modal-open]"),
        closeFranchiseBtn: document.querySelector("[franchise-modal-close]"),
        modalFranchise: document.querySelector("[franchise-modal]"),

    };

    refs.openHeroBtn.addEventListener("click", toggleHeroModal);
    refs.closeHeroBtn.addEventListener("click", toggleHeroModal);

    refs.openProductBtn.addEventListener("click", toggleProductModal);
    refs.closeProductBtn.addEventListener("click", toggleProductModal);

    refs.openReadBtn.addEventListener("click", toggleReadModal);
    refs.closeReadBtn.addEventListener("click", toggleReadModal);

    refs.openLocationBtn.addEventListener("click", toggleLocationModal);
    refs.closeLocationBtn.addEventListener("click", toggleLocationModal);
    
    refs.openFranchiseBtn.addEventListener("click", toggleFranchiseModal);
    refs.closeFranchiseBtn.addEventListener("click", toggleFranchiseModal);

    function toggleHeroModal() {
        refs.modalHero.classList.toggle("is-hidden");
    };

    function toggleProductModal() {
        refs.modalProduct.classList.toggle("is-hidden");
    };

    function toggleReadModal() {
        refs.modalRead.classList.toggle("is-hidden");
    };

    function toggleLocationModal() {
        refs.modalLocation.classList.toggle("is-hidden");
    };

    function toggleFranchiseModal() {
        refs.modalFranchise.classList.toggle("is-hidden");
    };
}
    
)();