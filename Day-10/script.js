let add_element = document.querySelector(".day-9");
// task 1:
let num = prompt("Enter the input for find odd or even");
let create_element;

console.log("TASK-1 -- ODD or EVEN")
console.log("\n");

create_element = document.createElement("h1")
create_element.textContent = "Task-1";
add_element.appendChild(create_element);
if (num % 2 == 0) {
    create_element = document.createElement("h2");
    create_element.textContent = "The " + num + " is even"
    console.log(num + " is even");
    add_element.appendChild(create_element);
}
else {
    create_element = document.createElement("h2");
    create_element.textContent = "The " + num + " is odd";
    console.log(num + " is even")
    add_element.appendChild(create_element);
}

console.log("\n");
console.log("TASK-2 -- Print 1 to 10")
console.log("\n");

// task -2 
create_element = document.createElement("h1");
create_element.textContent = "Task-2";
add_element.appendChild(create_element);
create_element = document.createElement("div");
add_element.appendChild(create_element);
create_element.style.display = "flex";

for (let i = 1; i <= 10; i++) {
    console.log(i);
    create_element.append(i);
}



//task -3
console.log("\n");
console.log("TASK-3 -- Print Multiples");
console.log("\n");

add_element.appendChild(create_element);
for (let i = 1; i <= 10; i++) {
    console.log(i + " * 3 = " + i * 3);
}


// task - 4
console.log("\n");
console.log("TASK-4 -- Prime Number or not")
console.log("\n");

function check_prime(prime_num) {
    for (let i = 2; i < prime_num / 2; i++) {
        if (prime_num % i == 0)
            return false;
    }
    return true;
}
let prime_num = prompt("Enter the input prime number");
let bool_prime = check_prime(prime_num);

create_element = document.createElement("h1");
create_element.textContent = "Task-4";
add_element.appendChild(create_element);
if (bool_prime) {
    console.log(prime_num + " is a prime number");
    create_element = document.createElement("h2");
    create_element.textContent = prime_num + " is a prime number";
    add_element.append(create_element);
}
else {
    console.log(prime_num + " not a prime number");
    create_element = document.createElement("h2");
    create_element.textContent = prime_num + " not a prime number";
    add_element.append(create_element);
}


// task -5 
console.log("\n");
console.log("TASK-5 -- Sum of 100")
console.log("\n");

let sum = 0;
for (let i = 1; i <= 100; i++)
    sum += i;
console.log(sum);

create_element = document.createElement("h1");
create_element.textContent = "Task-5";
add_element.appendChild(create_element);
create_element = document.createElement("h2");
create_element.textContent = "Sum of integer from 1 to 100 "+sum;
add_element.append(create_element);


// task - 6
console.log("\n");
console.log("TASK-6 -- Largest number in array");
console.log("\n");
let arr = [1,5,3,9,2];
let max_element = 0;
for(let i = 0;i<arr.length;i++)
{
    max_element = Math.max(max_element,arr[i]);
}
console.log("Largest element in array "+max_element);

create_element = document.createElement("h1");
create_element.textContent = "Task-6";
add_element.appendChild(create_element);
create_element = document.createElement("h2");
create_element.textContent = "Largest element in array "+max_element;
add_element.append(create_element);


// task -7
console.log("\n");
console.log("TASK-7 -- count the vowels")
console.log("\n");

let name = "bharanitharan";
let vowels_arr = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
for(let char of name){
    if(vowels_arr.includes(char))
        count++;
}
console.log("Total number of vowels in word "+ name+"is"+count);

create_element = document.createElement("h1");
create_element.textContent = "Task-7";
add_element.appendChild(create_element);
create_element = document.createElement("h2");
create_element.textContent = "Total number of vowels in word "+ name+" is "+count;
add_element.append(create_element);





// task - 8
console.log("\n");
console.log("TASK-8 -- star pattern")
console.log("\n");
for(let i = 0;i<5;i++){
    let star = ""
    for(let j = 0;j<(i+1);j++)
    {
        document.write("* ");
        star += "* "
    }
    document.write("<br>");
    console.log(star);
}



console.log("\n");
console.log("TASK-9 -- Fizz Buzz")
console.log("\n");

for(let i = 1;i <= 50;i++){
    if(i % 3 == 0  && i % 5 ==0)
        console.log("FizzBuzz");
    else if(i % 3 == 0)
        console.log("Fizz");
    else if(i % 5 == 0)
        console.log("Buzz");
    else
       console.log(i);
}



console.log("\n");
console.log("TASK-10 -- Reverse a String")
console.log("\n");
create_element = document.createElement("h1");
create_element.textContent = "Task-10";
add_element.appendChild(create_element);


let str = "Welcome";
console.log("orginal String "+str);
let rev_str = "";
for(let i = str.length-1;i>=0;i--)
    rev_str+= str.charAt(i);


create_element = document.createElement("h2");
create_element.textContent = "Original String: "+str;
add_element.append(create_element);
create_element = document.createElement("h2");
create_element.textContent = "Reverse String: "+rev_str;
add_element.append(create_element);
console.log("Reverse String "+rev_str);

create_element = document.createElement("h1");
create_element.textContent = "Task-8";
add_element.appendChild(create_element);