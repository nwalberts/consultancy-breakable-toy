import { Router } from "express";

import { v1Router } from "./api/v1Router.js"

export const apiRouter = new Router()

apiRouter.use("/v1", v1Router)

