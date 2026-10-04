import { Typography } from 'antd'
import { Component } from 'react'
import { ImagePlaceholder } from '../ImagePlaceholder'

const { Text } = Typography

type TestimonialProps = {
  quote: string
  name: string
  position: string
}

export class Testimonial extends Component<TestimonialProps> {
  render() {
    const { quote, name, position } = this.props
    return (
      <figure className="testimonial">
        <blockquote className="testimonial__quote">{quote}</blockquote>
        <figcaption className="testimonial__author">
          <ImagePlaceholder className="testimonial__avatar" ratio="1 / 1" label="Client" />
          <div>
            <Text strong className="testimonial__name">
              {name}
            </Text>
            <br />
            <Text className="testimonial__position">{position}</Text>
          </div>
        </figcaption>
      </figure>
    )
  }
}
