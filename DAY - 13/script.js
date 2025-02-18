// task -1
const employee = [{ name: "John", age: 28,id :1 }, { name: "Anna", age: 22 }, { name: "Mike", age: 32, id:0 }];
employee.sort((a, b) => {
   return a.age - b.age && a.id - b.id;
});
console.log(employee);


// task -2
const arr = [1, 2, 3, 4, 5, 6];
let object = {
    even_arr : arr.filter((item,index) => (index+1)%2 == 0 ),
    odd_arr :  arr.filter((item,index) => (index+1)%2 !== 0 ),
}
console.log(object);


// task-3
const arr_2 =  [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'C' }, ];
let result = [];
arr_2.filter((item,id) => {
    if(!result.some(arr2_object => arr2_object.id == item.id))
        result.push(item);
    
})
console.log(result);


// task -4
const arr_3 = [1,2,2,3,3,3];
const find_freq = arr_3.reduce((item, value) => {
    item[value] = (item[value] || 0) + 1;
    return item;
},{});
console.log(find_freq);
const freq_arr = Object.entries(find_freq);
freq_arr.sort((a, b) => b[1] - a[1]);
console.log(freq_arr[0][0]);


// task - 5
const arr_4 = [1,2,3];
const arr_5 = [2,3,4];
let result_4 = [];
arr_5.some(item => {
    if(arr_4.includes(item))
        result_4.push(item);
})
console.log(result_4);



// task -6
const arr_6 = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]
let object_6 ={};
arr_6.forEach((item) => {
    object_6[item.id] = item.name;
    
})
console.log(object_6);



// task -7
const arr_7 = [1,2,2,3,4,4,5];
let result_7 = [];
result_7  = arr_7.reduce((index, item) => {
    index[item] = (index[item] || 0) + 1; 
    return index;
}, {});
const unique = Object.keys(result_7).filter(key => result_7[key] === 1);
console.log(unique);


// task -8
const arr_8 = { a: 1, b: 2 }
let result_8 = [];
Object.entries(arr_8).filter(item => {
    result_8.push(item);
})
console.log(result_8);


// task -9
const obj = { a: 1, b: 2, c: 3}

const filterobj = Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value <= 2)
);
console.log(filterobj)


// task - 10
let arr_10 = [1, 2, 3, 5];
const b = [4, 7];
const c = 6;
arr_10 = [arr_10,b,c];
let arr_11 = arr_10.flat();
let uniqueArray = arr_11.filter((item, index) => arr_11.indexOf(item) === index);
console.log(uniqueArray);