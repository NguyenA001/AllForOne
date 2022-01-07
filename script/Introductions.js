let name1 = document.getElementById('name1'),
response1 = document.getElementById('response1');

let output;

function getDataURL()
{
    fetch(`https://nguyena-allforoneapi.azurewebsites.net/Combine/miniCh1/${name1.value}`).then(resp => resp.text()).then(data => output = data);
}    


name1.addEventListener('keypress', function(e){
    if (e.key === 'Enter' && name1.value != "") 
    {
        getDataURL();
        setTimeout(()=>{
            response1.textContent = output;
        },300)

    }
    else
    {
        response1.textContent = "What is your name, Summoner?"
    }
});