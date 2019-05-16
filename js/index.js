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
let hideH2 = document.querySelector(".intro h2");
hideH2.addEventListener("dblclick", event => {
  hideH2.style.display = "none";
  setTimeout(function() {
    hideH2.style.display = "block";
  }, 8000);
});
let newBtn = document.createElement("button");
let headerArea = document.querySelector("header.intro");
newBtn.innerText = "Click here!";
headerArea.insertBefore(newBtn, headerArea.childNodes[3]);

let rotate = false;
let runner;
let degrees = 0;

function start() {
  runner = setInterval(function() {
    degrees += 10;
    newBtn.style.webkitTransform = `rotate(${degrees}deg)`;
  }, 100);
}

function stop() {
  clearInterval(runner);
}

newBtn.addEventListener("click", function() {
  if (!rotate) {
    rotate = true;
    start();
  } else {
    rotate = false;
    stop();
  }
});
window.addEventListener("load", event => {
  alert("Welcome to the Fun Bus! Have Fun!");
});

let pEle = document.querySelectorAll("p");

window.addEventListener("resize", changeTextColor);
function changeTextColor() {
  pEle.forEach(el => {
    el.style.color = "royalblue";
  });
}
