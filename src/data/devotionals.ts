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

// Helper function to get today's reading
export function getTodaysReading(devotional: Devotional): DevotionalReading {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const readingIndex = dayOfYear % devotional.readings.length;
  return devotional.readings[readingIndex];
}
