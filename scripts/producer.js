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
let p = document.querySelector(".section-2 .text p");
let button = document.querySelectorAll(".section-2 .control button");
let currentP = 0;

function addP() {
  let limit = Array.from(data[currentP].text.split("", 500)).join("");
  p.innerHTML = limit;
}
addP();

button.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.id === "left") {
      if (currentP === 0) {
        currentP = data.length - 1;
      } else {
        currentP--;
      }
    }
    if (el.id === "right") {
      if (currentP === data.length - 1) {
        currentP = 0;
      } else {
        currentP++;
      }
    }
    console.log(currentP);
    addP();
  });
});
