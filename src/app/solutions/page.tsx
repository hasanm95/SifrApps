import { Metadata } from "next";
import { Navbar, Footer } from "@/components/common";
import { Section } from "@/components/common/Section";
import { SOLUTIONS } from "@/constants/home-data";
import { ShoppingBag, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions | SifrApps Expertise",
  description:
    "Logical solutions for complex business bottlenecks. Engineering systemic improvements in E-commerce and digital productivity.",
};

const iconMap = {
  ShoppingBag: ShoppingBag,
  Clock: Clock,
  Users: Users,
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32">
        <Section className="bg-iridescent border-b border-slate-100 py-20 lg:py-32">
          <div className="section-container">
            <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-emerald-800 uppercase">
              Execution Vectors
            </span>
            <h1 className="text-display mb-8 max-w-4xl text-slate-900">
              Logical <span className="text-slate-300">Solutions.</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
              We don&apos;t just build features; we engineer systemic
              improvements that solve core business logic bottlenecks.
            </p>
          </div>
        </Section>

        <Section className="py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {SOLUTIONS.map((solution, idx) => {
              const Icon = iconMap[solution.iconName as keyof typeof iconMap];
              return (
                <div
                  key={idx}
                  className="group rounded-[2.5rem] border border-slate-100 bg-[#FAFBFD] p-12 transition-all hover:border-emerald-500/20 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon size={32} />
                  </div>
                  <h2 className="mb-6 text-2xl font-black text-slate-900">
                    {solution.title}
                  </h2>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
