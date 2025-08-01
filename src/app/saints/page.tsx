'use client'

import Link from 'next/link'
import { useState } from 'react'

// Saints data structure
const saintsData = [
  {
    id: 'st-joseph',
    name: 'St. Joseph',
    feastDay: 'March 19',
    category: 'Marian Saints',
    patron: 'Fathers, Workers, Universal Church',
    shortBio: 'The foster father of Jesus and husband of Mary, known for his humility and obedience to God.',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    id: 'st-michael-archangel',
    name: 'St. Michael the Archangel',
    feastDay: 'September 29',
    category: 'Archangel Saints',
    patron: 'Police Officers, Soldiers, Protection',
    shortBio: 'The great archangel who defeated Satan and leads the heavenly armies.',
    icon: '⚔️'
  },
  {
    id: 'st-anthony',
    name: 'St. Anthony of Padua',
    feastDay: 'June 13',
    category: 'Doctor Saints',
    patron: 'Lost Items, Travelers, Poor',
    shortBio: 'Franciscan friar known for his powerful preaching and miracles.',
    icon: '📚'
  },
  {
    id: 'st-jude',
    name: 'St. Jude Thaddeus',
    feastDay: 'October 28',
    category: 'Patron Saints',
    patron: 'Hopeless Cases, Impossible Causes',
    shortBio: 'Apostle of Jesus and patron of desperate situations.',
    icon: '🙏'
  },
  {
    id: 'st-therese',
    name: 'St. Thérèse of Lisieux',
    feastDay: 'October 1',
    category: 'Modern Saints',
    patron: 'Missionaries, Florists, Aviators',
    shortBio: 'The Little Flower, known for her "Little Way" of spiritual childhood.',
    icon: '🌹'
  },
  {
    id: 'st-francis',
    name: 'St. Francis of Assisi',
    feastDay: 'October 4',
    category: 'Mendicant Saints',
    patron: 'Animals, Ecology, Peace',
    shortBio: 'Founder of the Franciscan order, lover of nature and poverty.',
    icon: '🕊️'
  },
  {
    id: 'st-rita',
    name: 'St. Rita of Cascia',
    feastDay: 'May 22',
    category: 'Healing Saints',
    patron: 'Impossible Cases, Abuse Victims',
    shortBio: 'Augustinian nun known for her patience and miraculous intercession.',
    icon: '🏥'
  },
  {
    id: 'st-augustine',
    name: 'St. Augustine of Hippo',
    feastDay: 'August 28',
    category: 'Doctor Saints',
    patron: 'Brewers, Theologians',
    shortBio: 'Doctor of the Church and patron of brewers.',
    icon: '📚'
  },
  {
    id: 'st-teresa-calcutta',
    name: 'St. Teresa of Calcutta',
    feastDay: 'September 5',
    category: 'Modern Saints',
    patron: 'World Youth Day, Poor',
    shortBio: 'Mother Teresa and patron of World Youth Day.',
    icon: '💙'
  },
  {
    id: 'st-raphael',
    name: 'St. Raphael',
    feastDay: 'September 29',
    category: 'Archangel Saints',
    patron: 'Travelers, Healing',
    shortBio: 'Archangel of healing and patron of travelers.',
    icon: '👼'
  },
  {
    id: 'st-gabriel',
    name: 'St. Gabriel',
    feastDay: 'September 29',
    category: 'Archangel Saints',
    patron: 'Communications, Messengers',
    shortBio: 'Archangel of communication and messenger of God.',
    icon: '📢'
  },
  {
    id: 'st-peter',
    name: 'St. Peter',
    feastDay: 'June 29',
    category: 'Apostle Saints',
    patron: 'Fishermen, Popes',
    shortBio: 'First Pope and Prince of the Apostles.',
    icon: '🗝️'
  },
  {
    id: 'st-elizabeth-ann-seton',
    name: 'St. Elizabeth Ann Seton',
    feastDay: 'January 4',
    category: 'Modern Saints',
    patron: 'Catholic Schools, Educators',
    shortBio: 'First native-born American saint and patron of Catholic schools.',
    icon: '📚'
  },
  {
    id: 'st-martin-de-porres',
    name: 'St. Martin de Porres',
    feastDay: 'November 3',
    category: 'Modern Saints',
    patron: 'Mixed Race, Healers',
    shortBio: 'Patron of people of mixed race and healer of the sick.',
    icon: '🏥'
  },
  {
    id: 'st-catherine-alexandria',
    name: 'St. Catherine of Alexandria',
    feastDay: 'November 25',
    category: 'Early Saints',
    patron: 'Students, Philosophers',
    shortBio: 'Patron of students and philosophers, martyred for her faith.',
    icon: '⚔️'
  },
  {
    id: 'st-elizabeth-mother-john',
    name: 'St. Elizabeth',
    feastDay: 'November 5',
    category: 'Biblical Saints',
    patron: 'Mothers, Infertility',
    shortBio: 'Mother of John the Baptist and cousin of the Virgin Mary.',
    icon: '👶'
  },
  {
    id: 'st-mary-magdalene',
    name: 'St. Mary Magdalene',
    feastDay: 'July 22',
    category: 'Biblical Saints',
    patron: 'Converts, Repentant Sinners',
    shortBio: 'First witness to the Resurrection and model of God\'s mercy.',
    icon: '🌹'
  },
  {
    id: 'st-brigid',
    name: 'St. Brigid',
    feastDay: 'February 1',
    category: 'Early Saints',
    patron: 'Ireland, Nuns',
    shortBio: 'Patron of Ireland and founder of monastic life for women.',
    icon: '🔥'
  },
  {
    id: 'st-andrew',
    name: 'St. Andrew',
    feastDay: 'November 30',
    category: 'Apostle Saints',
    patron: 'Scotland, Fishermen',
    shortBio: 'First-called Apostle and patron of Scotland.',
    icon: '🎣'
  },
  {
    id: 'st-gerard-majella',
    name: 'St. Gerard Majella',
    feastDay: 'October 16',
    category: 'Modern Saints',
    patron: 'Expectant Mothers, Childbirth',
    shortBio: 'Patron of expectant mothers and model of humility.',
    icon: '🤱'
  },
  {
    id: 'st-abigail',
    name: 'St. Abigail',
    feastDay: 'February 11',
    category: 'Early Saints',
    patron: 'Honeybees, Beekeepers',
    shortBio: 'Patron of honeybees and beekeepers, also known as St. Gobnait.',
    icon: '🐝'
  },
  {
    id: 'st-joseph-cupertino',
    name: 'St. Joseph of Cupertino',
    feastDay: 'September 18',
    category: 'Modern Saints',
    patron: 'Students, Air Travelers',
    shortBio: 'Patron of students and air travelers, known for levitations.',
    icon: '✈️'
  },
  {
    id: 'st-gemma-galgani',
    name: 'St. Gemma Galgani',
    feastDay: 'April 11',
    category: 'Modern Saints',
    patron: 'Students, Pharmacists',
    shortBio: 'The Flower of Lucca, mystic and bearer of the stigmata.',
    icon: '🌸'
  },
  {
    id: 'st-luke',
    name: 'St. Luke',
    feastDay: 'October 18',
    category: 'Apostle Saints',
    patron: 'Physicians, Surgeons',
    shortBio: 'The beloved physician and evangelist.',
    icon: '🐂'
  },
  {
    id: 'st-mark',
    name: 'St. Mark',
    feastDay: 'April 25',
    category: 'Apostle Saints',
    patron: 'Venice, Egypt',
    shortBio: 'Evangelist and companion of St. Peter.',
    icon: '🦁'
  },
  {
    id: 'st-elizabeth-hungary',
    name: 'St. Elizabeth of Hungary',
    feastDay: 'November 17',
    category: 'Charity Saints',
    patron: 'Bakers, Poor',
    shortBio: 'Princess of charity and patron of the poor.',
    icon: '🌹'
  },
  {
    id: 'st-joan-arc',
    name: 'St. Joan of Arc',
    feastDay: 'May 30',
    category: 'Warrior Saints',
    patron: 'France, Soldiers, Captives',
    shortBio: 'The Maid of Orléans, who led French armies to victory.',
    icon: '⚔️'
  },
  {
    id: 'st-peregrine',
    name: 'St. Peregrine Laziosi',
    feastDay: 'May 1',
    category: 'Healing Saints',
    patron: 'Cancer Patients, Ailments',
    shortBio: 'Servite friar and patron saint of cancer patients.',
    icon: '🏥'
  },
  {
    id: 'st-faustina',
    name: 'St. Faustina Kowalska',
    feastDay: 'October 5',
    category: 'Modern Saints',
    patron: 'Mercy, Divine Mercy Devotion',
    shortBio: 'Apostle of Divine Mercy, who received revelations from Jesus about His mercy.',
    icon: '💙'
  },
  {
    id: 'st-padre-pio',
    name: 'St. Padre Pio',
    feastDay: 'September 23',
    category: 'Modern Saints',
    patron: 'Civil Defense, Adolescents',
    shortBio: 'Stigmatist and miracle worker.',
    icon: '✝️'
  },
  {
    id: 'st-maximilian-kolbe',
    name: 'St. Maximilian Kolbe',
    feastDay: 'August 14',
    category: 'Modern Saints',
    patron: 'Journalists, Prisoners, Families',
    shortBio: 'Franciscan priest who sacrificed his life for another prisoner at Auschwitz.',
    icon: '🕊️'
  },
  {
    id: 'st-john-paul-ii',
    name: 'St. John Paul II',
    feastDay: 'October 22',
    category: 'Modern Saints',
    patron: 'Young People, Families, World Youth Day',
    shortBio: 'Pope John Paul II, the Great, known for his extensive travels and love for youth.',
    icon: '🌍'
  },
  {
    id: 'st-aaron-aleth',
    name: 'St. Aaron of Aleth',
    feastDay: 'June 21',
    category: 'Early Saints',
    patron: 'Hermits, Monastic Communities, Spiritual Mentors',
    shortBio: 'Hermit and abbot who was the spiritual mentor of St. Malo in 6th century Brittany.',
    icon: '🏔️'
  },
  {
    id: 'st-abadios',
    name: 'St. Abadios',
    feastDay: 'March 17',
    category: 'Martyr Saints',
    patron: 'Persecuted Christians, Martyrs, Courage',
    shortBio: 'Early Christian martyr and witness to the faith in the early Church.',
    icon: '⚔️'
  },
  {
    id: 'st-sebastian',
    name: 'St. Sebastian',
    feastDay: 'January 20',
    category: 'Martyr Saints',
    patron: 'Athletes, Soldiers, Archers',
    shortBio: 'Roman soldier and martyr, patron of athletes and soldiers.',
    icon: '🏹'
  },
  {
    id: 'st-george',
    name: 'St. George',
    feastDay: 'April 23',
    category: 'Martyr Saints',
    patron: 'England, Soldiers, Cavalry',
    shortBio: 'Dragon slayer and martyr, patron of soldiers and England.',
    icon: '🐉'
  },
  {
    id: 'st-catherine-siena',
    name: 'St. Catherine of Siena',
    feastDay: 'April 29',
    category: 'Doctor Saints',
    patron: 'Italy, United States, Nurses',
    shortBio: 'Doctor of the Church, mystic and political mediator who influenced popes.',
    icon: '🌹'
  },
  {
    id: 'st-valentine',
    name: 'St. Valentine',
    feastDay: 'February 14',
    category: 'Martyr Saints',
    patron: 'Love, Marriage, Young People',
    shortBio: 'Patron saint of love, marriage, and young people, celebrated worldwide.',
    icon: '💝'
  },
  {
    id: 'st-christopher',
    name: 'St. Christopher',
    feastDay: 'July 25',
    category: 'Martyr Saints',
    patron: 'Travelers, Children',
    shortBio: 'Patron saint of travelers and children, the Christ-bearer.',
    icon: '🏃'
  },
  {
    id: 'st-patrick',
    name: 'St. Patrick',
    feastDay: 'March 17',
    category: 'Missionary Saints',
    patron: 'Ireland, Missionaries',
    shortBio: 'Apostle of Ireland who converted the Irish people to Christianity.',
    icon: '☘️'
  },
  {
    id: 'st-jude-thaddeus',
    name: 'St. Jude Thaddeus',
    feastDay: 'October 28',
    category: 'Apostle Saints',
    patron: 'Desperate Cases, Impossible Cases',
    shortBio: 'Patron saint of desperate cases and one of the Twelve Apostles.',
    icon: '⚔️'
  },
  {
    id: 'st-teresa-avila',
    name: 'St. Teresa of Avila',
    feastDay: 'October 15',
    category: 'Doctor Saints',
    patron: 'Headache Sufferers, Spain',
    shortBio: 'Doctor of the Church and founder of the Discalced Carmelites.',
    icon: '💜'
  },
  {
    id: 'st-felix-spoleto',
    name: 'St. Felix of Spoleto',
    feastDay: 'May 18',
    category: 'Early Saints',
    patron: 'Spoleto, Courage',
    shortBio: 'Early Christian martyr and patron saint of Spoleto, Italy.',
    icon: '🕊️'
  },
  {
    id: 'st-victor-corona',
    name: 'St. Victor and St. Corona',
    feastDay: 'May 14',
    category: 'Early Saints',
    patron: 'Treasure Hunters, Courage',
    shortBio: 'Early Christian martyrs who showed courage and compassion in persecution.',
    icon: '⚔️'
  },
  {
    id: 'st-lucy',
    name: 'St. Lucy',
    feastDay: 'December 13',
    category: 'Early Saints',
    patron: 'Blind, Eye Diseases',
    shortBio: 'Patron saint of the blind and courageous martyr of Syracuse.',
    icon: '👁️'
  },
  {
    id: 'st-agnes',
    name: 'St. Agnes',
    feastDay: 'January 21',
    category: 'Early Saints',
    patron: 'Young Girls, Chastity',
    shortBio: 'Virgin martyr and patron saint of young girls.',
    icon: '🐑'
  },
  {
    id: 'st-cecilia',
    name: 'St. Cecilia',
    feastDay: 'November 22',
    category: 'Early Saints',
    patron: 'Musicians, Church Music',
    shortBio: 'Virgin martyr and patron saint of musicians.',
    icon: '🎵'
  },
  {
    id: 'st-david',
    name: 'St. David',
    feastDay: 'March 1',
    category: 'Early Saints',
    patron: 'Wales, Poets',
    shortBio: 'Patron saint of Wales and founder of monastic communities.',
    icon: '🌿'
  },
  {
    id: 'st-john-cross',
    name: 'St. John of the Cross',
    feastDay: 'December 14',
    category: 'Doctor Saints',
    patron: 'Mystics, Contemplatives',
    shortBio: 'Doctor of the Church and co-founder of Discalced Carmelites.',
    icon: '✝️'
  },
  {
    id: 'st-paul',
    name: 'St. Paul',
    feastDay: 'June 29',
    category: 'Apostle Saints',
    patron: 'Missionaries, Theologians',
    shortBio: 'Apostle to the Gentiles and great missionary.',
    icon: '📜'
  },
  {
    id: 'st-edith-stein',
    name: 'St. Edith Stein',
    feastDay: 'August 9',
    category: 'Modern Saints',
    patron: 'Europe, Philosophers',
    shortBio: 'Carmelite nun and martyr, patron of Europe.',
    icon: '🕯️'
  },
  {
    id: 'st-thomas-aquinas',
    name: 'St. Thomas Aquinas',
    feastDay: 'January 28',
    category: 'Doctor Saints',
    patron: 'Students, Theologians',
    shortBio: 'Doctor of the Church and Angelic Doctor.',
    icon: '📚'
  },
  {
    id: 'st-dominic',
    name: 'St. Dominic',
    feastDay: 'August 8',
    category: 'Doctor Saints',
    patron: 'Preachers, Teachers',
    shortBio: 'Founder of the Dominican Order and patron of preachers.',
    icon: '🐕'
  },
  {
    id: 'st-albert-great',
    name: 'St. Albert the Great',
    feastDay: 'November 15',
    category: 'Doctor Saints',
    patron: 'Scientists, Students',
    shortBio: 'Dominican friar and Universal Doctor of the Church.',
    icon: '🔬'
  },
  {
    id: 'st-benedict',
    name: 'St. Benedict',
    feastDay: 'July 11',
    category: 'Doctor Saints',
    patron: 'Europe, Monks',
    shortBio: 'Father of Western monasticism and patron of Europe.',
    icon: '⛪'
  },
  {
    id: 'st-scholastica',
    name: 'St. Scholastica',
    feastDay: 'February 10',
    category: 'Doctor Saints',
    patron: 'Nuns, Twins',
    shortBio: 'Twin sister of St. Benedict and founder of Benedictine nuns.',
    icon: '🕊️'
  },
  {
    id: 'st-bernard',
    name: 'St. Bernard of Clairvaux',
    feastDay: 'August 20',
    category: 'Doctor Saints',
    patron: 'Beekeepers, Preachers',
    shortBio: 'Cistercian monk and Doctor of the Church.',
    icon: '🌹'
  },
  {
    id: 'st-monica',
    name: 'St. Monica',
    feastDay: 'August 27',
    category: 'Modern Saints',
    patron: 'Mothers, Wives',
    shortBio: 'Mother of St. Augustine and patron saint of mothers.',
    icon: '💧'
  },
  {
    id: 'st-ambrose',
    name: 'St. Ambrose',
    feastDay: 'December 7',
    category: 'Doctor Saints',
    patron: 'Beekeepers, Learning',
    shortBio: 'Bishop of Milan who helped convert St. Augustine.',
    icon: '🐝'
  },
  {
    id: 'st-philomena',
    name: 'St. Philomena',
    feastDay: 'August 11',
    category: 'Martyr Saints',
    patron: 'Youth, Infants',
    shortBio: 'Virgin martyr and patron saint of youth.',
    icon: '🏹'
  },
  {
    id: 'st-dymphna',
    name: 'St. Dymphna',
    feastDay: 'May 15',
    category: 'Martyr Saints',
    patron: 'Mental Illness, Victims of Incest',
    shortBio: 'Patron saint of mental illness and victims of incest.',
    icon: '👑'
  },
  {
    id: 'st-mary-virgin',
    name: 'St. Mary the Virgin',
    feastDay: 'August 15',
    category: 'Marian Saints',
    patron: 'All Humanity, Mothers',
    shortBio: 'Mother of God and Queen of Heaven.',
    icon: '👑'
  },
  {
    id: 'st-anne',
    name: 'St. Anne',
    feastDay: 'July 26',
    category: 'Modern Saints',
    patron: 'Mothers, Grandmothers',
    shortBio: 'Mother of the Blessed Virgin Mary.',
    icon: '🌹'
  },
  {
    id: 'st-joachim',
    name: 'St. Joachim',
    feastDay: 'July 26',
    category: 'Modern Saints',
    patron: 'Fathers, Grandfathers',
    shortBio: 'Father of the Blessed Virgin Mary.',
    icon: '🌿'
  },
  {
    id: 'st-kateri-tekakwitha',
    name: 'St. Kateri Tekakwitha',
    feastDay: 'July 14',
    category: 'Modern Saints',
    patron: 'Ecology, Native Americans',
    shortBio: 'First Native American saint and patron of ecology.',
    icon: '🌿'
  },
  {
    id: 'st-clare-assisi',
    name: 'St. Clare of Assisi',
    feastDay: 'August 11',
    category: 'Modern Saints',
    patron: 'Television, Poor Clares',
    shortBio: 'Founder of the Poor Clares and patron of television.',
    icon: '🕊️'
  },
  {
    id: 'st-bernadette',
    name: 'St. Bernadette',
    feastDay: 'April 16',
    category: 'Modern Saints',
    patron: 'Illness, Lourdes',
    shortBio: 'Visionary of Lourdes and patron of illness.',
    icon: '🌹'
  },
  {
    id: 'st-maria-goretti',
    name: 'St. Maria Goretti',
    feastDay: 'July 6',
    category: 'Modern Saints',
    patron: 'Youth, Purity',
    shortBio: 'Martyr of purity and patron of youth.',
    icon: '🌸'
  },
  {
    id: 'st-rose-lima',
    name: 'St. Rose of Lima',
    feastDay: 'August 23',
    category: 'Modern Saints',
    patron: 'Americas, Gardeners',
    shortBio: 'Patroness of the Americas and patron of gardeners.',
    icon: '🌺'
  },
  {
    id: 'st-agatha',
    name: 'St. Agatha',
    feastDay: 'February 5',
    category: 'Martyr Saints',
    patron: 'Sicily, Breast Cancer',
    shortBio: 'Virgin martyr and patron of breast cancer patients.',
    icon: '⚔️'
  }
]

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Saints', icon: '🌟' },
  { id: 'marian', name: 'Marian Saints', icon: '🌹' },
  { id: 'warrior', name: 'Warrior Saints', icon: '⚔️' },
  { id: 'healing', name: 'Healing Saints', icon: '🏥' },
  { id: 'doctor', name: 'Doctor Saints', icon: '📚' },
  { id: 'patron', name: 'Patron Saints', icon: '🙏' },
  { id: 'mendicant', name: 'Mendicant Saints', icon: '🕊️' },
  { id: 'modern', name: 'Modern Saints', icon: '💙' },
  { id: 'early', name: 'Early Saints', icon: '🏔️' },
  { id: 'martyr', name: 'Martyr Saints', icon: '⚔️' },
  { id: 'missionary', name: 'Missionary Saints', icon: '☘️' },
  { id: 'apostle', name: 'Apostle Saints', icon: '⚔️' },
  { id: 'archangel', name: 'Archangel Saints', icon: '👼' },
  { id: 'charity', name: 'Charity Saints', icon: '🌹' },
  { id: 'biblical', name: 'Biblical Saints', icon: '📜' }
]

