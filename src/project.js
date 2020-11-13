//Business Logic// functions go here
export default class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.hunger = 100;
    //this.inventory = [];
  }

  hungerLevel() {
    if (this.hunger < 50) {
      return 'what about second breakfast?'; //alert 
    } else {
      return 'stupid fat hobbit!'
    }
  }
}
