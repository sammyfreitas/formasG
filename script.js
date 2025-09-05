let selecforma = document.getElementById('forma');
let inputDiv=document.getElementById('inputs');
let resultado = document.getElementById('resultado');
	
selecforma.addEventListener('change',() => {
	let formaGeo = selecforma.value;
	let resumo = ``;

	switch (formaGeo){
		case 'circulo':
			resumo = `
					<label>Raio:</label><br>
					<input type="number" id="raio" placeholder="digite o raio aqui"><br>
					`;
			break;
		case 'losango':
			resumo = `
					<label>Diagonal Maior:</label><br>
					<input type="number" id="dmaior"><br>
					<label>Diagonal Menor:</label><br>
					<input type="number" id="dmenor"><br>
					<label>Lado Maior:</label><br>
					<input type="number" id="lmaior"><br>
					<label>Lado Menor:</label><br>
					<input type="number" id="lmenor"><br>
					`;
			break;
		case 'quadrado':
			resumo = `
					<label>Lado:</label><br>
					<input type="number" id="lado"><br>
					`;
			break;
		case 'retangulo':
			resumo = `
					<label>Base:</label><br>
					<input type="number" id="base"><br>
					<label>Altura:</label><br>
					<input type="number" id="altura"><br>
					`;
			break;
		case 'triangulo':
			resumo = `
					<label>Base:</label><br>
					<input type="number" id="base"><br>
					<label>Altura:</label><br>
					<input type="number" id="altura"><br>
					<label>Lado1:</label><br>
					<input type="number" id="lado1"><br>
					<label>Lado2:</label><br>
					<input type="number" id="lado2"><br>
					<label>Lado3:</label><br>
					<input type="number" id="lado3"><br>
					`;
			break;
		default:
			resumo = ``;
	}
	inputDiv.innerHTML = resumo;
});
	
function calculaForma(){
	let selecforma = document.getElementById('forma').value;
	let resultadoTexto;
	let resultadoLabel= document.getElementById('resultado');
	switch (selecforma){
		case 'circulo':
			let raio = parseFloat(document.getElementById('raio').value);
			resultadoTexto = `Área: ${(Math.PI*raio*raio).toFixed(2)}, Perímetro:${(2*Math.PI*raio).toFixed(2)} `;
			break;
		case 'losango':
			let dMaior = parseFloat(document.getElementById('dmaior').value);
			let dMenor = parseFloat(document.getElementById('dmenor').value);
			let lMaior = parseFloat(document.getElementById('lmaior').value);
			let lMenor = parseFloat(document.getElementById('lmenor').value);
			resultadoTexto  = `Área: ${((dMaior*dMenor)/2).toFixed(2)}, Perímetro:${((2*lMaior)+(2*lMenor)).toFixed(2)} `;
			break;
		case 'quadrado':
			let lado = parseFloat(document.getElementById('lado').value);
			resultadoTexto  = `Área: ${(lado*lado).toFixed(2)}, Perímetro:${(4*lado).toFixed(2)} `;
			break;
		case 'retangulo':
			let baseR = parseFloat(document.getElementById('base').value);
			let alturaR = parseFloat(document.getElementById('altura').value);
			resultadoTexto  = `Área: ${(baseR*alturaR).toFixed(2)}, Perímetro:${((2*baseR)+(2*alturaR)).toFixed(2)} `;
			break;
		case 'triangulo':
			let base = parseFloat(document.getElementById('base').value);
			let altura = parseFloat(document.getElementById('altura').value);
			let lado1 = parseFloat(document.getElementById('lado1').value);
			let lado2 = parseFloat(document.getElementById('lado2').value);
			let lado3 = parseFloat(document.getElementById('lado3').value);
			resultadoTexto  = `Área: ${((base*altura)/2).toFixed(2)}, Perímetro:${(lado1+lado2+lado3).toFixed(2)} `;
			break;
		default:
			resultadoTexto  = "Selecione uma figura geométrica.";
	}
	resultadoLabel.innerHTML = resultadoTexto;
};



