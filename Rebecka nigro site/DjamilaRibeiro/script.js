function validarMensagem(){

    let ret = true;

    let form = document.forms["formContato"];

    if(form.mensagem.value.trim() == "" ){
        alert("Pera lá! Você quer mandar uma mensagem sem escrever uma mensagem? Preencha o campo!")
        form.mensagem.focus();
        ret = false;
    }

    return ret;
}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
      
  console.log(validateEmail('texto@texto.com')); // true
  console.log(validateEmail('texto@texto')); // false
  console.log(validateEmail('texto.com')); // false
  console.log(validateEmail('texto')); // false
  
 