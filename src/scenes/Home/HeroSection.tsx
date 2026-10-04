import { Col, Flex, Row, Typography } from 'antd'
import { Component } from 'react'
import { ImagePlaceholder } from '../../components/ImagePlaceholder'
import { LinkButton } from '../../components/LinkButton'
import { Section } from '../../components/Section'
import { ROUTES } from '../../lib/appConfig'

const { Title } = Typography

export class HeroSection extends Component {
  render() {
    return (
      <Section className="hero">
        <Row gutter={[48, 32]} align="middle">
          <Col xs={24} md={14}>
            <Title level={1} className="hero__title">
              <span className="hero__greeting">Portfolio</span>
            </Title>
            <Flex className="hero__actions" wrap gap={12}>
              <LinkButton type="primary" size="large" to={ROUTES.contact}>
                Get In Touch
              </LinkButton>
              <LinkButton size="large" to={ROUTES.projects}>
                Browse Projects
              </LinkButton>
            </Flex>
          </Col>

          <Col xs={24} md={10}>
            <ImagePlaceholder className="hero__photo" ratio="1 / 1" label="Profile image" />
          </Col>
        </Row>
      </Section>
    )
  }
}
