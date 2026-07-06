import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/seo";

export function Breadcrumb({ items }: { items: Array<{ name: string; href: string }> }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-[#6f6a62]">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {index === items.length - 1 ? (
                <span aria-current="page" className="text-[#161616]">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[#F59D28]">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  );
}
