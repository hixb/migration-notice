# AI 助手 · 迁移通知

使用 Next.js 16、React 19、HeroUI v3 和 Tailwind CSS v4 构建的中文迁移通知页。

## 本地开发

```bash
pnpm install
pnpm dev
```

打开 http://localhost:3000 查看页面。

## 修改通知

- `app/site-config.ts`：项目名称和新站地址，目前为「AI 助手」和 `https://hellozxb.com`。
- `app/page.tsx`：迁移文案和装饰插画。
- `app/globals.css`：配色、布局、响应式样式和减少动态效果的适配。
- `app/migration-actions.tsx`：访问新站、复制地址及操作反馈。

页面不会自动跳转。访问按钮直接打开新地址；复制地址需要 HTTPS 或 localhost，复制失败时会提示手动复制。

## 检查与构建

```bash
pnpm lint
pnpm build
pnpm start
```
