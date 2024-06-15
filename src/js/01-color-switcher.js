// Funkcja do generowania losowego koloru
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Wybieranie obu przycisków i powiązanie ich z elementami HTML
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

// Inicjalizacja zmiennej do przechowywania ID timeout
let timeoutId = null;

// Funkcja do rozpoczęcia zmiany koloru tła co sekundę, 1000ms
function startChangingBackgroundColor() {
  // Wyłączenie przycisku "Start", aby zapobiec wielokrotnym wywołaniom
  buttonStart.disabled = true;
  // Włączenie przycisku "Stop"
  buttonStop.disabled = false;
  
  // Przypisanie ID timeout do zmiennej `timeoutId`
  timeoutId = setTimeout(function changeColor() {
    // Ustawienie losowego koloru tła dla elementu <body>
    document.body.style.backgroundColor = getRandomHexColor();
    // Ponowne ustawienie timeout, aby funkcja `changeColor` została wywołana ponownie po 1 sekundzie
    timeoutId = setTimeout(changeColor, 1000);
  }, 1000);
}

// Funkcja do zatrzymania zmiany koloru tła
function stopChangingBackgroundColor() {
  // Wyczyszczenie timeout za pomocą przechowywanego ID
  clearTimeout(timeoutId);
  
  // Ponowne włączenie przycisku "Start"
  buttonStart.disabled = false;
  
  // Wyłączenie przycisku "Stop"
  buttonStop.disabled = true;
}

// Nasłuchiwacz zdarzeń dla przycisku "Start"
buttonStart.addEventListener('click', startChangingBackgroundColor);

// Nasłuchiwacz zdarzeń dla przycisku "Stop"
buttonStop.addEventListener('click', stopChangingBackgroundColor);
