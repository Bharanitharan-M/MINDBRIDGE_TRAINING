const locations = new URLSearchParams(window.location.search); 
let fetch_id = locations.get('id');


let product;
async function get_data(){
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${fetch_id}`)
        if(response.status != 200){
            throw new Error("Data Not Found");
        }
        
        return response.json();
    }
    catch(error){
       alert(error.message)
    }

}
async function calling(){
    let element = await get_data();
    let append_elemnt = document.getElementsByClassName('product_details')[0];
    if(element){
        console.log(element);
        let star = document.createElement('p');
        for(let i = 1;i<=5;i++){
            if(i <= Number(Math.floor(element.rating.rate))){
                star.innerHTML+=('<i class="fa-solid fa-star" style="color: #FFD43B;"></i>'); 
            }
            else if(i == Number(Math.floor(element.rating.rate))+1){
                console.log(i)
                star.innerHTML+=(`<i class="fa-solid fa-star-half" style="color: #FFD43B;"></i>`)
            }
            else{
                star.innerHTML+=('<i class="fa-regular fa-star" style="color: #ccc;"></i>');
            }
        }
        star.innerHTML+=`<small>(${element.rating.count} buys)</small>`
        append_elemnt.innerHTML+= ` <div class="row">
                <div class="col-sm-4">
                    <img src="${element.image}" alt="">
                </div>
                <div class="col-sm-6 details">
                    <div class="title">
                        <h4 class="font-weight-bolder">${element.title}</h4>
                    </div>
                    <div class="description">
                        <p>${element.description}</p>
                    </div>
                    <div class="price_rating">
                        <p>$${element.price}</p>
                    </div>
                    <div class="button">
                        <button>Add Cart</button>
                    </div>
                </div>
            </div>`
            document.getElementsByClassName('price_rating')[0].lastElementChild.after(star)

    }
}
calling();


