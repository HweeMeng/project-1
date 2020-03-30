console.log('welcome!');
// check out animateCSS
// update hp bar .style.width = healthPercentage + "%";

var hpBarGetter = document.getElementById('red-bar');
var testButtonGetter = document.getElementById('test-button');
var mainImgGetter = document.getElementById('obj-img');
var enemyNameGetter = document.getElementById('enemy-name-id');
var enemyHpGetter = document.getElementById('en-red-bar');
var enemyHpHldrGetter = document.getElementById('en-hp-bar');
var rightArrowGetter = document.getElementById('right-arrow');
var leftArrowGetter = document.getElementById('left-arrow');
var upArrowGetter = document.getElementById('up-arrow');
var downArrowGetter = document.getElementById('down-arrow');
var mapGetter = document.getElementById('map');
var atkBtnGetter = document.getElementById('atk-button');
var goldAmtGetter = document.getElementById('gold-amt');
var hpPotGetter = document.getElementById('hp-pot-text');
var hpPotImgGetter = document.getElementById('hp-pot');
var opposingObjHldGetter = document.getElementById('opposing-obj-hld');


//function to reduce the hp.
hpPotGetter.innerHTML = ": " + playerInfo.potions;
var reduceHp = function(){
    var hpPercent = (playerInfo.currentHP/playerInfo.maxHP)*100;
    hpBarGetter.style.width = hpPercent + "%";
    playerInfo.currentHP = (playerInfo.currentHP - currentEnemy[0].enAttack); // here to change the damage source.
    hpBarGetter.innerText = "HP: " + playerInfo.currentHP + "/" + playerInfo.maxHP;
    if (playerInfo.currentHP < 0) {
        hpBarGetter.style.backgroundColor = "gold";
        document.body.innerHTML="";
        alert("Game Over!")
    }
}
//function to add the monster in.
var addMonster = function (){
    unClearScreen();
    if (currentEnemy.length === 0){
        currentEnemy.push(enemies[randomNum(0,1)]);
        console.log("current enemy: " + currentEnemy[0].name);
        mainImgGetter.src = currentEnemy[0].url;
        enemyNameGetter.innerText = currentEnemy[0].name;
        enemyHpGetter.innerText = "HP:" + currentEnemy[0].enCurrentHP + "/" + currentEnemy[0].enMaxHP;
        console.log("curr hp: " + currentEnemy[0].enCurrentHP);
    } else if (currentEnemy.length > 0){
        unClearScreen();
        currentEnemy.pop();
        currentEnemy.push(enemies[randomNum(0,1)]);
        console.log("current enemy: " + currentEnemy[0].name);
        mainImgGetter.src = currentEnemy[0].url;
        enemyNameGetter.innerText = currentEnemy[0].name;
        enemyHpGetter.innerText = "HP:" + currentEnemy[0].enCurrentHP + "/" + currentEnemy[0].enMaxHP;
        console.log("curr hp: " + currentEnemy[0].enCurrentHP);
    } if (currentMap == 2.2){
        unClearScreen();
        currentEnemy.pop();
        currentEnemy.push(enemies[2]);
        console.log("current enemy: " + currentEnemy[0].name);
        mainImgGetter.src = currentEnemy[0].url;
        enemyNameGetter.innerText = currentEnemy[0].name;
        enemyHpGetter.innerText = "HP:" + currentEnemy[0].enCurrentHP + "/" + currentEnemy[0].enMaxHP;
        console.log("curr hp: " + currentEnemy[0].enCurrentHP);
    } if (currentMap == 4.2){
        unClearScreen();
        currentEnemy.pop();
        currentEnemy.push(enemies[3]);
        mainImgGetter.src = currentEnemy[0].url;
        clearScreen();
    } if(currentMap == 4.3){
        unClearScreen();
        currentEnemy.pop();
        clearScreen();
    } if (currentMap == 5.2){
        unClearScreen();
        currentEnemy.pop();
        currentEnemy.push(enemies[4]);
        console.log("current enemy: " + currentEnemy[0].name);
        mainImgGetter.src = currentEnemy[0].url;
        enemyNameGetter.innerText = currentEnemy[0].name;
        enemyHpGetter.innerText = "HP:" + currentEnemy[0].enCurrentHP + "/" + currentEnemy[0].enMaxHP;
    }
};
//function to reduce enemy hp
var reduceEnemyHp = function(){
    var hpPercent = (currentEnemy[0].enCurrentHP/currentEnemy[0].enMaxHP)*100;
    enemyHpGetter.style.width = hpPercent + "%";
    currentEnemy[0].enCurrentHP = (currentEnemy[0].enCurrentHP - playerInfo.attack);
    enemyHpGetter.innerText = "HP:" + currentEnemy[0].enCurrentHP + "/" + currentEnemy[0].enMaxHP;
    if (currentEnemy[0].enCurrentHP <= 0) {
        enemyHpGetter.style.backgroundColor = "gold";
        playerInfo.gold = playerInfo.gold + currentEnemy[0].goldDropped;
        goldAmtGetter.innerText = "Gold: " + playerInfo.gold;
        currentEnemy[0].enCurrentHP = currentEnemy[0].enMaxHP;
        currentEnemy.pop();
        mainImgGetter.src="img/opposing-obj1.jpg"
        clearScreen();
    }
}

