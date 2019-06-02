var amigo = {
    nome:"jose",
    sexo :"M",
    peso: 85.4,
    engordar(p=0){
        this.peso+=p
    }
}
amigo.engordar(9)
console.log(amigo)