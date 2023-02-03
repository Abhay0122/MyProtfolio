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


// cursor
const cursor = document.querySelector('.cursor');
document.addEventListener("mousemove", (e) => {
    var y = e.clientY
    var x = e.clientX
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

const p = document.querySelector('.paragraph');
const p2 = document.querySelector('#profilename');
const p3 = document.querySelector('.para-3');
const p4 = document.querySelector('.para-4');
const p5 = document.querySelector('.para-5');
const endTxt = document.querySelector('#endTxt');


p.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(6)"
})
p.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)"
})
// // -----
p2.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(6)"
})
p2.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)"
})
// // -----
p3.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(6)"
})
p3.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)"
})
// // -----
p4.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(6)"
})
p4.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)"
})
// // -----
p5.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(6)"
})
p5.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)"
})
// // -----
endTxt.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(6)"
})
endTxt.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)"
})


