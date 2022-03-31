import express from "express";

import { cleanUserInput } from "../../../services/cleanUserInput.js";
import { nextWrapper } from "../../lib/nextWrapper.js";
import { Squid } from "./../../../models/index.js";

export const squidsRouter = new express.Router();

squidsRouter.get(
  "/",
  nextWrapper(async (req, res) => {
    const pageNumber = req.query.pageNumber - 1;
    const resultsPerPage = 10;

    const squidsQueryData = await Squid.query()
      .orderBy([
        { column: "createdAt", order: "asc" },
        { column: "id", order: "asc" },
      ])
      .page(pageNumber, resultsPerPage);
    const pages = Math.ceil(squidsQueryData.total / resultsPerPage);

    res.status(200).json({ squidsQueryResults: { squidsData: squidsQueryData.results, pages } });
  })
);

squidsRouter.get(
  "/:id",
  nextWrapper(async (req, res) => {
    const id = req.params.id;

    const squid = await Squid.query().findById(id);
    res.status(200).json({ squid });
  })
);

squidsRouter.post(
  "/",
  nextWrapper(async (req, res) => {
    const cleanedSquidData = cleanUserInput(req.body.squid);
    await Squid.query().insert({ ...cleanedSquidData });
    return res.status(200).json({});
  })
);
