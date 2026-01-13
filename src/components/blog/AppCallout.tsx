import Link from "next/link";
import { Button } from "@/components/ui/button";

interface AppCalloutProps {
  appName: "Mindful Guard" | "FOMOgen" | "SifrApps";
}

export function AppCallout({ appName }: AppCalloutProps) {
  const data = {
    "Mindful Guard": {
      title: "Mindful Guard",
      sub: "Built for Focus.",
      desc: "Reclaim your digital focus with logical guardrails.",
      href: "/apps/mindful-guard",
      color: "bg-[#7C3AED]",
    },
    FOMOgen: {
      title: "FOMOgen",
      sub: "Sales Simplified.",
      desc: "The #1 Shopify app for social proof automation.",
      href: "/apps/fomogen",
      color: "bg-emerald-600",
    },
    SifrApps: {
      title: "The Logic Lab",
      sub: "First Principles.",
      desc: "Get engineering insights delivered to your inbox.",
      href: "#subscribe",
      color: "bg-slate-900",
    },
  }[appName];

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-slate-900 bg-white p-8">
      <div
        className={`absolute top-0 right-0 h-24 w-24 ${data.color} translate-x-12 -translate-y-12 rounded-full opacity-[0.03] blur-2xl transition-opacity group-hover:opacity-[0.1]`}
      />

      <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
        Powered by Logic
      </span>

      <h4 className="mb-2 text-2xl font-black text-slate-900">{data.title}</h4>
      <p className="mb-6 text-sm font-bold text-slate-500">{data.sub}</p>

      <p className="mb-8 text-sm leading-relaxed font-medium text-slate-500">
        {data.desc}
      </p>

      <Button
        className={`w-full ${data.color} h-12 rounded-xl font-bold text-white`}
        asChild
      >
        <Link href={data.href}>Learn More</Link>
      </Button>
    </div>
  );
}
