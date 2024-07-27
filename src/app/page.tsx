import { ShortenerForm } from "@/components/shortener-form";
import { db } from "@/lib/db";
import { urls } from "@/lib/schema";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getShortenedUrls() {
  return await db.select().from(urls);
}

export default async function Home() {
  const shortenedUrls = await getShortenedUrls();

  return (
    <div className="container mx-auto py-8">
      <ShortenerForm />
      <div className="mt-1.5">
        <DataTable columns={columns} data={shortenedUrls} />
      </div>
    </div>
  );
}
