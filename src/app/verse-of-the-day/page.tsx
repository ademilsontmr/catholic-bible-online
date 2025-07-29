'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import CopyButton from '@/components/CopyButton'

// Lista expandida de versos populares para rotação mais variada
const popularVerses = [
  {
    bookName: 'John',
    bookSlug: 'john',
    chapterNumber: 3,
    verseNumber: 16,
    verseText: 'For God so loved the world, as to give his only begotten Son; that whosoever believeth in him, may not perish, but may have life everlasting.'
  },
  {
    bookName: 'Psalm',
    bookSlug: 'psalms',
    chapterNumber: 23,
    verseNumber: 1,
    verseText: 'The Lord ruleth me: and I shall want nothing.'
  },
  {
    bookName: 'Jeremiah',
    bookSlug: 'jeremiah',
    chapterNumber: 29,
    verseNumber: 11,
    verseText: 'For I know the thoughts that I think towards you, saith the Lord, thoughts of peace, and not of affliction, to give you an end and patience.'
  },
  {
    bookName: 'Philippians',
    bookSlug: 'philippians',
    chapterNumber: 4,
    verseNumber: 13,
    verseText: 'I can do all things in him who strengtheneth me.'
  },
  {
    bookName: 'Romans',
    bookSlug: 'romans',
    chapterNumber: 8,
    verseNumber: 28,
    verseText: 'And we know that to them that love God, all things work together unto good, to such as, according to his purpose, are called to be saints.'
  },
  {
    bookName: 'Matthew',
    bookSlug: 'matthew',
    chapterNumber: 11,
    verseNumber: 28,
    verseText: 'Come to me, all you that labour, and are burdened, and I will refresh you.'
  },
  {
    bookName: 'Isaiah',
    bookSlug: 'isaiah',
    chapterNumber: 40,
    verseNumber: 31,
    verseText: 'But they that hope in the Lord shall renew their strength, they shall take wings as eagles, they shall run and not be weary, they shall walk and not faint.'
  },
  {
    bookName: 'Proverbs',
    bookSlug: 'proverbs',
    chapterNumber: 3,
    verseNumber: 5,
    verseText: 'Have confidence in the Lord with all thy heart, and lean not upon thy own prudence.'
  },
  {
    bookName: '1 Corinthians',
    bookSlug: '1-corinthians',
    chapterNumber: 13,
    verseNumber: 4,
    verseText: 'Charity is patient, it is kind: charity envieth not, dealeth not perversely, is not puffed up,'
  },
  {
    bookName: 'Joshua',
    bookSlug: 'joshua',
    chapterNumber: 1,
    verseNumber: 9,
    verseText: 'Behold I command thee, take courage, and be strong. Fear not, and be not dismayed: because the Lord thy God is with thee in all things whatsoever thou shalt go to.'
  },
  {
    bookName: 'Psalm',
    bookSlug: 'psalms',
    chapterNumber: 46,
    verseNumber: 1,
    verseText: 'God is our refuge and strength: a helper in troubles, which have found us exceedingly.'
  },
  {
    bookName: 'Psalm',
    bookSlug: 'psalms',
    chapterNumber: 119,
    verseNumber: 105,
    verseText: 'Thy word is a lamp to my feet, and a light to my paths.'
  },
  {
    bookName: 'Psalm',
    bookSlug: 'psalms',
    chapterNumber: 27,
    verseNumber: 1,
    verseText: 'The Lord is my light and my salvation, whom shall I fear? The Lord is the protector of my life: of whom shall I be afraid?'
  },
  {
    bookName: 'Psalm',
    bookSlug: 'psalms',
    chapterNumber: 37,
    verseNumber: 4,
    verseText: 'Delight in the Lord, and he will give thee the requests of thy heart.'
  },
  {
    bookName: 'Psalm',
    bookSlug: 'psalms',
    chapterNumber: 51,
    verseNumber: 10,
    verseText: 'Create a clean heart in me, O God: and renew a right spirit within my bowels.'
  },
  {
    bookName: 'Psalm',
    bookSlug: 'psalms',
    chapterNumber: 139,
    verseNumber: 14,
    verseText: 'I will praise thee, for thou art fearfully magnified: wonderful are thy works, and my soul knoweth right well.'
  },
  {
    bookName: 'Psalm',
    bookSlug: 'psalms',
    chapterNumber: 145,
    verseNumber: 18,
    verseText: 'The Lord is nigh unto all them that call upon him: to all that call upon him in truth.'
  },
  {
    bookName: 'Matthew',
    bookSlug: 'matthew',
    chapterNumber: 6,
    verseNumber: 33,
    verseText: 'Seek ye therefore first the kingdom of God, and his justice, and all these things shall be added unto you.'
  },
  {
    bookName: 'Matthew',
    bookSlug: 'matthew',
    chapterNumber: 7,
    verseNumber: 7,
    verseText: 'Ask, and it shall be given you: seek, and you shall find: knock, and it shall be opened to you.'
  },
  {
    bookName: 'Matthew',
    bookSlug: 'matthew',
    chapterNumber: 28,
    verseNumber: 20,
    verseText: 'Teaching them to observe all things whatsoever I have commanded you: and behold I am with you all days, even to the consummation of the world.'
  },
  {
    bookName: 'Mark',
    bookSlug: 'mark',
    chapterNumber: 10,
    verseNumber: 27,
    verseText: 'And Jesus looking on them, saith: With men it is impossible; but not with God: for all things are possible with God.'
  },
  {
    bookName: 'Luke',
    bookSlug: 'luke',
    chapterNumber: 1,
    verseNumber: 37,
    verseText: 'Because no word shall be impossible with God.'
  },
  {
    bookName: 'Luke',
    bookSlug: 'luke',
    chapterNumber: 6,
    verseNumber: 31,
    verseText: 'And as you would that men should do to you, do you also to them in like manner.'
  },
  {
    bookName: 'John',
    bookSlug: 'john',
    chapterNumber: 14,
    verseNumber: 6,
    verseText: 'Jesus saith to him: I am the way, and the truth, and the life. No man cometh to the Father, but by me.'
  },
  {
    bookName: 'John',
    bookSlug: 'john',
    chapterNumber: 15,
    verseNumber: 13,
    verseText: 'Greater love than this no man hath, that a man lay down his life for his friends.'
  },
  {
    bookName: 'John',
    bookSlug: 'john',
    chapterNumber: 16,
    verseNumber: 33,
    verseText: 'These things I have spoken to you, that in me you may have peace. In the world you shall have distress: but have confidence, I have overcome the world.'
  },
  {
    bookName: 'Acts',
    bookSlug: 'acts',
    chapterNumber: 1,
    verseNumber: 8,
    verseText: 'But you shall receive the power of the Holy Ghost coming upon you, and you shall be witnesses unto me in Jerusalem, and in all Judea, and Samaria, and even to the uttermost part of the earth.'
  },
  {
    bookName: 'Romans',
    bookSlug: 'romans',
    chapterNumber: 1,
    verseNumber: 16,
    verseText: 'For I am not ashamed of the gospel. For it is the power of God unto salvation to every one that believeth, to the Jew first, and to the Greek.'
  },
  {
    bookName: 'Romans',
    bookSlug: 'romans',
    chapterNumber: 3,
    verseNumber: 23,
    verseText: 'For all have sinned, and do need the glory of God.'
  },
  {
    bookName: 'Romans',
    bookSlug: 'romans',
    chapterNumber: 5,
    verseNumber: 8,
    verseText: 'But God commendeth his charity towards us; because when as yet we were sinners, according to the time, Christ died for us.'
  },
  {
    bookName: 'Romans',
    bookSlug: 'romans',
    chapterNumber: 6,
    verseNumber: 23,
    verseText: 'For the wages of sin is death. But the grace of God, life everlasting, in Christ Jesus our Lord.'
  },
  {
    bookName: 'Romans',
    bookSlug: 'romans',
    chapterNumber: 10,
    verseNumber: 9,
    verseText: 'For if thou confess with thy mouth the Lord Jesus, and believe in thy heart that God hath raised him up from the dead, thou shalt be saved.'
  },
  {
    bookName: 'Romans',
    bookSlug: 'romans',
    chapterNumber: 12,
    verseNumber: 2,
    verseText: 'And be not conformed to this world; but be reformed in the newness of your mind, that you may prove what is the good, and the acceptable, and the perfect will of God.'
  },
  {
    bookName: 'Romans',
    bookSlug: 'romans',
    chapterNumber: 15,
    verseNumber: 13,
    verseText: 'Now the God of hope fill you with all joy and peace in believing; that you may abound in hope, and in the power of the Holy Ghost.'
  },
  {
    bookName: '1 Corinthians',
    bookSlug: '1-corinthians',
    chapterNumber: 10,
    verseNumber: 13,
    verseText: 'Let no temptation take hold on you, but such as is human. And God is faithful, who will not suffer you to be tempted above that which you are able: but will make also with temptation issue, that you may be able to bear it.'
  },
  {
    bookName: '1 Corinthians',
    bookSlug: '1-corinthians',
    chapterNumber: 15,
    verseNumber: 58,
    verseText: 'Therefore, my beloved brethren, be ye steadfast and unmoveable; always abounding in the work of the Lord, knowing that your labour is not in vain in the Lord.'
  },
  {
    bookName: '2 Corinthians',
    bookSlug: '2-corinthians',
    chapterNumber: 4,
    verseNumber: 18,
    verseText: 'While we look not at the things which are seen, but at the things which are not seen. For the things which are seen, are temporal; but the things which are not seen, are eternal.'
  },
  {
    bookName: '2 Corinthians',
    bookSlug: '2-corinthians',
    chapterNumber: 5,
    verseNumber: 17,
    verseText: 'If then any be in Christ a new creature, the old things are passed away, behold all things are made new.'
  },
  {
    bookName: '2 Corinthians',
    bookSlug: '2-corinthians',
    chapterNumber: 12,
    verseNumber: 9,
    verseText: 'And he said to me: My grace is sufficient for thee; for power is made perfect in infirmity. Gladly therefore will I glory in my infirmities, that the power of Christ may dwell in me.'
  },
  {
    bookName: 'Galatians',
    bookSlug: 'galatians',
    chapterNumber: 2,
    verseNumber: 20,
    verseText: 'And I live, now not I; but Christ liveth in me. And that I live now in the flesh: I live in the faith of the Son of God, who loved me, and delivered himself for me.'
  },
  {
    bookName: 'Galatians',
    bookSlug: 'galatians',
    chapterNumber: 5,
    verseNumber: 22,
    verseText: 'But the fruit of the Spirit is, charity, joy, peace, patience, benignity, goodness, longanimity,'
  },
  {
    bookName: 'Ephesians',
    bookSlug: 'ephesians',
    chapterNumber: 2,
    verseNumber: 8,
    verseText: 'For by grace you are saved through faith, and that not of yourselves, for it is the gift of God.'
  },
  {
    bookName: 'Ephesians',
    bookSlug: 'ephesians',
    chapterNumber: 3,
    verseNumber: 20,
    verseText: 'Now to him who is able to do all things more abundantly than we desire or understand, according to the power that worketh in us;'
  },
  {
    bookName: 'Ephesians',
    bookSlug: 'ephesians',
    chapterNumber: 6,
    verseNumber: 10,
    verseText: 'Finally, brethren, be strengthened in the Lord, and in the might of his power.'
  },
  {
    bookName: 'Philippians',
    bookSlug: 'philippians',
    chapterNumber: 1,
    verseNumber: 6,
    verseText: 'Being confident of this very thing, that he, who hath begun a good work in you, will perfect it unto the day of Christ Jesus.'
  },
  {
    bookName: 'Philippians',
    bookSlug: 'philippians',
    chapterNumber: 2,
    verseNumber: 3,
    verseText: 'Let nothing be done through contention, neither by vainglory; but in humility, let each esteem others better than themselves.'
  },
  {
    bookName: 'Philippians',
    bookSlug: 'philippians',
    chapterNumber: 3,
    verseNumber: 14,
    verseText: 'I press towards the mark, to the prize of the supernal vocation of God in Christ Jesus.'
  },
  {
    bookName: 'Colossians',
    bookSlug: 'colossians',
    chapterNumber: 3,
    verseNumber: 23,
    verseText: 'Whatsoever you do, do it from the heart, as to the Lord, and not to men:'
  },
  {
    bookName: '1 Thessalonians',
    bookSlug: '1-thessalonians',
    chapterNumber: 5,
    verseNumber: 16,
    verseText: 'Always rejoice.'
  },
  {
    bookName: '1 Thessalonians',
    bookSlug: '1-thessalonians',
    chapterNumber: 5,
    verseNumber: 17,
    verseText: 'Pray without ceasing.'
  },
  {
    bookName: '1 Thessalonians',
    bookSlug: '1-thessalonians',
    chapterNumber: 5,
    verseNumber: 18,
    verseText: 'In all things give thanks; for this is the will of God in Christ Jesus concerning you all.'
  },
  {
    bookName: '2 Timothy',
    bookSlug: '2-timothy',
    chapterNumber: 1,
    verseNumber: 7,
    verseText: 'For God hath not given us the spirit of fear: but of power, and of love, and of sobriety.'
  },
  {
    bookName: '2 Timothy',
    bookSlug: '2-timothy',
    chapterNumber: 3,
    verseNumber: 16,
    verseText: 'All scripture, inspired of God, is profitable to teach, to reprove, to correct, to instruct in justice,'
  },
  {
    bookName: 'Hebrews',
    bookSlug: 'hebrews',
    chapterNumber: 11,
    verseNumber: 1,
    verseText: 'Now faith is the substance of things to be hoped for, the evidence of things that appear not.'
  },
  {
    bookName: 'Hebrews',
    bookSlug: 'hebrews',
    chapterNumber: 12,
    verseNumber: 2,
    verseText: 'Looking on Jesus, the author and finisher of faith, who having joy set before him, endured the cross, despising the shame, and now sitteth on the right hand of the throne of God.'
  },
  {
    bookName: 'James',
    bookSlug: 'james',
    chapterNumber: 1,
    verseNumber: 2,
    verseText: 'My brethren, count it all joy, when you shall fall into divers temptations;'
  },
  {
    bookName: 'James',
    bookSlug: 'james',
    chapterNumber: 1,
    verseNumber: 5,
    verseText: 'But if any of you want wisdom, let him ask of God, who giveth to all men abundantly, and upbraideth not; and it shall be given him.'
  },
  {
    bookName: '1 Peter',
    bookSlug: '1-peter',
    chapterNumber: 3,
    verseNumber: 15,
    verseText: 'But sanctify the Lord Christ in your hearts, being ready always to satisfy every one that asketh you a reason of that hope which is in you.'
  },
  {
    bookName: '1 Peter',
    bookSlug: '1-peter',
    chapterNumber: 5,
    verseNumber: 7,
    verseText: 'Casting all your care upon him, for he hath care of you.'
  },
  {
    bookName: '1 John',
    bookSlug: '1-john',
    chapterNumber: 4,
    verseNumber: 7,
    verseText: 'Dearly beloved, let us love one another, for charity is of God. And every one that loveth, is born of God, and knoweth God.'
  },
  {
    bookName: '1 John',
    bookSlug: '1-john',
    chapterNumber: 4,
    verseNumber: 19,
    verseText: 'Let us therefore love God, because God first hath loved us.'
  },
  {
    bookName: 'Revelation',
    bookSlug: 'revelation',
    chapterNumber: 3,
    verseNumber: 20,
    verseText: 'Behold, I stand at the gate, and knock. If any man shall hear my voice, and open to me the door, I will come in to him, and will sup with him, and he with me.'
  },
  {
    bookName: 'Revelation',
    bookSlug: 'revelation',
    chapterNumber: 21,
    verseNumber: 4,
    verseText: 'And God shall wipe away all tears from their eyes: and death shall be no more, nor mourning, nor crying, nor sorrow shall be any more, for the former things are passed away.'
  }
]

