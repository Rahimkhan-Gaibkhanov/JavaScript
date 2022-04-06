
    'use strict';

    // Задача 1

    // Создайте объект с ключами 1, 2 и 3 и значениями 'a', 'b' и 'c'. Выведите на экран все его элементы.

    let obj1 = {1: 'a', 2: 'b', 3: 'c'};

    console.log(obj1);

    // Задача 2

    // Создайте объект с ключами a, b и c и значениями 1, 2 и 3. Найдите сумму его элементов.

    let obj2 = {a: 1, b: 2, c: 3};

     console.log(`${obj2['a'] + obj2['b'] + obj2['c']}`);

     // Задача 3

    // Создайте объект с ключами 1a, 2b и с-с и значениями 1, 2 и 3. Найдите сумму его элементов.

    let obj3 = {'1a': 1, '2b': 2, 'c-c': 3};

    console.log(obj3['1a'] + obj3['2b'] + obj3['c-c']);

    // Задача 5⋕js.Pm.Cl.Ob.5

    // Дан объект:

    // let obj = {key1: 1, key2: 2, key3: 3}; 
    // Найдите сумму его элементов. Обращайтесь к элементам с помощью изученного синтаксиса.

    let obj4 = {key1: 1, key2: 2, key3: 3}; 

    console.log(obj4.key1 + obj4.key2 + obj4.key3);

    // Задача 7

    // Создайте объект user с ключами name, surname, patronymic и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.

    let user = {name: 'Rahimkhan', surname: 'Gaibkhanov', patronymic: 'Vaqifovic'};

    console.log(user.name + ' ' + user['surname'] + ' ' + user['patronymic']);

    // Задача 8

    // Создайте объект date с ключами year, month и day и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате год-месяц-день.

    let date = {day: 5, month: 'Aprel', year: 2022};

    console.log(date['day'] + ' ' + date.month + ' ' + date.year);

    // Задача 9

    // Создайте объект с ключами a, b и c и элементами 1, 2 и 3.

    let obj = {};
    obj.a = 1;
    obj['b'] = 2;
    obj['c'] = 3;

    console.log(obj);
