'use client'

import { useState } from 'react'

interface CopyButtonProps {
  text: string
  className?: string
  children: React.ReactNode
  disabled?: boolean
}

export default function CopyButton({ text, className, children, disabled = false }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (disabled) return
    
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
      disabled={disabled}
    >
      {copied ? 'Copied!' : children}
    </button>
  )
} 