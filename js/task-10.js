// 1. Получить из DOM классы "#controls", "#boxes" и нужные элементы.
// 2. Повесить слушателя на обе button при событии click.
// 3.


// Создай функцию createBoxes(amount), которая принимает один
// параметр - число. Функция создает столько <div>,
// сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего
// на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.


const boxesAll = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let size = 20;

btnDestroy.addEventListener('click', () => {
  while (boxesAll.firstChild) {
    boxesAll.firstChild.remove();
}
  inputEl.value = "";
  size = 20;
})

btnCreate.addEventListener('click', () => {
  const amount = inputEl.value;
  createBoxes(amount);
});

function createBoxes (amount) {
  let divElAll = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const divEl = document.createElement("div");
    divEl.style.height = `${size}px`;
    divEl.style.width = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxesAll.appendChild(divEl);
    console.log("divEl", divEl);
  }
  console.log("divElAll", divElAll);
  boxesAll.append(...divElAll);
}