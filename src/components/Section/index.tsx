import { Component, type ReactNode } from 'react'
import { Container } from '../Container'

type SectionProps = {
  id?: string
  /** Class gắn lên thẻ <section> full-width — dùng để làm nền/viền sau này. */
  className?: string
  children: ReactNode
}

/** Một khối full-width, nội dung nằm trong Container. */
export class Section extends Component<SectionProps> {
  render() {
    const { id, className, children } = this.props
    return (
      <section id={id} className={['section', className].filter(Boolean).join(' ')}>
        <Container>{children}</Container>
      </section>
    )
  }
}
