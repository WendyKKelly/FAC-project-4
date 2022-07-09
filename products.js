
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
  
  const form = document.getElementById("fruit");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const myFormData = new FormData(e.target);

    const formDataObj = Object.fromEntries(myFormData.entries());

    
    console.log(formDataObj);

    // output data
    const output = document.querySelector(".cart-items");
    output.innerText = JSON.stringify(formDataObj, null, 2);
});

