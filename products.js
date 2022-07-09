
var products = {
    123: {
      name : "Banana",
      desc : "banana.",
      img : "banana.jpg",
      price : 2
    },
    124: {
      name : "Apple",
      desc : "apple.",
      img : "apple.jpg",
      price : 1
    },
    125: {
      name : "Mango",
      desc : "mango.",
      img : "mango.jpg",
      price : 6
    },
    126: {
      name : "Orange",
      desc : "orange. ",
      img : "orange.jpg",
      price : 8
    },
    127: {
        name : "Guava",
        desc : "guava.",
        img : "guava.jpg",
        price : 5
      },
      128: {
        name : "Melon",
        desc : "melon. ",
        img : "melon.jpg",
        price : 842
      }

    
  }
  const form  = document.getElementById('fruit');
  function addProducts(form) {
    products[form.item.value] = {name: form.name.value, desc: form.desc.value, img: form.img.value, price: form.price.value};
    return false;
  };
  fruit.addEventListener("add", addProducts);