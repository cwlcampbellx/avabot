const API_KEY = "YOUR_API_KEY_HERE";

function submitInput() {
  const userInput = document.getElementById("user-input").value;
  const responseDiv = document.getElementById("chatbot-response");

  fetch(`https://api.openai.com/v1/engines/davinci-codex/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      prompt: userInput,
      max_tokens: 100,
      temperature: 0.5
    })
  })
  .then(response => {
    if(response.ok){
      response.json().then(data => {
        const responseText = data.choices[0].text;
        responseDiv.innerText = responseText;
      });
    }
    else{
      responseDiv.innerText = "Error Occured";
    }
  })
  .catch(error => {
      responseDiv.innerText = "Error Occured";
  });
}
