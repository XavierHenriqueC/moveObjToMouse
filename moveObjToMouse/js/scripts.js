const btn = document.querySelector("#btn");
const container = document.querySelector("#container");

let posX;
let posY;

const widthContainer = container.offsetWidth;
const heightContainer = container.offsetHeight;

console.log();

function movebtn (e) {
    posX = e.x;
    posY = e.y;

    if (Number(posX) >= Number(widthContainer)) {
        btn.style.left = `${widthContainer - 100}px`;
    } else {
        btn.style.left = `${posX - 20}px`;
    }

    if (Number(posY) >= Number(heightContainer)) {
        btn.style.left = `${heightContainer - 100}px`;
    } else {
        btn.style.top = `${posY - 100}px`;
    }
}

btn.addEventListener ("mousedown", () => {
    console.log("clique do mouse");
    document.addEventListener("mousemove", movebtn)
})

btn.addEventListener ("click", () => {
    document.removeEventListener("mousemove", movebtn)
})