// need to find out why updates the main enemy hp rather than current mob hp

var clearScreen = function(){
    enemyNameGetter.classList.add('hidden');
    enemyHpHldrGetter.classList.add('hidden');
    enemyHpGetter.classList.add('hidden');
    atkBtnGetter.classList.add('hidden');
}

var unClearScreen = function(){
    enemyNameGetter.classList.remove('hidden');
    enemyHpHldrGetter.classList.remove('hidden');
    enemyHpGetter.classList.remove('hidden');
    enemyHpGetter.style.backgroundColor = "red";
    atkBtnGetter.classList.remove('hidden');
    enemyHpGetter.style.width = "100%";
}

var removeBtnHidden = function (){
rightArrowGetter.classList.remove('hidden');
leftArrowGetter.classList.remove('hidden');
upArrowGetter.classList.remove('hidden');
downArrowGetter.classList.remove('hidden');
}
//id="enemy-name-id"//"en-red-bar"//".row action-hld"//atk-button
var updateMap = function (){
    removeBtnHidden()
    mapGetter.innerText = "Map: " + currentMap;
    if (currentMap > 0.99 && currentMap < 1.4){
        downArrowGetter.classList.add('hidden');
        if (currentMap == 1.1){
            leftArrowGetter.classList.add('hidden');
        }
        if (currentMap == 1.3) {
            rightArrowGetter.classList.add('hidden');
        }
    }else if (currentMap > 2.99 && currentMap < 3.4){
        upArrowGetter.classList.add('hidden')
            if (currentMap == 3.1){
            leftArrowGetter.classList.add('hidden');
            }
            if (currentMap == 3.2){
            removeBtnHidden()
            }
            if (currentMap == 3.3){
            rightArrowGetter.classList.add('hidden');
            }
    }else if(currentMap > 1.99 && currentMap < 2.4){
            if(currentMap == 2.1){
                leftArrowGetter.classList.add('hidden');
            }
            if(currentMap == 2.3){
                rightArrowGetter.classList.add('hidden');
            }
    }else if(currentMap > 3.99 && currentMap < 4.4){
            if(currentMap == 4.2){
                leftArrowGetter.classList.add('hidden');
                upArrowGetter.classList.add('hidden');
                if(playerInfo.bossKey > 0 ) {
                    upArrowGetter.classList.remove('hidden');
                }
            }
            if (currentMap == 4.3){
                upArrowGetter.classList.add('hidden');
                rightArrowGetter.classList.add('hidden');
                downArrowGetter.classList.add('hidden');
            }
    }else if (currentMap == 5.2){
            leftArrowGetter.classList.add('hidden');
            upArrowGetter.classList.add('hidden');
            rightArrowGetter.classList.add('hidden');
    }
};

var potUsed = function(){
    if(playerInfo.potions > 0 && playerInfo.currentHP < playerInfo.maxHP){
        playerInfo.potions = playerInfo.potions - 1;
        playerInfo.currentHP = playerInfo.currentHP + 30;
        if (playerInfo.currentHP > playerInfo.maxHP){
            playerInfo.currentHP = playerInfo.maxHP;
        }
        hpPotGetter.innerHTML = ": " + playerInfo.potions;
        hpBarGetter.innerText = "HP: " + playerInfo.currentHP + "/" + playerInfo.maxHP;
        var hpPercent = (playerInfo.currentHP/playerInfo.maxHP)*100;
        hpBarGetter.style.width = hpPercent + "%";
    }
}

