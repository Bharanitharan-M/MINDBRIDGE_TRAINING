let expense_storage = [{
    s_no: 1, expense_name: "Rent", expense_amount: 6000, date: "2024-12-10", expense_type: "Other"
}]
let table_body = document.getElementById('tbody');

function auto_display() {
    expense_storage.forEach(element => {
        let create_tr = document.createElement('tr');
        create_tr.classList.add(element.expense_name);
        create_tr.classList.add(element.expense_type);
        let create_td_1 = document.createElement('td');
        create_tr.appendChild(create_td_1);
        create_td_1.textContent = element.s_no;

        let create_td_2 = document.createElement('td');
        create_tr.appendChild(create_td_2);
        create_td_2.textContent = element.expense_name;

        let create_td_3 = document.createElement('td');
        create_tr.appendChild(create_td_3);
        create_td_3.textContent = element.expense_amount;

        let create_td_4 = document.createElement('td');
        create_tr.appendChild(create_td_4);
        create_td_4.textContent = element.expense_type;

        let create_td_6 = document.createElement('td');
        create_tr.appendChild(create_td_6);
        create_td_6.textContent = element.date;

        let create_td_5 = document.createElement('td');
        create_tr.appendChild(create_td_5);
        create_td_5.innerHTML = '<button onclick="edit(this)">Edit</button><br><button onclick="deletes(this)">Delete</button>'
        table_body.appendChild(create_tr)
        document.getElementById('total').textContent = Number(document.getElementById('total').textContent) + Number(element.expense_amount);
    });
}
auto_display();


function expense_name_validate(expense){
    let expense_err = expense.nextElementSibling;
    if(expense.value.length == 0){
        expense_err.style.display = "block";
    }
    else{
        return expense.value;
    }
}
function expense_amount_validate(expense){
    let expense_err = expense.nextElementSibling;
    let regex = /[0-9]{1,}/
    if(expense.value.length == 0){
        expense_err.style.display = "block";
    }
    else if(!regex.test(Number(expense.value))){
        expense_err.style.display = "block";
        expense_err.textContent = "Enter only Number"
    }
    else{
        return expense.value;
    }
}

function expense_date_validate(expense){
    let expense_err = expense.nextElementSibling;
    if(expense.value.length == 0){
        expense_err.style.display = "block";
    }
    else{
        return expense.value;
    }
}
function option_validate(selectedOption){
    let expense_err = selectedOption.nextElementSibling;
    if(selectedOption.value == 'choose'){
        expense_err.style.display = "Block";
    }
    else
     return selectedOption;
}
// add expense function
document.getElementById("add_expense").addEventListener('click', (event) => {
    event.preventDefault();
    let expense_name = expense_name_validate(document.querySelector("input[name = 'expense_name']"));
    let expense_amount = expense_amount_validate(document.querySelector("input[name = 'expense_amount']"));
    let expense_type = document.getElementById('expense_type');
    let expense_date = expense_date_validate(document.querySelector("input[name = 'expense_date']"))
    const selectedOptions = expense_type.options[expense_type.selectedIndex];
    const selectedOption = option_validate(selectedOptions);
    if(expense_name && selectedOption && expense_amount && expense_date){
    let create_tr = document.createElement('tr');
    create_tr.classList.add(expense_name.value);

    create_tr.classList.add(selectedOption.value);
    let create_td_1 = document.createElement('td');
    create_tr.appendChild(create_td_1);
    create_td_1.textContent = expense_storage.length + 1;

    let create_td_2 = document.createElement('td');
    create_tr.appendChild(create_td_2);
    create_td_2.textContent = expense_name;

    let create_td_3 = document.createElement('td');
    create_tr.appendChild(create_td_3);
    create_td_3.textContent = expense_amount;

    let create_td_4 = document.createElement('td');
    create_tr.appendChild(create_td_4);
    create_td_4.textContent = selectedOption.value;

    let create_td_6 = document.createElement('td');
    create_tr.appendChild(create_td_6);
    create_td_6.textContent = expense_date;

    let create_td_5 = document.createElement('td');
    create_tr.appendChild(create_td_5);
    create_td_5.innerHTML = '<button onclick="edit(this)">Edit</button><br><button onclick="deletes(this)">Delete</button>'
    table_body.appendChild(create_tr)
    document.getElementById('total').textContent = Number(document.getElementById('total').textContent) + Number(expense_amount);
    expense_storage.push({ s_no: expense_storage.length + 1, expense_name: expense_name.value, expense_amount: expense_amount.value, date: expense_date.value, expense_type: selectedOption.value });
    }
})

