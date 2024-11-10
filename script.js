document.getElementById('calcular').addEventListener('click', function() {
    const peso = document.getElementById('peso').value;
    if (peso) {
        const aguaRecomendada = (peso * 35) / 1000; // Convertendo para litros
        document.getElementById('resultado').innerText = `Você deve consumir aproximadamente ${aguaRecomendada.toFixed(2)} litros de água por dia.`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor válido.';
    }
});
