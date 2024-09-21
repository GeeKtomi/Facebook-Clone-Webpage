function showErrorMessage(message, duration) {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = 'block';
  
    const countdown = document.createElement('span');
    countdown.id = 'countdown';
    errorMessageElement.appendChild(countdown);
  
    let timeLeft = duration;
    const intervalId = setInterval(() => {
      countdown.textContent = ` `;
      timeLeft--;
  
      if (timeLeft < 0) {
        clearInterval(intervalId);
        errorMessageElement.style.display = 'none';
      }
    }, 1000);
  }
  showErrorMessage("Fill in the necessary information below", 0);
  