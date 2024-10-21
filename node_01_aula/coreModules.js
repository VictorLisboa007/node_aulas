const fs = require('fs')

fs.readFile("./teste.txt", "utf8", (erro, dados) => {
    if(erro){
        console.log(erro)
    }
    else{
        console.log(dados)
    }
})

const mensagem = "Texto muito mais legal, pra ver se funciona, assiste Dragon Ball Daima"
const mensagem2 = "\nA mesma mensagem, só que diferente, assiste Dragon Ball Daima"

fs.writeFile("teste2oretorno.txt", mensagem, "utf8", (erro) => {
    if(erro){
        console.log("Deu erro, te vira ai nos 30")
    }else{
        console.log("Arquivo funcionou legal")
    }
})

fs.appendFile("teste2oretorno.txt", mensagem2, "utf8", (erro) => {
    if(erro){
        console.log("Deu erro, te vira ai nos 30")
    }else{
        console.log("Arquivo funcionou legal")
    }
})

fs.unlink("teste2oretorno.txt",(erro) => {
    if(erro){
        console.log("Não consegui apagar o arquivo")
    }else{
        console.log("Arquivo Apagado Legal")
    }
})