import { Component } from 'react'
import { Section } from '../../components/Section'
import { SectionHeading } from '../../components/SectionHeading'

export class ExperienceSection extends Component {
  render() {
    return (
      <Section className="experience">
        <SectionHeading title="Experience." />
      </Section>
    )
  }
}
