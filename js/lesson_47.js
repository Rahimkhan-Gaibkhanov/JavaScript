
    'use strict';

    let arr = [1, 2, 3, 4, 5];
    console.log(arr.length);

    let arr1 = [1, 2, 3, 4, 5];
    console.log(arr1[0] + arr1[1] + arr1[2] + arr1[3] + arr1[4]);

    let arr2 = [1, 2, 3, 4, 5];
    console.log(arr2.length);

    let obj = {a: 1, b: 2, c: 3};
    console.log(obj['a']);

    let obj1 = {a: 1, b: 2, c: 3};
    let key = 'c';

    console.log(obj1[key]);

    let obj2 = {a: 1, b: 2, c: 3};
    let sum = obj2['a'] + obj2['b'] + obj2['c'];
    
    console.log(sum);

    let obj3 = {a: 1, b: 2, c: 3};
    console.log(Object.keys(obj3).length);