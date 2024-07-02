let body = document.querySelector("body");
let p = document.createElement("p");
p.setAttribute("style","color: red");
p.textContent ="hey i'm red";
body.appendChild(p);

let h3 = document.createElement("h3");
// h3.setAttribute("style","color: red");
h3.style.color = "red";
h3.textContent = "i'm blue h3";
body.appendChild(h3);

let div = document.createElement("div");
// div.setAttribute("style","border-style: solid; background: pink")
div.style.borderStyle = "solid";
div.style.background = "pink";
div.setAttribute("id","divid");
div.setAttribute("class","divclass");
body.appendChild(div);

let h1 = document.createElement("h1");
h1.textContent = "im in a div";
div.appendChild(h1);

let pdiv = document.createElement("p");
pdiv.textContent = "me too";
div.appendChild(pdiv);
