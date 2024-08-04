import { Icons } from "@/components";
import Container from "@/components/global/Container";
import Wrapper from "@/components/global/Wrapper";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { perks } from "@/constants";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
    return (
        <section>
            <Wrapper>
                <Container>
                <div className="flex flex-col items-center justify-center py-16 ">
                     <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                        {/* effect ✨ */}
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                                <Image src="/icons/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
                                Introducing Luffy AI
                                <ChevronRight className="w-4 h-4" />
                            </span>
                        </button>
                </div>
                 
                 <div className="flex flex-col items-center justify-center py-16 w-full">
                    <h1 className="text-4xl md:text-6xl font-semibold leading-snug text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 ">Build your next idea and ship your dream site</h1>
                    <p className="text-foreground/80 text-center mt-6 text-base md:text-lg">Zero code, maximum speed. Make professional sites easy, fast and fun while delivering best-in-class SEO, performance.</p>

                    <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                        <Link href="#" className=" flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none ">
                        <p className="text-sm  text-center text-foreground md:text-base font-medium pl-4 pr-4 lg:pr-0">✨{" "} Start building your dream website now!!</p>
                       <Button className="rounded-full hidden lg:flex border border-foreground/20">Get started <ArrowRight className="w-4 h-4 ml-1"/></Button>
                        </Link>
                       
                    </div>

                    <div className="relative flex items-center py-10 md:py-20 w-full">
                        {/* effect 🎁 */}
                    <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
                        <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                        <Image  
                        src="/assets/dashboard.svg"
                        alt="banner image"
                        width={1200}
                        height={1200}
                        quality={100}
                        className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"/>
                        {/* effect✨ */}
                        <BorderBeam size={250} duration={12} delay={9}/>
                        </div>
                    </div>
                 </div>
                </Container>
            </Wrapper>

            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                  <div className="max-w-md mx-auto text-start md:text-center">
                    <SectionBadge title="the Process"/>
                    <h2 className="font-semibold text-3xl lg:text-4xl mt-4">Three steps to build your dream website</h2>
                    <p className="text-muted-foreground mt-4">Turn your vision into reality in just 3 simple steps</p>
                  </div>
                </Container>

                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-none first:border-gray-900 ">
                            {perks.map((perk)=>(
                            // already a grid , no need additional css here 
                                <div key={perk.title}className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
                                    <div className="flex items-center justify-center">
                                        <perk.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="mt-4 text-lg font-medium">{perk.title}</h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">{perk.info}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>

            <Wrapper>
            <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
            <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
              <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Features" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Discover our powerful features
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Astra offers a range of features to help you build a stunning website in no time
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex items-center justify-center mx-auto mt-8">
                        <Icons.feature className="w-auto h-80" />
                    </div>
                </Container>
            </Wrapper>
        </section>
    )
};

export default HomePage;
