
export class Arena{

    constructor(name){
        this.name = name;
    }

    set name(x){
        this._name = x;
    };
    get name(){
        return this._name.charAt(0).toUpperCase() + this._name.slice(1); ;
    }

    
    addGladiator = g => {
        if(this.gladiator != null && this.gladiator.length > 1 )
        { 
            // this.gladiator.splice(0,1);
            this.gladiator.shift();
        }
        else if( this.gladiator == null)
        {
            this.gladiator = [];
        }
        
        this.gladiator.push(g);
        
    }
    get gladiators(){
        return this.gladiator;
    };

    fight(){
        // Trident beats Spear
        // Spear beats Club
        // Club beats Trident
        if(this.gladiator.length == 2){
            let weapon1="", weapon2="";
            weapon1 = this.gladiator[0].weapon;
            weapon2 = this.gladiator[1].weapon;

            // console.log(weapon1,weapon2);

            // console.log("1********************");
            // console.log(this.gladiator[0]?.weapon, this.gladiator[1]?.weapon);
            // console.log("1********************");
         
            if ((weapon1 == "Trident" && weapon2 == "Spear") || (weapon2 == "Trident" && weapon1 == "Spear") )
            {
                console.log("Trident beats Spear");
                (weapon1 == "Trident" && weapon2 == "Spear") ?  this.gladiator.splice(1,1) :  this.gladiator.splice(0,1);
            }
            else if ((weapon1 == "Spear" && weapon2 == "Club") || (weapon2 == "Spear" && weapon1 == "Club") )
            {
                console.log("Spear beats Club");
                (weapon1 == "Spear" && weapon2 == "Club") ?  this.gladiator.splice(1,1) :  this.gladiator.splice(0,1);
            }
            else if ((weapon1 == "Club" && weapon2 == "Trident") || (weapon2 == "Club" && weapon1 == "Trident") )
            {
                console.log("Club beats Trident");
                (weapon1 == "Club" && weapon2 == "Trident") ?  this.gladiator.splice(1,1) :  this.gladiator.splice(0,1);
            }
            else
            {
                console.log("Same weapons case");
                this.gladiator = [];
            }

            // console.log("2********************");
            // console.log(this.gladiator[0]?.weapon, this.gladiator[1]?.weapon);
            // console.log("2********************");

        }

    }
}