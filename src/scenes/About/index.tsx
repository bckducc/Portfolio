import { Component } from 'react'
import { PageHeading } from '../../components/PageHeading'
import { ExperienceTimeline } from './ExperienceTimeline'
import { StackSection } from './StackSection'

export class AboutScene extends Component {
  render() {
    return (
      <div className="scene scene--about">
        <PageHeading title="About me." />
        <StackSection />
        <ExperienceTimeline />
      </div>
    )
  }
}
