import { Col, Row, Typography } from 'antd'
import { Component } from 'react'
import { ImagePlaceholder } from '../../components/ImagePlaceholder'
import { Section } from '../../components/Section'

const { Title } = Typography

export class StackSection extends Component {
  render() {
    return (
      <Section className="stack">
        <Row gutter={[48, 32]}>
          <Col xs={24} md={12}>
            <Title level={4} className="stack__title">
              My Stack.
            </Title>
          </Col>

          <Col xs={24} md={12}>
            <Title level={4} className="stack__title">
              My Special Place.
            </Title>
            <ImagePlaceholder className="stack__image" ratio="4 / 3" label="My special place" />
          </Col>
        </Row>
      </Section>
    )
  }
}
