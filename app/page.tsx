import { Icon } from './icons'
import { MigrationActions } from './migration-actions'
import { siteConfig } from './site-config'

export default function Home() {
  return (
    <main className="notice-page">
      <section aria-labelledby="notice-title" className="migration-notice">
        <div aria-hidden="true" className="migration-illustration">
          <div className="old-window">
            <div className="window-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="old-window-content">
              <Icon name="globe" />
              <div className="skeleton-line" />
              <div className="skeleton-line short" />
            </div>
          </div>

          <svg className="migration-trail" fill="none" viewBox="0 0 260 156">
            <path d="M40 92C11 127 46 152 98 133" stroke="currentColor" strokeDasharray="3 5" strokeLinecap="round" strokeWidth="1.3" />
            <path d="m91 129 8 3-5 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          </svg>

          <div className="new-window">
            <div className="window-bar">
              <span />
              <span />
              <span />
              <span className="mini-address-bar" />
            </div>
            <div className="new-window-content">
              <span className="illustration-monogram">AI</span>
              <span className="illustration-domain">{new URL(siteConfig.url).host}</span>
              <div className="illustration-line" />
            </div>
            <span className="arrival-check"><Icon name="check" /></span>
          </div>

          <div className="moving-arrow"><Icon name="arrowUp" /></div>
        </div>

        <h1 id="notice-title">
          {siteConfig.name}
          <span className="heading-status">已迁移</span>
        </h1>
        <p className="notice-description">换了新域名，原有数据都在。</p>

        <div aria-label="迁移说明" className="migration-details">
          <p className="migration-speed">
            <span>预计访问速度提升</span>
            <strong className="speed-estimate">
              <span>约</span>
              {' '}
              75
              <span>%</span>
            </strong>
          </p>
          <p className="migration-location">服务器与数据库均已从海外迁至国内。</p>
        </div>

        <MigrationActions url={siteConfig.url} />
      </section>
    </main>
  )
}
