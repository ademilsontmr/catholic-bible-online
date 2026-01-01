export interface DevotionalReading {
  day: number;
  title: string;
  content: string;
  scripture?: string;
  prayer: string;
}

export interface Devotional {
  slug: string;
  title: string;
  author: string;
  description: string;
  longDescription: string;
  frequency: string;
  category: string;
  icon: string;
  readings: DevotionalReading[];
}

export const devotionals: Devotional[] = [
  // ============================================
  // CLASSIC CATHOLIC DEVOTIONALS
  // ============================================
  {
    slug: 'imitation-of-christ',
    title: 'The Imitation of Christ',
    author: 'Thomas à Kempis',
    description: 'Daily meditations from the most widely read Christian devotional book after the Bible.',
    longDescription: 'Written in the 15th century by Thomas à Kempis, The Imitation of Christ has guided countless souls toward holiness. This masterpiece of Catholic spirituality teaches us to follow Christ through humility, detachment from worldly things, and interior devotion. Each day brings a new meditation to transform your spiritual life.',
    frequency: 'Daily',
    category: 'Classic Catholic Devotionals',
    icon: '📚',
    readings: [
      {
        day: 1,
        title: 'Of the Imitation of Christ and Contempt of All the Vanities of the World',
        content: `<p>"He who follows Me, walks not in darkness," says the Lord. These are the words of Christ, by which we are taught to imitate His life and manners, if we would be truly enlightened and delivered from all blindness of heart.</p>
<p>Let therefore our chief endeavor be to meditate upon the life of Jesus Christ. The teaching of Christ exceeds all the teachings of the Saints, and he who has His Spirit will find therein a hidden manna.</p>
<p>But it happens that many, though they frequently hear the Gospel, feel little desire to follow it, because they have not the Spirit of Christ. Whoever would fully and with true relish understand the words of Christ must study to conform his whole life to Him.</p>
<p>What does it profit you to discourse profoundly of the Trinity, if you lack humility and are thereby displeasing to the Trinity? Truly, sublime words do not make a man holy and just, but a virtuous life makes him dear to God.</p>
<p>I would rather feel compunction than know how to define it. If you knew the whole Bible by heart and the sayings of all the philosophers, what would it profit you without the love of God and His grace?</p>
<p>"Vanity of vanities, and all is vanity," except to love God and serve Him alone. This is the highest wisdom: by contempt of the world to tend toward the kingdom of heaven.</p>`,
        scripture: 'John 8:12 - "I am the light of the world. Whoever follows me will not walk in darkness, but will have the light of life."',
        prayer: 'Lord Jesus Christ, You are the Way, the Truth, and the Life. Grant me the grace to follow You faithfully, to imitate Your humility and love, and to find in You alone my true happiness. Help me to see through the vanities of this world and to seek only what leads to eternal life. Through Your most holy Name. Amen.'
      },
      {
        day: 2,
        title: 'Of Thinking Humbly of Oneself',
        content: `<p>Every man naturally desires knowledge, but what good is knowledge without the fear of God? Indeed, a humble peasant who serves God is better than a proud philosopher who, neglecting himself, studies the course of the heavens.</p>
<p>He who knows himself well is mean in his own eyes and is not pleased with the praises of men. If I knew all things in the world and had not charity, what would it help me before God, who will judge me by my deeds?</p>
<p>Cease from an inordinate desire of knowing, for therein is found much distraction and deceit. The learned are glad to appear and to be called wise. There are many things which it is of little or no profit to the soul to know.</p>
<p>And he is very unwise who attends to other things than those that serve his salvation. Many words do not satisfy the soul, but a good life comforts the mind, and a pure conscience gives great confidence toward God.</p>
<p>The more you know and the better you understand, the more severely will you be judged, unless your life be also more holy. Be not therefore lifted up by any skill or knowledge that you have, but rather fear for the knowledge that is given you.</p>
<p>If you think you know many things and understand them well enough, know also that there are many more things of which you are ignorant. Be not high-minded, but rather acknowledge your ignorance.</p>`,
        scripture: 'Proverbs 3:7 - "Be not wise in your own eyes; fear the Lord, and turn away from evil."',
        prayer: 'O Lord, grant me true humility of heart. Help me to know myself as I truly am before You—a sinner in need of Your mercy. Deliver me from pride and vainglory. Let me seek not the praise of men but only Your approval. May I use whatever knowledge I have for Your glory and the salvation of souls. Amen.'
      },
      {
        day: 3,
        title: 'Of the Doctrine of Truth',
        content: `<p>Happy is he whom Truth itself teaches, not by figures and words that pass away, but as it is in itself. Our own opinion and our own sense often deceive us, and they discern but little.</p>
<p>What avails it to cavil and dispute much about dark and hidden things, for ignorance of which we shall not be reproved at the Day of Judgment? It is great folly to neglect the things that are profitable and necessary and to give our minds to that which is curious and hurtful.</p>
<p>We have eyes and see not. And what have we to do with genera and species? He to whom the Eternal Word speaks is delivered from a world of unnecessary conceptions.</p>
<p>From that one Word are all things, and all speak that one; and this is the Beginning which also speaks to us. No man without that Word understands or judges rightly.</p>
<p>He to whom all things are one, who reduces all things to one, and who sees all things in one, may be steady in heart and remain peacefully in God. O God, who art the Truth, make me one with Thee in everlasting love.</p>
<p>It wearies me often to read and hear many things. In Thee is all that I will and desire. Let all teachers hold their peace; let all creatures be silent before Thee: speak Thou alone to me.</p>`,
        scripture: 'John 14:6 - "Jesus said to him, I am the way, and the truth, and the life. No one comes to the Father except through me."',
        prayer: 'Eternal Word, speak to my heart. Silence the noise of the world and my own restless thoughts. Let me hear Your voice alone and find in You all truth and wisdom. Unite me to Yourself, O Lord, that I may see all things in the light of Your eternal truth. Amen.'
      },
      {
        day: 4,
        title: 'Of Prudence in Our Actions',
        content: `<p>We must not trust every word or impulse, but carefully and patiently ponder things according to the will of God. Alas! We are so weak that we often believe and speak evil of others rather than good.</p>
<p>But perfect men do not easily give credit to every tale, because they know that human weakness is prone to evil and very liable to fail in words. It is great wisdom not to be hasty in action, nor to cling stubbornly to our own opinions.</p>
<p>It is wisdom also not to believe everything we hear, nor to pour it immediately into other ears. Take counsel with a wise and conscientious man, and seek to be instructed by one better than yourself, rather than to follow your own inventions.</p>
<p>A good life makes a man wise according to God and gives him experience in many things. The more humble a man is in himself and the more subject to God, the wiser and more at peace he will be in all things.</p>`,
        scripture: 'James 1:19 - "Know this, my beloved brothers: let every person be quick to hear, slow to speak, slow to anger."',
        prayer: 'Lord, grant me prudence in all my actions. Help me to think before I speak, to listen before I judge, and to seek Your will before I act. Deliver me from rash decisions and hasty words. May I always seek wise counsel and remain humble in my own opinions. Amen.'
      },
      {
        day: 5,
        title: 'Of Reading the Holy Scriptures',
        content: `<p>Truth is to be sought in Holy Scripture, not eloquence. Every part of Scripture is to be read with the same Spirit with which it was written. We should rather seek profit in the Scriptures than subtlety of speech.</p>
<p>We ought to read simple and devout books as willingly as those that are high and profound. Let not the authority of the writer offend you, whether he be of great or small learning, but let the love of pure truth draw you to read.</p>
<p>Search not who spoke this, but mark what is spoken. Men pass away, but the truth of the Lord remains forever. God speaks to us in various ways without respect of persons.</p>
<p>Our own curiosity often hinders us in reading the Scriptures, when we wish to understand and discuss what we should simply pass over. If you would profit by reading, read humbly, simply, and faithfully, and never desire the reputation of being learned.</p>
<p>Inquire willingly and hear in silence the words of holy men; let not the parables of the elders displease you, for they are not spoken without cause.</p>`,
        scripture: '2 Timothy 3:16-17 - "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work."',
        prayer: 'Holy Spirit, open my heart to receive the Word of God. Help me to read Scripture not for knowledge alone but for transformation. Let Your truth penetrate my soul and change my life. Give me humility to accept what I read and courage to live it. Amen.'
      },
      {
        day: 6,
        title: 'Of Inordinate Affections',
        content: `<p>Whenever a man desires anything inordinately, he becomes restless in himself. The proud and covetous are never at rest. The poor and humble in spirit live in much peace.</p>
<p>The man who is not yet perfectly dead to himself is quickly tempted and overcome in small and trifling things. He who is weak in spirit and still somewhat carnal and inclined to sensible things can hardly withdraw himself entirely from earthly desires.</p>
<p>And therefore he is often afflicted when he withdraws himself from them, and easily falls into anger when anyone opposes him. But if he has obtained what he desires, he is immediately burdened with remorse of conscience, because he has followed his passion, which helps not at all toward the peace he sought.</p>
<p>True peace of heart, therefore, is found by resisting our passions, not by obeying them. There is no peace in the heart of a carnal man, nor in him who is given to outward things, but only in the fervent and spiritual man.</p>`,
        scripture: 'Galatians 5:16 - "But I say, walk by the Spirit, and you will not gratify the desires of the flesh."',
        prayer: 'Lord Jesus, free me from disordered attachments. Help me to desire only what leads to You and to find my peace in Your will alone. Mortify in me all that is contrary to Your love. Grant me the grace of holy detachment, that I may possess You who are my only true Good. Amen.'
      },
      {
        day: 7,
        title: 'Of Fleeing Vain Hope and Pride',
        content: `<p>He is vain who puts his trust in man or in creatures. Be not ashamed to serve others for the love of Jesus Christ, nor to be esteemed poor in this world.</p>
<p>Presume not upon yourself, but place your hope in God. Do what lies in your power, and God will assist your good will. Trust not in your own knowledge, nor in the cunning of any living creature, but rather in the grace of God, who helps the humble and humbles those who are proud.</p>
<p>Glory not in wealth if you have it, nor in friends because they are powerful, but in God who gives all things and who desires above all to give Himself.</p>
<p>Boast not of your stature nor of the beauty of your body, which is spoiled and disfigured by a little sickness. Take no pleasure in your ability or your wit, lest you displease God, to whom belongs all the natural good that you have.</p>
<p>Esteem not yourself better than others, lest perhaps in the sight of God, who knows what is in man, you be accounted worse than they. Be not proud of your good works, for the judgments of God are different from the judgments of men, and what pleases men often displeases Him.</p>`,
        scripture: 'Jeremiah 9:23-24 - "Let not the wise man boast in his wisdom, let not the mighty man boast in his might, let not the rich man boast in his riches, but let him who boasts boast in this, that he understands and knows me."',
        prayer: 'Humble my heart, O Lord. Strip away all vain pride and self-reliance. Let me glory only in You and in Your Cross. Help me to see that all good comes from You and to return all praise to You alone. Make me truly humble, that I may be truly great in Your kingdom. Amen.'
      }
    ]
  },
  // Story of a Soul - St. Thérèse of Lisieux
  {
    slug: 'story-of-a-soul',
    title: 'Story of a Soul',
    author: 'St. Thérèse of Lisieux',
    description: 'The autobiography of the Little Flower, teaching the "Little Way" of spiritual childhood.',
    longDescription: 'St. Thérèse of Lisieux, the Little Flower, wrote her autobiography at the request of her religious superiors. In it, she reveals her "Little Way" of spiritual childhood—a path of trust, simplicity, and love that has made her one of the most beloved saints and a Doctor of the Church. Her writings continue to inspire millions to approach God with childlike confidence.',
    frequency: 'Daily',
    category: 'Classic Catholic Devotionals',
    icon: '🌸',
    readings: [
      {
        day: 1,
        title: 'The Little Way of Spiritual Childhood',
        content: `<p>You know, Mother, I have always wanted to be a saint. But, alas! I have always noticed that when I compared myself to the saints, there is between them and me the same difference that exists between a mountain whose summit is lost in the clouds and the obscure grain of sand trampled underfoot by passers-by.</p>
<p>Instead of becoming discouraged, I said to myself: God cannot inspire unrealizable desires. I can, then, in spite of my littleness, aspire to holiness. It is impossible for me to grow up, and so I must bear with myself such as I am with all my imperfections.</p>
<p>But I want to seek out a means of going to heaven by a little way, a way that is very straight, very short, and totally new. We are living now in an age of inventions, and we no longer have to take the trouble of climbing stairs, for, in the homes of the rich, an elevator has replaced these very successfully.</p>
<p>I wanted to find an elevator which would raise me to Jesus, for I am too small to climb the rough stairway of perfection. I searched, then, in the Scriptures for some sign of this elevator, the object of my desires, and I read these words coming from the mouth of Eternal Wisdom: "Whoever is a little one, let him come to me."</p>
<p>The elevator which must raise me to heaven is Your arms, O Jesus! And for this I had no need to grow up, but rather I had to remain little and become this more and more.</p>`,
        scripture: 'Matthew 18:3 - "Truly, I say to you, unless you turn and become like children, you will never enter the kingdom of heaven."',
        prayer: 'Dear Little Flower, teach me your Little Way. Help me to approach Jesus with the confidence of a child, trusting completely in His love and mercy. May I not be discouraged by my weakness but find in it an invitation to rely more fully on God. St. Thérèse, pray for me. Amen.'
      },
      {
        day: 2,
        title: 'Love Proves Itself by Deeds',
        content: `<p>I understood that love comprises all vocations, that love is everything, that it embraces all times and all places... in a word, that it is eternal!</p>
<p>Then, in the excess of my delirious joy, I cried out: O Jesus, my Love... my vocation, at last I have found it... My vocation is Love! Yes, I have found my place in the Church and it is You, O my God, who have given me this place; in the heart of the Church, my Mother, I shall be Love.</p>
<p>Thus I shall be everything, and thus my dream will be realized. But how shall I show my love, since love proves itself by deeds? Well, the little child will strew flowers, she will perfume the royal throne with their sweet scents, and she will sing in her silvery tones the canticle of Love.</p>
<p>Yes, my Beloved, this is how my life will be consumed. I have no other means of proving my love for you other than that of strewing flowers, that is, not allowing one little sacrifice to escape, not one look, one word, profiting by all the smallest things and doing them through love.</p>
<p>I desire to suffer for love and even to rejoice through love; and in this way I shall strew flowers before Your throne. I shall not come upon one without unpetaling it for You. While I am strewing my flowers, I shall sing, for could one cry while doing such a joyous action? I shall sing even when I must gather my flowers in the midst of thorns, and my song will be all the more melodious in proportion to the length and sharpness of the thorns.</p>`,
        scripture: '1 John 3:18 - "Little children, let us not love in word or talk but in deed and in truth."',
        prayer: 'Jesus, my Love, help me to prove my love for You through small acts of sacrifice and kindness. May I never miss an opportunity to show You my love, even in the smallest things. Let my whole life be a song of love offered to You. Amen.'
      },
      {
        day: 3,
        title: 'Trust in God\'s Mercy',
        content: `<p>What pleases God is that He sees me loving my littleness and my poverty, the blind hope that I have in His mercy... That is my only treasure.</p>
<p>I am not disturbed at seeing myself weakness itself. On the contrary, it is in my weakness that I glory, and I expect each day to discover new imperfections in myself. Remembering that "charity covers a multitude of sins," I draw from this rich mine that Jesus has opened before me.</p>
<p>If I did not simply suffer from one moment to the next, it would be impossible for me to be patient; but I look only at the present, I forget the past, and I take good care not to forestall the future. When we yield to discouragement or despair, it is usually because we give too much thought to the past and to the future.</p>
<p>I know one must be very pure to appear before the God of all Holiness, but I know, too, that the Lord is infinitely just; and it is this justice which frightens so many souls that is the object of my joy and confidence.</p>
<p>To be just is not only to exercise severity in order to punish the guilty; it is also to recognize right intentions and to reward virtue. I expect as much from God's justice as from His mercy. It is because He is just that "He is compassionate and filled with gentleness, slow to punish, and abundant in mercy, for He knows our frailty, He remembers we are only dust."</p>`,
        scripture: 'Psalm 103:13-14 - "As a father shows compassion to his children, so the Lord shows compassion to those who fear him. For he knows our frame; he remembers that we are dust."',
        prayer: 'Merciful Father, I place all my trust in Your infinite mercy. I do not rely on my own merits but on Your compassionate love. Help me to live in the present moment, trusting that Your grace is sufficient for each day. May I never despair but always hope in Your goodness. Amen.'
      },
      {
        day: 4,
        title: 'Suffering with Love',
        content: `<p>I don't want to lay up merits for heaven. I want to work for Your Love alone with the one purpose of pleasing You, consoling Your Sacred Heart, and saving souls who will love You eternally.</p>
<p>In the evening of this life, I shall appear before You with empty hands, for I do not ask You, Lord, to count my works. All our justice is stained in Your eyes. I wish, then, to be clothed in Your own Justice and to receive from Your Love the eternal possession of Yourself.</p>
<p>I want no other Throne, no other Crown but You, my Beloved! Time is nothing in Your eyes, and a single day is like a thousand years. You can, then, in one instant prepare me to appear before You.</p>
<p>Suffering became my attraction; it had charms about it which ravished me without my understanding them very well. Up until this time, I had suffered without loving suffering, but since this day I felt a real love for it.</p>
<p>I also felt the desire of loving only God, of finding my joy only in Him. Often during my Communions, I repeated these words of the Imitation: "O Jesus, unspeakable sweetness, change all the consolations of earth into bitterness for me."</p>`,
        scripture: 'Colossians 1:24 - "Now I rejoice in my sufferings for your sake, and in my flesh I am filling up what is lacking in Christ\'s afflictions for the sake of his body, that is, the church."',
        prayer: 'Lord Jesus, teach me to embrace suffering with love. Help me to unite my trials with Your Passion for the salvation of souls. May I seek not consolation but only to console Your Sacred Heart. Let me find joy in sacrifice and peace in self-surrender. Amen.'
      },
      {
        day: 5,
        title: 'The Power of Prayer',
        content: `<p>For me, prayer is an aspiration of the heart, it is a simple glance directed to heaven, it is a cry of gratitude and love in the midst of trial as well as joy; finally, it is something great, supernatural, which expands my soul and unites me to Jesus.</p>
<p>I have not the courage to force myself to search out beautiful prayers in books. There are so many of them it really gives me a headache! And each prayer is more beautiful than the others. I cannot recite them all and not knowing which to choose, I do like children who do not know how to read, I say very simply to God what I wish to say, without composing beautiful sentences, and He always understands me.</p>
<p>For me, prayer is a surge of the heart; it is a simple look turned toward heaven, it is a cry of recognition and of love, embracing both trial and joy.</p>
<p>I feel then that the fervor of my Sisters makes up for my lack of fervor; but when alone (I am ashamed to admit it) the recitation of the rosary is more difficult for me than the wearing of an instrument of penance would be. I feel I have said it so poorly! I force myself in vain to meditate on the mysteries of the rosary; I don't succeed in fixing my mind on them.</p>
<p>For a long time I was desolate about this lack of devotion which astonished me, for I love the Blessed Virgin so much that it should be easy for me to recite in her honor prayers which are so pleasing to her. Now I am less desolate; I think that the Queen of heaven, since she is my Mother, must see my good will and she is satisfied with it.</p>`,
        scripture: 'Romans 8:26 - "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words."',
        prayer: 'Jesus, teach me to pray with simplicity and love. When words fail me, let my heart speak to You. Help me not to be discouraged by distractions but to offer You my good will. May my prayer be a simple glance of love toward heaven. Amen.'
      },
      {
        day: 6,
        title: 'Loving Those Who Are Difficult',
        content: `<p>There is in the Community a Sister who has the faculty of displeasing me in everything, in her ways, her words, her character, everything seems very disagreeable to me. And still, she is a holy religious who must be very pleasing to God.</p>
<p>Not wishing to give in to the natural antipathy I was experiencing, I told myself that charity must not consist in feelings but in works; then I set myself to doing for this Sister what I would do for the person I loved the most.</p>
<p>Each time I met her I prayed to God for her, offering Him all her virtues and merits. I felt this was pleasing to Jesus, for there is no artist who doesn't love to receive praise for his works, and Jesus, the Artist of souls, is happy when we don't stop at the exterior, but, penetrating into the inner sanctuary where He chooses to dwell, we admire its beauty.</p>
<p>I wasn't content simply with praying very much for this Sister who gave me so many struggles, but I took care to render her all the services possible, and when I was tempted to answer her back in a disagreeable manner, I was content with giving her my most friendly smile, and with changing the subject of the conversation.</p>
<p>Frequently, when I was at recreation and had occasion to work with this Sister, I used to run away like a deserter whenever my struggles became too violent. As she was absolutely unaware of my feelings for her, never did she suspect the motives for my conduct and she remained convinced that her character was very pleasing to me.</p>`,
        scripture: 'Matthew 5:44 - "But I say to you, Love your enemies and pray for those who persecute you."',
        prayer: 'Lord, give me the grace to love those I find difficult. Help me to see Your image in every person and to treat them with kindness regardless of my feelings. May I pray for those who irritate me and serve them with joy. Transform my heart to love as You love. Amen.'
      },
      {
        day: 7,
        title: 'My Heaven Will Be Spent Doing Good on Earth',
        content: `<p>I feel that my mission is about to begin, my mission of making God loved as I love Him, of giving my little way to souls. If God answers my desires, my heaven will be spent on earth until the end of the world. Yes, I want to spend my heaven in doing good on earth.</p>
<p>This isn't impossible, since from the bosom of the beatific vision, the angels watch over us. I cannot make heaven a feast of rejoicing; I cannot rest as long as there are souls to be saved. But when the angel will have said: "Time is no more!" then I will take my rest; I'll be able to rejoice, because the number of the elect will be complete and because all will have entered into joy and repose.</p>
<p>I really count on not remaining inactive in heaven. My desire is to work still for the Church and for souls. I am asking God for this and I am certain He will answer me. Are not the angels continually occupied with us without their ever ceasing to see the divine Face and to lose themselves in the ocean of Love without shores?</p>
<p>Why would Jesus not allow me to imitate them? You see that if I am leaving the field of battle, it is not with the selfish desire of taking my rest. The thought of eternal beatitude hardly thrills my heart. For a long time, suffering has become my heaven here below, and I really have difficulty in conceiving how I shall be able to acclimatize myself in a country where joy reigns without any admixture of sadness.</p>
<p>Jesus will have to transform my soul and give it the capacity to rejoice; otherwise I would not be able to put up with eternal delights. What attracts me to the homeland of heaven is the Lord's call, the hope of loving Him finally as I have so much desired to love Him, and the thought that I shall be able to make Him loved by a multitude of souls who will bless Him eternally.</p>`,
        scripture: 'Revelation 14:13 - "Blessed are the dead who die in the Lord from now on. Blessed indeed, says the Spirit, that they may rest from their labors, for their deeds follow them!"',
        prayer: 'St. Thérèse, Little Flower of Jesus, you promised to spend your heaven doing good on earth. Shower down your roses of grace upon me. Intercede for me before the throne of God. Help me to follow your Little Way of trust and love, that I too may bring souls to Jesus. Amen.'
      }
    ]
  },
  // Saint of the Day
  {
    slug: 'saint-of-the-day',
    title: 'Saint of the Day',
    author: 'Catholic Bible Online',
    description: 'Learn about the saint celebrated each day with biography and spiritual lessons.',
    longDescription: 'Each day the Church celebrates the memory of holy men and women who have gone before us in faith. This devotional introduces you to the saints of the liturgical calendar, sharing their stories, virtues, and the lessons they offer for our own spiritual journey. Let the saints be your companions and intercessors.',
    frequency: 'Daily',
    category: 'Saints for Today',
    icon: '👼',
    readings: [
      {
        day: 1,
        title: 'St. Thérèse of Lisieux - The Little Flower',
        content: `<p><strong>Feast Day: October 1</strong></p>
<p>Marie-Françoise-Thérèse Martin was born in Alençon, France, on January 2, 1873, the youngest of nine children. Her mother died when she was only four, and the family moved to Lisieux, where Thérèse was raised by her father and older sisters.</p>
<p>From an early age, Thérèse felt called to religious life. At fifteen, after a pilgrimage to Rome where she boldly asked Pope Leo XIII for permission to enter Carmel early, she was admitted to the Carmelite convent in Lisieux, joining two of her sisters who were already there.</p>
<p>In the convent, Thérèse developed her "Little Way" of spiritual childhood—a path of complete trust in God's mercy and love expressed through small, hidden acts of charity. She wrote: "I will seek out a means of getting to Heaven by a little way—very short and very straight, a little way that is wholly new."</p>
<p>Thérèse suffered greatly from tuberculosis in her final years, yet she maintained her trust in God even through spiritual darkness. She died on September 30, 1897, at age 24, whispering, "My God, I love You!"</p>
<p>Her autobiography, "Story of a Soul," written under obedience, became one of the most influential spiritual works of modern times. She was canonized in 1925 and declared a Doctor of the Church in 1997—one of only four women to receive this honor.</p>
<p><strong>Spiritual Lesson:</strong> St. Thérèse teaches us that holiness is not about great deeds but about doing small things with great love. Her Little Way invites us to approach God with childlike trust, confident in His mercy rather than our own merits.</p>`,
        scripture: 'Matthew 18:4 - "Whoever humbles himself like this child is the greatest in the kingdom of heaven."',
        prayer: 'St. Thérèse of Lisieux, you showed us that the path to holiness lies in doing small things with great love. Help me to embrace your Little Way, trusting completely in God\'s mercy. Teach me to find joy in hidden sacrifices and to love Jesus in the ordinary moments of each day. Shower down your roses of grace upon me and all who seek your intercession. Amen.'
      },
      {
        day: 2,
        title: 'St. Francis of Assisi - The Poverello',
        content: `<p><strong>Feast Day: October 4</strong></p>
<p>Giovanni di Pietro di Bernardone, known as Francis, was born in Assisi, Italy, around 1181 to a wealthy cloth merchant. As a young man, he lived a carefree life, dreaming of knightly glory. But a year as a prisoner of war and a serious illness began his conversion.</p>
<p>The turning point came when Francis, praying before a crucifix in the ruined church of San Damiano, heard Christ say: "Francis, rebuild my Church, which is falling into ruin." Taking these words literally at first, he began repairing churches. But he soon understood the deeper meaning—spiritual renewal of the Church.</p>
<p>Francis renounced his inheritance publicly, stripping off his fine clothes before the bishop and his father, declaring that God alone was now his Father. He embraced "Lady Poverty" as his bride and began preaching the Gospel with radical simplicity.</p>
<p>Others joined him, and the Franciscan Order was born. Francis sent his friars throughout Europe and even to the Muslim lands, where he personally met with Sultan al-Kamil during the Crusades, seeking peace through dialogue.</p>
<p>In 1224, while praying on Mount La Verna, Francis received the stigmata—the wounds of Christ—becoming the first recorded person to bear these marks. He died on October 3, 1226, singing Psalm 142 and welcoming "Sister Death."</p>
<p><strong>Spiritual Lesson:</strong> St. Francis teaches us the freedom that comes from detachment from material things. His love for creation, his embrace of poverty, and his joy in serving the poor and the sick show us how to follow Christ radically in our own circumstances.</p>`,
        scripture: 'Matthew 19:21 - "Jesus said to him, If you would be perfect, go, sell what you possess and give to the poor, and you will have treasure in heaven; and come, follow me."',
        prayer: 'Lord, make me an instrument of Your peace. Where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith; where there is despair, hope; where there is darkness, light; where there is sadness, joy. O Divine Master, grant that I may not so much seek to be consoled as to console, to be understood as to understand, to be loved as to love. For it is in giving that we receive, it is in pardoning that we are pardoned, and it is in dying that we are born to eternal life. Amen.'
      },
      {
        day: 3,
        title: 'St. Padre Pio - The Stigmatist of San Giovanni Rotondo',
        content: `<p><strong>Feast Day: September 23</strong></p>
<p>Francesco Forgione was born on May 25, 1887, in Pietrelcina, Italy. From childhood, he experienced visions and mystical phenomena. At fifteen, he entered the Capuchin Franciscan order, taking the name Pio.</p>
<p>On September 20, 1918, while praying before a crucifix, Padre Pio received the visible stigmata—the five wounds of Christ. He bore these wounds for fifty years until his death, and they were examined by numerous doctors who could find no natural explanation.</p>
<p>Padre Pio became famous as a confessor, spending up to sixteen hours a day in the confessional. He had the gift of reading souls, often knowing penitents' sins before they confessed them. He also experienced bilocation, the odor of sanctity, and miraculous healings.</p>
<p>Despite his extraordinary gifts, Padre Pio endured great suffering—physical pain from the stigmata, spiritual attacks from the devil, and even suspicion from Church authorities who at one point restricted his ministry. He accepted all with patience and obedience.</p>
<p>He founded the Casa Sollievo della Sofferenza (Home for the Relief of Suffering), a hospital that continues to serve thousands. He died on September 23, 1968, and was canonized by Pope John Paul II in 2002.</p>
<p><strong>Spiritual Lesson:</strong> Padre Pio teaches us the power of the sacraments, especially Confession and the Eucharist. His life shows that suffering united to Christ's Passion has redemptive value, and that obedience to the Church, even when difficult, is the path of holiness.</p>`,
        scripture: 'Galatians 6:17 - "From now on let no one cause me trouble, for I bear on my body the marks of Jesus."',
        prayer: 'St. Padre Pio, you bore the wounds of Christ in your body and the love of Christ in your heart. Intercede for me, that I may have a deep love for the Eucharist and a sincere sorrow for my sins. Help me to embrace my daily crosses with patience and to offer them for the salvation of souls. Pray for me, that I may persevere in faith until the end. Amen.'
      },
      {
        day: 4,
        title: 'St. Teresa of Calcutta - Mother Teresa',
        content: `<p><strong>Feast Day: September 5</strong></p>
<p>Anjezë Gonxhe Bojaxhiu was born on August 26, 1910, in Skopje (now North Macedonia) to Albanian parents. At eighteen, she joined the Sisters of Loreto in Ireland and was sent to India, where she taught at a school for girls in Calcutta.</p>
<p>On September 10, 1946, during a train ride to Darjeeling, Mother Teresa received what she called "the call within the call"—a divine inspiration to leave the convent and serve Christ among the poorest of the poor. After receiving permission, she began her work in the slums of Calcutta in 1948.</p>
<p>She founded the Missionaries of Charity, whose members take a fourth vow—to give "wholehearted free service to the poorest of the poor." The order grew to over 4,000 sisters serving in 133 countries, running hospices, orphanages, and centers for the dying.</p>
<p>What the world did not know until after her death was that Mother Teresa experienced a profound spiritual darkness for nearly fifty years. Her private letters reveal intense feelings of God's absence, yet she persevered in faith and service.</p>
<p>She received the Nobel Peace Prize in 1979 and died on September 5, 1997. She was canonized by Pope Francis in 2016.</p>
<p><strong>Spiritual Lesson:</strong> Mother Teresa teaches us to see Christ in the distressing disguise of the poor. Her hidden suffering shows that feelings are not faith—we can serve God faithfully even when we don't feel His presence. "Do small things with great love."</p>`,
        scripture: 'Matthew 25:40 - "Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me."',
        prayer: 'St. Teresa of Calcutta, you saw the face of Jesus in the poorest of the poor. Help me to recognize Christ in everyone I meet, especially those who are suffering, lonely, or forgotten. Give me the courage to serve with joy, even when I feel empty inside. Teach me that it is not about what I feel but about what I do for love of God. Amen.'
      },
      {
        day: 5,
        title: 'St. John Paul II - The Great',
        content: `<p><strong>Feast Day: October 22</strong></p>
<p>Karol Józef Wojtyła was born on May 18, 1920, in Wadowice, Poland. He lost his mother at age eight, his brother at twelve, and his father at twenty. These losses deepened his faith and reliance on Mary as his spiritual mother.</p>
<p>During the Nazi occupation, Karol worked in a quarry and chemical factory while secretly studying for the priesthood. He was ordained in 1946 and quickly distinguished himself as a philosopher, poet, and pastor.</p>
<p>Elected Pope on October 16, 1978, John Paul II became one of the most influential figures of the twentieth century. He made 104 pastoral visits to 129 countries, canonized more saints than all previous popes combined, and played a crucial role in the fall of communism in Eastern Europe.</p>
<p>His teachings on the Theology of the Body, human dignity, and the culture of life continue to shape Catholic thought. He survived an assassination attempt in 1981 and later forgave his would-be assassin, visiting him in prison.</p>
<p>In his final years, John Paul II suffered publicly from Parkinson's disease, offering his suffering for the Church. He died on April 2, 2005, and was canonized in 2014.</p>
<p><strong>Spiritual Lesson:</strong> St. John Paul II teaches us to "Be not afraid!" His life shows that suffering can be redemptive, that forgiveness is always possible, and that every person has infinite dignity as created in God's image.</p>`,
        scripture: 'Joshua 1:9 - "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go."',
        prayer: 'St. John Paul II, you taught us not to be afraid and to open wide the doors to Christ. Help me to embrace my vocation with courage and to defend the dignity of every human life. Intercede for the Church you loved so deeply, for families, for young people, and for all who seek the truth. Totus Tuus—I am all Yours, O Mary. Amen.'
      },
      {
        day: 6,
        title: 'St. Maximilian Kolbe - The Martyr of Charity',
        content: `<p><strong>Feast Day: August 14</strong></p>
<p>Rajmund Kolbe was born on January 8, 1894, in Poland. As a child, he had a vision of the Virgin Mary offering him two crowns—one white for purity, one red for martyrdom. He chose both.</p>
<p>He entered the Conventual Franciscans, taking the name Maximilian. Brilliant in philosophy and theology, he earned two doctorates in Rome. But his greatest passion was spreading devotion to the Immaculate Virgin Mary.</p>
<p>In 1917, he founded the Militia Immaculatae (Army of Mary), dedicated to converting sinners through Marian consecration. He established a religious community in Poland called Niepokalanów (City of the Immaculate), which grew to house 800 friars and published a daily newspaper with a circulation of 230,000.</p>
<p>When the Nazis invaded Poland, Maximilian was arrested and sent to Auschwitz. In July 1941, when a prisoner escaped, the Nazis selected ten men to die by starvation as punishment. When one of the selected men, Franciszek Gajowniczek, cried out for his wife and children, Maximilian stepped forward and offered to take his place.</p>
<p>After two weeks in the starvation bunker, Maximilian was still alive, praying and singing hymns. He was killed by lethal injection on August 14, 1941. He was canonized in 1982, with Franciszek Gajowniczek present at the ceremony.</p>
<p><strong>Spiritual Lesson:</strong> St. Maximilian Kolbe teaches us that the greatest love is to lay down one's life for another. His devotion to Mary shows us the power of Marian consecration, and his martyrdom reveals that love is stronger than death.</p>`,
        scripture: 'John 15:13 - "Greater love has no one than this, that someone lay down his life for his friends."',
        prayer: 'St. Maximilian Kolbe, knight of the Immaculata, you gave your life for a stranger out of love for Christ and His Mother. Help me to live with the same selfless love, ready to sacrifice for others. Through your intercession, may I grow in devotion to Mary and in courage to witness to Christ, even unto death. Amen.'
      },
      {
        day: 7,
        title: 'St. Faustina Kowalska - The Apostle of Divine Mercy',
        content: `<p><strong>Feast Day: October 5</strong></p>
<p>Helena Kowalska was born on August 25, 1905, in Głogowiec, Poland, the third of ten children in a poor farming family. She had only three years of formal education but possessed extraordinary spiritual gifts.</p>
<p>At nineteen, she entered the Congregation of the Sisters of Our Lady of Mercy, taking the name Maria Faustina. She worked as a cook, gardener, and porter—humble tasks that hid her profound mystical life.</p>
<p>Beginning in 1931, Sister Faustina received visions of Jesus, who asked her to spread devotion to His Divine Mercy. He dictated to her the Divine Mercy Chaplet and requested that an image be painted with the inscription "Jesus, I Trust in You." He also asked that the Sunday after Easter be celebrated as Divine Mercy Sunday.</p>
<p>Faustina recorded her mystical experiences in a diary, later published as "Divine Mercy in My Soul." Despite her lack of education, this work is a profound theological treatise on God's mercy.</p>
<p>She suffered from tuberculosis and died on October 5, 1938, at age 33. She was canonized by Pope John Paul II on April 30, 2000—Divine Mercy Sunday—and her message has spread throughout the world.</p>
<p><strong>Spiritual Lesson:</strong> St. Faustina teaches us that God's mercy is infinite and available to all who trust in Him. No sin is too great for His mercy. The Divine Mercy devotion she received invites us to trust in Jesus, be merciful to others, and spread the message of mercy.</p>`,
        scripture: 'Psalm 136:1 - "Give thanks to the Lord, for he is good, for his steadfast love endures forever."',
        prayer: 'Jesus, I trust in You! St. Faustina, apostle of Divine Mercy, help me to trust completely in God\'s infinite mercy. Teach me to be merciful to others in deed, word, and prayer. May I never doubt God\'s love, no matter how great my sins. Through your intercession, may the whole world come to know and trust in the mercy of Jesus. Amen.'
      }
    ]
  },
  // Daily Examen
  {
    slug: 'daily-examen',
    title: 'Daily Examen',
    author: 'Ignatian Spirituality',
    description: 'St. Ignatius\'s powerful prayer for reviewing your day with God.',
    longDescription: 'The Daily Examen is a technique of prayerful reflection on the events of the day developed by St. Ignatius of Loyola, founder of the Jesuits. This simple yet profound practice helps us detect God\'s presence and discern His direction for our lives. Ignatius considered it so important that he urged his followers to practice it twice daily.',
    frequency: 'Daily',
    category: 'Prayer & Meditation',
    icon: '🙏',
    readings: [
      {
        day: 1,
        title: 'Introduction to the Examen',
        content: `<p>The Daily Examen is a method of prayer that St. Ignatius of Loyola developed to help us find God in all things. It is not an examination of conscience focused on sin, but rather a review of the day to discover where God was present and how we responded to His grace.</p>
<p>St. Ignatius believed that God is always communicating with us—through events, people, feelings, and circumstances. The Examen helps us become aware of this divine communication and respond more fully to God's invitations.</p>
<p><strong>The Five Steps of the Examen:</strong></p>
<ol>
<li><strong>Become aware of God's presence.</strong> Begin by placing yourself in God's presence. Ask for the light of the Holy Spirit to help you see your day as God sees it.</li>
<li><strong>Review the day with gratitude.</strong> Walk through your day, noting the blessings you received. Give thanks for each gift, no matter how small.</li>
<li><strong>Pay attention to your emotions.</strong> Reflect on the feelings you experienced during the day. Where did you feel joy, peace, or love? Where did you feel anxiety, anger, or sadness? These emotions are clues to God's presence or absence in your choices.</li>
<li><strong>Choose one feature of the day and pray from it.</strong> Select one moment that stands out—perhaps a moment of consolation or desolation—and talk to God about it.</li>
<li><strong>Look toward tomorrow.</strong> Ask God for the grace you need for the coming day. Resolve to be more attentive to His presence.</li>
</ol>
<p>The Examen typically takes 10-15 minutes and can be done at any time, though evening is traditional. With practice, it becomes a natural way of living in God's presence throughout the day.</p>`,
        scripture: 'Psalm 139:23-24 - "Search me, O God, and know my heart! Try me and know my thoughts! And see if there be any grievous way in me, and lead me in the way everlasting!"',
        prayer: 'Lord, I believe You are present with me now. Open my eyes to see where You have been at work in my life today. Give me a grateful heart for Your many blessings. Help me to recognize the movements of Your Spirit and to follow where You lead. I offer You this day and ask for Your grace for tomorrow. Amen.'
      },
      {
        day: 2,
        title: 'Gratitude: The Foundation of the Examen',
        content: `<p>The second step of the Examen—reviewing the day with gratitude—is perhaps the most important. St. Ignatius understood that gratitude opens our hearts to God and helps us recognize His constant presence in our lives.</p>
<p><strong>Why Gratitude Matters:</strong></p>
<p>Gratitude shifts our focus from what we lack to what we have received. It transforms our perspective from scarcity to abundance. When we cultivate gratitude, we begin to see that every moment is a gift from God.</p>
<p><strong>Practicing Gratitude in the Examen:</strong></p>
<p>As you review your day, look for gifts both large and small:</p>
<ul>
<li>The gift of waking up to a new day</li>
<li>Food, shelter, and basic necessities</li>
<li>Moments of beauty—a sunrise, a flower, a child's smile</li>
<li>Acts of kindness from others</li>
<li>Opportunities to serve and love</li>
<li>Challenges that helped you grow</li>
<li>The gift of faith and the sacraments</li>
</ul>
<p>Even difficult experiences can be occasions for gratitude when we see them as opportunities for growth or as moments when God's grace sustained us.</p>
<p><strong>The Fruit of Gratitude:</strong></p>
<p>Regular practice of gratitude in the Examen leads to a more joyful, peaceful life. We become less anxious about the future because we trust the God who has blessed us in the past. We become more generous because we recognize that all we have is gift.</p>`,
        scripture: '1 Thessalonians 5:18 - "Give thanks in all circumstances; for this is the will of God in Christ Jesus for you."',
        prayer: 'Generous God, You shower me with blessings every day, yet I so often fail to notice them. Open my eyes to see Your gifts all around me. Help me to cultivate a grateful heart that recognizes Your presence in every moment. May my gratitude overflow into praise and generous service to others. Amen.'
      },
      {
        day: 3,
        title: 'Consolation and Desolation',
        content: `<p>A key concept in Ignatian spirituality is the distinction between consolation and desolation. These are not simply good and bad feelings, but spiritual movements that reveal something about our relationship with God.</p>
<p><strong>Consolation:</strong></p>
<p>Spiritual consolation is any increase in faith, hope, and love. It includes:</p>
<ul>
<li>Feeling drawn closer to God</li>
<li>Experiencing peace, joy, or gratitude</li>
<li>Being moved to tears of love or sorrow for sin</li>
<li>Feeling energized for prayer and service</li>
<li>Sensing clarity about God's will</li>
</ul>
<p>Consolation is a sign that we are moving in the right direction, aligned with God's will for our lives.</p>
<p><strong>Desolation:</strong></p>
<p>Spiritual desolation is the opposite—a decrease in faith, hope, and love. It includes:</p>
<ul>
<li>Feeling distant from God</li>
<li>Experiencing darkness, confusion, or restlessness</li>
<li>Being tempted to give up on prayer or faith</li>
<li>Feeling drawn toward selfishness or sin</li>
<li>Losing hope or trust in God</li>
</ul>
<p>Desolation is not necessarily a sign of sin—even saints experienced it. But it is a warning to be vigilant and to seek God more earnestly.</p>
<p><strong>Rules for Discernment:</strong></p>
<p>In consolation: Give thanks, store up grace for harder times, and don't make major changes.</p>
<p>In desolation: Don't make major decisions, increase prayer and penance, remember that it will pass, and trust that God is still present even when you can't feel Him.</p>`,
        scripture: 'Psalm 42:5 - "Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God."',
        prayer: 'Lord, help me to recognize the movements of consolation and desolation in my soul. In times of consolation, keep me humble and grateful. In times of desolation, give me perseverance and trust. May I always seek You, whether I feel Your presence or not, knowing that You never abandon those who love You. Amen.'
      },
      {
        day: 4,
        title: 'Finding God in All Things',
        content: `<p>The goal of the Examen—and of all Ignatian spirituality—is to "find God in all things." This means recognizing God's presence not just in church or prayer, but in every aspect of daily life.</p>
<p><strong>God in the Ordinary:</strong></p>
<p>St. Ignatius discovered that God is present in:</p>
<ul>
<li>Our work and daily responsibilities</li>
<li>Our relationships with family and friends</li>
<li>Moments of joy and celebration</li>
<li>Times of suffering and struggle</li>
<li>Nature and the created world</li>
<li>Art, music, and beauty</li>
<li>The faces of the poor and suffering</li>
</ul>
<p><strong>Contemplatives in Action:</strong></p>
<p>Ignatius wanted his followers to be "contemplatives in action"—people who maintain a deep interior life while actively engaged in the world. The Examen helps us develop this capacity by training us to notice God throughout the day.</p>
<p><strong>Practicing Awareness:</strong></p>
<p>As you go through your day, try to pause occasionally and ask: "Where is God in this moment?" Over time, this practice becomes second nature, and you begin to live in continuous awareness of God's presence.</p>
<p>The Examen at day's end then becomes a review of these moments of awareness, deepening your recognition of God's constant companionship.</p>`,
        scripture: 'Acts 17:28 - "In him we live and move and have our being."',
        prayer: 'Lord, You are present in every moment of my life, yet I so often fail to notice You. Open my eyes to see You in the ordinary events of each day. Help me to find You in my work, my relationships, my joys, and my sorrows. May I become a contemplative in action, always aware of Your loving presence. Amen.'
      },
      {
        day: 5,
        title: 'The Examen and Discernment',
        content: `<p>One of the most valuable fruits of the Daily Examen is growth in discernment—the ability to recognize God's will and make decisions that align with His purposes for our lives.</p>
<p><strong>What is Discernment?</strong></p>
<p>Discernment is the process of discovering what God wants us to do in a particular situation. It involves:</p>
<ul>
<li>Listening to God in prayer</li>
<li>Paying attention to interior movements</li>
<li>Seeking wise counsel</li>
<li>Considering the fruits of different choices</li>
<li>Acting in faith and evaluating the results</li>
</ul>
<p><strong>The Examen as a School of Discernment:</strong></p>
<p>Regular practice of the Examen trains us in discernment by helping us:</p>
<ul>
<li>Recognize patterns in our spiritual life</li>
<li>Identify what brings us closer to God</li>
<li>Notice what leads us away from God</li>
<li>Understand our deepest desires</li>
<li>Distinguish God's voice from other voices</li>
</ul>
<p><strong>Making Decisions:</strong></p>
<p>When facing a decision, use the Examen to reflect on how different options affect your spiritual state. Which choice brings peace and draws you closer to God? Which causes anxiety or leads you away from Him? These interior movements are important data for discernment.</p>`,
        scripture: 'Romans 12:2 - "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect."',
        prayer: 'Holy Spirit, guide me in all my decisions. Help me to discern Your will through the practice of the Examen. Give me the wisdom to recognize Your voice and the courage to follow where You lead. May I always choose what brings me closer to You and serves Your kingdom. Amen.'
      },
      {
        day: 6,
        title: 'Praying with Emotions',
        content: `<p>The third step of the Examen invites us to pay attention to our emotions. This may seem unusual—aren't we supposed to control our feelings rather than dwell on them? But Ignatius understood that emotions are valuable spiritual data.</p>
<p><strong>Why Emotions Matter:</strong></p>
<p>Our emotions reveal what is happening in our hearts. They show us what we truly value, what we fear, what we desire. By paying attention to our feelings, we gain insight into our spiritual state.</p>
<p><strong>Emotions as Spiritual Indicators:</strong></p>
<p>Positive emotions like joy, peace, gratitude, and love often indicate that we are aligned with God's will. Negative emotions like anxiety, anger, resentment, and despair may signal that something is amiss in our spiritual life.</p>
<p>However, we must be careful not to oversimplify. Sometimes we feel peace when we shouldn't (false consolation), and sometimes we feel distress when we're actually on the right path (the cost of discipleship).</p>
<p><strong>Bringing Emotions to Prayer:</strong></p>
<p>In the Examen, we don't just notice our emotions—we bring them to God. We talk to Him about what we felt during the day:</p>
<ul>
<li>"Lord, I felt such joy when..."</li>
<li>"I was anxious about..."</li>
<li>"I felt angry when..."</li>
<li>"I experienced peace during..."</li>
</ul>
<p>This honest conversation with God deepens our relationship with Him and helps us understand ourselves better.</p>`,
        scripture: 'Psalm 62:8 - "Trust in him at all times, O people; pour out your heart before him; God is a refuge for us."',
        prayer: 'Lord, I bring You all my emotions—the joyful and the painful, the peaceful and the anxious. Help me to understand what they reveal about my heart. Heal the wounds that cause negative emotions, and deepen the love that brings joy. May I always be honest with You about what I feel, trusting in Your compassionate understanding. Amen.'
      },
      {
        day: 7,
        title: 'Living the Examen',
        content: `<p>The Daily Examen is not just a prayer technique—it's a way of life. With practice, the Examen transforms how we experience each day, making us more aware of God's presence and more responsive to His grace.</p>
<p><strong>Making the Examen a Habit:</strong></p>
<p>To benefit from the Examen, we need to practice it regularly. Here are some tips:</p>
<ul>
<li>Choose a consistent time—evening works well for most people</li>
<li>Find a quiet place where you won't be interrupted</li>
<li>Start with just 10 minutes and gradually extend if desired</li>
<li>Use a journal to record insights</li>
<li>Be patient—it takes time to develop this skill</li>
</ul>
<p><strong>The Examen Throughout the Day:</strong></p>
<p>As you become more practiced, you can do brief "mini-examens" throughout the day—pausing to notice God's presence and your response to it. This keeps you connected to God even in busy times.</p>
<p><strong>Fruits of the Examen:</strong></p>
<p>Regular practice of the Examen leads to:</p>
<ul>
<li>Greater awareness of God's presence</li>
<li>Increased gratitude and joy</li>
<li>Better self-knowledge</li>
<li>Improved discernment</li>
<li>Deeper prayer life</li>
<li>More intentional living</li>
<li>Growth in virtue</li>
</ul>
<p>The Examen is a gift from St. Ignatius to the whole Church. May it help you find God in all things and respond generously to His love.</p>`,
        scripture: 'Lamentations 3:40 - "Let us test and examine our ways, and return to the Lord!"',
        prayer: 'Lord, thank You for the gift of the Examen. Help me to make it a regular part of my life. Through this practice, may I grow in awareness of Your presence, gratitude for Your gifts, and responsiveness to Your grace. Transform me day by day into the person You created me to be. Amen.'
      }
    ]
  },
  // Gospel of the Day
  {
    slug: 'gospel-of-the-day',
    title: 'Gospel of the Day',
    author: 'Catholic Bible Online',
    description: 'Daily Gospel reading with Catholic reflection and application.',
    longDescription: 'Each day, the Church proclaims a passage from one of the four Gospels at Mass. This devotional provides the daily Gospel reading along with a reflection rooted in Catholic tradition, helping you to hear God\'s Word and apply it to your life. Let the words of Jesus transform your heart.',
    frequency: 'Daily',
    category: 'Scripture & Faith',
    icon: '📖',
    readings: [
      {
        day: 1,
        title: 'The Beatitudes - The Path to True Happiness',
        content: `<p><strong>Gospel Reading: Matthew 5:1-12</strong></p>
<p>Seeing the crowds, Jesus went up on the mountain, and when he sat down, his disciples came to him. And he opened his mouth and taught them, saying:</p>
<p>"Blessed are the poor in spirit, for theirs is the kingdom of heaven.</p>
<p>Blessed are those who mourn, for they shall be comforted.</p>
<p>Blessed are the meek, for they shall inherit the earth.</p>
<p>Blessed are those who hunger and thirst for righteousness, for they shall be satisfied.</p>
<p>Blessed are the merciful, for they shall receive mercy.</p>
<p>Blessed are the pure in heart, for they shall see God.</p>
<p>Blessed are the peacemakers, for they shall be called sons of God.</p>
<p>Blessed are those who are persecuted for righteousness' sake, for theirs is the kingdom of heaven.</p>
<p>Blessed are you when others revile you and persecute you and utter all kinds of evil against you falsely on my account. Rejoice and be glad, for your reward is great in heaven."</p>
<hr>
<p><strong>Reflection:</strong></p>
<p>The Beatitudes turn the world's values upside down. The world says: Blessed are the rich, the powerful, the famous. Jesus says: Blessed are the poor, the meek, the persecuted.</p>
<p>The Catechism teaches that the Beatitudes "reveal the goal of human existence, the ultimate end of human acts: God calls us to his own beatitude" (CCC 1719). They are not just nice ideals but a roadmap to true happiness—the happiness that comes from union with God.</p>
<p>Each Beatitude describes both a present condition and a future promise. The poor in spirit already possess the kingdom; those who mourn will be comforted. This "already but not yet" quality reminds us that we live between Christ's first and second coming, experiencing foretastes of heaven while awaiting its fullness.</p>
<p>Which Beatitude speaks most to your life right now? Perhaps you are mourning a loss and need to hear the promise of comfort. Perhaps you are called to be a peacemaker in a divided family or workplace. Let Jesus' words penetrate your heart and show you the path to true blessedness.</p>`,
        scripture: 'Matthew 5:3 - "Blessed are the poor in spirit, for theirs is the kingdom of heaven."',
        prayer: 'Lord Jesus, You taught us the way to true happiness in the Beatitudes. Help me to embrace poverty of spirit, to mourn my sins, to be meek and merciful. Purify my heart that I may see You. Make me an instrument of Your peace. Give me courage to endure persecution for Your sake. May I find my joy not in worldly success but in following You. Amen.'
      },
      {
        day: 2,
        title: 'The Good Shepherd',
        content: `<p><strong>Gospel Reading: John 10:11-18</strong></p>
<p>Jesus said: "I am the good shepherd. The good shepherd lays down his life for the sheep. He who is a hired hand and not a shepherd, who does not own the sheep, sees the wolf coming and leaves the sheep and flees, and the wolf snatches them and scatters them. He flees because he is a hired hand and cares nothing for the sheep.</p>
<p>I am the good shepherd. I know my own and my own know me, just as the Father knows me and I know the Father; and I lay down my life for the sheep.</p>
<p>And I have other sheep that are not of this fold. I must bring them also, and they will listen to my voice. So there will be one flock, one shepherd.</p>
<p>For this reason the Father loves me, because I lay down my life that I may take it up again. No one takes it from me, but I lay it down of my own accord. I have authority to lay it down, and I have authority to take it up again. This charge I have received from my Father."</p>
<hr>
<p><strong>Reflection:</strong></p>
<p>In the ancient world, shepherds were often looked down upon—their work was dirty and they were considered untrustworthy. Yet Jesus chooses this image to describe His relationship with us.</p>
<p>The good shepherd knows each sheep by name. He doesn't drive them from behind but leads them from the front, going before them into danger. When a sheep is lost, he leaves the ninety-nine to find it. And ultimately, he lays down his life for the sheep.</p>
<p>This is how Jesus loves us. He knows us intimately—our strengths and weaknesses, our hopes and fears. He leads us through the dark valleys of life, protecting us from the wolves of sin and death. And on the Cross, He laid down His life so that we might have eternal life.</p>
<p>The Church Fathers saw in this passage a reference to the Eucharist—the Good Shepherd feeds His sheep with His own Body and Blood. They also saw a call to Church leaders to imitate Christ's self-sacrificing love.</p>
<p>Do you know the voice of the Good Shepherd? In prayer, in Scripture, in the teaching of the Church, He speaks to you. Listen for His voice today.</p>`,
        scripture: 'John 10:14 - "I am the good shepherd. I know my own and my own know me."',
        prayer: 'Good Shepherd, thank You for knowing me by name and loving me despite my wanderings. Help me to recognize Your voice amid the noise of the world. Lead me in paths of righteousness. When I stray, seek me out and bring me back to the fold. Feed me with Your Body and Blood, that I may have life in abundance. Amen.'
      },
      {
        day: 3,
        title: 'The Prodigal Son',
        content: `<p><strong>Gospel Reading: Luke 15:11-24</strong></p>
<p>And Jesus said, "There was a man who had two sons. And the younger of them said to his father, 'Father, give me the share of property that is coming to me.' And he divided his property between them.</p>
<p>Not many days later, the younger son gathered all he had and took a journey into a far country, and there he squandered his property in reckless living. And when he had spent everything, a severe famine arose in that country, and he began to be in need. So he went and hired himself out to one of the citizens of that country, who sent him into his fields to feed pigs. And he was longing to be fed with the pods that the pigs ate, and no one gave him anything.</p>
<p>But when he came to himself, he said, 'How many of my father's hired servants have more than enough bread, but I perish here with hunger! I will arise and go to my father, and I will say to him, Father, I have sinned against heaven and before you. I am no longer worthy to be called your son. Treat me as one of your hired servants.'</p>
<p>And he arose and came to his father. But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him. And the son said to him, 'Father, I have sinned against heaven and before you. I am no longer worthy to be called your son.'</p>
<p>But the father said to his servants, 'Bring quickly the best robe, and put it on him, and put a ring on his hand, and shoes on his feet. And bring the fattened calf and kill it, and let us eat and celebrate. For this my son was dead, and is alive again; he was lost, and is found.' And they began to celebrate."</p>
<hr>
<p><strong>Reflection:</strong></p>
<p>This parable, perhaps better called "The Parable of the Merciful Father," reveals the heart of God. The father in the story represents God the Father, who waits with longing for His wayward children to return.</p>
<p>Notice that the father doesn't wait for the son to arrive and grovel. He sees him "while he was still a long way off" and runs to meet him. In the ancient Near East, it was undignified for an older man to run—but love overcomes dignity. The father's embrace cuts off the son's prepared speech; there is no need for it. The son is restored not as a servant but as a son.</p>
<p>This is how God receives us in the Sacrament of Confession. No matter how far we have wandered, no matter how much we have squandered, the Father runs to meet us when we turn back to Him. He doesn't lecture us or make us earn our way back. He restores us fully and celebrates our return.</p>
<p>Pope Francis has called this "the parable of parables" because it reveals the essence of the Gospel: God's unconditional, merciful love for sinners. Have you experienced this mercy? Is there someone you need to forgive as the Father forgave?</p>`,
        scripture: 'Luke 15:20 - "But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him."',
        prayer: 'Merciful Father, like the prodigal son, I have wandered far from You and squandered Your gifts. I come to You now, not worthy to be called Your child. Yet I trust in Your infinite mercy. Embrace me, restore me, and help me to live as Your beloved son/daughter. May I also show mercy to others as You have shown mercy to me. Amen.'
      },
      {
        day: 4,
        title: 'The Bread of Life',
        content: `<p><strong>Gospel Reading: John 6:51-58</strong></p>
<p>Jesus said to the crowds: "I am the living bread that came down from heaven. If anyone eats of this bread, he will live forever. And the bread that I will give for the life of the world is my flesh."</p>
<p>The Jews then disputed among themselves, saying, "How can this man give us his flesh to eat?"</p>
<p>So Jesus said to them, "Truly, truly, I say to you, unless you eat the flesh of the Son of Man and drink his blood, you have no life in you. Whoever feeds on my flesh and drinks my blood has eternal life, and I will raise him up on the last day. For my flesh is true food, and my blood is true drink. Whoever feeds on my flesh and drinks my blood abides in me, and I in him. As the living Father sent me, and I live because of the Father, so whoever feeds on me, he also will live because of me. This is the bread that came down from heaven, not like the bread the fathers ate, and died. Whoever feeds on this bread will live forever."</p>
<hr>
<p><strong>Reflection:</strong></p>
<p>This is one of the most challenging passages in the Gospels. Jesus' listeners were scandalized, and many disciples left Him because of these words. But Jesus did not soften His teaching or explain it away as merely symbolic.</p>
<p>The Catholic Church has always understood these words literally. In the Eucharist, bread and wine truly become the Body and Blood of Christ. This is not cannibalism—we receive the glorified, risen Christ under the appearances of bread and wine. But it is real communion with Christ Himself.</p>
<p>The Catechism teaches: "The Eucharist is 'the source and summit of the Christian life.' The other sacraments, and indeed all ecclesiastical ministries and works of the apostolate, are bound up with the Eucharist and are oriented toward it" (CCC 1324).</p>
<p>When we receive Holy Communion worthily, we receive Jesus Himself. He abides in us and we in Him. This intimate union transforms us, giving us the grace to live as His disciples and the promise of eternal life.</p>
<p>How do you prepare to receive the Eucharist? Do you approach with faith, reverence, and gratitude? The Bread of Life is offered to you—receive Him with love.</p>`,
        scripture: 'John 6:56 - "Whoever feeds on my flesh and drinks my blood abides in me, and I in him."',
        prayer: 'Lord Jesus, Bread of Life, I believe that You are truly present in the Eucharist—Body, Blood, Soul, and Divinity. Increase my faith and my love for this great sacrament. Help me to receive You worthily, with a pure heart and deep reverence. May each Communion draw me closer to You and transform me more fully into Your likeness. Amen.'
      },
      {
        day: 5,
        title: 'The Great Commandment',
        content: `<p><strong>Gospel Reading: Matthew 22:34-40</strong></p>
<p>But when the Pharisees heard that Jesus had silenced the Sadducees, they gathered together. And one of them, a lawyer, asked him a question to test him. "Teacher, which is the great commandment in the Law?"</p>
<p>And he said to him, "You shall love the Lord your God with all your heart and with all your soul and with all your mind. This is the great and first commandment. And a second is like it: You shall love your neighbor as yourself. On these two commandments depend all the Law and the Prophets."</p>
<hr>
<p><strong>Reflection:</strong></p>
<p>When asked to identify the greatest commandment among the 613 laws of the Torah, Jesus gives a profound answer that summarizes the entire moral life: love God totally, and love your neighbor as yourself.</p>
<p>These two commandments are inseparable. St. John writes: "If anyone says, 'I love God,' and hates his brother, he is a liar; for he who does not love his brother whom he has seen cannot love God whom he has not seen" (1 John 4:20). Our love for God is made visible and concrete in our love for others.</p>
<p>But notice the order: love of God comes first. We cannot truly love our neighbor unless we first love God, because God is the source of all love. And we cannot love God unless we know Him—through prayer, Scripture, and the sacraments.</p>
<p>The Catechism explains that these commandments are not burdensome obligations but invitations to happiness: "The Decalogue forms a coherent whole. Each 'word' refers to each of the others and to all of them; they reciprocally condition one another. The two tables shed light on one another; they form an organic unity" (CCC 2069).</p>
<p>How are you loving God today? How are you loving your neighbor? These questions should guide our daily examination of conscience.</p>`,
        scripture: 'Matthew 22:37-39 - "You shall love the Lord your God with all your heart and with all your soul and with all your mind... You shall love your neighbor as yourself."',
        prayer: 'Lord, help me to love You with all my heart, soul, and mind. Remove from me everything that competes with my love for You. And help me to love my neighbor—especially those who are difficult to love—as I love myself. May my love be not just in words but in deeds, following the example of Your Son, who loved us to the end. Amen.'
      },
      {
        day: 6,
        title: 'The Vine and the Branches',
        content: `<p><strong>Gospel Reading: John 15:1-8</strong></p>
<p>Jesus said to his disciples: "I am the true vine, and my Father is the vinedresser. Every branch in me that does not bear fruit he takes away, and every branch that does bear fruit he prunes, that it may bear more fruit. Already you are clean because of the word that I have spoken to you.</p>
<p>Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in me. I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.</p>
<p>If anyone does not abide in me he is thrown away like a branch and withers; and the branches are gathered, thrown into the fire, and burned. If you abide in me, and my words abide in you, ask whatever you wish, and it will be done for you. By this my Father is glorified, that you bear much fruit and so prove to be my disciples."</p>
<hr>
<p><strong>Reflection:</strong></p>
<p>In this beautiful image, Jesus reveals the intimate connection between Himself and His disciples. We are not just followers of Jesus—we are united to Him as branches to a vine, sharing His very life.</p>
<p>The key word is "abide" (Greek: meno), which appears eleven times in this passage. To abide means to remain, to stay, to make one's home. Jesus invites us to make our home in Him, to live in constant communion with Him.</p>
<p>How do we abide in Christ? Through prayer, through the sacraments (especially the Eucharist), through obedience to His commandments, through love for one another. These are the ways we stay connected to the vine and receive the life-giving sap of grace.</p>
<p>Notice also the role of pruning. Even fruitful branches are pruned so they can bear more fruit. God's pruning in our lives—through trials, corrections, and the stripping away of attachments—is not punishment but loving cultivation. He wants us to bear abundant fruit.</p>
<p>What fruit is your life producing? The fruit of the Spirit is "love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control" (Galatians 5:22-23). These are the signs of a branch that abides in the vine.</p>`,
        scripture: 'John 15:5 - "I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing."',
        prayer: 'Lord Jesus, true Vine, help me to abide in You always. May I never be separated from You by sin or neglect. Prune away everything in me that prevents fruitfulness. Fill me with Your life, that I may bear abundant fruit for the glory of the Father. Apart from You, I can do nothing; in You, I can do all things. Amen.'
      },
      {
        day: 7,
        title: 'The Resurrection and the Life',
        content: `<p><strong>Gospel Reading: John 11:17-27</strong></p>
<p>Now when Jesus came, he found that Lazarus had already been in the tomb four days. Bethany was near Jerusalem, about two miles off, and many of the Jews had come to Martha and Mary to console them concerning their brother.</p>
<p>So when Martha heard that Jesus was coming, she went and met him, but Mary remained seated in the house. Martha said to Jesus, "Lord, if you had been here, my brother would not have died. But even now I know that whatever you ask from God, God will give you."</p>
<p>Jesus said to her, "Your brother will rise again."</p>
<p>Martha said to him, "I know that he will rise again in the resurrection on the last day."</p>
<p>Jesus said to her, "I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die. Do you believe this?"</p>
<p>She said to him, "Yes, Lord; I believe that you are the Christ, the Son of God, who is coming into the world."</p>
<hr>
<p><strong>Reflection:</strong></p>
<p>In the face of death—the ultimate enemy—Jesus makes an astounding claim: "I am the resurrection and the life." Not "I will give resurrection" or "I know about resurrection," but "I AM resurrection." In Jesus, eternal life is not just a future hope but a present reality.</p>
<p>Martha's faith is remarkable. Her brother has been dead four days; by Jewish belief, the soul had definitively departed. Yet she still trusts that Jesus can do something. And when Jesus reveals Himself as the resurrection, she makes a profound confession of faith: "You are the Christ, the Son of God."</p>
<p>This passage is often read at Catholic funerals because it contains the heart of our hope. Death is not the end. Those who believe in Jesus, though they die physically, will live eternally. And even now, in this life, we share in Christ's risen life through Baptism and the Eucharist.</p>
<p>The Catechism teaches: "By his death, Christ liberates us from sin; by his Resurrection, he opens for us the way to a new life" (CCC 654). The resurrection of Lazarus foreshadows Christ's own resurrection and the resurrection of all the faithful at the end of time.</p>
<p>Do you believe this? In the face of death—your own or that of loved ones—do you trust that Jesus is the resurrection and the life?</p>`,
        scripture: 'John 11:25-26 - "I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die."',
        prayer: 'Lord Jesus, resurrection and life, I believe in You. Strengthen my faith when I face death and loss. Help me to trust that those who die in You will live forever. May the hope of resurrection transform how I live today, freeing me from fear and filling me with joy. I believe; help my unbelief. Amen.'
      }
    ]
  },
  // Divine Mercy Reflections
  {
    slug: 'divine-mercy-reflections',
    title: 'Divine Mercy Reflections',
    author: 'St. Faustina',
    description: 'Meditations from the Diary of St. Faustina on God\'s infinite mercy.',
    longDescription: 'St. Faustina Kowalska received extraordinary revelations about God\'s mercy, which she recorded in her Diary. These reflections draw from her writings to help you experience the depths of God\'s merciful love. Let the message of Divine Mercy transform your life and bring you closer to the Heart of Jesus.',
    frequency: 'Daily',
    category: 'Prayer & Meditation',
    icon: '❤️',
    readings: [
      {
        day: 1,
        title: 'Jesus, I Trust in You',
        content: `<p>From the Diary of St. Faustina (Diary, 47):</p>
<blockquote>"In the evening, when I was in my cell, I saw the Lord Jesus clothed in a white garment. One hand was raised in the gesture of blessing, the other was touching the garment at the breast. From beneath the garment, slightly drawn aside at the breast, there were emanating two large rays, one red, the other pale. In silence I kept my gaze fixed on the Lord; my soul was struck with awe, but also with great joy."</blockquote>
<p>This was the first of many visions St. Faustina received of Jesus as the Divine Mercy. The image she saw—now known throughout the world—shows Jesus with rays of red and white streaming from His Heart, representing the blood and water that flowed from His side on the Cross.</p>
<p>Jesus told Faustina: "Paint an image according to the pattern you see, with the signature: Jesus, I trust in You. I desire that this image be venerated, first in your chapel, and then throughout the world. I promise that the soul that will venerate this image will not perish" (Diary, 48).</p>
<p>The words "Jesus, I trust in You" are the heart of the Divine Mercy message. Trust is the vessel that draws mercy from the ocean of God's love. The more we trust, the more we receive.</p>
<p>What does it mean to trust in Jesus? It means believing that His mercy is greater than our sins. It means turning to Him in every need, confident that He will help us. It means surrendering our lives to His loving care.</p>`,
        scripture: 'Psalm 13:5 - "But I have trusted in your steadfast love; my heart shall rejoice in your salvation."',
        prayer: 'Jesus, I trust in You. I trust in Your infinite mercy, which is greater than all my sins. I trust in Your love, which never fails. I trust in Your providence, which guides my life. Help me to trust You more each day, especially when I am afraid or discouraged. Jesus, I trust in You. Amen.'
      },
      {
        day: 2,
        title: 'The Two Rays of Mercy',
        content: `<p>From the Diary of St. Faustina (Diary, 299):</p>
<blockquote>"The two rays denote Blood and Water. The pale ray stands for the Water which makes souls righteous. The red ray stands for the Blood which is the life of souls. These two rays issued forth from the very depths of My tender mercy when My agonized Heart was opened by a lance on the Cross."</blockquote>
<p>The rays in the Divine Mercy image are not merely decorative—they represent the sacraments that flow from Christ's pierced Heart. The water represents Baptism, which cleanses us from sin and makes us children of God. The blood represents the Eucharist, which nourishes our souls with the very life of Christ.</p>
<p>Jesus continued: "Happy is the one who will dwell in their shelter, for the just hand of God shall not lay hold of him" (Diary, 299). Those who approach the sacraments with faith find refuge in God's mercy.</p>
<p>St. John witnessed blood and water flowing from Jesus' side (John 19:34). The Church Fathers saw in this the birth of the Church and the sacraments. From the wounded Heart of Christ, the Bride of Christ is born.</p>
<p>How often do you approach these fountains of mercy? Baptism is received once, but its graces can be renewed through the sacrament of Confession. The Eucharist is offered daily—do you receive it as often as you can?</p>`,
        scripture: 'John 19:34 - "But one of the soldiers pierced his side with a spear, and at once there came out blood and water."',
        prayer: 'Lord Jesus, from Your pierced Heart flow the waters of Baptism and the Blood of the Eucharist. Thank You for these fountains of mercy. Help me to approach the sacraments frequently and with great faith. May the water cleanse me and the blood strengthen me, that I may live always in Your mercy. Amen.'
      },
      {
        day: 3,
        title: 'The Chaplet of Divine Mercy',
        content: `<p>From the Diary of St. Faustina (Diary, 476):</p>
<blockquote>"In the evening, when I was in my cell, I saw an Angel, the executor of divine wrath. He was about to strike the earth... I began to implore God earnestly for the world with words heard interiorly. As I was praying in this manner, I saw the Angel's helplessness: he could not carry out the just punishment... The next morning... I heard these words interiorly: 'Every time you enter the chapel, immediately recite the prayer which I taught you yesterday.'"</blockquote>
<p>Jesus taught St. Faustina the Chaplet of Divine Mercy as a prayer of intercession for the world. Using ordinary rosary beads, we pray:</p>
<p><strong>Opening:</strong> Our Father, Hail Mary, Apostles' Creed</p>
<p><strong>On the large beads:</strong> "Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world."</p>
<p><strong>On the small beads:</strong> "For the sake of His sorrowful Passion, have mercy on us and on the whole world."</p>
<p><strong>Closing (3 times):</strong> "Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world."</p>
<p>Jesus made extraordinary promises to those who pray this chaplet: "Whoever will recite it will receive great mercy at the hour of death... Even if there were a sinner most hardened, if he were to recite this chaplet only once, he would receive grace from My infinite mercy" (Diary, 687).</p>`,
        scripture: 'Hebrews 4:16 - "Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need."',
        prayer: 'Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world. For the sake of His sorrowful Passion, have mercy on us and on the whole world. Amen.'
      },
      {
        day: 4,
        title: 'The Hour of Great Mercy',
        content: `<p>From the Diary of St. Faustina (Diary, 1320):</p>
<blockquote>"At three o'clock, implore My mercy, especially for sinners; and, if only for a brief moment, immerse yourself in My Passion, particularly in My abandonment at the moment of agony. This is the hour of great mercy for the whole world. I will allow you to enter into My mortal sorrow. In this hour, I will refuse nothing to the soul that makes a request of Me in virtue of My Passion."</blockquote>
<p>Jesus died at three o'clock in the afternoon. This hour—the Hour of Great Mercy—is a privileged time for prayer. Jesus invites us to pause at 3:00 PM each day to meditate on His Passion and to pray for mercy.</p>
<p>You don't need to pray for a long time. Even a brief moment of prayer at this hour is pleasing to Jesus. You might pray the Chaplet of Divine Mercy, or simply say: "Jesus, for the sake of Your sorrowful Passion, have mercy on us and on the whole world."</p>
<p>Jesus promised: "In this hour, I will refuse nothing to the soul that makes a request of Me in virtue of My Passion." What a powerful promise! At 3:00 PM, bring your needs and the needs of the world to the merciful Heart of Jesus.</p>
<p>This practice connects us to the central mystery of our faith—the death of Christ for our salvation. By pausing at 3:00 PM, we unite ourselves to the sacrifice of Calvary and draw from its infinite merits.</p>`,
        scripture: 'Luke 23:44-46 - "It was now about the sixth hour, and there was darkness over the whole land until the ninth hour... Then Jesus, calling out with a loud voice, said, Father, into your hands I commit my spirit! And having said this he breathed his last."',
        prayer: 'Lord Jesus, at three o\'clock You died on the Cross for my salvation. I unite myself to Your sacrifice and beg for mercy—for myself, for my loved ones, for sinners, for the whole world. For the sake of Your sorrowful Passion, have mercy on us. I trust in Your infinite mercy. Amen.'
      },
      {
        day: 5,
        title: 'Mercy for Sinners',
        content: `<p>From the Diary of St. Faustina (Diary, 1728):</p>
<blockquote>"Let the greatest sinners place their trust in My mercy. They have the right before others to trust in the abyss of My mercy. My daughter, write about My mercy towards tormented souls. Souls that make an appeal to My mercy delight Me. To such souls I grant even more graces than they ask. I cannot punish even the greatest sinner if he makes an appeal to My compassion."</blockquote>
<p>This is perhaps the most consoling message of Divine Mercy: no sin is too great for God's mercy. The greatest sinners have the greatest right to trust in mercy, because they need it most.</p>
<p>Jesus told Faustina: "The greater the sinner, the greater the right he has to My mercy" (Diary, 723). This doesn't mean sin doesn't matter—it means that God's mercy is always greater than our sin.</p>
<p>The only thing that can block God's mercy is our refusal to accept it. If we turn to Him with trust, He will forgive. If we harden our hearts and refuse to repent, we exclude ourselves from mercy—not because God withholds it, but because we reject it.</p>
<p>Do you struggle to believe that God can forgive your sins? Do you feel unworthy of His mercy? Remember: mercy is not for the worthy but for the unworthy. That's what makes it mercy. Trust in the abyss of God's compassion.</p>`,
        scripture: '1 Timothy 1:15 - "The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost."',
        prayer: 'Merciful Jesus, I am a sinner, but I trust in Your infinite mercy. I do not rely on my own goodness but on Your compassionate love. Forgive my sins, heal my wounds, and transform my heart. Help me to believe that Your mercy is greater than all my failures. Jesus, I trust in You. Amen.'
      },
      {
        day: 6,
        title: 'Being Merciful to Others',
        content: `<p>From the Diary of St. Faustina (Diary, 742):</p>
<blockquote>"I demand from you deeds of mercy, which are to arise out of love for Me. You are to show mercy to your neighbors always and everywhere. You must not shrink from this or try to excuse or absolve yourself from it. I am giving you three ways of exercising mercy toward your neighbor: the first—by deed, the second—by word, the third—by prayer. In these three degrees is contained the fullness of mercy, and it is an unquestionable proof of love for Me."</blockquote>
<p>The Divine Mercy message is not just about receiving mercy—it's about giving mercy. Jesus calls us to be channels of His mercy to others.</p>
<p><strong>Mercy in deed:</strong> Helping those in need, feeding the hungry, visiting the sick, comforting the sorrowful. The corporal and spiritual works of mercy are concrete ways to show God's love.</p>
<p><strong>Mercy in word:</strong> Speaking kindly, encouraging the discouraged, forgiving those who hurt us, sharing the message of God's mercy with others.</p>
<p><strong>Mercy in prayer:</strong> Interceding for sinners, praying for the dying, offering sacrifices for the conversion of souls.</p>
<p>Jesus warned: "If a soul does not exercise mercy somehow or other, it will not obtain My mercy on the day of judgment" (Diary, 1317). This is not a threat but a spiritual law: we receive mercy in the measure that we give it.</p>`,
        scripture: 'Matthew 5:7 - "Blessed are the merciful, for they shall receive mercy."',
        prayer: 'Lord Jesus, You have shown me infinite mercy. Help me to show mercy to others—in deed, in word, and in prayer. Soften my heart toward those who have hurt me. Open my eyes to see the needs of those around me. Make me an instrument of Your mercy in the world. Amen.'
      },
      {
        day: 7,
        title: 'Divine Mercy Sunday',
        content: `<p>From the Diary of St. Faustina (Diary, 699):</p>
<blockquote>"I desire that the Feast of Mercy be a refuge and shelter for all souls, and especially for poor sinners. On that day the very depths of My tender mercy are open. I pour out a whole ocean of graces upon those souls who approach the fount of My mercy. The soul that will go to Confession and receive Holy Communion shall obtain complete forgiveness of sins and punishment. On that day all the divine floodgates through which graces flow are opened."</blockquote>
<p>Jesus asked that the Sunday after Easter be celebrated as the Feast of Divine Mercy. Pope John Paul II officially established this feast for the universal Church in 2000, on the day he canonized St. Faustina.</p>
<p>The promises attached to this day are extraordinary. Those who go to Confession (within about 20 days before or after) and receive Holy Communion on Divine Mercy Sunday, while praying for the intentions of the Holy Father, receive complete forgiveness of sins and punishment—a grace similar to a plenary indulgence.</p>
<p>Jesus said: "On that day all the divine floodgates through which graces flow are opened." This is a day of extraordinary grace, a day to approach the throne of mercy with confidence.</p>
<p>Prepare for Divine Mercy Sunday by making a good Confession, praying the Divine Mercy Novena (which begins on Good Friday), and approaching Holy Communion with great faith and trust.</p>`,
        scripture: 'John 20:19-23 - "On the evening of that day, the first day of the week... Jesus came and stood among them and said to them, Peace be with you... He breathed on them and said to them, Receive the Holy Spirit. If you forgive the sins of any, they are forgiven them."',
        prayer: 'Lord Jesus, thank You for the gift of Divine Mercy Sunday. Help me to prepare well for this great feast by making a sincere Confession and approaching Holy Communion with faith. Open the floodgates of Your mercy upon me and upon the whole world. May this feast be a new beginning of life in Your grace. Jesus, I trust in You. Amen.'
      }
    ]
  },
  // Lenten Pilgrimage
  {
    slug: 'lenten-daily',
    title: 'Lenten Pilgrimage',
    author: 'Catholic Bible Online',
    description: '40 days of prayer, fasting, and almsgiving reflections.',
    longDescription: 'Lent is a sacred season of forty days preparing for Easter. This devotional guides you through the Lenten journey with daily reflections on prayer, fasting, and almsgiving—the three pillars of Lenten observance. Let this holy season transform your heart and deepen your relationship with Christ.',
    frequency: 'Seasonal',
    category: 'Liturgical Seasons',
    icon: '✝️',
    readings: [
      {
        day: 1,
        title: 'Ash Wednesday: Remember You Are Dust',
        content: `<p>Today we begin the holy season of Lent. As ashes are placed on our foreheads, we hear the ancient words: "Remember that you are dust, and to dust you shall return" or "Repent and believe in the Gospel."</p>
<p>These words may seem harsh, but they are profoundly liberating. They remind us of our mortality—that our time on earth is limited and precious. They call us to repentance—to turn away from sin and toward God. They point us to what truly matters—not the passing things of this world, but eternal life with God.</p>
<p>The ashes come from the burned palms of last year's Palm Sunday, connecting this day to the Passion of Christ. We wear them publicly as a sign of our need for God's mercy and our commitment to conversion.</p>
<p><strong>The Three Pillars of Lent:</strong></p>
<p><strong>Prayer:</strong> Lent calls us to deepen our prayer life. This might mean adding a daily devotion, attending daily Mass, praying the Stations of the Cross, or simply spending more time in silence with God.</p>
<p><strong>Fasting:</strong> We fast to discipline our bodies and create space for God. Today is a day of fasting (one full meal, two smaller meals) and abstinence from meat. But fasting can extend beyond food—consider fasting from social media, television, or other distractions.</p>
<p><strong>Almsgiving:</strong> What we save through fasting, we give to the poor. Almsgiving opens our hearts to others and reminds us that our possessions are meant to be shared.</p>`,
        scripture: 'Joel 2:12-13 - "Yet even now, declares the Lord, return to me with all your heart, with fasting, with weeping, and with mourning; and rend your hearts and not your garments."',
        prayer: 'Lord, as I begin this Lenten journey, I acknowledge my need for Your mercy. I am dust, but You have breathed into me the breath of life. Help me to use these forty days well—to pray more deeply, to fast more generously, to give more freely. Prepare my heart to celebrate the joy of Easter. Amen.'
      },
      {
        day: 2,
        title: 'Taking Up the Cross',
        content: `<p>Jesus said: "If anyone would come after me, let him deny himself and take up his cross daily and follow me" (Luke 9:23). Lent is a time to embrace this call more fully.</p>
<p>What does it mean to take up your cross? It means accepting the difficulties of life—illness, disappointment, conflict, loss—as opportunities for grace. It means choosing to do hard things for love of God and neighbor. It means dying to self so that Christ can live in us.</p>
<p>The cross is not something we seek out or create for ourselves. It is the suffering that comes to us in the course of faithful Christian living. Our task is not to run from it but to embrace it with faith, uniting our sufferings to Christ's.</p>
<p>St. Paul wrote: "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me" (Galatians 2:20). This is the goal of Lent—to die to our old selves so that we can rise with Christ at Easter.</p>
<p><strong>Reflection Questions:</strong></p>
<ul>
<li>What cross is God asking you to carry right now?</li>
<li>Are you running from it or embracing it?</li>
<li>How can you unite your suffering to Christ's Passion?</li>
</ul>`,
        scripture: 'Luke 9:23 - "If anyone would come after me, let him deny himself and take up his cross daily and follow me."',
        prayer: 'Lord Jesus, You carried the Cross for my salvation. Help me to carry my daily crosses with patience and love. When I am tempted to complain or give up, remind me of Your example. Unite my sufferings to Yours, that they may bear fruit for the salvation of souls. Amen.'
      },
      {
        day: 3,
        title: 'The Desert Experience',
        content: `<p>Lent commemorates Jesus' forty days in the desert, where He fasted and was tempted by the devil. The desert is a place of testing, but also a place of encounter with God.</p>
<p>In the Bible, the desert is where God forms His people. Israel wandered forty years in the wilderness, learning to depend on God alone. Elijah fled to the desert and heard God's still, small voice. John the Baptist preached in the wilderness, preparing the way for the Lord.</p>
<p>Lent invites us into our own desert experience. We strip away distractions and comforts to create space for God. We face our weaknesses and temptations honestly. We learn to rely not on our own strength but on God's grace.</p>
<p>The desert can be uncomfortable. We may feel spiritually dry, tempted, or discouraged. But these experiences are part of the journey. God uses the desert to purify us and draw us closer to Himself.</p>
<p><strong>Creating Your Lenten Desert:</strong></p>
<ul>
<li>Reduce noise and distraction in your life</li>
<li>Spend time in silence each day</li>
<li>Fast from something that occupies too much of your attention</li>
<li>Face honestly the areas where you need conversion</li>
</ul>`,
        scripture: 'Matthew 4:1-2 - "Then Jesus was led up by the Spirit into the wilderness to be tempted by the devil. And after fasting forty days and forty nights, he was hungry."',
        prayer: 'Lord, lead me into the desert this Lent. Strip away everything that distracts me from You. Help me to face my temptations honestly and to rely on Your grace. In the silence and emptiness, speak to my heart. Prepare me to celebrate Your resurrection with joy. Amen.'
      },
      {
        day: 4,
        title: 'Fasting: Hungering for God',
        content: `<p>Fasting is one of the oldest spiritual practices, found in virtually every religious tradition. But Christian fasting has a unique purpose: it creates space for God and expresses our hunger for Him.</p>
<p>When we fast, we acknowledge that "man does not live by bread alone, but by every word that comes from the mouth of God" (Matthew 4:4). We discipline our bodies to strengthen our spirits. We experience a small taste of the hunger that millions face daily, growing in solidarity with the poor.</p>
<p><strong>Types of Fasting:</strong></p>
<p><strong>Food fasting:</strong> The traditional form—reducing food intake or abstaining from certain foods. The Church requires fasting on Ash Wednesday and Good Friday, and abstinence from meat on Fridays of Lent.</p>
<p><strong>Media fasting:</strong> Abstaining from television, social media, video games, or other digital distractions. This frees up time for prayer and creates mental space for God.</p>
<p><strong>Comfort fasting:</strong> Giving up small pleasures—coffee, desserts, snacks—as a daily reminder of our Lenten commitment.</p>
<p><strong>The Fruit of Fasting:</strong></p>
<p>Fasting should lead to greater charity. What we save through fasting, we give to the poor. Our self-denial becomes a gift to others.</p>`,
        scripture: 'Isaiah 58:6-7 - "Is not this the fast that I choose: to loose the bonds of wickedness, to undo the straps of the yoke, to let the oppressed go free... Is it not to share your bread with the hungry?"',
        prayer: 'Lord, help me to fast with the right intention—not for show, but for love of You. May my fasting create space for prayer and grow my compassion for the poor. When I feel hungry or deprived, remind me that You alone can satisfy the deepest hunger of my heart. Amen.'
      },
      {
        day: 5,
        title: 'Prayer: Conversation with God',
        content: `<p>Lent calls us to deepen our prayer life. But what is prayer? The Catechism defines it simply: "Prayer is the raising of one's mind and heart to God" (CCC 2559).</p>
<p>Prayer is conversation with God—speaking to Him and listening for His voice. It is relationship, not just ritual. It is encounter, not just words.</p>
<p><strong>Forms of Prayer:</strong></p>
<p><strong>Vocal prayer:</strong> Praying with words, whether memorized prayers like the Our Father or spontaneous conversation with God.</p>
<p><strong>Meditation:</strong> Reflecting on Scripture, the mysteries of faith, or God's presence in our lives. Lectio Divina is a beautiful form of meditative prayer.</p>
<p><strong>Contemplation:</strong> Resting silently in God's presence, beyond words and thoughts. This is the prayer of loving attention to God.</p>
<p><strong>Lenten Prayer Practices:</strong></p>
<ul>
<li>Add a daily devotion (Rosary, Divine Mercy Chaplet, Stations of the Cross)</li>
<li>Attend daily Mass when possible</li>
<li>Spend time in Eucharistic Adoration</li>
<li>Practice Lectio Divina with the daily readings</li>
<li>Begin or end each day with the Examen</li>
</ul>`,
        scripture: 'Matthew 6:6 - "But when you pray, go into your room and shut the door and pray to your Father who is in secret. And your Father who sees in secret will reward you."',
        prayer: 'Lord, teach me to pray. Help me to make time for You each day, even when I am busy or distracted. Quiet my mind and open my heart to hear Your voice. May my prayer this Lent draw me closer to You and transform my life. Amen.'
      },
      {
        day: 6,
        title: 'Almsgiving: Sharing God\'s Gifts',
        content: `<p>Almsgiving—giving to those in need—completes the Lenten triad. It transforms our fasting from mere self-denial into active love for others.</p>
<p>Jesus taught: "When you give to the needy, do not let your left hand know what your right hand is doing, so that your giving may be in secret. And your Father who sees in secret will reward you" (Matthew 6:3-4).</p>
<p>Almsgiving is not just about money. We can give our time, our talents, our attention. We can give a listening ear to someone who is lonely, a helping hand to someone who is struggling, a word of encouragement to someone who is discouraged.</p>
<p><strong>Lenten Almsgiving Ideas:</strong></p>
<ul>
<li>Use a "rice bowl" to collect savings from fasting</li>
<li>Donate to Catholic Relief Services or your local food bank</li>
<li>Volunteer at a soup kitchen or homeless shelter</li>
<li>Visit the sick or homebound</li>
<li>Perform random acts of kindness</li>
<li>Give generously to the second collection at Mass</li>
</ul>
<p>The Fathers of the Church taught that almsgiving is a form of prayer. When we give to the poor, we give to Christ Himself: "As you did it to one of the least of these my brothers, you did it to me" (Matthew 25:40).</p>`,
        scripture: 'Tobit 12:8-9 - "Prayer with fasting is good, but better than both is almsgiving with righteousness... For almsgiving saves from death and purges away every sin."',
        prayer: 'Generous God, everything I have comes from You. Help me to share Your gifts with those in need. Open my eyes to see Christ in the poor and suffering. May my almsgiving this Lent be an expression of love for You and for my neighbor. Amen.'
      },
      {
        day: 7,
        title: 'The Sacrament of Reconciliation',
        content: `<p>Lent is the perfect time to make a good Confession. The Sacrament of Reconciliation is God's gift of mercy, restoring us to friendship with Him and with the Church.</p>
<p>Many Catholics feel anxious about Confession, especially if it has been a long time. But there is no need to fear. The priest represents Christ, who came not to condemn but to save. Whatever you confess, you will be met with mercy.</p>
<p><strong>Preparing for Confession:</strong></p>
<ol>
<li><strong>Examine your conscience:</strong> Review your life since your last Confession, using the Ten Commandments or the Beatitudes as a guide.</li>
<li><strong>Be sorry for your sins:</strong> Ask God for the grace of true contrition—sorrow for having offended Him, not just fear of punishment.</li>
<li><strong>Resolve to avoid sin:</strong> Make a firm purpose of amendment, intending to avoid sin and the occasions of sin.</li>
<li><strong>Confess your sins:</strong> Tell the priest your sins honestly and completely. If you've forgotten how, just tell him—he will help you.</li>
<li><strong>Do your penance:</strong> Complete the penance the priest gives you as a sign of your desire to make amends.</li>
</ol>
<p>Jesus said to the apostles: "If you forgive the sins of any, they are forgiven them" (John 20:23). In Confession, we hear these words spoken to us personally: "I absolve you from your sins."</p>`,
        scripture: '1 John 1:9 - "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness."',
        prayer: 'Merciful Father, I have sinned against You and against my neighbor. I am sorry for my sins and I ask for Your forgiveness. Give me the courage to make a good Confession this Lent. Help me to experience the joy of Your mercy and to begin again with a clean heart. Amen.'
      }
    ]
  }
];

