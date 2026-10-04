import { Col, Empty, Row } from 'antd'
import { Component } from 'react'
import type { Project } from '../ProjectCard'
import { ProjectCard } from '../ProjectCard'

type ProjectGridProps = {
  projects: Project[]
}

/** Lưới thẻ dự án: 1 cột (mobile) / 2 cột (từ md). */
export class ProjectGrid extends Component<ProjectGridProps> {
  render() {
    const { projects } = this.props
    if (projects.length === 0) {
      return <Empty description="Chưa có dự án" />
    }

    return (
      <Row className="project-grid" gutter={[24, 32]}>
        {projects.map((project) => (
          <Col key={project.slug} xs={24} md={12}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    )
  }
}
