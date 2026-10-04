import { Component } from 'react'
import { LinkButton } from '../../components/LinkButton'
import { PageHeading } from '../../components/PageHeading'
import { Section } from '../../components/Section'
import { ROUTES } from '../../lib/appConfig'

export class NotFoundScene extends Component {
  render() {
    return (
      <div className="scene scene--not-found">
        <PageHeading title="404" subtitle="Không tìm thấy trang bạn yêu cầu." />
        <Section>
          <LinkButton type="primary" to={ROUTES.home}>
            Về trang chủ
          </LinkButton>
        </Section>
      </div>
    )
  }
}
