import express from "express";

import { apiRouter } from "./apiRouter.js";
import { clientRouter } from "./clientRouter.js";

export const rootRouter = new express.Router();

rootRouter.use("/api", apiRouter);
rootRouter.use("/", clientRouter);
