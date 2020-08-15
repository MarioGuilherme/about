function selecionar() {
    let select = document.getElementById("select").value
    let formula_a = document.getElementById("formula-a");
    let formula_b = document.getElementById("formula-b");
    let formula_c = document.getElementById("formula-c");
    let formula_xis = document.getElementById("formula-xis");
    let ajuda = document.getElementById("ajuda");
    let botao = document.getElementById("botao");
    let resposta_a = document.getElementById("resposta-a");
    let resposta_b = document.getElementById("resposta-b");
    let resposta_c = document.getElementById("resposta-c");
    let resposta_xis = document.getElementById("resposta-xis");
    let visibilidade = document.getElementById("resposta-xis");

    if (select == "") {
        ajuda.style.display = "block"
        botao.style.display = "none"
        formula_a.style.display = "none"
        formula_b.style.display = "none"
        formula_c.style.display = "none"
        formula_xis.style.display = "none"
        document.getElementById('b').value = '';
        document.getElementById('c').value = '';
        document.getElementById('delta').value = '';
        document.getElementById('a2').value = '';
        document.getElementById('c2').value = '';
        document.getElementById('delta2').value = '';
        document.getElementById('a3').value = '';
        document.getElementById('b3').value = '';
        document.getElementById('delta3').value = '';
        document.getElementById('a4').value = '';
        document.getElementById('c4').value = '';
        document.getElementById('b4').value = '';
        document.getElementById('b').style.border = "black 1px solid";
        document.getElementById('c').style.border = "black 1px solid";
        document.getElementById('delta').style.border = "black 1px solid";
        document.getElementById('a2').style.border = "black 1px solid";
        document.getElementById('c2').style.border = "black 1px solid";
        document.getElementById('delta2').style.border = "black 1px solid";
        document.getElementById('a3').style.border = "black 1px solid";
        document.getElementById('b3').style.border = "black 1px solid";
        document.getElementById('delta3').style.border = "black 1px solid";
        document.getElementById('a4').style.border = "black 1px solid";
        document.getElementById('b4').style.border = "black 1px solid";
        document.getElementById('c4').style.border = "black 1px solid";
        resposta_c.style.display = "none"
        resposta_b.style.display = "none"
        resposta_c.style.display = "none"
        resposta_xis.style.display = "none"
        document.getElementById("area-resultado").style.height = "23.725rem"
        visibilidade.classList.add("invisivel2");
        document.getElementById("botao2").style.display = "none";

    } else if (select == 'valor-a') {

        ajuda.style.display = "none"
        botao.style.display = "block"
        formula_a.style.display = "block"
        formula_b.style.display = "none"
        formula_c.style.display = "none"
        formula_xis.style.display = "none"
        document.getElementById('b').value = '';
        document.getElementById('c').value = '';
        document.getElementById('delta').value = '';
        document.getElementById('a2').value = '';
        document.getElementById('c2').value = '';
        document.getElementById('delta2').value = '';
        document.getElementById('a3').value = '';
        document.getElementById('b3').value = '';
        document.getElementById('delta3').value = '';
        document.getElementById('a4').value = '';
        document.getElementById('c4').value = '';
        document.getElementById('b4').value = '';
        document.getElementById('b').style.border = "black 1px solid";
        document.getElementById('c').style.border = "black 1px solid";
        document.getElementById('delta').style.border = "black 1px solid";
        document.getElementById('a2').style.border = "black 1px solid";
        document.getElementById('c2').style.border = "black 1px solid";
        document.getElementById('delta2').style.border = "black 1px solid";
        document.getElementById('a3').style.border = "black 1px solid";
        document.getElementById('b3').style.border = "black 1px solid";
        document.getElementById('delta3').style.border = "black 1px solid";
        document.getElementById('a4').style.border = "black 1px solid";
        document.getElementById('b4').style.border = "black 1px solid";
        document.getElementById('c4').style.border = "black 1px solid";
        resposta_c.style.display = "none"
        resposta_b.style.display = "none"
        resposta_c.style.display = "none"
        resposta_xis.style.display = "none"
        document.getElementById("area-resultado").style.height = "23.725rem"
        visibilidade.classList.add("invisivel2");
        document.getElementById("delta").style.backgroundColor = "white";
        document.getElementById("b").style.backgroundColor = "white";
        document.getElementById("c").style.backgroundColor = "white";
        document.getElementById("a2").style.backgroundColor = "white";
        document.getElementById("c2").style.backgroundColor = "white";
        document.getElementById("delta2").style.backgroundColor = "white";
        document.getElementById("a3").style.backgroundColor = "white";
        document.getElementById("b3").style.backgroundColor = "white";
        document.getElementById("delta3").style.backgroundColor = "white";
        document.getElementById("a4").style.backgroundColor = "white";
        document.getElementById("b4").style.backgroundColor = "white";
        document.getElementById("c4").style.backgroundColor = "white";
        document.getElementById("botao2").style.display = "block";

    } else if (select == 'valor-b') {

        ajuda.style.display = "none"
        botao.style.display = "block"
        formula_a.style.display = "none"
        formula_b.style.display = "block"
        formula_c.style.display = "none"
        formula_xis.style.display = "none"
        document.getElementById('b').value = '';
        document.getElementById('c').value = '';
        document.getElementById('delta').value = '';
        document.getElementById('a2').value = '';
        document.getElementById('c2').value = '';
        document.getElementById('delta2').value = '';
        document.getElementById('a3').value = '';
        document.getElementById('b3').value = '';
        document.getElementById('delta3').value = '';
        document.getElementById('a4').value = '';
        document.getElementById('c4').value = '';
        document.getElementById('b4').value = '';
        document.getElementById('b').style.border = "black 1px solid";
        document.getElementById('c').style.border = "black 1px solid";
        document.getElementById('delta').style.border = "black 1px solid";
        document.getElementById('a2').style.border = "black 1px solid";
        document.getElementById('c2').style.border = "black 1px solid";
        document.getElementById('delta2').style.border = "black 1px solid";
        document.getElementById('a3').style.border = "black 1px solid";
        document.getElementById('b3').style.border = "black 1px solid";
        document.getElementById('delta3').style.border = "black 1px solid";
        document.getElementById('a4').style.border = "black 1px solid";
        document.getElementById('b4').style.border = "black 1px solid";
        document.getElementById('c4').style.border = "black 1px solid";
        resposta_a.style.display = "none"
        resposta_b.style.display = "none"
        resposta_c.style.display = "none"
        resposta_xis.style.display = "none"
        document.getElementById("area-resultado").style.height = "23.725rem"
        visibilidade.classList.add("invisivel2");
        document.getElementById("delta").style.backgroundColor = "white";
        document.getElementById("b").style.backgroundColor = "white";
        document.getElementById("c").style.backgroundColor = "white";
        document.getElementById("a2").style.backgroundColor = "white";
        document.getElementById("c2").style.backgroundColor = "white";
        document.getElementById("delta2").style.backgroundColor = "white";
        document.getElementById("a3").style.backgroundColor = "white";
        document.getElementById("b3").style.backgroundColor = "white";
        document.getElementById("delta3").style.backgroundColor = "white";
        document.getElementById("a4").style.backgroundColor = "white";
        document.getElementById("b4").style.backgroundColor = "white";
        document.getElementById("c4").style.backgroundColor = "white";
        document.getElementById("botao2").style.display = "block";

    } else if (select == "valor-c") {

        ajuda.style.display = "none"
        botao.style.display = "block"
        formula_a.style.display = "none"
        formula_b.style.display = "none"
        formula_c.style.display = "block"
        formula_xis.style.display = "none"
        document.getElementById('b').value = '';
        document.getElementById('c').value = '';
        document.getElementById('delta').value = '';
        document.getElementById('a2').value = '';
        document.getElementById('c2').value = '';
        document.getElementById('delta2').value = '';
        document.getElementById('a3').value = '';
        document.getElementById('b3').value = '';
        document.getElementById('delta3').value = '';
        document.getElementById('a4').value = '';
        document.getElementById('c4').value = '';
        document.getElementById('b4').value = '';
        document.getElementById('b').style.border = "black 1px solid";
        document.getElementById('c').style.border = "black 1px solid";
        document.getElementById('delta').style.border = "black 1px solid";
        document.getElementById('a2').style.border = "black 1px solid";
        document.getElementById('c2').style.border = "black 1px solid";
        document.getElementById('delta2').style.border = "black 1px solid";
        document.getElementById('a3').style.border = "black 1px solid";
        document.getElementById('b3').style.border = "black 1px solid";
        document.getElementById('delta3').style.border = "black 1px solid";
        document.getElementById('a4').style.border = "black 1px solid";
        document.getElementById('b4').style.border = "black 1px solid";
        document.getElementById('c4').style.border = "black 1px solid";
        resposta_a.style.display = "none"
        resposta_b.style.display = "none"
        resposta_c.style.display = "none"
        resposta_xis.style.display = "none"
        document.getElementById("area-resultado").style.height = "23.725rem"
        visibilidade.classList.add("invisivel2");
        document.getElementById("delta").style.backgroundColor = "white";
        document.getElementById("b").style.backgroundColor = "white";
        document.getElementById("c").style.backgroundColor = "white";
        document.getElementById("a2").style.backgroundColor = "white";
        document.getElementById("c2").style.backgroundColor = "white";
        document.getElementById("delta2").style.backgroundColor = "white";
        document.getElementById("a3").style.backgroundColor = "white";
        document.getElementById("b3").style.backgroundColor = "white";
        document.getElementById("delta3").style.backgroundColor = "white";
        document.getElementById("a4").style.backgroundColor = "white";
        document.getElementById("b4").style.backgroundColor = "white";
        document.getElementById("c4").style.backgroundColor = "white";
        document.getElementById("botao2").style.display = "block";

    } else if (select == "delta-xis") {

        ajuda.style.display = "none"
        botao.style.display = "block"
        formula_a.style.display = "none"
        formula_b.style.display = "none"
        formula_c.style.display = "none"
        formula_xis.style.display = "block"
        document.getElementById('b').value = '';
        document.getElementById('c').value = '';
        document.getElementById('delta').value = '';
        document.getElementById('a2').value = '';
        document.getElementById('c2').value = '';
        document.getElementById('delta2').value = '';
        document.getElementById('a3').value = '';
        document.getElementById('b3').value = '';
        document.getElementById('delta3').value = '';
        document.getElementById('a4').value = '';
        document.getElementById('c4').value = '';
        document.getElementById('b4').value = '';
        document.getElementById('b').style.border = "black 1px solid";
        document.getElementById('c').style.border = "black 1px solid";
        document.getElementById('delta').style.border = "black 1px solid";
        document.getElementById('a2').style.border = "black 1px solid";
        document.getElementById('c2').style.border = "black 1px solid";
        document.getElementById('delta2').style.border = "black 1px solid";
        document.getElementById('a3').style.border = "black 1px solid";
        document.getElementById('b3').style.border = "black 1px solid";
        document.getElementById('delta3').style.border = "black 1px solid";
        document.getElementById('a4').style.border = "black 1px solid";
        document.getElementById('b4').style.border = "black 1px solid";
        resposta_a.style.display = "none"
        resposta_b.style.display = "none"
        resposta_c.style.display = "none"
        resposta_xis.style.display = "none"
        document.getElementById("area-resultado").style.height = "23.725rem"
        visibilidade.classList.add("invisivel2");
        document.getElementById("delta").style.backgroundColor = "white";
        document.getElementById("b").style.backgroundColor = "white";
        document.getElementById("c").style.backgroundColor = "white";
        document.getElementById("a2").style.backgroundColor = "white";
        document.getElementById("c2").style.backgroundColor = "white";
        document.getElementById("delta2").style.backgroundColor = "white";
        document.getElementById("a3").style.backgroundColor = "white";
        document.getElementById("b3").style.backgroundColor = "white";
        document.getElementById("delta3").style.backgroundColor = "white";
        document.getElementById("a4").style.backgroundColor = "white";
        document.getElementById("b4").style.backgroundColor = "white";
        document.getElementById("c4").style.backgroundColor = "white";
        document.getElementById("botao2").style.display = "block";
    }
}