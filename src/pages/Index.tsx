import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Products from "@/components/Products";
import Toolchain from "@/components/Toolchain";
import Education from "@/components/Education";
import FieldWork from "@/components/FieldWork";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <Hero />
      <Experience />
      <Products />
      <Toolchain />
      <Education />
      <FieldWork />
    </main>
    <Footer />
  </div>
);

export default Index;
