const circles = {
    one: document.querySelector(".one"),
    two: document.querySelector(".two"),
    three: document.querySelector(".three"),
    angle: 0,
    white: 0,
}

function fillUp(white, red){
    circles.one.style.background = 
    `conic-gradient(white ${white}%, var(--color) 0%)`;
    circles.three.style.background = 
    `conic-gradient(white ${white}%, var(--color) 0%)`;
}

function animateFillUp(){
    if(circles.white <= 100){
        fillUp(circles.white, circles.red);
        circles.white+=0.1;
        setTimeout(animateFillUp, 10);
    }
}

animateFillUp();

function rotate(x){
    circles.two.style.transform = `rotate(${x}deg)`;
    circles.three.style.transform = `rotate(${x}deg)`;
}

setInterval(()=>{
    rotate(circles.angle);
   circles.angle++;
}, 10);




// document.querySelector('body').addEventListener('click', () => {
//     const intervalId = setInterval(() => {
//         rotate(x);
//         x++;
//         if (x >= 1000) {
//             clearInterval(intervalId); // Stop the interval when x reaches 1000
//         }
//     }, 10);
// });

