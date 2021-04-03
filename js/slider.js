alert("ola");
window.onload = function teste (){
    var urls = ["../img/headers/header.jpg", "../img/headers/header-1.jpg","../img/headers/header-2.jpg" ];
    var i=0;
    var slider = document.getElementsByClassName("masthead");
    setInterval(5000,slider_call);
   //window.onload = 
    console.log(i);
    function slider_call(){        
         console.log(i);
        slider.background.url= urls[i]."no-repeat";        
        i++;
        if(i==3)i=0;
    }
    
    
    
    
    
    
    
});