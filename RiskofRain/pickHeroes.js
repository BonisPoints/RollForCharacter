function pickTheHeroes(amount){
    let allowed = [];
    let html = "";

    document.querySelectorAll('#enabled img').forEach(item => {
        allowed.push(item.getAttribute("alt"));
        //alert(item.getAttribute("alt"));
    })
 
    for(let i = 0; i < amount; i++){
        console.log(i);
        html += createHeroes(allowed[Math.floor(Math.random() * allowed.length)]);
    }
    
    const chosenContainer = document.getElementById("chosenCharacters");
    chosenContainer.innerHTML = "";
    chosenContainer.insertAdjacentHTML("afterbegin", html);
}
