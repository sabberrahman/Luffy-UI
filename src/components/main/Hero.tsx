import Image from 'next/image'
import React from 'react'
import { BorderBeam } from '../ui/border-beam'
import Wrapper from '../global/Wrapper'
import Container from '../global/Container'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div>
          <Wrapper> 
                {/* boxLine Effect */}
                <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />
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
                        {/* effect bg-purple🎁 */}
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
    </div>
  )
}

export default Hero