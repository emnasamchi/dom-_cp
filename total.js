let item_list = [];

function inc(){
  this.total=this.*this.price
}

function createProduct(price) {
  const product = {
    count: 0,
    price: price,
    total: 0,
  };
  item_list.push(product);
  return product;
}

function dec(){
  if(this.form1===0)alert ("sorry we can't accept negative quantities");
else{
  this.form1 -=1;
  this.total=this.count* this.price ;
  
}}
const product_1 = createProduct(18.0);

const product_2 = createProduct(20.0);

function render() {
  document.getElementById("q-1").innerHTML = product_1.count;
  document.getElementById("p-1").innerHTML = product_1.price;
  document.getElementById("t-1").innerHTML = product_1.total;
  document.getElementById("q-2").innerHTML = product_2.count;
  document.getElementById("p-2").innerHTML = product_2.price;
  document.getElementById("t-2").innerHTML = product_2.total;
}

function decrement(n) {
  if (n === 1) {
    product_1.decrement();
    let q_1 = document.getElementById("q-1");
    q_1.textContent = product_1.count;
    let t_1 = document.getElementById("t-1");
    t_1.textContent = product_1.total;
  } else if (n === 2) {
    product_2.decrement();
    let q_2 = document.getElementById("q-2");
    q_2.textContent = product_2.count;
    let t_2 = document.getElementById("t-2");
    t_2.textContent = product_2.total;
  }
}