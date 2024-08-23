import { FormSecret } from "@/components/core/form";
import { Menu } from "@/components/core/menu";

export default async function Home() {
  return (
    <div className="min-h-screen">
      <Menu />

      <div className="max-w-80 mx-auto px-4">
        <FormSecret />
      </div>
    </div>
  );
}
