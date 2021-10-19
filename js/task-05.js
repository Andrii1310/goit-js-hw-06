// Получить из DOM классы "name-input" и "name-output".
// Повесить слушателя на "name-input" при вводе значения.
// Передать вводимое значение из "name-input" в "name-output".

const getValueName = document.querySelector('#name-input');
const setValueName = document.querySelector('#name-output');

getValueName.addEventListener("input", (event) => {
    const eventValue = event.currentTarget.value;
    eventValue === "" ? setValueName.textContent = "Anonymous" : setValueName.textContent = eventValue;
})