let response1 = document.getElementById('response1'),
num1 = document.getElementById('num1'),
num2 = document.getElementById('num2');

let output;


function getDataURL()
{
    fetch(`https://nguyena-allforoneapi.azurewebsites.net/Combine/miniCh4/${num1.value}/${num2.value}`).then(resp => resp.text()).then(data => output = data);
}   

num2.addEventListener('keypress', function(e){
    if (e.key === 'Enter' && num1.value != "" && num2.value != "") 
    {
        getDataURL();
        setTimeout(()=>{
            response1.innerHTML = output;
        },300)

    }
    else
    {
        response1.textContent = "Enter your numbers!"
    }
});

num1.addEventListener('keypress', function(e){
    if (e.key === 'Enter' && num1.value != "" && num2.value != "") 
    {
        getDataURL();
        setTimeout(()=>{
            response1.innerHTML = output;
        },300)
    }
    else
    {
        response1.textContent = "Enter your numbers!"
    }
});