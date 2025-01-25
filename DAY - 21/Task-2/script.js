
function home_page(){
    let slide_show = document.getElementsByClassName('slide-show');
    let image_no = 1;
  
    setInterval(()=>{
        
        if(image_no > 2)
            image_no = 0;
        console.log(image_no)
        if(image_no != 0)
            slide_show[image_no-1].classList.toggle('show');
        if(image_no == 0)
            slide_show[slide_show.length - 1].classList.toggle('show')
        slide_show[image_no].classList.toggle('show');
       
        image_no++;
    },4000)
}
home_page();