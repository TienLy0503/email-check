import { FormSecret } from "@/components/core/form";
import { Menu } from "@/components/core/menu";
import { cookies } from "next/headers";

export default async function Home() {
  const secret = cookies().get("secretKey")?.value;
  return (
    <div className="min-h-screen">
      {secret ? (
        <Menu />
      ) : (
        <div className="max-w-80 mx-auto px-4">
          <FormSecret />
        </div>
      )}

    </div>
  );
}
