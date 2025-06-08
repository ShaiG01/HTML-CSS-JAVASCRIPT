const overlayInput = document.querySelector('.overlayInput')
const overlay = document.querySelector('.overlay')
const addNewBtn = document.querySelector('.addNew')
const xBtn = document.querySelector('.x')


addNewBtn.addEventListener('click', ()=>{
    const currentScale = parseInt(getComputedStyle(overlayInput).getPropertyValue('--scale')) || 0;
    overlayInput.style.setProperty('--scale', `${currentScale + 1}`)
    overlay.classList.add('hide')
})

xBtn.addEventListener('click', ()=>{
     const currentScale = parseInt(getComputedStyle(overlayInput).getPropertyValue('--scale')) || 0;
    overlayInput.style.setProperty('--scale', `${currentScale - 1}`)
    overlay.classList.remove('hide')
})