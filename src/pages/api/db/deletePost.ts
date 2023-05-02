import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { id } = JSON.parse(request.body);
  console.log(id);

  try {
    const data = await prisma.post.delete({
      where: {
        id: parseInt(id, 10),
      },
    });

    return response.status(200).json({ data });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
