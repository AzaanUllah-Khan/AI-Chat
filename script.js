const form = document.getElementById('message-form');
        const input = document.getElementById('message-input');
        const sendButton = document.getElementById('send-button');
        const messagesList = document.getElementById('messages');

        form.addEventListener('submit', sendMessage);
        sendButton.addEventListener('click', sendMessage);

        function sendMessage(event) {
            event.preventDefault();
            const message = input.value.trim();
            if (!message) return;
            const messageElement = document.createElement('li');
            messageElement.classList.add('message', 'sent');
            messageElement.innerHTML = `
    <span class="message-body">${message}</span>
    <span class="metadata">
      <span class="time">${new Date().toLocaleTimeString()}</span>
      <span class="status">
        <i class="fa fa-check"></i>
      </span>
      <span class="delete-btn"><i class="fa fa-trash"></i></span>
    </span>
  `;
            messagesList.appendChild(messageElement);
            messagesList.scrollTop = messagesList.scrollHeight;
            input.value = '';

            const deleteBtn = messageElement.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function () {
                messageElement.remove();
            });

            // Simulate receiving a message after sending a message
            setTimeout(receiveMessage, 2000);
        }

        function receiveMessage() {
            const messages = [
                'Hello, how are you?',
                'What are you up to today?',
                'Have you seen the latest movie?',
                'I have a question for you...',
                'Did you hear about the news?',
                'What do you think about this weather?',
                'I miss hanging out with you.',
                'How was your weekend?',
                'What are your plans for the holidays?'
            ];

            const messageIndex = Math.floor(Math.random() * messages.length);
            const message = messages[messageIndex];

            const messageElement = document.createElement('li');
            messageElement.classList.add('message');
            messageElement.innerHTML = `
    <span class="sender">Freind:</span>
    <span class="message-body">${message}</span>
    <span class="delete-btn"><i class="fa fa-trash"></i></span>
  `;
            const deleteBtn = messageElement.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function () {
                messageElement.remove();
            })

            messagesList.appendChild(messageElement);
            messagesList.scrollTop = messagesList.scrollHeight;
        }
