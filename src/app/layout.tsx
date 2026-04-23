import type { ReactNode } from 'react'

// html/body are in [lang]/layout.tsx so the lang attribute is set per locale
export default function RootLayout({ children }: { children: ReactNode }): ReactNode {
  return children
}
