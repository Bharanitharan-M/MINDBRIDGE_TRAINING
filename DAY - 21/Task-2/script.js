const table_append = document.getElementById("append_element");
let interval;
document.getElementById('car_listss').addEventListener('click',()=>{
  home_page();
})
let car_type =  [
        {
            image: "./assests/Toyota_Corolla.png",
            car_name: "Toyota",
            Model: "Toyota Corolla 2023",
            Price: 3000
           
        },
        {
            image: "./assests/Honda_Civic.png",
            car_name: "Honda Civic",
            Model: "Honda CR-V 2023",
            Price: 5000
        },
        {
            image: "./assests/Nissan_Altima.png",
            car_name: "Nissan",
            Model: "Nissan Leaf 2023",
            Price: 3000
        },
        {
            image: "./assests/Chevrolet.png",
            car_name: "Chevrolet",
            Model: "Chevrolet Silverado 1500",
            Price: 6000
        },
        {
            image: "./assests/Tesla.png",
            car_name: "Tesla",
            Model: "Tesla Model 3 Long Range",
            Price: 10000
        },
        {
            image: "./assests/Ford.png",
            car_name: "Ford",
            Model: "Ford Mustang Convertible",
            Price: 9000
        },
        {
            image: "./assests/BMW.png",
            car_name: "BMW",
            Model: "BMW X5",
            Price: 15000
        },
        {
            image: "./assests/Chrysler.png",
           car_name: "Chrysler",
            Model: "Chrysler Pacifica",
            Price: 9500
        },
        {
            image: "./assests/Wrangler.png",
           car_name: "Jeep Wrangler",
            Model: "Jeep Wrangler",
            Price: 8500
        },
        {
            image: "./assests/Audi.png",
           car_name: "Audi",
            Model: "Audi A6",
            Price: 13000
        },
        {
            image: "./assests/Toyota_jeep.png",
           car_name: "Toyota",
            Model: "Toyota Sienna 2023",
            Price: 10000
        },
        {
            image: "./assests/Land.png",
           car_name: "Land Rover",
            Model: "Land Rover Defender",
            Price: 12500
        }
    ]
const indiaStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

