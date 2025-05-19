import React from 'react'
import LearnMoreSection from '@/components/LearnMoreSection'
import HeaderSection from '@/components/HeaderSection'
import ServiceSection from '@/components/ServiceSection'
import SectionContainer from '@/components/SectionContainer'

export default function ElasticMainPage() {
  return (
    <React.Fragment>
      <SectionContainer>
        {/* Video Background */}
        <div className="absolute inset-0 right-0 z-[-1] overflow-hidden">
          <video className="h-[80vh] w-[100vw] object-cover" autoPlay muted loop playsInline>
            <source src="/videos/upper-background.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay to improve text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>
        <HeaderSection />
        <br />
      </SectionContainer>
      <section className="mt-10 flex flex-col items-center justify-center text-center">
        <LearnMoreSection />
      </section>
      <ServiceSection />
      <br />
    </React.Fragment>
  )
}
