function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById("res")
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[erro],nem todos os dados foram inseridos!!")
    }
    else{
        res.innerHTML= "contando:<br>"
        var i= Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            p = 1
            window.alert('Foi usado passo 1 para fazer a contagem')
        }
        if (i<f) {
            for(var c = i;c <= f;c+=p){
                res.innerHTML+=`${c} \u{1F449}`
            }
            res.innerHTML+= `\u{1f3c1}`   
        }else{
            for(var c = i;c >= f;c-=p){
                res.innerHTML+=`${c} \u{1F449}`
            }
            res.innerHTML+= `\u{1f3c1}`  
        }
    }
}