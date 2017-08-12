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
var counter = 0;
button.onclick = function(){
    
    //make a request to the counter endpoint
    
    //capture the response ans store it in a variable
    
    //render the variable in the correct span
    counter = counter +1;
    var span = document.getElementById('count');
    span.innerHTML = counter;
}