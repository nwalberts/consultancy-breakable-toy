import { Router } from "express";

import { v1Router } from "./api/v1Router.js"

const apiRouter = new Router()

apiRouter.use("/v1", v1Router)

export default apiRouter