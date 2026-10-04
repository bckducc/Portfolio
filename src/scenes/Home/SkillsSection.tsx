import { Component } from 'react'
import { Section } from '../../components/Section'
import { SectionHeading } from '../../components/SectionHeading'

export class SkillsSection extends Component {
  render() {
    return (
      <Section className="skills">
        <SectionHeading title="Skills." />
      </Section>
    )
  }
}
