import { Router } from "express";

import { squidsRouter } from "./v1/squidsRouter.js";

export const v1Router = new Router();

v1Router.use("/squids", squidsRouter);
