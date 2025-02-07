function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("active");
}
// Chatbot Logic
function sendMessage() {
  let inputField = document.getElementById("user-input");
  let message = inputField.value.trim();

  if (message === "") return;

  let chatWindow = document.getElementById("chat-window");
  chatWindow.innerHTML += `<p><strong>You:</strong> ${message}</p>`;

  let response = getChatbotResponse(message);
  chatWindow.innerHTML += `<p><strong>Chatbot:</strong> ${response}</p>`;

  inputField.value = "";
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Simple AI-based chatbot
function getChatbotResponse(message) {
  message = message.toLowerCase();

  if (message.includes("hello") || message.includes("hi")) {
    return "Hello! How can I help you today?";
  } else if (message.includes("portfolio")) {
    return "You can find my portfolio in the Portfolio section!";
  } else if (message.includes("projects")) {
    return "I have worked on some amazing projects! Check them out in the Projects section.";
  } else {
    return "I'm still learning. Can you please rephrase that?";
  }
}
