let response1 = document.getElementById('response1'),
    category = document.getElementById('category'),
    decideBtn = document.getElementById('decideBtn');

let miniCh9URL = 'https://nguyena-allforoneapi.azurewebsites.net/Combine/miniCh9';
let miniCh9AsianURL = 'https://nguyena-allforoneapi.azurewebsites.net/Combine/miniCh9/Asian';
let miniCh9AmericanURL = 'https://nguyena-allforoneapi.azurewebsites.net/Combine/miniCh9/American';


let output;

function getDataURL(url)
{
    fetch(url).then(resp => resp.text()).then(data => output = data);
}

decideBtn.addEventListener('click', function(e){
    switch(category.value.toLowerCase())
    {
        case "asian":
        getDataURL(miniCh9AsianURL);
        setTimeout(()=>{
            response1.textContent = output;
        },300)
        break;
        
        case "american":
        getDataURL(miniCh9AmericanURL);
        setTimeout(()=>{
            response1.textContent = output;
        },300)
        break;

        case "random":
        getDataURL(miniCh9URL);
        setTimeout(()=>{
            response1.textContent = output;
        },300)
        break;

        default:
        response1.textContent = "HURRY UP BRUH"
    }
});
