import React from 'react'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import LearnMoreSection from '@/components/LearnMoreSection'
import HeaderSection from '@/components/HeaderSection'
import ServiceSection from '@/components/ServiceSection'
import SectionContainer from '@/components/SectionContainer'

export default function ElasticMainPage() {
  return (
    <React.Fragment>
      <SectionContainer>
        <AnimatedBackground />
        <HeaderSection />
        <br />
        <section className="mt-10 flex flex-col items-center justify-center text-center">
          <LearnMoreSection />
        </section>
      </SectionContainer>
      <ServiceSection />
      <br />
    </React.Fragment>
  )
}
