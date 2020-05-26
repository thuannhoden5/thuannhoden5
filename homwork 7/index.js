
//bai 12
const items = ['backpack','miband watch','ring'];
console.log(items);

const itemListUl = document.getElementById('item_list_ul');
console.log(itemListUl); // gan itemListUl cho the co id item list ul
for (let i=0;i<items.length;i++){
    itemListUl.insertAdjacentHTML('beforeend',`<li>${items[i]}</li>`);
    
}




