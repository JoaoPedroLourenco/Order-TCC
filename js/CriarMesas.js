let contador = 0;

function criarMesa() {
  contador++;

  let mesa = document.createElement("div");
  mesa.className = "mesasCriadas";

  mesa.innerHTML = `<p>Mesa ${contador}</p>`;

  let imagem = document.createElement("img");
  imagem.src = "./imgs/MesaPNG.png"; // Substitua pelo caminho da sua imagem
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

  var container = document.getElementById("mesas");

  container.appendChild(mesa);
}
