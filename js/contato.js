$(document).ready(function(){$.ajax({dataType:"json",url:"php/ip.php"}),$(".notas button, .like, .deslike").click(function(t){t.preventDefault()}),$(".like").click(function(){$(".like").addClass("like-selected"),$(".deslike").removeClass("deslike-selected")}),$(".deslike").click(function(){$(".deslike").addClass("deslike-selected"),$(".like").removeClass("like-selected")}),$(".btn-nota-0").click(function(){$(".btn-nota-0").addClass("btn-nota-selected"),$(".btn-nota-1").removeClass("btn-nota-selected"),$(".btn-nota-2").removeClass("btn-nota-selected"),$(".btn-nota-3").removeClass("btn-nota-selected"),$(".btn-nota-4").removeClass("btn-nota-selected"),$(".btn-nota-5").removeClass("btn-nota-selected"),$(".btn-nota-6").removeClass("btn-nota-selected"),$(".btn-nota-7").removeClass("btn-nota-selected"),$(".btn-nota-8").removeClass("btn-nota-selected"),$(".btn-nota-9").removeClass("btn-nota-selected"),$(".btn-nota-10").removeClass("btn-nota-selected");$(".inpt-nota").val("0")}),$(".btn-nota-1").click(function(){$(".btn-nota-0").removeClass("btn-nota-selected"),$(".btn-nota-1").addClass("btn-nota-selected"),$(".btn-nota-2").removeClass("btn-nota-selected"),$(".btn-nota-3").removeClass("btn-nota-selected"),$(".btn-nota-4").removeClass("btn-nota-selected"),$(".btn-nota-5").removeClass("btn-nota-selected"),$(".btn-nota-6").removeClass("btn-nota-selected"),$(".btn-nota-7").removeClass("btn-nota-selected"),$(".btn-nota-8").removeClass("btn-nota-selected"),$(".btn-nota-9").removeClass("btn-nota-selected"),$(".btn-nota-10").removeClass("btn-nota-selected");$(".inpt-nota").val("1")}),$(".btn-nota-2").click(function(){$(".btn-nota-0").removeClass("btn-nota-selected"),$(".btn-nota-1").removeClass("btn-nota-selected"),$(".btn-nota-2").addClass("btn-nota-selected"),$(".btn-nota-3").removeClass("btn-nota-selected"),$(".btn-nota-4").removeClass("btn-nota-selected"),$(".btn-nota-5").removeClass("btn-nota-selected"),$(".btn-nota-6").removeClass("btn-nota-selected"),$(".btn-nota-7").removeClass("btn-nota-selected"),$(".btn-nota-8").removeClass("btn-nota-selected"),$(".btn-nota-9").removeClass("btn-nota-selected"),$(".btn-nota-10").removeClass("btn-nota-selected");$(".inpt-nota").val("2")}),$(".btn-nota-3").click(function(){$(".btn-nota-0").removeClass("btn-nota-selected"),$(".btn-nota-1").removeClass("btn-nota-selected"),$(".btn-nota-2").removeClass("btn-nota-selected"),$(".btn-nota-3").addClass("btn-nota-selected"),$(".btn-nota-4").removeClass("btn-nota-selected"),$(".btn-nota-5").removeClass("btn-nota-selected"),$(".btn-nota-6").removeClass("btn-nota-selected"),$(".btn-nota-7").removeClass("btn-nota-selected"),$(".btn-nota-8").removeClass("btn-nota-selected"),$(".btn-nota-9").removeClass("btn-nota-selected"),$(".btn-nota-10").removeClass("btn-nota-selected");$(".inpt-nota").val("3")}),$(".btn-nota-4").click(function(){$(".btn-nota-0").removeClass("btn-nota-selected"),$(".btn-nota-1").removeClass("btn-nota-selected"),$(".btn-nota-2").removeClass("btn-nota-selected"),$(".btn-nota-3").removeClass("btn-nota-selected"),$(".btn-nota-4").addClass("btn-nota-selected"),$(".btn-nota-5").removeClass("btn-nota-selected"),$(".btn-nota-6").removeClass("btn-nota-selected"),$(".btn-nota-7").removeClass("btn-nota-selected"),$(".btn-nota-8").removeClass("btn-nota-selected"),$(".btn-nota-9").removeClass("btn-nota-selected"),$(".btn-nota-10").removeClass("btn-nota-selected");$(".inpt-nota").val("4")}),$(".btn-nota-5").click(function(){$(".btn-nota-0").removeClass("btn-nota-selected"),$(".btn-nota-1").removeClass("btn-nota-selected"),$(".btn-nota-2").removeClass("btn-nota-selected"),$(".btn-nota-3").removeClass("btn-nota-selected"),$(".btn-nota-4").removeClass("btn-nota-selected"),$(".btn-nota-5").addClass("btn-nota-selected"),$(".btn-nota-6").removeClass("btn-nota-selected"),$(".btn-nota-7").removeClass("btn-nota-selected"),$(".btn-nota-8").removeClass("btn-nota-selected"),$(".btn-nota-9").removeClass("btn-nota-selected"),$(".btn-nota-10").removeClass("btn-nota-selected");$(".inpt-nota").val("5")}),$(".btn-nota-6").click(function(){$(".btn-nota-0").removeClass("btn-nota-selected"),$(".btn-nota-1").removeClass("btn-nota-selected"),$(".btn-nota-2").removeClass("btn-nota-selected"),$(".btn-nota-3").removeClass("btn-nota-selected"),$(".btn-nota-4").removeClass("btn-nota-selected"),$(".btn-nota-5").removeClass("btn-nota-selected"),$(".btn-nota-6").addClass("btn-nota-selected"),$(".btn-nota-7").removeClass("btn-nota-selected"),$(".btn-nota-8").removeClass("btn-nota-selected"),$(".btn-nota-9").removeClass("btn-nota-selected"),$(".btn-nota-10").removeClass("btn-nota-selected");$(".inpt-nota").val("6")}),$(".btn-nota-7").click(function(){$(".btn-nota-0").removeClass("btn-nota-selected"),$(".btn-nota-1").removeClass("btn-nota-selected"),$(".btn-nota-2").removeClass("btn-nota-selected"),$(".btn-nota-3").removeClass("btn-nota-selected"),$(".btn-nota-4").removeClass("btn-nota-selected"),$(".btn-nota-5").removeClass("btn-nota-selected"),$(".btn-nota-6").removeClass("btn-nota-selected"),$(".btn-nota-7").addClass("btn-nota-selected"),$(".btn-nota-8").removeClass("btn-nota-selected"),$(".btn-nota-9").removeClass("btn-nota-selected"),$(".btn-nota-10").removeClass("btn-nota-selected");$(".inpt-nota").val("7")}),$(".btn-nota-8").click(function(){$(".btn-nota-0").removeClass("btn-nota-selected"),$(".btn-nota-1").removeClass("btn-nota-selected"),$(".btn-nota-2").removeClass("btn-nota-selected"),$(".btn-nota-3").removeClass("btn-nota-selected"),$(".btn-nota-4").removeClass("btn-nota-selected"),$(".btn-nota-5").removeClass("btn-nota-selected"),$(".btn-nota-6").removeClass("btn-nota-selected"),$(".btn-nota-7").removeClass("btn-nota-selected"),$(".btn-nota-8").addClass("btn-nota-selected"),$(".btn-nota-9").removeClass("btn-nota-selected"),$(".btn-nota-10").removeClass("btn-nota-selected");$(".inpt-nota").val("8")}),$(".btn-nota-9").click(function(){$(".btn-nota-0").removeClass("btn-nota-selected"),$(".btn-nota-1").removeClass("btn-nota-selected"),$(".btn-nota-2").removeClass("btn-nota-selected"),$(".btn-nota-3").removeClass("btn-nota-selected"),$(".btn-nota-4").removeClass("btn-nota-selected"),$(".btn-nota-5").removeClass("btn-nota-selected"),$(".btn-nota-6").removeClass("btn-nota-selected"),$(".btn-nota-7").removeClass("btn-nota-selected"),$(".btn-nota-8").removeClass("btn-nota-selected"),$(".btn-nota-9").addClass("btn-nota-selected"),$(".btn-nota-10").removeClass("btn-nota-selected");$(".inpt-nota").val("9")}),$(".btn-nota-10").click(function(){$(".btn-nota-0").removeClass("btn-nota-selected"),$(".btn-nota-1").removeClass("btn-nota-selected"),$(".btn-nota-2").removeClass("btn-nota-selected"),$(".btn-nota-3").removeClass("btn-nota-selected"),$(".btn-nota-4").removeClass("btn-nota-selected"),$(".btn-nota-5").removeClass("btn-nota-selected"),$(".btn-nota-6").removeClass("btn-nota-selected"),$(".btn-nota-7").removeClass("btn-nota-selected"),$(".btn-nota-8").removeClass("btn-nota-selected"),$(".btn-nota-9").removeClass("btn-nota-selected"),$(".btn-nota-10").addClass("btn-nota-selected");$(".inpt-nota").val("10")}),$(".like").click(function(){$(".inpt-likes").val("Like")}),$(".deslike").click(function(){$(".inpt-likes").val("Deslike")}),$(".btn-enviar").click(function(t){t.preventDefault();let e=$("#form-contato").serialize();$.ajax({type:"POST",dataType:"json",url:"php/contato.php",async:!0,data:e,success:function(t){Swal.fire({icon:t.icone,html:'<h2 style="color:white;">'+t.mensagem+"</h2>",background:"rgb(39, 39, 61)"}),"success"==t.icone&&($(".input, .inpt-likes, .inpt-nota").val(""),$(".btn-nota-0").removeClass("btn-nota-selected"),$(".btn-nota-1").removeClass("btn-nota-selected"),$(".btn-nota-2").removeClass("btn-nota-selected"),$(".btn-nota-3").removeClass("btn-nota-selected"),$(".btn-nota-4").removeClass("btn-nota-selected"),$(".btn-nota-5").removeClass("btn-nota-selected"),$(".btn-nota-6").removeClass("btn-nota-selected"),$(".btn-nota-7").removeClass("btn-nota-selected"),$(".btn-nota-8").removeClass("btn-nota-selected"),$(".btn-nota-9").removeClass("btn-nota-selected"),$(".btn-nota-10").removeClass("btn-nota-selected"),$(".like").removeClass("like-selected"),$(".deslike").removeClass("deslike-selected"))}})})});