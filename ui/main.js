/*console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'New value';
//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft +1;
    img.style.marginLeft = marginLeft +'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,50);
};*/

/*
var button = document.getElementById('counter');

button.onclick = function(){
    
    //create a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            
            if(request.status == 200){
                var counter =request.responseText;
                var span = document.getElementById('count');
    span.innerHTML = counter.toString();
                
            }
        }
        
        };
    
    // make the request
    request.open('GET','http://priyajohnson.imad.hasura-app.io/counter',true);
    request.send(null);
    
};*/

var button = document.getElementById('submit_btn');

button.onclick = function(){
    
    //create a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            
            if(request.status == 200){
                var counter =request.responseText;
                var span = document.getElementById('count');
    span.innerHTML = counter.toString();
                
            }
        }
        
        };
    
    // make the request
    request.open('GET','http://priyajohnson.imad.hasura-app.io/counter',true);
    request.send(null);
    /*
    request.open('GET','http://priyajohnson.imad.hasura-app.io/counter',true);
    request.send(null);*/
    
    
};
