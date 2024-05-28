function disableBtn() {
  const checkBox = document.getElementById("checkBox");
  const btn = document.getElementById("btnSubmit");
  let checar = checkBox.checked;

  if (checar) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