// Helper function to get devotional by slug
export function getDevotionalBySlug(slug: string): Devotional | undefined {
  return devotionals.find(d => d.slug === slug);
}

// Helper function to get today's reading (cycles through readings based on day of year)
export function getTodaysReading(devotional: Devotional): DevotionalReading {
  // Get day of year (1-366)
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1); // Jan 1st
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay) + 1; // +1 because Jan 1 should be day 1
  
  // Cycle through readings (day 1 = index 0, day 2 = index 1, etc.)
  const readingIndex = (dayOfYear - 1) % devotional.readings.length;
  return devotional.readings[readingIndex];
}

// ============================================
// MORE CLASSIC DEVOTIONALS
// ============================================

const introductionDevoutLife: Devotional = {
  slug: 'introduction-devout-life',
  title: 'Introduction to the Devout Life',
  author: 'St. Francis de Sales',
  description: 'Practical guidance for living a holy life in the midst of everyday activities.',
  longDescription: 'St. Francis de Sales wrote this masterpiece for laypeople seeking holiness in their ordinary lives. Unlike other spiritual works of his time written for monks and nuns, this book shows that everyone—married or single, rich or poor—can grow in holiness through their daily duties and relationships.',
  frequency: 'Daily',
  category: 'Classic Catholic Devotionals',
  icon: '📚',
  readings: [
    {
      day: 1,
      title: 'True Devotion',
      content: `<p>You wish to live a devout life, dear reader, because as a Christian you know that such devotion is most pleasing to God's Divine Majesty. But since small errors committed in the beginning of any undertaking grow infinitely greater as we advance, and become in the end almost irreparable, you must first understand what the virtue of devotion is.</p>
<p>True devotion is nothing other than a true love of God. But it is not always love in its highest form. When divine love adorns our souls and makes us pleasing to His Divine Majesty, it is called grace. When it gives us strength to do good, it is called charity. But when it reaches such a degree of perfection that it makes us not only do good but do so carefully, frequently, and promptly, it is called devotion.</p>
<p>Devotion is simply a spiritual agility and liveliness by which charity works in us, or we work by charity, promptly and lovingly. Just as charity leads us to observe all God's commandments, so devotion leads us to observe them promptly and diligently.</p>
<p>In short, devotion is nothing else than a spiritual agility and vivacity by which charity does its work in us, or by aid of which we work quickly and lovingly.</p>`,
      scripture: 'Psalm 119:32 - "I will run in the way of your commandments when you enlarge my heart!"',
      prayer: 'Lord, I desire to live a devout life, not out of obligation but out of love for You. Help me to serve You not reluctantly but promptly and joyfully. May my devotion be genuine—flowing from a heart transformed by Your grace. St. Francis de Sales, pray for me. Amen.'
    },
    {
      day: 2,
      title: 'Devotion Is for Everyone',
      content: `<p>In the creation God commanded the plants to bring forth their fruit, each one according to its kind. In the same way, He commands Christians, who are the living plants of His Church, to bring forth the fruits of devotion, each according to his position and vocation.</p>
<p>Devotion must be practiced differently by the gentleman, the worker, the servant, the prince, the widow, the young girl, and the married woman. Not only this, but the practice of devotion must also be adapted to the strength, the employment, and the duties of each individual.</p>
<p>Is it fitting that a bishop should want to live a solitary life like a Carthusian? Or that married people should want to own no more property than a Capuchin? If a workman spent as much time in church as a religious, his work would suffer. Would not such devotion be ridiculous, disorganized, and intolerable?</p>
<p>True devotion does no harm whatever, but instead perfects everything. When it goes contrary to one's lawful vocation, it is undoubtedly false. The bee gathers honey from flowers without injuring them, leaving them as fresh and whole as it found them. True devotion does even better. It not only does no harm to any vocation or employment, but on the contrary adorns and beautifies it.</p>`,
      scripture: '1 Corinthians 7:17 - "Only let each person lead the life that the Lord has assigned to him, and to which God has called him."',
      prayer: 'Lord, help me to live my devotion according to my state in life. I do not need to be a monk or nun to be holy—I can find You in my daily duties, my work, my family. Show me how to sanctify the ordinary moments of my life. Amen.'
    },
    {
      day: 3,
      title: 'The Need for a Spiritual Director',
      content: `<p>When young Tobias was commanded to go to Rages, he said, "I do not know the way." His father answered, "Go then and find a man to guide you." I say the same to you. If you truly wish to travel the road to devotion, find a good guide and conductor.</p>
<p>This is the most important of all words of advice. As the devout Avila says, "Although you seek God's will, you will never find it with such certainty as on the path of humble obedience so universally praised and practiced by all devout people of ancient times."</p>
<p>When we have found our guide, we must open our hearts to him with all sincerity and fidelity, manifesting clearly and openly both our good and our evil without pretense or dissimulation. By this means our good will be examined and confirmed, and our evil will be corrected and remedied.</p>
<p>Have great confidence in your director, but let it be mingled with a holy reverence, so that reverence does not diminish confidence nor confidence diminish reverence. Trust him with the respect of a daughter for her father; respect him with the confidence of a son for his mother.</p>`,
      scripture: 'Proverbs 11:14 - "Where there is no guidance, a people falls, but in an abundance of counselors there is safety."',
      prayer: 'Lord, guide me to a wise spiritual director who can help me on my journey to You. Give me humility to seek guidance and openness to receive correction. May I find in spiritual direction the support I need to grow in holiness. Amen.'
    },
    {
      day: 4,
      title: 'Beginning with Purification',
      content: `<p>The flowers appear on the earth, says the heavenly Spouse, and the time of pruning has come. What are the flowers of our hearts but good desires? As soon as they appear, we must take the pruning knife in hand to cut away from our conscience all dead and superfluous works.</p>
<p>Before the Israelites entered the Promised Land, they had to get rid of all the idols they had brought from Egypt. So too, the soul that aspires to the honor of being the spouse of Christ must put off the old man and put on the new, forsaking sin and removing and cutting away everything that obstructs union with God.</p>
<p>The first purification that must be made is that of sin. The means of making it is the holy sacrament of Penance. Seek the best confessor you can find, take in hand one of the many little books written to help examine your conscience, read them carefully, and note point by point wherein you have offended.</p>
<p>Having made this confession with all possible humility and contrition, listen attentively to the advice and commands of your confessor, and say in your heart, "Speak, Lord, for your servant is listening."</p>`,
      scripture: 'Psalm 51:10 - "Create in me a clean heart, O God, and renew a right spirit within me."',
      prayer: 'Lord, I desire to begin my devout life with a clean heart. Help me to make a thorough examination of conscience and a sincere confession. Remove from my heart everything that separates me from You. Create in me a new heart, ready to receive Your grace. Amen.'
    },
    {
      day: 5,
      title: 'Meditation: The Heart of Devotion',
      content: `<p>Meditation is the mother and nurse of devotion. Without it, we cannot have true devotion. It is the means by which we come to know God and ourselves, and by which we inflame our hearts with love for Him.</p>
<p>Place yourself in the presence of God. Acknowledge that God is present everywhere and in all things. Just as birds, wherever they fly, always encounter the air, so we, wherever we go or wherever we are, find God present.</p>
<p>Everyone knows this truth, but not everyone is attentive to it. Blind men do not see a prince who is present among them, and therefore do not show him the respect they would if they saw him. But because they do not see him, they easily forget his presence, and having forgotten it, they still more easily lose the respect due to him.</p>
<p>We do not see God who is present with us, and although faith assures us of His presence, yet because we do not see Him with our eyes, we often forget Him and behave as if God were far away. We know well that God is present in all things, but because we do not reflect on this, we act as if we did not know it.</p>`,
      scripture: 'Psalm 46:10 - "Be still, and know that I am God."',
      prayer: 'Lord, help me to be aware of Your presence in every moment. Open the eyes of my heart to see You in all things. May my meditation draw me closer to You and inflame my heart with love. Teach me to be still and know that You are God. Amen.'
    },
    {
      day: 6,
      title: 'Little Virtues',
      content: `<p>The king's daughter is all glorious within, says David. The great works of those who are perfect consist in the great virtues they practice. But the little virtues are like the flowers that adorn the garden of the soul.</p>
<p>We must not neglect the practice of the little virtues: patience, meekness, mortification of the heart, humility, obedience, poverty, chastity, tenderness toward our neighbor, bearing with their imperfections, diligence, and holy fervor.</p>
<p>Great occasions for serving God come rarely, but little ones surround us daily. He who is faithful in little things will also be faithful in great ones. Do all things in the name of God, and you will do all things well.</p>
<p>Whether you eat or drink, whether you sleep or take recreation, whether you work or rest, you can always gather the fruit of the little virtues. These little virtues will grow and multiply in your soul like bees in a hive, and will make your spiritual life sweet and delightful.</p>`,
      scripture: 'Luke 16:10 - "One who is faithful in a very little is also faithful in much."',
      prayer: 'Lord, help me to be faithful in the little things. May I practice patience in small annoyances, kindness in daily interactions, and diligence in ordinary duties. Let me not despise the little virtues, for through them I can grow in holiness every day. Amen.'
    },
    {
      day: 7,
      title: 'Perseverance in Devotion',
      content: `<p>The devout life is a life of constant beginning again. We must not be discouraged by our falls, but must rise again with renewed courage and continue on our way.</p>
<p>The soul that aspires to devotion must expect to meet with difficulties and temptations. The devil, who cannot bear to see a soul advancing in virtue, will do everything in his power to discourage and distract us.</p>
<p>When you find yourself fallen into some fault, do not be troubled or discouraged, but immediately humble yourself before God and say: "Lord, I have done what I am—a weak and miserable creature. What else could be expected of me?" Then, with confidence in His mercy, return to the path of virtue.</p>
<p>Never be astonished at finding yourself imperfect, for you will never be otherwise in this life. Be patient with everyone, but above all with yourself. I mean, do not be disturbed about your imperfections, and always have courage to pick yourself up after a fall.</p>
<p>Our progress in the devout life depends not on never falling, but on always rising again. The saints themselves fell many times, but they never stayed down. They rose again and continued their journey with renewed fervor.</p>`,
      scripture: 'Proverbs 24:16 - "For the righteous falls seven times and rises again."',
      prayer: 'Lord, give me perseverance in the devout life. When I fall, help me to rise again without discouragement. May I never give up on the journey to holiness, trusting in Your mercy and grace. St. Francis de Sales, pray for me that I may persevere to the end. Amen.'
    }
  ]
};

