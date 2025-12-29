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
  const [error, setError] = useState<string | null>(null)

  // Fallback copy method for older browsers or when clipboard API fails
  const fallbackCopy = (text: string): boolean => {
    try {
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      
      const successful = document.execCommand('copy')
      document.body.removeChild(textArea)
      return successful
    } catch (err) {
      console.error('Fallback copy failed:', err)
      return false
    }
  }

  const handleCopy = async () => {
    if (disabled) return
    
    setError(null)
    
    try {
      // Check if clipboard API is available and we're in a secure context
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } else {
        // Use fallback method
        const success = fallbackCopy(text)
        if (success) {
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } else {
          throw new Error('Copy operation failed')
        }
      }
    } catch (err) {
      console.error('Failed to copy text:', err)
      setError('Failed to copy. Please try selecting and copying manually.')
      setTimeout(() => setError(null), 3000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={className}
      title={error ? error : (copied ? 'Copied!' : 'Copy to clipboard')}
      disabled={disabled}
    >
      {error ? 'Copy failed' : (copied ? 'Copied!' : children)}
    </button>
  )
} 