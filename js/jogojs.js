document.getElementById('yesButton').addEventListener('click', function() {
  drawHeart();
  createFireworks();
});

function drawHeart() {
  var heartContainer = document.querySelector('.heart-container');
  heartContainer.innerHTML = '&#x2764;'; // Código Unicode para o símbolo de coração

  // Opcional: Estilizar o coração com CSS
  heartContainer.style.fontSize = '10rem';
  heartContainer.style.color = 'red';
  heartContainer.style.animation = 'heartbeat 1s ease infinite';
}

function createFireworks() {
  var fireworksContainer = document.getElementById('fireworks');

  for (var i = 0; i < 30; i++) {
    var firework = document.createElement('div');
    firework.className = 'firework';
    fireworksContainer.appendChild(firework);

    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
  }

  setTimeout(function() {
    fireworksContainer.innerHTML = '';
    showImageModal();
  }, 2000);
}

function showImageModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

document.getElementById('noButton').addEventListener('click', moveNoButton);

function moveNoButton() {
  var noButton = document.getElementById('noButton');
  var container = document.querySelector('.container');

  var containerRect = container.getBoundingClientRect();
  var containerWidth = containerRect.width;
  var containerHeight = containerRect.height;

  var randomX = Math.random() * (containerWidth - 100); // Substitua 100 pelo tamanho desejado do botão
  var randomY = Math.random() * (containerHeight - 100); // Substitua 100 pelo tamanho desejado do botão

  noButton.style.position = 'absolute';
  noButton.style.left = randomX + 'px';
  noButton.style.top = randomY + 'px';
}

document.getElementById("yesButton").addEventListener("click", function() {
  var buttons = document.getElementsByClassName("response-button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("hidden");
  }
});
