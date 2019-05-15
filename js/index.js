// Your code goes here
let navLinks = document.querySelectorAll("a.nav-link");
navLinks.forEach(el => {
  el.style.padding = "2em 1em";
  el.style.borderRadius = "20%";
  el.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
  });
  el.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "";
  });
  el.addEventListener("click", event => {
    event.preventDefault();
  });
});
const hideh2 = document.querySelector(".intro h2");
hideh2.addEventListener("dblclick", event => {
  hideh2.style.display = "none";
  setTimeout(function() {
    hideh2.style.display = "block";
  }, 8000);
});
let newBtn = document.createElement("button");
let specialBtn = document.querySelector("header.intro");
newBtn.innerText = "Click here!";
specialBtn.insertBefore(newBtn, specialBtn.childNodes[3]);
