import Banner from "@/components/homepage/Banner";
import Comprehensive from "@/components/homepage/Comprehensive";
import Form from "@/components/homepage/Form";
import Services from "@/components/homepage/Services";
import Whychoose from "@/components/homepage/Whychoose";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="sm:hidden px-5 mt-5">
        <Form />
      </div>
      <Whychoose />
      <Services />
      <Comprehensive />
    </div>
  );
}
