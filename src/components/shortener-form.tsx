import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { shrinkUrl } from "@/lib/actions";

export async function ShortenerForm() {
  return (
    <form action={shrinkUrl}>
      <div className="flex gap-1.5">
        <Input placeholder="Enter a URL..." name="url" type="url" />
        <Button type="submit">Shrink</Button>
      </div>
    </form>
  );
}
