import bibleData from '@/data/bible.json'
import type { BibleData } from '@/types/bible'

export interface Verse {
  bookName: string
  bookSlug: string
  chapterNumber: number
  verseNumber: number
  verseText: string
}

export function getCurrentDateKey(): string {
  // Get current date in US Eastern Time (EST/EDT)
  const now = new Date()
  const usDate = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}))
  return usDate.toDateString()
}

export function getTodaysVerse(): Verse {
  // Use the date as a seed for consistent verse generation
  const dateKey = getCurrentDateKey()
  const seed = dateKey.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  
  const data = bibleData as BibleData
  const books = Object.keys(data)
  
  // Use seed to select book
  const bookKey = books[seed % books.length]
  const book = data[bookKey]
  
  // Use seed to select chapter
  const chapterIndex = (seed * 2) % book.chapters.length
  const chapter = book.chapters[chapterIndex]
  
  // Use seed to select verse
  const verseIndex = (seed * 3) % chapter.length
  const verseText = chapter[verseIndex]
  
  return {
    bookName: book.name,
    bookSlug: bookKey,
    chapterNumber: chapterIndex + 1,
    verseNumber: verseIndex + 1,
    verseText
  }
} 