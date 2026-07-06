type ProcessStep = {
  title: string;
  copy: string;
};

export function ProcessSteps({ steps }: { steps: Array<ProcessStep | string> }) {
  return (
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={typeof step === "string" ? step : step.title} className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
          <span className="text-sm font-semibold text-[#b86f12]">{String(index + 1).padStart(2, "0")}</span>
          {typeof step === "string" ? (
            <p className="mt-4 font-semibold leading-7 text-[#161616]">{step}</p>
          ) : (
            <>
              <h3 className="mt-4 text-lg font-semibold leading-7 text-[#161616]">{step.title}</h3>
              <p className="mt-3 leading-7 text-[#5d5a55]">{step.copy}</p>
            </>
          )}
        </li>
      ))}
    </ol>
  );
}
