import Link from "next/link";

export function MobileEstimateBar() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-5 left-5 right-24 z-40 inline-flex min-h-12 items-center justify-center rounded-full bg-[#F59D28] px-4 text-sm font-semibold text-[#161616] shadow-lg shadow-black/15 transition hover:bg-[#e78f18] focus:outline-none focus:ring-2 focus:ring-[#F59D28] focus:ring-offset-2 sm:hidden"
    >
      Get Free Estimate
    </Link>
  );
}
