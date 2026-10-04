import { Component } from 'react'
import { Section } from '../../components/Section'
import { SectionHeading } from '../../components/SectionHeading'

export class ExperienceTimeline extends Component {
  render() {
    return (
      <Section className="timeline">
        <SectionHeading title="My Experience." />
      </Section>
    )
  }
}
