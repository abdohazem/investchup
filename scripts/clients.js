const data = [
  {
    text: "These functions are defined in terms of the exponential function xe. These functions have great important in engineering science. They defined as follows:These functions are defined in terms of the exponential function xe. These functions have great important in engineering science. They defined as follows:These functions are defined in terms of the exponential function xe. These functions have great important in engineering science. They defined as follows:",
  },
  {
    text: "If we have a complex function y f x = ( )contain multiplication, division operation or function exponential to another function, we prefer to simplify the function by taking the logarithm of the sides, then differentiate as described in the following example If we have a complex function y f x = ( )contain multiplication, division operation or function exponential to another function, we prefer to simplify the function by taking the logarithm of the sides, then differentiate as described in the following examples.",
  },
  {
    text: "The most famous logarithmic functions are when a e = 2, , 10. If a=10we write logxand if a e =we write lnx, it is called Natural logarithm.Important rules for logarithmic function are shown in chapter 1. Since  log ,yay x x a = =are inverse functions then the curve of one can be get from the other The most famous logarithmic functions are when a e = 2, , 10. If a=10we write logxand if a e =we write lnx, it is called Natural logarithm.Important rules for logarithmic function are shown in chapter 1. Since  log ,yay x x a = =are inverse functions then the curve of one can be get from the other",
  },
];

let spanContainer = document.querySelector(".content .span-container");
// create spans
function createSpan() {
  data.forEach((el, ind) => {
    let span = document.createElement("span");
    span.id = ind;
    spanContainer.appendChild(span);
  });
}
createSpan();

let spans = document.querySelectorAll(".content .span-container span");
let p = document.querySelector(".content .text p");
let currentId = "0";

// add text to spans
function setText(id) {
  const limit = Array.from(data[id].text.split("", 430)).join("");
  p.innerHTML = limit;
}
setText(currentId);

// add styles to selected spans
function checkSpan() {
  spans.forEach((el) => {
    if (el.id === currentId) {
      el.classList.add("selected");
    } else {
      el.classList.remove("selected");
    }
    console.log(el.id);
  });
}
checkSpan();

// change selected span by clicking
spans.forEach((el) => {
  el.addEventListener("click", function () {
    currentId = el.id;
    checkSpan();
    setText(el.id);
    console.log(el.id);
  });
});
