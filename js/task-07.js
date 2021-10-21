// 1. Получить из DOM классы "#font-size-control" и "#text".
// 2. Повесить слушателя на input при событии input.
// 3. Передать значение ползунка тексту.

const controlFont = document.querySelector("#font-size-control");
const textValue = document.querySelector("#text");

const handleInput = () => {
    textValue.style.fontSize = `${controlFont.value}px`;
  };

  controlFont.addEventListener("input", handleInput);





