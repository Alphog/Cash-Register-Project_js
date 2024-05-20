let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

let changeDue =document.getElementById('change-due');

let cash =document.getElementById('cash');


const purchaseBtn =document.getElementById('purchase-btn');
let ciDrawer =document.querySelector('.cid');


purchaseBtn.addEventListener('click',checker);
function checker(){
  let given = Number(cash.value);
  if(given < price){
    alert('Customer does not have enough money to purchase the item');
    
    return;
  }
  if(given === price){
    changeDue.classList.add('border');
changeDue.innerHTML ='No change due - customer paid with exact cash';
  
    return;
  }
}





for(let i =0; i < cid.length; i++){
  let node = cid[i];
  let p =document.createElement('p');
  let text =document.createTextNode(`${node[0]} : $${node[1]}`);

  p.appendChild(text);
    p.classList.add('para');
  ciDrawer.appendChild(p);
}
