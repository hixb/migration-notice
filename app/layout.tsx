import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { siteConfig } from './site-config'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: `${siteConfig.name}已迁移`,
  description: `${siteConfig.name}已迁移至 ${siteConfig.url}，原有数据完整保留。服务器与数据库均已从海外迁至国内，预计访问速度提升约 80%。`,
  icons: { icon: '/brand-icon.svg' },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      className={`${geistSans.variable} h-full antialiased`}
      lang="zh-CN"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