const confessionsAugustine: Devotional = {
  slug: 'confessions-augustine',
  title: 'Confessions of St. Augustine',
  author: 'St. Augustine',
  description: 'Profound reflections on conversion, grace, and the human search for God.',
  longDescription: 'The Confessions of St. Augustine is one of the most influential spiritual autobiographies ever written. In it, Augustine traces his journey from a life of sin to his conversion to Christianity, offering profound insights into the human heart, the nature of sin, and the transforming power of God\'s grace.',
  frequency: 'Daily',
  category: 'Classic Catholic Devotionals',
  icon: '📜',
  readings: [
    {
      day: 1,
      title: 'Our Hearts Are Restless',
      content: `<p>"You have made us for yourself, O Lord, and our hearts are restless until they rest in you."</p>
<p>These famous words open Augustine's Confessions and capture the central theme of his life and thought. We are made for God, and nothing else can satisfy the deepest longings of our hearts.</p>
<p>Augustine tried to fill the void in his heart with many things—pleasure, ambition, philosophy, human love. But none of these could give him lasting peace. Only when he surrendered to God did he find the rest his soul craved.</p>
<p>This restlessness is not a curse but a gift. It is God's way of drawing us to Himself. The dissatisfaction we feel with earthly things is a sign that we are made for something greater—for eternal union with God.</p>
<p>Do you feel restless? Do you sense that something is missing in your life? This is the voice of God calling you to Himself. Do not try to silence it with distractions. Let it lead you to the One who alone can satisfy your heart.</p>`,
      scripture: 'Psalm 62:1 - "For God alone my soul waits in silence; from him comes my salvation."',
      prayer: 'Lord, my heart is restless until it rests in You. I have sought happiness in many places, but only You can satisfy the deepest longings of my soul. Draw me to Yourself. Help me to find in You the peace and joy I seek. Amen.'
    },
    {
      day: 2,
      title: 'Late Have I Loved You',
      content: `<p>"Late have I loved you, O Beauty ever ancient, ever new, late have I loved you! You were within me, but I was outside, and it was there that I searched for you. In my unloveliness I plunged into the lovely things which you created. You were with me, but I was not with you."</p>
<p>Augustine spent years searching for God in the wrong places. He sought truth in philosophy, pleasure in sin, fulfillment in worldly success. All the while, God was closer to him than he was to himself.</p>
<p>This is the tragedy of sin—it blinds us to the presence of God who is always near. We look for happiness outside ourselves when the source of all happiness dwells within us through grace.</p>
<p>"Created things kept me from you; yet if they had not been in you, they would not have been at all." The beauty of creation is meant to lead us to the Creator, but sin distorts our vision so that we stop at creatures instead of rising to God.</p>
<p>Augustine's conversion came when he finally turned inward and found God waiting for him. "You called, you shouted, and you broke through my deafness. You flashed, you shone, and you dispelled my blindness."</p>`,
      scripture: 'Jeremiah 29:13 - "You will seek me and find me, when you seek me with all your heart."',
      prayer: 'Lord, You are ever ancient, ever new. Forgive me for seeking You in the wrong places. Open my eyes to see Your presence within me and around me. Help me to love You with my whole heart, without delay. Amen.'
    },
    {
      day: 3,
      title: 'The Weight of Sin',
      content: `<p>Augustine describes his youth as a time of wandering far from God. He stole pears not because he was hungry but for the sheer pleasure of doing wrong. He pursued sexual pleasure without restraint. He was enslaved to habits he could not break.</p>
<p>"I was bound by the iron chain of my own will. The enemy held my will, and from it had made a chain and bound me. From a perverse will came lust, and slavery to lust became habit, and habit not resisted became necessity."</p>
<p>Sin is not freedom but slavery. What begins as a choice becomes a compulsion. We think we are free when we indulge our desires, but we are actually forging chains that bind us ever more tightly.</p>
<p>Augustine cried out to God: "Give me chastity and continence, but not yet." He wanted to be free from sin, but he also wanted to enjoy it a little longer. This divided will kept him in bondage.</p>
<p>Only God's grace could break the chains. "You converted me to yourself, so that I no longer sought a wife or any other worldly hope."</p>`,
      scripture: 'John 8:34 - "Jesus answered them, Truly, truly, I say to you, everyone who practices sin is a slave to sin."',
      prayer: 'Lord, I confess that I am bound by sins I cannot break on my own. Free me from the chains of bad habits and disordered desires. Give me the grace to want what You want, to love what You love. Break the power of sin in my life. Amen.'
    },
    {
      day: 4,
      title: 'The Garden Conversion',
      content: `<p>The climax of Augustine's conversion came in a garden in Milan. Torn between his desire for God and his attachment to sin, he threw himself down under a fig tree and wept.</p>
<p>"How long, O Lord? How long? Will you be angry forever? Remember not my past iniquities." He heard a child's voice from a nearby house, chanting: "Take up and read, take up and read."</p>
<p>Augustine took this as a divine command. He picked up the book of Paul's letters and read the first passage his eyes fell upon: "Not in rioting and drunkenness, not in chambering and wantonness, not in strife and envying, but put on the Lord Jesus Christ, and make no provision for the flesh to fulfill its lusts."</p>
<p>"I had no wish to read further, and no need. For in that instant, as the sentence ended, there was infused in my heart something like the light of full certainty and all the gloom of doubt vanished away."</p>
<p>In one moment, God did what Augustine could not do in years of struggle. Grace accomplished what willpower could not achieve.</p>`,
      scripture: 'Romans 13:14 - "But put on the Lord Jesus Christ, and make no provision for the flesh, to gratify its desires."',
      prayer: 'Lord, I hear Your voice calling me to conversion. Give me the grace to respond without delay. Do in me what I cannot do myself. Put on me the Lord Jesus Christ and free me from the power of sin. Amen.'
    },
    {
      day: 5,
      title: 'The Gift of Tears',
      content: `<p>After his conversion, Augustine wept tears of joy and gratitude. "The tears streamed down, and I let them flow as freely as they would, making of them a pillow for my heart. On them it rested."</p>
<p>These were not tears of sadness but of relief—the relief of a prisoner set free, a sick man healed, a lost son come home. Augustine had finally found what he had been seeking all his life.</p>
<p>He also wept for his mother, Monica, who had prayed for his conversion for many years. Her tears had watered the seed of faith that finally bore fruit. "You converted me to yourself, so that I no longer sought a wife or any other worldly hope, standing now on that rule of faith where you had shown me to her in a vision so many years before."</p>
<p>The gift of tears is a grace. It softens our hearts and opens us to God's mercy. Do not be ashamed to weep before God—for your sins, for His goodness, for the gift of salvation.</p>`,
      scripture: 'Psalm 126:5 - "Those who sow in tears shall reap with shouts of joy!"',
      prayer: 'Lord, give me the gift of tears—tears of repentance for my sins, tears of gratitude for Your mercy, tears of joy for Your salvation. Soften my heart and open it to receive Your grace. Amen.'
    },
    {
      day: 6,
      title: 'Memory and the Search for God',
      content: `<p>In one of the most profound sections of the Confessions, Augustine explores the mystery of memory and its role in our search for God.</p>
<p>"Great is the power of memory, exceedingly great, O my God, a spreading limitless room within me. Who can reach its uttermost depth? Yet it is a faculty of my soul and belongs to my nature. In fact I cannot totally grasp all that I am."</p>
<p>Augustine realizes that we could not seek God unless we already knew Him in some way. The very desire for God is a kind of memory of God—a trace of the divine image in which we were created.</p>
<p>"Where then did I find you to learn of you? For you were not in my memory before I learned of you. Where then did I find you to learn of you, if not in yourself, above me?"</p>
<p>God is both within us and beyond us. He is closer to us than we are to ourselves, yet infinitely transcends our understanding. The search for God is both an inward journey and an upward ascent.</p>`,
      scripture: 'Acts 17:27-28 - "He is actually not far from each one of us, for in him we live and move and have our being."',
      prayer: 'Lord, You are within me and above me, closer than my own heart yet beyond all my understanding. Help me to seek You where You may be found—in the depths of my soul and in the heights of Your glory. Amen.'
    },
    {
      day: 7,
      title: 'Rest in God Alone',
      content: `<p>Augustine concludes his Confessions with a meditation on rest—the rest that comes only from God.</p>
<p>"You are the rest of the weary, the comfort of the sorrowful. You are the strength of the weak, the hope of the despairing. In you alone is there peace."</p>
<p>The restlessness that drove Augustine through years of wandering finally found its resolution in God. Not in philosophy, not in pleasure, not in human love, but in the eternal God who made him for Himself.</p>
<p>"Our hearts are restless until they rest in you." This is not just Augustine's story—it is the story of every human heart. We are all pilgrims seeking our true home, wanderers longing for rest.</p>
<p>The good news is that God is seeking us even as we seek Him. He pursues us with His grace, calls us with His love, and welcomes us with His mercy. All we need to do is stop running and let ourselves be found.</p>
<p>"You have made us for yourself, O Lord, and our hearts are restless until they rest in you."</p>`,
      scripture: 'Matthew 11:28 - "Come to me, all who labor and are heavy laden, and I will give you rest."',
      prayer: 'Lord, I am weary from seeking rest in things that cannot satisfy. I come to You now, just as I am. Give me the rest that only You can give. Let me find in You my peace, my joy, my home. My heart is restless until it rests in You. Amen.'
    }
  ]
};

