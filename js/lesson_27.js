
    'use strict';

    // Задача 1

    // Дана строка 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.

    let str = 'abcde';
    
    console.log(str[0], str[2], str[4]);

    // Задача 2

    // Дана переменная со строкой 'abcde'. Обращаясь к отдельным символам этой строки запишите в новую переменную символы этой строки в обратном порядке, то есть 'edcba'.

    let str1 = 'abcde';
    let str2 = str1[4] + str1[3] + str1[2] + str1[1] + str1[0];

    console.log(str2);

    // Задача 3

    // Дана переменная str со строкой 'abcde' и переменная num с номером символа. Выведите на экран символ, номер которого хранится в переменной num.

    let str3 = 'abcde';
    let num = 3;

    console.log(str3[num]);