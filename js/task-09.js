// 1. Получить из DOM классы ".color", ".change-color".
// 2. Повесить слушателя на button при событии click.
// 3. Создать функцию, которая будет менять у body backgroundColor
//    и передавать название цвета в span.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const span = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', () => {
  let color = getRandomHexColor();
  span.textContent = color;
  document.body.style.backgroundColor = color;
})