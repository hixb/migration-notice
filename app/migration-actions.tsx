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
    <div className="mt-6 max-[650px]:mt-5">
      <div className="flex min-h-20 items-center justify-between gap-3 rounded-[11px] border border-[var(--border)] bg-[var(--surface)] px-3.5 py-3.5 pl-5 text-left max-[650px]:py-2.5">
        <div className="flex min-w-0 flex-col gap-1">
          <span className="text-xs leading-[1.5] text-[var(--muted)]">新地址</span>
          <span className="text-xl font-medium leading-[1.4] tracking-[-0.35px] wrap-anywhere" translate="no">{displayUrl}</span>
        </div>
        <Button
          aria-label={copyState === 'copied' ? '新地址已复制，点击再次复制' : '复制新地址'}
          className="h-11 w-11 shrink-0 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)]"
          isIconOnly
          onPress={copyAddress}
          variant="ghost"
        >
          <Icon className="h-[18px] w-[18px]" name={copyState === 'copied' ? 'check' : 'copy'} />
        </Button>
      </div>

      <Link className={buttonVariants({ className: 'group relative mt-3 flex h-[52px] w-full justify-center gap-3 text-[15px] font-[550] no-underline', size: 'lg', variant: 'primary' })} href={url}>
        前往新网站
        <Icon className="h-[19px] w-[19px] transition-transform duration-150 group-hover:translate-x-[3px]" name="arrow" />
      </Link>
    </div>
  )
}
