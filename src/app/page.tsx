import { Button } from "@greenlight-web/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>Green Light Sporting Consult</h3>

      <Button variant="outline" className="text-red-200">
        Hello World
      </Button>
    </main>
  );
}
