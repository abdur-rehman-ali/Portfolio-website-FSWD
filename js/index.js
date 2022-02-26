

window.onload = function execute() {

    let toggle = document.getElementsByClassName("toggle-btn")[0];
    let collapse = document.getElementsByClassName("collapse")[0];

    console.log(collapse);
    function switchClass(event) {
        collapse.classList.toggle('active');
    }
    toggle.addEventListener('click', switchClass);
}
