import { Section } from "@/components/common/Section";
import { FOMOGEN_DATA } from "@/constants/fomogen-data";
import { ShoppingCart, Check } from "lucide-react";

export function LivePreviewSection() {
  return (
    <Section className="relative overflow-hidden bg-[#FAFBFD] py-24 md:py-32">
      {/* Dynamic Background Effects - Green Theme */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[1000px] w-[1400px] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #21C45D 0%, #4ADE80 30%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Notification Preview Stack */}
              <div className="animate-float relative z-10">
                <div className="glass-elite rounded-[2rem] border border-white/40 bg-white/60 p-6 shadow-2xl backdrop-blur-xl md:p-8">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600">
                      <ShoppingCart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {FOMOGEN_DATA.livePreview.notification.name}
                      </p>
                      <p className="text-xs font-medium text-slate-500">
                        {FOMOGEN_DATA.livePreview.notification.action}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-green-50/50 p-4">
                    <p className="text-sm font-bold text-green-700">
                      {FOMOGEN_DATA.livePreview.notification.product}
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping Progress Bar Preview */}
              <div className="animate-float-delayed relative z-20 -mt-8 ml-8 md:ml-16">
                <div className="glass-elite rounded-[2rem] border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl md:p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-widest text-green-600 uppercase">
                      Shipping Goal
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {FOMOGEN_DATA.livePreview.progress.current}%
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                      style={{
                        width: `${FOMOGEN_DATA.livePreview.progress.current}%`,
                      }}
                    />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed font-bold text-slate-600 italic">
                    &quot;{FOMOGEN_DATA.livePreview.progress.message}&quot;
                  </p>
                </div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-green-100/50 blur-3xl" />
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-teal-100/50 blur-3xl" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="mb-6 block text-[10px] font-black tracking-[0.2em] text-green-600 uppercase">
              Live Systems
            </span>
            <h2 className="text-4xl leading-[0.95] font-bold tracking-tight text-slate-900 md:text-5xl lg:text-7xl">
              Buyers Instantly.
              <br />
              <span className="text-slate-300">Trust Effortlessly.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed font-medium text-slate-500 md:text-xl">
              FomoGen integrates directly with your Shopify engine to serve
              real-time proof. Turn passive browsing into active purchasing
              through mathematical influence.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                "zero configuration required",
                "automatic theme detection",
                "real-time sales synchronization",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm font-bold tracking-widest text-slate-700 uppercase"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <Check className="h-3 w-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
