function repararBloque(indice, factor) {
	switch (factor) {
		case undefined:
			factor = 3;
	}
	let resultado = indice * factor;
	return resultado;
}

function totalReparado(limite) {
	let total = 0;
	for (let i = 1; i <= limite ; i++) {
		if (i > 2) {
			total = total + repararBloque(i)

		}

	}
	return total;
}
