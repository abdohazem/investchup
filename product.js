let product = {};

async function getData() {
  try {
    loading(true);
    const productId = localStorage.getItem("productId");
    const cate = localStorage.getItem("cate");
    const get = await fetch("products.json");
    const data = await get.json();
    product = data[cate][productId - 1];
    createProduct(
      product.title,
      product.description,
      product.price,
      product.currancy,
      product.image
    );
    loading(false);
  } catch {
    throw new Error("data fetch faild");
  } finally {
  }
}
getData();

function createProduct(title, description, price, currancy, image) {
  const productDetails = document.querySelector(".product-details");
  const content = document.querySelector(".content");

  const details = document.createElement("div");
  details.classList.add("details");

  const h1 = document.createElement("h1");
  h1.innerHTML = title;
  const p1 = document.createElement("p");
  p1.innerHTML = description;
  const p2 = document.createElement("p");
  p2.innerHTML = `${currancy} ${price}`;

  const button = document.createElement("button");
  button.innerHTML = "buy";

  const img = document.createElement("div");
  img.classList.add("image");
  img.style.setProperty("background-image", `url(${image})`);

  content.appendChild(img);
  details.appendChild(h1);
  details.appendChild(p1);
  details.appendChild(p2);
  productDetails.appendChild(details);
  productDetails.appendChild(button);
}

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
