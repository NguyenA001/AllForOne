
let number1Click = document.getElementById('number1Click');
let number2Click = document.getElementById('number2Click');
let number3Click = document.getElementById('number3Click');
let number4Click = document.getElementById('number4Click');
let number5Click = document.getElementById('number5Click');
let number6Click = document.getElementById('number6Click');
let number7Click = document.getElementById('number7Click');
let number8Click = document.getElementById('number8Click');
let number9Click = document.getElementById('number9Click');
let byMe = document.getElementById('byMe');

number1Click.addEventListener('click',function(e){
    document.location = 'pages/Introductions.html';
});
number2Click.addEventListener('click',function(e){
    document.location = 'pages/Addition.html';
});
number3Click.addEventListener('click',function(e){
    document.location = 'pages/RiseShine.html';
});
number4Click.addEventListener('click',function(e){
    document.location = 'pages/GreaterLess.html';
});
number5Click.addEventListener('click',function(e){
    document.location = 'pages/Stories.html';
});
number6Click.addEventListener('click',function(e){
    document.location = 'pages/OddsEvens.html';
});
number7Click.addEventListener('click',function(e){
    document.location = 'pages/Reverse.html';
});
number8Click.addEventListener('click',function(e){
    document.location = 'pages/Directory.html';
});
number9Click.addEventListener('click',function(e){
    document.location = 'pages/Grub.html';
});

byMe.addEventListener('click', function(e){
    window.open('https://annnguyen.azurewebsites.net/', '_blank');
});
