import { Navbar, Footer } from "@/components/common";
import {
  Hero,
  FoundersMoat,
  FomoGenFeatured,
  ProductGrid,
  SolutionsSection,
  TechnicalFAQ,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FoundersMoat />
      <FomoGenFeatured />
      <ProductGrid />
      <SolutionsSection />
      <TechnicalFAQ />
      <Footer />
    </>
  );
}
