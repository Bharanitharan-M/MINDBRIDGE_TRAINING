// task - 1
console.log("Task-1  -- Operator Task\n");
let num_1 = prompt("Enter the first number for Opeartor Task");
let num_2 = prompt("Enter the second number for Opeartoe Task");
console.log("Sum: " + num_1 + num_2);
console.log("Difference: " + num_1 - num_2);
console.log("Product: " + num_1 * num_2);
console.log("Quotient: " + num_1 / num_2);


// task - 2
console.log("\nTask-2  -- Logical Condition\n");
let greater_num = prompt("Enter the number for logical Condidtion");
if (greater_num > 10 && greater_num % 2 == 0)
    console.log("The number " + greater_num + " is greater 10 and divisible by 2");
else
    console.log("The number not grater than 10 and divisible by 10");


// task -3
console.log("\nTask-3  -- Ternary Operator\n");
let pos_neg_num = prompt("Enter the number for Pos or Neg");
let pos_neg = pos_neg_num > 0 ? "Positive" : "Negative";
console.log(pos_neg);

// Task - 4
console.log("\nTask-4  -- Conditions and Looping Tasks\n");
let num_even_odd = prompt("Enter the number for check odd or even");
if (num_even_odd % 2 == 0)
    console.log("The number " + num_even_odd + " is even");
else
    console.log("The number " + num_even_odd + " is odd");

// Task - 5
console.log("\nTask-5  -- Grade System\n");
let mark = Number(prompt("Enter the percentage for Grade"));
switch (true) {
    case mark >= 90 && mark <= 100:
        console.log("Grade: A");
        break;
    case mark >= 80 && mark < 90:
        console.log("Grade: B");
        break;
    case mark >= 70 && mark < 80:
        console.log("Grade: C");
        break;
    case mark >= 1 && mark < 70:
        console.log("Grade: F");
        break;
    default:
        console.log("NAN");
}


// task - 6
console.log("\nTask-6  -- Print Multiplication Table\n");
let mulpti = prompt("Which table You want");
let i = 1;
for (i; i <= 10; i++) {
    console.log(i + " * " + mulpti + " = " + i * mulpti);
}



// task - 7
console.log("\nTask-7  -- Count Digits in a Number\n");
let count_digit = prompt("Enter the number to digit");
let count = 0;
while (count_digit > 0) {
    count_digit = Math.floor(count_digit / 10);
    count++;
}
console.log(count);


// task - 8
console.log("\nTask-8  --  Dialog Box Tasks\n");
alert("Welcome to my website!");


// task - 9

console.log("\n task -9 -- User Confirmation")
let continu = confirm("If you wnat to continue");
if (continu) {
    alert("Yes You can Continue");
    console.log("Yes You can Continue");
}
else
    alert("You Cancled");


// task - 10
console.log("\nTask-10 --  Promt\n");
let age = prompt("Enter the your age");
if (age >= 18)
    console.log("You are eligible");
else
    console.log("You are not eligible");


// task - 11
console.log("\nTask-11 --   Simple BMI Calculato\n");
let height = prompt("Enter your height");
let weight = prompt("Enter your weight");
let BMI = weight / (height ** 2);
alert("Your BMI is "+BMI);


//  task -12
console.log("\nTask-11 --   String Methods\n");
console.log("\nTask-11 --    Reverse a String\n");
let str = "Bhrani";
let rev_str = "";
for (let k = str.length-1; k >= 0; k--) {
    rev_str += str.at(k);
}
console.log("Original string: " + str);
console.log("Reverse String: " + rev_str);


// task - 13
console.log("\nTask-11 --    Count Vowels\n");
let vowels = str.match(/[aeiouAEIOU]/g);
console.log("number of Vowels " + vowels.length);


// task -14
console.log("\nTask-14 --  Palindrome")
if (str === rev_str)
    console.log(str + " true");
else
    console.log(str + " false");


// task -15
console.log("\nTask-14 --  Extract Initials");
let extract = "John Doe".split(" ");
console.log(extract[0].toUpperCase().at(0)+" . "+extract[1].toUpperCase().at(0));


// task -16
console.log("\nTask-14 --  replace");
let word = "I love programming ";
word.replace("programming","javascript");
console.log(word);


// task -17
console.log("\nTask-17 --  split the content");
let split_word = "Hello World".split(" ");
console.log(split_word);


// task - 18
console.log("\nTask-18 --  Remove space");
let remove_space = "I LOVE JAVASCRIPT";
console.log(remove_space.replace(/\s/g,""));


// task -19
console.log("\nTask-19 -- find the frequency");
let word_find = "Hello";
let letter_count = word_find.match(/l/g);
console.log(letter_count.length);





let names= "Bharani";
let sum = 0;
for(let i = 0;i<names.length;i++){
    sum+= names.charCodeAt(i);
}
console.log(sum);



