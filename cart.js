 // omg you can put  functions as items inside an object

const cart = {
    product : null, // products list
    current: null, // current cart (html)
    items: {}, // items in cart 

    // local storage
    //  https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// save current cart into local storage
    save : function () {
      localStorage.setItem("cart", JSON.stringify(cart.items));
    },
// load cart from local Storage
load : function () {
    cart.items = localStorage.getItem("cart");
    if (cart.items == null) { cart.items = {}; }
    else { cart.items = JSON.parse(cart.items); }
  },

    nuke : function () {
      if (confirm("Really?")) {
        cart.items = {};
        localStorage.removeItem("cart");
        cart.list();
      }
    },
    // create 

    init : function () {
     
        cart.product = document.getElementById("cart-products");
        cart.current = document.getElementById("cart-items");
        // create elements


 cart.product.innerHTML = "";
 let p, item, part;
 for (let id in products) {
   // create wrapper
   p = products[id];
   item = document.createElement("div");
   item.className = "p-item";
   cart.product.appendChild(item);

  // image
   part = document.createElement("img");
   part.src = "assets/" +p.img;
   part.className = "p-img";
   item.appendChild(part);

   // name
   part = document.createElement("div");
   part.innerHTML = p.name;
   part.className = "p-name";
   item.appendChild(part);

   // desc
   part = document.createElement("div");
   part.innerHTML = p.desc;
   part.className = "p-desc";
   item.appendChild(part);

   // price
   part = document.createElement("div");
   part.innerHTML = "$" + p.price;
   part.className = "p-price";
   item.appendChild(part);

   // add to cart
   part = document.createElement("input");
   part.type = "button";
   part.value = "Want Fruit?";
   part.className = "cart p-add";
   part.onclick = cart.add;
   part.dataset.id = id;
   item.appendChild(part);
 }
 // load from previous session
 cart.load();
  
 // list current cart items
 cart.list();
},

// list current cart items  (html)
list : function () {
 // reset
 cart.current.innerHTML = "";
 let item, part, pdt;
 let empty = true;
 for (let key in cart.items) {
   if(cart.items.hasOwnProperty(key)) { empty = false; break; }
 }

 // empty cart to begin
 if (empty) {
   item = document.createElement("div");
   item.innerHTML = "Buy Something! Add Fruit to Your Cart.";
   cart.current.appendChild(item);
 }

 // create list items in cart
 else {
   let p, total = 0, subtotal = 0;
   for (let id in cart.items) {
     // item - product in list
     p = products[id];
     item = document.createElement("div");
     item.className = "c-item";
     cart.current.appendChild(item);

     // cart name
     part = document.createElement("div");
     part.innerHTML = p.name;
     part.className = "c-name";
     item.appendChild(part);

     // remove from cart
     part = document.createElement("input");
     part.type = "button";
     part.value = "X";
     part.dataset.id = id;
     part.className = "c-del cart";
     part.addEventListener("click", cart.remove);
     item.appendChild(part);

     // quantity - number counter 
     part = document.createElement("input");
     part.type = "number";
     part.min = "10";
     part.value = cart.items[id];
     part.dataset.id = id;
     part.className = "c-qty";
     part.addEventListener("change", cart.change);
     item.appendChild(part);

     // subtotal ( a little confused)
     subtotal = cart.items[id] * p.price;
     total += subtotal;
   }

   // empty cart button (see nuke function above)
   item = document.createElement("input");
   item.type = "button";
   item.value = "Empty";
   item.addEventListener("click", cart.nuke);
   item.className = "c-empty cart";
   cart.current.appendChild(item);

   // checkout
   item = document.createElement("input");
   item.type = "button";
   item.value = "Checkout - " + "$" + total;
   item.addEventListener("click", cart.checkout);
   item.className = "c-checkout cart";
   cart.current.appendChild(item);
 }
},

// add function (see Want Fruit above)
add : function () {
 if (cart.items[this.dataset.id] == undefined) {
   cart.items[this.dataset.id] = 1;
 } else {
   cart.items[this.dataset.id]++;
 }
 cart.save();
 cart.list();
},

// see quantity above
change : function () {
 if (this.value == 0) {
   delete cart.items[this.dataset.id];
 } else {
   cart.items[this.dataset.id] = this.value;
 }
 cart.save();
 cart.list();
},

// remove see remove from cart above
remove : function () {
 delete cart.items[this.dataset.id];
 cart.save();
 cart.list();
},

// checkout unfinished
checkout : function () {
 // SEND DATA TO SERVER
 // CHECKS
 // SEND AN EMAIL
 // RECORD TO DATABASE
 // PAYMENT
 // WHATEVER IS REQUIRED
 alert("you got this far");

 /*
 var data = new FormData();
 data.append('cart', JSON.stringify(cart.items));
 data.append('products', JSON.stringify(products));
 var xhr = new XMLHttpRequest();
 xhr.open("POST", "SERVER-SCRIPT");
 xhr.onload = function(){ ... };
 xhr.send(data);
 */
}
};
window.addEventListener("DOMContentLoaded", cart.init);
