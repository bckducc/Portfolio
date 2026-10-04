import { Component } from 'react'
import { Button, Flex } from 'antd'
import { Container } from '../../Container'
import { Link } from '../../Router/Link'
import { NAV_ITEMS, ROUTES } from '../../../lib/appConfig'

type HeaderState = {
  open: boolean
}

export class Header extends Component<Record<string, never>, HeaderState> {
  state: HeaderState = { open: false }

  closeMenu = () => this.setState({ open: false })

  toggleMenu = () => this.setState(({ open }) => ({ open: !open }))

  render() {
    const { open } = this.state

    return (
      <header className={['app-header', open ? 'app-header--open' : ''].filter(Boolean).join(' ')}>
        <Container>
          <Flex className="app-header__inner" align="center" justify="space-between" wrap gap={16}>
            <Link className="app-header__brand" to={ROUTES.home} onClick={this.closeMenu}>
              <img
                src="/logo_header.png"
                alt="BCKDUCC"
                width="96"
                height="53"
                style={{ display: 'block', width: 96, height: 53, objectFit: 'contain' }}
              />
            </Link>

            <Button
              className="app-header__toggle"
              aria-expanded={open}
              aria-controls="main-nav"
              onClick={this.toggleMenu}
            >
              Menu
            </Button>

            <nav id="main-nav" className="app-header__nav" aria-label="Điều hướng chính">
              <ul className="app-header__list list-reset">
                {NAV_ITEMS.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={item.cta ? 'app-header__link app-header__link--cta' : 'app-header__link'}
                      onClick={this.closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Flex>
        </Container>
      </header>
    )
  }
}
