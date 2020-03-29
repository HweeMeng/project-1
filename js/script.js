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
//function to reduce the hp.

var reduceHp = function(){
    var hpPercent = (playerInfo.currentHP/playerInfo.maxHP)*100;
    hpBarGetter.style.width = hpPercent + "%";
    playerInfo.currentHP = (playerInfo.currentHP - currentEnemy[0].enAttack); // here to change the damage source.
    hpBarGetter.innerText = "HP: " + playerInfo.currentHP + "/" + playerInfo.maxHP;
    if (playerInfo.currentHP === 0) {
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
    }
};
//function to reduce enemy hp
var reduceEnemyHp = function(){
    var hpPercent = (currentEnemy[0].enCurrentHP/currentEnemy[0].enMaxHP)*100;
    enemyHpGetter.style.width = hpPercent + "%";
    currentEnemy[0].enCurrentHP = (currentEnemy[0].enCurrentHP - playerInfo.attack);
    enemyHpGetter.innerText = "HP:" + currentEnemy[0].enCurrentHP + "/" + currentEnemy[0].enMaxHP;
    if (currentEnemy[0].enCurrentHP === 0) {
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
    }
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
}
var leftArrow = function(){
currentMap = (Math.round((currentMap - 0.1) * 10) / 10);
updateMap();
addMonster();
}
var rightArrow = function(){
currentMap = (Math.round((currentMap + 0.1) * 10) / 10);
updateMap();
addMonster();
}





testButtonGetter.addEventListener('click', reduceEnemyHp)
rightArrowGetter.addEventListener('click', rightArrow)
leftArrowGetter.addEventListener('click', leftArrow)
upArrowGetter.addEventListener('click', upArrow)
downArrowGetter.addEventListener('click', downArrow)
atkBtnGetter.addEventListener('click', attackEnemy)