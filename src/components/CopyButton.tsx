'use client'

import { useState } from 'react'

interface CopyButtonProps {
  text: string
  className?: string
  children: React.ReactNode
}

export default function CopyButton({ text, className, children }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={className}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? 'Copied!' : children}
    </button>
  )
} 