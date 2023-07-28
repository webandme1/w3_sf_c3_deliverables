import { Weapon } from "./enums.js";

export class Gladiator{
    constructor(name,weapon = Weapon ){
        //if((weapon instanceof Weapon)==false)
        if(weapon != Weapon.Spear && weapon != Weapon.Club && weapon != Weapon.Trident)
        {
            //throw new Error("Improper Assignment to weapon");
            console.log("Improper Assignment to weapon");
        }
    // constructor(name,weapon = Weapon ){
        this.name = name;
        // this.weapon = weapon.name;
        this.weapon = weapon;
    }
   
}