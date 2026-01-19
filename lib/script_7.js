let userMessage = prompt("Wesh, tu veux quoi ?");
function chatBot(message) {
    if (!message || message.trim() === "") {
    return "t'es en PLS ?";
  }
  else if (message === message.toUpperCase() && /[A-Z]/.test(message)) {
    return "Pwa, calme-toi...";
  }
  else if (message.trim().endsWith("?")) {
    return "Ouais Ouais...";
  }
  else if (message.toLowerCase().includes("fortnite")) {
    return "on s' fait une partie soum-soum ?";
  }
  else {
    return "balek.";
  }
}
console.log(chatBot(userMessage));