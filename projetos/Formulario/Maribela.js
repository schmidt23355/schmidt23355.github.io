const uid =  document.getElementById("uid");
const tel =  document.getElementById("tel");
const cpf =  document.getElementById("cpf");
const Quant =  document.getElementById("Quant");
const cep =  document.getElementById("cep");
const dia =  document.getElementById("dia");


function maskTel(){
    let strTel = tel.value;
    if (strTel.length == 2 ){
        tel.value = "("+ tel.value + ") ";
    } else if(strTel.length == 10){
        tel.value += "-";
    }
}
function maskCEP(){
    let strCEP = cep.value;
    if (strCEP.length == 5 ){
        cep.value += "-";
    }
}
function maskCPF(){
    let strCPF = cpf.value;
    if (strCPF.length == 3 || strCPF.length == 7 ){
        cpf.value += ".";
    } else if (strCPF.length==11){
        cpf.value += "-"
    }
    validate(cpf);

}

function validateCPF(cpf){
    var number, digits, sum, i, result, equal_digits;
    equal_digits = 1;
    if (cpf.length < 11)
      return false;
    for (i = 0; i < cpf.length - 1; i++)
      if (cpf.charAt(i) != cpf.charAt(i + 1)) {
        equal_digits = 0;
        break;
      }
    if (!equal_digits) {
      number = cpf.substring(0, 9);
      digits = cpf.substring(9);
      sum = 0;
      for (i = 10; i > 1; i--)
        sum += number.charAt(10 - i) * i;
      result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result != digits.charAt(0))
        return false;
      number = cpf.substring(0, 10);
      sum = 0;
      for (i = 11; i > 1; i--)
        sum += number.charAt(11 - i) * i;
      result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result != digits.charAt(1))
        return false;
      return true;
    }
    else
      return false;
  }


uid.addEventListener('invalid', function(){
    if (uid.value == ""){
        uid.setCustomValidity("Insira seu nome")
    }else{
        uid.setCustomValidity("O nome deve conter no mínimo 8 caracteres e no máximo 40 caracteres, e não deve ter números");
    }
});


function validate(item){
    item.setCustomValidity('');
    item.checkValidity();
    if (item==cpf){
        let numCPF = cpf.value.replace(/[^0-9/]/g, "");
        console.log(numCPF);
        if (validateCPF(numCPF)){
            item.setCustomValidity("");
        }
        else{
            item.setCustomValidity("CPF invalido");
        }
    }
    if(item == dia){ 
      let hoje = new Date(); 
      let ddia = new Date(dia.value);
      let v_hoje = hoje.getDay();
      let v_ddia = ddia.getDay();
      if(v_ddia < v_hoje ){
        item.setCustomValidity("Data inválida, para o envio");
        console.log("Não aprovado");
        }
      else{
        item.setCustomValidity("");
        console.log("Aprovado");
      }
    } 
    if (item==Quant){
        let quantidade = parseInt(item.value);
        console.log(quantidade);
        if (quantidade > 0 && quantidade <= 20) {
            item.setCustomValidity("");
            console.log("aprovado");
        } else {
            item.setCustomValidity("Só são aceitas quantidades de 1 a 20");
            console.log("reprovado");
        }
    }

  }



document.addEventListener('DOMContentLoaded', function() {
    let cepInput = document.getElementById('cep');

    cepInput.addEventListener('input', function() {
        const cep = this.value.replace(/\D/g, '');

        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (data.erro) {
                        alert('CEP não encontrado.');
                    } else {
                        document.getElementById('rua').value = data.logradouro;
                        document.getElementById('cidade').value = data.localidade;
                        document.getElementById('estado').value = data.uf;
                    }
                })
            }
        });
    });

cep.addEventListener("input", function() {
  if (cep.value.length !== 9) {
    cep.setCustomValidity("Por favor, digite exatamente 8 caracteres!");
  }
  else{
    cep.setCustomValidity("");
  }
});
cpf.addEventListener("input", function() { validate(cpf) });
Quant.addEventListener("input", function() { validate(Quant) });
uid.addEventListener("input", function() { validate(uid) });
dia.addEventListener("input", function() { validate(dia) });
tel.addEventListener("input", maskTel);
cep.addEventListener("input", maskCEP);
cpf.addEventListener("input", maskCPF);