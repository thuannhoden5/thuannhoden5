//arrow function
// 1.vi tri viet lenh
// khai bao lenh declare function
const say=()=> { //function header
    console.log('session 7');
    console.log('nice day');
} // => function body
const hello = (name, action)=> {
    console.log(`Hello ${name} chao ngay moi`);
    console.log(`${name} cam on vi da ${action}`)
}
setTimeout(say,5000)
console.log('Hello hihi')
//say la 1 parameter
//say la 1 ham
// say khong chay ngay tai thoi diem goi ham setTimeout
//=> callback 
// 2.thoi gian chay lenh: call function
// goi trong html thi dung onclick
const h1msg= document.getElementById('msg');
console.log(h1msg);
h1msg.textContent = 'c4e session 7'
h1msg.style.color= 'green';

const btnSayIt= document.getElementById('Sayit');
console.log(btnSayIt)
btnSayIt.addEventListener('click', ()=>{
    alert('click nef')
    const name = inputName.value;
    const msg = `Hello ${name}, have a nice day`;
    h1msg.textContent=msg;
    olFav.insertAdjacentHTML('beforeend', `<li>${name}</li>`)
});

const inputName = document.getElementById('name');
console.log(inputName.value)

const olFav = document.getElementById('Fav');
console.log(olFav);