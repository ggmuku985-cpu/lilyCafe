import Link from "next/link";
import { ArrowLeft, Coffee, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-cream-100 px-4 py-32 text-center">
      <div className="max-w-lg mx-auto">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cream-200/80 text-gold-600 mx-auto mb-6 border border-gold-500/30">
          <Coffee className="h-10 w-10" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-gold-600 font-semibold block mb-2">
          Error 404 • Page Not Found
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl text-espresso-950 font-normal tracking-tight">
          This cup seems to have vanished.
        </h1>

        <p className="mt-4 text-sm sm:text-base text-espresso-700/80 font-sans leading-relaxed">
          The page or blend you are looking for might have been moved, renamed, or is still slowly steeping in the kitchen.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/"
            variant="primary"
            size="md"
            leftIcon={<ArrowLeft className="h-4 w-4" />}
          >
            Return to Sanctuary Home
          </Button>
          <Button
            href="/menu"
            variant="outline"
            size="md"
          >
            Browse Coffee Menu
          </Button>
        </div>
      </div>
    </main>
  );
}