var clickBuyPot = function(){
    if(playerInfo.gold>=100){
        playerInfo.potions = playerInfo.potions +1;
        playerInfo.gold = playerInfo.gold - 100;
        goldAmtGetter.innerText = "Gold: " + playerInfo.gold;
        hpPotGetter.innerHTML = ": " + playerInfo.potions;
    } else {
        alert("You have not enough gold!");
    }
}

var clickBuyKey = function(){
    if(playerInfo.gold>=2500 && playerInfo.bossKey === 0){
        playerInfo.bossKey = playerInfo.bossKey +1;
        playerInfo.gold = playerInfo.gold - 2500;
        goldAmtGetter.innerText = "Gold: " + playerInfo.gold;
        keyGetter = document.getElementById("buy-key");
        keyGetter.src = "";
    } else {
        alert("You have not enough gold!");
    }
}

var enterShop = function(){
    mainImgGetter.classList.remove('col-8');
    mainImgGetter.classList.remove('offset-2');
    mainImgGetter.classList.add('col-3');
    mainImgGetter.classList.add('offset-3');
    mainImgGetter.classList.add('buy-pot');
    mainImgGetter.src = "img/hppot-shop.png";
    mainImgGetter.style.height = "120px";
    if(playerInfo.bossKey == 0){
        var createKey = document.createElement('img');
        createKey.classList.add("col-3")
        createKey.src = "img/key.png";
        createKey.id = "buy-key"
        createKey.innerText = "Price: 2500g";
        opposingObjHldGetter.appendChild(createKey);
        var keyIdGetter = document.getElementById('buy-key');
        keyIdGetter.addEventListener('click', clickBuyKey);
    }
    mainImgGetter.addEventListener('click', clickBuyPot);
};

var leaveShop = function(){
//img class= "col-8 offset-2 opposing-obj" id="obj-img" src="img/opposing-obj1.jpg">
    mainImgGetter.style.height = "350px";
    mainImgGetter.classList.add('col-8');
    mainImgGetter.classList.add('offset-2');
    mainImgGetter.classList.remove('col-3');
    mainImgGetter.classList.remove('offset-3');
    mainImgGetter.classList.remove('buy-pot');
    mainImgGetter.id ="obj-img";
    mainImgGetter.src = "img/opposing-obj1.jpg"
    keyGetter = document.getElementById("buy-key");
    opposingObjHldGetter.removeChild(keyGetter);
}

var attackEnemy = function (){
currentEnemy[0].enCurrentHP = currentEnemy[0].enCurrentHP - playerInfo.attack;
reduceEnemyHp();
reduceHp();
}

var upArrow = function(){
currentMap = (Math.round((currentMap + 1) * 10) / 10);
updateMap();
addMonster();
}
var downArrow = function(){
currentMap = (Math.round((currentMap - 1) * 10) / 10);
updateMap();
addMonster();
console.log(mainImgGetter.src);
}
var leftArrow = function(){
    if(currentMap == 4.3){
        currentMap = (Math.round((currentMap - 0.1) * 10) / 10);
        updateMap();
        leaveShop();
    }else{
    currentMap = (Math.round((currentMap - 0.1) * 10) / 10);
    updateMap();
    addMonster();
    }
};

var rightArrow = function(){
    if(currentMap == 4.2){
    currentMap = (Math.round((currentMap + 0.1) * 10) / 10);
    updateMap();
    enterShop()
    }else{
    currentMap = (Math.round((currentMap + 0.1) * 10) / 10);
    updateMap();
    addMonster();
    }
}

rightArrowGetter.addEventListener('click', rightArrow)
leftArrowGetter.addEventListener('click', leftArrow)
upArrowGetter.addEventListener('click', upArrow)
downArrowGetter.addEventListener('click', downArrow)
atkBtnGetter.addEventListener('click', attackEnemy)
hpPotImgGetter.addEventListener('click', potUsed)





//reaching shop room