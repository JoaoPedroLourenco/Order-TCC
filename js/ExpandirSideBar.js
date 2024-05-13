let tamanho = 5;

document.getElementById("aumentar").addEventListener("click", function () {
  let sideBar = document.getElementById("sideBar");
  if (tamanho === 5) {
    sideBar.style.width = "250px";
    tamanho = 10;
  } else {
    sideBar.style.width = "90px";
    tamanho = 5;
  }
});
