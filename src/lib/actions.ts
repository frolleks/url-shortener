"use server";

import { eq } from "drizzle-orm";
import { db } from "./db";
import { urls } from "./schema";
import { revalidatePath } from "next/cache";

export async function deleteUrl(id: string, formData: FormData) {
  await db.delete(urls).where(eq(urls.id, id));

  revalidatePath("/");
}

export async function shrinkUrl(formData: FormData) {
  await db.insert(urls).values({
    destinationUrl: formData.get("url") as string,
  });

  revalidatePath("/");
}
