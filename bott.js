const API_KEY = "YOUR_API_KEY_HERE";

function submitInput() {
  const userInput = document.getElementById("user-input").value;
  const messagesDiv = document.getElementById("chatbot-messages");
  const userMessage = createMessage(userInput,'user');
  messagesDiv.appendChild(userMessage);
  document.getElementById("user-input").value = "";

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
        const chatbotMessage = createMessage(responseText,'chatbot');
        messagesDiv.appendChild(chatbotMessage);
      });
    }
    else{
      const chatbotMessage = createMessage("Error Occured",'chatbot');
      messagesDiv.appendChild(chatbotMessage);
    }
  })
  .catch(error => {
      const chatbotMessage = createMessage("Error Occured",'chatbot');
      messagesDiv.appendChild(chatbotMessage);
  });
}

function createMessage(text, type) {
  const message = document.createElement('div');
  message.classList.add(type);
  message.innerText = text;
  return message;
}
