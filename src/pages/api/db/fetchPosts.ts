import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  _request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const data = await prisma.post.findMany();

    return response.status(200).json({ data });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
