// menuOverlay

const menubtn = document.querySelector('#menubtn');
const menuOverlay = document.querySelector('.menuOverlay');
const menuCross = document.querySelector('#menucross');

menubtn.addEventListener("click", () => {
    menuOverlay.style.transform = "translatex(0)";
});
menuCross.addEventListener("click", () => {
    menuOverlay.style.transform = "translatex(-100%)";
});
