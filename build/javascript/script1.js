

//const vocabulary = ['programmer','development','software','hardware','memory','RAM','CPU','technology','loop','console','javascript','HTML','CSS','application','web development','IT','array','conditionals','objects','DNS','IP','server','design','routes','database','URL','URI','host','domain','hash','encryption','functions','cyber security','put','patch','get','http','delete','patch','query','passwords','DHCP','root server','BIOS','ISP','users','OS','HTTPS','variables','code block','binary','buffer','load balancer','network','ping','trace router','pen testing'];

// function words(){
//   let i = 0; 
//   setInterval(function(){
//     document.getElementById('output').innerHTML = vocabulary[i];
//     //console.log(vocabulary[i])
//     i = (i+1) % vocabulary.length; 
//   },3000)
// }

// words();

const vocabulary = ['programmer','development','software','hardware','memory','RAM','CPU','technology','loop','console','javascript','HTML','CSS','application','web development','IT','array','conditionals','objects','DNS','IP','server','design','routes','database','URL','URI','host','domain','hash','encryption','functions','cyber security','put','patch','get','http','delete','patch','query','passwords','DHCP','root server','BIOS','ISP','users','OS','HTTPS','variables','code block','binary','buffer','load balancer','network','ping','trace router','pen testing'];



words=()=>{
  let i = 0; 
  setInterval(()=>{
    document.getElementById('output').innerHTML = vocabulary[i];
    console.log(vocabulary[i]);
    i = (i+1) % vocabulary.length; 
  },10000)
}

words();

