const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl=document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const decrement = () => valueEl.textContent = counterValue -= 1;
const increment = () => valueEl.textContent = counterValue += 1;

btnDecrementEl.addEventListener('click', decrement);
btnIncrementEl.addEventListener('click', increment);
