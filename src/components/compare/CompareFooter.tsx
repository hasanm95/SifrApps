import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";

export function CompareFooter() {
  return (
    <Section className="border-t border-slate-100 bg-white py-32 text-center">
      <div className="section-container">
        <h2 className="text-display mb-12 text-slate-900">
          Experience Logical Superiority.
        </h2>
        <Button className="h-20 rounded-2xl bg-slate-900 px-12 text-2xl font-black text-white hover:bg-slate-800">
          Install Now — Free of Charge
        </Button>
      </div>
    </Section>
  );
}
