type ImagePlaceholderProps = {
  label?: string
  ratio?: string
  className?: string
}

export class ImagePlaceholder extends Component<ImagePlaceholderProps> {
  render() {
    const { label = 'Image', ratio, className } = this.props
    return (
      <div
        className={['placeholder', className].filter(Boolean).join(' ')}
        style={ratio ? { aspectRatio: ratio } : undefined}
        role="img"
        aria-label={label}
      >
        {label}
      </div>
    )
  }
}
import { Component } from 'react'
