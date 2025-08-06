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
    id: 'st-jerome',
    name: 'St. Jerome',
    feastDay: 'September 30',
    category: 'Doctor Saints',
    patron: 'Archaeologists, Biblical Scholars, Librarians',
    shortBio: 'Doctor of the Church and translator of the Vulgate Bible.',
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
    id: 'st-matthew',
    name: 'St. Matthew',
    feastDay: 'September 21',
    category: 'Apostle Saints',
    patron: 'Bankers, Accountants, Evangelists',
    shortBio: 'Apostle and Evangelist, former tax collector who wrote the first Gospel.',
    icon: '📖'
  },
  {
    id: 'st-james-the-greater',
    name: 'St. James the Greater',
    feastDay: 'July 25',
    category: 'Apostle Saints',
    patron: 'Pilgrims, Spain, Fishers',
    shortBio: 'One of the first disciples of Jesus, patron of pilgrims and Spain.',
    icon: '⚔️'
  },
  {
    id: 'st-thomas',
    name: 'St. Thomas',
    feastDay: 'July 3',
    category: 'Apostle Saints',
    patron: 'Architects, Builders, Missionaries',
    shortBio: 'Apostle known as "Doubting Thomas" who became a great missionary to India.',
    icon: '🏗️'
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
    id: 'st-katharine-drexel',
    name: 'St. Katharine Drexel',
    feastDay: 'March 3',
    category: 'Modern Saints',
    patron: 'Racial Justice, Philanthropists, Educators',
    shortBio: 'Second American-born saint, known for her dedication to racial justice, education, and philanthropy. Founder of the Sisters of the Blessed Sacrament.',
    icon: '👩‍🏫'
  },
  {
    id: 'st-gianna-beretta-molla',
    name: 'St. Gianna Beretta Molla',
    feastDay: 'April 28',
    category: 'Modern Saints',
    patron: 'Mothers, Physicians, Unborn Children',
    shortBio: 'Italian pediatrician and mother who sacrificed her life for her unborn child, patron of mothers and pro-life causes.',
    icon: '👩‍⚕️'
  },
  {
    id: 'st-john-bosco',
    name: 'St. John Bosco',
    feastDay: 'January 31',
    category: 'Modern Saints',
    patron: 'Youth, Educators, Apprentices',
    shortBio: 'Italian priest and founder of the Salesians, known as Father and Teacher of Youth.',
    icon: '👨‍🏫'
  },
  {
    id: 'st-pope-john-paul-ii',
    name: 'St. Pope John Paul II',
    feastDay: 'October 22',
    category: 'Modern Saints',
    patron: 'Youth, Families, Human Rights',
    shortBio: 'Beloved pontiff who served the Church for 27 years, known as the Pope of the Family and Youth.',
    icon: '👑'
  },
  {
    id: 'st-francis-de-sales',
    name: 'St. Francis de Sales',
    feastDay: 'January 24',
    category: 'Doctor Saints',
    patron: 'Writers, Journalists, Spiritual Direction',
    shortBio: 'Bishop and Doctor of the Church, patron of writers and journalists, known for his gentle approach to spirituality.',
    icon: '✍️'
  },
  {
    id: 'our-lady-of-guadalupe',
    name: 'Our Lady of Guadalupe',
    feastDay: 'December 12',
    category: 'Marian Saints',
    patron: 'Mexico, Americas, Indigenous Peoples, Pro-Life',
    shortBio: 'Patroness of the Americas who appeared to St. Juan Diego in 1531, leading to the conversion of millions.',
    icon: '🌹'
  },
  {
    id: 'st-thomas-more',
    name: 'St. Thomas More',
    feastDay: 'June 22',
    category: 'Modern Saints',
    patron: 'Lawyers, Civil Servants, Politicians, Adopted Children, Difficult Marriages',
    shortBio: 'English lawyer, statesman, and martyr who refused to acknowledge Henry VIII as head of the Church.',
    icon: '⚖️'
  },
  {
    id: 'st-barbara',
    name: 'St. Barbara',
    feastDay: 'December 4',
    category: 'Early Saints',
    patron: 'Armourers, Artillerymen, Architects, Mathematicians, Miners, Italian Navy',
    shortBio: 'Early Christian martyr known for her courage and faith, patron of those who work with explosives and fire.',
    icon: '🏰'
  },
  {
    id: 'st-helena',
    name: 'St. Helena',
    feastDay: 'August 18',
    category: 'Early Saints',
    patron: 'New Discoveries, Archaeologists, Converts',
    shortBio: 'Mother of Emperor Constantine, discoverer of the True Cross and builder of churches in the Holy Land.',
    icon: '🏛️'
  },
  {
    id: 'st-francis-xavier',
    name: 'St. Francis Xavier',
    feastDay: 'December 3',
    category: 'Modern Saints',
    patron: 'Catholic Missions, Missionaries, Foreign Missions, Navigators',
    shortBio: 'Jesuit missionary known as the "Apostle of the Indies" who spread Christianity throughout Asia.',
    icon: '⛪'
  },
  {
    id: 'st-josephine-bakhita',
    name: 'St. Josephine Bakhita',
    feastDay: 'February 8',
    category: 'Modern Saints',
    patron: 'Sudan, Victims of Human Trafficking, Former Slaves',
    shortBio: 'Former slave who became a Canossian sister, known for her forgiveness and gentle spirit.',
    icon: '🕊️'
  },
  {
    id: 'st-stephen',
    name: 'St. Stephen',
    feastDay: 'December 26',
    category: 'Biblical Saints',
    patron: 'Altar Servers, Bricklayers, Casket Makers, Deacons',
    shortBio: 'First deacon and first Christian martyr, known for his powerful preaching and forgiveness.',
    icon: '⛪'
  },
  {
    id: 'st-leo-the-great',
    name: 'St. Leo the Great',
    feastDay: 'November 10',
    category: 'Doctor Saints',
    patron: 'Popes, Theologians, Preachers, Rome',
    shortBio: 'Pope and Doctor of the Church, first pope to be called "the Great," defender of orthodoxy.',
    icon: '👑'
  },
  {
    id: 'st-john-the-baptist',
    name: 'St. John the Baptist',
    feastDay: 'June 24',
    category: 'Biblical Saints',
    patron: 'Jordan, Puerto Rico, French Canada, Baptism',
    shortBio: 'Forerunner of Christ who baptized Jesus and prepared the way for the Messiah.',
    icon: '🕊️'
  },
  {
    id: 'st-juan-diego',
    name: 'St. Juan Diego',
    feastDay: 'December 9',
    category: 'Modern Saints',
    patron: 'Indigenous People, Mexico, Humility',
    shortBio: 'First indigenous saint of the Americas, witness to Our Lady of Guadalupe apparitions.',
    icon: '🌹'
  },
  {
    id: 'st-dominic-savio',
    name: 'St. Dominic Savio',
    feastDay: 'May 6',
    category: 'Modern Saints',
    patron: 'Choirboys, Falsely Accused, Juvenile Delinquents',
    shortBio: 'Young saint who died at age 14, known for his piety and devotion to God from early childhood.',
    icon: '👦'
  },
  {
    id: 'st-nicholas',
    name: 'St. Nicholas',
    feastDay: 'December 6',
    category: 'Early Saints',
    patron: 'Children, Sailors, Prisoners, Greece, Russia, Merchants',
    shortBio: 'Fourth-century bishop of Myra known for his generosity and miracles, inspiration for Santa Claus.',
    icon: '🎅'
  },
  {
    id: 'st-angela-merici',
    name: 'St. Angela Merici',
    feastDay: 'January 27',
    category: 'Modern Saints',
    patron: 'Sickness, Disabled People, Those Grieving Loss of Parents',
    shortBio: 'Founder of the Ursulines, first teaching order of women in the Catholic Church.',
    icon: '👩‍🏫'
  },
  {
    id: 'st-lorenzo-ruiz',
    name: 'St. Lorenzo Ruiz',
    feastDay: 'September 28',
    category: 'Modern Saints',
    patron: 'Filipino Youth, Philippines, Overseas Workers, Altar Servers',
    shortBio: 'First Filipino saint, martyr who died for his faith in Japan during persecution.',
    icon: '🇵🇭'
  },
  {
    id: 'st-philip-neri',
    name: 'St. Philip Neri',
    feastDay: 'May 26',
    category: 'Modern Saints',
    patron: 'Rome, US Special Forces, Humor and Joy',
    shortBio: 'Founder of the Oratorians, known as the "Apostle of Rome" for his joyful evangelization.',
    icon: '😊'
  },
  {
    id: 'st-ambrose',
    name: 'St. Ambrose',
    feastDay: 'December 7',
    category: 'Doctor Saints',
    patron: 'Bee Keepers, Beggars, Learning, Milan',
    shortBio: 'Bishop of Milan and Doctor of the Church, known for converting St. Augustine.',
    icon: '🐝'
  },
  {
    id: 'st-genevieve',
    name: 'St. Genevieve',
    feastDay: 'January 3',
    category: 'Early Saints',
    patron: 'Paris, France, Young Girls, Against Disasters',
    shortBio: 'Patron saint of Paris who saved the city from Attila the Hun through prayer and fasting.',
    icon: '🏛️'
  },
  {
    id: 'st-gregory-the-great',
    name: 'St. Gregory the Great',
    feastDay: 'September 3',
    category: 'Doctor Saints',
    patron: 'Musicians, Singers, Students, Teachers',
    shortBio: 'Pope and Doctor of the Church, known for Gregorian chant and missionary work.',
    icon: '🎵'
  },
  {
    id: 'st-anastasia',
    name: 'St. Anastasia',
    feastDay: 'December 25',
    category: 'Martyr Saints',
    patron: 'Martyrs, Weavers, Against Poison',
    shortBio: 'Early Christian martyr known as "Deliverer from Potions" for her healing ministry.',
    icon: '⚔️'
  },
  {
    id: 'faith-hope-charity',
    name: 'St. Sophia and her Daughters',
    feastDay: 'August 1',
    category: 'Martyr Saints',
    patron: 'Christian Families, Mothers, Theological Virtues',
    shortBio: 'St. Sophia and her daughters Faith, Hope, and Charity, Christian martyrs during Hadrian\'s persecution.',
    icon: '👩‍👧‍👧‍👧'
  },
  {
    id: 'st-raymond-nonnatus',
    name: 'St. Raymond Nonnatus',
    feastDay: 'August 31',
    category: 'Healing Saints',
    patron: 'Expectant Mothers, Midwives, Childbirth',
    shortBio: 'Patron saint of expectant mothers and midwives, known for his miraculous birth and missionary work.',
    icon: '👶'
  },
  {
    id: 'st-elizabeth-portugal',
    name: 'St. Elizabeth of Portugal',
    feastDay: 'July 4',
    category: 'Charity Saints',
    patron: 'Peacemakers, Difficult Marriages, Portugal',
    shortBio: 'Queen and peacemaker, known for her charity and devotion to daily Mass.',
    icon: '👑'
  },
  {
    id: 'st-peter-claver',
    name: 'St. Peter Claver',
    feastDay: 'September 9',
    category: 'Missionary Saints',
    patron: 'African Missions, Slave Ministry, Colombia',
    shortBio: 'Jesuit missionary and patron of African missions, known for his service to African slaves.',
    icon: '⛪'
  },
  {
    id: 'st-isidore-seville',
    name: 'St. Isidore of Seville',
    feastDay: 'April 4',
    category: 'Doctor Saints',
    patron: 'Students, Teachers, Internet, Spain',
    shortBio: 'Doctor of the Church and greatest teacher in Spain, known for his love of learning and forgiveness.',
    icon: '📚'
  },
  {
    id: 'st-longinus',
    name: 'St. Longinus',
    feastDay: 'March 15',
    category: 'Martyr Saints',
    patron: 'Soldiers, Eye Problems, Conversion, Mantua',
    shortBio: 'Centurion who pierced Christ\'s side and was converted by His blood, later martyred for the faith.',
    icon: '⚔️'
  },
  {
    id: 'st-teresa-benedicta',
    name: 'St. Teresa Benedicta of the Cross (Edith Stein)',
    feastDay: 'August 9',
    category: 'Martyr Saints',
    patron: 'Jewish Converts, Holocaust Martyrs, Philosophers, Europe',
    shortBio: 'Jewish convert, Carmelite nun, and martyr of Auschwitz, canonized in 1998.',
    icon: '⚔️'
  },
  {
    id: 'st-expeditus',
    name: 'St. Expeditus',
    feastDay: 'April 19',
    category: 'Martyr Saints',
    patron: 'Urgent Causes, Procrastinators, Merchants, Sailors',
    shortBio: 'Roman centurion martyr, patron of urgent causes and immediate help, known for his decisive conversion.',
    icon: '⚔️'
  },
  {
    id: 'st-vitus',
    name: 'St. Vitus',
    feastDay: 'June 15',
    category: 'Martyr Saints',
    patron: 'Epileptics, Dancers, Actors, Protection Against Storms',
    shortBio: 'One of the Fourteen Holy Helpers, patron of epileptics and performing arts, converted at age twelve.',
    icon: '⚔️'
  },
  {
    id: 'st-pedro-calungsod',
    name: 'St. Pedro Calungsod',
    feastDay: 'April 2',
    category: 'Martyr Saints',
    patron: 'Filipino Catholics, Young Missionaries, Catechists, Guam',
    shortBio: 'Second Filipino saint, martyred at age 18 in Guam, missionary and catechist.',
    icon: '⚔️'
  },
  {
    id: 'st-john-neumann',
    name: 'St. John Neumann',
    feastDay: 'January 5',
    category: 'Modern Saints',
    patron: 'Catholic Education, Immigrants, Philadelphia, Redemptorists',
    shortBio: 'American bishop and founder of Catholic education, immigrant from Bohemia, Redemptorist missionary.',
    icon: '⛪'
  },
  {
    id: 'st-aloysius',
    name: 'St. Aloysius Gonzaga',
    feastDay: 'June 21',
    category: 'Modern Saints',
    patron: 'Youth, Students, Jesuit Novices, Purity',
    shortBio: 'Jesuit saint who achieved holiness at young age, patron of youth and students, died at 23.',
    icon: '⛪'
  },
  {
    id: 'st-emily-vialar',
    name: 'St. Emily de Vialar',
    feastDay: 'June 17',
    category: 'Modern Saints',
    patron: 'Healthcare Workers, Educators, Religious Foundresses',
    shortBio: 'Foundress of Sisters of St. Joseph of the Apparition, served the poor and educated children.',
    icon: '⛪'
  },
  {
    id: 'uganda-martyrs',
    name: 'Uganda Martyrs',
    feastDay: 'June 3',
    category: 'Martyr Saints',
    patron: 'Persecuted Christians, African Church, Youth, Uganda',
    shortBio: 'Twenty-two Catholic martyrs who died for their faith in 1886, witnesses to modern persecution.',
    icon: '⚔️'
  },
  {
    id: 'st-jane-frances-de-chantal',
    name: 'St. Jane Frances de Chantal',
    feastDay: 'August 12',
    category: 'Modern Saints',
    patron: 'Forgiveness, Widows, Visitation Order, Spiritual Friendship',
    shortBio: 'Foundress of the Visitation order, model of forgiveness and divine love, spiritual friend of St. Francis de Sales.',
    icon: '👰'
  },
  {
    id: 'st-rose-philippine-duchesne',
    name: 'St. Rose Philippine Duchesne',
    feastDay: 'November 18',
    category: 'Modern Saints',
    patron: 'Missionaries, Native Americans, Catholic Educators, Frontier Life',
    shortBio: 'Missionary to Native Americans, foundress of Sacred Heart schools in America, "the woman who is always praying".',
    icon: '🌹'
  },
  {
    id: 'st-benjamin',
    name: 'St. Benjamin',
    feastDay: 'March 31',
    category: 'Martyr Saints',
    patron: 'Deacons, Persecuted Christians, Preachers, Persian Christians',
    shortBio: 'Persian martyr and deacon who refused to be silenced, died for preaching Christ despite being released from prison.',
    icon: '⚔️'
  },
  {
    id: 'st-aaron',
    name: 'St. Aaron',
    feastDay: 'June 22',
    category: 'Early Saints',
    patron: 'Hermits, Abbots, Spiritual Directors, Celtic Christians',
    shortBio: 'British hermit and abbot who founded monastic community in Brittany, spiritual father of St. Malo.',
    icon: '🏝️'
  },
  {
    id: 'st-adrian',
    name: 'St. Adrian',
    feastDay: 'September 8',
    category: 'Martyr Saints',
    patron: 'Soldiers, Butchers, Converts, Military Officers',
    shortBio: 'Roman officer who converted to Christianity after witnessing Christian courage, died as a martyr.',
    icon: '⚔️'
  },
  {
    id: 'st-edward-the-confessor',
    name: 'St. Edward the Confessor',
    feastDay: 'October 13',
    category: 'King Saints',
    patron: 'Difficult Marriages, England, Kings and Rulers, Westminster Abbey',
    shortBio: 'Last Anglo-Saxon king of England, founder of Westminster Abbey, patron of difficult marriages.',
    icon: '👑'
  },
  {
    id: 'st-isabella-of-france',
    name: 'St. Isabella of France',
    feastDay: 'February 23',
    category: 'King Saints',
    patron: 'Royal Women, Consecrated Virgins, Franciscan Monasteries, France',
    shortBio: 'French princess, sister of St. Louis, founder of Franciscan monastery, model of royal humility.',
    icon: '👸'
  },
  {
    id: 'st-anne-of-constantinople',
    name: 'St. Anne of Constantinople',
    feastDay: 'July 23',
    category: 'Early Saints',
    patron: 'Hermitesses, Women Facing Arranged Marriages, Byzantine Christians, Contemplative Life',
    shortBio: 'Byzantine hermitess who fled arranged marriage to live in solitude, also known as Susanna.',
    icon: '🏔️'
  },
  {
    id: 'st-king-louis-ix',
    name: 'St. Louis IX',
    feastDay: 'August 25',
    category: 'King Saints',
    patron: 'France, Kings and Rulers, Crusaders, Christian Leadership, Justice',
    shortBio: 'King of France, led two crusades, founded Sorbonne, model of Christian kingship and justice.',
    icon: '👑'
  },
  {
    id: 'st-adele',
    name: 'St. Adele',
    feastDay: 'December 24',
    category: 'Widow Saints',
    patron: 'Widows, Religious Communities, Germany, Convents, Royal Women',
    shortBio: 'Widow and abbess, founded convent near Trier, disciple of St. Boniface, royal daughter.',
    icon: '👸'
  },
  {
    id: 'st-matilda',
    name: 'St. Matilda',
    feastDay: 'March 14',
    category: 'King Saints',
    patron: 'Queens, Charity, Germany, Religious Communities, Family Reconciliation, Widows',
    shortBio: 'Queen of Germany, mother of Otto the Great, founded convents and monasteries, model of royal charity.',
    icon: '👑'
  },
  {
    id: 'st-flora',
    name: 'St. Flora',
    feastDay: 'October 5',
    category: 'Virgin Saints',
    patron: 'Abandoned, Converts, Single Laywomen, Victims of Betrayal, Mystics, Religious Sisters',
    shortBio: 'Virgin and mystic, experienced ecstasies and levitation, patron of the abandoned and converts.',
    icon: '🌸'
  },
  {
    id: 'st-andre-bessette',
    name: 'St. Andre Bessette',
    feastDay: 'January 6',
    category: 'Modern Saints',
    patron: 'Physical Healing, Holy Cross Brothers, Canada, Porters, Impossible Causes, St. Joseph Devotion',
    shortBio: 'Holy Cross Brother who built St. Joseph\'s Oratory in Montreal, miracle worker and healer.',
    icon: '🛠️'
  },
  {
    id: 'st-genesius',
    name: 'St. Genesius',
    feastDay: 'August 25',
    category: 'Martyr Saints',
    patron: 'Actors, Artists, Theatre, Playwrights, Cultural Renewal, Conversion',
    shortBio: 'Actor and martyr who converted during a play mocking Christianity, patron of artists.',
    icon: '🎭'
  },
  {
    id: 'st-carmen',
    name: 'St. Carmen',
    feastDay: 'July 16',
    category: 'Carmelite Saints',
    patron: 'Carmelite Order, Marian Devotion, Scapular Wearers, Contemplative Life, Mount Carmel',
    shortBio: 'Carmelite saint whose name derives from Our Lady of Mount Carmel, patron of scapular devotion.',
    icon: '🌿'
  },
  {
    id: 'st-apollonia',
    name: 'St. Apollonia',
    feastDay: 'February 9',
    category: 'Martyr Saints',
    patron: 'Dental Diseases, Toothaches, Dentists, Dental Health, Pain Relief, Medical Suffering',
    shortBio: 'Martyr who endured brutal torture, patron of dental diseases and toothaches.',
    icon: '🦷'
  },
  {
    id: 'st-simeon',
    name: 'St. Simeon',
    feastDay: 'February 18',
    category: 'Bishop Saints',
    patron: 'Family Unity, Bishops, Jerusalem, Elderly Faithful, Jewish Converts, Family of Jesus',
    shortBio: 'Cousin of Jesus, second bishop of Jerusalem, martyred at age 120.',
    icon: '👨‍🦳'
  },
  {
    id: 'st-florian',
    name: 'St. Florian',
    feastDay: 'May 4',
    category: 'Martyr Saints',
    patron: 'Firefighters, Poland, Linz, Upper Austria, Fire Protection, Water Protection',
    shortBio: 'Roman army officer and martyr, patron of firefighters and Poland.',
    icon: '🚒'
  },
  {
    id: 'paul-miki-japanese-martyrs',
    name: 'St. Paul Miki & Japanese Martyrs',
    feastDay: 'February 6',
    category: 'Martyr Saints',
    patron: 'Japan, Asian Missions, Cultural Evangelization, Persecuted Christians, Jesuit Missions, Lay Evangelizers',
    shortBio: 'Jesuit priest and 25 companions crucified for faith in Japan under Toyotomi Hideyoshi.',
    icon: '⛩️'
  },
  {
    id: 'sts-cosmas-damian',
    name: 'Sts. Cosmas & Damian',
    feastDay: 'September 26',
    category: 'Martyr Saints',
    patron: 'Pharmacists, Physicians, Healthcare Workers, Medical Students, Hospitals, Charitable Service',
    shortBio: 'Twin brothers and physicians who practiced medicine without charge, martyred for faith.',
    icon: '💊'
  },
  {
    id: 'st-charbel-makhlouf',
    name: 'St. Charbel Makhlouf',
    feastDay: 'July 24',
    category: 'Modern Saints',
    patron: 'Lebanon, Maronite Church, Hermits, Contemplatives, Spiritual Healing, Eucharistic Devotion',
    shortBio: 'Maronite monk and hermit whose holiness and miracles continue to inspire worldwide.',
    icon: '🧘'
  },
  {
    id: 'st-joanna',
    name: 'St. Joanna',
    feastDay: 'May 24',
    category: 'Biblical Saints',
    patron: 'Women in the Church, Generous Discipleship, Witnesses of Faith, Social Justice, Courageous Faith, Easter Joy',
    shortBio: 'Wife of Chuza, disciple of Jesus, one of the women who discovered the empty tomb.',
    icon: '👸'
  },
  {
    id: 'st-chier',
    name: 'St. Chier',
    feastDay: 'Unknown',
    category: 'Virgin Saints',
    patron: 'Tipperary, Nenagh, Irish Virgins, Spiritual Discipleship, Consecrated Virginity, Irish Heritage',
    shortBio: 'Irish virgin and disciple of St. Fintan Munnu Kiara who lived near Nenagh, Tipperary.',
    icon: '☘️'
  },
  {
    id: 'blessed-rose-venerini',
    name: 'Blessed Rose Venerini',
    feastDay: 'May 7',
    category: 'Modern Saints',
    patron: 'Catholic Educators, Girls Education, Venerini Sisters, Italian Immigrants, Religious Education, Women Educators',
    shortBio: 'Pioneer of Catholic education for girls, founder of Venerini Sisters, teacher of teachers.',
    icon: '📚'
  },
  {
    id: 'st-germaine-pibrac',
    name: 'St. Germaine of Pibrac',
    feastDay: 'June 15',
    category: 'Modern Saints',
    patron: 'Abused Children, Shepherdesses, Forgiveness, Disabled Persons',
    shortBio: 'Abused shepherdess who became a saint through her extraordinary forgiveness and simple faith.',
    icon: '🌸'
  },
  {
    id: 'st-bonaventure',
    name: 'St. Bonaventure',
    feastDay: 'July 15',
    category: 'Doctor Saints',
    patron: 'Theologians, Students, Franciscans, Bishops',
    shortBio: 'Seraphic Doctor and Bishop of Albano, known for his mystical theology and Franciscan leadership.',
    icon: '📚'
  },
  {
    id: 'st-bartholomew',
    name: 'St. Bartholomew',
    feastDay: 'August 24',
    category: 'Apostle Saints',
    patron: 'Armenia, Leather Workers, Bookbinders, Missionaries',
    shortBio: 'One of the twelve apostles, preached in India and Armenia, martyred by flaying and beheading.',
    icon: '⚔️'
  },
  {
    id: 'st-anthony-desert',
    name: 'St. Anthony of the Desert',
    feastDay: 'January 17',
    category: 'Early Saints',
    patron: 'Monks, Hermits, Basket Makers, Gravediggers, Butchers, Epileptics',
    shortBio: 'Father of Monasticism, lived in Egyptian desert, battled demons, founded first monastic community.',
    icon: '🏜️'
  },
  {
    id: 'st-andrew',
    name: 'St. Andrew',
    feastDay: 'November 30',
    category: 'Apostle Saints',
    patron: 'Scotland, Russia, Greece, Fishermen, Fishmongers, Rope Makers',
    shortBio: 'First-called apostle, brother of St. Peter, preached in Greece, crucified on X-shaped cross.',
    icon: '✝️'
  },
  {
    id: 'st-john',
    name: 'St. John',
    feastDay: 'December 27',
    category: 'Apostle Saints',
    patron: 'Theologians, Writers, Publishers, Booksellers, Artists, Friendship',
    shortBio: 'Beloved disciple, author of Fourth Gospel, guardian of Blessed Virgin Mary, Apostle of Love.',
    icon: '🍷'
  },
  {
    id: 'st-philip',
    name: 'St. Philip',
    feastDay: 'May 3',
    category: 'Apostle Saints',
    patron: 'Hatters, Pastry Chefs, Merchants, Luxembourg, Uruguay, Evangelization',
    shortBio: 'Galilean apostle who brought Nathanael to Christ, preached in Phrygia, martyred for faith.',
    icon: '✝️'
  },
  {
    id: 'st-jude',
    name: 'St. Jude',
    feastDay: 'October 28',
    category: 'Apostle Saints',
    patron: 'Hopeless Causes, Desperate Cases, Hospitals, Armenia, Chicago, Police Officers',
    shortBio: 'Apostle of hopeless causes, brother of St. James the Less, author of Catholic Epistle.',
    icon: '⚔️'
  },
  {
    id: 'st-simon',
    name: 'St. Simon',
    feastDay: 'October 28',
    category: 'Apostle Saints',
    patron: 'Woodcutters, Sawyers, Curriers, Tanners, Leather Workers, Missionaries',
    shortBio: 'Zealot apostle, missionary partner of St. Jude, preached in Egypt and Persia, martyred by sawing.',
    icon: '🪚'
  },
  {
    id: 'st-matthias',
    name: 'St. Matthias',
    feastDay: 'May 14',
    category: 'Apostle Saints',
    patron: 'Apostolic Witness, Divine Election, Latecomers, Community Integration',
    shortBio: 'Apostle chosen to replace Judas and complete the twelve, witness to the resurrection.',
    icon: '⚔️'
  },
  {
    id: 'st-charles-borromeo',
    name: 'St. Charles Borromeo',
    feastDay: 'November 4',
    category: 'Modern Saints',
    patron: 'Bishops, Catechists, Lombardy, Italy, Cardinals, Seminarians',
    shortBio: 'Archbishop of Milan and great reformer of the Church during the Counter-Reformation.',
    icon: '⛪'
  },
  {
    id: 'st-ignatius-loyola',
    name: 'St. Ignatius Loyola',
    feastDay: 'July 31',
    category: 'Modern Saints',
    patron: 'Society of Jesus, Soldiers, Educators, Education',
    shortBio: 'Founder of the Society of Jesus (Jesuits) and author of the Spiritual Exercises.',
    icon: '⚔️'
  },
  {
    id: 'st-martin-of-tours',
    name: 'St. Martin of Tours',
    feastDay: 'November 11',
    category: 'Early Saints',
    patron: 'Poor, Soldiers, Conscientious Objectors, Tailors, Winemakers',
    shortBio: 'Bishop of Tours known for sharing his cloak with a beggar and establishing monastic life in Gaul.',
    icon: '🛡️'
  },
  {
    id: 'st-john-vianney',
    name: 'St. John Vianney',
    feastDay: 'August 4',
    category: 'Modern Saints',
    patron: 'Parish Priests, Confessors, Priests',
    shortBio: 'Curé of Ars, patron of parish priests, known for his extraordinary ministry in the confessional.',
    icon: '⛪'
  },
  {
    id: 'st-john-of-the-cross',
    name: 'St. John of the Cross',
    feastDay: 'December 14',
    category: 'Modern Saints',
    patron: 'Contemplatives, Mystics, Spanish Poets',
    shortBio: 'Doctor of the Church, mystic, and poet who co-founded the Discalced Carmelites with St. Teresa of Avila.',
    icon: '✝️'
  },
  {
    id: 'st-margaret-mary-alacoque',
    name: 'St. Margaret Mary Alacoque',
    feastDay: 'October 16',
    category: 'Modern Saints',
    patron: 'Devotees of the Sacred Heart, Polio Sufferers, Loss of Parents',
    shortBio: 'French Visitation nun and mystic who received revelations of the Sacred Heart of Jesus.',
    icon: '❤️'
  },
  {
    id: 'st-frances-xavier-cabrini',
    name: 'St. Frances Xavier Cabrini',
    feastDay: 'November 13',
    category: 'Modern Saints',
    patron: 'Immigrants, Hospital Administrators, Orphans',
    shortBio: 'First US citizen to be canonized, founder of the Missionary Sisters of the Sacred Heart.',
    icon: '🏥'
  },
  {
    id: 'st-albertus-magnus',
    name: 'St. Albertus Magnus',
    feastDay: 'November 15',
    category: 'Medieval Saints',
    patron: 'Scientists, Medical Technicians, Philosophers',
    shortBio: 'Doctor of the Church, teacher of St. Thomas Aquinas, patron of scientists.',
    icon: '🔬'
  },
  {
    id: 'st-rosalia',
    name: 'St. Rosalia',
    feastDay: 'September 4',
    category: 'Medieval Saints',
    patron: 'Palermo, Sicily, Against Plague',
    shortBio: 'Hermit and patron saint of Palermo, known for her life of solitude and prayer.',
    icon: '🌹'
  },
  {
    id: 'st-vincent-de-paul',
    name: 'St. Vincent de Paul',
    feastDay: 'September 27',
    category: 'Modern Saints',
    patron: 'Charitable Societies, Volunteers, Hospitals',
    shortBio: 'Apostle of Charity and Father of the Poor, founder of the Vincentians and Daughters of Charity.',
    icon: '❤️'
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
    id: 'sts-perpetua-and-felicity',
    name: 'Sts. Perpetua and Felicity',
    feastDay: 'March 7',
    category: 'Early Saints',
    patron: 'Mothers, Pregnant Women, Martyrs',
    shortBio: 'Early Christian martyrs whose courage and faith inspired the Church.',
    icon: '👑'
  },
  {
    id: 'st-catherine-of-bologna',
    name: 'St. Catherine of Bologna',
    feastDay: 'March 9',
    category: 'Modern Saints',
    patron: 'Artists, Liberal Arts, Against Temptations',
    shortBio: 'Italian nun, artist, and mystic who founded the Poor Clare monastery in Bologna.',
    icon: '🎨'
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
    id: 'st-martha',
    name: 'St. Martha',
    feastDay: 'July 29',
    category: 'Biblical Saints',
    patron: 'Servants, Cooks, Hospitality',
    shortBio: 'Sister of Mary and Lazarus, known for her hospitality and service to Jesus.',
    icon: '🍽️'
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
    name: 'St. Bernard',
    feastDay: 'August 20',
    category: 'Medieval Saints',
    patron: 'Beekeepers, Cistercian Order, Preachers',
    shortBio: 'Abbot and Doctor of the Church, known as the Mellifluous Doctor.',
    icon: '⛪'
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
    patron: 'Illness, People Ridiculed for Piety, Poverty, Shepherds, Shepherdesses, Lourdes',
    shortBio: 'Visionary of Lourdes and patron of illness, known for her humility and the miraculous spring.',
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
  },
  {
    id: 'st-damien-molokai',
    name: 'St. Damien of Molokai',
    feastDay: 'May 10',
    category: 'Missionary Saints',
    patron: 'Leprosy Patients, Outcasts',
    shortBio: 'Belgian priest who dedicated his life to serving leprosy patients in Hawaii.',
    icon: '🕊️'
  },
  {
    id: 'st-gertrude-great',
    name: 'St. Gertrude the Great',
    feastDay: 'November 16',
    category: 'Medieval Saints',
    patron: 'West Indies, Souls in Purgatory',
    shortBio: 'Benedictine mystic and theologian, pioneer of Sacred Heart devotion.',
    icon: '💝'
  },
  {
    id: 'st-emma',
    name: 'St. Emma',
    feastDay: 'December 3',
    category: 'Medieval Saints',
    patron: 'Bremen, The Poor, Widows',
    shortBio: 'First lady of Bremen, great benefactor of the poor and churches.',
    icon: '👑'
  },
  {
    id: 'st-roch',
    name: 'St. Roch',
    feastDay: 'August 16',
    category: 'Healing Saints',
    patron: 'Plague Victims, Invalids, The Sick',
    shortBio: 'Patron saint of plague victims and invalids, known for miraculous healing.',
    icon: '🏥'
  },
  {
    id: 'st-birgitta',
    name: 'St. Birgitta',
    feastDay: 'July 23',
    category: 'Medieval Saints',
    patron: 'Sweden, Religious Orders, Widows',
    shortBio: 'Founder of the Brigittine Order and patroness of Sweden.',
    icon: '👑'
  },
  {
    id: 'sts-joachim-anne',
    name: 'Sts. Joachim and Anne',
    feastDay: 'July 26',
    category: 'Marian Saints',
    patron: 'Parents, Grandparents, Married Couples',
    shortBio: 'Parents of the Blessed Virgin Mary and grandparents of Jesus.',
    icon: '👨‍👩‍👧'
  },
  {
    id: 'st-catherine-laboure',
    name: 'St. Catherine Labouré',
    feastDay: 'November 28',
    category: 'Modern Saints',
    patron: 'Elderly, Infirmed People, Miraculous Medal',
    shortBio: 'Visionary of the Miraculous Medal and patron of the elderly.',
    icon: '🌹'
  },
  {
    id: 'st-henry',
    name: 'St. Henry',
    feastDay: 'July 13',
    category: 'Medieval Saints',
    patron: 'Childless Couples, Dukes, Handicapped',
    shortBio: 'Holy Roman Emperor and patron of the childless and handicapped.',
    icon: '👑'
  },
  {
    id: 'st-ava',
    name: 'St. Ava',
    feastDay: 'April 29',
    category: 'Medieval Saints',
    patron: 'Visually Impaired, Benedictine Nuns, Abbesses',
    shortBio: 'Benedictine nun and abbess who was cured of blindness by St. Rainfredis.',
    icon: '👁️'
  },
  {
    id: 'st-anne-euphemianus',
    name: 'St. Anne (Euphemianus)',
    feastDay: 'Unknown',
    category: 'Early Saints',
    patron: 'Widows, Women Religious, Hidden Saints',
    shortBio: 'Widow who disguised herself as a man to enter monastic life on Mount Olympus.',
    icon: '🕊️'
  },
  {
    id: 'st-julia-corsica',
    name: 'St. Julia of Corsica',
    feastDay: 'May 23',
    category: 'Early Saints',
    patron: 'Corsica, Livorno, Torture Victims',
    shortBio: 'Virgin martyr who refused to renounce her faith even under torture.',
    icon: '🌴'
  },
  {
    id: 'st-lawrence',
    name: 'St. Lawrence',
    feastDay: 'August 10',
    category: 'Early Saints',
    patron: 'Deacons, Poor, Rome, Cooks',
    shortBio: 'Deacon and martyr who showed the true treasure of the Church.',
    icon: '🔥'
  },
  {
    id: 'st-miguel-pro',
    name: 'St. Miguel Pro',
    feastDay: 'November 23',
    category: 'Modern Saints',
    patron: 'Mexico, Jesuits, Persecuted Christians',
    shortBio: 'Jesuit priest and martyr who died proclaiming "Viva Cristo Rey".',
    icon: '✝️'
  },
  {
    id: 'st-john-of-god',
    name: 'St. John of God',
    feastDay: 'March 8',
    category: 'Modern Saints',
    patron: 'Hospitals, Nurses, Booksellers, Firefighters',
    shortBio: 'Founder of the Brothers Hospitallers and patron of healthcare.',
    icon: '🏥'
  },
  {
    id: 'st-zita',
    name: 'St. Zita',
    feastDay: 'April 27',
    category: 'Medieval Saints',
    patron: 'Domestic Workers, Housekeepers, Servants',
    shortBio: 'Patroness of domestic workers and model of humble service.',
    icon: '🧹'
  },
  {
    id: 'st-christina',
    name: 'St. Christina',
    feastDay: 'July 24',
    category: 'Early Saints',
    patron: 'Children, Child Martyrs, Converts',
    shortBio: 'Child martyr who bravely faced torture for her faith.',
    icon: '🕊️'
  },
  {
    id: 'st-adelaide',
    name: 'St. Adelaide',
    feastDay: 'December 16',
    category: 'Medieval Saints',
    patron: 'Abuse Victims, Widows, Queens',
    shortBio: 'Holy Roman Empress and patroness of abuse victims.',
    icon: '👑'
  },
  {
    id: 'st-colette',
    name: 'St. Colette',
    feastDay: 'March 6',
    category: 'Medieval Saints',
    patron: 'Poor Clares, Collettines, Religious Reformers',
    shortBio: 'Reformer of the Poor Clares and founder of the Collettines.',
    icon: '🕊️'
  },
  {
    id: 'st-victoria',
    name: 'St. Victoria',
    feastDay: 'December 23',
    category: 'Early Saints',
    patron: 'Young Women, Consecrated Virgins, Sisters',
    shortBio: 'Virgin martyr who refused pagan sacrifices with her sister St. Anatolia.',
    icon: '🌹'
  },
  {
    id: 'st-james-the-less',
    name: 'St. James the Less',
    feastDay: 'May 3',
    category: 'Apostle Saints',
    patron: 'Bishops, Jerusalem, Scripture Scholars',
    shortBio: 'Author of the Epistle of James and first Bishop of Jerusalem.',
    icon: '📜'
  },
  {
    id: 'st-frances-of-rome',
    name: 'St. Frances of Rome',
    feastDay: 'March 9',
    category: 'Medieval Saints',
    patron: 'Motorists, Widows, Rome',
    shortBio: 'Patroness of motorists and founder of the Oblates of Mary.',
    icon: '🚗'
  },
  {
    id: 'st-athanasius',
    name: 'St. Athanasius',
    feastDay: 'May 2',
    category: 'Early Saints',
    patron: 'Theologians, Alexandria, Orthodox Christians',
    shortBio: 'Father of Orthodoxy and champion of Christ\'s divinity.',
    icon: '⚔️'
  },
  {
    id: 'st-mary-mackillop',
    name: 'St. Mary MacKillop',
    feastDay: 'August 8',
    category: 'Modern Saints',
    patron: 'Australia, Archdiocese of Brisbane, Catholic Education',
    shortBio: 'Australia\'s first saint and founder of the Sisters of St. Joseph.',
    icon: '🇦🇺'
  },
  {
    id: 'st-bernardine-of-siena',
    name: 'St. Bernardine of Siena',
    feastDay: 'May 20',
    category: 'Medieval Saints',
    patron: 'Preachers, Public Speakers, Holy Name Devotion',
    shortBio: 'Great Franciscan preacher and promoter of the Holy Name of Jesus.',
    icon: '⛪'
  },
  {
    id: 'st-vincent-ferrer',
    name: 'St. Vincent Ferrer',
    feastDay: 'April 5',
    category: 'Medieval Saints',
    patron: 'Builders, Architects, Construction Workers',
    shortBio: 'Great Dominican missionary and patron saint of builders.',
    icon: '🏗️'
  },
  {
    id: 'st-chier',
    name: 'St. Chier',
    feastDay: 'Unknown',
    category: 'Virgin Saints',
    patron: 'Tipperary, Nenagh, Irish Virgins, Spiritual Discipleship, Consecrated Virginity, Irish Heritage',
    shortBio: 'Irish virgin and disciple of St. Fintan Munnu Kiara who lived near Nenagh, Tipperary.',
    icon: '☘️'
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
  { id: 'medieval', name: 'Medieval Saints', icon: '🔬' },
  { id: 'early', name: 'Early Saints', icon: '🏔️' },
  { id: 'martyr', name: 'Martyr Saints', icon: '⚔️' },
  { id: 'missionary', name: 'Missionary Saints', icon: '☘️' },
  { id: 'apostle', name: 'Apostle Saints', icon: '⚔️' },
  { id: 'archangel', name: 'Archangel Saints', icon: '👼' },
  { id: 'charity', name: 'Charity Saints', icon: '🌹' },
  { id: 'biblical', name: 'Biblical Saints', icon: '📜' },
  { id: 'king', name: 'King Saints', icon: '👑' },
  { id: 'widow', name: 'Widow Saints', icon: '👸' },
  { id: 'virgin', name: 'Virgin Saints', icon: '🌸' },
  { id: 'carmelite', name: 'Carmelite Saints', icon: '🌿' },
  { id: 'bishop', name: 'Bishop Saints', icon: '👨‍🦳' }
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