function name_validate(user_name) {
  let num_regx = /([0-9])/;
  let user_name_err = user_name.nextElementSibling;
  if (user_name.value.length < 3 || user_name.value.length > 17) {
    user_name.style.border = "1px solid red";
    user_name_err.style.display = "block";
    user_name_err.textContent = "Name Should conatins atleast 3 to 17 letters";
  } else if (user_name.value.length == 0) {
    user_name.style.border = "1px solid red";
    user_name_err.style.display = "block";
    user_name_err.textContent = "Data should be filled";
  } else if (num_regx.test(user_name.value)) {
    user_name.style.border = "1px solid red";
    user_name_err.style.display = "block";
    user_name_err.textContent = "Name Should not contain number";
  } else {
    user_name.style.border = "1px solid #ced4da";
    user_name_err.style.display = "none";
    return user_name.value;
  }
}
function mail_validate(user_mail) {
  
  const user_mail_err = user_mail.nextElementSibling;
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
  if (!regex.test(user_mail.value)) {
    user_mail.style.border = "1px solid red";
    user_mail_err.textContent = "Invalid Mail Address";
    user_mail_err.style.display = "block";
  } else {
    user_mail.style.border = "1px solid #ced4da";
    user_mail_err.style.display = "none";
    return user_mail.value;
  }
}
function phone_num_validate(user_phone) {
  console.log(user_phone)
  let user_phone_err = user_phone.nextElementSibling;
  let num_regx = /^\d{10}$/;
  if (user_phone.value.length == 0) {
    user_phone.style.border = "1px solid red";
    user_phone_err.textContent = "Enter the Phone number";
    user_phone_err.style.display = "block";
  } else if (!num_regx.test(user_phone.value)) {
    user_phone.style.border = "1px solid red";
    user_phone_err.textContent = "Invalid Number";
    user_phone_err.style.display = "block";
  } else {
    user_phone.style.border = "1px solid #ced4da";
    user_phone_err.style.display = "none";
    return user_phone.value;
  }
}
function zip_validate(user_zip) {
  let user_zip_err = user_zip.nextElementSibling;
  let num_regx = /^\d{6}$/;
  if (user_zip.value.length == 0) {
    user_zip.style.border = "1px solid red";
    user_zip_err.textContent = "Enter the Pin code number";
    user_zip_err.style.display = "block";
  } else if (!num_regx.test(user_zip.value)) {
    user_zip.style.border = "1px solid red";
    user_zip_err.textContent = "Invalid Number";
    user_zip_err.style.display = "block";
  } else {
    user_zip_err.style.display = "none";
    return user_zip.value;
  }
}
function address_validate(address) {
  let address_err = address.nextElementSibling;
  if (address.value.length == 0) {
    address_err.textContent = "Fill the data";
    address_err.style.display = "block";
    address.style.border = "1px solid red";
  }
  else {
    address_err.style.display = "none";
    address.style.border = "1px solid #ced4da";
    return address.value;
  
  }
}
function option_validate(user_location) {
  let user_location_err = user_location.nextElementSibling;
  const selectedOption = user_location.options[user_location.selectedIndex];
  if (selectedOption) {
    user_location_err.style.display = "none";
    user_location.style.border = "1px solid #ced4da";
    return selectedOption.value;
  }
  else {
    user_location_err.textContent = "Select the Option";
    user_location_err.style.display = "block";
    user_location.style.border = "1px solid red";
  }
}
function startdate(date) {
  let date_err = date.nextElementSibling;
  let date_string = date.value.split("-");
  let getdate = new Date();
  let current_date = getdate.getDate();
  let current_month = getdate.getMonth();
  let current_year = getdate.getFullYear();
  if (date_string[2] >= current_date && current_year <= date_string[0] && current_month <= date_string[1]) {
    date_err.style.display = "none";
    date.style.border = "1px solid #ced4da";
    return date.value;
  }
  else {
    date_err.textContent = "Invalid Date";
    date.style.display = "block";
    date.style.border = "1px solid red";
  }
}
let calculated_days = 0;
function endDate(startdate, enddate) {
  let date_err = enddate.nextElementSibling;
let startdate_string = startdate.value.split("-");
let enddate_string = enddate.value.split("-");
let start_date = new Date(startdate_string[0], startdate_string[1] - 1, startdate_string[2]);
let end_date = new Date(enddate_string[0], enddate_string[1] - 1, enddate_string[2]);
let time_diff = end_date.getTime() - start_date.getTime();
calculated_days = time_diff / (1000 * 3600 * 24);
if (calculated_days > 0) {
  date_err.style.display = "none";
  enddate.style.border = "1px solid #ced4da";
  return [enddate.value,calculated_days];

} else {
  date_err.textContent = "Invalid Date";
  date_err.style.display = "block";
  enddate.style.border = "1px solid red";
}
}
function total_fill(total){
  let perday = Number(document.querySelector("input[name = 'price']").value.split("₹")[1]);
  total.value = calculated_days * perday;
}
function agree_validate(agree){
 
  let agree_err = agree.nextElementSibling.nextElementSibling;
  if(agree.checked == true){
    agree_err.style.display = "none";
    return agree;
  }
  else{
    agree_err.textContent = " You must agree before submitting.";
    agree_err.style.display = "block"
  }
}
function check_validate(event) {
  let form = document.getElementsByClassName("needs-validation")[0]
  event.preventDefault();
  let fname = name_validate(document.querySelector("input[name = 'fname']"));
  let lname = name_validate(document.querySelector("input[name = 'lname']"));
  let mail = mail_validate(document.querySelector("input[name = 'mails']"));
  let phone_num = phone_num_validate(document.querySelector("input[name= 'phnums']"));
  let address = address_validate(document.querySelector("input[name='address']"));
  let state = option_validate(document.getElementsByClassName('custom-select')[0]);
  let district = option_validate(document.getElementsByClassName('custom-select')[1]);
  let zip = zip_validate(document.querySelector("input[name = 'zip']"));
  let startDate = startdate(document.querySelector("input[name = 'startdate']"));
  let enddate = endDate(document.querySelector("input[name = 'startdate']"), document.querySelector("input[name = 'enddate']"));
  let agree = agree_validate(document.querySelector('.form-check-input'));
  let perday = Number(document.querySelector("input[name = 'price']").value.split("₹")[1]);
  console.log(phone_num)
  if (fname && lname && mail && phone_num && address && state && district && zip && startDate && enddate && agree) {
    console.log(1)
    const confirmationMessage = `You are about to submit the following details:\n
    - Car Type: ${document.querySelector("input[name = 'model']").value}\n
    - Rental Dates: ${startDate} to ${enddate[0]}\n
    - Total Amount: ${enddate[1] * perday}\n\n
    Do you want to proceed?`;
    let submit =  confirm(confirmationMessage);
    if(submit){
      alert("Thank For chossing us")
      form.submit();
    }
  }
  
}
let image_no = 1;
function home_page() {
  document.getElementById('home').style.display = "block";
  document.getElementById('admin_pannel_details').style.display = "none";
  let slide_show = document.getElementsByClassName("slide-show");
  console.log(slide_show)
  
  interval =  setInterval(() => {
    if (image_no > slide_show.length - 1) image_no = 0;
    if (image_no != 0) slide_show[image_no - 1].classList.toggle("show");
    if (image_no == 0)
      slide_show[slide_show.length - 1].classList.toggle("show");
    slide_show[image_no].classList.toggle("show");
    image_no++;
  }, 4000);
  let car_list = document.getElementsByClassName("car_list")[0];
    car_type.sort((a, b) => a.Price - b.Price);
    car_list.innerHTML = '';
    car_type.forEach((element) => {
      let card = document.createElement("div");
      card.className = "card";
      car_list.appendChild(card);
      let images = document.createElement("img");
      images.className = "card-img-top";
      images.src = element.image;
      card.appendChild(images);
      let card_body = document.createElement("div");
      card_body.className = "card-body";
      card.appendChild(card_body);
      let h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.textContent = element.car_name;
      card_body.appendChild(h5);
      let ul = document.createElement("ul");
      let li_1 = document.createElement("li");
      let li_2 = document.createElement("li");
      let strong_1 = document.createElement("strong");
      let strong_2 = document.createElement("strong");
      strong_1.textContent = "Model: ";
      li_1.appendChild(strong_1);
      let small_1 = document.createElement("small");
      let small_2 = document.createElement("small");
      small_1.textContent = element.Model;
      li_1.appendChild(small_1);
      strong_2.textContent = "Price per Day: ";
      li_2.appendChild(strong_2);
      small_2.textContent = "₹" + element.Price;
      li_2.appendChild(small_2);
      ul.appendChild(li_1);
      ul.appendChild(li_2);
      let button = document.createElement("button");
      let centers = document.createElement("center");
      centers.appendChild(button);
      button.textContent = "Book Now";
      button.setAttribute("onclick", "book_now(this)");
      card_body.appendChild(ul);
      card_body.appendChild(centers);
    });
  }

