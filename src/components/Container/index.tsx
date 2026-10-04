import { Component, type ElementType, type ReactNode } from 'react'

type ContainerProps = {
  as?: ElementType
  className?: string
  children: ReactNode
}

export class Container extends Component<ContainerProps> {
  render() {
    const { as: Tag = 'div', className, children } = this.props
    return <Tag className={['container', className].filter(Boolean).join(' ')}>{children}</Tag>
  }
}
