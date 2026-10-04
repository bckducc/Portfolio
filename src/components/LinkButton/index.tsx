import { Button, type ButtonProps } from 'antd'
import { Component } from 'react'
import { RouterContext } from '../Router/hooks'
import { isInternalPath, isPlainLeftClick } from '../Router/utils'

type LinkButtonProps = Omit<ButtonProps, 'href' | 'onClick'> & {
  to: string
}

/** Nút antd dùng để điều hướng (router nội bộ hoặc link ngoài). */
export class LinkButton extends Component<LinkButtonProps> {
  static contextType = RouterContext

  declare context: React.ContextType<typeof RouterContext>

  handleClick: NonNullable<ButtonProps['onClick']> = (e) => {
    if (!isInternalPath(this.props.to) || !isPlainLeftClick(e)) return
    e.preventDefault()
    this.context?.navigate(this.props.to)
  }

  render() {
    const { to, children, ...rest } = this.props

    return (
      <Button {...rest} href={to} onClick={this.handleClick}>
        {children}
      </Button>
    )
  }
}
