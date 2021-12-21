true + false 
// выведет 1, потому что 1+0=1
12 / "6"
// выведет 2, потому что знак деления
"number" + 15 + 3
//  получится 'number153',т.к. все преобразуется в строку
15 + 3 + "number"
// получится '18number' 
[1] > null
// выведет true, потому что 1 больше чем null
"foo" + + "bar"
// выведет 'foonan' потому что унарный плюс преобразовывает значение в число +bar=nan
'true' == true
// выведет false потому что сравнивается строка и 1
false == 'false'
// выведет false потому что сравнивается строка и 0
null == ''
// выведет false потому что null можно сравнивать с null и undefined
!!"false" == !!"true"
// выведет true потому что строки заполнены поэтому приеобразуется в 1
// ['x'] == ‘x’
// выведет true потому что массив преобразуется в строку
// [] + null + 1
// выведет null1 потому что массив преобразуется в строку
0 || "0" && {}
// опеатор ||выводит первое true, значит выведет строку.Выведет {} потому что оператор && выводит последнее true
[1,2,3] == [1,2,3]
// false потому что это два разных объекта
!!null
// выведет false потому что преобразует в булевое значение
!!undefined
// выведет false потому что преобразует в булевое значение




// let i = 20;

// while (i) {
//   alert( i-- );
// }  выведет 1 потому что 0 остановит цикл



let x = 39;
while (x<91) {
    x++;
    console.log(x);
}


let a = 11;
while (a<=340) {
    if ((a%4)==0){
    console.log(a);
}
     a++;   
    };


for (let i = 100; i>=-5; i--) {
    console.log(i);
    
}    
    



let piramid = '';
for (let i = 15; i >=0; i--) {
    piramid = piramid + 'y';
    console.log(piramid);
    
}




for (let i = 0; i<=100; i+=2) {
    console.log(i);
    
}

let z = 0;
for (let i = 0; i<=100; i++) {
    z += i;
    
}
console.log(z);



let c = '';
for (let i = 1; i <= 11; i++) {
    if ((i%2) !== 0)
    {
     c = c + ' ' + i;
    }
}
    console.log(c);




    let p = '';
    for (let i = 123; i >=118; i--) 
        {
         p = p + '-' + i;
        }
    
        console.log(p);    




        let q = '-';
    for (let i = 1; i<=9; i++) 
        {
         q = q + i + '-';
        }
    
        console.log(q);




let data1 = prompt("Введите число", "");
let data2 = prompt("Введите число", "");
data1 == data2 ? console.log('все хорошо') : console.log('числа не равны');



let data3 = +prompt("Введите число", "");
let data4 = +prompt("Введите число", "");
data3 + data4 > 10 ? console.log('все хорошо') : console.log('сумма не больше 10');