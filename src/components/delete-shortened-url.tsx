"use client";

import { deleteUrl } from "@/lib/actions";

export function DeleteShortenedUrl({
  url,
}: {
  url: { id: string; destinationUrl: string };
}) {
  const deleteUrlWithId = deleteUrl.bind(null, url.id);

  return (
    <form action={deleteUrlWithId} className="w-full h-full">
      <button type="submit" className="flex w-full h-full">
        <p className="text-red-700 justify-start">Delete</p>
      </button>
    </form>
  );
}
