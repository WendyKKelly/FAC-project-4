 // omg you can put  functions as items inside an object

const cart = {
    hPdt : null, // products list
    hItems: null, // current cart (html)
    items: {}, // items in cart 

    // local storage
    //  https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

    save : function () {
        localStorage.setItem("cart", JSON.stringify(cart.items));
      },

      load : function () {
        cart.items = localStorage.getItem("cart");
        if (cart.items == null) { cart.items = {}; }
        else { cart.items = JSON.parse(cart.items); }
      },

    nuke : function () {
      if (confirm("Empty cart?")) {
        cart.items = {};
        localStorage.removeItem("cart");
        cart.list();
      }
    },
    // create 

    init : function () {
        // (C1) GET HTML ELEMENTS
        cart.hPdt = document.getElementById("cart-products");
        cart.hItems = document.getElementById("cart-items");
        // create elements

        cart.hPdt.innerHTML = "";
        let p, item, part;
        for (let id in products) {

            // wrapper
            p = products[id];
            item = document.createElement("div");
            item.className = "p-item";
            cart.hPdt.appendChild(item);

            // image

            part = document.createElement("img");
            part.src = "assets/" + p-img;
            part.className = "p-img";
            item.appendChild(part);

            // name
            part = document.createElement("div");
            part.innerHTML = p.name;
            part.className = "p-name";
            item.appendChild(part);

            //description

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
            part.value = "Want This Fruit";
            part.className = "cart p-add";
            part.onclick = cart.add;
            part.dataset.id = id;
            item.appendChild(part);
        }

        // load cart from previous session ... kind of confused by this
        cart.load();

        cart.list();

    },

    // list current idtems (in html)

    list : () => {

        cart.hItems.innerHTML = "";
        let item, part, pdt;
        let empty = true;
        for (let key in cart.items) {
            if(cart.items.hasOwnProperty(key)) { empty = false; break; }
        }

        if (empty) {
            item = document.createElement("div");
            item.innerHTML = "Cart is empty";
            cart.hItems.appendChild(item);
        }

        // else list items

        else {
            let p, total = 0, subtotal = 0;
            for (let id in cart.items) {
                //item
                p = products[id];
                item = document.createElement("div");
                item.className = "c-item";
                cart.hItems.appendChild(item);

                part = document.createElement("div");
                part.innerHTML = p.name;
                part.className = "c-name";
                item.appendChild(part);

                part = document.createElement("input");
                part.type = "button";
                part.value = "X";
                part.dataset.id = id;
                part.className = "c-del cart";
                part.addEventListener("click", cart.remove);
                item.appendChild(part);

                part = document.createElement("input");
                part.type = "number";
                part.min = "1";
                part.value = cart.items[id];
                part.dataset.id = id;
                part.className = "c-qty";
                part.addEventListnener("change", cart.change);
                item.appendChild(part);

                subtotal = cart.items[id] * p.price;
                total += subtotal;
            }
            //empty buttons

            item = document.createElement("input");
            item.type = "button";
            item.value = "Empty";
            item.addEventListener("click", cart.nuke);
            item.className = "c-empty cart";
            cart.hItems.appendChild(item);

            item= document.createElement("input");
            item.type = "button";
            item.value = "Checkout -" + "$" + total;
            item.addEventListener("click", cart.checkout);
            item.className = "c-checkout cart";
            cart.hItems.appendChild(item);
        }
    },

    add : () => {
    if (cart.items[this.dataset.id] == undefined)
{
    cart.items[this.dataset.id] = 1;
    }  else { 
        cart.items[this.dataset.id]++;
    }
  cart.save();
  cart.list();
},

change : () => {
    if (this.value == 0) {
        delete cart.items[this.dataset.id];
     } else {

   cart.items[this.dataset.id]= this.value;
    }
    cart.save();
    cart.list();
},

remove : () => {
    delete cart.items[this.dataset.id]; 
    cart.save();
    cart.list();

},

checkout : () => {
    alert("woo hoo - you got this far!");
}

    };

    window.addEventListener("DOMContentLoaded", cart.init);

