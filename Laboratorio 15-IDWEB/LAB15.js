
document.addEventListener("DOMContentLoaded", function () {

  // EJERCICIO 3
  
  const h2Principal = document.querySelector("h2"); 
  if (h2Principal) {
    console.log("EJERCICIO 3 - TEXTO PRIMER H2:", h2Principal.textContent);
  }

  // EJERCICIO 4
  
  const parrafosEj4 = document.querySelectorAll("#ej4 p");
  parrafosEj4.forEach(function (parrafo) {
    parrafo.textContent = "Texto actualizado dinamicamente";
  });

// EJERCICIO 5
const imagenPrimera = document.querySelector("#imagen-primera");

if (imagenPrimera) {
  imagenPrimera.setAttribute(
    "src", 
    "https://raw.githubusercontent.com/bvelasquezp-BrigitteKarolay/Laboratorio15-IDWEB/main/img/img%20(2).jpg"
  );

  imagenPrimera.setAttribute("alt", "Imagen cambiada dinámicamente");
}

  // EJERCICIO 6
  const liEj6 = document.querySelectorAll("#lista-ej6 li");
  liEj6.forEach(function (li) {
    li.classList.add("resaltado");
    if (li.classList.contains("oculto")) {
      li.classList.remove("oculto");
    }
  });

  // EJERCICIO 7
  const ulEj7 = document.getElementById("lista-ej7");
  if (ulEj7) {
    for (const li of ulEj7.children) {
      console.log("EJERCICIO 7 - LI:", li.textContent.trim());
    }
  }

  // EJERCICIO 8
  const divsBloque = document.querySelectorAll(".bloque");
  const colores = ["#ffe6ef", "#ffd6e6", "#ffc6dd", "#ffb3d0"]; 
  divsBloque.forEach(function (div, idx) {
    div.style.backgroundColor = colores[idx % colores.length];
  });

  // EJERCICIO 9
  const nuevoParrafo9 = document.createElement("p");
  nuevoParrafo9.textContent = "Elemento insertado con JS";
  document.body.appendChild(nuevoParrafo9);

  // EJERCICIO 10
  const primerP10 = document.getElementById("primer-p-ej10");
  if (primerP10 && primerP10.parentNode) {
    const nuevoH3 = document.createElement("h3");
    nuevoH3.textContent = "H3 INSERTADO ANTES DEL PRIMER P";
    primerP10.parentNode.insertBefore(nuevoH3, primerP10);
  }

  // EJERCICIO 11
  const seccion11 = document.getElementById("ej11");
  if (seccion11) {
    const ul11 = document.createElement("ul");
    for (let i = 1; i <= 5; i++) {
      const li = document.createElement("li");
      li.textContent = "Elemento " + i;
      ul11.appendChild(li);
    }
    seccion11.appendChild(ul11);
  }

  // EJERCICIO 12
  const parrafoReemplazar = document.getElementById("p-a-reemplazar");
  if (parrafoReemplazar) {
    const divReemplazo = document.createElement("div");
    divReemplazo.textContent = "Párrafo reemplazado";
    parrafoReemplazar.parentNode.replaceChild(divReemplazo, parrafoReemplazar);
  }

  // EJERCICIO 13
  const ultimoP13 = document.getElementById("ultimo-eliminar");
  if (ultimoP13 && ultimoP13.parentNode) {
    ultimoP13.parentNode.removeChild(ultimoP13);
  }

  // EJERCICIO 14
  const contenedor14 = document.getElementById("contenido");
  if (contenedor14) {
    contenedor14.innerHTML = "";
  }

  // EJERCICIO 15
  const articleOriginal = document.getElementById("article-original");
  const mainEj15 = document.getElementById("main-ej15");
  if (articleOriginal && mainEj15) {
    const clonArticle = articleOriginal.cloneNode(true);
    mainEj15.appendChild(clonArticle);
  }


  // EJERCICIO 16
  const ul16 = document.getElementById("lista-ej16");
  if (ul16 && ul16.lastElementChild) {
    const ultimoLi = ul16.lastElementChild;
    ul16.insertBefore(ultimoLi, ul16.firstElementChild);
  }

  // EJERCICIO 17
  const contReordenar = document.getElementById("contenedor-reordenar");
  if (contReordenar) {
    const arrayParrafos = Array.from(contReordenar.querySelectorAll("p"));
    arrayParrafos.sort(function(a, b) {
      return a.textContent.trim().localeCompare(b.textContent.trim(), 'es', { sensitivity: 'base' });
    });
    arrayParrafos.forEach(function(p) {
      contReordenar.appendChild(p); 
    });
  }

  // EJERCICIO 18
  const todasSections = document.querySelectorAll("body > section, body > section, section");
  const listadoSections = Array.from(document.querySelectorAll("section"));
  listadoSections.forEach(function (sec, idx) {
    sec.setAttribute("data-index", String(idx + 1)); 
  });

 
  // EJERCICIO 19
  const totalDivs = document.querySelectorAll("div").length;
  const pResultadoDivs = document.createElement("p");
  pResultadoDivs.className = "resultado";
  pResultadoDivs.textContent = "TOTAL DE DIVS EN EL DOCUMENTO: " + totalDivs;
  const seccion19 = document.getElementById("ej19");
  if (seccion19) seccion19.appendChild(pResultadoDivs);

  // EJERCICIO 20
  const seccion20 = document.getElementById("ej20");
  if (seccion20) {
    const ul20 = document.createElement("ul");
    for (let i = 1; i <= 4; i++) {
      const li = document.createElement("li");
      li.textContent = "Elemento " + i + " - ";
      const span = document.createElement("span");
      span.textContent = "Nivel interno";
      li.appendChild(span);
      ul20.appendChild(li);
    }
    seccion20.appendChild(ul20);
  }

  // EJERCICIO 21
  const cont21 = document.getElementById("contenedor21");
  if (cont21) {
    for (let i = 1; i <= 3; i++) {
      const p = document.createElement("p");
      p.textContent = "Parrafo " + i;
      cont21.appendChild(p);
    }
    if (cont21.children.length >= 2) cont21.children[1].remove();
  }

  // EJERCICIO 22
  const sec22 = document.getElementById("ej22") || document.getElementById("ej22");
  const seccion22 = document.getElementById("ej22");
  if (seccion22) {
    const h2Nuevo = document.createElement("h2");
    h2Nuevo.textContent = "Titulo nuevo";

    seccion22.insertBefore(h2Nuevo, seccion22.firstChild);

    const pDesc = document.createElement("p");
    pDesc.textContent = "Descripción generada";
    seccion22.appendChild(pDesc);

    const ul22 = document.createElement("ul");
    for (let i = 1; i <= 3; i++) {
      const li = document.createElement("li");
      li.textContent = "Item " + i;
      ul22.appendChild(li);
    }
    seccion22.appendChild(ul22);

 
    const h2Original = document.getElementById("h2-original-seccion");
    if (h2Original) h2Original.remove();
    else {
     
      const h2EnSeccion = seccion22.querySelectorAll("h2");
      h2EnSeccion.forEach(function(h){
        if (h !== h2Nuevo) h.remove();
      });
    }
  }

});
