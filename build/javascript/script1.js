
const vocabulary = ['programmer','development','software','hardware','memory','RAM','CPU','technology','loop','console','javascript','HTML','CSS','application','web development','IT','array','conditionals','objects','DNS','IP','server','design','routes','database','URL','URI','host','domain','hash','encryption','functions','cyber security','put','patch','get','http','delete','query','passwords','DHCP','root server','BIOS','ISP','users','OS','HTTPS','variables','code block','binary','buffer','load balancer','network','ping','trace router','pen testing','call stack','language','system design','user','vocabulary','pipeline','schema','modules','compiler','hash table','call stack','ROM','GIT','version control','certificate','project','string','DOM','API','MVC','technology','status code','parameters','call backs','bugs','debug','request','front-end','backend','range','RegEx','expressions','TTD','deployment','project','time management','file','upload','download','laptop','desktop','script','scripting','parser','float','integer','directory','variables','identifier','event listener','event handler','event','framework'];


const timer = document.getElementById('timer');
let counter = 0;



function timerNotice() {
 
    setInterval(function(){
    counter +=1;
    timer.innerText= `Timer:${counter}sec ago`;

    if(counter 
      >=2){
      timer.innerText= `Timer:${counter}secs ago`;
    }
    
   
    }, 5000)};

    
timerNotice();


//10 millisecond random looped function

function words() {
 
  setInterval(function(){

    let randomVocabulary = vocabulary[Math.floor(Math.random()*vocabulary.length)];
    document.getElementById('output').innerText = randomVocabulary;
    
  // View the previous and current strings outputted from the random looped array inside the console.
  console.log(randomVocabulary);
  }, 5000);
    
}

words();


//Insert the world vocabulary once the page load.
output.innerHTML = `${vocabulary.length} vocabulary words`;
timer.innerText= `Starting in 5 seconds...`;
