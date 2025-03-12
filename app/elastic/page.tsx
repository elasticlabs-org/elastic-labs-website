import React from 'react'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import LearnMoreSection from '@/components/LearnMoreSection'
import HeaderSection from '@/components/HeaderSection'

export default function ElasticMainPage() {
  return (
    <React.Fragment>
      <AnimatedBackground />
      <HeaderSection />
      <br />
      <section className="mt-10 flex flex-col items-center justify-center text-center">
        <LearnMoreSection />
      </section>
      <br />
    </React.Fragment>
  )
}
