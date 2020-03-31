console.log('welcome to database!');

var randomNum = function (min, max) {
  return Math.round(Math.random() * (max - min) ) + min;
};

var currentMap = 0.2; // co-ordinates of map is y.x

var currentEnemy = [];

var playerInfo = {
    name: "Traveler",
    currentHP: 150,
    maxHP: 150,
    gold: 1000,
    attack: 15,
    equipped: {
                weapon: "",
                armor: "",
    },
    potions: 3,
    bossKey: 0,
};

var enemies = [
    {
        name: "Goblin",
        enCurrentHP: 20,
        enMaxHP: 20,
        enAttack: randomNum(2,5),
        goldDropped : randomNum(15,40),
        url: "img/goblin.jpeg"
    },
    {
        name: "Skeleton Warrior",
        enCurrentHP: 40,
        enMaxHP: 40,
        enAttack: randomNum(5,10),
        goldDropped : randomNum(30,70),
        url: "img/skeleton.jpg"
    },
        {
        name: "Shadow",
        enCurrentHP: 150,
        enMaxHP: 150,
        enAttack: randomNum(10,20),
        goldDropped : randomNum(700,1200),
        url: "img/boss.jpg"
    },
        {
        name: "Waiting Room",
        enCurrentHP: 0,
        enMaxHP: 0,
        enAttack: 0,
        goldDropped : 0,
        url: "img/waiting-room.jpg"
    },
        {
        name: "Big Boss",
        enCurrentHP: 300,
        enMaxHP: 300,
        enAttack: randomNum(20,25),
        goldDropped : randomNum(300,700),
        url: "img/big-boss.jpg"
    },
];

var shopItems = [
    {
        name: "Dagger",
        addAtk: 10,
        price: 500
    },
    {
        name: "Sword",
        addAtk: 20,
        price: 2000
    },
    {
        name: "Sledgehammer",
        addAtk: 50,
        price: 10000
    },
    {
        name: "Potion",
        recHP: 30,
        price: 100
    },
    {
        name: "Boss room's Key",
        price: 2500
    }
];