// 1. Получить из DOM класс ".login-form".
// 2. Повесить слушателя на button при событии submit.
// 3. Если в форме есть незаполненные поля,
//    выводи alert с предупреждением о том,
//    что все поля должны быть заполнены.
// 4. При отправке формы страница не должна перезагружаться.
// 5. Собрать значения полей в обьект, где имя поля: свойство,
//    а значение поля: значение свойства.
// 6. Для доступа к элементам формы используй свойство elements.
// 7. Выведи обьект с введенными данными в консоль
//    и очисти значения полей формы методом reset.

const form = document.querySelector('.login-form');

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if(!email || !password){
        return alert ('Все поля должны быть заполнены.')
    }

    // const userData = {};
    // const formData = new FormData (event.currentTarget);
    // formData.forEach((value, name) => {
    //     userData[name] = value;
    //     console.log(name, ":", value);
    // });
    // console.log(userData);
    console.log({email, password});
    form.reset();
}
