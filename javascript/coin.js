const character = {
    hairColor:'brown',
    eyeColor: 'blue',
    clothesColor: 'grey',
    goldCoin: 0,
    isDead: false,
    position: {
        x: 0,
        y: 0,
    },
    inventory: ['sword', 'helmet', 'shirt', 'map']  
}

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
    }
}