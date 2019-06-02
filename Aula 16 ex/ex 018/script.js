var num = document.getElementById("fnum")
var lista = document.getElementById("flista")
var res = document.getElementById("res")
var valores = []

function isnum(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else{
        return false
    }
}

function inlista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else{
        return false
    }
}
function adicionar() {
    if(isnum(num.value) && !inlista(num.value,valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    }else{
        window.alert('verefique os dados')
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    
    if (valores.length == 0) {
        window.alert("Adicione valores")
    }else{
        res.innerHTML = ""
        res.innerHTML += `<p>${valores.length} Cadastrados</p>`
        res.innerHTML +=`<p>O maior numero é: ${Math.max.apply(null,valores)} </p>`
        res.innerHTML += `<p> O menor numero é : ${Math.min.apply(null,valores)} </p>`
        res.innerHTML += `<p> A soma dos Valores é ${valores.reduce((a,b)=> a+b ,0)}</p>`
        res.innerHTML += `<p> A media dos Valores é ${valores.reduce((a,b) => a + b, 0) / valores.length}</p>`
    }
}

