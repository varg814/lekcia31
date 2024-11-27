const limit = 10;
let currentPage = 1;
let increase = document.getElementById("btn");
let decrease = document.getElementById("btn2");
let productsContainer = document.getElementById("container");
async function eee() {
  let skip = (currentPage - 1) * limit;
  let data = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  let response = await data.json();

  productsContainer.innerHTML = "";
  
  response.products.forEach((product) => {
      let p = document.createElement("p");
      p.textContent = product.title;
      productsContainer.appendChild(p);
    });

    let total = response.total
    
    let rounded = Math.ceil(total / 100) * 100;
    console.log(rounded);
    
  if (currentPage === 1) {
    decrease.setAttribute("disabled", true)  
} else{
    decrease.removeAttribute("disabled")
}

if (currentPage === rounded / limit) {
    increase.setAttribute("disabled", true)
} else{
    increase.removeAttribute("disabled")
}
}

increase.addEventListener("click", () => {
  currentPage++;
  eee();
});

decrease.addEventListener("click", () => {
  currentPage--;
  eee();
});


eee();
