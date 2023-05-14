// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import logger from "@/logger/logger";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Logging to pino-logflare

  logger.info(
    { name: "singcl" },
    "Handled response. Logged with pino-logflare."
  );
  res.status(200).json({ name: "singcl" });
}
