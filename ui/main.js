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
                console.log('userlogged in');
                alert('Logged in successfully');
                
            }else if(request.status === 403)
            {
                alert('username/password incorrect');
            }
            else if(request.status === 500){
                alert('something went wrong');
            }
        }
        
        };
    
    // make the request
    var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
     console.log(username);
     console.log(password);
     //using JSON
     request.open('GET','http://priyajohnson.imad.hasura-app.io/login/?first=username&second=password',true);
     /*
    request.open('POST','http://priyajohnson.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify());
   */
    
    
};
