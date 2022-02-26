

let toggle = document.getElementsByClassName("toggle-btn")[0];
let collapse = document.getElementsByClassName("collapse")[0];

console.log(collapse);
function switchClass(event)
{
    console.log('button clicked');
    collapse.classList.toggle('active');
}
toggle.addEventListener('click',switchClass);
