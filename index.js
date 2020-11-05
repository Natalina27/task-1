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
const button = document.createElement('button');
const divMail = document.createElement('div');
const divPass = document.createElement('div');
const divCheckbox = document.createElement('div');

function createLabel( div, labelValue, labelText) {
  const label = document.createElement('label');
  label.setAttribute('for', labelValue);
  label.innerText = labelText;
  div.appendChild(label);
}
function createInput(div, cls, labelValue, idValue,  placeholder){
  const input = document.createElement('input');
  input.setAttribute('type', labelValue);
  input.className = cls;
  input.setAttribute('id', idValue);
  input.setAttribute('placeholder', placeholder);
  div.appendChild(input);
}

//mail
form.appendChild(divMail);
divMail.className = 'form-group';
createLabel(divMail, 'email', 'Электропочта');
createInput( divMail, 'form-control', 'email', 'email', 'Введите свою электропочту');

//password
form.appendChild(divPass);
divPass.className = 'form-group';
createLabel(divPass, 'password', 'Пароль');
createInput( divPass, 'form-control', 'password', 'password', 'Введите пароль');

//checkbox
form.appendChild(divCheckbox);
divCheckbox.className = 'form-group form-check';
createInput( divCheckbox, 'form-check-input', 'checkbox', 'exampleCheck1');
createLabel(divCheckbox, 'checkbox', 'Запомнить меня');

//button
form.appendChild(button);
button.setAttribute('type', 'submit');
button.className = 'btn btn-primary';
button.innerText = 'Вход';

