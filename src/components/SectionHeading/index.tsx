import { Typography } from 'antd'
import { Component } from 'react'

const { Title } = Typography

type SectionHeadingProps = { title: string }

export class SectionHeading extends Component<SectionHeadingProps> {
  render() {
    return (
      <Title level={2} className="section-heading">
        {this.props.title}
      </Title>
    )
  }
}
