console.log('welcome to database!');

var randomNum = function (min, max) {
  return Math.round(Math.random() * (max - min) ) + min;
};

var currentMap = 0.2;
console.log("current map: " + currentMap);
var currentEnemy = [];

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
    },
        {
        name: "Shadow",
        enCurrentHP: 150,
        enMaxHP: 150,
        enAttack: 10,
        goldDropped : randomNum(300,700),
        url: "img/boss.jpg"
    },
];

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