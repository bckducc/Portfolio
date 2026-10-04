import { Component, type AnchorHTMLAttributes, type MouseEvent } from 'react'
import { RouterContext } from './hooks'
import { isInternalPath, isPlainLeftClick } from './utils'

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string
}

/** Thay cho <a> khi điều hướng nội bộ. Link đang active có class "is-active". */
export class Link extends Component<LinkProps> {
  static contextType = RouterContext

  declare context: React.ContextType<typeof RouterContext>

  handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const { to, onClick, target } = this.props
    onClick?.(e)
    if (!isInternalPath(to) || target === '_blank' || !isPlainLeftClick(e)) return
    e.preventDefault()
    this.context?.navigate(to)
  }

  render() {
    const { to, className, children, ...rest } = this.props
    const pathname = this.context?.pathname ?? ''
    const active = to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(`${to}/`)

    return (
      <a
        {...rest}
        href={to}
        className={[className, active ? 'is-active' : ''].filter(Boolean).join(' ')}
        aria-current={active ? 'page' : undefined}
        onClick={this.handleClick}
      >
        {children}
      </a>
    )
  }
}
