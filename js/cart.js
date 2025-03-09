displayCart();
onLoadCartNumbers();

function f1(k, name) {
  let products = [
    {
      name: "Python for Data Science",
      tag: "pythondata",
      price: 1899,
      inCart: 0,
    },
    {
      name: "Linear Data Structures",
      tag: "lineardata",
      price: 999,
      inCart: 0,
    },
    {
      name: "Discrete Mathematics",
      tag: "math",
      price: 899,
      inCart: 0,
    },
    {
      name: "Learn Python 3",
      tag: "python3",
      price: 1299,
      inCart: 0,
    },
    {
      name: "Java for programmers",
      tag: "java",
      price: 1299,
      inCart: 0,
    },
    {
      name: "Learn Advanced Java",
      tag: "javapro",
      price: 2499,
      inCart: 0,
    },
    {
      name: "Build Android apps with Java",
      tag: "androidjava",
      price: 1599,
      inCart: 0,
    },
    {
      name: "Learn Object-Oriented Programming",
      tag: "oriented",
      price: 1299,
      inCart: 0,
    },
    {
      name: "Learn C++",
      tag: "c++",
      price: 999,
      inCart: 0,
    },
    {
      name: "Learn C++ functions",
      tag: "c++functions",
      price: 299,
      inCart: 0,
    },
    {
      name: "Learn C++ Loops",
      tag: "c++loops",
      price: 399,
      inCart: 0,
    },
    {
      name: "Learn C++: References and Pointers",
      tag: "c++pointers",
      price: 799,
      inCart: 0,
    },
    {
      name: "Create a Back-End Apps with JavaScript",
      tag: "javascript",
      price: 1999,
      inCart: 0,
    },
    {
      name: "Create a Front-End Apps with react",
      tag: "react",
      price: 499,
      inCart: 0,
    },
    {
      name: "Learn JavaScript",
      tag: "script",
      price: 699,
      inCart: 0,
    },
    {
      name: "Learn JavaScript Functions and Scope",
      tag: "scope",
      price: 459,
      inCart: 0,
    },
  ];
  cartNumbers(products[k]);
  totalCost(products[k]);
  document.getElementById(name).href = "../../shopping-cart.html";
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(products) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
  } else {
    localStorage.setItem("cartNumbers", 1);
  }

  alert("Successfully added 1 item into cart!");

  setItems(products);
}

function setItems(products) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[products.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [products.tag]: products,
      };
    }
    cartItems[products.tag].inCart += 1;
  } else {
    products.inCart = 1;
    cartItems = {
      [products.tag]: products,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(products) {
  let cartCost = localStorage.getItem("totalCost");

  console.log("My cartCost is", cartCost);
  console.log(typeof cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + products.price);
  } else {
    localStorage.setItem("totalCost", products.price);
  }
}

function delCart(tag) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems && cartItems[tag]) {
    localStorage.setItem(
      "cartNumbers",
      parseInt(localStorage.getItem("cartNumbers")) - cartItems[tag].inCart
    );
    localStorage.setItem(
      "totalCost",
      parseInt(localStorage.getItem("totalCost")) -
        cartItems[tag].inCart * cartItems[tag].price
    );
    delete cartItems[tag];
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);

    displayCart();

    if (productNumbers == 0) {
      deleteItems();
    }
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
            <div class="product">
                <i onclick="delCart('${item.tag}')">
                <ion-icon name="close-circle-outline"><span>&#9746;</span>
                </ion-icon>
                </i>
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">
                <i onclick="changeNumberofUnits('${item.tag}', 'decrease')">
                <ion-icon class="decrease"  
                name="arrow-back-circle-outline"><span>&#8678;</span>
                </ion-icon>
                </i>
                <span>${item.inCart}</span>
                
                <i onclick="changeNumberofUnits('${item.tag}', 'increase')">
                <ion-icon  class="increase"
                name="arrow-forward-circle-outline"><span>&#8680;</span></ion-icon>
                </i>
            </div>
            <div class="total">
                RM${item.inCart * item.price}.00

            </div>

            `;
    });

    productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    RM${cartCost}.00
                </h4>    
        `;
    productContainer.innerHTML += `
            <div>
                <a href="#" class="paymentbtn1" onclick="checkQBeforePayment()">Payment</a>   
        `;
  }
}

function changeNumberofUnits(tag, action) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems && cartItems[tag]) {
    let product = cartItems[tag];
    if (action === "decrease") {
      if (product.inCart > 1) {
        product.inCart--;
        localStorage.setItem(
          "cartNumbers",
          parseInt(localStorage.getItem("cartNumbers")) - 1
        );
        localStorage.setItem(
          "totalCost",
          parseInt(localStorage.getItem("totalCost")) - product.price
        );
      }
    } else if (action === "increase") {
      product.inCart++;
      localStorage.setItem(
        "cartNumbers",
        parseInt(localStorage.getItem("cartNumbers")) + 1
      );
      localStorage.setItem(
        "totalCost",
        parseInt(localStorage.getItem("totalCost")) + product.price
      );
    }
    cartItems[tag] = product;
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    displayCart();
  }
}

function checkQBeforePayment() {
  let cartQ = localStorage.getItem("cartNumbers");
  cartQ = JSON.parse(cartQ);
  console.log(cartQ);

  if (cartQ == null) {
    alert("Nothing to make payment!");
    window.location.replace("./index.html");
  } else {
    alert("Proceed to payment menu!");
    window.location.replace("./payment.html");
  }
}

function deleteItems() {
  localStorage.clear();
}
