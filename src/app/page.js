import About from "@/components/homepage/About";
import Banner from "@/components/homepage/Banner";
import Comprehensive from "@/components/homepage/Comprehensive";
import FAQ from "@/components/homepage/FAQ";
import Form from "@/components/homepage/Form";
import Gallery from "@/components/homepage/Gallery";
import Patient_Testimonial from "@/components/homepage/Patient_Testimonial";
import Review from "@/components/homepage/Review";
import Services from "@/components/homepage/Services";
import Tagline from "@/components/homepage/Tagline";
import Whychoose from "@/components/homepage/Whychoose";
import Youtube from "@/components/homepage/Youtube";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="sm:hidden px-5 mt-5">
        <Form />
      </div>
      <About />
      <Whychoose />
      <Services />
      <Comprehensive />
      <Gallery />
      <Youtube />
      <Patient_Testimonial />
      <Review />
      <Tagline />
      <FAQ />
    </div>
  );
}
