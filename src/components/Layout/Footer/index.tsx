import { Flex } from 'antd'
import { Component } from 'react'
import { Container } from '../../Container'
import { Link } from '../../Router/Link'
import { NAV_ITEMS, ROUTES } from '../../../lib/appConfig'

export class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <Container>
          <Flex className="app-footer__top" justify="space-between" align="center" wrap gap={24}>
            <Link className="app-footer__brand" to={ROUTES.home} aria-label="BCKDUCC — về đầu trang">
              <img src="/logo_header.png" alt="BCKDUCC" width="96" height="53" />
            </Link>

            <nav aria-label="Điều hướng chân trang">
              <ul className="app-footer__list list-reset">
                {NAV_ITEMS.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Flex>

          <Flex className="app-footer__bottom" justify="space-between" wrap gap={8}>
            <span>Designed by BCKDUCC</span>
            <span>© {new Date().getFullYear()} BCKDUCC. All rights reserved.</span>
          </Flex>
        </Container>
      </footer>
    )
  }
}
