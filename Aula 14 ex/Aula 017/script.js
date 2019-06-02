function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0 ) {
         window.alert('Porfavor digite um Número!!')
    }else{
        var num = Number(num.value)

        document.createElement('option')
        tab.innerHTML = ''
        for(var i = 0; i <= 10; i++){
            var item = document.createElement('option')
            item.text =`${i} x ${num} = ${(i*num)}`
            item.value= `tab${i}`
            tab.appendChild(item)
        
        }
    }

}