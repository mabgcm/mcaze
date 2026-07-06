import Image from "next/image";
import { siteConfig } from "@/data/site";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  src?: string;
};

export function BrandLogo({ className = "h-auto w-[150px] sm:w-[176px]", priority = false, src = siteConfig.logo }: BrandLogoProps) {
  return (
    <Image
      src={src}
      alt={`${siteConfig.name} logo`}
      width={646}
      height={281}
      priority={priority}
      className={className}
    />
  );
}
