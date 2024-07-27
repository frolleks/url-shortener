"use server";

import { eq } from "drizzle-orm";
import { db } from "./db";
import { urls } from "./schema";

export async function deleteUrl(id: string, formData: FormData) {
  await db.delete(urls).where(eq(urls.id, id));
}

export async function shrinkUrl(formData: FormData) {
  await db.insert(urls).values({
    destinationUrl: formData.get("url") as string,
  });
}