document.getElementById('search').addEventListener('click', () => {
    let search_name = document.querySelector("input[name = 'search_name']");
    let table_body_child = table_body.children;
    Array.from(table_body_child).forEach(element => {
        element.style.display = "none"
        if (element.classList.contains(search_name.value)) {
            element.style.display = "table-row";
            document.getElementById('total').textContent = Number(element.firstChild.nextElementSibling.nextElementSibling.textContent)
        }
    })
})



function diffInDays(startDate, endDate) {
    const diffTime = endDate - startDate;  
    return Math.abs(Math.floor(diffTime / (1000 * 3600 * 24)));  
}

// Function to calculate difference in weeks
function diffInWeeks(startDate, endDate) {
    const diffTime = endDate - startDate;
    const diffDays = diffTime / (1000 * 3600 * 24);  
    return Math.abs(Math.floor(diffDays / 7));
}

// Function to calculate difference in months
function diffInMonths(startDate, endDate) {
    const diffYear = endDate.getFullYear() - startDate.getFullYear();
    const diffMonth = endDate.getMonth() - startDate.getMonth();
    return Math.abs(diffYear * 12 + diffMonth);  
}

// Function to calculate difference in years
function diffInYears(startDate, endDate) {
    return Math.abs(endDate.getFullYear() - startDate.getFullYear());  
}



document.getElementById('filter_btn').addEventListener('click', (event) => {
    event.preventDefault();
    let total = 0;
    let filter_cat = document.getElementById('filter_cat');
    let filter_date = document.getElementById('filter_date');
    const filter_cat_select = filter_cat.options[filter_cat.selectedIndex];
    const filter_date_select = filter_date.options[filter_date.selectedIndex];
    if (filter_cat_select.value != 'choose' && filter_date_select.value != 'choose') {
        let table_body_child = table_body.children;
        Array.from(table_body_child).forEach(element => {
            let date = new Date(element.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent)
            let today = new Date();
            let daysDifference = diffInDays(date, today);
            let weeksDifference = diffInWeeks(date, today);
            let monthsDifference = diffInMonths(date, today);
            let yearsDifference = diffInYears(date, today);
            element.style.display = "none"
            if (element.classList.contains(filter_cat_select.value) && ((filter_date_select.value == "week" && weeksDifference == 1) || (filter_date_select.value == "one_month" && monthsDifference == 1) || (filter_date_select.value == 'six_month' && (monthsDifference > 1 && monthsDifference <= 6)) || (filter_date_select.value == 'year' && yearsDifference == 1))) {
                element.style.display = "table-row";
                total += Number(element.firstChild.nextElementSibling.nextElementSibling.textContent)
            }
        })
    }
    else if(filter_cat_select.value != 'choose'){
        let table_body_child = table_body.children;
        Array.from(table_body_child).forEach(element => {
            element.style.display = "none"
            if (element.classList.contains(filter_cat_select.value)) {
                element.style.display = "table-row";
                total += Number(element.firstChild.nextElementSibling.nextElementSibling.textContent)
            }
        })
    }
    else if(filter_date_select.value != 'choose'){
        let table_body_child = table_body.children;
        Array.from(table_body_child).forEach(element => {
            let date = new Date(element.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent)
            let today = new Date();
            let daysDifference = diffInDays(date, today);
            let weeksDifference = diffInWeeks(date, today);
            let monthsDifference = diffInMonths(date, today);
            let yearsDifference = diffInYears(date, today);
            element.style.display = "none"
            if (((filter_date_select.value == "week" && weeksDifference == 1) || (filter_date_select.value == "one_month" && monthsDifference == 1) || (filter_date_select.value == 'six_month' && (monthsDifference > 1 && monthsDifference <= 6)) || (filter_date_select.value == 'year' && yearsDifference == 1))) {
                element.style.display = "table-row";
                total += Number(element.firstChild.nextElementSibling.nextElementSibling.textContent)
            }
        })
    }
    document.getElementById('total').textContent = total;

})


function deletes(e){
    e.parentNode.parentNode.remove();
}