import { ProjectGrid } from '../../components/ProjectGrid'
import { Section } from '../../components/Section'
import { SectionHeading } from '../../components/SectionHeading'
import { Component } from 'react'

export class FeaturedProjectsSection extends Component {
  render() {
    return (
      <Section className="featured-projects">
        <SectionHeading title="Projects." />
        <ProjectGrid projects={[]} />
      </Section>
    )
  }
}
