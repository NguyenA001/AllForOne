let response1 = document.getElementById('response1'),
numBtn = document.getElementById('numBtn'),
letterBtn = document.getElementById('letterBtn'),
numInput = document.getElementById('numInput'),
letterInput = document.getElementById('letterInput');

let output;
let letters = /^[A-Za-z]+$/;

function getDataURL(url)
{
    fetch(url).then(resp => resp.text()).then(data => output = data);
}    

numInput.addEventListener('keypress',function(e){
    if(e.key === 'Enter' && numInput.value != "")
    {
        getDataURL(`https://nguyena-allforoneapi.azurewebsites.net/Combine/miniCh7/int/${numInput.value}`);
        setTimeout(()=>{
            response1.textContent = output;
        },300)
    }
});
letterInput.addEventListener('keypress',function(e){
    if(e.key === 'Enter' && letterInput.value != "" && letterInput.value.match(letters))
    {
        getDataURL(`https://nguyena-allforoneapi.azurewebsites.net/Combine/miniCh7/string/${letterInput.value}`);
        setTimeout(()=>{
            response1.textContent = output;
        },300)
    }
    else{
        response1.textContent = "SRETTEL"
    }
});