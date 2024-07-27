import { db } from "@/lib/db";
import { urls } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const url = await db
    .select({ destinationUrl: urls.destinationUrl })
    .from(urls)
    .where(eq(urls.id, id));

  redirect(url[0].destinationUrl);
}
