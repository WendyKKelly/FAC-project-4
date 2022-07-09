
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
  
  const formElem = document.querySelector("form");

formElem.addEventListener("submit", (e) => {
    e.preventDefault();

   new FormData(formElem);
   formElem.onformdata = (e) => {
    console.log('formdata fired');

    let data = e.formData;
    for (let value of data.values()) {
        console.log(value);
    }


    // output data
    let request = new XMLHttpRequest();
  request.open("GET", "/products");
  request.send(data);
}
});

