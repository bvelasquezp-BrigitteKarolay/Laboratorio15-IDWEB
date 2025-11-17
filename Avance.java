// 3. 
const h2Primero = document.querySelector("h2");
console.log(h2Primero.textContent);

// 4. 
const parrafos = document.querySelectorAll("p");
for (const p of parrafos) {
  p.textContent = "Texto actualizado dinamicamente";
}

// 5. 
const imgPrimera = document.querySelector("img");
imgPrimera.setAttribute("src", "img/nueva.jpg");
imgPrimera.setAttribute("alt", "imagen nueva");

// 6. 
const items = document.querySelectorAll("li");
for (const li of items) {
  li.classList.add("resaltado");
  li.classList.remove("oculto");
}

// 7. 
const ulLista = document.getElementById("miLista"); 
for (const li of ulLista.children) {
  console.log(li.textContent);
}

// 8. 
const divs = document.querySelectorAll("div");
const colores = ["lightblue", "lightgreen", "lightpink", "lightgray", "lightyellow"];
let i = 0;
for (const d of divs) {
  d.style.backgroundColor = colores[i % colores.length];
  i++;
}

// 9. 
const nuevoP = document.createElement("p");
nuevoP.textContent = "Elemento insertado con JS";
document.body.appendChild(nuevoP);

// 10. 
const h3 = document.createElement("h3");
h3.textContent = "Titulo";
const primerP = document.querySelector("p");
primerP.parentNode.insertBefore(h3, primerP);
