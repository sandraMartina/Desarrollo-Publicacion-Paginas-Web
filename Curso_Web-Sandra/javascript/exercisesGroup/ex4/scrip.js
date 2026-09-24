function generarClaveTemporal(base, multiplicador) {
	switch (multiplicador) {
		case undefined:
			multiplicador = 4
	}
	let resultado = base * multiplicador + 3
	return resultado;
}
