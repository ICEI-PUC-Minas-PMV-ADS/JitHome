jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});

$("#formLoginUsuario").validate({
    debug: true,
    rules: {
            conta: {
                required: true,
                minlength: 8,
                maxlength: 15
            },
            senha: {
                required: true,
                minlength: 6
            },
                             
            },
    messages:{
        conta: {
            required: "Campo conta é obrigatório",
            minlength: "O campo conta deve ter pelo menos 8 caracteres",
            maxlength: "O campo conta deve conter no máximo 15 caracteres"
                
            },
        senha:{
            required: "É necessário informar um senha",
            minlength: "A senha deve conter no mínimo 6 caracteres"
             },    
       }
});

$("#btnSubmitLogin").click(function (ev) {
    var inputConta = document.getElementById("conta");
    var inputSenha = document.getElementById("senha");

    if ($("#formLoginUsuario").valid()) {
        if (inputConta.value != "alexsgaldino" || inputSenha.value != '123456') {
            $("#formMessage").removeClass("d-none");
        } else {
            $("#formMessage").addClass("d-none");
            $('#btnSubmitLogin').click(function(){
                window.location.href='home.html';
            })
        }
    }
        
});