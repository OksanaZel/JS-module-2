// 1.Есть массив logins с логинами пользователей. Напиши 
//скрипт добавления логина в массив logins.Добавляемый логин 
//должен:
//проходить проверку на длину от 4 до 16-ти символов 
//включительно быть уникален, то есть отсутствовать в массиве 
//logins
//Разбей задачу на подзадачи с помощью функций.
//Проверку на отсутствие аргументов или на правильный тип 
//аргументов делать не нужно.
//Напиши функцию isLoginValid(login), в которой проверь 
//количество символов параметра login и верни true или false 
//в зависимости от того, попадает ли длина параметра в заданный 
//диапазон от 4 - х до 16 - ти символов включительно.
//Напиши функцию isLoginUnique(allLogins, login), которая 
//принимает список всех логинов и добавляемый логин как 
//параметры и проверяет наличие login в массиве allLogins, 
//возвращая true если такого логина еще нет и false если логин 
//уже используется.
//Напиши функцию addLogin(allLogins, login) которая:
//Принимает новый логин и массив всех логинов как параметры
//Проверяет валидность логина используя вспомогательную функцию 
//isLoginValid
//Если логин не валиден, прекратить исполнение функции addLogin 
//и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 
//символов'
//Если логин валиден, функция addLogin проверяет уникальность 
//логина с помощью функции isLoginUnique
//Если isLoginUnique вернет false, тогда addLogin не добавляет 
//логин в массив и возвращает строку 'Такой логин уже 
//используется!'
//Если isLoginUnique вернет true, addLogin добавляет новый 
//логин в logins и возвращает строку 'Логин успешно добавлен!'

function isLoginValid(login) {
        if (login.length >= 4 && login.length <= 16) {
            return true;
        }
        return false;
}

function isLoginUnique (allLogins, login) {
    if (allLogins.includes(login)) {
      return true;
  }
  return false;
}

function addLogin (allLogins, login) {
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
    let message;
    if (isLoginValid(login)) {
        if (isLoginUnique(allLogins, login)) {
            allLogins.push(login);
            message = SUCCESS;
        } else {
            message = REFUSAL;
        }
    message = ERROR
  }
  return message
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(addLogin(logins, 'Ajax')); 
// 'Логин успешно добавлен!'

// console.log(addLogin(logins, 'robotGoogles')); 
// 'Такой логин уже используется!'

// console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast')); 
'Ошибка! Логин должен быть от 4 до 16 символов' 

