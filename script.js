var button = document.getElementById("button");
var counter = document.getElementById("counter");
var upgrade = document.getElementById("upgrade");
var cost = document.getElementById("cost");
var numclick = document.getElementById("numclick");
var totpoint = document.getElementById("totpoint");

var adjust = 1;
var point = 0;
var price = 10;
var click = 0;
var total = 0;

button.onclick = buttonclick;

upgrade.onclick = upgradeclick;

counter.innerHTML = 'Points: ' + point;
cost.innerHTML = 'Upgrade costs: ' + price + ' points!';
numclick.innerHTML = 'Number of Clicks Made: ' + click;
totpoint.innerHTML = 'Total Amount of Points Earned: ' + total;

setInterval(check, 5)

function buttonclick(){
    point += adjust;
    total += adjust;
    click += 1;
    counter.innerHTML = 'Points: ' + point;
    numclick.innerHTML = 'Number of Clicks Made: ' + click;
    totpoint.innerHTML = 'Total Amount of Points Earned: ' + total;
}

function upgradeclick(){
    adjust += 1;
    point -= price;
    price += 10;
    console.log("check12");
}

function check(){
    if (point < price){
        upgrade.disabled = true;
    }

    else {
        upgrade.disabled = false;
    }
    counter.innerHTML = 'Points: ' + point;
    cost.innerHTML = 'Upgrade costs: ' + price + ' points!';
}