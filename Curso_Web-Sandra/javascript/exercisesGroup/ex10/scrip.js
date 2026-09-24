function calcularPurga(nivel, refuerzo) {
	switch (refuerzo) {
		case undefined:
			refuerzo = 5;
	}
	if (nivel > 20) {
		let resultado = nivel + refuerzo;
		return resultado;
	}else{
		let resultado = nivel + refuerzo * 2;
		return resultado;
	}
}

function cicloPurga(nivelInicial) {
	let nivel = nivelInicial;
	let ciclos = 0;
	while (nivel < 40) {
		nivel = calcularPurga(nivel);
		ciclos++;
	}
	let total = nivel + ciclos;
	return  total;
}
