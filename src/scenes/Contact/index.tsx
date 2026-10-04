import { Col, Row, Typography } from 'antd'
import { Component } from 'react'
import { ImagePlaceholder } from '../../components/ImagePlaceholder'
import { Section } from '../../components/Section'
import { ContactForm } from './ContactForm'

const { Paragraph, Title } = Typography

/** Contact: thông tin liên hệ + ảnh (trái), form (phải). */
export class ContactScene extends Component {
  render() {
    return (
      <div className="scene scene--contact">
        <Section className="contact">
          <Row gutter={[48, 32]}>
            <Col xs={24} md={12}>
              <Title level={1} className="contact__title">
                Get In Touch.
              </Title>
              <Paragraph className="contact__description">
                Get in touch using the form.
              </Paragraph>
              <ImagePlaceholder className="contact__photo" ratio="4 / 3" label="Contact image" />
            </Col>

            <Col xs={24} md={12}>
              <ContactForm />
            </Col>
          </Row>
        </Section>
      </div>
    )
  }
}
