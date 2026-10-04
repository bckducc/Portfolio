import { Button, Form, Input, type FormProps } from 'antd'
import { Component } from 'react'

export type ContactFormValues = {
  name: string
  email: string
  message: string
}

type ContactFormProps = {
  onSubmit?: (values: ContactFormValues) => void
}

export class ContactForm extends Component<ContactFormProps> {
  render() {
    const onFinish: FormProps<ContactFormValues>['onFinish'] = (values) => {
      this.props.onSubmit?.(values)
    }

    return (
      <Form<ContactFormValues> className="contact-form" layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="message" label="Message" rules={[{ required: true }]}>
          <Input.TextArea rows={5} />
        </Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Send message
        </Button>
      </Form>
    )
  }
}
