function cadastrarProduto() {
  let nomeProduto = document.getElementById("nomeProduto").value;
  let descProduto = document.getElementById("descProduto").value;
  let precoProduto = document.getElementById("precoProduto").value;

  let produtoCriado = document.createElement("div");
  produtoCriado.className = "produtoCriado";

  let cardNomeProduto = document.createElement("h3");
  cardNomeProduto.textContent = nomeProduto;

  let cardDescProduto = document.createElement("h3");
  cardDescProduto.textContent = descProduto;

  let cardPrecoProduto = document.createElement("h3");
  cardPrecoProduto.textContent = precoProduto;

  let container = document.querySelector(".containerProdutosCriados");

  produtoCriado.appendChild(cardNomeProduto);
  produtoCriado.appendChild(cardDescProduto);
  produtoCriado.appendChild(cardPrecoProduto);

  container.appendChild(produtoCriado);

  console.log(produtoCriado);
}
