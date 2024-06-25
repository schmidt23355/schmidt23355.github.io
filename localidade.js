function teste(){
    const aside = document.querySelectorAll(".aside")[0]
    const aberto = document.querySelectorAll(".aberto")[0]
    const body = document.querySelectorAll("body")[0]

    if(aside.style.width == "0vw"){
        aside.style.width = "100vw";
        body.style.overflow = "hidden";
        setTimeout(function() {
            aberto.style.display = "flex";
        }, 450); 
        
    }else{
        body.style.overflow = "auto";
        aside.style.width = "0vw";
        aberto.style.display = "none";
    }
}
function buscaCEP(){
    let cep = document.getElementById("cep").value.replace(/\D/g,'');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resp => resp.json())
    .then(json =>{
        for(let [campo, valor] of Object.entries(json)){
            if(document.getElementById(campo)){
            document.getElementById(campo).value = valor;


            }
        }
    })
}
document.getElementById("btncep").addEventListener("click",buscaCEP)