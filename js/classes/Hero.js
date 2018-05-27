class Hero extends Humanoides {
    
    constructor(img, plat) {
        super(img, plat);
        this.positionX = Math.floor(Math.random() * Math.floor(this.plateau.largeur));
        this.positionY = Math.floor(Math.random() * Math.floor(this.plateau.hauteur));
        this.nom = "Heros";
        this.vitesse = 250;
        this.plateau = plat;
        this.isMoveLeft = false;
        this.isMoveRight = false;
        this.isMoveTop = false;
        this.isMoveDown = false;
    }
    
    move(code) {
        console.log(code);
        this.plateau.context.clearRect(0, 0, this.plateau.largeur, this.plateau.hauteur);
        switch(code.keyCode){
            case 38: //haut
                this.isMoveTop = true;
                break;
            
            case 39: //Droit
                this.isMoveRight = true;
                break;
                
            case 37: //Gauche
                this.isMoveLeft = true;
                break;
                
            case 40: //bas
                this.isMoveDown = true;
                break;     
        };
        
        this.dessinerHumanoide();
    }
    
    noMove(code) {
        console.log(code);
        this.plateau.context.clearRect(0, 0, this.plateau.largeur, this.plateau.hauteur);
        switch(code.keyCode){
            case 38: //haut
                this.isMoveTop = false;
                break;
            
            case 39: //Droit
                this.isMoveRight = false;
                break;
                
            case 37: //Gauche
                this.isMoveLeft = false;
                break;
                
            case 40: //bas
                this.isMoveDown = false;
                break;     
        };
        
        this.dessinerHumanoide();
    }
    
}
