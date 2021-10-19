// 1. Получить из DOM классы "#validation-input", ".valid" и ".invalid".
// 2. Повесить слушателя на input при событии blur.
// 3. Проверить на правильное количество введённых символов (data-length).
// 4. Если введено 6 символов, то бордер зеленый.
//    Если не 6 символов, то бордер красный.

const inputValue = document.querySelector('#validation-input');
const validDataLength = Number(inputValue.getAttribute('data-length'));

inputValue.addEventListener('blur', (event) => {
    const lengthValue = event.currentTarget.value.length;
    if (lengthValue === validDataLength){
        inputValue.classList.remove('invalid');
        inputValue.classList.add('valid');
    } else {
        inputValue.classList.add('invalid');
        inputValue.classList.remove('valid');
    }
})
