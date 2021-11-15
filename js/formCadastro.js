jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});

$("#formCadastro").validate({
    debug: true,
    rules: {
            primeiroNome: {
                required: true,
                minlength: 4,
                maxlength: 15
            },
            sobrenome: {
                required: true,
            },
            conta: {
                required: true,
                minlength: 8,
                maxlength: 15
            },
            email: {
                required: true,
                email: true,
            },
            senha: {
                required: true,
                minlength: 6
            },
            confirmarSenha: {
                required: true
            },
                             
            },
    messages:{
        primeiroNome: {
            required: "Campo primero nome é obrigatório",
            minlength: "O campo primeiro nome deve ter pelo menos 4 caracteres",
            maxlength: "O campo primeiro nome  deve conter no máximo 15 caracteres"
                
            },
        sobrenome:{
            required: "Campo sobrenome é obrigatório",
             },  
        conta: {
            required: "Campo conta é obrigatório",
            minlength: "O campo conta deve ter pelo menos 8 caracteres",
            maxlength: "O campo conta deve conter no máximo 15 caracteres"  
            },
        email: {
            required: "Campo email é obrigatório",
            email: "informe uma email válido",
            },
        senha:{
            required: "É necessário informar um senha",
            minlength: "A senha deve conter no mínimo 6 caracteres"
            }, 
        confirmarSenha:{
            required: "É necessário confirmar a senha",
            },
       }
});

$("#btnCadastrarConta").click(function (ev) {
    var inputConfirmarSenha = document.getElementById("confirmarSenha");
    var inputSenha = document.getElementById("senha");

    if ($("#formCadastro").valid()) {
        if (inputSenha.value != inputConfirmarSenha.value) {
            $("#formMessage").removeClass("d-none");
        } else {
            $("#formMessage").addClass("d-none");
            $('#btnCadastrarConta').click(function(){
                window.location.href='login.html';
            })
        }
    }
        
});