import { ArrowLeft, Coffee } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-cream-100 px-4 py-32 text-center">
      <div className="max-w-lg mx-auto">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cream-200/90 text-terracotta-600 mx-auto mb-6 border border-marigold-500/30">
          <Coffee className="h-10 w-10" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-terracotta-600 font-bold block mb-2">
          Page Not Found (404)
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso-950 font-normal tracking-tight">
          This cup seems to have gone missing.
        </h1>

        <p className="mt-3.5 text-sm sm:text-base text-espresso-700/80 font-sans leading-relaxed">
          The page or dish you are looking for might have been moved or is still being prepared in our kitchen.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Button
            href="/"
            variant="primary"
            size="md"
            leftIcon={<ArrowLeft className="h-4 w-4" />}
          >
            Back to Home
          </Button>
          <Button
            href="/menu"
            variant="outline"
            size="md"
          >
            Explore Menu
          </Button>
        </div>
      </div>
    </main>
  );
}
