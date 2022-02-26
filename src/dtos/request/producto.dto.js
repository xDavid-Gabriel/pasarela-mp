import validator from "validator";

export function productoDto({ nombre, precio, tipo, estado }) {
  if (validator.isEmpty(nombre)) {
    throw Error("el nombre no puede estar vacio");
  }

  if (!validator.isDecimal(precio.toString()) && +precio < 0) {
    throw Error("El precio no puede ser negativo");
  }

  if (tipo !== "ABARROTES" && tipo !== "HIGIENE PERSONAL" && tipo !== "OTROS") {
    throw Error('el tipo debe ser "ABARROTES", "HIGIENE PERSONAL", "OTROS"');
  }

  if (estado && !validator.isBoolean(estado)) {
    throw Error("El estado tiene que true o  false");
  }

  return { nombre, precio, tipo, estado };
}
