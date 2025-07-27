'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface SearchResult {
  type: 'book' | 'chapter' | 'verse' | 'text'
  title: string
  subtitle?: string
  url: string
  relevance: number
}

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Close results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
        setSelectedIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!showResults) return

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          setSelectedIndex(prev => 
            prev < results.length - 1 ? prev + 1 : 0
          )
          break
        case 'ArrowUp':
          event.preventDefault()
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : results.length - 1
          )
          break
        case 'Enter':
          event.preventDefault()
          if (selectedIndex >= 0 && results[selectedIndex]) {
            router.push(results[selectedIndex].url)
          } else if (query.trim()) {
            handleSearch()
          }
          break
        case 'Escape':
          setShowResults(false)
          setSelectedIndex(-1)
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [showResults, results, selectedIndex, query, router])

  const handleSearch = async () => {
    if (!query.trim()) return

    setIsSearching(true)
    setShowResults(true)

    try {
      // Simulate search delay for better UX
      await new Promise(resolve => setTimeout(resolve, 300))

      // For now, we'll do a simple search based on the query
      const searchResults = performSearch(query.trim())
      setResults(searchResults)
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const performSearch = (searchQuery: string): SearchResult[] => {
    const results: SearchResult[] = []
    const lowerQuery = searchQuery.toLowerCase()

    // Check for chapter-specific search (e.g., "John 3", "Genesis 1")
    const chapterMatch = searchQuery.match(/^([a-zA-Z]+)\s+(\d+)$/i)
    if (chapterMatch) {
      const bookName = chapterMatch[1]
      const chapterNum = chapterMatch[2]
      const bookSlug = getBookSlug(bookName)
      
      if (bookSlug) {
        results.push({
          type: 'chapter',
          title: `${bookName} ${chapterNum}`,
          subtitle: `Chapter ${chapterNum} of ${bookName}`,
          url: `/bible/${bookSlug}/${chapterNum}`,
          relevance: 15
        })
      }
    }

    // Search for books
    const books = [
      { name: 'Genesis', slug: 'genesis', description: 'First book of the Bible - Creation' },
      { name: 'Exodus', slug: 'exodus', description: 'Second book - The Exodus from Egypt' },
      { name: 'Leviticus', slug: 'leviticus', description: 'Third book - Laws and rituals' },
      { name: 'Numbers', slug: 'numbers', description: 'Fourth book - Wilderness journey' },
      { name: 'Deuteronomy', slug: 'deuteronomy', description: 'Fifth book - Moses\' final words' },
      { name: 'Joshua', slug: 'joshua', description: 'Conquest of the Promised Land' },
      { name: 'Judges', slug: 'judges', description: 'Period of the judges' },
      { name: 'Ruth', slug: 'ruth', description: 'Story of Ruth and Boaz' },
      { name: '1 Samuel', slug: '1-samuel', description: 'First book of Samuel' },
      { name: '2 Samuel', slug: '2-samuel', description: 'Second book of Samuel' },
      { name: '1 Kings', slug: '1-kings', description: 'First book of Kings' },
      { name: '2 Kings', slug: '2-kings', description: 'Second book of Kings' },
      { name: '1 Chronicles', slug: '1-chronicles', description: 'First book of Chronicles' },
      { name: '2 Chronicles', slug: '2-chronicles', description: 'Second book of Chronicles' },
      { name: 'Ezra', slug: 'ezra', description: 'Return from exile' },
      { name: 'Nehemiah', slug: 'nehemiah', description: 'Rebuilding of Jerusalem' },
      { name: 'Tobit', slug: 'tobit', description: 'Book of Tobit' },
      { name: 'Judith', slug: 'judith', description: 'Book of Judith' },
      { name: 'Esther', slug: 'esther', description: 'Book of Esther' },
      { name: '1 Maccabees', slug: '1-maccabees', description: 'First book of Maccabees' },
      { name: '2 Maccabees', slug: '2-maccabees', description: 'Second book of Maccabees' },
      { name: 'Job', slug: 'job', description: 'Book of Job - Suffering and faith' },
      { name: 'Psalms', slug: 'psalms', description: 'Book of prayers and songs' },
      { name: 'Proverbs', slug: 'proverbs', description: 'Book of wisdom' },
      { name: 'Ecclesiastes', slug: 'ecclesiastes', description: 'Book of Ecclesiastes' },
      { name: 'Song of Solomon', slug: 'song-of-solomon', description: 'Song of Songs' },
      { name: 'Wisdom', slug: 'wisdom', description: 'Book of Wisdom' },
      { name: 'Sirach', slug: 'sirach', description: 'Book of Sirach' },
      { name: 'Isaiah', slug: 'isaiah', description: 'Prophet Isaiah' },
      { name: 'Jeremiah', slug: 'jeremiah', description: 'Prophet Jeremiah' },
      { name: 'Lamentations', slug: 'lamentations', description: 'Book of Lamentations' },
      { name: 'Baruch', slug: 'baruch', description: 'Book of Baruch' },
      { name: 'Ezekiel', slug: 'ezekiel', description: 'Prophet Ezekiel' },
      { name: 'Daniel', slug: 'daniel', description: 'Book of Daniel' },
      { name: 'Hosea', slug: 'hosea', description: 'Prophet Hosea' },
      { name: 'Joel', slug: 'joel', description: 'Prophet Joel' },
      { name: 'Amos', slug: 'amos', description: 'Prophet Amos' },
      { name: 'Obadiah', slug: 'obadiah', description: 'Prophet Obadiah' },
      { name: 'Jonah', slug: 'jonah', description: 'Prophet Jonah' },
      { name: 'Micah', slug: 'micah', description: 'Prophet Micah' },
      { name: 'Nahum', slug: 'nahum', description: 'Prophet Nahum' },
      { name: 'Habakkuk', slug: 'habakkuk', description: 'Prophet Habakkuk' },
      { name: 'Zephaniah', slug: 'zephaniah', description: 'Prophet Zephaniah' },
      { name: 'Haggai', slug: 'haggai', description: 'Prophet Haggai' },
      { name: 'Zechariah', slug: 'zechariah', description: 'Prophet Zechariah' },
      { name: 'Malachi', slug: 'malachi', description: 'Prophet Malachi' },
      { name: 'Matthew', slug: 'matthew', description: 'First Gospel - Jesus\' life and teachings' },
      { name: 'Mark', slug: 'mark', description: 'Second Gospel - Jesus\' ministry' },
      { name: 'Luke', slug: 'luke', description: 'Third Gospel - Jesus\' life and parables' },
      { name: 'John', slug: 'john', description: 'Fourth Gospel - Jesus\' divinity' },
      { name: 'Acts', slug: 'acts', description: 'Acts of the Apostles' },
      { name: 'Romans', slug: 'romans', description: 'Paul\'s letter to the Romans' },
      { name: '1 Corinthians', slug: '1-corinthians', description: 'First letter to Corinthians' },
      { name: '2 Corinthians', slug: '2-corinthians', description: 'Second letter to Corinthians' },
      { name: 'Galatians', slug: 'galatians', description: 'Paul\'s letter to the Galatians' },
      { name: 'Ephesians', slug: 'ephesians', description: 'Paul\'s letter to the Ephesians' },
      { name: 'Philippians', slug: 'philippians', description: 'Paul\'s letter to the Philippians' },
      { name: 'Colossians', slug: 'colossians', description: 'Paul\'s letter to the Colossians' },
      { name: '1 Thessalonians', slug: '1-thessalonians', description: 'First letter to Thessalonians' },
      { name: '2 Thessalonians', slug: '2-thessalonians', description: 'Second letter to Thessalonians' },
      { name: '1 Timothy', slug: '1-timothy', description: 'First letter to Timothy' },
      { name: '2 Timothy', slug: '2-timothy', description: 'Second letter to Timothy' },
      { name: 'Titus', slug: 'titus', description: 'Paul\'s letter to Titus' },
      { name: 'Philemon', slug: 'philemon', description: 'Paul\'s letter to Philemon' },
      { name: 'Hebrews', slug: 'hebrews', description: 'Letter to the Hebrews' },
      { name: 'James', slug: 'james', description: 'Letter of James' },
      { name: '1 Peter', slug: '1-peter', description: 'First letter of Peter' },
      { name: '2 Peter', slug: '2-peter', description: 'Second letter of Peter' },
      { name: '1 John', slug: '1-john', description: 'First letter of John' },
      { name: '2 John', slug: '2-john', description: 'Second letter of John' },
      { name: '3 John', slug: '3-john', description: 'Third letter of John' },
      { name: 'Jude', slug: 'jude', description: 'Letter of Jude' },
      { name: 'Revelation', slug: 'revelation', description: 'Book of Revelation - Apocalypse' }
    ]

    books.forEach(book => {
      if (book.name.toLowerCase().includes(lowerQuery) || 
          book.description.toLowerCase().includes(lowerQuery)) {
        results.push({
          type: 'book',
          title: book.name,
          subtitle: book.description,
          url: `/bible/${book.slug}`,
          relevance: book.name.toLowerCase().startsWith(lowerQuery) ? 10 : 5
        })
      }
    })

    // Search for common terms and popular verses
    const commonTerms = [
      { term: 'love', url: '/bible/john/3', title: 'John 3:16', subtitle: 'For God so loved the world...' },
      { term: 'faith', url: '/bible/hebrews/11', title: 'Hebrews 11:1', subtitle: 'Faith is the substance of things hoped for...' },
      { term: 'prayer', url: '/bible/matthew/6', title: 'Matthew 6:9-13', subtitle: 'The Lord\'s Prayer' },
      { term: 'creation', url: '/bible/genesis/1', title: 'Genesis 1:1', subtitle: 'In the beginning God created...' },
      { term: 'commandments', url: '/bible/exodus/20', title: 'Exodus 20', subtitle: 'The Ten Commandments' },
      { term: 'beatitudes', url: '/bible/matthew/5', title: 'Matthew 5:3-12', subtitle: 'The Beatitudes' },
      { term: 'psalm', url: '/bible/psalms/23', title: 'Psalm 23', subtitle: 'The Lord is my shepherd...' },
      { term: 'sermon', url: '/bible/matthew/5', title: 'Matthew 5-7', subtitle: 'The Sermon on the Mount' },
      { term: 'resurrection', url: '/bible/matthew/28', title: 'Matthew 28', subtitle: 'The Resurrection' },
      { term: 'apocalypse', url: '/bible/revelation/1', title: 'Revelation 1', subtitle: 'The Apocalypse' }
    ]

    commonTerms.forEach(item => {
      if (item.term.includes(lowerQuery)) {
        results.push({
          type: 'verse',
          title: item.title,
          subtitle: item.subtitle,
          url: item.url,
          relevance: 8
        })
      }
    })

    // Sort by relevance
    results.sort((a, b) => b.relevance - a.relevance)

    return results.slice(0, 8) // Limit to 8 results
  }

  const getBookSlug = (bookName: string): string | null => {
    const bookMap: { [key: string]: string } = {
      'genesis': 'genesis',
      'exodus': 'exodus',
      'leviticus': 'leviticus',
      'numbers': 'numbers',
      'deuteronomy': 'deuteronomy',
      'joshua': 'joshua',
      'judges': 'judges',
      'ruth': 'ruth',
      '1 samuel': '1-samuel',
      '2 samuel': '2-samuel',
      '1 kings': '1-kings',
      '2 kings': '2-kings',
      '1 chronicles': '1-chronicles',
      '2 chronicles': '2-chronicles',
      'ezra': 'ezra',
      'nehemiah': 'nehemiah',
      'tobit': 'tobit',
      'judith': 'judith',
      'esther': 'esther',
      '1 maccabees': '1-maccabees',
      '2 maccabees': '2-maccabees',
      'job': 'job',
      'psalms': 'psalms',
      'psalm': 'psalms',
      'proverbs': 'proverbs',
      'ecclesiastes': 'ecclesiastes',
      'song of solomon': 'song-of-solomon',
      'song of songs': 'song-of-solomon',
      'wisdom': 'wisdom',
      'sirach': 'sirach',
      'isaiah': 'isaiah',
      'jeremiah': 'jeremiah',
      'lamentations': 'lamentations',
      'baruch': 'baruch',
      'ezekiel': 'ezekiel',
      'daniel': 'daniel',
      'hosea': 'hosea',
      'joel': 'joel',
      'amos': 'amos',
      'obadiah': 'obadiah',
      'jonah': 'jonah',
      'micah': 'micah',
      'nahum': 'nahum',
      'habakkuk': 'habakkuk',
      'zephaniah': 'zephaniah',
      'haggai': 'haggai',
      'zechariah': 'zechariah',
      'malachi': 'malachi',
      'matthew': 'matthew',
      'mark': 'mark',
      'luke': 'luke',
      'john': 'john',
      'acts': 'acts',
      'romans': 'romans',
      '1 corinthians': '1-corinthians',
      '2 corinthians': '2-corinthians',
      'galatians': 'galatians',
      'ephesians': 'ephesians',
      'philippians': 'philippians',
      'colossians': 'colossians',
      '1 thessalonians': '1-thessalonians',
      '2 thessalonians': '2-thessalonians',
      '1 timothy': '1-timothy',
      '2 timothy': '2-timothy',
      'titus': 'titus',
      'philemon': 'philemon',
      'hebrews': 'hebrews',
      'james': 'james',
      '1 peter': '1-peter',
      '2 peter': '2-peter',
      '1 john': '1-john',
      '2 john': '2-john',
      '3 john': '3-john',
      'jude': 'jude',
      'revelation': 'revelation'
    }

    return bookMap[bookName.toLowerCase()] || null
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    setSelectedIndex(-1)

    if (value.trim()) {
      // Debounce search
      const timeoutId = setTimeout(() => {
        handleSearch()
      }, 300)

      return () => clearTimeout(timeoutId)
    } else {
      setShowResults(false)
      setResults([])
    }
  }

  const handleResultClick = (result: SearchResult) => {
    router.push(result.url)
    setShowResults(false)
    setQuery('')
  }

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'book':
        return '📖'
      case 'chapter':
        return '📄'
      case 'verse':
        return '✝️'
      default:
        return '🔍'
    }
  }

  return (
    <div ref={searchRef} className="relative w-full">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg 
            className="h-5 w-5 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.trim() && setShowResults(true)}
          placeholder="Search Bible, books, chapters, or verses..."
          className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-full shadow-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 focus:outline-none transition-all duration-200 text-black placeholder-gray-500"
        />
        
        {isSearching && (
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600"></div>
          </div>
        )}
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <button
                  key={`${result.type}-${index}`}
                  onClick={() => handleResultClick(result)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors ${
                    index === selectedIndex ? 'bg-gray-50' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-lg flex-shrink-0 mt-0.5">
                      {getResultIcon(result.type)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-black font-medium truncate">
                        {result.title}
                      </div>
                      {result.subtitle && (
                        <div className="text-gray-600 text-sm truncate">
                          {result.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : query.trim() && !isSearching ? (
            <div className="px-4 py-8 text-center">
              <div className="text-gray-500 mb-2">No results found</div>
              <div className="text-sm text-gray-400">
                Try searching for a book name, chapter, or keyword
              </div>
            </div>
          ) : null}
          
          {/* Quick Links */}
          {query.trim() && (
            <div className="border-t border-gray-200 px-4 py-3">
              <div className="text-sm text-gray-600 mb-2">Quick search:</div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bible"
                  className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  Browse All Books
                </Link>
                <Link
                  href="/prayers"
                  className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  Catholic Prayers
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  Blog Articles
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
} 