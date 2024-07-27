import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  async function shrinkUrl(formData: FormData) {
    "use server";

    console.log(formData.get("url"));
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
