function disableBtn(){
    const checkBox = document.getElementById("concordar")
    const btn = document.getElementById("btn")
    let checar = checkBox.checked

    if(checar){
        btn.disabled = false
    } else{
        btn.disabled = true
    }
}