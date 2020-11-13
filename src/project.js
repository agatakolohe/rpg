//Business Logic// functions go here
export default class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.hunger = 100;
    this.hitPoints = 100;
    //this.inventory = [];
  }

  hungerLevel() {
    if (this.hunger < 50) {
      return 'what about second breakfast?'; //alert 
    } else {
      return 'stupid fat hobbit!'
    }
  }

//   exhaustion(effect) {
//     if (effect = 
//     }
//   }
// }
// Character.prototype.heal = function(healing){   //  PLAYER HEALING FUNCTION
//   if(this.hp + healing > 100){
//     this.hp = 100;
//   }
//   else{
//     this.hp += healing;
//   }
//   game.displayAll();
// };