devotionals.push(introductionDevoutLife, confessionsAugustine);


// ============================================
// SAINTS DEVOTIONALS
// ============================================

const padrePioDaily: Devotional = {
  slug: 'padre-pio-daily',
  title: 'Words of Padre Pio',
  author: 'St. Padre Pio',
  description: 'Daily wisdom from the beloved stigmatist and confessor of San Giovanni Rotondo.',
  longDescription: 'St. Padre Pio of Pietrelcina (1887-1968) was a Capuchin friar who bore the stigmata for fifty years. Known for his holiness, his gift of reading souls, and his hours spent in the confessional, Padre Pio left behind a treasury of spiritual wisdom that continues to guide souls today.',
  frequency: 'Daily',
  category: 'Saints for Today',
  icon: '🙏',
  readings: [
    {
      day: 1,
      title: 'Pray, Hope, and Don\'t Worry',
      content: `<p>"Pray, hope, and don't worry. Worry is useless. God is merciful and will hear your prayer."</p>
<p>This was Padre Pio's most famous counsel, repeated countless times to the thousands who sought his guidance. In a world filled with anxiety, these simple words offer profound peace.</p>
<p>Prayer is our lifeline to God. Through prayer, we place our concerns in His hands and trust in His providence. Hope is the confident expectation that God will fulfill His promises. And worry? Worry is useless because it changes nothing and only robs us of peace.</p>
<p>Padre Pio lived these words. Despite bearing the painful wounds of Christ, despite spiritual attacks from the devil, despite persecution from within the Church, he maintained a deep peace rooted in trust in God.</p>
<p>"The life of a Christian is nothing but a perpetual struggle against self; there is no flowering of the soul to the beauty of its perfection except at the price of pain."</p>`,
      scripture: 'Philippians 4:6-7 - "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus."',
      prayer: 'Lord, help me to pray, hope, and not worry. I place all my concerns in Your hands, trusting in Your mercy and providence. Free me from anxiety and fill me with Your peace. St. Padre Pio, pray for me. Amen.'
    },
    {
      day: 2,
      title: 'The Value of Suffering',
      content: `<p>"The most beautiful act of faith is the one made in darkness, in sacrifice, and with extreme effort."</p>
<p>Padre Pio understood suffering as few others have. For fifty years, he bore the wounds of Christ in his hands, feet, and side. The pain was constant and intense, yet he offered it all for the salvation of souls.</p>
<p>"I am devoured by the love of God and the love of my neighbor. God is always fixed in my mind and stamped in my heart. I never lose sight of Him."</p>
<p>Suffering, united to Christ's Passion, has redemptive value. It is not meaningless pain but a participation in the work of salvation. This is the mystery of the Cross—that through suffering, God brings forth life.</p>
<p>"The longer the trial to which God subjects you, the greater the goodness in comforting you during the time of trial and in the exaltation after the combat."</p>`,
      scripture: 'Colossians 1:24 - "Now I rejoice in my sufferings for your sake, and in my flesh I am filling up what is lacking in Christ\'s afflictions for the sake of his body, that is, the church."',
      prayer: 'Lord Jesus, help me to embrace my sufferings and unite them to Your Cross. May my trials become a source of grace for myself and others. Give me the faith to trust You in the darkness. St. Padre Pio, pray for me. Amen.'
    },
    {
      day: 3,
      title: 'The Holy Mass',
      content: `<p>"It would be easier for the world to survive without the sun than to do without Holy Mass."</p>
<p>Padre Pio celebrated Mass with extraordinary devotion, often taking two or more hours. He experienced the Passion of Christ so intensely during Mass that he would weep and sometimes appear to be in agony.</p>
<p>"The Mass is infinite like Jesus. Ask an angel what the Mass is, and he will reply to you in truth, 'I understand what it is and why it is offered, but I do not understand how much value it has.' One angel, a thousand angels, all of Heaven, know this and think like this."</p>
<p>For Padre Pio, the Mass was not a ritual to be rushed through but the very sacrifice of Calvary made present. He urged the faithful to attend Mass with reverence and devotion, recognizing the infinite treasure being offered.</p>
<p>"Once, a person asked me if Jesus was pleased with his way of attending Mass. I replied: 'Do you think that Jesus is pleased when you attend Mass with your body in church and your mind at home or in the office?'"</p>`,
      scripture: 'Hebrews 9:14 - "How much more will the blood of Christ, who through the eternal Spirit offered himself without blemish to God, purify our conscience from dead works to serve the living God."',
      prayer: 'Lord Jesus, help me to attend Mass with reverence and devotion. Open my eyes to see the infinite value of this holy sacrifice. May I never take for granted the gift of Your Body and Blood. St. Padre Pio, pray for me. Amen.'
    },
    {
      day: 4,
      title: 'Confession and Mercy',
      content: `<p>"Confession is the soul's bath. You must go at least once a week. I do not want souls to stay away from confession more than a week."</p>
<p>Padre Pio spent up to sixteen hours a day in the confessional. He had the gift of reading souls—knowing sins before they were confessed, seeing the state of souls, and guiding penitents to true conversion.</p>
<p>He was sometimes severe with those who were not truly repentant, but infinitely gentle with those who came with sincere hearts. "Have courage and do not fear the confessional. It is there that the mercy of God awaits you."</p>
<p>"A soul can do nothing that is more pleasing to God than to communicate in a state of grace. The devil knows this and that is why he tries to keep us away from the sacraments."</p>
<p>Padre Pio urged frequent confession not because we are terrible sinners but because we need God's grace to grow in holiness. "The confession of our faults is the beginning of our good works."</p>`,
      scripture: '1 John 1:9 - "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness."',
      prayer: 'Merciful Father, give me the grace to make frequent and sincere confessions. Help me to overcome any fear or shame that keeps me from this sacrament of mercy. St. Padre Pio, pray for me. Amen.'
    },
    {
      day: 5,
      title: 'The Guardian Angel',
      content: `<p>"Invoke your guardian angel, who will enlighten you and guide you. God has given him to you for your protection and your help in all your needs. Have recourse to him always."</p>
<p>Padre Pio had a special devotion to the guardian angels. He could see them and communicate with them. He often sent his own guardian angel to help those who asked for his prayers.</p>
<p>"Your guardian angel is always at your side. He is your most faithful friend. He is always there to console you, to help you, to protect you. Speak to him often."</p>
<p>Many people reported that when they prayed to Padre Pio, they would smell the fragrance of flowers or incense—a sign that their prayers had been heard. Padre Pio explained that he sent his guardian angel to bring comfort to those in need.</p>
<p>"If you need me, send your guardian angel to me with your message and I will answer you."</p>`,
      scripture: 'Psalm 91:11 - "For he will command his angels concerning you to guard you in all your ways."',
      prayer: 'Angel of God, my guardian dear, to whom God\'s love commits me here, ever this day be at my side, to light and guard, to rule and guide. St. Padre Pio, pray for me. Amen.'
    },
    {
      day: 6,
      title: 'Humility and Obedience',
      content: `<p>"The devil is not afraid of our penances, but he trembles before our humility and obedience."</p>
<p>Despite his extraordinary gifts, Padre Pio remained deeply humble. When Church authorities restricted his ministry due to suspicions about his stigmata, he obeyed without complaint, trusting that God would vindicate him in His own time.</p>
<p>"I am nothing but a poor friar who prays." This was how Padre Pio described himself, even as thousands flocked to him for healing and guidance.</p>
<p>"Humility is truth. We must see ourselves as we really are—sinners in need of God's mercy. Pride is the root of all sin, and humility is the foundation of all virtue."</p>
<p>Padre Pio's obedience was tested severely. For years, he was forbidden to celebrate Mass publicly or hear confessions. He accepted these restrictions with patience, knowing that obedience to legitimate authority is obedience to God.</p>`,
      scripture: 'James 4:6 - "God opposes the proud but gives grace to the humble."',
      prayer: 'Lord, give me true humility. Help me to see myself as I really am and to trust in Your mercy. May I be obedient to Your will, even when it is difficult. St. Padre Pio, pray for me. Amen.'
    },
    {
      day: 7,
      title: 'Perseverance to the End',
      content: `<p>"In all the events of life, you must recognize the Divine will. Adore and bless it, especially in the things which are the hardest for you."</p>
<p>Padre Pio died on September 23, 1968, the day after celebrating the 50th anniversary of receiving the stigmata. His last words were "Jesus, Mary." He died as he had lived—with the names of Jesus and Mary on his lips.</p>
<p>"Stay with me, Lord, for it is necessary to have You present so that I do not forget You. You know how easily I abandon You."</p>
<p>Padre Pio's life was a constant battle—against the devil, against his own weaknesses, against misunderstanding and persecution. But he persevered to the end, trusting in God's grace.</p>
<p>"Do not worry about tomorrow. Think of today and of the present moment. Leave tomorrow to Providence. The Lord knows what He is doing."</p>
<p>His final counsel to us: "Love the Madonna and pray the Rosary, for her Rosary is the weapon against the evils of the world today."</p>`,
      scripture: 'Matthew 24:13 - "But the one who endures to the end will be saved."',
      prayer: 'Lord, give me the grace to persevere to the end. Help me to trust in Your providence in all circumstances. May I die with the names of Jesus and Mary on my lips. St. Padre Pio, pray for me. Amen.'
    }
  ]
};

