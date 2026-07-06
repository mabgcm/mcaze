const stats = [
  { value: "GTA", label: "Service coverage" },
  { value: "11", label: "Core services" },
  { value: "Clear", label: "Written scopes" },
  { value: "Clean", label: "Daily site habits" },
];

export function Stats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-[#eee9e1] bg-white p-6 text-center shadow-sm">
          <p className="text-3xl font-semibold text-[#161616]">{stat.value}</p>
          <p className="mt-2 text-sm text-[#6f6a62]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
