

var nb = Math.floor(Math.random() * 100) + 1; /* on génère un nombre aléatoire */
var btn = document.getElementById('btn'); /* on déclare que la variable javascript "btn" correspond à notre élément HTML avec l'id "btn" qui est notre <button> */

btn.addEventListener('click', function(e){
    var saisie = document.getElementById('test').value; /* la variable "saisie" correspond à la valeur de l'élément input avec l'id "test" */
    e.preventDefault(); /* empêche de recharger la page html quand on clique sur le bouton */
    
        if(saisie > nb) {
            document.getElementById('moins').style.visibility='visible';
            document.getElementById('plus').style.visibility='hidden';
        }
        else if(saisie < nb){
            document.getElementById('plus').style.visibility='visible';
            document.getElementById('moins').style.visibility='hidden';
        }
        else if (saisie == nb){
            document.getElementById('bravo').style.visibility='visible';
        }

});

document.getElementById('test').onkeyup=function(e){
    if(e.keyCode != 8){
        var input=parseInt(this.value);
        if (input<0 || input>100) {
            alert("Le nombre est compris entre 0 et 100 !");
            return;
        }
        if (isNaN(input)) {
        alert("Seulement les nombres sont acceptés !");
        return false;
        }
    }
    if(e.keyCode === 13){
        btn.click();
    }
} 

console.log(nb);

var btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function(){
    location.reload(true);
});

