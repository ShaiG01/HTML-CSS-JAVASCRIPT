const body = document.querySelector('body')
const pandaHead =document.querySelector('.head')
const panda = document.querySelector('.panda')
const eyes = document.querySelector('.eyes')

window.addEventListener("load", () => {
    let randomHue = Math.floor(Math.random() * 360);

    const hueStyle = getComputedStyle(body).getPropertyValue('--background-color') || 'hsl(340, 100%, 88%)';

    body.style.setProperty('--background-color', `hsl(${randomHue}, 100%, 88%)`);
});

panda.addEventListener('mouseover', ()=>{
    body.classList.add('activated')
})

panda.addEventListener('mouseout', ()=>{
    body.classList.remove('activated')
})

