var mecanique = new Mecanique();
//Lancement du jeu et création
mecanique.init();

function lancement(){
        mecanique.dessinerJeu();
        mecanique.update();
        requestAnimationFrame(lancement);
    }
lancement();

addEventListener("keydown", function(e){
    mecanique.hero.move(e);
});

addEventListener("keyup", function(e){
    mecanique.hero.noMove(e);
});

document.querySelector("#checkBox").addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        mecanique.plateau.musique = false;
    } else {
        // Checkbox is not checked..
        mecanique.plateau.musique = true;
    }
});