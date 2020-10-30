$(document).ready(function() {

    $('.notas button, .like, .deslike').click(function(e) {
        e.preventDefault()
    })

    $('.like').click(function() {
        $('.like').addClass('like-selected')
        $('.deslike').removeClass('deslike-selected')
    })
    $('.deslike').click(function() {
        $('.deslike').addClass('deslike-selected')
        $('.like').removeClass('like-selected')
    })
    $('.btn-nota-0').click(function() {
        $('.btn-nota-0').addClass('btn-nota-selected')
        $('.btn-nota-1').removeClass('btn-nota-selected')
        $('.btn-nota-2').removeClass('btn-nota-selected')
        $('.btn-nota-3').removeClass('btn-nota-selected')
        $('.btn-nota-4').removeClass('btn-nota-selected')
        $('.btn-nota-5').removeClass('btn-nota-selected')
        $('.btn-nota-6').removeClass('btn-nota-selected')
        $('.btn-nota-7').removeClass('btn-nota-selected')
        $('.btn-nota-8').removeClass('btn-nota-selected')
        $('.btn-nota-9').removeClass('btn-nota-selected')
        $('.btn-nota-10').removeClass('btn-nota-selected')
        var nota = '0'
        $('.inpt-nota').val(nota)
    })
    $('.btn-nota-1').click(function() {
        $('.btn-nota-0').removeClass('btn-nota-selected')
        $('.btn-nota-1').addClass('btn-nota-selected')
        $('.btn-nota-2').removeClass('btn-nota-selected')
        $('.btn-nota-3').removeClass('btn-nota-selected')
        $('.btn-nota-4').removeClass('btn-nota-selected')
        $('.btn-nota-5').removeClass('btn-nota-selected')
        $('.btn-nota-6').removeClass('btn-nota-selected')
        $('.btn-nota-7').removeClass('btn-nota-selected')
        $('.btn-nota-8').removeClass('btn-nota-selected')
        $('.btn-nota-9').removeClass('btn-nota-selected')
        $('.btn-nota-10').removeClass('btn-nota-selected')
        var nota = '1'
        $('.inpt-nota').val(nota)
    })
    $('.btn-nota-2').click(function() {
        $('.btn-nota-0').removeClass('btn-nota-selected')
        $('.btn-nota-1').removeClass('btn-nota-selected')
        $('.btn-nota-2').addClass('btn-nota-selected')
        $('.btn-nota-3').removeClass('btn-nota-selected')
        $('.btn-nota-4').removeClass('btn-nota-selected')
        $('.btn-nota-5').removeClass('btn-nota-selected')
        $('.btn-nota-6').removeClass('btn-nota-selected')
        $('.btn-nota-7').removeClass('btn-nota-selected')
        $('.btn-nota-8').removeClass('btn-nota-selected')
        $('.btn-nota-9').removeClass('btn-nota-selected')
        $('.btn-nota-10').removeClass('btn-nota-selected')
        var nota = '2'
        $('.inpt-nota').val(nota)
    })
    $('.btn-nota-3').click(function() {
        $('.btn-nota-0').removeClass('btn-nota-selected')
        $('.btn-nota-1').removeClass('btn-nota-selected')
        $('.btn-nota-2').removeClass('btn-nota-selected')
        $('.btn-nota-3').addClass('btn-nota-selected')
        $('.btn-nota-4').removeClass('btn-nota-selected')
        $('.btn-nota-5').removeClass('btn-nota-selected')
        $('.btn-nota-6').removeClass('btn-nota-selected')
        $('.btn-nota-7').removeClass('btn-nota-selected')
        $('.btn-nota-8').removeClass('btn-nota-selected')
        $('.btn-nota-9').removeClass('btn-nota-selected')
        $('.btn-nota-10').removeClass('btn-nota-selected')
        var nota = '3'
        $('.inpt-nota').val(nota)
    })
    $('.btn-nota-4').click(function() {
        $('.btn-nota-0').removeClass('btn-nota-selected')
        $('.btn-nota-1').removeClass('btn-nota-selected')
        $('.btn-nota-2').removeClass('btn-nota-selected')
        $('.btn-nota-3').removeClass('btn-nota-selected')
        $('.btn-nota-4').addClass('btn-nota-selected')
        $('.btn-nota-5').removeClass('btn-nota-selected')
        $('.btn-nota-6').removeClass('btn-nota-selected')
        $('.btn-nota-7').removeClass('btn-nota-selected')
        $('.btn-nota-8').removeClass('btn-nota-selected')
        $('.btn-nota-9').removeClass('btn-nota-selected')
        $('.btn-nota-10').removeClass('btn-nota-selected')
        var nota = '4'
        $('.inpt-nota').val(nota)
    })
    $('.btn-nota-5').click(function() {
        $('.btn-nota-0').removeClass('btn-nota-selected')
        $('.btn-nota-1').removeClass('btn-nota-selected')
        $('.btn-nota-2').removeClass('btn-nota-selected')
        $('.btn-nota-3').removeClass('btn-nota-selected')
        $('.btn-nota-4').removeClass('btn-nota-selected')
        $('.btn-nota-5').addClass('btn-nota-selected')
        $('.btn-nota-6').removeClass('btn-nota-selected')
        $('.btn-nota-7').removeClass('btn-nota-selected')
        $('.btn-nota-8').removeClass('btn-nota-selected')
        $('.btn-nota-9').removeClass('btn-nota-selected')
        $('.btn-nota-10').removeClass('btn-nota-selected')
        var nota = '5'
        $('.inpt-nota').val(nota)
    })
    $('.btn-nota-6').click(function() {
        $('.btn-nota-0').removeClass('btn-nota-selected')
        $('.btn-nota-1').removeClass('btn-nota-selected')
        $('.btn-nota-2').removeClass('btn-nota-selected')
        $('.btn-nota-3').removeClass('btn-nota-selected')
        $('.btn-nota-4').removeClass('btn-nota-selected')
        $('.btn-nota-5').removeClass('btn-nota-selected')
        $('.btn-nota-6').addClass('btn-nota-selected')
        $('.btn-nota-7').removeClass('btn-nota-selected')
        $('.btn-nota-8').removeClass('btn-nota-selected')
        $('.btn-nota-9').removeClass('btn-nota-selected')
        $('.btn-nota-10').removeClass('btn-nota-selected')
        var nota = '6'
        $('.inpt-nota').val(nota)
    })
    $('.btn-nota-7').click(function() {
        $('.btn-nota-0').removeClass('btn-nota-selected')
        $('.btn-nota-1').removeClass('btn-nota-selected')
        $('.btn-nota-2').removeClass('btn-nota-selected')
        $('.btn-nota-3').removeClass('btn-nota-selected')
        $('.btn-nota-4').removeClass('btn-nota-selected')
        $('.btn-nota-5').removeClass('btn-nota-selected')
        $('.btn-nota-6').removeClass('btn-nota-selected')
        $('.btn-nota-7').addClass('btn-nota-selected')
        $('.btn-nota-8').removeClass('btn-nota-selected')
        $('.btn-nota-9').removeClass('btn-nota-selected')
        $('.btn-nota-10').removeClass('btn-nota-selected')
        var nota = '7'
        $('.inpt-nota').val(nota)
    })
    $('.btn-nota-8').click(function() {
        $('.btn-nota-0').removeClass('btn-nota-selected')
        $('.btn-nota-1').removeClass('btn-nota-selected')
        $('.btn-nota-2').removeClass('btn-nota-selected')
        $('.btn-nota-3').removeClass('btn-nota-selected')
        $('.btn-nota-4').removeClass('btn-nota-selected')
        $('.btn-nota-5').removeClass('btn-nota-selected')
        $('.btn-nota-6').removeClass('btn-nota-selected')
        $('.btn-nota-7').removeClass('btn-nota-selected')
        $('.btn-nota-8').addClass('btn-nota-selected')
        $('.btn-nota-9').removeClass('btn-nota-selected')
        $('.btn-nota-10').removeClass('btn-nota-selected')
        var nota = '8'
        $('.inpt-nota').val(nota)
    })
    $('.btn-nota-9').click(function() {
        $('.btn-nota-0').removeClass('btn-nota-selected')
        $('.btn-nota-1').removeClass('btn-nota-selected')
        $('.btn-nota-2').removeClass('btn-nota-selected')
        $('.btn-nota-3').removeClass('btn-nota-selected')
        $('.btn-nota-4').removeClass('btn-nota-selected')
        $('.btn-nota-5').removeClass('btn-nota-selected')
        $('.btn-nota-6').removeClass('btn-nota-selected')
        $('.btn-nota-7').removeClass('btn-nota-selected')
        $('.btn-nota-8').removeClass('btn-nota-selected')
        $('.btn-nota-9').addClass('btn-nota-selected')
        $('.btn-nota-10').removeClass('btn-nota-selected')
        var nota = '9'
        $('.inpt-nota').val(nota)
    })
    $('.btn-nota-10').click(function() {
        $('.btn-nota-0').removeClass('btn-nota-selected')
        $('.btn-nota-1').removeClass('btn-nota-selected')
        $('.btn-nota-2').removeClass('btn-nota-selected')
        $('.btn-nota-3').removeClass('btn-nota-selected')
        $('.btn-nota-4').removeClass('btn-nota-selected')
        $('.btn-nota-5').removeClass('btn-nota-selected')
        $('.btn-nota-6').removeClass('btn-nota-selected')
        $('.btn-nota-7').removeClass('btn-nota-selected')
        $('.btn-nota-8').removeClass('btn-nota-selected')
        $('.btn-nota-9').removeClass('btn-nota-selected')
        $('.btn-nota-10').addClass('btn-nota-selected')
        var nota = '10'
        $('.inpt-nota').val(nota)
    })

    $('.like').click(function() {
        var voto = 'Like'
        $('.inpt-likes').val(voto)
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'php/contador.php',
            async: true,
            data: dados
        });
    })
    $('.deslike').click(function() {
        var voto = 'Deslike'
        $('.inpt-likes').val(voto)
    })
    $('.btn-enviar').click(function(e) {

        e.preventDefault()

        let dados = $('#form-contato').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'php/contato.php',
            async: true,
            data: dados,
            success: function(dados) {
                Swal.fire({
                    icon: dados.icone,
                    html: '<h2 style="color:white;">' + dados.mensagem + '</h2>',
                    background: 'rgb(39, 39, 61)',
                })
                if (dados.icone == 'success') {
                    $('.input, .inpt-likes, .inpt-nota').val('')
                    $('.btn-nota-0').removeClass('btn-nota-selected')
                    $('.btn-nota-1').removeClass('btn-nota-selected')
                    $('.btn-nota-2').removeClass('btn-nota-selected')
                    $('.btn-nota-3').removeClass('btn-nota-selected')
                    $('.btn-nota-4').removeClass('btn-nota-selected')
                    $('.btn-nota-5').removeClass('btn-nota-selected')
                    $('.btn-nota-6').removeClass('btn-nota-selected')
                    $('.btn-nota-7').removeClass('btn-nota-selected')
                    $('.btn-nota-8').removeClass('btn-nota-selected')
                    $('.btn-nota-9').removeClass('btn-nota-selected')
                    $('.btn-nota-10').removeClass('btn-nota-selected')
                    $('.like').removeClass('like-selected')
                    $('.deslike').removeClass('deslike-selected')
                }
            }
        });
    })
})