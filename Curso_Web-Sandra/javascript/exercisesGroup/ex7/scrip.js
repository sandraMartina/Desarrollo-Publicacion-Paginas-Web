function calcularIntegridad(errores, total) {
	let resultado = total - errores / total * 100
	return resultado
}
