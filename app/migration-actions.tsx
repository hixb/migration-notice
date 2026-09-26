'use client'

import { Button, buttonVariants } from '@heroui/react/button'
import { Link } from '@heroui/react/link'
import { useState } from 'react'
import { Icon } from './icons'

export function MigrationActions({ url }: { url: string }) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle')
  const displayUrl = new URL(url).host

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(url)
      setCopyState('copied')
    }
    catch {
      setCopyState('error')
    }
  }

  return (
    <div className="migration-actions">
      <div className="destination-row">
        <div className="destination-details">
          <span className="destination-label">新地址</span>
          <span className="destination-url" translate="no">{displayUrl}</span>
        </div>
        <Button
          aria-label={copyState === 'copied' ? '新地址已复制，点击再次复制' : '复制新地址'}
          className="copy-button"
          isIconOnly
          onPress={copyAddress}
          variant="ghost"
        >
          <Icon name={copyState === 'copied' ? 'check' : 'copy'} />
        </Button>
      </div>

      <Link className={buttonVariants({ className: 'visit-button', size: 'lg', variant: 'primary' })} href={url}>
        前往新网站
        <Icon name="arrow" />
      </Link>

      <p className={`bookmark-note${copyState === 'error' ? ' copy-error' : ''}`}>
        <span aria-live="polite" role="status">
          {copyState === 'error'
            ? '复制未成功，请长按或选中新地址进行复制。'
            : copyState === 'copied'
              ? '新地址已复制。'
              : '建议更新收藏夹，方便下次访问。'}
        </span>
      </p>
    </div>
  )
}
