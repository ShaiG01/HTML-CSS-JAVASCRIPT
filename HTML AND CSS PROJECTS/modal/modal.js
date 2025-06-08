
const openBtn = document.querySelector('.openModal').addEventListener("click", () => {
    const modal = document.querySelector('.modal')
    const overlay = document.querySelector('.overlay')
    const scale = parseInt(getComputedStyle(modal, overlay).getPropertyValue('--scale')) || 0;
    modal.style.setProperty('--scale', `${scale + 1}`);
    overlay.style.setProperty('--scale', `${scale + 1}`);
    overlay.classList.add('active')
})


const exit = document.querySelector('.x').addEventListener('click', () => {
    const modal = document.querySelector('.modal')
    const overlay = document.querySelector('.overlay')
    const scale = parseInt(getComputedStyle(modal, overlay).getPropertyValue('--scale')) || 0;
    modal.style.setProperty('--scale', `${scale - 1}`);
    overlay.style.setProperty('--scale', `${scale - 1}`);
    overlay.classList.remove('active')
})