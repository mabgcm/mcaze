import type { FaqItem } from "@/lib/types";
import { JsonLd } from "@/components/json-ld";
import { faqSchema } from "@/lib/seo";

export function FaqList({ items, withSchema = false }: { items: FaqItem[]; withSchema?: boolean }) {
  return (
    <>
      <div className="divide-y divide-[#eee9e1] rounded-2xl border border-[#eee9e1] bg-white shadow-sm">
        {items.map((item) => (
          <details key={item.question} className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-[#161616]">
              {item.question}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f7f3ed] text-[#b86f12] group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 max-w-3xl leading-7 text-[#5d5a55]">{item.answer}</p>
          </details>
        ))}
      </div>
      {withSchema ? <JsonLd data={faqSchema(items)} /> : null}
    </>
  );
}