const motherTeresaDaily: Devotional = {
  slug: 'mother-teresa-daily',
  title: 'Mother Teresa\'s Meditations',
  author: 'St. Mother Teresa',
  description: 'Reflections on love, service, and finding Christ in the poorest of the poor.',
  longDescription: 'St. Teresa of Calcutta (1910-1997) founded the Missionaries of Charity and dedicated her life to serving "the poorest of the poor." Her simple yet profound teachings on love, prayer, and service continue to inspire millions to see Christ in the faces of the suffering.',
  frequency: 'Daily',
  category: 'Saints for Today',
  icon: '💙',
  readings: [
    {
      day: 1,
      title: 'Do Small Things with Great Love',
      content: `<p>"Not all of us can do great things. But we can do small things with great love."</p>
<p>This is perhaps Mother Teresa's most famous saying, and it captures the essence of her spirituality. Holiness is not about doing extraordinary things but about doing ordinary things with extraordinary love.</p>
<p>"We can do no great things, only small things with great love. It is not how much we do, but how much love we put into the doing."</p>
<p>Mother Teresa saw every act of service as an encounter with Christ. Feeding the hungry, clothing the naked, caring for the sick—these were not just charitable works but acts of love for Jesus Himself.</p>
<p>"I see Jesus in every human being. I say to myself, this is hungry Jesus, I must feed him. This is sick Jesus. This one has leprosy or gangrene; I must wash him and tend to him. I serve because I love Jesus."</p>`,
      scripture: 'Matthew 25:40 - "Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me."',
      prayer: 'Lord Jesus, help me to do small things with great love. Open my eyes to see You in everyone I meet, especially the poor and suffering. May every act of kindness be an act of love for You. Amen.'
    },
    {
      day: 2,
      title: 'The Fruit of Silence',
      content: `<p>"The fruit of silence is prayer. The fruit of prayer is faith. The fruit of faith is love. The fruit of love is service. The fruit of service is peace."</p>
<p>Mother Teresa understood that service without prayer becomes mere activism. We need silence to hear God's voice, prayer to deepen our relationship with Him, and faith to sustain us in difficult times.</p>
<p>"We need to find God, and He cannot be found in noise and restlessness. God is the friend of silence. See how nature—trees, flowers, grass—grows in silence; see the stars, the moon and the sun, how they move in silence."</p>
<p>In our noisy world, silence is countercultural. But it is essential for the spiritual life. "In the silence of the heart God speaks. If you face God in prayer and silence, God will speak to you."</p>
<p>Mother Teresa spent an hour each day in Eucharistic adoration, even with her incredibly busy schedule. This was the source of her strength and the foundation of her service.</p>`,
      scripture: 'Psalm 46:10 - "Be still, and know that I am God."',
      prayer: 'Lord, help me to cultivate silence in my life. In the stillness, speak to my heart. May my prayer bear fruit in faith, my faith in love, my love in service, and my service in peace. Amen.'
    },
    {
      day: 3,
      title: 'The Greatest Poverty',
      content: `<p>"The greatest disease in the West today is not TB or leprosy; it is being unwanted, unloved, and uncared for. We can cure physical diseases with medicine, but the only cure for loneliness, despair, and hopelessness is love."</p>
<p>Mother Teresa recognized that poverty takes many forms. Material poverty is devastating, but spiritual poverty—the poverty of being unloved—is even more painful.</p>
<p>"There is more hunger in the world for love and appreciation than for bread. The poverty of the West is a different kind of poverty—it is not only a poverty of loneliness but also of spirituality."</p>
<p>She challenged the wealthy nations: "You have the poverty of the spirit, of loneliness, of being unwanted. And that is the worst disease in the world today, not tuberculosis or leprosy."</p>
<p>The cure for this poverty is simple: love. "Spread love everywhere you go. Let no one ever come to you without leaving happier."</p>`,
      scripture: 'Romans 12:10 - "Love one another with brotherly affection. Outdo one another in showing honor."',
      prayer: 'Lord, open my eyes to the poverty around me—not just material poverty but the poverty of loneliness and despair. Help me to bring Your love to those who feel unwanted and unloved. Amen.'
    },
    {
      day: 4,
      title: 'Joy in Service',
      content: `<p>"Joy is a net of love by which you can catch souls. A joyful heart is the normal result of a heart burning with love."</p>
<p>Despite working with the dying and destitute, Mother Teresa was known for her radiant smile. Her joy was not dependent on circumstances but rooted in her love for Christ.</p>
<p>"Joy is prayer; joy is strength; joy is love. God loves a cheerful giver. The best way to show our gratitude to God and to people is to accept everything with joy."</p>
<p>She taught her sisters: "Let us always meet each other with a smile, for the smile is the beginning of love." A smile costs nothing but gives much.</p>
<p>"We shall never know all the good that a simple smile can do. Be faithful in small things because it is in them that your strength lies."</p>`,
      scripture: 'Nehemiah 8:10 - "The joy of the Lord is your strength."',
      prayer: 'Lord, fill me with Your joy. May my smile be a reflection of Your love. Help me to serve others with a joyful heart, knowing that joy is contagious and draws souls to You. Amen.'
    },
    {
      day: 5,
      title: 'The Call Within the Call',
      content: `<p>On September 10, 1946, during a train ride to Darjeeling, Mother Teresa received what she called "the call within the call"—a divine inspiration to leave her convent and serve Christ among the poorest of the poor.</p>
<p>"I was to leave the convent and help the poor while living among them. It was an order. To fail would have been to break the faith."</p>
<p>This call required great sacrifice. Mother Teresa had to leave the security of her religious community and step into the unknown. But she trusted that God would provide.</p>
<p>"I know God will not give me anything I can't handle. I just wish He didn't trust me so much."</p>
<p>Each of us has a vocation—a call from God to serve Him in a particular way. "Many people mistake our work for our vocation. Our vocation is the love of Jesus."</p>`,
      scripture: 'Isaiah 6:8 - "And I heard the voice of the Lord saying, Whom shall I send, and who will go for us? Then I said, Here I am! Send me."',
      prayer: 'Lord, help me to hear Your call and respond with generosity. Give me the courage to follow where You lead, even when the path is uncertain. May my vocation be the love of Jesus. Amen.'
    },
    {
      day: 6,
      title: 'The Dark Night',
      content: `<p>After Mother Teresa's death, her private letters revealed that she experienced a profound spiritual darkness for nearly fifty years. She felt abandoned by God, unable to sense His presence.</p>
<p>"Where is my faith? Even deep down... there is nothing but emptiness and darkness... If there be God—please forgive me."</p>
<p>Yet she persevered in faith and service. Her darkness was not a sign of God's absence but a participation in the suffering of those she served—the spiritual poverty of feeling unloved and abandoned.</p>
<p>"I have come to love the darkness, for I believe now that it is a part, a very, very small part, of Jesus' darkness and pain on earth."</p>
<p>Mother Teresa's example teaches us that feelings are not faith. We can serve God faithfully even when we don't feel His presence. "Faith is not a feeling. It is a decision."</p>`,
      scripture: 'Psalm 22:1 - "My God, my God, why have you forsaken me?"',
      prayer: 'Lord, when I feel Your absence, help me to persevere in faith. May I trust You not because of what I feel but because of who You are. Unite my darkness to the darkness Jesus experienced on the Cross. Amen.'
    },
    {
      day: 7,
      title: 'Love Until It Hurts',
      content: `<p>"I have found the paradox, that if you love until it hurts, there can be no more hurt, only more love."</p>
<p>Mother Teresa's love was not sentimental but sacrificial. She gave everything—her comfort, her health, her very self—for the sake of the poor.</p>
<p>"Love, to be real, it must cost—it must hurt—it must empty us of self."</p>
<p>This is the love of the Cross. Jesus loved us to the point of death, and He calls us to love with the same self-giving love. "If you really love one another, you will not be able to avoid making sacrifices."</p>
<p>"At the end of life we will not be judged by how many diplomas we have received, how much money we have made, how many great things we have done. We will be judged by 'I was hungry, and you gave me something to eat, I was naked and you clothed me. I was homeless, and you took me in.'"</p>
<p>Mother Teresa's final message: "Keep the joy of loving Jesus in your heart and share this joy with all you meet."</p>`,
      scripture: 'John 15:13 - "Greater love has no one than this, that someone lay down his life for his friends."',
      prayer: 'Lord Jesus, teach me to love until it hurts. Empty me of selfishness and fill me with Your self-giving love. May I see Your face in the poor and serve You in them with joy. St. Teresa of Calcutta, pray for me. Amen.'
    }
  ]
};

devotionals.push(padrePioDaily, motherTeresaDaily);


// ============================================
// PRAYER & MEDITATION DEVOTIONALS
// ============================================

const lectioDivina: Devotional = {
  slug: 'lectio-divina',
  title: 'Lectio Divina',
  author: 'Benedictine Tradition',
  description: 'Ancient practice of prayerful Scripture reading in four movements.',
  longDescription: 'Lectio Divina (Divine Reading) is an ancient practice of praying with Scripture that dates back to the early Church and was systematized by the Benedictine monks. This method of prayer involves four movements: reading, meditation, prayer, and contemplation, leading us into deep communion with God through His Word.',
  frequency: 'Daily',
  category: 'Prayer & Meditation',
  icon: '📖',
  readings: [
    {
      day: 1,
      title: 'Introduction to Lectio Divina',
      content: `<p>Lectio Divina, or "Divine Reading," is an ancient way of praying with Scripture that has nourished Christians for centuries. Unlike Bible study, which seeks to understand the text intellectually, Lectio Divina seeks to encounter God personally through His Word.</p>
<p><strong>The Four Movements:</strong></p>
<p><strong>1. Lectio (Reading):</strong> Read the Scripture passage slowly, perhaps several times. Listen for a word or phrase that catches your attention.</p>
<p><strong>2. Meditatio (Meditation):</strong> Reflect on the word or phrase that stood out. What is God saying to you through it? How does it connect to your life?</p>
<p><strong>3. Oratio (Prayer):</strong> Respond to God in prayer. This might be praise, thanksgiving, confession, or petition—whatever rises from your heart.</p>
<p><strong>4. Contemplatio (Contemplation):</strong> Rest silently in God's presence. Let go of words and thoughts. Simply be with God.</p>
<p>There is no "right" way to do Lectio Divina. The goal is not to finish a certain amount of Scripture but to encounter the living God who speaks through His Word.</p>`,
      scripture: 'Psalm 119:105 - "Your word is a lamp to my feet and a light to my path."',
      prayer: 'Lord, as I approach Your Word, open my heart to hear Your voice. Speak to me through the Scriptures. Help me not just to read but to listen, not just to study but to pray. May Your Word transform my life. Amen.'
    },
    {
      day: 2,
      title: 'Lectio: Reading with the Heart',
      content: `<p>The first movement of Lectio Divina is Lectio—reading. But this is not ordinary reading. It is slow, attentive, receptive reading that listens for God's voice.</p>
<p><strong>How to Practice Lectio:</strong></p>
<ul>
<li>Choose a short Scripture passage (5-10 verses is enough)</li>
<li>Read slowly, perhaps aloud</li>
<li>Read the passage two or three times</li>
<li>Listen for a word or phrase that catches your attention</li>
<li>Don't analyze—just receive</li>
</ul>
<p>The word or phrase that stands out is God's gift to you for this moment. It may be comforting or challenging, familiar or surprising. Trust that God is speaking to you through it.</p>
<p>St. Ambrose said: "When we pray, we speak to God; when we read Scripture, God speaks to us." In Lectio, we position ourselves to hear God's voice.</p>`,
      scripture: 'Isaiah 55:10-11 - "For as the rain and the snow come down from heaven and do not return there but water the earth... so shall my word be that goes out from my mouth; it shall not return to me empty."',
      prayer: 'Lord, give me ears to hear Your voice in Scripture. Help me to read slowly and attentively, trusting that You will speak to me. May Your Word not return empty but accomplish Your purpose in my life. Amen.'
    },
    {
      day: 3,
      title: 'Meditatio: Chewing the Word',
      content: `<p>The second movement is Meditatio—meditation. The ancient monks compared this to a cow chewing its cud: we "chew" on the word or phrase, turning it over in our minds, savoring its meaning.</p>
<p><strong>How to Practice Meditatio:</strong></p>
<ul>
<li>Take the word or phrase from your reading</li>
<li>Repeat it slowly, letting it sink in</li>
<li>Ask: What is God saying to me through this?</li>
<li>How does this connect to my life right now?</li>
<li>What memories, feelings, or desires does it evoke?</li>
</ul>
<p>Meditation is not analysis but rumination. We are not trying to figure out what the text meant to its original audience but what God is saying to us today.</p>
<p>This is where Scripture becomes personal. The Word of God is "living and active" (Hebrews 4:12), and in meditation, it penetrates our hearts and transforms us.</p>`,
      scripture: 'Psalm 1:2 - "But his delight is in the law of the Lord, and on his law he meditates day and night."',
      prayer: 'Lord, help me to meditate on Your Word day and night. May I chew on it, savor it, and let it nourish my soul. Speak to me through the Scriptures and show me how to apply them to my life. Amen.'
    },
    {
      day: 4,
      title: 'Oratio: Responding to God',
      content: `<p>The third movement is Oratio—prayer. Having heard God speak through Scripture, we now respond. This is the dialogue of love between the soul and God.</p>
<p><strong>How to Practice Oratio:</strong></p>
<ul>
<li>Let your meditation lead naturally into prayer</li>
<li>Speak to God from your heart</li>
<li>Your prayer might be praise, thanksgiving, confession, or petition</li>
<li>Be honest—tell God what you're feeling</li>
<li>Ask for the grace to live what you've heard</li>
</ul>
<p>Oratio is not about finding the right words but about opening your heart to God. He already knows what you need; prayer is about relationship, not information.</p>
<p>St. Thérèse of Lisieux said: "For me, prayer is a surge of the heart; it is a simple look turned toward heaven, it is a cry of recognition and of love, embracing both trial and joy."</p>`,
      scripture: 'Psalm 62:8 - "Trust in him at all times, O people; pour out your heart before him; God is a refuge for us."',
      prayer: 'Lord, I pour out my heart before You. [Speak to God about what arose in your meditation. Be honest about your feelings, needs, and desires. Ask for the grace to respond to what He has shown you.] Amen.'
    },
    {
      day: 5,
      title: 'Contemplatio: Resting in God',
      content: `<p>The fourth movement is Contemplatio—contemplation. This is the goal of Lectio Divina: to rest in God's presence, beyond words and thoughts, in loving communion.</p>
<p><strong>How to Practice Contemplatio:</strong></p>
<ul>
<li>Let go of words and thoughts</li>
<li>Simply be present to God</li>
<li>Rest in His love</li>
<li>If thoughts arise, gently return to stillness</li>
<li>Stay as long as you feel drawn to stay</li>
</ul>
<p>Contemplation is pure gift. We cannot make it happen; we can only dispose ourselves to receive it. Sometimes God grants deep experiences of His presence; other times, we simply sit in faith, trusting He is there.</p>
<p>The author of The Cloud of Unknowing wrote: "God may be reached and held close by means of love, but by means of thought, never."</p>`,
      scripture: 'Psalm 46:10 - "Be still, and know that I am God."',
      prayer: 'Lord, I rest in Your presence. I let go of words and thoughts. I simply want to be with You. Hold me in Your love. [Spend time in silence, resting in God\'s presence.] Amen.'
    },
    {
      day: 6,
      title: 'Actio: Living the Word',
      content: `<p>Some traditions add a fifth movement: Actio—action. Having encountered God in Scripture, we go forth to live what we have received.</p>
<p><strong>How to Practice Actio:</strong></p>
<ul>
<li>Ask: How is God calling me to respond?</li>
<li>What concrete action can I take today?</li>
<li>How can I live this Word in my relationships, work, and daily life?</li>
<li>Carry the word or phrase with you throughout the day</li>
</ul>
<p>Lectio Divina is not meant to be a private spiritual experience disconnected from life. The Word of God is meant to transform us and, through us, the world.</p>
<p>St. James wrote: "Be doers of the word, and not hearers only, deceiving yourselves" (James 1:22). True encounter with God always bears fruit in action.</p>`,
      scripture: 'James 1:22 - "But be doers of the word, and not hearers only, deceiving yourselves."',
      prayer: 'Lord, help me to be a doer of Your Word, not just a hearer. Show me how to live what I have received. May my encounter with You in Scripture bear fruit in love and service. Amen.'
    },
    {
      day: 7,
      title: 'Making Lectio Divina a Habit',
      content: `<p>Lectio Divina is not just a technique but a way of life. The goal is to develop a habit of prayerful reading that shapes how we approach all of Scripture and all of life.</p>
<p><strong>Practical Tips:</strong></p>
<ul>
<li>Set aside a regular time each day (15-30 minutes)</li>
<li>Find a quiet place where you won't be interrupted</li>
<li>Use the daily Mass readings or work through a book of the Bible</li>
<li>Keep a journal to record insights</li>
<li>Be patient—this is a lifelong practice</li>
</ul>
<p>Don't be discouraged if your mind wanders or if you don't have profound experiences. Faithfulness matters more than feelings. Simply showing up day after day opens us to God's transforming grace.</p>
<p>As Guigo II, a 12th-century Carthusian monk, wrote: "Reading seeks, meditation finds, prayer asks, contemplation tastes."</p>`,
      scripture: 'Joshua 1:8 - "This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night, so that you may be careful to do according to all that is written in it."',
      prayer: 'Lord, help me to make Lectio Divina a regular part of my life. Give me discipline to show up each day and openness to receive whatever You want to give. May Your Word dwell richly in me and transform me into the image of Christ. Amen.'
    }
  ]
};

const rosaryMeditations: Devotional = {
  slug: 'rosary-meditations',
  title: 'Rosary Meditations',
  author: 'Catholic Bible Online',
  description: 'Deep reflections on each mystery of the Holy Rosary.',
  longDescription: 'The Rosary is the most beloved prayer of Catholics, a meditation on the life of Christ through the eyes of Mary. These reflections guide you through the mysteries of the Rosary, helping you to pray with greater depth and devotion.',
  frequency: 'Daily',
  category: 'Prayer & Meditation',
  icon: '📿',
  readings: [
    {
      day: 1,
      title: 'The Joyful Mysteries: The Annunciation',
      content: `<p><strong>The First Joyful Mystery: The Annunciation</strong></p>
<p>The angel Gabriel was sent from God to a virgin named Mary. "Hail, full of grace, the Lord is with you!" Mary was troubled at his words, but the angel said, "Do not be afraid, Mary, for you have found favor with God. You will conceive and bear a son, and you shall call his name Jesus."</p>
<p>Mary asked, "How can this be, since I have no husband?" The angel answered, "The Holy Spirit will come upon you, and the power of the Most High will overshadow you; therefore the child to be born will be called holy—the Son of God."</p>
<p>And Mary said, "Behold, I am the handmaid of the Lord; let it be to me according to your word."</p>
<p><strong>Reflection:</strong> In this mystery, we contemplate Mary's perfect faith and obedience. She did not fully understand what was being asked of her, but she trusted God completely. Her "yes" changed the course of human history.</p>
<p>We too are called to say "yes" to God's will, even when we don't understand. Like Mary, we can trust that God's plans for us are good, even when they seem impossible.</p>`,
      scripture: 'Luke 1:38 - "And Mary said, Behold, I am the servant of the Lord; let it be to me according to your word."',
      prayer: 'Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.'
    },
    {
      day: 2,
      title: 'The Luminous Mysteries: The Baptism of Jesus',
      content: `<p><strong>The First Luminous Mystery: The Baptism of Jesus</strong></p>
<p>Jesus came from Galilee to the Jordan to be baptized by John. John tried to prevent him, saying, "I need to be baptized by you, and do you come to me?" But Jesus answered, "Let it be so now, for thus it is fitting for us to fulfill all righteousness."</p>
<p>When Jesus was baptized, he went up immediately from the water, and behold, the heavens were opened to him, and he saw the Spirit of God descending like a dove and coming to rest on him. And a voice from heaven said, "This is my beloved Son, with whom I am well pleased."</p>
<p><strong>Reflection:</strong> At His baptism, Jesus is revealed as the beloved Son of the Father, anointed by the Holy Spirit. The Trinity is manifested: the Father speaks, the Son is baptized, the Spirit descends.</p>
<p>In our own baptism, we became children of God, temples of the Holy Spirit, members of Christ's Body. We too heard the Father say, "You are my beloved child." Do we live as beloved children of God?</p>`,
      scripture: 'Matthew 3:17 - "And a voice from heaven said, This is my beloved Son, with whom I am well pleased."',
      prayer: 'Lord Jesus, at Your baptism You were revealed as the beloved Son of the Father. Help me to live as a beloved child of God, faithful to my baptismal promises. May I always walk in the light of Your grace. Amen.'
    },
    {
      day: 3,
      title: 'The Sorrowful Mysteries: The Agony in the Garden',
      content: `<p><strong>The First Sorrowful Mystery: The Agony in the Garden</strong></p>
<p>Jesus went with his disciples to a place called Gethsemane. He said to them, "Sit here while I go over there and pray." Taking Peter and the two sons of Zebedee, he began to be sorrowful and troubled. He said to them, "My soul is very sorrowful, even to death; remain here, and watch with me."</p>
<p>Going a little farther, he fell on his face and prayed, "My Father, if it be possible, let this cup pass from me; nevertheless, not as I will, but as you will."</p>
<p>And being in agony he prayed more earnestly; and his sweat became like great drops of blood falling down to the ground.</p>
<p><strong>Reflection:</strong> In Gethsemane, we see Jesus fully human—afraid, sorrowful, longing for the cup to pass. Yet He surrenders His will to the Father. "Not my will, but yours be done."</p>
<p>When we face our own Gethsemanes—moments of fear, suffering, and difficult choices—we can unite our struggles to Christ's. He understands our weakness and gives us grace to surrender to God's will.</p>`,
      scripture: 'Luke 22:42 - "Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done."',
      prayer: 'Lord Jesus, in Your agony You surrendered Your will to the Father. When I face suffering and fear, help me to trust in God\'s plan. Give me the grace to say, "Not my will, but Yours be done." Amen.'
    },
    {
      day: 4,
      title: 'The Glorious Mysteries: The Resurrection',
      content: `<p><strong>The First Glorious Mystery: The Resurrection</strong></p>
<p>On the first day of the week, at early dawn, the women went to the tomb, taking the spices they had prepared. They found the stone rolled away from the tomb, but when they went in they did not find the body of the Lord Jesus.</p>
<p>Two men in dazzling apparel stood beside them. The women were frightened, but the men said, "Why do you seek the living among the dead? He is not here, but has risen. Remember how he told you, while he was still in Galilee, that the Son of Man must be delivered into the hands of sinful men and be crucified and on the third day rise."</p>
<p><strong>Reflection:</strong> The Resurrection is the foundation of our faith. If Christ has not been raised, our faith is in vain. But He has been raised, and because He lives, we too shall live.</p>
<p>The Resurrection transforms everything. Death is not the end. Suffering is not meaningless. Sin does not have the final word. In Christ, we have hope that conquers despair, life that conquers death.</p>`,
      scripture: 'Luke 24:5-6 - "Why do you seek the living among the dead? He is not here, but has risen."',
      prayer: 'Lord Jesus, You have conquered death and risen in glory. Fill me with Easter joy and resurrection hope. Help me to live as one who believes that death is not the end, that You are the resurrection and the life. Amen.'
    },
    {
      day: 5,
      title: 'The Joyful Mysteries: The Nativity',
      content: `<p><strong>The Third Joyful Mystery: The Nativity</strong></p>
<p>In those days a decree went out from Caesar Augustus that all the world should be registered. And Joseph went up from Galilee to Bethlehem, to be registered with Mary, his betrothed, who was with child.</p>
<p>And while they were there, the time came for her to give birth. And she gave birth to her firstborn son and wrapped him in swaddling cloths and laid him in a manger, because there was no place for them in the inn.</p>
<p>And in the same region there were shepherds out in the field, keeping watch over their flock by night. And an angel of the Lord appeared to them, and the glory of the Lord shone around them. The angel said, "Fear not, for behold, I bring you good news of great joy: unto you is born this day in the city of David a Savior, who is Christ the Lord."</p>
<p><strong>Reflection:</strong> The King of Kings is born in a stable, laid in a manger, announced to shepherds. God enters the world not in power and glory but in poverty and humility.</p>
<p>This is the mystery of the Incarnation: God becomes man, the infinite becomes finite, the Creator becomes a creature. He does this out of love for us, to save us from our sins.</p>`,
      scripture: 'Luke 2:11 - "For unto you is born this day in the city of David a Savior, who is Christ the Lord."',
      prayer: 'Lord Jesus, You humbled Yourself to be born in a stable. Help me to embrace humility and simplicity. May I find You not in the palaces of the world but in the manger of my heart. Amen.'
    },
    {
      day: 6,
      title: 'The Sorrowful Mysteries: The Crucifixion',
      content: `<p><strong>The Fifth Sorrowful Mystery: The Crucifixion</strong></p>
<p>When they came to the place called The Skull, they crucified him there, along with the criminals—one on his right, the other on his left. Jesus said, "Father, forgive them, for they do not know what they are doing."</p>
<p>Standing near the cross of Jesus were his mother, and his mother's sister, Mary the wife of Clopas, and Mary Magdalene. When Jesus saw his mother and the disciple whom he loved standing nearby, he said to his mother, "Woman, behold, your son!" Then he said to the disciple, "Behold, your mother!"</p>
<p>Jesus cried out in a loud voice, "Father, into your hands I commit my spirit." When he had said this, he breathed his last.</p>
<p><strong>Reflection:</strong> On the Cross, Jesus accomplishes our salvation. He takes upon Himself the sins of the world and offers Himself as the perfect sacrifice. "It is finished."</p>
<p>At the foot of the Cross, Mary becomes our mother. Jesus gives her to us as a gift, and we are entrusted to her care. In our sufferings, we are never alone—Mary stands with us as she stood with Jesus.</p>`,
      scripture: 'John 19:30 - "When Jesus had received the sour wine, he said, It is finished, and he bowed his head and gave up his spirit."',
      prayer: 'Lord Jesus, You died on the Cross for my sins. Help me to understand the depth of Your love. May I never take for granted the price You paid for my salvation. Mary, Mother of Sorrows, pray for me. Amen.'
    },
    {
      day: 7,
      title: 'The Glorious Mysteries: The Assumption',
      content: `<p><strong>The Fourth Glorious Mystery: The Assumption of Mary</strong></p>
<p>At the end of her earthly life, Mary was assumed body and soul into heavenly glory. This dogma, proclaimed by Pope Pius XII in 1950, affirms that Mary, who was preserved from original sin and remained sinless throughout her life, did not experience the corruption of death but was taken up into heaven.</p>
<p>The Assumption is the fulfillment of God's promise to those who are faithful. Mary is the first to receive what all the faithful will receive at the resurrection of the dead—a glorified body united with the soul in eternal life.</p>
<p><strong>Reflection:</strong> Mary's Assumption gives us hope. Where she has gone, we hope to follow. Her glorified body is a preview of our own destiny if we remain faithful to Christ.</p>
<p>The Assumption also reminds us of the dignity of the human body. Our bodies are not prisons for our souls but temples of the Holy Spirit, destined for resurrection and glory.</p>`,
      scripture: 'Revelation 12:1 - "And a great sign appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars."',
      prayer: 'Hail, Holy Queen, Mother of Mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. Amen.'
    }
  ]
};

devotionals.push(lectioDivina, rosaryMeditations);


// ============================================
// FAMILY & SEASONAL DEVOTIONALS
// ============================================