home_page();

// book page
function book_now(e) {
  clearInterval(interval);
  document.querySelector(".show").classList.toggle = 'show';
  document.getElementById("home").style.display = "none";
  document.getElementById("booking").style.display = "block";
  let state = document.getElementsByClassName("custom-select")[0];
  let model = document.querySelector("input[name = 'model']");
  model.setAttribute('value', e.parentNode.parentNode.children[1].firstElementChild.lastElementChild.textContent);
  let price = document.querySelector("input[name = 'price']");
  price.setAttribute('value', e.parentNode.parentNode.children[1].firstElementChild.nextElementSibling.lastElementChild.textContent)
  // model.setAttribute('value', ) 
  indiaStates.forEach((element) => {
    let create_option = document.createElement("option");
    create_option.setAttribute("value", element);
    create_option.textContent = element;
    state.appendChild(create_option);
  });
  document.getElementsByClassName('custom-select')[0].addEventListener('blur', () => {
    let state_select = option_validate(document.getElementsByClassName('custom-select')[0]);
    if (state_select) {
      const x = new XMLHttpRequest();
      x.open("GET", "car_list.json", false);
      x.send();
      let disrtict = document.getElementsByClassName("custom-select")[1];
      disrtict.innerHTML = "";
      if (x.readyState == 4 && x.status == 200) {
        let car_lists = JSON.parse(x.responseText);
        car_lists.indiaDistrict[state_select].forEach(element => {
          let create_district_option = document.createElement("option");
          create_district_option.setAttribute("value", element);
          create_district_option.textContent = element;
          disrtict.appendChild(create_district_option);
        })
      }
    }
  })
}

