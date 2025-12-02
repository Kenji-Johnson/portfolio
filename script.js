// A tiny JS file with two small interactions
const greetingEl = document.getElementById('greeting');
const changeTextBtn = document.getElementById('changeText');
const alertBtn = document.getElementById('alertHello');

const originalText = greetingEl.textContent;

changeTextBtn.addEventListener('click', () => {
  greetingEl.textContent = greetingEl.textContent.includes('👋')
    ? 'You clicked the button! 😀'
    : originalText;
});

alertBtn.addEventListener('click', () => {
  alert('Hello from your new site — Hello, World!');
});