const adventDaily: Devotional = {
  slug: 'advent-daily',
  title: 'Advent Journey',
  author: 'Catholic Bible Online',
  description: 'Prepare your heart for Christmas with daily Advent reflections.',
  longDescription: 'Advent is a season of joyful expectation as we prepare for the coming of Christ—both His historical birth at Christmas and His future coming in glory. These daily reflections help you enter into the spirit of Advent through prayer, Scripture, and practical suggestions for the season.',
  frequency: 'Seasonal',
  category: 'Liturgical Seasons',
  icon: '🕯️',
  readings: [
    {
      day: 1,
      title: 'The Season of Waiting',
      content: `<p>Advent begins in darkness. The days are short, the nights are long, and we light candles to push back the gloom. This is fitting, for Advent is about waiting in darkness for the Light of the World.</p>
<p>The word "Advent" comes from the Latin adventus, meaning "coming." We await a threefold coming of Christ: His coming in history (Christmas), His coming in mystery (in the sacraments and in our hearts), and His coming in majesty (at the end of time).</p>
<p>Waiting is hard. We live in a culture of instant gratification, where waiting seems like wasted time. But Advent teaches us that waiting has value. In waiting, we learn patience. In waiting, our desire grows. In waiting, we make room for God.</p>
<p><strong>Advent Practice:</strong> Set up an Advent wreath in your home. Light one candle the first week, two the second, and so on. Let the growing light remind you that Christ, the Light of the World, is coming.</p>`,
      scripture: 'Isaiah 9:2 - "The people who walked in darkness have seen a great light; those who dwelt in a land of deep darkness, on them has light shone."',
      prayer: 'Lord Jesus, Light of the World, I wait for You in the darkness of this season. Increase my longing for Your coming. Help me to use this Advent well, preparing my heart to receive You at Christmas. Come, Lord Jesus. Amen.'
    },
    {
      day: 2,
      title: 'John the Baptist: Prepare the Way',
      content: `<p>"A voice cries in the wilderness: Prepare the way of the Lord, make straight in the desert a highway for our God."</p>
<p>John the Baptist is the great prophet of Advent. He came to prepare the way for Jesus, calling people to repentance and baptizing them in the Jordan River. His message was urgent: "Repent, for the kingdom of heaven is at hand!"</p>
<p>John's call to repentance is also addressed to us. Advent is a time to examine our lives, to identify the obstacles that block Christ's coming into our hearts, and to remove them through confession and conversion.</p>
<p>What valleys need to be filled in your life? What mountains need to be brought low? What crooked paths need to be made straight? John's message is clear: prepare the way of the Lord.</p>
<p><strong>Advent Practice:</strong> Make a good confession during Advent. Examine your conscience carefully and approach the sacrament with sincere repentance. Let Christ find a clean dwelling place in your heart.</p>`,
      scripture: 'Matthew 3:2 - "Repent, for the kingdom of heaven is at hand."',
      prayer: 'Lord, send Your Spirit to convict me of sin and lead me to repentance. Help me to prepare the way for Your coming by removing every obstacle in my heart. Give me the courage to make a sincere confession. Amen.'
    },
    {
      day: 3,
      title: 'Mary: Handmaid of the Lord',
      content: `<p>No one prepared for Christ's coming more perfectly than Mary. When the angel announced that she would bear the Son of God, she responded with total surrender: "Behold, I am the handmaid of the Lord; let it be to me according to your word."</p>
<p>Mary's "yes" made the Incarnation possible. God, who respects human freedom, waited for her consent before entering the world as a child. Her faith and obedience opened the door for our salvation.</p>
<p>Advent invites us to imitate Mary's receptivity. Like her, we are called to make room for Christ, to say "yes" to God's will, to bear Christ to the world. Mary is our model and our mother in this journey.</p>
<p><strong>Advent Practice:</strong> Pray the Rosary daily during Advent, meditating especially on the Joyful Mysteries. Ask Mary to help you prepare your heart for her Son's coming.</p>`,
      scripture: 'Luke 1:38 - "And Mary said, Behold, I am the servant of the Lord; let it be to me according to your word."',
      prayer: 'Mary, Mother of God and my mother, help me to imitate your faith and obedience. Teach me to say "yes" to God as you did. Prepare my heart to receive your Son at Christmas. Pray for me, that I may be ready when He comes. Amen.'
    },
    {
      day: 4,
      title: 'The O Antiphons: Come, Lord Jesus',
      content: `<p>In the final days before Christmas, the Church prays the "O Antiphons"—ancient prayers that cry out for the Messiah using titles from the Old Testament.</p>
<p><strong>O Wisdom</strong> (December 17): Come and teach us the way of prudence.</p>
<p><strong>O Adonai</strong> (December 18): Come and redeem us with outstretched arm.</p>
<p><strong>O Root of Jesse</strong> (December 19): Come to deliver us, and do not delay.</p>
<p><strong>O Key of David</strong> (December 20): Come and bring forth the captive from prison.</p>
<p><strong>O Radiant Dawn</strong> (December 21): Come and enlighten those who sit in darkness.</p>
<p><strong>O King of Nations</strong> (December 22): Come and save us whom You formed from clay.</p>
<p><strong>O Emmanuel</strong> (December 23): Come and save us, O Lord our God.</p>
<p>These prayers express the longing of Israel for the Messiah—and our own longing for Christ's coming. The first letters of the Latin titles, read backwards, spell "Ero Cras"—"Tomorrow I will come."</p>`,
      scripture: 'Revelation 22:20 - "He who testifies to these things says, Surely I am coming soon. Amen. Come, Lord Jesus!"',
      prayer: 'O come, O come, Emmanuel, and ransom captive Israel, that mourns in lonely exile here, until the Son of God appear. Rejoice! Rejoice! Emmanuel shall come to thee, O Israel. Amen.'
    },
    {
      day: 5,
      title: 'Joseph: The Righteous Man',
      content: `<p>Joseph, the husband of Mary, is often overlooked in the Advent story. Yet his role was essential. When he discovered that Mary was pregnant, he planned to divorce her quietly. But an angel appeared to him in a dream: "Joseph, son of David, do not fear to take Mary as your wife, for that which is conceived in her is from the Holy Spirit."</p>
<p>Joseph obeyed. He took Mary into his home, protected her and the child, and became the foster father of the Son of God. His obedience, like Mary's, made the Incarnation possible.</p>
<p>Joseph teaches us to trust God even when we don't understand. He didn't receive explanations—just instructions. Yet he obeyed promptly and completely. His faith was shown in action.</p>
<p><strong>Advent Practice:</strong> Ask St. Joseph to help you trust God in confusing situations. Pray for the grace to obey God's will even when you don't understand His plan.</p>`,
      scripture: 'Matthew 1:24 - "When Joseph woke from sleep, he did as the angel of the Lord commanded him: he took his wife."',
      prayer: 'St. Joseph, righteous and obedient, help me to trust God as you did. When I am confused or afraid, give me the grace to obey. Protect my family as you protected the Holy Family. Pray for me. Amen.'
    },
    {
      day: 6,
      title: 'The Shepherds: Good News of Great Joy',
      content: `<p>On the night Jesus was born, shepherds were keeping watch over their flocks. An angel appeared to them, and the glory of the Lord shone around them. "Fear not," the angel said, "for behold, I bring you good news of great joy that will be for all the people. For unto you is born this day in the city of David a Savior, who is Christ the Lord."</p>
<p>The shepherds were the first to hear the good news. Not the religious leaders, not the wealthy, not the powerful—but poor shepherds watching their sheep in the night. God chose the lowly to receive the greatest announcement in history.</p>
<p>The shepherds responded immediately. "Let us go over to Bethlehem and see this thing that has happened." They didn't delay or make excuses. They went, they saw, and they glorified God.</p>
<p><strong>Advent Practice:</strong> Like the shepherds, respond to God's invitation without delay. Don't put off prayer, confession, or acts of charity. Go to Bethlehem—go to Christ—today.</p>`,
      scripture: 'Luke 2:10-11 - "Fear not, for behold, I bring you good news of great joy that will be for all the people. For unto you is born this day in the city of David a Savior, who is Christ the Lord."',
      prayer: 'Lord, like the shepherds, I want to respond to Your call without delay. Help me to go to Bethlehem, to find You in the manger of my heart, and to glorify You with my life. Amen.'
    },
    {
      day: 7,
      title: 'Christmas: The Word Made Flesh',
      content: `<p>"And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth."</p>
<p>This is the mystery we celebrate at Christmas: God became man. The infinite became finite. The Creator became a creature. The Word became flesh.</p>
<p>Why did God do this? "For us and for our salvation," as the Creed says. He became what we are so that we might become what He is. He took on our humanity so that we might share in His divinity.</p>
<p>Christmas is not just a birthday party for Jesus. It is the celebration of our salvation, the feast of God's incredible love for us. "For God so loved the world, that he gave his only Son."</p>
<p>As you celebrate Christmas, remember the reason for the season. In the midst of gifts and gatherings, take time to kneel before the manger and adore the newborn King.</p>`,
      scripture: 'John 1:14 - "And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth."',
      prayer: 'Lord Jesus, Word made flesh, I adore You in the manger. Thank You for becoming man for my salvation. Help me to receive You not just at Christmas but every day. May You be born anew in my heart. Amen.'
    }
  ]
};

const familyRosary: Devotional = {
  slug: 'family-rosary',
  title: 'Family Rosary Devotional',
  author: 'Catholic Bible Online',
  description: 'Daily reflections to enrich your family\'s Rosary practice.',
  longDescription: 'The family that prays together stays together. This devotional provides daily reflections to help families pray the Rosary with greater understanding and devotion. Each day focuses on a different aspect of the Rosary, making this ancient prayer accessible and meaningful for all ages.',
  frequency: 'Daily',
  category: 'Family & Marriage',
  icon: '👨‍👩‍👧‍👦',
  readings: [
    {
      day: 1,
      title: 'Why Pray the Rosary as a Family?',
      content: `<p>"The family that prays together stays together." This famous saying, popularized by Father Patrick Peyton, captures a profound truth: shared prayer strengthens family bonds and draws families closer to God.</p>
<p>The Rosary is the perfect family prayer. It is simple enough for children to learn, yet deep enough to nourish adults. It can be prayed in fifteen minutes or extended with meditation. It brings the whole family together before God.</p>
<p><strong>Benefits of the Family Rosary:</strong></p>
<ul>
<li>Creates a daily habit of family prayer</li>
<li>Teaches children the faith through the mysteries</li>
<li>Invites Mary's protection over the family</li>
<li>Provides peace and unity in the home</li>
<li>Offers intentions for family needs</li>
</ul>
<p>Our Lady of Fatima asked us to pray the Rosary daily for peace. What better place to start than in our own homes, bringing peace to our families?</p>`,
      scripture: 'Matthew 18:20 - "For where two or three are gathered in my name, there am I among them."',
      prayer: 'Lord, bless our family as we gather to pray the Rosary. Help us to be faithful to this practice. May Mary\'s intercession bring peace, unity, and holiness to our home. Amen.'
    },
    {
      day: 2,
      title: 'Making the Rosary Accessible for Children',
      content: `<p>Children can pray the Rosary! With a little creativity, this ancient prayer becomes engaging and meaningful for even young children.</p>
<p><strong>Tips for Praying with Children:</strong></p>
<ul>
<li>Start small—one decade is enough for little ones</li>
<li>Use pictures or icons of the mysteries</li>
<li>Let children take turns leading decades</li>
<li>Explain the mysteries in simple terms</li>
<li>Keep it joyful, not forced</li>
</ul>
<p><strong>For Young Children:</strong> Focus on the Joyful Mysteries, which tell stories children can understand—the angel visiting Mary, baby Jesus in the manger, finding Jesus in the Temple.</p>
<p><strong>For Older Children:</strong> Encourage them to add their own intentions. Help them see how the mysteries connect to their lives.</p>
<p>Don't worry if children are wiggly or distracted. The goal is to plant seeds of faith that will grow over time. Consistency matters more than perfection.</p>`,
      scripture: 'Mark 10:14 - "Let the children come to me; do not hinder them, for to such belongs the kingdom of God."',
      prayer: 'Mary, Mother of Jesus and our mother, help our children to love the Rosary. Plant in their hearts a devotion to you and your Son. May the seeds we plant today bear fruit throughout their lives. Amen.'
    },
    {
      day: 3,
      title: 'Meditating on the Mysteries',
      content: `<p>The Rosary is not just repetition of prayers—it is meditation on the life of Christ. The Hail Marys provide a rhythm that frees the mind to contemplate the mysteries.</p>
<p><strong>How to Meditate:</strong></p>
<ul>
<li>Before each decade, read the Scripture passage for that mystery</li>
<li>Picture the scene in your imagination</li>
<li>Place yourself in the story—what do you see, hear, feel?</li>
<li>Ask: What is God saying to me through this mystery?</li>
<li>Let the prayers flow while your heart rests in the scene</li>
</ul>
<p><strong>For Families:</strong> Have different family members share what they imagine or what strikes them about each mystery. This makes the meditation come alive and helps everyone engage more deeply.</p>
<p>Don't worry if your mind wanders. Gently bring it back to the mystery. The Rosary is a school of prayer—we are always learning.</p>`,
      scripture: 'Luke 2:19 - "But Mary treasured up all these things, pondering them in her heart."',
      prayer: 'Mary, teach us to meditate as you did, pondering the mysteries of your Son in our hearts. Help us to see Jesus more clearly through the Rosary. Amen.'
    },
    {
      day: 4,
      title: 'Praying for Family Intentions',
      content: `<p>The Rosary is a powerful prayer of intercession. Each decade can be offered for a specific intention, bringing our family's needs before God through Mary's intercession.</p>
<p><strong>Family Intentions to Consider:</strong></p>
<ul>
<li>For each family member by name</li>
<li>For family unity and peace</li>
<li>For health and protection</li>
<li>For those who are struggling</li>
<li>For deceased family members</li>
<li>For the Church and the world</li>
</ul>
<p><strong>Involving Everyone:</strong> Let each family member offer an intention before a decade. This teaches children that prayer is personal and that God cares about their concerns.</p>
<p>Keep a family prayer journal to record intentions and answered prayers. Looking back at how God has worked builds faith for future needs.</p>`,
      scripture: 'Philippians 4:6 - "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God."',
      prayer: 'Mary, we entrust our family to your care. Present our intentions to your Son. Intercede for us in all our needs. We trust in your motherly love. Amen.'
    },
    {
      day: 5,
      title: 'Creating a Rosary Routine',
      content: `<p>Consistency is key to making the family Rosary a lasting habit. Choose a time that works for your family and protect it.</p>
<p><strong>When to Pray:</strong></p>
<ul>
<li>After dinner, before dessert</li>
<li>Before bedtime</li>
<li>During a car ride</li>
<li>First thing in the morning</li>
<li>After Sunday Mass</li>
</ul>
<p><strong>Creating Sacred Space:</strong></p>
<ul>
<li>Gather in a special place (living room, bedroom, backyard)</li>
<li>Light a candle</li>
<li>Place an image of Mary nearby</li>
<li>Turn off phones and screens</li>
</ul>
<p><strong>When You Miss a Day:</strong> Don't give up! Simply start again the next day. The goal is progress, not perfection. God blesses our efforts, even imperfect ones.</p>`,
      scripture: 'Colossians 4:2 - "Continue steadfastly in prayer, being watchful in it with thanksgiving."',
      prayer: 'Lord, help our family to be faithful to the Rosary. When we are tired or busy, give us the grace to persevere. May this prayer become a treasured part of our family life. Amen.'
    },
    {
      day: 6,
      title: 'The Promises of the Rosary',
      content: `<p>Our Lady has made many promises to those who faithfully pray the Rosary. These promises, given to St. Dominic and Blessed Alan de la Roche, encourage us to persevere in this devotion.</p>
<p><strong>Selected Promises:</strong></p>
<ul>
<li>Whoever shall faithfully serve me by the recitation of the Rosary shall receive signal graces.</li>
<li>I promise my special protection and the greatest graces to all those who shall recite the Rosary.</li>
<li>The Rosary shall be a powerful armor against hell; it will destroy vice, decrease sin, and defeat heresies.</li>
<li>The soul which recommends itself to me by the recitation of the Rosary shall not perish.</li>
<li>Those who are faithful to recite the Rosary shall have during their life and at their death the light of God and the plenitude of His graces.</li>
</ul>
<p>These promises remind us that the Rosary is not just a pious practice but a powerful spiritual weapon. Mary herself has promised to help those who pray it faithfully.</p>`,
      scripture: 'Luke 1:48-49 - "For he who is mighty has done great things for me, and holy is his name."',
      prayer: 'Mary, we trust in your promises. Help us to be faithful to the Rosary, confident that you will obtain for us the graces we need. We place our family under your protection. Amen.'
    },
    {
      day: 7,
      title: 'The Rosary: A School of Mary',
      content: `<p>Pope St. John Paul II called the Rosary "a school of Mary." Through this prayer, we learn from Mary how to follow Jesus.</p>
<p><strong>What Mary Teaches Us:</strong></p>
<ul>
<li><strong>Faith:</strong> Mary believed the angel's message, even when it seemed impossible.</li>
<li><strong>Obedience:</strong> She said "yes" to God's will, whatever the cost.</li>
<li><strong>Humility:</strong> She called herself the "handmaid of the Lord."</li>
<li><strong>Perseverance:</strong> She stood at the foot of the Cross when others fled.</li>
<li><strong>Joy:</strong> She rejoiced in God her Savior.</li>
</ul>
<p>As we pray the Rosary, we walk with Mary through the life of Jesus. We see Him through her eyes, love Him with her heart, and learn from her example how to be His disciples.</p>
<p>The Rosary is not just about Mary—it is about Jesus. Mary always points us to her Son: "Do whatever He tells you."</p>`,
      scripture: 'John 2:5 - "His mother said to the servants, Do whatever he tells you."',
      prayer: 'Mary, be our teacher in the school of the Rosary. Help us to know Jesus better, love Him more deeply, and follow Him more faithfully. Lead our family closer to your Son. Amen.'
    }
  ]
};

devotionals.push(adventDaily, familyRosary);


// ============================================
// MORE SAINTS DEVOTIONALS
// ============================================

const johnPaulIIDaily: Devotional = {
  slug: 'john-paul-ii-daily',
  title: 'St. John Paul II Daily',
  author: 'St. John Paul II',
  description: 'Teachings from the beloved Pope on faith, family, and the dignity of the human person.',
  longDescription: 'Pope St. John Paul II (1920-2005) was one of the most influential figures of the 20th century. His teachings on human dignity, the family, and the new evangelization continue to shape the Church today. These daily reflections draw from his writings and homilies to inspire your faith journey.',
  frequency: 'Daily',
  category: 'Saints for Today',
  icon: '🇻🇦',
  readings: [
    {
      day: 1,
      title: 'Be Not Afraid',
      content: `<p>"Be not afraid!" These words, spoken at the beginning of John Paul II's pontificate, became the theme of his entire ministry. They echo Christ's words to His disciples and to us.</p>
<p>"Do not be afraid. Do not be satisfied with mediocrity. Put out into the deep and let down your nets for a catch."</p>
<p>John Paul II lived these words. He faced down communism, traveled to 129 countries, survived an assassination attempt, and continued his ministry even as Parkinson's disease ravaged his body. He was not afraid because he trusted in Christ.</p>
<p>"The future starts today, not tomorrow. We are not the sum of our weaknesses and failures; we are the sum of the Father's love for us and our real capacity to become the image of his Son."</p>
<p>What are you afraid of? Christ says to you today: "Be not afraid!" He is with you. He will never abandon you. Trust in Him.</p>`,
      scripture: 'Isaiah 41:10 - "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you."',
      prayer: 'Lord Jesus, You told us not to be afraid. Help me to trust in You completely, even when I face difficulties and uncertainties. Give me the courage of St. John Paul II to live my faith boldly. Be not afraid! Amen.'
    },
    {
      day: 2,
      title: 'The Dignity of the Human Person',
      content: `<p>"The human person is the only creature on earth that God has wanted for its own sake." This profound truth from the Second Vatican Council was central to John Paul II's teaching.</p>
<p>Every human being, from conception to natural death, has infinite dignity because we are created in God's image. This dignity cannot be earned or lost—it is inherent to our nature.</p>
<p>"Man cannot live without love. He remains a being that is incomprehensible for himself, his life is senseless, if love is not revealed to him, if he does not encounter love, if he does not experience it and make it his own."</p>
<p>John Paul II defended human dignity against all threats: abortion, euthanasia, poverty, war, and the culture of death. He called us to build a "civilization of love" where every person is valued.</p>
<p>"Freedom consists not in doing what we like, but in having the right to do what we ought."</p>`,
      scripture: 'Genesis 1:27 - "So God created man in his own image, in the image of God he created him; male and female he created them."',
      prayer: 'Lord, help me to see the dignity of every person I meet. May I defend human life from conception to natural death. Give me the grace to build a civilization of love in my family, my community, and my world. Amen.'
    },
    {
      day: 3,
      title: 'The Family: School of Love',
      content: `<p>"As the family goes, so goes the nation and so goes the whole world in which we live." John Paul II understood that the family is the foundation of society and the Church.</p>
<p>He called the family the "domestic church"—the first place where children learn to pray, to love, and to live the faith. Parents are the primary educators of their children in the ways of God.</p>
<p>"The future of humanity passes by way of the family. It is therefore indispensable and urgent that every person of good will should endeavor to save and foster the values and requirements of the family."</p>
<p>In a world that attacks the family, John Paul II called us to defend and strengthen it. Strong families build strong societies. Holy families build a holy Church.</p>
<p>"Love is never something ready-made, something merely 'given' to man and woman; it must always be 'worked out' by them."</p>`,
      scripture: 'Ephesians 5:25 - "Husbands, love your wives, as Christ loved the church and gave himself up for her."',
      prayer: 'Lord, bless and protect my family. Help us to be a domestic church where faith is lived and love is learned. Give parents the grace to be holy educators of their children. St. John Paul II, pray for families. Amen.'
    },
    {
      day: 4,
      title: 'Theology of the Body',
      content: `<p>John Paul II's Theology of the Body is one of the most significant contributions to Catholic thought in modern times. In 129 Wednesday audiences, he explored the meaning of human sexuality and the body.</p>
<p>"The body, in fact, and only the body, is capable of making visible what is invisible: the spiritual and the divine. It has been created to transfer into the visible reality of the world the mystery hidden from eternity in God."</p>
<p>Our bodies are not prisons for our souls but temples of the Holy Spirit. Sexuality is not shameful but sacred—a gift from God that reflects His own life-giving love.</p>
<p>"Man and woman were created for each other—not that God left them half-made and incomplete: he created them to be a communion of persons, in which each can be 'helpmate' to the other."</p>
<p>The Theology of the Body calls us to live our sexuality according to God's design, finding in it a path to holiness and a reflection of divine love.</p>`,
      scripture: '1 Corinthians 6:19-20 - "Do you not know that your body is a temple of the Holy Spirit within you? You are not your own, for you were bought with a price. So glorify God in your body."',
      prayer: 'Lord, help me to understand and live the truth about my body and sexuality. May I honor my body as a temple of the Holy Spirit and live according to Your design for human love. Amen.'
    },
    {
      day: 5,
      title: 'The New Evangelization',
      content: `<p>John Paul II called the Church to a "new evangelization"—new in ardor, methods, and expression. The Gospel must be proclaimed anew to a world that has forgotten it.</p>
<p>"The Church which 'goes forth' is a community of missionary disciples who take the first step, who are involved and supportive, who bear fruit and rejoice."</p>
<p>The new evangelization is not just for missionaries in foreign lands but for every Catholic in their daily life. We are all called to share the faith with others.</p>
<p>"Do not be afraid to go out on the streets and into public places, like the first Apostles who preached Christ and the Good News of salvation in the squares of cities, towns and villages."</p>
<p>John Paul II himself was the greatest evangelist of his time, using modern media, World Youth Days, and his personal witness to bring millions to Christ.</p>`,
      scripture: 'Matthew 28:19-20 - "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you."',
      prayer: 'Lord, give me the courage to share my faith with others. Help me to be a missionary disciple in my daily life. May the new evangelization begin with me. Amen.'
    },
    {
      day: 6,
      title: 'Suffering and Redemption',
      content: `<p>John Paul II knew suffering intimately. He lost his mother at age 8, his brother at 12, and his father at 20. He was shot by an assassin. He lived his final years with Parkinson's disease, visible to the whole world.</p>
<p>"Suffering is present in the world in order to release love, in order to give birth to works of love towards neighbor, in order to transform the whole of human civilization into a 'civilization of love.'"</p>
<p>He taught that suffering, united to Christ's Cross, has redemptive value. It is not meaningless but can become a source of grace for ourselves and others.</p>
<p>"I have lived through much darkness... but I have also experienced much light. And in this light I have seen that suffering is not the last word. The last word is love."</p>
<p>John Paul II's witness of suffering with dignity and faith inspired millions. He showed that even in weakness, we can glorify God.</p>`,
      scripture: 'Colossians 1:24 - "Now I rejoice in my sufferings for your sake, and in my flesh I am filling up what is lacking in Christ\'s afflictions for the sake of his body, that is, the church."',
      prayer: 'Lord Jesus, help me to unite my sufferings to Your Cross. May my trials become a source of grace for others. Give me the faith to trust You in darkness and to witness to Your love in all circumstances. Amen.'
    },
    {
      day: 7,
      title: 'Totus Tuus: Totally Yours',
      content: `<p>"Totus Tuus"—Totally Yours—was John Paul II's papal motto, expressing his complete consecration to Mary. This Marian devotion shaped his entire life and ministry.</p>
<p>"To Jesus through Mary." John Paul II believed that devotion to Mary leads us closer to her Son. She is the surest path to Christ.</p>
<p>"The Rosary is my favorite prayer. A marvelous prayer! Marvelous in its simplicity and its depth... It can be said that the Rosary is, in a certain way, a prayer-commentary on the final chapter of the Constitution Lumen Gentium of Vatican II."</p>
<p>He credited Mary with saving his life during the assassination attempt on May 13, 1981—the feast of Our Lady of Fatima. The bullet that nearly killed him is now in the crown of the statue at Fatima.</p>
<p>"Have recourse to that fountain of mercy and grace which is the Heart of Mary. Entrust yourselves to her who knows the way to the Heart of her Son."</p>`,
      scripture: 'John 19:27 - "Then he said to the disciple, Behold, your mother! And from that hour the disciple took her to his own home."',
      prayer: 'Mary, my Mother, I consecrate myself entirely to you. Totus Tuus—I am totally yours. Lead me to Jesus. Protect me under your mantle. Help me to love your Son as you do. Amen.'
    }
  ]
};

