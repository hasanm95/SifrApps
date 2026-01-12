import { Navbar, Footer } from "@/components/common";
import {
  Hero,
  FoundersMoat,
  ProductGrid,
  SolutionsSection,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FoundersMoat />
      <ProductGrid />
      <SolutionsSection />
      <Footer />
    </>
  );
}
