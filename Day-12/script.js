// task-1
function find_largest(str1) {
    let count_word = 0;
    let index_word;
    for (let i = 0; i < str1.length; i++) {
        if (str_1[i].length > count_word) {
            count_word = str_1[0].length;
            index_word = i;
        }
    }
    return index_word;
}
let str_1 = "Hi Bharanitharan Bharanitharan".split(" ");
console.log("Largest Word in the String: " + str_1[find_largest(str_1)]);


// task-2
function duplicate_change(str_2, change_word) {
    let duplicate_find = new Set();
    for (let i = 0; i < str_2.length; i++) {
        if (duplicate_find.has(str_2[i])) {
            str_2[i] = change_word;
        }
        else
            duplicate_find.add(str_2[i]);
    }
    return str_2;

}
let str_2 = "John Mary John Alex Mary"
console.log(duplicate_change(str_2.split(" "), "Changed").join(" "));


// task-3
function even_index(str_3) {
    let duplicate_find = new Set();
    for (let i = 0; i < str_3.length; i=i+2) 
            str_3[i] = "Even";
    return str_3;
}

let str_3 = "I am learning javascript every day"
console.log(even_index(str_3.split(" ")).join(" "));



// task -4 
function remove_repeat(str_4) {
    let duplicate_find = new Set();

    for (let i = 0; i < str_4.length; i++) {
        for (let j = 0; j < str_4[i].length; j++) {
            if (duplicate_find.has(str_4[i].charAt(j))) {
              str_4[i] = str_4[i].substring(0,j)+""+str_4[i].substring(j+1);
              j--;
            }
            else
                duplicate_find.add(str_4[i].charAt(j));
        }
    }
    console.log(duplicate_find);
    return str_4;

}
let str_4 = "Hello World"
console.log(remove_repeat(str_4.split(" ")).join(" "));