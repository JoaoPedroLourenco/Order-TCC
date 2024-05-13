// let contador = 0;

// function criarMesa() {
//   contador++;

//   let mesaCriada = document.createElement("div");
//   mesaCriada.className("mesaCriada");

//   boxElement.textContent = "Mesa " + contador;

//   var container = document.getElementById("mesa");

//   container.appendChild(boxElement);
// }

let contador = 0;

function gerarQuadrado() {
  contador++; // Incrementa o contador ao adicionar uma nova div

  let mesa = document.createElement("div");
  mesa.className = "mesasCriadas";

  let imagem = document.createElement("img");
  imagem.src = "imgs/mesaPNG.png"; // Substitua pelo caminho da sua imagem
  imagem.alt = "Mesa"; // Texto alternativo da imagem

  // Adicionar a imagem à div mesa
  mesa.appendChild(imagem);

  mesa.innerHTML = `<p> Mesa: ${contador} </p>`;

  var container = document.getElementById("mesas");

  container.appendChild(mesa);
}
