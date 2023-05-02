import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  _request: NextApiRequest,
  response: NextApiResponse
) {
  let res = null;
  try {
    res = await prisma.post.delete({
      where: {
        id: 1,
      },
    });
  } catch (error) {
    return response.status(500).json({ error });
  }

  return response.status(200).json({ res });
}
