
// GESTION AFFICHAGE DE PHRASES MOTIVANTES !!!! 
let phrase = document.getElementById('phrase');
let button = document.getElementById('change')



async function changePhrase() {
    // const cors = {headers: {'mode':'no-cors'}}
    // const data = await fetch('http://localhost:8000', cors);
    console.log("fonction lancée !")
    const data = await fetch('http://localhost:8000');
    console.log("data",data)
    // console.log(data.mode)
    console.log("data ok ?")
    const result = await data.json()
    phrase.innerHTML = JSON.stringify(result)
    console.log("fin de changePhrase")
}
changePhrase()


// button.addEventListener("click", changePhrase());
button.addEventListener("click", changePhrase);

function addNewCitation(){
    const newCitation = document.getElementById('newCitation').value 
    
}
