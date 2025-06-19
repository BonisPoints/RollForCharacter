function createHeroes(hero){
    let newHTML = '';
    newHTML += "<!--" + hero + "--> <div class='hero' id='enabled'> <img class='hero-icon' src='images/" + hero + ".webp' alt='" +  hero + "'> <h4 class='heroName'>" + hero + "</h4> </div>";
    return newHTML;
}

const heroes = ["Acrid", "Artificer", "Bandit", "Captain", "CHEF", "Commando", "Engineer", "False_Son", "Heretic", "Huntress", "Loader", "Mercenary", "MUL-T", "Railgunner", "Rex", "Seeker", "Void_Fiend"];
let html = '';

for (var hero of heroes){
    html += createHeroes(hero);
}
const characterContainer = document.getElementById("characters");
characterContainer.insertAdjacentHTML("afterbegin", html);

document.querySelectorAll('.hero').forEach(item => {
    item.addEventListener('click', event => {
        item.id == "enabled" ? item.id = "disabled" : item.id = "enabled";
        console.log(item.id);
    })
})