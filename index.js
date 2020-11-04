/**
 * Создать форму динамически при помощи JavaScript.
 *
 * В html находится пример формы которая должна быть сгенерирована.
 *
 * Для того что бы увидеть результат откройте index.html файл в браузере.
 *
 * Обязательно!
 * 1. Для генерации элементов обязательно использовать метод document.createElement
 * 2. Для установки атрибутов элементам обязательно необходимо использовать document.setAttribute
 * 3. Всем созданным элементам необходимо добавить классы как в разметке
 * 4. После того как динамическая разметка будет готова необходимо удалить код в HTML который находится между комментариями
*/

// РЕШЕНИЕ

const form = document.getElementById('form');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const mailLabel = document.createElement('label');
const mailInput = document.createElement('input');
const passwordLabel = document.createElement('label');
const passwordInput = document.createElement('input');
const checkboxLabel = document.createElement('label');
const checkboxInput = document.createElement('input');
const button = document.createElement('button');

//mail
form.appendChild(div1);
div1.className = 'form-group';

mailLabel.setAttribute('for', 'email');
mailLabel.innerText = 'Электропочта';

mailInput.setAttribute('type', 'email');
mailInput.className = "form-control";
mailInput.setAttribute('id', 'email');
mailInput.setAttribute('placeholder', 'Введите свою электропочту');



div1.appendChild(mailLabel);
div1.appendChild(mailInput);

//password
form.appendChild(div2);
div2.className = 'form-group';

passwordLabel.setAttribute('for', 'password');
passwordLabel.innerText = 'Пароль';

passwordInput.setAttribute('type', 'password');
passwordInput.className = "form-control";
passwordInput.setAttribute('id', 'password');
passwordInput.setAttribute('placeholder', 'Введите пароль');


div2.appendChild(passwordLabel);
div2.appendChild(passwordInput);

//checkbox
form.appendChild(div3);
div3.className = 'form-group form-check';

checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.className = "form-check-input";
checkboxInput.setAttribute('id', 'exampleCheck1');


checkboxLabel.setAttribute('for', 'exampleCheck1');
checkboxLabel.innerText = 'Запомнить меня';

div3.appendChild(checkboxInput);
div3.appendChild(checkboxLabel);

//button
form.appendChild(button);
button.setAttribute('type', 'submit');
button.className = 'btn btn-primary';
button.innerText = 'Вход';

