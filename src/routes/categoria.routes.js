import { Router } from "express";
import {
  crearCategoria,
  getCategorias,
} from "../controller/categoria.controller.js";

export const categoriaRouter = Router();

categoriaRouter
  .route("/categoria")
  .post(crearCategoria)
  .get(getCategorias)
  .put();

categoriaRouter.route("/categoria/:id").get();
