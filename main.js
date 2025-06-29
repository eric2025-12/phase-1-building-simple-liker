// Provided function - do not modify
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Constants for empty and full hearts
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Get modal and hide it initially
const modal = document.getElementById('modal');
modal.classList.add('hidden');

const hearts = document.querySelectorAll('.like-glyph');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add('activated-heart');
        } else {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        }
      })
      .catch(error => {
        document.getElementById('modal-message').textContent = error;
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('hidden'), 3000);
      });
  });
});

