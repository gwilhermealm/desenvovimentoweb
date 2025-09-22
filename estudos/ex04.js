//validar senha
let senha ="teste1234"
let letras = 0
let numeros = 0

for(i=0; i<senha.length; i++){

   if(isNaN(senha[i])){
    letras++
   }else{
    numeros++
   }
   
}
function verificar(letras,numeros){
    if(letras==4 && numeros==4){
        console.log("senha cadastrada com sucesso")
    }else{
        console.log("sua senha precisa ter 4 letras e 4 numeros")
    }
}
verificar()