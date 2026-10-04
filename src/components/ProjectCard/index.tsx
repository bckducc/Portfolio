import { Typography } from 'antd'
import { Component } from 'react'
import { projectPath } from '../../lib/appConfig'
import { ImagePlaceholder } from '../ImagePlaceholder'
import { Link } from '../Router/Link'

const { Paragraph, Title } = Typography

export type Project = {
  slug: string
  title: string
  description: string
}

type ProjectCardProps = { project: Project }

export class ProjectCard extends Component<ProjectCardProps> {
  render() {
    const { project } = this.props
    return (
      <article className="project-card">
        <Link to={projectPath(project.slug)} className="project-card__link">
          <ImagePlaceholder
            className="project-card__cover"
            ratio="4 / 3"
            label={`${project.title} cover`}
          />
          <Title level={3} className="project-card__title">
            {project.title}
          </Title>
          <Paragraph className="project-card__description">{project.description}</Paragraph>
        </Link>
      </article>
    )
  }
}
