let arr;
async function get_data() {
    let response = await fetch('https://fakestoreapi.com/products');
    return await response.json()
}
async function wait_for_data() {
    arr = await get_data();
    let append_product = document.getElementById('product_list');
    let categories = "abc";
    let row;
    arr.forEach(element => {
        if (categories != element.category) {
            row = document.createElement('div');
            row.className = `${element.category}`
            row.classList.add('row');
            row.classList.add(element.rating.rate)
           
            console.log(row);
            append_product.appendChild(row);
            let h4 = document.createElement('h4');
            h4.textContent = element.category
            row.before(h4)
            categories = element.category;
        }
        let child_product = `<div class="col-sm-3  ${element.price}">
                <a href="product_details.html?id=${element.id}">
                <div class="card">
                    <div class="d-flex flex-column  align-items-center ">
                        <div class="product_image">
                            <img src="${element.image}" class="card-img-top"
                                alt="...">
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <div class="product_rates d-flex justify-content-between">
                            <h6>Rating: ${element.rating.rate}</h6>
                            <h6>Total Buys: ${element.rating.count}</h6>
                        </div>
                    </div>
                    <div class= 'price'>
                    <small>$${element.price}</small>
                    </div>
                    
                </div>
            </a>
            </div>`
        row.innerHTML += child_product;

    });
    return 1;

}


async function calling() {
    let returns = await wait_for_data();
    if (returns) {
        document.getElementById('content_load').style.display = "block"
        document.getElementById('loading').style.display = "none";
    }
}
calling();

function butt(e,event){
    event.preventDefaylt();
    console.log(e)
}

document.getElementById('filter_btn').addEventListener('click',()=>{
   
    let category = document.querySelectorAll("input[name = 'cat']");
    category.forEach(element=>{
        if(element.checked){
            category = element.value;
            element.nextElementSibling.lastElementChild.style.display = "block"
        }
    })

    console.log(category)
    let all_row = document.getElementsByClassName('row');
    Array.from(all_row).forEach(element=>{
        element.style.display = "none"
        element.previousElementSibling.style.display = "none";
        if(element.classList.contains(category.split(" ")[0])){
            element.style.display = "flex";
            element.previousElementSibling.style.display = "block";
        }
    })
})

function close_filter(e){
    e.parentNode.previousElementSibling.checked = false;
    e.style.display= "none"
    let all_row = document.getElementsByClassName('row');
    Array.from(all_row).forEach(element=>{
        element.style.display = "flex"
        element.previousElementSibling.style.display = "block";
    })
}