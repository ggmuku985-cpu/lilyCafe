"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  aspectRatioClass?: string;
  wrapperClassName?: string;
}

export function SafeImage({
  src,
  alt,
  fallbackSrc = "/images/fallback.svg",
  className,
  wrapperClassName,
  aspectRatioClass,
  priority = false,
  fill = true,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
      setIsLoading(false);
    }
  };

  const imageElement = (
    <Image
      src={imgSrc}
      alt={alt || "Café Lily dish or interior"}
      fill={fill}
      priority={priority}
      onError={handleError}
      onLoad={() => setIsLoading(false)}
      className={cn(
        "transition-all duration-500 ease-out",
        isLoading ? "opacity-0 scale-98" : "opacity-100 scale-100",
        hasError ? "object-contain p-4 bg-cream-100" : "object-cover",
        className
      )}
      {...props}
    />
  );

  // If fill is true and an aspect ratio wrapper is desired or provided
  if (fill) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-cream-200/80",
          aspectRatioClass || "w-full h-full",
          wrapperClassName
        )}
      >
        {/* Soft loading skeleton shimmer */}
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-cream-200 via-cream-100 to-cream-200 animate-pulse z-0" />
        )}
        {imageElement}
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden inline-block", wrapperClassName)}>
      {isLoading && (
        <div className="absolute inset-0 bg-cream-200 animate-pulse z-0" />
      )}
      {imageElement}
    </div>
  );
}

