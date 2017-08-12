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
var button = document.getElementById('counter');

button.onclick = function(){
    
    //make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.Done){
            
            if(request.status == 200){
                var counter =request.responseText;
                var span = document.getElementById('count');
    span.innerHTML = counter;
                
            }
        }
        }
    
    //render the variable in the correct span
    
    
};