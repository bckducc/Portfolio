import { Component } from 'react'
import { ExperienceSection } from './ExperienceSection'
import { FeaturedProjectsSection } from './FeaturedProjectsSection'
import { HeroSection } from './HeroSection'
import { SkillsSection } from './SkillsSection'

export class HomeScene extends Component {
  render() {
    return (
      <div className="scene scene--home">
        <HeroSection />
        <FeaturedProjectsSection />
        <ExperienceSection />
        <SkillsSection />
      </div>
    )
  }
}
