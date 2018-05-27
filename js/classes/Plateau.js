class Plateau {
    
    constructor(img, l, h) {
        
        this.largeur = l;
        this.hauteur = h;
        this.img = new Image();
        this.creerCanvas();
        this.img.onload = () => {
            this.pret = true;
            this.dessinerCanvas();
            console.log("coucou");
        }
        this.son = new Audio("Ressources/media/fond_sonore.mp3");
        this.lancerMusique();
        this.img.src = img;
        this.musique = true;
        
    }
    
    creerCanvas() {
        
        this.panneauControl = document.createElement("div");
        
        this.titre = document.createElement("h1");
        this.titre.innerHTML = "John Game";
        this.titre.style.textAlign = "center";
        
        this.score = document.createElement("h2");
        this.score.setAttribute("class", "score");
        this.hightScore = document.createElement("h3");
        this.hightScore.setAttribute("class", "hightScore");
        this.score.innerHTML = "Score : 0";
        this.hightScore.innerHTML = "Meilleur score : 0";
        
        this.muteMusic = document.createElement("p");
        this.muteMusic.innerHTML = '<p>Mute music : <input id="checkBox" type="checkbox"></p>';
        
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("id", "canvas");
        this.canvas.setAttribute("height", this.hauteur);
        this.canvas.width = this.largeur;
        
        this.context = this.canvas.getContext('2d');
        
        this.panneauControl.appendChild(this.titre);
        this.panneauControl.appendChild(this.score);
        this.panneauControl.appendChild(this.hightScore);
        this.panneauControl.appendChild(this.muteMusic);
        
        document.body.appendChild(this.panneauControl);
                      
        document.body.appendChild(this.canvas);
        
    }
    
    dessinerCanvas() {
        if(this.pret)
        {
        this.context.drawImage(this.img, 0, 0, this.largeur, this.hauteur);
        }
        
    }
    
    lancerMusique() {
        this.son.loop = true;
        this.son.play();
        console.log("test sonnnnnnnnnnnnnnnnnnnnn");
    }
    
    muteMusique() {
        if(this.musique == false)
        {
          this.son.pause();  
        }
        else {
            this.son.play();
        }
        
    }

}