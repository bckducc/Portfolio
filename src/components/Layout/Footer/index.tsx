import { Col, Flex, Row, Typography } from 'antd'
import { Component } from 'react'
import { Container } from '../../Container'
import { LinkButton } from '../../LinkButton'
import { Link } from '../../Router/Link'
import { APP_NAME, NAV_ITEMS, ROUTES } from '../../../lib/appConfig'

const { Title } = Typography

export class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <Container>
          <Row className="app-footer__main" gutter={[32, 32]}>
            <Col xs={12} md={6}>
              <nav aria-label="Điều hướng chân trang">
                <ul className="app-footer__list list-reset">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.to}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Col>

            <Col xs={24} md={18}>
              <div className="app-footer__cta">
                <Title level={3} className="app-footer__cta-title">
                  Interested in working together?
                </Title>
                <Flex wrap gap={12}>
                  <LinkButton type="primary" to={ROUTES.contact}>
                    Get In Touch
                  </LinkButton>
                  <LinkButton to={ROUTES.projects}>Browse Projects</LinkButton>
                </Flex>
              </div>
            </Col>
          </Row>

          <Flex className="app-footer__bottom" justify="space-between" wrap gap={8}>
            <span>© {new Date().getFullYear()} All Rights Reserved.</span>
            <span>Made by {APP_NAME}</span>
          </Flex>
        </Container>
      </footer>
    )
  }
}
