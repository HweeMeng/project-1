console.log('welcome!');
// check out animateCSS
// update hp bar .style.width = healthPercentage + "%";

var hpBarGetter = document.getElementById('red-bar');
var testButtonGetter = document.getElementById('test-button');
var mainImgGetter = document.getElementById('obj-img');
var enemyNameGetter = document.getElementById('enemy-name-id');
var enemyHpGetter = document.getElementById('en-red-bar');




//function to reduce the hp.
var reduceHp = function(){
    var hpPercent = (playerInfo.currentHP/playerInfo.maxHP)*100;
    hpBarGetter.style.width = hpPercent + "%";
    playerInfo.currentHP = (playerInfo.currentHP - 2); // here to change the damage source.
    hpBarGetter.innerText = "HP: " + playerInfo.currentHP + "/" + playerInfo.maxHP;
    if (playerInfo.currentHP === 0) {
        hpBarGetter.style.backgroundColor = "gold";
    }
}
//function to add the monster in.
var addMonster = function (){
    currentEnemy.push(enemies[randomNum(0,1)]);
    mainImgGetter.src = currentEnemy[0].url;
    enemyNameGetter.innerText = currentEnemy[0].name;
    enemyHpGetter.innerText = "HP:" + currentEnemy[0].enCurrentHP + "/" + currentEnemy[0].enMaxHP;
};
//function to reduce enemy hp
var reduceEnemyHp = function(){
    var hpPercent = (currentEnemy[0].enCurrentHP/currentEnemy[0].enMaxHP)*100;
    enemyHpGetter.style.width = hpPercent + "%";
    currentEnemy[0].enCurrentHP = (currentEnemy[0].enCurrentHP - playerInfo.attack);
    enemyHpGetter.innerText = "HP:" + currentEnemy[0].enCurrentHP + "/" + currentEnemy[0].enMaxHP;
    if (currentEnemy[0].enCurrentHP === 0) {
        enemyHpGetter.style.backgroundColor = "gold";
    }
}
testButtonGetter.addEventListener('click', reduceEnemyHp)