import { Component } from 'react'
import { Section } from '../Section'
import { SectionHeading } from '../SectionHeading'

type StorySectionProps = {
  paragraphs: string[]
}

/** "My Story" — dùng chung ở Home và About. */
export class StorySection extends Component<StorySectionProps> {
  render() {
    return (
      <Section className="story">
        <SectionHeading title="My Story." />
        <div className="story__body">
          {this.props.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </Section>
    )
  }
}