const fultonSheenDaily: Devotional = {
  slug: 'fulton-sheen-daily',
  title: 'Venerable Fulton Sheen',
  author: 'Archbishop Fulton Sheen',
  description: 'Timeless wisdom from America\'s most famous Catholic broadcaster.',
  longDescription: 'Archbishop Fulton J. Sheen (1895-1979) was a pioneer of religious broadcasting, reaching millions through radio and television. His wit, wisdom, and ability to explain the faith made him one of the most influential Catholics of the 20th century. His cause for canonization is underway.',
  frequency: 'Daily',
  category: 'Saints for Today',
  icon: '📺',
  readings: [
    {
      day: 1,
      title: 'The Purpose of Life',
      content: `<p>"Life is worth living" was the title of Fulton Sheen's famous television program. But what makes life worth living? Sheen had a clear answer: knowing, loving, and serving God.</p>
<p>"The big print giveth and the fine print taketh away. The big print of life says: 'You are free.' The fine print says: 'You are responsible.'"</p>
<p>Sheen understood that modern people are searching for meaning. We have more comforts than any generation in history, yet we are often unhappy. Why? Because we have forgotten our purpose.</p>
<p>"There are not one hundred people in the United States who hate the Catholic Church, but there are millions who hate what they wrongly perceive the Catholic Church to be."</p>
<p>Our purpose is to know God, to love Him, and to serve Him in this life, and to be happy with Him forever in the next. Everything else is secondary.</p>`,
      scripture: 'Ecclesiastes 12:13 - "The end of the matter; all has been heard. Fear God and keep his commandments, for this is the whole duty of man."',
      prayer: 'Lord, help me to remember my purpose in life. May I seek first Your kingdom and Your righteousness. Free me from the distractions that keep me from You. Amen.'
    },
    {
      day: 2,
      title: 'The Holy Hour',
      content: `<p>Fulton Sheen made a holy hour before the Blessed Sacrament every day of his priestly life. He credited this practice with whatever good he accomplished.</p>
<p>"The Holy Hour is not a devotion; it is a sharing in the work of redemption... In the Garden of Gethsemane, Our Lord asked: 'Could you not watch one hour with me?'"</p>
<p>Sheen believed that time spent before the Eucharist was never wasted. It was the source of his preaching, his writing, and his apostolate.</p>
<p>"The purpose of the Holy Hour is to encourage deep personal encounter with Christ. The holy and glorious God is constantly inviting us to come to Him, to hold converse with Him, to ask for such things as we need."</p>
<p>He challenged every Catholic to make a weekly holy hour: "You will find that the hour passes quickly, and you will wonder why you did not begin this practice sooner."</p>`,
      scripture: 'Matthew 26:40 - "And he came to the disciples and found them sleeping. And he said to Peter, So, could you not watch with me one hour?"',
      prayer: 'Lord Jesus, present in the Blessed Sacrament, draw me to spend time with You. Help me to make the Holy Hour a regular part of my life. May I watch with You and grow in love for You. Amen.'
    },
    {
      day: 3,
      title: 'The Cross and Suffering',
      content: `<p>"It is not the fast that sanctifies, but the motive; not the giving up of pleasures, but the reason for giving them up. The Cross is the condition of the crown."</p>
<p>Fulton Sheen spoke often about suffering because he understood its redemptive value. Suffering united to Christ's Cross becomes a source of grace.</p>
<p>"Unless there is a Good Friday in your life, there can be no Easter Sunday."</p>
<p>He taught that we should not seek suffering for its own sake, but when it comes, we should embrace it as an opportunity for growth and sanctification.</p>
<p>"The only way to get rid of the cross is to carry it. The only way to get rid of suffering is to suffer. The only way to get rid of death is to die."</p>
<p>Sheen himself suffered greatly in his final years, yet he maintained his faith and joy. His example teaches us how to suffer well.</p>`,
      scripture: 'Romans 8:17 - "And if children, then heirs—heirs of God and fellow heirs with Christ, provided we suffer with him in order that we may also be glorified with him."',
      prayer: 'Lord, help me to embrace the crosses in my life. May I unite my sufferings to Yours for the salvation of souls. Give me the grace to suffer with faith, hope, and love. Amen.'
    },
    {
      day: 4,
      title: 'Sin and Mercy',
      content: `<p>"Sin is not the worst thing in the world. The worst thing is the denial of sin." Fulton Sheen understood that acknowledging our sin is the first step toward healing.</p>
<p>Modern psychology often explains away sin as neurosis or social conditioning. But Sheen insisted that sin is real—and so is God's mercy.</p>
<p>"The sinner who is sorry for his sins is closer to God than the just man who boasts of his good works."</p>
<p>He preached God's mercy with passion: "God does not love us because we are valuable. We are valuable because God loves us."</p>
<p>"There are only two classes of people: those who say to God, 'Thy will be done,' and those to whom God says, 'All right, then, have it your way.'"</p>
<p>Sheen called people to confession, to repentance, and to trust in God's infinite mercy. No sin is too great for God to forgive.</p>`,
      scripture: 'Luke 15:7 - "Just so, I tell you, there will be more joy in heaven over one sinner who repents than over ninety-nine righteous persons who need no repentance."',
      prayer: 'Merciful Father, I acknowledge my sins before You. I am sorry for having offended You. Help me to trust in Your mercy and to make a sincere confession. Forgive me and make me new. Amen.'
    },
    {
      day: 5,
      title: 'Love and Marriage',
      content: `<p>"It takes three to make love, not two: you, your spouse, and God. Without God people only succeed in bringing out the worst in one another."</p>
<p>Fulton Sheen wrote extensively on love and marriage. He understood that human love, to be lasting, must be rooted in divine love.</p>
<p>"Love is a mutual self-giving which ends in self-recovery."</p>
<p>He warned against the dangers of lust, which uses others for pleasure, and called couples to authentic love, which seeks the good of the other.</p>
<p>"The difference between love and lust is the difference between lightning and a lightning bug."</p>
<p>Sheen encouraged couples to pray together, to go to Mass together, and to keep God at the center of their marriage. "The family that prays together stays together."</p>`,
      scripture: '1 Corinthians 13:4-7 - "Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth."',
      prayer: 'Lord, bless all married couples. Help them to love each other with Your love. Keep God at the center of their marriage. Protect families from all that would divide them. Amen.'
    },
    {
      day: 6,
      title: 'The Blessed Mother',
      content: `<p>"God who made the sun also made the moon. The moon does not take away from the brilliance of the sun... Mary reflects her Divine Son; without Him, she is nothing."</p>
<p>Fulton Sheen had a deep devotion to Mary. He wrote "The World's First Love," a beautiful meditation on the Blessed Mother.</p>
<p>"When we have Our Lady, we have everything. When we lose Our Lady, we lose everything."</p>
<p>He explained that devotion to Mary does not take away from Christ but leads us to Him. Mary always points to her Son: "Do whatever He tells you."</p>
<p>"Mary is the window through which our humanity first catches a glimpse of Divinity on earth. Or she is the window through which Divinity first catches a glimpse of humanity."</p>
<p>Sheen prayed the Rosary daily and encouraged all Catholics to develop a relationship with Mary.</p>`,
      scripture: 'Luke 1:48 - "For he has looked on the humble estate of his servant. For behold, from now on all generations will call me blessed."',
      prayer: 'Mary, my Mother, lead me to Jesus. Help me to know Him, love Him, and serve Him as you did. Protect me under your mantle and pray for me always. Amen.'
    },
    {
      day: 7,
      title: 'Heaven and Eternity',
      content: `<p>"Each of us makes his own weather, determines the color of the skies in the emotional universe which he inhabits." But ultimately, our choices determine our eternal destiny.</p>
<p>Fulton Sheen spoke often about heaven and hell because he believed in them. Our choices in this life have eternal consequences.</p>
<p>"Hell is not a place where God puts you; hell is a place where you put yourself by refusing to love."</p>
<p>He described heaven as the fulfillment of all our deepest desires: "Heaven is the eternal now, where we shall see God face to face and be perfectly happy forever."</p>
<p>"The only tragedy in life is not to become a saint."</p>
<p>Sheen died on December 9, 1979, in his chapel before the Blessed Sacrament—the place where he had spent so many hours in prayer. His life was a preparation for eternity.</p>`,
      scripture: '1 Corinthians 2:9 - "What no eye has seen, nor ear heard, nor the heart of man imagined, what God has prepared for those who love him."',
      prayer: 'Lord, help me to live with eternity in view. May I make choices today that lead to heaven. Give me the grace to become a saint. Venerable Fulton Sheen, pray for me. Amen.'
    }
  ]
};

devotionals.push(johnPaulIIDaily, fultonSheenDaily);


// ============================================
// SCRIPTURE & HEALING DEVOTIONALS
// ============================================

const psalmsDailyDevo: Devotional = {
  slug: 'psalms-daily',
  title: 'Psalms for Today',
  author: 'Catholic Bible Online',
  description: 'A daily Psalm with meditation rooted in Catholic tradition.',
  longDescription: 'The Psalms have been the prayer book of God\'s people for three thousand years. Jesus prayed them, Mary sang them, and the Church continues to pray them daily in the Liturgy of the Hours. These reflections help you enter into the Psalms and make them your own prayer.',
  frequency: 'Daily',
  category: 'Scripture & Faith',
  icon: '🎵',
  readings: [
    {
      day: 1,
      title: 'Psalm 23: The Lord Is My Shepherd',
      content: `<p><strong>The Lord is my shepherd; I shall not want.</strong></p>
<p>This beloved psalm paints a picture of God as a caring shepherd who provides for all our needs. In ancient Israel, shepherds were responsible for finding pasture, water, and protection for their flocks. God does all this and more for us.</p>
<p><strong>He makes me lie down in green pastures. He leads me beside still waters. He restores my soul.</strong></p>
<p>Notice that the shepherd makes the sheep lie down. Sometimes we need to be made to rest. God knows when we need refreshment and restoration, even when we don\'t.</p>
<p><strong>Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.</strong></p>
<p>The shepherd doesn\'t promise to keep us from dark valleys, but to be with us through them. His presence is our comfort and protection.</p>
<p><strong>Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever.</strong></p>`,
      scripture: 'Psalm 23:1 - "The Lord is my shepherd; I shall not want."',
      prayer: 'Lord, You are my shepherd. I trust in Your care and provision. Lead me beside still waters and restore my soul. Be with me through every dark valley. May I dwell in Your house forever. Amen.'
    },
    {
      day: 2,
      title: 'Psalm 51: A Prayer of Repentance',
      content: `<p><strong>Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions.</strong></p>
<p>Psalm 51 is David\'s prayer of repentance after his sin with Bathsheba. It is the model for all who seek God\'s forgiveness.</p>
<p><strong>Wash me thoroughly from my iniquity, and cleanse me from my sin! For I know my transgressions, and my sin is ever before me.</strong></p>
<p>True repentance begins with honest acknowledgment of sin. David doesn\'t make excuses or minimize his guilt. He confesses fully and throws himself on God\'s mercy.</p>
<p><strong>Create in me a clean heart, O God, and renew a right spirit within me. Cast me not away from your presence, and take not your Holy Spirit from me.</strong></p>
<p>David asks not just for forgiveness but for transformation. He wants a new heart, a right spirit, the continued presence of God.</p>
<p><strong>The sacrifices of God are a broken spirit; a broken and contrite heart, O God, you will not despise.</strong></p>`,
      scripture: 'Psalm 51:10 - "Create in me a clean heart, O God, and renew a right spirit within me."',
      prayer: 'Have mercy on me, O God. Wash me from my sins and create in me a clean heart. Do not cast me away from Your presence. Restore to me the joy of Your salvation. Amen.'
    },
    {
      day: 3,
      title: 'Psalm 139: God Knows Me Completely',
      content: `<p><strong>O Lord, you have searched me and known me! You know when I sit down and when I rise up; you discern my thoughts from afar.</strong></p>
<p>Psalm 139 celebrates God\'s intimate knowledge of each person. He knows us better than we know ourselves—and He loves us completely.</p>
<p><strong>Where shall I go from your Spirit? Or where shall I flee from your presence? If I ascend to heaven, you are there! If I make my bed in Sheol, you are there!</strong></p>
<p>There is nowhere we can go to escape God\'s presence. This is not a threat but a comfort. He is always with us.</p>
<p><strong>For you formed my inward parts; you knitted me together in my mother\'s womb. I praise you, for I am fearfully and wonderfully made.</strong></p>
<p>God created each of us with care and intention. We are not accidents but masterpieces of His creative love.</p>
<p><strong>Search me, O God, and know my heart! Try me and know my thoughts! And see if there be any grievous way in me, and lead me in the way everlasting!</strong></p>`,
      scripture: 'Psalm 139:14 - "I praise you, for I am fearfully and wonderfully made."',
      prayer: 'Lord, You know me completely and love me unconditionally. Search my heart and reveal anything that displeases You. Lead me in the way everlasting. Amen.'
    },
    {
      day: 4,
      title: 'Psalm 91: Under His Wings',
      content: `<p><strong>He who dwells in the shelter of the Most High will abide in the shadow of the Almighty.</strong></p>
<p>Psalm 91 is a psalm of protection and trust. It promises God\'s care for those who make Him their refuge.</p>
<p><strong>He will cover you with his pinions, and under his wings you will find refuge; his faithfulness is a shield and buckler.</strong></p>
<p>The image of God as a mother bird protecting her young is tender and powerful. Under His wings, we are safe from all harm.</p>
<p><strong>You will not fear the terror of the night, nor the arrow that flies by day, nor the pestilence that stalks in darkness, nor the destruction that wastes at noonday.</strong></p>
<p>This doesn\'t mean we will never face danger, but that we need not fear. God is our protector.</p>
<p><strong>Because he holds fast to me in love, I will deliver him; I will protect him, because he knows my name.</strong></p>
<p>The condition for this protection is love and trust. Those who cling to God find safety in Him.</p>`,
      scripture: 'Psalm 91:1-2 - "He who dwells in the shelter of the Most High will abide in the shadow of the Almighty. I will say to the Lord, My refuge and my fortress, my God, in whom I trust."',
      prayer: 'Lord, You are my refuge and fortress. I trust in You. Cover me with Your wings and protect me from all evil. I hold fast to You in love. Amen.'
    },
    {
      day: 5,
      title: 'Psalm 27: The Lord Is My Light',
      content: `<p><strong>The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?</strong></p>
<p>Psalm 27 expresses confident trust in God even in the face of enemies and danger. When God is our light, we need not fear the darkness.</p>
<p><strong>One thing have I asked of the Lord, that will I seek after: that I may dwell in the house of the Lord all the days of my life, to gaze upon the beauty of the Lord and to inquire in his temple.</strong></p>
<p>The psalmist\'s one desire is to be in God\'s presence. Everything else is secondary to this.</p>
<p><strong>Wait for the Lord; be strong, and let your heart take courage; wait for the Lord!</strong></p>
<p>The psalm ends with a call to patient trust. God\'s timing is not always our timing, but He is always faithful.</p>`,
      scripture: 'Psalm 27:1 - "The Lord is my light and my salvation; whom shall I fear?"',
      prayer: 'Lord, You are my light and salvation. I will not fear. My one desire is to dwell in Your presence. Give me patience to wait for You and courage to trust in Your timing. Amen.'
    },
    {
      day: 6,
      title: 'Psalm 103: Bless the Lord, O My Soul',
      content: `<p><strong>Bless the Lord, O my soul, and all that is within me, bless his holy name! Bless the Lord, O my soul, and forget not all his benefits.</strong></p>
<p>Psalm 103 is a hymn of praise for God\'s mercy and compassion. It calls us to remember all that God has done for us.</p>
<p><strong>Who forgives all your iniquity, who heals all your diseases, who redeems your life from the pit, who crowns you with steadfast love and mercy.</strong></p>
<p>God forgives, heals, redeems, and crowns us with love. How can we not praise Him?</p>
<p><strong>The Lord is merciful and gracious, slow to anger and abounding in steadfast love... As far as the east is from the west, so far does he remove our transgressions from us.</strong></p>
<p>God\'s mercy is infinite. When He forgives, He removes our sins completely—as far as east is from west.</p>
<p><strong>As a father shows compassion to his children, so the Lord shows compassion to those who fear him. For he knows our frame; he remembers that we are dust.</strong></p>`,
      scripture: 'Psalm 103:12 - "As far as the east is from the west, so far does he remove our transgressions from us."',
      prayer: 'Bless the Lord, O my soul! I praise You for Your mercy and compassion. Thank You for forgiving my sins and crowning me with love. I will not forget all Your benefits. Amen.'
    },
    {
      day: 7,
      title: 'Psalm 150: Let Everything Praise the Lord',
      content: `<p><strong>Praise the Lord! Praise God in his sanctuary; praise him in his mighty heavens!</strong></p>
<p>Psalm 150 is the grand finale of the Psalter—a call for all creation to praise God with every instrument and every breath.</p>
<p><strong>Praise him for his mighty deeds; praise him according to his excellent greatness!</strong></p>
<p>We praise God for what He has done (His mighty deeds) and for who He is (His excellent greatness).</p>
<p><strong>Praise him with trumpet sound; praise him with lute and harp! Praise him with tambourine and dance; praise him with strings and pipe! Praise him with sounding cymbals; praise him with loud clashing cymbals!</strong></p>
<p>Every instrument, every form of music, every expression of joy is called to praise God. Nothing is too exuberant for worship.</p>
<p><strong>Let everything that has breath praise the Lord! Praise the Lord!</strong></p>
<p>The final verse is the climax: everything that breathes is called to praise. This includes you. Your very breath is an invitation to worship.</p>`,
      scripture: 'Psalm 150:6 - "Let everything that has breath praise the Lord! Praise the Lord!"',
      prayer: 'Praise the Lord! With every breath, I praise You. With my whole being, I worship You. Let everything I am and everything I do give glory to Your name. Hallelujah! Amen.'
    }
  ]
};

const anxietyPeace: Devotional = {
  slug: 'anxiety-peace',
  title: 'From Anxiety to Peace',
  author: 'Catholic Bible Online',
  description: 'Scripture and saints\' wisdom for overcoming anxiety.',
  longDescription: 'Anxiety affects millions of people, including many faithful Catholics. This devotional combines Scripture, the wisdom of the saints, and practical spiritual practices to help you find peace in Christ. Remember: seeking professional help for anxiety is also an act of faith.',
  frequency: 'Daily',
  category: 'Healing & Hope',
  icon: '🕊️',
  readings: [
    {
      day: 1,
      title: 'Do Not Be Anxious',
      content: `<p><strong>"Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus."</strong> (Philippians 4:6-7)</p>
<p>Anxiety is not a sin, but it is an invitation to trust God more deeply. When worry grips our hearts, we are called to bring our concerns to God in prayer.</p>
<p>Notice that Paul says to pray "with thanksgiving." Even in anxiety, we can thank God for His past faithfulness, His present love, and His promised future care.</p>
<p>The result is "the peace of God, which surpasses all understanding." This peace doesn\'t depend on our circumstances changing. It guards our hearts even when problems remain.</p>
<p><strong>St. Padre Pio said:</strong> "Pray, hope, and don\'t worry. Worry is useless. God is merciful and will hear your prayer."</p>`,
      scripture: 'Philippians 4:6-7 - "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God."',
      prayer: 'Lord, I bring my anxieties to You. I thank You for Your faithfulness in the past and trust You with my future. Guard my heart and mind with Your peace that surpasses understanding. Amen.'
    },
    {
      day: 2,
      title: 'Cast Your Cares on Him',
      content: `<p><strong>"Cast all your anxieties on him, because he cares for you."</strong> (1 Peter 5:7)</p>
<p>God invites us to cast—to throw, to hurl—our anxieties onto Him. This is not a gentle suggestion but an urgent invitation. He wants to carry our burdens.</p>
<p>Why can we do this? "Because he cares for you." God is not indifferent to your struggles. He loves you personally and wants to help you.</p>
<p><strong>St. Francis de Sales wrote:</strong> "Do not look forward to what may happen tomorrow; the same everlasting Father who cares for you today will take care of you tomorrow and every day."</p>
<p>Anxiety often comes from trying to carry burdens God never meant us to bear alone. He is strong enough to carry them. Let Him.</p>`,
      scripture: '1 Peter 5:7 - "Cast all your anxieties on him, because he cares for you."',
      prayer: 'Lord, I cast my anxieties on You. I release my worries into Your hands. Thank You for caring for me. Help me to trust that You will take care of tomorrow. Amen.'
    },
    {
      day: 3,
      title: 'Peace I Leave with You',
      content: `<p><strong>"Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid."</strong> (John 14:27)</p>
<p>Jesus offers us His peace—not the world\'s peace, which depends on circumstances, but His peace, which remains even in storms.</p>
<p>The world\'s peace is fragile: it comes when things go well and disappears when they don\'t. Christ\'s peace is different. It is rooted in His presence, His promises, and His power.</p>
<p><strong>St. Teresa of Ávila wrote:</strong> "Let nothing disturb you, let nothing frighten you. All things are passing; God never changes. Patience obtains all things. Whoever has God lacks nothing. God alone suffices."</p>
<p>When anxiety rises, remember: Jesus has given you His peace. It is already yours. Receive it.</p>`,
      scripture: 'John 14:27 - "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you."',
      prayer: 'Lord Jesus, I receive Your peace. Let not my heart be troubled or afraid. When anxiety rises, remind me that Your peace is already mine. You alone suffice. Amen.'
    },
    {
      day: 4,
      title: 'Be Still and Know',
      content: `<p><strong>"Be still, and know that I am God."</strong> (Psalm 46:10)</p>
<p>Anxiety often drives us to constant activity—planning, worrying, trying to control outcomes. God calls us to stillness.</p>
<p>In stillness, we remember who God is. He is sovereign over all things. He is working even when we can\'t see it. He is faithful to His promises.</p>
<p><strong>Practical Exercise:</strong> Set a timer for five minutes. Sit quietly. Breathe slowly. When anxious thoughts arise, gently release them to God. Repeat: "Be still and know that I am God."</p>
<p><strong>St. John of the Cross wrote:</strong> "In the evening of life, we will be judged on love alone." Not on how much we worried, but on how much we loved and trusted.</p>`,
      scripture: 'Psalm 46:10 - "Be still, and know that I am God."',
      prayer: 'Lord, help me to be still. Quiet my racing thoughts. In the stillness, help me to know that You are God—sovereign, loving, faithful. I trust in You. Amen.'
    },
    {
      day: 5,
      title: 'One Day at a Time',
      content: `<p><strong>"Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble."</strong> (Matthew 6:34)</p>
<p>Much of our anxiety is about the future—things that haven\'t happened and may never happen. Jesus calls us to live one day at a time.</p>
<p>God gives us grace for today, not for tomorrow. When tomorrow comes, He will give us grace for that day too. But we cannot live on tomorrow\'s grace today.</p>
<p><strong>St. Thérèse of Lisieux wrote:</strong> "If I did not simply live from one moment to another, it would be impossible for me to be patient, but I look only at the present, I forget the past, and I take good care not to forestall the future."</p>
<p>Focus on today. What does God ask of you right now? Do that, and trust Him with the rest.</p>`,
      scripture: 'Matthew 6:34 - "Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself."',
      prayer: 'Lord, help me to live one day at a time. I release tomorrow into Your hands. Give me grace for today\'s challenges. I trust You with my future. Amen.'
    },
    {
      day: 6,
      title: 'The Sacraments and Anxiety',
      content: `<p>The sacraments are powerful sources of grace for those struggling with anxiety. God meets us in these sacred encounters and gives us strength.</p>
<p><strong>The Eucharist:</strong> Receiving Jesus in Holy Communion unites us to the Prince of Peace. Make time for daily Mass when possible, or visit Jesus in Eucharistic Adoration.</p>
<p><strong>Confession:</strong> Anxiety is often linked to guilt and shame. The Sacrament of Reconciliation brings forgiveness and peace. Regular confession lightens the soul.</p>
<p><strong>Anointing of the Sick:</strong> This sacrament is not just for the dying but for anyone suffering from serious illness, including mental health conditions. Ask your priest about receiving this sacrament.</p>
<p><strong>St. John Vianney said:</strong> "When we have been to Holy Communion, the balm of love envelops the soul as the flower envelops the bee."</p>`,
      scripture: 'Matthew 11:28 - "Come to me, all who labor and are heavy laden, and I will give you rest."',
      prayer: 'Lord Jesus, I come to You in the sacraments. Meet me there with Your grace and peace. Heal my anxious heart. Give me rest for my weary soul. Amen.'
    },
    {
      day: 7,
      title: 'Seeking Help Is Holy',
      content: `<p>If you struggle with anxiety, seeking professional help is not a lack of faith—it is an act of wisdom and self-care.</p>
<p>God works through many means: prayer, sacraments, community, and also through doctors, therapists, and medication. Using these resources is not a failure but a recognition that we are embodied souls who need care at every level.</p>
<p><strong>The Catechism teaches:</strong> "Life and physical health are precious gifts entrusted to us by God. We must take reasonable care of them" (CCC 2288).</p>
<p>Mental health is part of physical health. If you needed treatment for diabetes or a broken bone, you would seek medical help. Anxiety deserves the same care.</p>
<p><strong>Remember:</strong> You are not alone. Many saints struggled with anxiety and depression. God\'s grace is sufficient for you, and He provides many channels for that grace to flow.</p>`,
      scripture: 'Sirach 38:1-4 - "Honor physicians for their services, for the Lord created them... The Lord created medicines out of the earth, and the sensible will not despise them."',
      prayer: 'Lord, give me the wisdom to seek help when I need it. Thank You for doctors, therapists, and all who work for healing. Help me to receive care without shame, trusting that You work through many means. Amen.'
    }
  ]
};

devotionals.push(psalmsDailyDevo, anxietyPeace);


// ============================================
// MORE DEVOTIONALS
// ============================================

const easterDaily: Devotional = {
  slug: 'easter-daily',
  title: 'Easter Season Joy',
  author: 'Catholic Bible Online',
  description: '50 days celebrating the Resurrection of Our Lord.',
  longDescription: 'The Easter Season is the most joyful time in the Church\'s calendar—fifty days of celebrating Christ\'s victory over sin and death. These reflections help you enter into the joy of the Resurrection and live as Easter people.',
  frequency: 'Seasonal',
  category: 'Liturgical Seasons',
  icon: '🐣',
  readings: [
    {
      day: 1,
      title: 'He Is Risen!',
      content: `<p><strong>"He is not here, for he has risen, as he said."</strong> (Matthew 28:6)</p>
<p>The stone is rolled away. The tomb is empty. Christ is risen! This is the central truth of our faith, the foundation of everything we believe.</p>
<p>If Christ has not been raised, Paul says, our faith is in vain. But He has been raised, and because He lives, we too shall live.</p>
<p>The Resurrection changes everything. Death is not the end. Sin does not have the final word. The grave could not hold Him, and it will not hold us.</p>
<p><strong>St. Augustine exclaimed:</strong> "We are an Easter people, and Alleluia is our song!"</p>
<p>Let the joy of Easter fill your heart today. Christ is risen! He is truly risen!</p>`,
      scripture: 'Matthew 28:5-6 - "Do not be afraid, for I know that you seek Jesus who was crucified. He is not here, for he has risen, as he said."',
      prayer: 'Lord Jesus, You have conquered death and risen in glory! Fill me with Easter joy. Help me to live as one who believes in the Resurrection. Alleluia! Amen.'
    },
    {
      day: 2,
      title: 'The Appearance to Mary Magdalene',
      content: `<p>Mary Magdalene came to the tomb while it was still dark. Finding it empty, she wept, thinking someone had taken the Lord\'s body.</p>
<p>Then Jesus appeared to her, but she did not recognize Him at first. He said to her, "Mary." At the sound of her name, she knew Him: "Rabboni!" (Teacher)</p>
<p>Jesus calls each of us by name. He knows us personally, intimately. In our grief and confusion, He comes to us and speaks our name.</p>
<p>Mary became the first witness to the Resurrection—the "apostle to the apostles." She ran to tell the disciples: "I have seen the Lord!"</p>
<p>We too are called to be witnesses. Having encountered the risen Christ, we cannot keep the good news to ourselves.</p>`,
      scripture: 'John 20:16 - "Jesus said to her, Mary. She turned and said to him in Aramaic, Rabboni! (which means Teacher)."',
      prayer: 'Lord Jesus, You call me by name. Help me to recognize Your voice and respond with joy. Make me a witness to Your resurrection. Amen.'
    },
    {
      day: 3,
      title: 'The Road to Emmaus',
      content: `<p>Two disciples were walking to Emmaus, discussing the events of the crucifixion. Jesus joined them, but they did not recognize Him.</p>
<p>He explained the Scriptures to them, showing how the Messiah had to suffer and enter into His glory. Their hearts burned within them as He spoke.</p>
<p>When they reached Emmaus, they urged Him to stay. At table, He took bread, blessed it, broke it, and gave it to them. Then their eyes were opened, and they recognized Him—and He vanished.</p>
<p>We encounter the risen Christ in the same way: in the Scriptures and in the breaking of bread. Every Mass is an Emmaus experience.</p>
<p>The disciples returned immediately to Jerusalem to share the good news. Encounter with Christ always leads to mission.</p>`,
      scripture: 'Luke 24:32 - "They said to each other, Did not our hearts burn within us while he talked to us on the road, while he opened to us the Scriptures?"',
      prayer: 'Lord Jesus, open the Scriptures to me. Make my heart burn with love for You. Help me to recognize You in the breaking of bread. Amen.'
    },
    {
      day: 4,
      title: 'Peace Be with You',
      content: `<p>On the evening of the Resurrection, the disciples were hiding behind locked doors, afraid of the Jewish leaders. Jesus came and stood among them.</p>
<p>"Peace be with you," He said, and showed them His hands and side. The disciples were overjoyed when they saw the Lord.</p>
<p>The risen Christ brings peace—not the absence of trouble, but the presence of God. His peace penetrates locked doors and fearful hearts.</p>
<p>He breathed on them and said, "Receive the Holy Spirit. If you forgive anyone\'s sins, their sins are forgiven." The Resurrection leads to Pentecost, and both lead to the Sacrament of Reconciliation.</p>
<p>The risen Christ still comes to us, offering peace and the power to forgive.</p>`,
      scripture: 'John 20:19-21 - "Jesus came and stood among them and said to them, Peace be with you... As the Father has sent me, even so I am sending you."',
      prayer: 'Lord Jesus, come into my locked rooms and fearful heart. Speak Your peace to me. Send me as the Father sent You. Amen.'
    },
    {
      day: 5,
      title: 'Doubting Thomas',
      content: `<p>Thomas was not with the other disciples when Jesus appeared. When they told him, "We have seen the Lord," he refused to believe without proof.</p>
<p>A week later, Jesus appeared again. He said to Thomas, "Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe."</p>
<p>Thomas responded with the greatest confession of faith in the Gospels: "My Lord and my God!"</p>
<p>Jesus said, "Because you have seen me, you have believed; blessed are those who have not seen and yet have believed."</p>
<p>That\'s us. We have not seen the risen Christ with our eyes, yet we believe. And we are blessed.</p>`,
      scripture: 'John 20:28-29 - "Thomas answered him, My Lord and my God! Jesus said to him, Have you believed because you have seen me? Blessed are those who have not seen and yet have believed."',
      prayer: 'My Lord and my God! I believe in You, though I have not seen. Strengthen my faith. Help me to trust even when I cannot see. Amen.'
    },
    {
      day: 6,
      title: 'Do You Love Me?',
      content: `<p>After the Resurrection, Jesus appeared to the disciples by the Sea of Galilee. After breakfast, He asked Peter three times: "Do you love me?"</p>
<p>Three times Peter had denied Jesus. Three times Jesus gave him the chance to affirm his love. "Lord, you know everything; you know that I love you."</p>
<p>"Feed my sheep," Jesus said. Peter\'s restoration was complete. His failure was not the end of his story.</p>
<p>Jesus asks each of us the same question: "Do you love me?" Not "Are you perfect?" or "Have you never failed?" but simply, "Do you love me?"</p>
<p>If we can answer yes—even imperfectly, even after failure—He has work for us to do.</p>`,
      scripture: 'John 21:17 - "He said to him the third time, Simon, son of John, do you love me?... Jesus said to him, Feed my sheep."',
      prayer: 'Lord, You know everything. You know that I love You—imperfectly, but truly. Restore me after my failures. Give me work to do in Your kingdom. Amen.'
    },
    {
      day: 7,
      title: 'The Ascension and Promise',
      content: `<p>Forty days after the Resurrection, Jesus led His disciples to the Mount of Olives. He commissioned them to be His witnesses "to the ends of the earth."</p>
<p>Then He was taken up before their eyes, and a cloud hid Him from their sight. Two angels appeared: "This same Jesus, who has been taken from you into heaven, will come back in the same way you have seen him go."</p>
<p>The Ascension is not an ending but a beginning. Jesus has gone to prepare a place for us. He has sent His Spirit to empower us. And He will come again.</p>
<p>We live between the Ascension and the Second Coming—witnesses to the risen Christ, empowered by His Spirit, awaiting His return.</p>
<p>Come, Lord Jesus!</p>`,
      scripture: 'Acts 1:8 - "But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth."',
      prayer: 'Lord Jesus, You have ascended to the Father\'s right hand. Send Your Spirit upon me. Make me Your witness. Come again in glory. Maranatha! Amen.'
    }
  ]
};

