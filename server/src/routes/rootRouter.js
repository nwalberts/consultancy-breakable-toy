import express from "express";

import { clientRouter } from "./clientRouter.js";

import apiRouter from "./apiRouter.js";

const rootRouter = new express.Router();

rootRouter.use("/api", apiRouter)

rootRouter.use("/", clientRouter);

export { rootRouter };
