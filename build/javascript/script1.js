// Writing different functions for practice.

// const vocabulary = ['programmer','development','software','hardware','memory','RAM','CPU','technology','loop','console','javascript','HTML','CSS','application','web development','IT','array','conditionals','objects','DNS','IP','server','design','routes','database','URL','URI','host','domain','hash','encryption','functions','cyber security','put','patch','get','http','delete','patch','query','passwords','DHCP','root server','BIOS','ISP','users','OS','HTTPS','variables','code block','binary','buffer','load balancer','network','ping','trace router','pen testing'];

// words=()=>{
//   let i = 0; 
//   setInterval(()=>{
//     document.getElementById('output').innerHTML = vocabulary[i];
//     console.log(vocabulary[i]);
//     i = (i+1) % vocabulary.length; 
//   },10000)
// }

// words();

//-------------------------------------------------------

// const vocabulary = ['programmer','development','software','hardware','memory','RAM','CPU','technology','loop','console','javascript','HTML','CSS','application','web development','IT','array','conditionals','objects','DNS','IP','server','design','routes','database','URL','URI','host','domain','hash','encryption','functions','cyber security','put','patch','get','http','delete','patch','query','passwords','DHCP','root server','BIOS','ISP','users','OS','HTTPS','variables','code block','binary','buffer','load balancer','network','ping','trace router','pen testing'];

// function words() {
//   let i = 0; 
//   setInterval(function(){
//     document.getElementById('output').innerHTML = vocabulary[i];
//     console.log(vocabulary[i])
    
//     i = (i+1) % vocabulary.length;
//   },1000);
    
// }


// words();

//Alternate results--------------------------------

const vocabulary = ['programmer','development','software','hardware','memory','RAM','CPU','technology','loop','console','javascript','HTML','CSS','application','web development','IT','array','conditionals','objects','DNS','IP','server','design','routes','database','URL','URI','host','domain','hash','encryption','functions','cyber security','put','patch','get','http','delete','patch','query','passwords','DHCP','root server','BIOS','ISP','users','OS','HTTPS','variables','code block','binary','buffer','load balancer','network','ping','trace router','pen testing'];

//10 millisecond random looped function

function words() {
 
  setInterval(function(){

    let randomVocabulary = vocabulary[Math.floor(Math.random()*vocabulary.length)];
    document.getElementById('output').innerHTML = randomVocabulary;
    
  // View the previous and current strings outputted from the random looped array inside the console.
  console.log(randomVocabulary);
  
  },10000);
    
}

words();


//------------------------------------------------

/*Smaller function that produces random vocabulary. Console dot log to test the random looped array. */

// let randomVocabulary = vocabulary[Math.floor(Math.random()*vocabulary.length)];

// console.log(randomVocabulary);
