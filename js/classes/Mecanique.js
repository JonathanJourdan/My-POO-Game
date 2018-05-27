class Mecanique {
    constructor(){
        this.largeurEcran4 = document.body.clientWidth / 4;
        this.largeurEcran = document.body.clientWidth / 2 + this.largeurEcran4;
        this.plateau = new Plateau("Ressources/img/CastleExample_3.png", this.largeurEcran, document.body.clientHeight);
        this.hero = new Hero("Ressources/img/hero.png", this.plateau);
        this.monstre = new Monstre("Ressources/img/monster.png", this.plateau);
        this.tabEnnemies = [];
        this.score = 0;
        this.highScore = 0;
        this.sonWin = new Audio("Ressources/media/arg.mp3");
        this.sonBombe = new Audio("Ressources/media/boum.mp3");
    }

    // dessiner les éléments dans le plateau
    dessinerJeu() {
        
        this.plateau.dessinerCanvas();
        this.hero.dessinerHumanoide();
        this.monstre.dessinerHumanoide();
        for(let i=0; i < this.tabEnnemies.length; i++)
            {
                this.tabEnnemies[i].dessinerHumanoide();
            }
       // console.log(this.tabEnnemies);
        
    }
    
    
    init(){
        this.monstre.positionnerHuma();
        //this.tabEnnemies.push(this.monstre);
        this.creerBombe();
        console.log(this.tabEnnemies);
    }
    
    
    //initialisation du jeu
    update(){
        if(this.hero.isMoveDown)
        {
            this.hero.positionY += 5;
        }
        if(this.hero.isMoveTop)
        {
            this.hero.positionY -= 5;
        }
        if(this.hero.isMoveRight)
        {
            this.hero.positionX += 5;
        }
        if(this.hero.isMoveLeft)
        {
            this.hero.positionX -= 5;
        }
        
        this.plateau.muteMusique();
        
        this.positionBordPlateau();
       
        this.collisionMonstre();
        
        this.collisionBombe();
    }
    
    creerBombe(){
        for(let i=0; i < 10; i++)
            {
                let bombe = new Bombe("Ressources/img/bomb.png", this.plateau);
                bombe.positionnerHuma();
                this.tabEnnemies.push(bombe);
            }

    }
    
    
    positionBordPlateau() {
        if(this.hero.positionX <= -10)
            {
                this.hero.positionX = this.largeurEcran - 10;
            }
        
        else if(this.hero.positionX >= this.largeurEcran - 10)
            {
                this.hero.positionX = 10;
            }
        else if(this.hero.positionY <= -10)
            {
                this.hero.positionY = document.body.clientHeight - 10;
            }
        else if(this.hero.positionY >= document.body.clientHeight + 10)
            {
                this.hero.positionY = 0;
            }    
    }
    
    collisionMonstre() {
        if (this.hero.positionX < this.monstre.positionX + 30 && this.hero.positionX + 30 > this.monstre.positionX && this.hero.positionY < this.monstre.positionY + 30 && 30 + this.hero.positionY > this.monstre.positionY) {
            // collision détectée !
            this.score += 1;
            document.getElementsByClassName("score")[0].innerHTML = "Score : "+this.score;
            if(this.score > this.highScore)
            {
                this.highScore = this.score;
                document.getElementsByClassName("hightScore")[0].innerHTML = "Meilleur score : "+this.highScore;
            }
            console.log(this.score);
            this.sonWin.play();
            this.init();
        } 
    }
    
    
    collisionBombe() {
        for(let i=0; i < this.tabEnnemies.length; i++)
        {
            if (this.hero.positionX < this.tabEnnemies[i].positionX + 30 && this.hero.positionX + 30 > this.tabEnnemies[i].positionX && this.hero.positionY < this.tabEnnemies[i].positionY + 30 && 30 + this.hero.positionY > this.tabEnnemies[i].positionY) {
                this.score = 0;
                document.getElementsByClassName("score")[0].innerHTML = "Score : "+this.score;
                this.tabEnnemies = [];
                this.sonBombe.play();
                this.init();
                
            }
        }  
    }
    
    
    
}