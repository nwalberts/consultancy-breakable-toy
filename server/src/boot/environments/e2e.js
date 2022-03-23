import { getNodeEnv } from "../../config/getNodeEnv.js";

// eslint-disable-next-line import/no-default-export
export default async () => {
  if (getNodeEnv() === "development") {
    // development specific middlewares here
    const { default: dotenv } = await import("dotenv");
    await dotenv.config();
  }
};
