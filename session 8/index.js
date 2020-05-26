

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const PNumber = document.getElementById('PNumber');
const InputNumber =document.getElementById('inputNumber');
let value = Number(InputNumber.value);
countdown = () =>{
    console.log(InputNumber.value);
    if(PNumber.textContent>0){
        PNumber.textContent=`${PNumber.textContent}`;
        PNumber.textContent--;
        
    }else if(PNumber.textContent=='stopped'){
        
        clearInterval(countdown);      
    }
    else {
        PNumber.textContent='Time up'
    }
    
    
}
start.addEventListener('click',()=>{
    PNumber.textContent=InputNumber.value;
    setInterval(countdown, 1000);
    
    
})
 stop.addEventListener('click',()=>{
     PNumber.textContent='stopped';
     })
