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
  console.log(1);
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
function address_validate(address){
  let address_err = address.nextElementSibling;
  if(address.value.length == 0){
    address_err.textContent = "Fill the data";
    address_err.style.display = "block";
    address.style.border = "1px solid red";
  }
  else{
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
function endDate(startdate, enddate) {
  let date_err = enddate.nextElementSibling;
  let startdate_string = startdate.value.split("-");
  let enddate_string = enddate.value.split("-");
  let calculate_start_date = 0;
  let calculate_end_date = 0;
  if (enddate_string[0] >= startdate_string[0] && enddate_string[1] >= startdate_string[1]) {
    if(startdate_string[1] % 2 == 0)
    {
      if(startdate_string[1] == 2){
        if(startdate_string[0] % 100 === 0 ? startdate_string[0] % 400 === 0 : startdate_string[0] % 4 === 0)
            calculate_start_date = startdate_string[2] - 29;
        else
        calculate_start_date = startdate_string[2] - 28;
      }
      else
        calculate_start_date = startdate_string[2] - 30
    }
    else{
      calculate_start_date = startdate_string[2] - 31;
    }

    
    if(Number(enddate_string[1]) - Number(startdate_string[1]) > 1){
      while(enddate_string[1] != 1){
        enddate_string--;
        if(enddate_string[1] % 2 == 0){
        if(enddate_string[1] == 2){
          if(enddate_string[0] % 100 === 0 ? enddate_string[0] % 400 === 0 : enddate_string[0] % 4 === 0)
              calculate_start_date += 29;
          else
          calculate_start_date += 28;
        }
        else
          calculate_start_date +=  30;
      }
      else
         calculate_start_date += 31;
      enddate_string[1]--;

      }
    }
    console.log("date"+calculate_start_date);
    date_err.style.display = "none";
    enddate.style.border = "1px solid #ced4da";
    return enddate.value;
  }
  else {
    date_err.textContent = "Invalid Date";
    date_err.style.display = "block";
    enddate.style.border = "1px solid red";
  }
}
function check_validate(event) {
  event.preventDefault();
  let fname = name_validate(document.querySelector("input[name = 'fname']"));
  let lname = name_validate(document.querySelector("input[name = 'lname']"));
  let mail = mail_validate(document.querySelector("input[name = 'mail']"));
  let phone_num = phone_num_validate(document.querySelector("input[name= 'phnum']"));
  let address = address_validate(document.querySelector("input[name='address']"));
  let state = option_validate(document.getElementsByClassName('custom-select')[0]);
  let district = option_validate(document.getElementsByClassName('custom-select')[1]);
  let zip = zip_validate(document.querySelector("input[name = 'zip']"));
  let startDate = startdate(document.querySelector("input[name = 'startdate']"));
  let enddate = endDate(document.querySelector("input[name = 'startdate']"),document.querySelector("input[name = 'enddate']"));
  let toatl = document.querySelector("input[name = 'totalamount']");
  if(fname && lname && mail && phone_num && address && state && district && zip && startDate && enddate){
    console.log(1);
  }
}
function home_page() {
  let slide_show = document.getElementsByClassName("slide-show");
  let image_no = 1;

  setInterval(() => {
    if (image_no > slide_show.length - 1) image_no = 0;
    console.log(image_no);
    if (image_no != 0) slide_show[image_no - 1].classList.toggle("show");
    if (image_no == 0)
      slide_show[slide_show.length - 1].classList.toggle("show");
    slide_show[image_no].classList.toggle("show");

    image_no++;
  }, 4000);
  let car_list = document.getElementsByClassName("car_list")[0];
  const x = new XMLHttpRequest();
  x.open("GET", "car_list.json", false);
  x.send();
  console.log(x.readyState);
  if (x.readyState == 4 && x.status == 200) {
    let car_lists = JSON.parse(x.responseText);
    car_lists.car_type.sort((a, b) => a.Price - b.Price);
    car_lists.car_type.forEach((element) => {
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
}
home_page();

// book page
function book_now(e) {
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
        console.log(car_lists.indiaDistrict[state_select])
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
