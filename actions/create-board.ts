"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createBoard = z.object({
  title: z.string(),
})

export async function create (formData: FormData) {
  const { title } = createBoard.parse({
    title: formData.get("title"),
  });

  await db.board.create({
    data: {
      title,
    }
  });

  revalidatePath("/organization/org_2xyXsefVTKdoCp1Yv75yOBVNN2P");
}