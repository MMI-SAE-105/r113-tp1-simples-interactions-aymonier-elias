// TODO
let aMettreEnRouge = document.querySelector("#a-mettre-en-rouge");
let enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click");
let collH2 = document.querySelectorAll("h2");

aMettreEnRouge.style.color = "red";

enRougeSuiteAClick.addEventListener("click", (evt) => {
    enRougeSuiteAClick.style.color = "red";
})

collH2.forEach(elm => {
    elm.addEventListener("click", (evt) => {
        evt.target.style.color = "red";
    })
});