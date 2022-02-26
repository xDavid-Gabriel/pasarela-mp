import { Router } from "express";
import { crearCategoria } from "../controller/categoria.controller.js";

export const categoriaRouter = Router();

categoriaRouter.route("/categoria").post(crearCategoria).get().put();

categoriaRouter.route("/categoria/:id").get();
