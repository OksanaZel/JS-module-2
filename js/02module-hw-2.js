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

function findLongestWord (string = "") {
  // Write code under this line
  const words = string.split(' ');
  let longestWord = words[0];
  for (let i = 0; i < words.length; i =+1) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
      console.log(longestWord);
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'