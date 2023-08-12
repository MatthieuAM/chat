const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
  const message = messageInput.value.trim();

  if (message !== '') {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);

    // Clear input field
    messageInput.value = '';

    // Scroll to the bottom of chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}
