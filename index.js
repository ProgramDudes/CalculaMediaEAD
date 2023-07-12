function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

    var media = nota1*0.2 + nota2*0.2 + nota3*0.6;

    document.getElementById('resultado').innerHTML = "A média é: " + media.toFixed(2);
}