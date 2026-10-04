import type { MouseEvent } from 'react'

/** Chuột trái, không phím bổ trợ → để router xử lý thay vì tải lại trang. */
export function isPlainLeftClick(e: MouseEvent<HTMLElement>) {
  return e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.defaultPrevented
}

export const isInternalPath = (to: string) => to.startsWith('/') && !to.startsWith('//')
