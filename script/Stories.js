let words = document.getElementsByClassName("noBorderInputs");
let response1 = document.getElementById("response1");
let needHide = document.getElementById("needHide");
let homeBtn = document.getElementById('homeBtn');
let story = document.getElementById('story');
let bubbleChange = document.getElementById('bubbleChange');

let output;

function getDataModel(url, model) {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(model),
  })
    .then((resp) => resp.text())
    .then((data) => output = data);
}

let miniCh5URL = "https://nguyena-allforoneapi.azurewebsites.net/Combine/miniCh5";

for (let i = 0; i < words.length; i++) {
  words[i].addEventListener("keypress", function (e) {
    if (e.key === "Enter" && words[i].value != "") 
    {
      getDataModel(miniCh5URL, {
        verb1: words[0].value,
        adjective1: words[1].value,
        verb2: words[2].value,
        place: words[3].value,
        verb3: words[4].value,
        adjective2: words[5].value,
        verb4: words[6].value,
        exclamation: words[7].value,
        verb5: words[8].value,
        verb6: words[9].value
      });
      setTimeout(()=>{
        bubbleChange.className = "LBubbleResponse";
        response1.innerHTML = `Today I ${words[0].value} my head. I was ${words[1].value}and ${words[2].value}. <br/> My mom came home from ${words[3].value}. I told her to ${words[4].value}. <br/> I said, 'Mom I have something to tell you.' and then I said 'I am ${words[5].value}'. <br/> My mom was ${words[6].value}. She exclaimed ${words[7].value}, 'why!?' . I responded, 'What do you mean why? <br/> I was ${words[8].value} like this!' I ${words[9].value} off into the distance.`;
        response1.className = "textResponse text-center fontBold fontBig";
        needHide.className = "col-6 d-none";
        homeBtn.className = "homeBtnStories2";
    },1000)
    }
    else
    {
        response1.textContent = "I need more than that!"
    }
  });
}
