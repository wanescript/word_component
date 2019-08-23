
const vocabulary = ['programmer','development','software','hardware','memory','RAM','CPU','technology','loop','console','javascript','HTML','CSS','application','web development','IT','array','conditionals','objects','DNS','IP','server','design','routes','database','URL','URI','host','domain','hash','encryption','functions','cyber security','put','patch','get','http','delete','query','passwords','DHCP','root server','BIOS','ISP','users','OS','HTTPS','variables','code block','binary','buffer','load balancer','network','ping','trace router','pen testing','call stack','language','system design','user','vocabulary','pipeline','schema','modules','compiler','hash table','call stack','ROM','GIT','version control','certificate','project','string','DOM','API','MVC','technology','status code','parameters','arguments','call backs','bugs','debug','request','front-end','backend','range','RegEx','expressions','TTD','deployment','project','time management','file','upload','download','laptop','desktop','script','scripting','parser','float','integer','directory','variables','identifier','event listener','event handler','event','framework','nodes','DOM','AJAX','fetch','TCP','socket','protocol','parameters','parser','children','child','parent','define','instanceof','inject','instantiate','motherboard','NPM','div','let','const','components','dev-ops','fullstack','trace log','method','classes'];


const timer = document.getElementById('timer');
const wordCount = document.getElementById('wordCount');
let counter = 0;


wordCount.innerText= `Total vocabulary count: ${vocabulary.length}`;
timer.innerText= `Now starting...`;

function timerNotice() {

    setInterval(function(){
    counter +=1;
      
    if(counter >=3){
      timer.innerText= `${counter}secs ago`;
    }else{
      timer.innerText= `Current word.`
      
    }
    
}, 1000)};


function startFunction(){
  
setInterval(message,10000);
setInterval(resetTimer,10000);

}

function resetTimer (){

counter = 0;
 
}

function message (){

timer.innerText= `Current word.`

}
  
function words() {

randomWord();
setInterval(randomWord,10000);

}

function randomWord (){
  
let randomVocabulary = vocabulary[Math.floor(Math.random()*vocabulary.length)]

document.getElementById('output').innerText = `${randomVocabulary}`;

console.log(randomVocabulary);//testing purposes

}


timerNotice();
startFunction();
words();



