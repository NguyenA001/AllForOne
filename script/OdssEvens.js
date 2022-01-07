let response1 = document.getElementById('response1'),
num1 = document.getElementById('num1'),

miniCh6URL = 'https://nguyena-allforoneapi.azurewebsites.net/Combine/miniCh6/108';

let output;

function getDataURL()
{
    fetch(`https://nguyena-allforoneapi.azurewebsites.net/Combine/miniCh6/${num1.value}`).then(resp => resp.text()).then(data => output = data);
}    

num1.addEventListener('keypress', function(e){
    if (e.key === 'Enter' && num1.value != "" ) 
    {
        getDataURL();
        setTimeout(()=>{
            response1.textContent = output;
        },300)
    }
    else
    {
        response1.textContent = "Enter your number!"
    }
});