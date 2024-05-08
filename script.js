
const sidebar = document.querySelector('.sidebar');
const button = document.querySelector('.sidebar2__link')
const button2 = document.querySelector('.sidebar__link1')
button.addEventListener('click', ()=>{
    sidebar.style.display = "flex"
})

button2.addEventListener('click', ()=>{
    sidebar.style.display = "none"
})
