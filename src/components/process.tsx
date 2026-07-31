import Image from "next/image";

type ProcessStep = {
  title: string;
  copy: string;
  image?: string;
};

export function ProcessSteps({ steps }: { steps: Array<ProcessStep | string> }) {
  return (
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={typeof step === "string" ? step : step.title} className="overflow-hidden rounded-2xl border border-[#eee9e1] bg-white shadow-sm">
          {typeof step !== "string" && step.image ? (
            <div className="relative aspect-[4/3] bg-[#f7f3ed]">
              <Image
                src={step.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
          <div className="p-7">
            <span className="text-sm font-semibold text-[#b86f12]">{String(index + 1).padStart(2, "0")}</span>
          {typeof step === "string" ? (
            <p className="mt-4 font-semibold leading-7 text-[#161616]">{step}</p>
          ) : (
            <>
              <h3 className="mt-5 text-lg font-semibold leading-7 text-[#161616]">{step.title}</h3>
              <p className="mt-4 leading-7 text-[#5d5a55]">{step.copy}</p>
            </>
          )}
          </div>
        </li>
      ))}
    </ol>
  );
}
