import express from "express"

import { nextWrapper } from "../../lib/nextWrapper.js"

const squidsRouter = new express.Router()

squidsRouter.get("/", nextWrapper(async (req, res) => {
    const squids = await Squid.query()
    res.status(200).json({ squids })
}))

export default squidsRouter;

