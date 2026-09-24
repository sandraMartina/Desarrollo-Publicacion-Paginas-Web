function clasificarAmenaza(nivel) {
	switch (nivel) {
		case "alta":
			return "CODIGO: 90";
		case "media":
			return "CODIGO: 55";

		case "baja":
			return "CODIGO: 20";

		default:
			return "CODIGO: 00";
	}
}
