import React from 'react'
import Wrapper from '../global/Wrapper'
import Container from '../global/Container'
import SectionBadge from '../ui/section-badge'
import { perks } from '@/constants'

function Process() {
  return (
    <div>
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
    </div>
  )
}

export default Process