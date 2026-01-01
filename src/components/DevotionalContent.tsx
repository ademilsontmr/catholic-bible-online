'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { devotionals, Devotional, getTodaysReading } from '@/data/devotionals'
import ShareButton from '@/components/ShareButton'

interface DevotionalContentProps {
  devotional: Devotional
  slug: string
}

export default function DevotionalContent({ devotional, slug }: DevotionalContentProps) {
  const [selectedDay, setSelectedDay] = useState(1)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const todaysReading = getTodaysReading(devotional)
    setSelectedDay(todaysReading.day)
  }, [devotional])

  const currentReading = devotional.readings.find(r => r.day === selectedDay) || devotional.readings[0]
  const prevReading = devotional.readings.find(r => r.day === selectedDay - 1)
  const nextReading = devotional.readings.find(r => r.day === selectedDay + 1)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/devotionals" className="text-gray-600 hover:text-gray-800">Devotionals</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800 font-medium">{devotional.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8 bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-2xl p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{devotional.icon}</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              {devotional.frequency}
            </span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            {devotional.title}
          </h1>
          <p className="text-gray-600 mb-2">by {devotional.author}</p>
          <p className="text-gray-700 text-lg">{devotional.longDescription}</p>
        </header>

        {/* Day Selector Dropdown */}
        <section className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm hover:border-blue-400 transition-colors min-w-[280px]"
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {selectedDay}
                </span>
                <div className="flex-1 text-left">
                  <p className="text-sm text-gray-500">Day {selectedDay} of {devotional.readings.length}</p>
                  <p className="font-medium text-gray-900 truncate">{currentReading.title}</p>
                </div>
                <svg className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-80 overflow-y-auto">
                  {devotional.readings.map((reading) => (
                    <button
                      key={reading.day}
                      onClick={() => {
                        setSelectedDay(reading.day)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors ${
                        reading.day === selectedDay ? 'bg-blue-50' : ''
                      }`}
                    >
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                        reading.day === selectedDay
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {reading.day}
                      </span>
                      <span className={`text-left truncate ${
                        reading.day === selectedDay ? 'text-blue-800 font-medium' : 'text-gray-700'
                      }`}>
                        {reading.title}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => prevReading && setSelectedDay(prevReading.day)}
                disabled={!prevReading}
                className={`p-2 rounded-lg transition-colors ${
                  prevReading 
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                    : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => nextReading && setSelectedDay(nextReading.day)}
                disabled={!nextReading}
                className={`p-2 rounded-lg transition-colors ${
                  nextReading 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                    : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Reading Content */}
        <article className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{currentReading.title}</h2>
          
          <div 
            className="prose prose-lg max-w-none mb-8 text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: currentReading.content }}
          />

          {currentReading.scripture && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mb-8 rounded-r-lg">
              <p className="text-sm text-blue-800 font-bold mb-2">📖 Scripture</p>
              <p className="text-blue-900 italic text-lg">{currentReading.scripture}</p>
            </div>
          )}

          {/* Related Links for SEO */}
          {(currentReading.bibleLink || currentReading.blogLink) && (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
              <p className="text-sm text-gray-600 font-bold mb-3">📚 Related Reading</p>
              <div className="flex flex-col sm:flex-row gap-3">
                {currentReading.bibleLink && (
                  <Link
                    href={`/bible/${currentReading.bibleLink.book}/${currentReading.bibleLink.chapter}`}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 rounded-lg text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-sm font-medium">{currentReading.bibleLink.label}</span>
                  </Link>
                )}
                {currentReading.blogLink && (
                  <Link
                    href={`/blog/${currentReading.blogLink.slug}`}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-purple-200 rounded-lg text-purple-700 hover:bg-purple-50 hover:border-purple-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <span className="text-sm font-medium truncate">{currentReading.blogLink.title}</span>
                  </Link>
                )}
              </div>
            </div>
          )}

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              🙏 Prayer
            </h3>
            <p className="text-purple-900 italic leading-relaxed text-lg">{currentReading.prayer}</p>
          </div>
        </article>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          {prevReading ? (
            <button
              onClick={() => setSelectedDay(prevReading.day)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Day {prevReading.day}</span>
            </button>
          ) : (
            <div></div>
          )}
          
          <span className="text-gray-500 text-sm">
            {selectedDay} of {devotional.readings.length} days
          </span>
          
          {nextReading ? (
            <button
              onClick={() => setSelectedDay(nextReading.day)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              <span className="hidden sm:inline">Day {nextReading.day}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg">
              Complete ✓
            </div>
          )}
        </div>

        {/* Share */}
        <section className="border-t border-gray-200 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Share This Devotional</h3>
            <ShareButton 
              title={devotional.title}
              url={`/devotionals/${slug}`}
              excerpt={devotional.description}
            />
          </div>
        </section>

        {/* More Devotionals */}
        <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Explore More Devotionals
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {devotionals
              .filter(d => d.slug !== slug)
              .slice(0, 3)
              .map(d => (
                <Link
                  key={d.slug}
                  href={`/devotionals/${d.slug}`}
                  className="block bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all"
                >
                  <span className="text-2xl mb-2 block">{d.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-1">{d.title}</h3>
                  <p className="text-sm text-gray-600">{d.author}</p>
                </Link>
              ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/devotionals"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              View All Devotionals
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
