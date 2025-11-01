$(document).ready(function() {
    $('#formCadastro').submit(function(e) {
        let email = $('#email').val();
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            e.preventDefault();
            return false;
        }

        // Validação de campos obrigatórios
        $('input[required]').each(function() {
            if ($(this).val() === '') {
                alert("Todos os campos obrigatórios devem ser preenchidos.");
                e.preventDefault();
                return false;
            }
        });
    });
});
