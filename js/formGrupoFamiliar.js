jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});

$("#formGrupo").validate({
    debug: true,
    rules: {
            grupo: {
                required: true,
                minlength: 4,
                maxlength: 15
            },
            descricao: {
                required: true,
            },
                             
            },
    messages:{
        grupo: {
            required: "Campo obrigatório",
            minlength: "O campo deve ter pelo menos 4 caracteres",
            maxlength: "O campo deve conter no máximo 15 caracteres"      
            },
        descricao:{
            required: "Campo obrigatório",
             },  
       }
});

$("#formConta").validate({
    debug: true,
    rules: {
            grupo: {
                required: true,
                minlength: 4,
                maxlength: 15
            },
            conta: {
                required: true,
                minlength: 8,
                maxlength: 15
            },
            },
    messages:{
        grupo: {
            required: "Campo obrigatório",
            minlength: "O campo deve ter pelo menos 4 caracteres",
            maxlength: "O campo deve conter no máximo 15 caracteres"      
            },
        conta: {
            required: "Campo obrigatório",
            minlength: "O campo deve conter pelo menos 8 caracteres",
            maxlength: "O campo deve conter no máximo 15 caracteres"  
            },  
       }
});
