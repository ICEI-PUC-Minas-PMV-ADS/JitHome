jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});

$("#formPerfil").validate({
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
            telefone: {
                required: true,
            },
            cep: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            rua: {
                required: true,
            },
            numero: {
                required: true,
            },
            complemento: {
                required: true,
            },
            bairro: {
                required: true,
            },
            cidade: {
                required: true,
        },
            uf: {
                required: true,
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
            required: "Campo obrigatório",
            minlength: "O campo deve ter pelo menos 4 caracteres",
            maxlength: "O campo deve conter no máximo 15 caracteres"      
            },
        sobrenome:{
            required: "Campo obrigatório",
             },  
        conta: {
            required: "Campo obrigatório",
            minlength: "O campo deve conter pelo menos 8 caracteres",
            maxlength: "O campo deve conter no máximo 15 caracteres"  
            },  
        telefone: {
            required: "Campo obrigatório",
            },
        cep: {
            required: "Campo obrigatório",
            },
        email: {
            required: "Campo obrigatório",
            email: "informe uma email válido",
            },
        rua: {
            required: "Campo obrigatório",
            },   
        numero: {
            required: "Campo obrigatório",
            },
        complemento: {
            required: "Campo obrigatório",
            },
        bairro: {
            required: "Campo obrigatório",
            },
        cidade: {
            required: "Campo obrigatório",
            },
        uf: {
            required: "Campo obrigatório",
        },
        senha: {
            required: "É necessário informar um senha",
            minlength: "A senha deve conter no mínimo 6 caracteres"
            }, 
        confirmarSenha:{
            required: "É necessário confirmar a senha",
            },
       }
});

$("#btnSalvarAlteracao").click(function (ev) {
    var inputConfirmarSenha = document.getElementById("confirmarSenha");
    var inputSenha = document.getElementById("senha");

    if ($("#formPerfil").valid()) {
        if (inputSenha.value != inputConfirmarSenha.value) {
            $("#formMessage").removeClass("d-none");
        } else {
            $("#formMessage").addClass("d-done");
            }
        }
    }
        
);