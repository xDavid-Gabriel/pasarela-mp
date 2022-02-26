import { PagoService } from "../services/pago.service.js";

export async function crearPreferencia(req, res) {
  const resultado = await PagoService.generarPreferenciaDePago(req.body);
  return res.status(201).json(resultado);
}

export function recibirNotificacion(req, res) {
  console.log("Los query params son:");
  console.log(req.params);

  PagoService.recibirNotificacion(req.body);

  return res.status(200).send();
}