function admin(){
  clearInterval(interval);
  document.querySelector(".show").classList.toggle = 'show';
   document.getElementById('home').style.display = "none"
   document.getElementById('admin_pannels').style.display = "block";

let admin_user_name = "CarRental"
let admin_password = "Carental@2001"
let login_time = 3;
let btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  let user_name = document.querySelector("input[name='name']");
  let user_password = document.querySelector("input[name = 'mail']");
  if(login_time != 0){
  if (user_name.value === admin_user_name && user_password.value === admin_password) {
   document.getElementById('admin_pannel_details').style.display = "block";
   tabel_add();
   document.getElementById('admin_pannels').style.display = "none";
    document.getElementById("form").reset();
  }
  else{
    alert(`Wrong Username or Password\n ${login_time} limit`);
    login_time--;
  }
}
else{
  login_time = 3;
  document.getElementById('admin_pannels').style.display = "none";
  document.getElementById('home').style.display = "block";
  document.getElementById("form").reset();
}
});
}


function tabel_add(){
  
  car_type.forEach(element=>{
    const table_row = document.createElement("tr");
    table_row.innerHTML = `<td>${element.car_name}</td>
            <td>${element.Model}</td>
            <td>${element.Price}</td>
                    <td><button onclick='edit_form(this)'>Edit</button><br><button onclick='delete_form(this)'>Delete</button></td>`;
    table_append.appendChild(table_row)
  })
}
function car_name_validate(user_name) {
  let num_regx = /([0-9])/;
  let user_name_err = user_name.nextElementSibling;
  if (user_name.value.length < 3 || user_name.value.length > 17) {
    user_name_err.style.display = "block";
    user_name_err.textContent = "Car Name Should conatins atleast 3 to 17 letters";
  } else if (user_name.value.length == 0) {
    user_name_err.style.display = "block";
    user_name_err.textContent = "Data should be filled";
  } else if (num_regx.test(user_name.value)) {
    user_name_err.style.display = "block";
    user_name_err.textContent = "Car Name Should not contain number";
  } else {
    user_name_err.style.display = "none";
    return user_name.value;
  }
}
function car_model_validate(model){
  let num_regx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{3,17}$/;
  let model_err = model.nextElementSibling;
  if (model.value.length < 3 || model.value.length > 25) {
    model_err.style.display = "block";
    model_err.textContent = "Car model Should conatins atleast 3 to 15 letters";
  } else if (model.value.length == 0) {
    model_err.style.display = "block";
    model_err.textContent = "Data should be filled";
  } else if (num_regx.test(model.value)) {
    model_err.style.display = "block";
    model_err.textContent = "Car should Contain Number, LowerCase and UpperCase";
  } else {
    model_err.style.display = "none";
    return model.value;
  }
}
function price_per_day_validate(price) {
  let price_err = price.nextElementSibling;
  if (price.value === "") {
    price_err.style.display = "block";
    price_err.textContent = "Price per Day is required.";
  } 
  else if (price.value <= 0) {
    price_err.style.display = "block";
    price_err.textContent = "Price must be a positive number.";
  }
  else if (price.value < 1 || price.value > 20000) {
    price_err.style.display = "block";
    price_err.textContent = "Price per Day should be between 1 and 20,000.";
  } 
  else {
    price_err.style.display = "none";
    return price.value;
  }
}
function image_url_validate(input) {
  let image_url_regx = /^https:\/\//i;
  let input_err = input.nextElementSibling;
  if (input.value.trim() === "") {
    input_err.style.display = "block";
    input_err.textContent = "Image URL is required.";
  } 
  else if (!image_url_regx.test(input.value)) {
    input_err.style.display = "block";
    input_err.textContent = "Please provide a valid image URL (e.g., .jpg, .jpeg, .png, .gif).";
  }
  else {
    input_err.style.display = "none";
    return input.value;
  }
}
const form_clear = document.getElementById("form_clear");

