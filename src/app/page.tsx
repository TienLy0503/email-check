import { FormSecret } from "@/components/core/form";
import { getSecret } from "./_action";

export default async function Home() {
  const secret = await getSecret()
  return (
    <div className="min-h-screen">
        <div className="max-w-80 mx-auto px-4">
          <FormSecret />
      </div>
    </div>
  );
}
