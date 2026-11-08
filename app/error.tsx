"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-cream-100 px-4 py-32 text-center">
      <div className="max-w-md mx-auto">
        <h2 className="font-serif text-3xl text-espresso-950 font-normal">
          A brief pause in service.
        </h2>
        <p className="mt-3 text-sm text-espresso-700 font-sans">
          We encountered an unexpected disturbance while preparing this page.
        </p>
        <div className="mt-6">
          <Button
            onClick={() => reset()}
            variant="primary"
            size="md"
            leftIcon={<RotateCcw className="h-4 w-4" />}
          >
            Try Refreshing
          </Button>
        </div>
      </div>
    </main>
  );
}

