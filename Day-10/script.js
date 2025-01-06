let add_element = document.querySelector(".day-9");
// task 1:
let num = 100;
let create_element;
create_element = document.createElement("h1")
create_element.textContent = "Task-1";
console.log("TASK-1 -- ODD or EVEN")
console.log("\n");
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
create_element = document.createElement("h1");
create_element.textContent = "Task-4";
add_element.appendChild(create_element);
function check_prime(prime_num) {
    for (let i = 2; i < prime_num / 2; i++) {
        if (prime_num % i == 0)
            return false;
    }
    return true;
}
let prime_num = 100;
let bool_prime = check_prime(prime_num);
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
create_element = document.createElement("h1");
create_element.textContent = "Task-5";
add_element.appendChild(create_element);
let sum = 0;
for (let i = 1; i <= 100; i++)
    sum += i;
console.log(sum);
create_element = document.createElement("h2");
create_element.textContent = "Sum of integer from 1 to 100 "+sum;
add_element.append(create_element);


// task - 6
console.log("\n");
console.log("TASK-6 -- Largest number in array")
console.log("\n");
let arr = [1,5,3,9,2];
let max_element = 0;
for(let i = 0;i<arr.length;i++)
{
    max_element = Math.max(max_element,arr[i]);
}
console.log("Largest element in array "+max_element);
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
for(name of vowels_arr)
    count++;
console.log(count); 
