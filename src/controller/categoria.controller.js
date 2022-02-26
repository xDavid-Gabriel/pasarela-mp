import { CategoriaService } from "../services/categoria.service.js";

export async function crearCategoria(req, res) {
  const resultado = await CategoriaService.crear(req.body);

  return res.status(resultado.message ? 400 : 201).json(resultado);
}

export async function getCategorias(req, res) {
  const resultado = await CategoriaService.listar();
  return res.status(200).json(resultado);
}
