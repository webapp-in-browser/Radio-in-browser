

/*if (navigator.onLine) {
        console.log('online');
      } else {
        console.log('offline');
      }*/


let internetConect = navigator.onLine;

if (internetConect == false) {

        document.location.href = "index1.html";

};


/*else if(internetConect == true) {

 alert("You are connected to the internet. Вы подключены к интернету");



};*/




let audio_player = document.getElementById("audio_player"); 

let links = audio_player.getElementsByTagName('a'); 
console.log(links.length);

let href
let source
let audio

for (var i = 0; i < links.length; i++) { 
    console.log(links[i]);
    console.log(i);
    links[i].onclick = function(e) {  
        e.preventDefault();
        console.log(e);

         href = this.getAttribute("href"); 
        
         let text = href;
         let result = text.match(/(nashe-256|RadioROKS_HD|europaplus.mp3|rock-128.mp3|atr_mobile_mp3|trance_mobile_mp3|KissFM_HD|KissFM_Digital_HD|radioessential|ZaycevFM_classic_256.mp3|mixadance.fm|ZaycevFM_relax_256.mp3|KissFM_Deep_HD)/g);
         document.getElementById("p1").innerHTML = result;

        source = document.querySelectorAll("#audio_player audio source"); 
        source[0].src = href; 
        console.log(source);
 

        audio = document.querySelector("#audio_player audio");
        audio.removeAttribute('poster');

        audio.buffered.end(0) * 3000 / audio.duration;

        audio.load();
       
        audio.play(); 
       
        console.log(audio);

        
        





        /*document.getElementById('p1').innerHTML=href;*/
        


}
}








    
var Ping = function(a) {
    this.opt = a || {};
    
    this.favicon = this.opt.favicon ||/* "/favicon.ico" */href;
    this.timeout = this.opt.timeout || 1000;
console.log(this.opt);
  
};


Ping.prototype.ping = function(a, b) {
    function c(a) {
        d && clearTimeout(d);
        var c = new Date - e;
        if ("function" == typeof b) return "error" === a.type ? (console.log(/*"error loading resource"*/href), b("error", c)) : b(null, c)
    }
    this.img = new Image;
    var d, e = new Date;
    this.img.onload = c;
    this.img.onerror = c;
    this.timeout && (d = setTimeout(c, this.timeout));
    this.img.src = a + this.favicon + "?" + +new Date
};
`${href}` != typeof exports ? `${href}` != typeof module && module.exports && (module.exports = Ping) : window.Ping = Ping;

// batas ping
var b = 1;
setInterval(function(){
var p = new Ping();
console.log(p)
  b++
    p.ping(/*"http://google.com"*//*source*/href, function(err, data) 
    {
     document.getElementById("ping").innerHTML = 'Delay time (Ping): <strong>'+data+'</strong> ms'; 
     
    document.getElementById("status").innerHTML = b;
     
     if (data <= 50){
      
  document.getElementById("speed").innerHTML = 'Net Speed:<strong> Null</strong>'; 
  document.getElementById("barrier").innerHTML =
    'Barriers: <strong>0%</strong>'; 
       
     }else if (data <= 100){
       
  document.getElementById("speed").innerHTML = 'Net Speed:<strong> XLarge</strong>'; 
  document.getElementById("barrier").innerHTML =
    'Barriers: <strong>10%</strong>'; 
       
     }else if (data <= 500){
       
  document.getElementById("speed").innerHTML = 'Net Speed:<strong> Large</strong>'; 
  document.getElementById("barrier").innerHTML =
    'Barriers: <strong>25%</strong>'; 
       
     }else if (data <= 1000){
       
  document.getElementById("speed").innerHTML = 'Net Speed:<strong> Medium</strong>'; 
  document.getElementById("barrier").innerHTML =
    'Barriers: <strong>50%</strong>'; 
       
     }else if (data <= 1500){
       
  document.getElementById("speed").innerHTML = 'Net Speed:<strong> Small</strong>'; 
  document.getElementById("barrier").innerHTML =
    'Barriers: <strong>75%</strong>'; 
       
     }else if (data >= 1500){
       
  document.getElementById("speed").innerHTML = 'Net Speed:<strong> XSmall</strong>'; 
  document.getElementById("barrier").innerHTML =
    'Barriers: <strong>90%</strong>'; 
       
     }
      
      
      if (data<2000&&data>=50) {
        
        document.getElementById("status").innerHTML = 'Status: <strong>Online</strong>';
        
      }else{
     
     document.getElementById("status").innerHTML = 'Status: <strong>Offline</strong>';
     
      }
})
},1000)

    // ـــــــــــــــــــــــــــــــــــ