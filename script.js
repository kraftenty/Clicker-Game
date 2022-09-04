var maeso=3000;
var maesoIncrease=100;

var level=1;
var exp=0;
var expUpNum=120;
var expIncrease=20;

var petNum=0;
var petMulti=0;

var ad=10;
function hunt(){
  maeso+=maesoIncrease;
  if(level>=300){
    alert('축하합니다! GAME CLEAR!');
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundSize="100%";
    document.body.style.backgroundImage="url('clearwallpaper.jpg')";
  }
  exp+=expIncrease;
  if(exp>=expUpNum){
    exp-=expUpNum;
    level++;
    expUpNum=parseInt(expUpNum*1.13);
  }
  informationUpdate();
}

function reinforce(){
  if(maeso>=2000*level){
    maeso-=2000*level;
    expIncrease+=10*level;
  }
  informationUpdate();
}

function getmoney(){
  if(maeso>=2000*level){
    maeso-=2000*level;
    maesoIncrease+=50*level;
  }
  informationUpdate();
}

function barChange(){
  var percent= parseInt((exp/expUpNum)*100);
  if(percent<11){
    percent=11;
  }
  document.querySelector("#bar").style.width=percent+'%';
}

function buypet(){
  if(maeso>=1000000){
    maeso-=1000000;
    petNum++;
    informationUpdate();
  }
}

function multipet(){
  if(maeso>=1000000000){
    maeso-=1000000000;
    petMulti+=10;
    informationUpdate();
  }
}

function petSystem(){
  petNum+=petMulti;
  expIncrease+=petNum*level;
  informationUpdate();
}

function info(){
  alert('-=사냥=-\n메소를 획득하며, 현재 공격력 만큼의 경험치를 올린다.');
  alert('-=무기강화=-\n무기강화 비용:2000메소 * 현재레벨\n공격력 증가:10 * 현재레벨');
  alert('-=재획=-\n재획비용:2000메소 * 현재레벨\n메소 획득 증가:50 * 현재레벨');
  alert('-=펫 구매=-\n비용:백만 메소\n펫 한 마리 추가\n참고:펫 한마리는 1초당 공격력 1을 증가시킵니다.');
  alert('-=펫 증식=-\n펫 증식 비용:십억 메소\n효과:1초당 펫 10마리씩 추가');
  alert('게임 목표\n300레벨을 달성하는 것입니다.');
  alert('주의사항\n게임 중 새로고침을 하거나 탭을 닫으면 게임이 초기화됩니다.');
}

setInterval(petSystem,1000);

window.onkeydown = (e) => function(){
  if(e.key=='s'){
    hunt(); 
    barChange();
  }
  if(e.key=='q'){
    reinforce();
  }
  if(e.key=='w'){
    getmoney();
  }
  if(e.key=='e'){
    buypet();
  }
  if(e.key=='d'){
    multipet();
  }
  
  
}();

function informationUpdate(){
  document.querySelector("#maeso").innerHTML=maeso;
  document.querySelector('#level').innerHTML=level;
  document.querySelector('#exp').innerHTML=exp;
  document.querySelector('#expupnum').innerHTML=expUpNum;
  document.querySelector('#expincrease').innerHTML=expIncrease;
  document.querySelector('#petnum').innerHTML=petNum;
}