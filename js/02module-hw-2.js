/*1.Использование for
Напиши функцию getItemsString(array), которая получает массив и возвращает строку, 
полученную из объединения (конкатенации) строк в формате 
${номер элемента} - ${значение элемента}\n , где \n - спецсимвол переноса.
Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] 
с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
Используйте вспомогательную переменную result для добавления (конкатенации) 
строк внутри цикла for */

// const getItemsString = function(array) {
//   //'use strict';
//   // Write code under this line
//   let result = '';
//   for (let i = 0; i < array.length; i += 1) {
//     const el = `${i+1} - ${array[i]}\n`;
//     result += el;
//   }
//   return result;
  
// };

// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

//console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/

/*2. Подсчет стоимости гравировки украшений
Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию 
calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку 
(в строке будут только слова и пробелы) и цену гравировки одного слова, и 
возвращающую цену гравировки всех слов в строке.
Для решения этой задачи не используйте циклы. Т.е. никаких for, while, 
do while, for of, for in, forEach или функциональных методов. */

// const calculateEngravingPrice = (message = "", pricePerWord = 0) => pricePerWord * message.split(' ').length; // Write code in this line

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

//console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

//console.log(calculateEngravingPrice('Uno', 100)); // 100

/*3. Поиск самого длинного слово в строке с пробелами
Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную 
строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке. */

// function findLongestWord (string ="") {
//   // Write code under this line
//     const splitString = string.split(' ');
//     console.log(splitString);
//     let longestWord = splitString[0];
//     for (let i = 1; i < splitString.length; i += 1) {
//         if (splitString[i].length > longestWord.length) {
//             longestWord = splitString[i]
//         }
//     }
//     return longestWord;
// }


// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
//'Google'

//console.log(findLongestWord('May the force be with you'));
//'force'

/*4. Форматирование строки в зависимости от длинны строки
Напиши функцию formatString(string, maxLength = 40) которая 
принимает строку и форматирует ее если необходимо.
Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
Если длина больше maxLength, то функция обрезает строку до размера maxLength 
символов и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию. */

// function formatString (string, maxLength = 40) {
//   // Write code under this line
//     return string.length < maxLength ? string : string.slice(0, maxLength) + '...';
//     // if (string.length < maxLength) {
//     //     return string;
//     // } else {
//     //     return string.slice(0, maxLength) + '...';
//     // }
  
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'

/*5. Функция предикат
Функция предикат возвращает true или false
Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. 
Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово 
то функция возвращает true, если запрещенных слов нет функция возвращает false. 
Слова в строке могут быть в произвольном регистре. */

// function checkForSpam (str) { 
//   'use strict';
//   // Write code under this line
//     const string = str.toLowerCase();
//     return string.includes('spam') || string.includes('sale');
// }

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

/*6. Создание нового массива на основе преобразования данных из старого массива
Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел. 
Функция создает новый массив numbers размером в длину массива array и заполняет 
его числами из массива array умноженными на 10. Для перебора массива и добавления 
новых значений используй цикл for. По завершению перебора массива array 
возвращается массив numbers.*/

// function mapArray(array) {
//   'use strict';
//   const numbers = new Array(array.length);
//   for(let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//       numbers[i] = array[i]*10;
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

//console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]

/*7. Создание нового массива на основе отбора из исходного массива
Напиши функцию filterArray(array), принимающую 1 параметр array - массив. 
Функция проверяет каждое значение массива - является ли значение конечным 
числом (Number.isFinite). Для проверки используй цикл for. Числа добавляются 
в новый массив numbers с помощью метода push, а не числа - игнорируются. 
По завершению проверки массива array возвращается массив numbers. */

// function filterArray(array) {
//   'use strict';
//   const numbers = [];
//   for(let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//       if (Number.isFinite(array[i])) {
//           numbers.push(array[i]);
//       }
//   }
//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, '100']));
// [0, 0, 100]

//console.log(filterArray([undefined, false, null, [], 1]));
// [1]

//console.log(filterArray([{}, () => {}, 2]));
// [2]

/*8. Вычисление суммы массива
Напиши функцию reduceArray(array), которая принимает числовой массив array. 
Если массив array не пустой, необходимо посчитать сумму всех элементов массива, 
используя цикл for. Для подсчета суммы используй переменную total. 
Функция должна возвращать 0 если массив пустой и значение total в противном случае. */

function reduceArray(array) {
  'use strict';
  let total = 0;
  // Write code under this line
    if (array.length !== 0) {
        total = array.reduce((acc, total) => total +=acc, 0);
    }
   
  return total;
};

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5