const griefComfort: Devotional = {
  slug: 'grief-comfort',
  title: 'Comfort in Grief',
  author: 'Catholic Bible Online',
  description: 'Daily consolation for those mourning the loss of loved ones.',
  longDescription: 'Grief is one of the most painful experiences in life. This devotional offers daily comfort from Scripture, the saints, and Catholic tradition for those who mourn. May you find consolation in Christ, who wept at the tomb of His friend Lazarus and who promises to wipe away every tear.',
  frequency: 'Daily',
  category: 'Healing & Hope',
  icon: '💔',
  readings: [
    {
      day: 1,
      title: 'Blessed Are Those Who Mourn',
      content: `<p><strong>"Blessed are those who mourn, for they shall be comforted."</strong> (Matthew 5:4)</p>
<p>Jesus does not say, "Blessed are those who don\'t mourn" or "Blessed are those who get over it quickly." He says those who mourn are blessed—and they will be comforted.</p>
<p>Grief is not a sign of weak faith. It is a sign of deep love. We grieve because we have loved, and love is never wasted.</p>
<p>The comfort Jesus promises is not a quick fix. It is His presence with us in our pain, His grace sustaining us day by day, and His promise of reunion in eternal life.</p>
<p><strong>St. Augustine, after his mother\'s death, wrote:</strong> "I wept for my mother... Let anyone who wishes condemn me. But if he has great charity, let him weep for my sins before You, the Father of all."</p>
<p>It is okay to weep. Jesus wept too.</p>`,
      scripture: 'Matthew 5:4 - "Blessed are those who mourn, for they shall be comforted."',
      prayer: 'Lord Jesus, You promised comfort to those who mourn. I bring my grief to You. Hold me in my pain. Give me hope in the midst of sorrow. Amen.'
    },
    {
      day: 2,
      title: 'Jesus Wept',
      content: `<p><strong>"Jesus wept."</strong> (John 11:35)</p>
<p>The shortest verse in the Bible is also one of the most profound. At the tomb of His friend Lazarus, Jesus wept.</p>
<p>He knew He was about to raise Lazarus from the dead. Yet He wept. He entered into the grief of Mary and Martha. He felt the pain of death, even though He would soon conquer it.</p>
<p>Jesus understands your grief. He does not stand apart from your pain but enters into it with you. He weeps with you.</p>
<p><strong>The Letter to the Hebrews says:</strong> "For we do not have a high priest who is unable to sympathize with our weaknesses" (4:15). Jesus knows what it is to lose someone He loved.</p>
<p>You are not alone in your grief. Jesus is with you, weeping with you.</p>`,
      scripture: 'John 11:35 - "Jesus wept."',
      prayer: 'Lord Jesus, You wept at the tomb of Your friend. Thank You for understanding my grief. Weep with me. Be present with me in my pain. Amen.'
    },
    {
      day: 3,
      title: 'The Resurrection and the Life',
      content: `<p><strong>"I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die."</strong> (John 11:25-26)</p>
<p>Before raising Lazarus, Jesus made this stunning declaration to Martha. Death is not the end for those who believe in Him.</p>
<p>Your loved one who died in Christ is not gone forever. They have passed from this life to eternal life. They are more alive now than ever before.</p>
<p>The separation is real and painful. But it is temporary. One day, you will be reunited in the presence of God, where there will be no more death or mourning or crying or pain.</p>
<p><strong>St. Paul wrote:</strong> "For I am sure that neither death nor life... will be able to separate us from the love of God in Christ Jesus our Lord" (Romans 8:38-39).</p>`,
      scripture: 'John 11:25-26 - "I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live."',
      prayer: 'Lord Jesus, You are the resurrection and the life. I believe in You. Give me hope in the promise of eternal life and reunion with those I love. Amen.'
    },
    {
      day: 4,
      title: 'Praying for the Dead',
      content: `<p>The Catholic Church teaches that we can and should pray for our deceased loved ones. This is an act of love that continues beyond death.</p>
<p>The souls in purgatory are being purified for heaven. Our prayers can help them on their journey. This is the communion of saints in action—the living and the dead united in Christ.</p>
<p><strong>Ways to pray for the dead:</strong></p>
<ul>
<li>Have Masses offered for their souls</li>
<li>Pray the Rosary for them</li>
<li>Offer your sufferings for their purification</li>
<li>Gain indulgences on their behalf</li>
<li>Visit their graves and pray</li>
</ul>
<p>Praying for the dead is also healing for us. It gives us something meaningful to do with our grief and keeps us connected to those we have lost.</p>`,
      scripture: '2 Maccabees 12:46 - "Thus he made atonement for the dead that they might be freed from this sin."',
      prayer: 'Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. May their souls and the souls of all the faithful departed, through the mercy of God, rest in peace. Amen.'
    },
    {
      day: 5,
      title: 'The Communion of Saints',
      content: `<p>Death does not end our relationship with those we love. In the communion of saints, we remain connected to them through Christ.</p>
<p>Those who have died in Christ are not far from us. They are part of the great cloud of witnesses (Hebrews 12:1) cheering us on. They can intercede for us before God.</p>
<p><strong>St. Thérèse of Lisieux promised:</strong> "I will spend my heaven doing good on earth." The saints in heaven are active on our behalf.</p>
<p>You can talk to your loved ones who have died. You can ask for their prayers. You can trust that the bond of love continues.</p>
<p>The communion of saints means we are never truly separated from those we love in Christ.</p>`,
      scripture: 'Hebrews 12:1 - "Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us."',
      prayer: 'Lord, thank You for the communion of saints. Thank You that death does not separate us from those we love. Help me to trust in this bond and to live in hope of reunion. Amen.'
    },
    {
      day: 6,
      title: 'God Will Wipe Away Every Tear',
      content: `<p><strong>"He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away."</strong> (Revelation 21:4)</p>
<p>This is God\'s promise for the future. A day is coming when grief will be no more. Every tear will be wiped away. Death itself will be destroyed.</p>
<p>We do not grieve as those who have no hope. We grieve with hope—hope in the resurrection, hope in eternal life, hope in the God who makes all things new.</p>
<p>Your grief is real and valid. But it is not the final word. Joy comes in the morning. Reunion awaits. God Himself will comfort you.</p>
<p><strong>St. John Chrysostom preached:</strong> "He who has gone, has not perished, but has gone before us on the journey we all must take."</p>`,
      scripture: 'Revelation 21:4 - "He will wipe away every tear from their eyes, and death shall be no more."',
      prayer: 'Lord, I long for the day when You will wipe away every tear. Give me hope in Your promises. Help me to grieve with hope, trusting in the resurrection and eternal life. Amen.'
    },
    {
      day: 7,
      title: 'Living with Loss',
      content: `<p>Grief does not follow a timeline. It comes in waves—sometimes expected, sometimes surprising. Be patient with yourself.</p>
<p><strong>Practical suggestions:</strong></p>
<ul>
<li>Allow yourself to grieve. Don\'t rush the process.</li>
<li>Talk about your loved one. Share memories.</li>
<li>Seek support from family, friends, or a grief group.</li>
<li>Maintain spiritual practices: Mass, prayer, sacraments.</li>
<li>Take care of your physical health.</li>
<li>Consider professional counseling if needed.</li>
</ul>
<p>Grief changes us. We will never be the same. But we can integrate our loss into our lives and find meaning and even joy again.</p>
<p><strong>St. Francis de Sales wrote:</strong> "Do not look forward to what may happen tomorrow; the same everlasting Father who cares for you today will take care of you tomorrow and every day."</p>`,
      scripture: 'Psalm 34:18 - "The Lord is near to the brokenhearted and saves the crushed in spirit."',
      prayer: 'Lord, You are near to the brokenhearted. Be near to me. Help me to live with this loss, one day at a time. Give me grace for today and hope for tomorrow. Amen.'
    }
  ]
};

devotionals.push(easterDaily, griefComfort);


// ============================================
// FINAL DEVOTIONALS
// ============================================

const marianMonths: Devotional = {
  slug: 'marian-months',
  title: 'Marian Devotions',
  author: 'Catholic Bible Online',
  description: 'Special devotions for May and October, months of Mary.',
  longDescription: 'May and October are traditionally dedicated to the Blessed Virgin Mary. These reflections help you grow in devotion to Our Lady through meditation on her life, her virtues, and her role in salvation history.',
  frequency: 'Seasonal',
  category: 'Liturgical Seasons',
  icon: '🌹',
  readings: [
    {
      day: 1,
      title: 'Mary, Mother of God',
      content: `<p>The Council of Ephesus in 431 AD declared Mary to be Theotokos—the God-bearer, the Mother of God. This title is not primarily about Mary but about Jesus: He is truly God, and Mary is truly His mother.</p>
<p>When Elizabeth greeted Mary, she exclaimed: "Why is this granted to me that the mother of my Lord should come to me?" Elizabeth recognized that Mary carried within her womb the Lord Himself.</p>
<p>Mary\'s divine motherhood is the source of all her privileges and the foundation of our devotion to her. Because she is the Mother of God, she is also our mother, given to us by Jesus from the Cross.</p>
<p><strong>St. Cyril of Alexandria wrote:</strong> "Hail, Mary, Mother of God, venerable treasure of the whole world... through whom the Holy Trinity is glorified and worshipped."</p>`,
      scripture: 'Luke 1:43 - "And why is this granted to me that the mother of my Lord should come to me?"',
      prayer: 'Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.'
    },
    {
      day: 2,
      title: 'The Immaculate Conception',
      content: `<p>From the first moment of her conception, Mary was preserved from original sin by a singular grace of God. This is the dogma of the Immaculate Conception, proclaimed by Pope Pius IX in 1854.</p>
<p>Mary was not saved by her own merits but by the merits of her Son, applied to her in advance. She is the first fruit of Christ\'s redemption.</p>
<p>At Lourdes, Mary identified herself to St. Bernadette: "I am the Immaculate Conception." This confirmed the Church\'s teaching and revealed Mary\'s own understanding of her unique privilege.</p>
<p>Mary\'s sinlessness does not make her distant from us. Rather, she shows us what humanity was meant to be and what we can become through grace.</p>`,
      scripture: 'Luke 1:28 - "And he came to her and said, Hail, full of grace, the Lord is with you!"',
      prayer: 'O Mary, conceived without sin, pray for us who have recourse to thee. Help us to live in the grace of God and to avoid all sin. Amen.'
    },
    {
      day: 3,
      title: 'The Annunciation',
      content: `<p>The angel Gabriel was sent to a virgin named Mary. "Hail, full of grace, the Lord is with you!" Mary was troubled, but the angel said, "Do not be afraid. You will conceive and bear a son, and you shall call his name Jesus."</p>
<p>Mary asked, "How can this be?" The angel explained that the Holy Spirit would overshadow her. Then Mary spoke the words that changed history: "Behold, I am the handmaid of the Lord; let it be to me according to your word."</p>
<p>Mary\'s "yes" made the Incarnation possible. God, who respects human freedom, waited for her consent. Her faith and obedience opened the door for our salvation.</p>
<p>We are called to imitate Mary\'s "fiat"—to say yes to God\'s will in our own lives, even when we don\'t fully understand.</p>`,
      scripture: 'Luke 1:38 - "And Mary said, Behold, I am the servant of the Lord; let it be to me according to your word."',
      prayer: 'Mary, help me to say yes to God as you did. Give me faith to trust His plan and courage to follow His will. Let it be done to me according to His word. Amen.'
    },
    {
      day: 4,
      title: 'Mary at the Cross',
      content: `<p>When everyone else had fled, Mary stood at the foot of the Cross. She watched her Son suffer and die. She shared in His Passion with a mother\'s heart.</p>
<p>Jesus looked down and saw His mother and the disciple He loved. He said to Mary, "Woman, behold, your son!" and to John, "Behold, your mother!" From that hour, John took her into his home.</p>
<p>In that moment, Mary became the mother of all disciples. She is our mother too, given to us by Jesus Himself.</p>
<p><strong>St. Bernard wrote:</strong> "In dangers, in doubts, in difficulties, think of Mary, call upon Mary. Let not her name depart from your lips, never suffer it to leave your heart."</p>`,
      scripture: 'John 19:26-27 - "When Jesus saw his mother and the disciple whom he loved standing nearby, he said to his mother, Woman, behold, your son! Then he said to the disciple, Behold, your mother!"',
      prayer: 'Mary, my Mother, you stood faithfully at the Cross. Stand with me in my trials. Be my mother as you were mother to John. I take you into my heart and my home. Amen.'
    },
    {
      day: 5,
      title: 'The Assumption',
      content: `<p>At the end of her earthly life, Mary was assumed body and soul into heavenly glory. This dogma, proclaimed by Pope Pius XII in 1950, affirms that Mary did not experience the corruption of death.</p>
<p>The Assumption is the fulfillment of God\'s promise. Mary, who was preserved from sin, was also preserved from sin\'s consequence—bodily decay. She is the first to receive what all the faithful will receive at the resurrection.</p>
<p>Mary\'s Assumption gives us hope. Where she has gone, we hope to follow. Her glorified body is a preview of our own destiny.</p>
<p><strong>Pope Pius XII wrote:</strong> "The Immaculate Mother of God, the ever Virgin Mary, having completed the course of her earthly life, was assumed body and soul into heavenly glory."</p>`,
      scripture: 'Revelation 12:1 - "And a great sign appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars."',
      prayer: 'Mary, assumed into heaven, pray for us. Help us to keep our eyes fixed on our heavenly home. May we one day share in your glory. Amen.'
    },
    {
      day: 6,
      title: 'The Rosary',
      content: `<p>The Rosary is the most beloved Marian prayer. Through its mysteries, we meditate on the life of Christ with Mary as our guide.</p>
<p><strong>Pope St. John Paul II wrote:</strong> "The Rosary, though clearly Marian in character, is at heart a Christocentric prayer... With the Rosary, the Christian people sits at the school of Mary and is led to contemplate the beauty on the face of Christ."</p>
<p>The Rosary is simple enough for children yet deep enough for saints. It can be prayed anywhere, anytime. It is a powerful weapon against evil and a source of countless graces.</p>
<p>Our Lady of Fatima urged: "Pray the Rosary every day to obtain peace for the world." This simple prayer has the power to change hearts and history.</p>`,
      scripture: 'Luke 1:48 - "For behold, from now on all generations will call me blessed."',
      prayer: 'Mary, Queen of the Holy Rosary, help me to pray this prayer faithfully. Through its mysteries, draw me closer to your Son. Obtain for me the graces I need. Amen.'
    },
    {
      day: 7,
      title: 'Consecration to Mary',
      content: `<p>Many saints have recommended total consecration to Jesus through Mary. This means entrusting ourselves entirely to Mary so that she can lead us to her Son.</p>
<p><strong>St. Louis de Montfort wrote:</strong> "The more the Holy Spirit finds Mary, His dear and inseparable spouse, in any soul, the more active and mighty He becomes in producing Jesus Christ in that soul."</p>
<p>Consecration to Mary is not worship of Mary but recognition of her role in God\'s plan. She is the surest, easiest, and shortest way to Jesus.</p>
<p>To consecrate yourself to Mary means to give her your prayers, works, joys, and sufferings, so that she can offer them to Jesus and obtain for you the graces you need.</p>
<p><strong>St. John Paul II\'s motto was:</strong> "Totus Tuus"—Totally Yours, Mary.</p>`,
      scripture: 'John 2:5 - "His mother said to the servants, Do whatever he tells you."',
      prayer: 'Mary, I consecrate myself entirely to you. I give you my body and soul, my goods, both interior and exterior. Use me for the glory of God and the salvation of souls. Totus Tuus. Amen.'
    }
  ]
};

const marriageMoments: Devotional = {
  slug: 'marriage-moments',
  title: 'Marriage Moments',
  author: 'Catholic Bible Online',
  description: 'Brief daily reflections for Catholic couples.',
  longDescription: 'Marriage is a vocation to holiness. These brief daily reflections help Catholic couples grow in love for God and each other. Whether you are newlyweds or have been married for decades, these moments of reflection can strengthen your marriage.',
  frequency: 'Daily',
  category: 'Family & Marriage',
  icon: '💒',
  readings: [
    {
      day: 1,
      title: 'Marriage as Sacrament',
      content: `<p>Catholic marriage is not just a contract but a sacrament—a visible sign of invisible grace. When you married, you became a channel of God\'s grace to each other.</p>
<p>The Catechism teaches: "The sacrament of Matrimony signifies the union of Christ and the Church. It gives spouses the grace to love each other with the love with which Christ has loved his Church" (CCC 1661).</p>
<p>Your marriage is meant to reflect Christ\'s love for the Church—faithful, sacrificial, life-giving. This is a high calling, but God gives you the grace to live it.</p>
<p><strong>Reflection for Couples:</strong> How have you experienced God\'s grace in your marriage? How can you be a better channel of grace to your spouse?</p>`,
      scripture: 'Ephesians 5:25 - "Husbands, love your wives, as Christ loved the church and gave himself up for her."',
      prayer: 'Lord, thank You for the sacrament of our marriage. Help us to be channels of Your grace to each other. May our love reflect Your love for the Church. Amen.'
    },
    {
      day: 2,
      title: 'Praying Together',
      content: `<p>"The family that prays together stays together." This simple saying contains profound wisdom. Couples who pray together build their marriage on the strongest foundation.</p>
<p>Prayer together doesn\'t have to be complicated. It can be as simple as:</p>
<ul>
<li>Praying grace before meals</li>
<li>Saying a decade of the Rosary together</li>
<li>Reading Scripture and sharing reflections</li>
<li>Praying for each other\'s intentions</li>
<li>Attending Mass together</li>
</ul>
<p>When you pray together, you invite God into the center of your relationship. You acknowledge your dependence on Him and your commitment to each other.</p>
<p><strong>Challenge:</strong> If you don\'t already pray together, start today. Even five minutes of shared prayer can transform your marriage.</p>`,
      scripture: 'Matthew 18:20 - "For where two or three are gathered in my name, there am I among them."',
      prayer: 'Lord, help us to make prayer a regular part of our marriage. Be present with us as we pray. Unite our hearts to You and to each other. Amen.'
    },
    {
      day: 3,
      title: 'Forgiveness in Marriage',
      content: `<p>Every marriage needs forgiveness. Two imperfect people living together will inevitably hurt each other. The question is not whether you will need to forgive but whether you will choose to forgive.</p>
<p>Jesus said to forgive "seventy times seven"—in other words, without limit. This is especially true in marriage, where small offenses can accumulate into resentment if not addressed.</p>
<p><strong>Keys to forgiveness in marriage:</strong></p>
<ul>
<li>Don\'t let the sun go down on your anger</li>
<li>Apologize sincerely and specifically</li>
<li>Forgive even when you don\'t feel like it</li>
<li>Let go of the need to be right</li>
<li>Receive the Sacrament of Reconciliation regularly</li>
</ul>
<p>Forgiveness is not a feeling but a decision. Choose to forgive, and the feelings will follow.</p>`,
      scripture: 'Colossians 3:13 - "Bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive."',
      prayer: 'Lord, help us to forgive each other as You have forgiven us. Heal the wounds we have caused. Give us humble hearts that are quick to apologize and quick to forgive. Amen.'
    },
    {
      day: 4,
      title: 'Communication',
      content: `<p>Good communication is essential for a healthy marriage. This means not just talking but truly listening—seeking to understand before being understood.</p>
<p><strong>Tips for better communication:</strong></p>
<ul>
<li>Put away phones and screens when talking</li>
<li>Use "I" statements instead of "you" accusations</li>
<li>Listen without planning your response</li>
<li>Ask clarifying questions</li>
<li>Validate your spouse\'s feelings</li>
<li>Schedule regular time for meaningful conversation</li>
</ul>
<p>Remember that men and women often communicate differently. Be patient with each other and seek to understand your spouse\'s communication style.</p>
<p><strong>St. Francis de Sales advised:</strong> "Have patience with all things, but chiefly have patience with yourself."</p>`,
      scripture: 'James 1:19 - "Let every person be quick to hear, slow to speak, slow to anger."',
      prayer: 'Lord, help us to communicate with love and patience. Give us ears to listen and hearts to understand. May our words build up rather than tear down. Amen.'
    },
    {
      day: 5,
      title: 'Intimacy as Gift',
      content: `<p>Sexual intimacy in marriage is a gift from God—a way of expressing and deepening the love between husband and wife. It is not something shameful but something sacred.</p>
<p>The Church teaches that marital intimacy has two purposes: unity (bonding the couple together) and procreation (openness to new life). These purposes should not be separated.</p>
<p>St. John Paul II\'s Theology of the Body reveals the profound meaning of the body and sexuality. Our bodies are not just biological machines but expressions of the person, capable of communicating love.</p>
<p><strong>For reflection:</strong> How can you nurture intimacy in your marriage—not just physical but emotional and spiritual as well?</p>`,
      scripture: 'Genesis 2:24 - "Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh."',
      prayer: 'Lord, thank You for the gift of intimacy in marriage. Help us to honor each other with our bodies. May our physical union reflect our spiritual union with You. Amen.'
    },
    {
      day: 6,
      title: 'Serving Each Other',
      content: `<p>Jesus said, "Whoever would be great among you must be your servant." This applies especially in marriage. The happiest couples are those who compete to out-serve each other.</p>
<p><strong>Ways to serve your spouse:</strong></p>
<ul>
<li>Do a chore without being asked</li>
<li>Prepare their favorite meal</li>
<li>Give them time for rest or hobbies</li>
<li>Listen when they need to talk</li>
<li>Pray for their intentions</li>
<li>Express appreciation and gratitude</li>
</ul>
<p>Service is love in action. It\'s easy to say "I love you" but harder to show it through daily acts of kindness and sacrifice.</p>
<p><strong>St. Josemaría Escrivá wrote:</strong> "Marriage is a path to holiness. The home is a school of virtue."</p>`,
      scripture: 'Galatians 5:13 - "Through love serve one another."',
      prayer: 'Lord, help us to serve each other with joy. May we compete in generosity and kindness. Transform our home into a school of love. Amen.'
    },
    {
      day: 7,
      title: 'Growing Old Together',
      content: `<p>Marriage is a lifelong journey. The love you share today is meant to deepen and mature over the years, becoming richer and more beautiful with time.</p>
<p>The challenges of each stage of marriage—newlywed adjustments, raising children, empty nest, retirement—are opportunities for growth. Each stage brings new graces.</p>
<p><strong>Keys to a lasting marriage:</strong></p>
<ul>
<li>Keep God at the center</li>
<li>Never stop dating each other</li>
<li>Grow together spiritually</li>
<li>Face challenges as a team</li>
<li>Renew your commitment regularly</li>
<li>Seek help when needed</li>
</ul>
<p>The goal of marriage is not just to stay together but to help each other become saints. May your love lead you both to heaven.</p>`,
      scripture: 'Proverbs 5:18 - "Let your fountain be blessed, and rejoice in the wife of your youth."',
      prayer: 'Lord, bless our marriage for all the years to come. Help us to grow in love and holiness together. May we one day rejoice together in Your presence forever. Amen.'
    }
  ]
};

const discernmentJourney: Devotional = {
  slug: 'discernment-journey',
  title: 'Discernment Journey',
  author: 'Catholic Bible Online',
  description: 'For those discerning their vocation in life.',
  longDescription: 'Every person has a vocation—a calling from God to a particular way of life. Whether you are discerning marriage, priesthood, religious life, or consecrated single life, these reflections will help you listen for God\'s voice and respond with generosity.',
  frequency: 'Daily',
  category: 'Vocations & Ministry',
  icon: '🙏',
  readings: [
    {
      day: 1,
      title: 'God Has a Plan for You',
      content: `<p><strong>"For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope."</strong> (Jeremiah 29:11)</p>
<p>God has a plan for your life. He created you for a purpose, and He wants to reveal that purpose to you. Your vocation is not something you invent but something you discover.</p>
<p>Discernment is the process of discovering God\'s will. It requires prayer, patience, and openness to wherever God may lead.</p>
<p>Don\'t be afraid of God\'s plan. He knows you better than you know yourself, and He wants your happiness more than you do. His plan is always for your good.</p>
<p><strong>St. John Henry Newman prayed:</strong> "God has created me to do Him some definite service. He has committed some work to me which He has not committed to another."</p>`,
      scripture: 'Jeremiah 29:11 - "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope."',
      prayer: 'Lord, I believe You have a plan for my life. Help me to discover it. Give me the courage to follow wherever You lead. I trust in Your goodness. Amen.'
    },
    {
      day: 2,
      title: 'The Four Vocations',
      content: `<p>The Church recognizes four primary vocations:</p>
<p><strong>Marriage:</strong> The call to give yourself completely to a spouse and to be open to children. Most Catholics are called to this vocation.</p>
<p><strong>Priesthood:</strong> The call to serve God\'s people as an ordained minister, offering the sacraments and shepherding souls.</p>
<p><strong>Religious Life:</strong> The call to live the evangelical counsels (poverty, chastity, obedience) in community as a brother, sister, monk, or nun.</p>
<p><strong>Consecrated Single Life:</strong> The call to live celibacy in the world, dedicating oneself to prayer and service.</p>
<p>Each vocation is a path to holiness. The question is not which is "better" but which is God\'s will for you.</p>`,
      scripture: '1 Corinthians 7:7 - "I wish that all were as I myself am. But each has his own gift from God, one of one kind and one of another."',
      prayer: 'Lord, show me the vocation to which You are calling me. Help me to be open to all possibilities. May I seek not what I want but what You want for me. Amen.'
    },
    {
      day: 3,
      title: 'Signs of a Vocation',
      content: `<p>How do you know if God is calling you to a particular vocation? Here are some signs to consider:</p>
<p><strong>Desire:</strong> Do you feel drawn to this way of life? Desire is often God\'s way of leading us.</p>
<p><strong>Peace:</strong> When you imagine yourself in this vocation, do you feel peace or anxiety?</p>
<p><strong>Gifts:</strong> Do you have the gifts and abilities needed for this vocation?</p>
<p><strong>Confirmation:</strong> Do others who know you well affirm this direction?</p>
<p><strong>Fruit:</strong> When you take steps in this direction, do you experience spiritual fruit?</p>
<p>No single sign is definitive. Discernment involves weighing all these factors in prayer and with guidance.</p>`,
      scripture: 'Romans 12:2 - "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God."',
      prayer: 'Lord, help me to read the signs You are giving me. Clarify my desires. Give me peace about Your will. Confirm my direction through others. Amen.'
    },
    {
      day: 4,
      title: 'Obstacles to Discernment',
      content: `<p>Several things can block our ability to hear God\'s voice:</p>
<p><strong>Sin:</strong> Unconfessed sin clouds our spiritual vision. Regular confession clears the way for discernment.</p>
<p><strong>Noise:</strong> Too much activity and distraction drowns out God\'s voice. We need silence to hear Him.</p>
<p><strong>Fear:</strong> Fear of what God might ask can make us avoid discernment altogether.</p>
<p><strong>Attachments:</strong> If we\'re too attached to a particular outcome, we may not be open to God\'s will.</p>
<p><strong>Impatience:</strong> Discernment takes time. Rushing leads to poor decisions.</p>
<p>Address these obstacles honestly. Create space for God to speak.</p>`,
      scripture: 'Psalm 46:10 - "Be still, and know that I am God."',
      prayer: 'Lord, remove the obstacles that prevent me from hearing Your voice. Forgive my sins. Quiet my fears. Free me from unhealthy attachments. Give me patience. Amen.'
    },
    {
      day: 5,
      title: 'The Role of a Spiritual Director',
      content: `<p>Discernment is not meant to be done alone. A spiritual director can help you hear God\'s voice and avoid self-deception.</p>
<p><strong>What a spiritual director does:</strong></p>
<ul>
<li>Listens to your experience</li>
<li>Asks clarifying questions</li>
<li>Helps you recognize God\'s movements</li>
<li>Offers wisdom from the Church\'s tradition</li>
<li>Holds you accountable</li>
<li>Prays for and with you</li>
</ul>
<p>A good spiritual director doesn\'t tell you what to do but helps you discover what God is saying. Look for a priest, religious, or trained layperson who can accompany you.</p>`,
      scripture: 'Proverbs 11:14 - "Where there is no guidance, a people falls, but in an abundance of counselors there is safety."',
      prayer: 'Lord, lead me to a wise spiritual director. Give me humility to seek guidance and openness to receive it. Amen.'
    },
    {
      day: 6,
      title: 'Taking Steps',
      content: `<p>Discernment is not just thinking and praying—it also involves action. Sometimes we only discover God\'s will by taking steps and seeing what happens.</p>
<p><strong>Practical steps in discernment:</strong></p>
<ul>
<li>Visit a seminary or religious community</li>
<li>Go on a retreat focused on vocations</li>
<li>Talk to people living the vocation you\'re considering</li>
<li>Date intentionally if considering marriage</li>
<li>Volunteer in ministry</li>
<li>Try a "come and see" experience</li>
</ul>
<p>Don\'t wait for perfect certainty before acting. Take a step, evaluate the fruit, and adjust as needed. God guides us as we move.</p>`,
      scripture: 'Proverbs 16:9 - "The heart of man plans his way, but the Lord establishes his steps."',
      prayer: 'Lord, give me courage to take steps in discernment. Guide my path as I move forward. Help me to trust that You will direct my steps. Amen.'
    },
    {
      day: 7,
      title: 'Saying Yes to God',
      content: `<p>Ultimately, discernment leads to a decision—a "yes" to God\'s call. This yes may feel scary, but it is the path to joy and fulfillment.</p>
<p>Mary said yes to the angel: "Let it be to me according to your word." Her yes changed history. Your yes can change your life and the lives of others.</p>
<p>Saying yes to God doesn\'t mean you have all the answers. It means you trust Him enough to follow where He leads, one step at a time.</p>
<p><strong>St. John Paul II said:</strong> "It is Jesus who stirs in you the desire to do something great with your lives, the will to follow an ideal, the refusal to allow yourselves to be ground down by mediocrity."</p>
<p>Don\'t settle for mediocrity. Say yes to God\'s call.</p>`,
      scripture: 'Isaiah 6:8 - "And I heard the voice of the Lord saying, Whom shall I send, and who will go for us? Then I said, Here I am! Send me."',
      prayer: 'Lord, here I am. Send me. I say yes to Your call, whatever it may be. Give me the grace to follow You faithfully. May my life glorify You. Amen.'
    }
  ]
};

devotionals.push(marianMonths, marriageMoments, discernmentJourney);
