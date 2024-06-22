let contador = 0;

function criarMesa() {
  contador++;

  let mesa = document.createElement("div");
  mesa.className = "mesasCriadas";

  mesa.innerHTML = `<p>Mesa ${contador}</p>`;

  let imagem = document.createElement("img");
  imagem.src = "./imgs/MesaPNG.png";
  imagem.alt = "Mesa";
  imagem.className = "imagemMesa";

  let botoesDiv = document.createElement("div");
  botoesDiv.className = "botoesMesa";

  let botao1 = document.createElement("button");
  botao1.textContent = "Marcar Reserva";
  botao1.className = "btnsCard";

  let botao2 = document.createElement("button");
  botao2.textContent = "Confimar pagamento";
  botao2.className = "btnsCard";

  botoesDiv.appendChild(botao1);
  botoesDiv.appendChild(botao2);

  mesa.appendChild(imagem);
  mesa.appendChild(botoesDiv);

  let container = document.getElementById("mesas");

  const options = document.getElementById("selectLugaresMesa");

  let sec2Lugares = document.querySelector(".dois-lugares");
  let sec4Lugares = document.querySelector(".quatro-lugares");
  let sec6Lugares = document.querySelector(".seis-lugares");
  let sec10Lugares = document.querySelector(".dez-lugares");

  let sections = [sec2Lugares, sec4Lugares, sec6Lugares, sec10Lugares];

  container.appendChild(mesa);

  if (options.value === "section1") {
    sections[0].appendChild(mesa);
  } else if (options.value === "section2") {
    sections[1].appendChild(mesa);
  } else if (options.value === "section3") {
    sections[2].appendChild(mesa);
  } else if (options.value === "section4") {
    sections[3].appendChild(mesa);
  }
}
