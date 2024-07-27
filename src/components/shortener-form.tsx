import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/db";
import { urls } from "@/lib/schema";

export function ShortenerForm() {
  async function shrinkUrl(formData: FormData) {
    "use server";

    if (
      !formData
        .get("url")
        ?.toString()
        .startsWith("http:" || "https:")
    ) {
      return "URL must start with https: or http:";
    }

    await db.insert(urls).values({
      destinationUrl: formData.get("url") as string,
    });
  }

  return (
    <form action={shrinkUrl}>
      <div className="flex">
        <Input placeholder="Enter a URL..." name="url" type="url" />
        <Button type="submit">Shrink</Button>
      </div>
    </form>
  );
}
