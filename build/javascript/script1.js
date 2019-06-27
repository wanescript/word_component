
const vocabulary = ['programmer','development','software','hardware','memory','RAM','CPU','technology','loop','console','javascript','HTML','CSS','application','web development','IT','array','conditionals','objects','DNS','IP','server','design','routes','database','URL','URI','host','domain','hash','encryption','functions','cyber security','put','patch','get','http','delete','query','passwords','DHCP','root server','BIOS','ISP','users','OS','HTTPS','variables','code block','binary','buffer','load balancer','network','ping','trace router','pen testing','call stack','language','system design','user','vocabulary','pipeline','schema','modules','compiler','hash table','call stack','ROM','GIT','version control','certificate','project','string','DOM','API','MVC','technology','status code','parameters','call backs','bugs','debug','request','front-end','backend','range','RegEx','expressions','TTD','deployment','project','time management','file','upload','download','laptop','desktop','script','scripting','parser','float','integer','directory','variables','identifier','event listener','event handler','event','framework'];


//Insert the world vocabulary once the page load.
output.innerText = `${vocabulary.length} vocabulary words`;

const timer = document.getElementById('timer');
const wordCount = document.getElementById('wordCount');
let counter = 0;



function timerNotice() {

    setInterval(function(){
    counter +=1;
      
    if(counter >=2){
      timer.innerText= `${counter}secs ago`;
    }else{
      timer.innerText= `${counter}sec ago`;
    }

    
}, 1000)};


function startFunction(){
  
  setInterval(message,5000);
  
}


 
function message (){
    timer.innerText= `Current word.`
    clearInterval();
    console.log('clear')
    
}
  
//random looped function

function words() {
 
  setInterval(randomWord,5000);
}

function randomWord (){
  
let randomVocabulary = vocabulary[Math.floor(Math.random()*vocabulary.length)];
document.getElementById('output').innerText = randomVocabulary;

console.log(randomVocabulary);
}


wordCount.innerText= `Total vocabulary count:  ${vocabulary.length}`;

timer.innerText= `Now starting...`;

timerNotice();
startFunction();
words();






