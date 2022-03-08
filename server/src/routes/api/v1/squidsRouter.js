import express from "express";

import { nextWrapper } from "../../lib/nextWrapper.js";
import { Squid } from "./../../../models/index.js";

export const squidsRouter = new express.Router();

squidsRouter.get(
  "/",
  nextWrapper(async (req, res) => {
    const pageNumber = req.query.pageNumber - 1;
    const resultsPerPage = 10;

    const squidsQueryData = await Squid.query()
      .orderBy("id", "asc")
      .page(pageNumber, resultsPerPage);
    const pages = Math.ceil(squidsQueryData.total / resultsPerPage);

    res.status(200).json({ squidsQueryResults: { squidsData: squidsQueryData.results, pages } });
  })
);
