let products = [];
let cate = "s.b";
let currentId = "s.b";

const categories = document.querySelectorAll(".content ul li");

async function getData() {
  try {
    loading(true);
    const get = await fetch(`../products.json`);
    const data = await get.json();
    products = data[cate];
    console.log(products);
    products.forEach((el) => {
      createProduct(el.title, el.currancy, el.price, el.image, el.id);
    });
    loading(false);
  } catch {
    throw new Error("data fetch faild");
  } finally {
  }
}
getData();

function checkSelectedLi() {
  categories.forEach((el) => {
    if (el.id === currentId) {
      el.classList.add("selected");
    } else {
      el.classList.remove("selected");
    }
  });
}
checkSelectedLi();

categories.forEach((el) => {
  el.addEventListener("click", function () {
    removeProducts();
    cate = el.id;
    getData();
    currentId = el.id;
    checkSelectedLi();
  });
});

function loading(isLoading) {
  const loading = document.querySelector(".loading");
  const content = document.querySelector(".content");
  if (isLoading === true) {
    content.classList.add("hide");
  } else {
    loading.classList.add("hide");
    content.classList.toggle("hide");
  }
}

function removeProducts() {
  const productsList = document.querySelectorAll(".products-list a");
  productsList.forEach((el) => el.remove());
}

function createProduct(title, currancy, price, image, id) {
  const productsList = document.querySelector(".products-list");
  const a = document.createElement("a");
  a.classList.add("reset-a");
  a.setAttribute("href", "product.html");
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.id = id;
  const img = document.createElement("div");
  img.classList.add("image");
  img.style.setProperty("background-image", `url(${image})`);
  const h3 = document.createElement("h3");
  h3.innerHTML = title;
  const p = document.createElement("p");
  p.innerHTML = `${currancy} ${price}`;

  a.appendChild(productDiv);
  productDiv.appendChild(img);
  productDiv.appendChild(h3);
  productDiv.appendChild(p);
  productsList.appendChild(a);

  productDiv.addEventListener("click", function () {
    localStorage.setItem("productId", productDiv.id);
    localStorage.setItem("cate", cate);
    console.log("her");
  });
}
