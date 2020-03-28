console.log('welcome to database!');

var randomNum = function (min, max) {
  return Math.round(Math.random() * (max - min) ) + min;
};

var currentMap = 0.2;
console.log("current map: " + currentMap);
var currentEnemy = [    {
        name: "Skeleton Warrior",
        enCurrentHP: 40,
        enMaxHP: 40,
        enAttack: 7,
        goldDropped : randomNum(30,70),
        url: "img/skeleton.jpg"
    }];

var playerInfo = {
    name: "Traveler",
    currentHP: 100,
    maxHP: 100,
    gold: 0,
    attack: 5,
    equipped: {
                weapon: "",
                armor: "",
    },
    inventory: {

    }
};

var enemies = [
    {
        name: "Goblin",
        enCurrentHP: 20,
        enMaxHP: 20,
        enAttack: 3,
        goldDropped : randomNum(15,40),
        url: ""
    },
    {
        name: "Skeleton Warrior",
        enCurrentHP: 40,
        enMaxHP: 40,
        enAttack: 7,
        goldDropped : randomNum(30,70),
        url: "img/skeleton.jpg"
    }
];

var boss = {
    Name: "Shadow",
    enCurrentHP: 200,
    enMaxHP: 200,
    enAttack: 3,
    goldDropped : randomNum(5000,10000)
}

var shopItems = [
    {
        name: "Dagger",
        addAtk: 10,
    },
    {
        name: "Sword",
        addAtk: 20,
    },
    {
        name: "Sledgehammer",
        addAtk: 50,
    },
    {
        name: "Potion 1",
        recHP: 20,
    },
    {
        name: "Potion 2",
        recHP: 50,
    },
    {
        name: "Shadow room's Key",
    }
];


console.log("database name: " + playerInfo.name);
console.log("database currentHP: " + playerInfo.currentHP);
console.log("database maxHP: " + playerInfo.maxHP);
console.log("database gold: " + playerInfo.gold);
console.log("database equipped: " + playerInfo.equipped.weapon);
console.log("database equippedAr: " + playerInfo.equipped.armor);
console.log("database potions: " + playerInfo.inventory.potions);
console.log("database keys: " + playerInfo.inventory.key);
console.log("============database============");

for (i=0; i<enemies.length; i++){
console.log(enemies[i].name);
};