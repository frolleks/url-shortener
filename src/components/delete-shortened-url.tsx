"use client";

import { deleteUrl } from "@/lib/actions";

export function DeleteShortenedUrl({ url }: { url: { id: string } }) {
  const deleteUrlWithId = deleteUrl.bind(null, url.id);

  return (
    <form action={deleteUrlWithId}>
      <button type="submit">
        <p className="text-red-700">Delete</p>
      </button>
    </form>
  );
}
