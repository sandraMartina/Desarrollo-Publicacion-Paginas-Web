function intervencionesNecesarias(energiaInicial) {
	let vueltas = 0
	while (energiaInicial > 50) {
		energiaInicial = energiaInicial -18;
		vueltas++;
	}
	return vueltas;
}
