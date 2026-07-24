let btns = document.querySelectorAll("button");
console.log(btns);

let btnDivs = document.querySelectorAll(".button");

for (let i = 0; i < btns.length; i++) {
  let p = btnDivs[i];

  btns[i].addEventListener("click", () => {
    p.innerHTML = `err: sorry page not found`;
  });
}
