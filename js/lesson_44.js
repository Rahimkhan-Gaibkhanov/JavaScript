
    'use strict';

    let obj = {a: 1, b: 2, c: 3, d: 4, e: 5}; 
    delete obj.e;
    console.log('e' in obj);

    // Задача 1

    // let arr = ['a', 'b', 'c', 'd', 'e'];
    // Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.

    let arr = ['a', 'b', 'c', 'd', 'e'];
    delete arr[2];
    delete arr[3];

    console.log(arr.length);
    console.log(arr);
