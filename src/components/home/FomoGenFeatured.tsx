import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Rocket, BarChart3, Accessibility } from "lucide-react";

export function FomoGenFeatured() {
  const features = [
    {
      icon: <Rocket className="h-6 w-6 text-blue-600" />,
      title: "Zero-Impact Performance",
      desc: "A proprietary < 2.1KB payload ensures your Core Web Vitals stay green. While other apps trigger 'Long Task' warnings, FomoGen remains invisible to the browser's main thread.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
      title: "Conversion, Calculated",
      desc: "Boost engagement by +23% through intelligently timed triggers. We don't just show notifications; we use mathematical models to display them at the peak of user intent.",
    },
    {
      icon: <Accessibility className="h-6 w-6 text-blue-600" />,
      title: "Accessibility as a Standard",
      desc: "FomoGen is WCAG 2.1 compliant out-of-the-box. Don't exclude 20% of your potential customers with inaccessible pop-ups.",
    },
  ];

  return (
    <Section className="bg-white py-24 md:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">
              Featured Product
            </span>
            <h2 className="mb-8 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              FomoGen: Social Proof Without the Speed Penalty.
            </h2>
            <p className="mb-12 text-xl leading-relaxed font-medium text-slate-500">
              Most social proof apps are heavy, slow, and hurt your SEO. We
              built <span className="text-slate-900">FomoGen</span> for the
              performance-obsessed merchant. It’s social proof engineered with
              logic, not bloat.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 rounded-xl bg-blue-600 px-8 text-white hover:bg-blue-700"
                asChild
              >
                <Link href="/apps/fomogen">Add FomoGen to Shopify</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-xl border-slate-200 px-8 text-slate-900 hover:bg-slate-50"
                asChild
              >
                <Link href="/compare/fomogen-vs-nudgify">
                  Compare vs. Nudgify
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group flex gap-6 rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:border-blue-600/20 hover:bg-white hover:shadow-xl hover:shadow-blue-600/5"
              >
                <div className="flex-none">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 transition-colors group-hover:bg-blue-600/20">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
