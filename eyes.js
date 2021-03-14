var balls = document.getElementsByClassName("iris");
//make the eyes follow the cursor
document.onmousemove = () => {
    var x = (event.clientX * 100) / window.innerWidth + "%";
    var y = (event.clientY * 100) / window.innerHeight + "%";
    for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
    }
};
//close the eye
function wink(eye) {
    let element = document.getElementById(eye);
    let heightE = element.style.height;
    element.style.visibility = "hidden";
    element.style.overflow = "visible";
    let eyeIndex = 0;
    if (element.id == "lefteye") eyeIndex = 1;
    console.log(eyeIndex);
    let eyeball = document.getElementsByClassName("iris");
    eyeball[eyeIndex].style.visibility = "hidden";

    let eyelash = document.getElementsByClassName("eyelash");
    eyelash[eyeIndex].style.visibility = "visible";
    setTimeout(() => {
        element.style.height = heightE;
        element.style.overflow = "hidden";
        element.style.visibility = "visible";
        eyeball[eyeIndex].style.visibility = "visible";
        eyelash[eyeIndex].style.visibility = "hidden";
    }, 500);

}

function eBrowFlash(brow) {
    let element = document.getElementsByClassName(brow);
    let topE = element[0].style.top;
    element[0].style.top = "10px";
    setTimeout(() => {
        element[0].style.top = topE;
    }, 500);

}