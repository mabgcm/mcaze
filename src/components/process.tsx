import Image from "next/image";

type ProcessStep = {
  title: string;
  copy: string;
  image?: string;
};

export function ProcessSteps({ steps }: { steps: Array<ProcessStep | string> }) {
  return (
    <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
      {steps.map((step, index) => (
        <li key={typeof step === "string" ? step : step.title} className="relative overflow-hidden rounded-md border border-[#e7e2d8] bg-white shadow-sm lg:rounded-none lg:border-r-0 lg:last:border-r">
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
            <span className="display-title inline-flex border-b-2 border-[#F59D28] pb-1 text-sm text-[#a95e08]">{String(index + 1).padStart(2, "0")}</span>
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
