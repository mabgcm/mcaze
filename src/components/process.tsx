export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => (
        <li key={step} className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
          <span className="text-sm font-semibold text-[#b86f12]">{String(index + 1).padStart(2, "0")}</span>
          <p className="mt-4 font-semibold leading-7 text-[#161616]">{step}</p>
        </li>
      ))}
    </ol>
  );
}
