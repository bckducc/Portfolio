import { Component, type ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

type MainLayoutProps = {
  children: ReactNode
}

export class MainLayout extends Component<MainLayoutProps> {
  render() {
    return (
      <div className="app-layout">
        <Header />
        <main className="app-layout__content">{this.props.children}</main>
        <Footer />
      </div>
    )
  }
}
