let charimg = document.getElementById("charimg");
let skinturtle = document.getElementById("skinturtle");
let skingarca = document.getElementById("skingarca");
let skinarara = document.getElementById("skinarara");
let skinmico = document.getElementById("skinmico");
let skinonca = document.getElementById("skinonca");
let skinpeixe = document.getElementById("skinpeixe");
let skinlobo = document.getElementById("skinlobo");
let skinstd = document.getElementById("skinstd");

const changeToTurtle = () => {
    charimg.src = "assets/skin2.png"; 
}

const changeToGarca = () => {
    charimg.src = "assets/skin5.png"; 
}

const changeToArara = () => {
    charimg.src = "assets/skin10.png"; 
}

const changeToMico = () => {
    charimg.src = "assets/skin20.png"; 
}

const changeToOnca = () => {
    charimg.src = "assets/skin50.png"; 
}

const changeToPeixe = () => {
    charimg.src = "assets/skin100.png";
}

const changeToLobo = () => {
    charimg.src = "assets/skin200.png";
}

const changeToStd = () => {
    charimg.src = "assets/heroasset.png";
}

skinturtle.addEventListener("click", changeToTurtle);
skingarca.addEventListener("click", changeToGarca);
skinarara.addEventListener("click", changeToArara);
skinmico.addEventListener("click", changeToMico);
skinonca.addEventListener("click", changeToOnca);
skinpeixe.addEventListener("click", changeToPeixe);
skinlobo.addEventListener("click", changeToLobo);
skinstd.addEventListener("click", changeToStd);
