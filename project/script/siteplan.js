// hamburguer menu
const hamButton = document.querySelector('.hamburguer');
const navigation = document.querySelector('.siteplan-nav');

hamButton.addEventListener('click', ()=>{
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// current year
const currentyear = document.querySelector('#currentyear');
const today = new Date();

currentyear.innerHTML = `©️<span id="currentyear">${today.getFullYear()} </span>`