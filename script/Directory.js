let response1 = document.getElementById("response1"),
  FirstName = document.getElementById("firstName"),
  LastName = document.getElementById("lastName"),
  SlackName = document.getElementById("slackName"),
  Email = document.getElementById("email"),
  Hobbies = document.getElementById("hobbies"),
  hideDropDown = document.getElementById('hideDropDown'),
  response2 = document.getElementById('response2'),
  responseBubble = document.getElementById('responseBubble'),
  responseTxt = document.getElementById('responseTxt'),
  title = document.getElementById('title'),
  homeBtn = document.getElementById('homeBtn');

let miniCh8firstNameURL = 'https://nguyena-allforoneapi.azurewebsites.net/Combine/miniCh8/firstName';
let miniCh8lastNameURL = 'https://nguyena-allforoneapi.azurewebsites.net/Combine/miniCh8/lastName';
let miniCh8EmailURL = 'https://nguyena-allforoneapi.azurewebsites.net/Combine/miniCh8/Email';
let miniCh8SlackNameURL = 'https://nguyena-allforoneapi.azurewebsites.net/Combine/miniCh8/SlackName';
let miniCh8HobbiesURL = 'https://nguyena-allforoneapi.azurewebsites.net/Combine/miniCh8/Hobbies';

let miniCh8firstNameModel = 
{
    firstName: FirstName.value
};

let miniCh8lastNameModel = 
{
    lastName: "Tran"
};

let miniCh8EmailModel =
{
    email: "anguyen@codestack.co"
};

let miniCh8slackNameModel = 
{
    slackName: "Sophie Espejo"
};

let miniCh8HobbiesModel = 
{
    hobbies: "Snowboarding & Video Games"
};

let output;

function getDataModel(url,model)
{
    fetch(url,{
        "method": "POST",
        "headers": {"Content-Type":"application/json"},
        "body":JSON.stringify(model)
    }).then(resp => resp.json()).then(data => output = data);
}

FirstName.addEventListener('keypress',function(e){
    if(e.key ==='Enter' && FirstName.value != "")
    {
        getDataModel(miniCh8firstNameURL,{
            firstName: FirstName.value.toLowerCase()
        });
        setTimeout(()=>{
            response1.textContent = "Is this who you seek?";
            hideDropDown.className = "dropdown d-none";
            response2.innerHTML = `First Name: ${output.firstName} <br/> <br/>`;
            response2.innerHTML += `Last Name: ${output.lastName} <br/> <br/>`;
            response2.innerHTML += `Slack Name: ${output.slackName} <br/> <br/>`;
            response2.innerHTML += `Email: ${output.email} <br/> <br/>`;
            response2.innerHTML += `Hobbies : ${output.hobbies}`;
            responseBubble.className ="AResponseBubble2";
            responseTxt.className = "textResponse2 text-center";
            title.className ="textWhite numbersSize titlePosition2 font";
            homeBtn.className ="homeBtnAdd2";
        },1000)
    }
    else
    {
        response1.textContent = "This person does not exist."
    }
});
LastName.addEventListener('keypress',function(e){
    if(e.key ==='Enter' && LastName.value != "")
    {
        getDataModel(miniCh8lastNameURL,{
            lastName: LastName.value.toLowerCase()
        });
        setTimeout(()=>{
            response1.textContent = "Is this who you seek?";
            hideDropDown.className = "dropdown d-none";
            response2.innerHTML = `First Name: ${output.firstName} <br/> <br/>`;
            response2.innerHTML += `Last Name: ${output.lastName} <br/> <br/>`;
            response2.innerHTML += `Slack Name: ${output.slackName} <br/> <br/>`;
            response2.innerHTML += `Email: ${output.email} <br/> <br/>`;
            response2.innerHTML += `Hobbies : ${output.hobbies}`;
            responseBubble.className ="AResponseBubble2";
            responseTxt.className = "textResponse2 text-center fontBig";
            title.className ="textWhite numbersSize titlePosition2 font";
            homeBtn.className ="homeBtnAdd2";
        },1000)
    }
    else
    {
        response1.textContent = "This person does not exist."
    }
});
SlackName.addEventListener('keypress',function(e){
    if(e.key ==='Enter' && SlackName.value != "")
    {
        getDataModel(miniCh8SlackNameURL,{
            slackName: SlackName.value.toLowerCase()
        });
        setTimeout(()=>{
            response1.textContent = "Is this who you seek?";
            hideDropDown.className = "dropdown d-none";
            response2.innerHTML = `First Name: ${output.firstName} <br/> <br/>`;
            response2.innerHTML += `Last Name: ${output.lastName} <br/> <br/>`;
            response2.innerHTML += `Slack Name: ${output.slackName} <br/> <br/>`;
            response2.innerHTML += `Email: ${output.email} <br/> <br/>`;
            response2.innerHTML += `Hobbies : ${output.hobbies}`;
            responseBubble.className ="AResponseBubble2";
            responseTxt.className = "textResponse2 text-center";
            title.className ="textWhite numbersSize titlePosition2 font";
            homeBtn.className ="homeBtnAdd2";
        },1000)
    }
    else
    {
        response1.textContent = "This person does not exist."
    }
});
Hobbies.addEventListener('keypress',function(e){
    if(e.key ==='Enter' && Hobbies.value != "")
    {
        getDataModel(miniCh8HobbiesURL,{
            hobbies: Hobbies.value.toLowerCase()
        });
        setTimeout(()=>{
            response1.textContent = "Is this who you seek?";
            hideDropDown.className = "dropdown d-none";
            response2.innerHTML = `First Name: ${output.firstName} <br/> <br/>`;
            response2.innerHTML += `Last Name: ${output.lastName} <br/> <br/>`;
            response2.innerHTML += `Slack Name: ${output.slackName} <br/> <br/>`;
            response2.innerHTML += `Email: ${output.email} <br/> <br/>`;
            response2.innerHTML += `Hobbies : ${output.hobbies}`;
            responseBubble.className ="AResponseBubble2";
            responseTxt.className = "textResponse2 text-center";
            title.className ="textWhite numbersSize titlePosition2 font";
            homeBtn.className ="homeBtnAdd2";
        },1000)
    }
    else
    {
        response1.textContent = "This person does not exist."
    }
});
Email.addEventListener('keypress',function(e){
    if(e.key ==='Enter' && Email.value != "")
    {
        getDataModel(miniCh8EmailURL,{
            email: Email.value.toLowerCase()
        });
        setTimeout(()=>{
            response1.textContent = "Is this who you seek?";
            hideDropDown.className = "dropdown d-none";
            response2.innerHTML = `First Name: ${output.firstName} <br/> <br/>`;
            response2.innerHTML += `Last Name: ${output.lastName} <br/> <br/>`;
            response2.innerHTML += `Slack Name: ${output.slackName} <br/> <br/>`;
            response2.innerHTML += `Email: ${output.email} <br/> <br/>`;
            response2.innerHTML += `Hobbies : ${output.hobbies}`;
            responseBubble.className ="AResponseBubble2";
            responseTxt.className = "textResponse2 text-center";
            title.className ="textWhite numbersSize titlePosition2 font";
            homeBtn.className ="homeBtnAdd2";
        },1000)
    }
    else
    {
        response1.textContent = "This person does not exist."
    }
});