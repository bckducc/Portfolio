import { Typography } from 'antd'
import { Component } from 'react'
import { Section } from '../Section'

const { Paragraph, Title } = Typography

type PageHeadingProps = {
  title: string
  subtitle?: string
}

/** Tiêu đề đầu trang (h1 + mô tả). */
export class PageHeading extends Component<PageHeadingProps> {
  render() {
    const { title, subtitle } = this.props
    return (
      <Section className="page-heading">
        <Title level={1} className="page-heading__title">
          {title}
        </Title>
        {subtitle && <Paragraph className="page-heading__subtitle">{subtitle}</Paragraph>}
      </Section>
    )
  }
}
