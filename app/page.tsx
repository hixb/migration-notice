import { Icon } from './icons'
import { MigrationActions } from './migration-actions'
import { siteConfig } from './site-config'

export default function Home() {
  return (
    <main className="grid min-h-svh place-items-center px-[max(24px,env(safe-area-inset-right))] pb-[max(56px,env(safe-area-inset-bottom))] pl-[max(24px,env(safe-area-inset-left))] pt-[max(40px,env(safe-area-inset-top))] max-[480px]:pb-[max(28px,env(safe-area-inset-bottom))] max-[480px]:pt-[max(28px,env(safe-area-inset-top))] max-[650px]:pb-[max(20px,env(safe-area-inset-bottom))] max-[650px]:pt-[max(20px,env(safe-area-inset-top))]">
      <section aria-labelledby="notice-title" className="w-full max-w-95 text-center">
        <div aria-hidden="true" className="relative mx-auto h-39 w-65 text-left">
          <div className="absolute left-4.25 top-2.25 h-25.5 w-30.25 rotate-[-10deg] overflow-hidden rounded-[9px] border border-[oklch(0.86_0.008_145)] bg-[oklch(0.978_0.003_140)]">
            <div className="flex h-5.5 items-center gap-0.75 border-b border-border px-2.25">
              <span className="size-0.75 rounded-full bg-[oklch(0.75_0.016_155)]" />
              <span className="size-0.75 rounded-full bg-[oklch(0.75_0.016_155)]" />
              <span className="size-0.75 rounded-full bg-[oklch(0.75_0.016_155)]" />
            </div>
            <div className="flex flex-col items-center gap-1.75 pt-3.5 text-[oklch(0.72_0.012_150)]">
              <Icon className="h-5.25 w-5.25" name="globe" />
              <div className="h-0.75 w-10.25 rounded-md bg-[oklch(0.885_0.007_145)]" />
              <div className="-mt-0.5 h-0.75 w-7 rounded-md bg-[oklch(0.885_0.007_145)]" />
            </div>
          </div>

          <svg className="absolute inset-0 h-full w-full text-[oklch(0.72_0.03_160)]" fill="none" viewBox="0 0 260 156">
            <path d="M40 92C11 127 46 152 98 133" stroke="currentColor" strokeDasharray="3 5" strokeLinecap="round" strokeWidth="1.3" />
            <path d="m91 129 8 3-5 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          </svg>

          <div className="absolute right-3 top-[36px] h-[111px] w-[143px] rotate-[7deg] rounded-[9px] border border-[oklch(0.78_0.035_155)] bg-[var(--surface)] shadow-[0_9px_20px_-10px_oklch(0.35_0.035_155_/_0.25)]">
            <div className="flex h-[22px] items-center gap-[3px] rounded-t-[8px] border-b border-[var(--border)] bg-[var(--accent-soft)] px-[9px]">
              <span className="size-[3px] rounded-full bg-[oklch(0.75_0.016_155)]" />
              <span className="size-[3px] rounded-full bg-[oklch(0.75_0.016_155)]" />
              <span className="size-[3px] rounded-full bg-[oklch(0.75_0.016_155)]" />
              <span className="ml-[7px] h-2.5 w-[67px] rounded-[3px] border border-[oklch(0.88_0.02_155)] bg-[var(--surface)]" />
            </div>
            <div className="flex flex-col items-center pt-3">
              <span className="grid size-[30px] place-items-center rounded-lg bg-[var(--accent-soft)] text-[15px] font-semibold tracking-[-0.75px] text-[var(--accent)]">AI</span>
              <span className="mt-1.5 text-[9px] font-medium text-[var(--accent)]">{new URL(siteConfig.url).host}</span>
              <div className="mt-1.5 h-[3px] w-[27px] rounded-[3px] bg-[var(--accent-soft)]" />
            </div>
            <span className="absolute bottom-[-6px] right-[-9px] grid size-6 place-items-center rounded-full border-[3px] border-[var(--background)] bg-[var(--accent)] text-[var(--accent-foreground)]"><Icon className="h-3 w-3" name="check" /></span>
          </div>

          <div className="absolute left-[108px] top-[15px] grid size-[43px] rotate-[-5deg] place-items-center rounded-[14px] border-4 border-[var(--background)] bg-[var(--accent)] text-[var(--accent-foreground)]"><Icon className="h-[21px] w-[21px]" name="arrowUp" /></div>
        </div>

        <h1 className="mb-3 mt-8 text-[36px] font-[650] leading-[1.4] tracking-[-1.2px] text-balance max-[480px]:mt-[26px] max-[480px]:text-[32px] max-[480px]:tracking-[-1px] max-[650px]:mb-2 max-[650px]:mt-4" id="notice-title">
          {siteConfig.name}
          <span className="ml-2 text-[var(--accent)] max-[480px]:ml-1.5">已迁移</span>
        </h1>
        <p className="m-0 text-base leading-[1.75] text-[var(--muted)] max-[480px]:text-[15px] max-[650px]:text-sm">换了新域名，原有数据都在。</p>

        <MigrationActions url={siteConfig.url} />

        <div aria-label="迁移说明" className="mt-[26px] rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-2.5 text-left max-[650px]:mt-[18px] max-[650px]:p-2">
          <ul className="m-0 list-none space-y-2 p-0">
            <li className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[var(--accent-soft)] text-[11px] font-semibold tracking-[0.04em] text-[var(--accent)]">01</span>
              <span className="min-w-0 flex-1 text-sm font-medium leading-[1.5]">页面响应提速</span>
              <strong className="flex shrink-0 items-baseline gap-1 tabular-nums text-[26px] font-[600] leading-none tracking-[-0.7px] text-[var(--accent)] max-[650px]:text-[24px]">
                <span className="text-[13px] font-[450] tracking-normal">约</span>
                <span>75</span>
                <span className="ml-0.5 text-[13px] font-[450] tracking-normal">%</span>
              </strong>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[var(--accent-soft)] text-[11px] font-semibold tracking-[0.04em] text-[var(--accent)]">02</span>
              <span className="min-w-0 flex-1 text-sm font-medium leading-[1.5]">图片生成耗时降低</span>
              <strong className="flex shrink-0 items-baseline gap-1 tabular-nums text-[26px] font-[600] leading-none tracking-[-0.7px] text-[var(--accent)] max-[650px]:text-[24px]">
                <span className="text-[13px] font-[450] tracking-normal">约</span>
                <span>63.5</span>
                <span className="ml-0.5 text-[13px] font-[450] tracking-normal">%</span>
              </strong>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[var(--accent-soft)] text-[11px] font-semibold tracking-[0.04em] text-[var(--accent)]">03</span>
              <span className="min-w-0 flex-1 text-sm font-medium leading-[1.5]">文本生成耗时降低</span>
              <strong className="flex shrink-0 items-baseline gap-1 tabular-nums text-[26px] font-semibold leading-none tracking-[-0.7px] text-[var(--accent)] max-[650px]:text-[24px]">
                <span className="text-[13px] font-[450] tracking-normal">约</span>
                <span>81.3</span>
                <span className="ml-0.5 text-[13px] font-[450] tracking-normal">%</span>
              </strong>
            </li>
          </ul>
          <p className="m-0 flex items-start gap-2 px-2.5 pb-1 pt-3 text-xs leading-[1.75] text-muted max-[650px]:px-2 max-[650px]:pt-2.5">
            <span aria-hidden="true" className="mt-1.75 size-1.5 shrink-0 rounded-full bg-accent" />
            服务器与数据库均已从海外迁至国内。
          </p>
        </div>
      </section>
    </main>
  )
}
