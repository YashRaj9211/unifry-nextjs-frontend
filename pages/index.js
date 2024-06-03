import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Advantages from "@/components/Advantages";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Poster from "@/components/Poster";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";   


export default function Home() {

  return (
    <div className={`px-6 py-6 overflow-hidden font-clash md:px-36 max-w-[1440px] mx-auto`}>
      <Navbar/>
      <Hero/>
      <Features/>
      <Advantages/>
      <Testimonial/>
      <FAQ/>
      <Poster/>
      <Footer/>
    </div>
  );
}