export default function VerseOfTheDayPage() {
  const [todaysVerse, setTodaysVerse] = useState<any>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24))
    const verseIndex = dayOfYear % popularVerses.length
    setTodaysVerse(popularVerses[verseIndex])
  }, [])

  const shareText = todaysVerse ? `"${todaysVerse.verseText}" - ${todaysVerse.bookName} ${todaysVerse.chapterNumber}:${todaysVerse.verseNumber}` : ''
  const pageUrl = 'https://catholicbibleonline.com/verse-of-the-day'

  return (
    <div className="min-h-screen bg-white">
      {/* Verse Display Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 text-center">
            <div className="text-2xl font-bold text-black mb-2">Today's Verse</div>
            <div className="text-lg text-gray-700 mb-4 italic">
              {isClient && todaysVerse ? (
                `"${todaysVerse.verseText}"`
              ) : (
                <span className="text-gray-400 animate-pulse">Loading verse...</span>
              )}
            </div>
            <div className="text-gray-600 mb-4">
              {isClient && todaysVerse ? (
                <>
                  <span className="font-semibold">{todaysVerse.bookName}</span> {todaysVerse.chapterNumber}:{todaysVerse.verseNumber}
                </>
              ) : (
                <span className="text-gray-400 animate-pulse">Loading reference...</span>
              )}
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                href={isClient && todaysVerse ? `/bible/${todaysVerse.bookSlug}/${todaysVerse.chapterNumber}` : '#'}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ pointerEvents: isClient && todaysVerse ? 'auto' : 'none' }}
              >
                Read full chapter
              </Link>
              <CopyButton 
                text={shareText + ' | Catholic Bible Online'} 
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md transition-colors duration-200 shadow-sm bg-white text-blue-600 hover:bg-blue-50"
                disabled={!isClient || !todaysVerse}
              >
                Copy verse
              </CopyButton>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">Share This Inspiration</h2>
            <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
              Help others discover the beauty of God's Word. Share this verse with friends and family to spread hope and encouragement.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            
            {/* Twitter/X */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter/X
            </a>
            
            {/* WhatsApp */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + pageUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.941.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
            
            {/* Telegram */}
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
            
            {/* Email */}
            <a
              href={`mailto:?subject=${encodeURIComponent('Verse of the Day')}&body=${encodeURIComponent(shareText + '\n\n' + pageUrl)}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Daily Prayer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-black mb-6 text-center">Daily Prayer</h2>
            <div className="text-lg text-black leading-relaxed mb-8 text-center">
              <p className="mb-4">
                Heavenly Father, thank You for Your word that guides us each day. Help us to meditate on this scripture 
                and apply its wisdom to our lives.
              </p>
              <p className="mb-4">
                May Your truth transform our hearts and draw us closer to You. Grant us the grace to live according to Your will 
                and to share Your love with others.
              </p>
              <p className="font-semibold">
                In Jesus' name, Amen.
              </p>
            </div>
            <div className="text-center">
              <Link 
                href="/prayers" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Explore More Prayers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Study Tips Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Bible Study Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-black mb-4">Read Slowly</h3>
              <p className="text-black leading-relaxed">
                Take time to read each verse carefully. Let the words sink in and reflect on their meaning. 
                Don't rush through the text - allow God's word to speak to your heart.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-semibold text-black mb-4">Pray First</h3>
              <p className="text-black leading-relaxed">
                Begin your Bible study with prayer, asking God to open your heart and mind to His word. 
                Invite the Holy Spirit to guide your understanding and reveal His truth to you.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-black mb-4">Apply Daily</h3>
              <p className="text-black leading-relaxed">
                Think about how you can apply today's verse to your daily life and relationships. 
                Look for practical ways to live out God's word in your actions, words, and thoughts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Continue Your Bible Journey</h2>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
            Explore the complete Douay-Rheims Catholic Bible with easy navigation, chapter-by-chapter reading, 
            and thoughtful Catholic reflections to deepen your faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/bible" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Browse All Books
            </Link>
            <Link 
              href="/prayers" 
              className="inline-flex items-center px-8 py-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors text-lg"
            >
              Catholic Prayers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 