function from_validate(event) {
  event.preventDefault();
  let user_name = document.querySelector("input[name = 'Name']");
  let user_age = document.querySelector("input[name = 'age']");
  let user_phone_num = document.querySelector("input[name= 'phnum']");
  let user_DOB = document.querySelector("input[name = 'dob']");
  let car_name_value = car_name_validate(user_name);
  let car_model_value = car_model_validate(user_age);
  let car_price_value = price_per_day_validate(user_phone_num);
  let car_image_value = image_url_validate(user_DOB);

  if(car_name_value && car_model_value && car_price_value && car_image_value ){
    car_type.push({ image: car_image_value,
      car_name: `${car_name_value}`,
      Model:  `${car_model_value}`,
      Price: `${Number(car_price_value)}`})

      const table_row = document.createElement("tr");
      table_row.innerHTML = `<td>${car_name_value}</td>
              <td>${car_model_value}</td>
              <td>${car_price_value}</td>
                      <td><button onclick='edit_form(this)'>Edit</button><br><button onclick='delete_form(this)'>Delete</button></td>`;
      table_append.appendChild(table_row);
      form_clear.reset();
  }
}
function get_info(user_name) {
  console.log(user_name);
  let index = 0;
  let update_details = new Promise((resolve, reject) => {
    let user_info = car_type.find((details, indexs) => {
      
      if (details.Model == user_name) {

        index = indexs;
        return true;
      }
    });
    if (user_info) resolve([user_info, index]);
    else reject(new Error("Data Not Found"));
  });
  return update_details;
}
function delete_form(e) {
  let chid = e.parentNode.parentNode.children;
  let parent = e.parentNode.parentNode;
  let user_name = chid[1].textContent;
  get_info(user_name).then((details) => {
    let [user_details, index] = details;
    car_type.splice(index, 1);
    
    parent.remove();
  });
}


let btn_click = true;
function edit_form(e) {
  let user_name = document.querySelector("input[name = 'Name']");
  let user_age = document.querySelector("input[name = 'age']");
  let user_phone_num = document.querySelector("input[name= 'phnum']");
  let user_DOB = document.querySelector("input[name = 'dob']");
  user_DOB.disabled = true;
  let parent = e.parentNode.parentNode.children;
  user_name.value = parent[0].textContent;
  user_age.value = parent[1].textContent;
  user_phone_num.value = parent[2].textContent;
  let btn = document.getElementById("update");
  let btn_submit = document.getElementById("submit");

  btn.style.display = "block";
  btn_submit.style.display = "none";
  if (btn_click) {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      let car_name_value = car_name_validate(user_name);
  let car_model_value = car_model_validate(user_age);
  let car_price_value = price_per_day_validate(user_phone_num);
 
  if(car_name_value && car_model_value && car_price_value) {
    get_info(parent[1].textContent)
          .then((details) => {
            let [user_details, index] = details;
            user_details.Model = car_model_value
            user_details.Price = car_price_value;
            user_details.car_name = car_name_value
            console.log(car_type)
          })
          .catch((error) => {
            alert(error.message);
          });
        parent[0].textContent = car_name_value;
        parent[1].textContent = car_model_value;
        parent[2].textContent = car_price_value;
        e.textContent = "Updated";
        btn_submit.style.display = "block";
        btn.style.display = "none";
        form_clear.reset();
      }

      btn_click = false;
    });
  }
}