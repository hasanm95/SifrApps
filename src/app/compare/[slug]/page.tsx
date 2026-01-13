import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar, Footer } from "@/components/common";
import { getComparisonBySlug, comparisons } from "@/lib/compare";
import { CompareHero } from "@/components/compare/CompareHero";
import { ComparisonMatrix } from "@/components/compare/ComparisonMatrix";
import { TechnicalDebt } from "@/components/compare/TechnicalDebt";
import { ValueHighlights } from "@/components/compare/ValueHighlights";
import { CompareTestimonial } from "@/components/compare/CompareTestimonial";
import { CompareFooter } from "@/components/compare/CompareFooter";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getComparisonBySlug(slug);

  if (!data) return { title: "Comparison Not Found | SifrApps" };

  return {
    title: `${data.productName} vs ${data.competitorName} | SifrApps`,
    description: `Why elite teams are switching from ${data.competitorName} to ${data.productName}. A logic-first comparison.`,
    openGraph: {
      title: `${data.productName} vs ${data.competitorName}`,
      description: data.heroSubheadline,
      type: "website",
    },
  };
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getComparisonBySlug(slug);

  if (!data) notFound();

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        variant="light"
        customBranding={
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black tracking-widest text-emerald-600 uppercase">
              {data.productName}
            </span>
            <span className="text-[10px] font-medium text-slate-400">vs</span>
            <span className="text-[10px] font-black tracking-widest text-slate-900 uppercase">
              {data.competitorName}
            </span>
          </div>
        }
        customCTA={
          <Button className="h-9 rounded-lg bg-slate-900 px-6 text-[10px] font-bold tracking-widest text-white uppercase hover:bg-slate-800">
            Install Now
          </Button>
        }
      />

      <main>
        <CompareHero
          headline={data.heroHeadline}
          subheadline={data.heroSubheadline}
        />

        <ComparisonMatrix
          competitorName={data.competitorName}
          productName={data.productName}
          features={data.matrix}
        />

        <TechnicalDebt legacy={data.legacyWay} sifr={data.sifrWay} />

        <ValueHighlights />

        <CompareTestimonial
          quote={data.testimonial.quote}
          author={data.testimonial.author}
          role={data.testimonial.role}
        />

        <CompareFooter />
      </main>

      <Footer variant="light" />
    </div>
  );
}

export async function generateStaticParams() {
  return comparisons.map((c) => ({
    slug: c.slug,
  }));
}
