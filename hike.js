let carts = document.querySelectorAll(".add-cart");
carts[0];
carts[1];
let products = [
  {
    name: "grills",
    tag: "chicken",
    price: 15,
    inCart: 0,
  },
  {
    name: "snacks",
    tag: "snack",
    price: 4,
    inCart: 0,
  },
  {
    name: "juice",
    tag: "juicedrink",
    price: 5,
    inCart: 0,
  },
  {
    name: "vegetarian",
    tag: "vegs",
    price: 8,
    inCart: 0,
  },
  {
    name: "salads",
    tag: "salad1",
    price: 3.5,
    inCart: 0,
  },
];
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  console.log("the product clicked is", product);
  let productNumbers = localStorage.getItem("cartNumbers");
  /*console.log(productNumbers);
    console.log(typeof productNumbers);*/
  productNumbers = parseInt(
    productNumbers
  ); /*parse helps in converting type e.g string to number (INT)*/

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  /* check if cart has any products already, not to reset*/
  cartItems = JSON.parse(cartItems);
  console.log("inside of setItems function");
  console.log("my cartItems are", cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems /*... call to pick last items in cart */,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  /* we need to store our products as JSON file not JS objects, */
}
function totalCost(product) {
  console.log("product price is", product.price);
  let cartCost = localStorage.getItem("totalCost");
  console.log("my cartCost is", cartCost);
 
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

/*display console data on form */
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
console.log(cartItems);
let cartCost = localStorage.getItem("totalCost");
let productContainer = document.querySelector(".products");


if(cartIems && productContainer){
  productContainer.innerHTML = '';
  Object.values(cartItems)
  .map(item=>{productContainer.innerHTML += `<div class="product"> <ion-icon name="close-circle"></ion-icon>
  <img src="./images/${item.tag}.jpg"> 
  <span>${item.name}</span></div>`

  `<div class = "price">$${item.price}.00</div>`
 `<div class = "quantity"><ion-ionic class="decrease" name="arrow-dropleft-circle"></ion-icon>
  <span>${item.inCart}</span>
  <ion-ionic class="increase" name="arrow-dropright-circle"> </ion-icon></div>`
 `<div class="total">$${item.inCart * item.price},00 </div>` 
  });
  productContainer.innerHTML += `<div class="basketTotalContanier">
  <h4 class ="basketTotalTitle"> Basket Total </h4>
  <h4 class ="basketTotal">$${cartCost}.00 </h4>`;

}
}
onLoadCartNumbers();
displayCart();
