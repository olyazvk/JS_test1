let arr1 = ['a', 'b', 'c'] ;
let arr2 = [1, 2, 3];
let union = arr1.concat(arr2);
console.log(union);



let addarr = arr1.push(1,2,3);
console.log(arr1);

let addarr1 = arr2.reverse();
console.log(addarr1);

let arr3 = [1, 2, 3, 4, 5];
let slicet = arr3.slice(0,3);
console.log(slicet)


let slicet1 = arr3.slice(3,5);
console.log(slicet1)


let obj1 = {
    js:'test',
    jq: 'hello',
    css: 'world'
};
let objcase = Object.keys(obj1);
console.log(objcase);



let arr4 = [1, 2, 3, 4, 5, 6, 7];

for (var i = 0; i < arr4.length - 1; i++) {
    arr4.splice(i, 0, arr4.pop());
}
console.log(arr4);


let arr5 = [[1, 2, 3], [4, 5], [6]];
let str5 = 0;

for (let i = 0; i < arr5.length; i++) {
    for (let x = 0; x < arr5[i].length; x++) {
        str5 += arr5[i][x];
        
    }
    
}
console.log(str5);



let arr6 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let str6 = 0;

for (let i = 0; i < arr6.length; i++) {
    for (let x = 0; x < arr6[i].length; x++) {
        for (let f = 0; f < arr6[i].length; f++) {
        str6 += arr6[i][x][f];
        }
    }
    
}
console.log(str6);







let user = {
    name: 'Sasha',
    age: 31,
    type: 'women',
    character: 'old',
}

let user2 = {
    name: 'Pasha',
    age: 34,
    type: 'men',
    character: 'old',
    
}


for (const key in user) {
    if (user[key] == user2[key]) {
        console.log(user[key]);

    }
}