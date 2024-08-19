
import Hero from "@/components/main/Hero";
import Process from "@/components/main/Process";
import Feature from "@/components/main/Feature";
import Pricing from "@/components/main/Pricing";
import Newsletter from "@/components/main/Newsletter";

const HomePage = () => {
    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
           
            <Hero/>
            <Process/>
            <Feature/>
            <Pricing/>
            <Newsletter/>

            
        </section>
    )
};

export default HomePage;
