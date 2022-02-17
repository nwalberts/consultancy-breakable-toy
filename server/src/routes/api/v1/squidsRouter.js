import express from "express"

import { nextWrapper } from "../../lib/nextWrapper.js"
import { Squid } from "./../../../models/index.js"

export const squidsRouter = new express.Router()

squidsRouter.get("/", nextWrapper(async (req, res) => {
    const squids = await Squid.query().orderBy("createdAt", "desc");
    res.status(200).json({ squids })
}))
