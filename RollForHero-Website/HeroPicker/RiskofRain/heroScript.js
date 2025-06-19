const heroes = ["Acrid", "Artificer", "Bandit", "Captain", "Commando", "Engineer", "Heretic", "Huntress", "Loader", "Mercenary", "MUL-T", "Railgunner", "Rex", "Void_Fiend"];
let html = "";

heroes.forEach(createHeroes);
const characterContainer = document.getElementById("characters");
characterContainer.insertAdjacentHTML("afterbegin", html);

document.querySelectorAll('.hero').forEach(item => {
    item.addEventListener('click', event => {
        item.id == "enabled" ? item.id = "disabled" : item.id = "enabled";
        console.log(item.id);
    })
})

function createHeroes(hero){
    html += "<!--" + hero + "--> <div class='hero' id='enabled'> <img class='hero-icon' src='images/" + hero + ".webp' alt='" +  hero + "'> <h4 class='heroName'>" + hero + "</h4> </div>";
}