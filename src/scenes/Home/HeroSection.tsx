import { Col, Flex, Row, Typography } from 'antd'
import { FacebookFilled, GithubFilled } from '@ant-design/icons'
import { Component } from 'react'
import { Section } from '../../components/Section'

const { Paragraph, Text, Title } = Typography

export class HeroSection extends Component {
  render() {
    return (
      <Section className="hero">
        <Row gutter={[48, 32]} align="middle">
          <Col xs={24} md={14}>
            <Title level={1} className="hero__title">
              <span className="hero__greeting">Anh Duc</span>
            </Title>
            <Text className="hero__role">Software Engineer / Content Creator</Text>
            <Paragraph className="hero__description">
              I love building useful digital products and sharing ideas and technological knowledge through creative content.
            </Paragraph>
            <Flex className="hero__socials" align="center" gap={12}>
              <a
                className="hero__social-link"
                href="https://www.facebook.com/bckducc"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FacebookFilled aria-hidden="true" />
              </a>
              <a
                className="hero__social-link"
                href="https://github.com/bckducc"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubFilled aria-hidden="true" />
              </a>
            </Flex>
          </Col>

          <Col xs={24} md={10}>
            <img className="hero__photo" src="/logo_header.png" alt="View About Detail" />
          </Col>
        </Row>
      </Section>
    )
  }
}
