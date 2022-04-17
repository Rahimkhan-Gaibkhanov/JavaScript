
    'use strict';

    let num1 = 1;
    let num2 = 2;

    if (num1 + num2 == 3) {
        console.log('+++');
    } else {
        console.log('---');
    }


    let num3 = 1;
    let num4 = 2;
    
    if (num3 + num4 === 3) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num5 = 1;
    let num6 = 2;
    
    if (num5 + num6 === 3) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num7 = '1';
    let num8 = '2';
    
    if (Number(num7) + Number(num8) === 3) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num = 123;

    if (String(num)[0] == 1) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num9 = 123;

    if (String(num9)[0] == 1) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num10 = 123;

    if (String(num10)[0] == 1) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num11 = 123;
    let first = String(num11)[0];
    
    if (first == 1) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num12 = 12;

    if (String(num12).length === 2) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num13 = 12;
    let str = String(num13);
    
    if (str.length === 2) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num14 = 12;

    if (String(num14).length === 2) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num15 = 12;

    if (String(num15).length == String(2)) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num16 = 12;

    if (String(num16).length === 2) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num17 = '123033';

    let sum1 = +num17[0] + +num17[1] + +num17[2]; 
    let sum2 = +num17[3] + +num17[4] + +num17[5]; 

    if (sum1 == sum2) {
        console.log('суммы равны');
    } else {
        console.log('суммы не равны');
    }

    console.log(sum1, sum2);