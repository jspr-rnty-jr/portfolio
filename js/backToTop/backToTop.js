export default function backToTop() {
    const backToTopPointer = document.querySelector('.back-to-top');

    document.addEventListener("scroll", () => {
        if (window.scrollY < 250) return backToTopPointer.classList.add('hidden');
        
        backToTopPointer.classList.remove('hidden');
    })
}