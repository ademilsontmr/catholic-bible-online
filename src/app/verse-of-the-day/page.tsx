import Link from 'next/link'
import { Metadata } from 'next'
import CopyButton from '@/components/CopyButton'
import { getTodaysVerse, type Verse } from '@/lib/verseUtils'

export const metadata: Metadata = {
  title: 'Verse of the Day | Catholic Bible Online',
  description: 'Daily Bible verse from the Douay-Rheims Catholic Bible. Share inspiring scripture with friends and family.',
  keywords: [
    'verse of the day',
    'daily bible verse',
    'catholic bible',
    'douay-rheims',
    'daily scripture',
    'bible verse',
    'catholic faith'
  ],
  openGraph: {
    title: 'Verse of the Day | Catholic Bible Online',
    description: 'Daily Bible verse from the Douay-Rheims Catholic Bible. Share inspiring scripture with friends and family.',
    url: 'https://catholicbibleonline.com/verse-of-the-day',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verse of the Day | Catholic Bible Online',
    description: 'Daily Bible verse from the Douay-Rheims Catholic Bible.',
  },
}

export default function VerseOfTheDayPage() {
  const verse = getTodaysVerse()
  const shareText = `"${verse.verseText}" - ${verse.bookName} ${verse.chapterNumber}:${verse.verseNumber} | Catholic Bible Online`
  const shareUrl = `https://catholicbibleonline.com/verse-of-the-day`
  
  return (
    <div className="min-h-screen bg-white">
      {/* Verse Display */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-xl p-12 text-center">
            <div className="text-4xl font-bold text-gray-900 mb-8">Today's Verse</div>
            <div className="text-2xl text-gray-700 mb-8 italic leading-relaxed">"{verse.verseText}"</div>
            <div className="text-xl text-gray-600 mb-12">
              <span className="font-semibold">{verse.bookName}</span> {verse.chapterNumber}:{verse.verseNumber}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href={`/bible/${verse.bookSlug}/${verse.chapterNumber}`} 
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Read Full Chapter
              </Link>
              <CopyButton
                text={shareText}
                className="inline-flex items-center px-8 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                Copy Verse
              </CopyButton>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Share This Inspiration</h2>
            <p className="text-gray-600">Help others discover the beauty of God's Word. Share this verse with friends and family!</p>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              Facebook
            </a>
            
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              X
            </a>
            
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              WhatsApp
            </a>
            
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              Telegram
            </a>
            
            <a
              href={`mailto:?subject=Verse of the Day&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Daily Prayer */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Daily Prayer</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Heavenly Father, thank You for Your word that guides us each day. Help us to meditate on this scripture 
              and apply its wisdom to our lives. May Your truth transform our hearts and draw us closer to You. 
              In Jesus' name, Amen.
            </p>
            <Link 
              href="/prayers" 
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Explore More Prayers
            </Link>
          </div>
        </div>
      </section>

      {/* Bible Study Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Bible Study Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Read Slowly</h3>
              <p className="text-gray-600">
                Take time to read each verse carefully. Let the words sink in and reflect on their meaning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pray First</h3>
              <p className="text-gray-600">
                Begin your Bible study with prayer, asking God to open your heart and mind to His word.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Apply Daily</h3>
              <p className="text-gray-600">
                Think about how you can apply today's verse to your daily life and relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 