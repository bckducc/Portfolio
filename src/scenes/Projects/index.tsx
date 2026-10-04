import { Component } from 'react'
import { PageHeading } from '../../components/PageHeading'
import { ProjectGrid } from '../../components/ProjectGrid'
import { Section } from '../../components/Section'

export class ProjectsScene extends Component {
  render() {
    return (
      <div className="scene scene--projects">
        <PageHeading title="Projects." />
        <Section>
          <ProjectGrid projects={[]} />
        </Section>
      </div>
    )
  }
}