export default function SaintsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Filter saints based on search and category
  const filteredSaints = saintsData.filter(saint => {
    const matchesSearch = saint.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         saint.patron.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         saint.shortBio.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || 
                           saint.category.toLowerCase().includes(selectedCategory)
    
    return matchesSearch && matchesCategory
  })

  // Get today's saint (simplified - you can implement proper calendar logic)
  const today = new Date()
  const todaySaint = saintsData.find(saint => {
    // This is a simplified example - you'd want proper calendar logic
    return saint.feastDay.includes('March 19') // For demo purposes
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Saints
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Lives, Legacy & Feast Days of Catholic saints and holy men and women
          </p>
          
          {/* Search Box */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search saints..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-gray-600">{saintsData.length}+</div>
              <div className="text-black font-medium">Saints</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-gray-600">{categories.length - 1}</div>
              <div className="text-black font-medium">Categories</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-gray-600">Daily</div>
              <div className="text-black font-medium">Feast Days</div>
            </div>
          </div>
        </div>

        {/* Saint of the Day */}
        {todaySaint && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6 text-center">Saint of the Day</h2>
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-4">{todaySaint.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-black">{todaySaint.name}</h3>
                  <p className="text-gray-600">Feast Day: {todaySaint.feastDay}</p>
                </div>
              </div>
              <p className="text-gray-700 text-center mb-4">{todaySaint.shortBio}</p>
              <div className="text-center">
                <Link
                  href={`/saints/${todaySaint.id}`}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Read Full Biography →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Category Filters */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-black border-gray-300 hover:border-blue-300'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Search Results Info */}
        {searchTerm && (
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              {filteredSaints.length > 0 
                ? `Found ${filteredSaints.length} saint${filteredSaints.length !== 1 ? 's' : ''} matching "${searchTerm}"`
                : `No saints found matching "${searchTerm}"`
              }
            </p>
          </div>
        )}

        {/* Saints Grid */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            {selectedCategory === 'all' ? 'All Saints' : `${categories.find(c => c.id === selectedCategory)?.name}`}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSaints.map((saint) => {
              // Function to get color based on month
              const getMonthColor = (feastDay: string) => {
                const month = feastDay.split(' ')[0].toLowerCase()
                const colors = {
                  january: 'bg-red-50 text-red-700 border-red-200',
                  february: 'bg-pink-50 text-pink-700 border-pink-200',
                  march: 'bg-green-50 text-green-700 border-green-200',
                  april: 'bg-yellow-50 text-yellow-700 border-yellow-200',
                  may: 'bg-blue-50 text-blue-700 border-blue-200',
                  june: 'bg-purple-50 text-purple-700 border-purple-200',
                  july: 'bg-indigo-50 text-indigo-700 border-indigo-200',
                  august: 'bg-orange-50 text-orange-700 border-orange-200',
                  september: 'bg-teal-50 text-teal-700 border-teal-200',
                  october: 'bg-rose-50 text-rose-700 border-rose-200',
                  november: 'bg-amber-50 text-amber-700 border-amber-200',
                  december: 'bg-cyan-50 text-cyan-700 border-cyan-200'
                }
                return colors[month as keyof typeof colors] || 'bg-gray-50 text-gray-600 border-gray-200'
              }

              return (
                <Link 
                  key={saint.id}
                  href={`/saints/${saint.id}`}
                  className="group block"
                >
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{saint.icon}</div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getMonthColor(saint.feastDay)}`}>
                        {saint.feastDay}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                      {saint.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-3">
                      {saint.category}
                    </p>
                    
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {saint.shortBio}
                    </p>
                    
                    <div className="text-xs text-gray-500">
                      <strong>Patron:</strong> {saint.patron}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="mt-12 text-center">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-lg font-semibold text-black mb-2">
              More Saints Coming Soon
            </h3>
            <p className="text-gray-600">
              We're continuously adding more saints with detailed biographies, 
              teachings, and feast day information. Check back regularly for updates!
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 