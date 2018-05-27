class Humanoides {
    
    constructor(img, plateau, x, y) {
        this.positionX = x;
        this.positionY = y;
        this.largeur = 30;
        this.hauteur = 30;
        this.plateau = plateau;
        this.img = new Image();
        this.img.onload = () => {
            this.pret = true;
            console.log("coucou class Humanoide");
            this.dessinerHumanoide();
        }
        this.img.src = img;
        
        console.log("huma plateau", this.plateau);
    }
    
    dessinerHumanoide() {
        if(this.pret)
        {
            this.plateau.context.drawImage(this.img, this.positionX, this.positionY, this.largeur, this.hauteur);
        }
    }
    
    positionnerHuma(){
        
        this.positionX = Math.floor(Math.random() * Math.floor(this.plateau.largeur - 30));
        
         this.positionY = Math.floor(Math.random() * Math.floor(this.plateau.hauteur - 30)); 
    }
}