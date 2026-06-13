let list = document.querySelectorAll('.item');
const go= document.getElementById('go');
const back= document.getElementById('back');

let count = list.length;
let active = 0;
 
go.onclick = () =>{
    let activeout = document.querySelector('.active');
    activeout.classList.remove('active');
     active = active <= 0? count -1 : active -1
    list[active].classList.add('active');
    
}
back.onclick = () =>{
     let activeout = document.querySelector('.active')
    activeout.classList.remove('active')

    active = active >= count -1 ? 0 : active +1
    list[active].classList.add('active');

}


 