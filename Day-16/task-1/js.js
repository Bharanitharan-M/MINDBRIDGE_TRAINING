// function fun1(){
//         const name =document.getElementById('input1').value;
//         let num =0;
//         for(let i=0;i<name.length;i++){
//             num+= name[i].charCodeAt(0);
//         }
//         document.getElementById('output').innerText=num;    
//         console.log(num);
// }

const btn1=document.getElementById('clickbtn');
btn1.addEventListener('click' , function(){
    const name =document.getElementById('input1').value;
    let num=0
    for( let x of name){
        num+=x.charCodeAt(0);
    }
    document.getElementById('output').innerText=num;    
    console.log(num)
})
