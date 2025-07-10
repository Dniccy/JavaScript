/*
const character = {
    hairColor:'brown',
    eyeColor: 'blue',
    clothesColor: 'grey',
    goldCoin: 0,
    isDead: false,
    position: {
        x: 0,
        y: 0, // Adjusted the inital y position
    },
    inventory: ['sword', 'helmet', 'shirt', 'map'],  
};

const chest = {
    isOpen: false,
    isLocked: false,
    coins: 10,
    inventory: ['sword', 'helmet', 'shirt', 'map'],
    openChest: function () {
    if (!this.isOpen) {
      this.isOpen = true;
      this.coins = 0;
      console.log("chest opened! Collected 10 coins!");  
    }
    },
};
console.log("Character object", character);
*/
//Character class creation
class Character {
    constructor(name, health, strength, hairColor, clothesColor, goldCoins) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.hairColor = hairColor;
        this.clothesColor = clothesColor;
        this.goldCoins = goldCoins;
    }
}

// New character instances
const player = new Character ("Niccy", 1000, 500, "brown", "gold", 99);
const enemy = new Character ()

console.log(player);
// console.Log(enemy);
// console.Log(player.name);

// Chest Class

class Chest {
    constructor (isOpen, coins) {
    this.isOpen = isOpen;
    this.coins = coins;
}

openChest() { 
    if (!this.isOpen) {
     this.isOpen = true;
     this.coins = 0;
     console.log("Chest opened! Collected 10 coins!");
    }
  }
}
// Create a new chest instance 
const myChest = new Chest(false, 100);

// Open the chest
myChest.openChest();

console.log(myChest.coins);