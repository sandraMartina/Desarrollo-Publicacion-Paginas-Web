function rondasContencion(nivelInicial) {
	let numeroVueltas = 0;
	while(nivelInicial > 10){
		nivelInicial = nivelInicial - 7;
		numeroVueltas++
	}
	return numeroVueltas;
}
