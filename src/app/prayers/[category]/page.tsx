import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Complete prayer categories data with 250+ authentic Catholic prayers
const prayerCategories = {
  'basic': {
    name: 'Basic Prayers',
    description: 'Essential Catholic prayers every Catholic should know',
    icon: '🙏',
    prayers: [
      {
        slug: 'sign-of-cross',
        name: 'Sign of the Cross',
        text: `In the name of the Father, and of the Son, and of the Holy Spirit. Amen.`,
        description: 'The fundamental prayer of Christians, invoking the Trinity.',
        source: 'Traditional Catholic Prayer'
      },
      {
        slug: 'our-father',
        name: 'Our Father (The Lord\'s Prayer)',
        text: `Our Father, who art in heaven, hallowed be thy name.
Thy kingdom come, thy will be done, on earth as it is in heaven.
Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us.
And lead us not into temptation, but deliver us from evil. Amen.`,
        description: 'The prayer that Jesus taught His disciples, fundamental to Christian prayer.',
        source: 'Matthew 6:9-13, Luke 11:2-4'
      },
      {
        slug: 'hail-mary',
        name: 'Hail Mary',
        text: `Hail Mary, full of grace, the Lord is with thee.
Blessed art thou among women, and blessed is the fruit of thy womb, Jesus.
Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.`,
        description: 'The angelic salutation to Mary, combining Scripture and tradition.',
        source: 'Luke 1:28, Luke 1:42, Traditional'
      },
      {
        slug: 'glory-be',
        name: 'Glory Be (Doxology)',
        text: `Glory be to the Father, and to the Son, and to the Holy Spirit.
As it was in the beginning, is now, and ever shall be, world without end. Amen.`,
        description: 'A doxology praising the Trinity.',
        source: 'Traditional Catholic Prayer'
      },
      {
        slug: 'apostles-creed',
        name: 'Apostles\' Creed',
        text: `I believe in God, the Father almighty, Creator of heaven and earth,
and in Jesus Christ, His only Son, our Lord.
He was conceived by the Holy Spirit, and born of the Virgin Mary.
He suffered under Pontius Pilate, was crucified, died and was buried.
He descended into hell. On the third day He rose again.
He ascended into heaven, and is seated at the right hand of God the Father Almighty.
He will come again to judge the living and the dead.
I believe in the Holy Spirit, the holy Catholic Church,
the communion of saints, the forgiveness of sins,
the resurrection of the body, and life everlasting. Amen.`,
        description: 'An ancient summary of Christian beliefs.',
        source: 'Traditional Christian Creed'
      },
      {
        slug: 'nicene-creed',
        name: 'Nicene Creed',
        text: `I believe in one God, the Father almighty,
maker of heaven and earth, of all things visible and invisible.
I believe in one Lord Jesus Christ, the Only Begotten Son of God,
born of the Father before all ages.
God from God, Light from Light, true God from true God,
begotten, not made, consubstantial with the Father;
Through him all things were made.
For us men and for our salvation he came down from heaven,
and by the Holy Spirit was incarnate of the Virgin Mary, and became man.
For our sake he was crucified under Pontius Pilate,
he suffered death and was buried, and rose again on the third day
in accordance with the Scriptures.
He ascended into heaven and is seated at the right hand of the Father.
He will come again in glory to judge the living and the dead
and his kingdom will have no end.
I believe in the Holy Spirit, the Lord, the giver of life,
who proceeds from the Father and the Son,
who with the Father and the Son is adored and glorified,
who has spoken through the prophets.
I believe in one, holy, catholic, and apostolic Church.
I confess one baptism for the forgiveness of sins
and I look forward to the resurrection of the dead
and the life of the world to come. Amen.`,
        description: 'The more detailed creed from the First Council of Nicaea.',
        source: 'Council of Nicaea (325 AD)'
      },
      {
        slug: 'act-of-contrition',
        name: 'Act of Contrition',
        text: `O my God, I am heartily sorry for having offended Thee,
and I detest all my sins because I dread the loss of Heaven
and the pains of hell; but most of all because they offend Thee, my God,
Who art all-good and deserving of all my love.
I firmly resolve, with the help of Thy grace,
to confess my sins, to do penance and to amend my life. Amen.`,
        description: 'A prayer of repentance for sins.',
        source: 'Traditional Catholic Prayer'
      },
      {
        slug: 'guardian-angel',
        name: 'Prayer to Your Guardian Angel',
        text: `Angel of God, my guardian dear,
to whom God's love commits me here,
ever this day be at my side,
to light and guard, to rule and guide. Amen.`,
        description: 'A prayer invoking protection from one\'s guardian angel.',
        source: 'Traditional Catholic Prayer'
      },
      {
        slug: 'grace-before-meals',
        name: 'Grace Before Meals',
        text: `Bless us, O Lord, and these thy gifts,
which we are about to receive from thy bounty,
through Christ our Lord. Amen.`,
        description: 'A blessing prayer before eating.',
        source: 'Traditional Catholic Prayer'
      },
      {
        slug: 'grace-after-meals',
        name: 'Grace After Meals',
        text: `We give you thanks, Almighty God,
for these and all your blessings;
As you live and reign for ever and ever. Amen.`,
        description: 'A thanksgiving prayer after eating.',
        source: 'Traditional Catholic Prayer'
      },
      {
        slug: 'morning-offering',
        name: 'Morning Offering',
        text: `O Jesus, through the Immaculate Heart of Mary,
I offer Thee my prayers, works, joys and sufferings of this day
for all the intentions of Thy Sacred Heart,
in union with the Holy Sacrifice of the Mass throughout the world,
in reparation for my sins, for the intentions of all my relatives and friends,
and in particular for the intentions of the Holy Father. Amen.`,
        description: 'A prayer to offer the day to God.',
        source: 'Apostleship of Prayer'
      },
      {
        slug: 'act-of-faith-hope-love',
        name: 'Acts of Faith, Hope, and Love',
        text: `ACT OF FAITH:
O my God, I firmly believe that Thou art one God in Three Divine Persons,
Father, Son and Holy Spirit. I believe that Thy Divine Son became Man,
and died for our sins, and that He will come to judge the living and the dead.
I believe these and all the truths which the Holy Catholic Church teaches,
because Thou hast revealed them, Who canst neither deceive nor be deceived.

ACT OF HOPE:
O my God, relying on Thy almighty power and infinite mercy and promises,
I hope to obtain pardon of my sins, the help of Thy grace,
and Life Everlasting, through the merits of Jesus Christ, my Lord and Redeemer.

ACT OF LOVE:
O my God, I love Thee above all things, with my whole heart and soul,
because Thou art all-good and worthy of all love.
I love my neighbor as myself for the love of Thee.
I forgive all who have injured me, and ask pardon of all whom I have injured.`,
        description: 'Three fundamental acts expressing faith, hope, and love.',
        source: 'Traditional Catholic Prayer'
      }
    ]
  },
  'rosary': {
    name: 'Rosary Prayers',
    description: 'Complete rosary prayers and mysteries',
    icon: '📿',
    prayers: [
      {
        slug: 'how-to-pray-rosary',
        name: 'How to Pray the Rosary',
        text: `1. Begin with the Sign of the Cross
2. Say the Apostles' Creed
3. Say one Our Father
4. Say three Hail Marys (for Faith, Hope, and Charity)
5. Say the Glory Be
6. Announce the first Mystery and say the Our Father
7. Say ten Hail Marys while meditating on the Mystery
8. Say the Glory Be
9. Repeat steps 6-8 for the remaining four Mysteries
10. Say the Hail Holy Queen`,
        description: 'Instructions for praying the Holy Rosary.',
        source: 'Traditional Catholic Devotion'
      },
      {
        slug: 'joyful-mysteries',
        name: 'Joyful Mysteries',
        text: `The Five Joyful Mysteries (Mondays and Saturdays):
1. The Annunciation - The angel Gabriel announces to Mary that she will bear the Son of God
2. The Visitation - Mary visits her cousin Elizabeth, who is pregnant with John the Baptist
3. The Nativity - Jesus is born in Bethlehem
4. The Presentation - Mary and Joseph present the infant Jesus in the Temple
5. The Finding in the Temple - The twelve-year-old Jesus is found teaching in the Temple`,
        description: 'Meditations on the joyful events in the lives of Jesus and Mary.',
        source: 'Traditional Rosary'
      },
      {
        slug: 'sorrowful-mysteries',
        name: 'Sorrowful Mysteries',
        text: `The Five Sorrowful Mysteries (Tuesdays and Fridays):
1. The Agony in the Garden - Jesus prays in the Garden of Gethsemane
2. The Scourging at the Pillar - Jesus is brutally whipped by Roman soldiers
3. The Crowning with Thorns - Jesus is mocked and crowned with thorns
4. The Carrying of the Cross - Jesus carries His cross to Calvary
5. The Crucifixion - Jesus dies on the cross for our salvation`,
        description: 'Meditations on the suffering and death of Jesus.',
        source: 'Traditional Rosary'
      },
      {
        slug: 'glorious-mysteries',
        name: 'Glorious Mysteries',
        text: `The Five Glorious Mysteries (Wednesdays and Sundays):
1. The Resurrection - Jesus rises from the dead on Easter Sunday
2. The Ascension - Jesus ascends into heaven forty days after His resurrection
3. The Descent of the Holy Spirit - The Holy Spirit comes upon the Apostles at Pentecost
4. The Assumption - Mary is taken up body and soul into heaven
5. The Coronation of Mary - Mary is crowned Queen of Heaven and Earth`,
        description: 'Meditations on the glory of Jesus and Mary.',
        source: 'Traditional Rosary'
      },
      {
        slug: 'luminous-mysteries',
        name: 'Luminous Mysteries',
        text: `The Five Luminous Mysteries (Thursdays):
1. The Baptism of Jesus in the Jordan - Jesus is baptized by John the Baptist
2. The Wedding at Cana - Jesus performs His first miracle at Mary's request
3. The Proclamation of the Kingdom - Jesus preaches the Gospel and calls for repentance
4. The Transfiguration - Jesus reveals His divine glory to Peter, James, and John
5. The Institution of the Eucharist - Jesus gives us His Body and Blood at the Last Supper`,
        description: 'Meditations on the public ministry of Jesus.',
        source: 'Pope John Paul II (2002)'
      },
      {
        slug: 'hail-holy-queen',
        name: 'Hail Holy Queen (Salve Regina)',
        text: `Hail, Holy Queen, Mother of Mercy, our life, our sweetness and our hope!
To thee do we cry, poor banished children of Eve.
To thee do we send up our sighs, mourning and weeping in this valley of tears.
Turn then, most gracious advocate, thine eyes of mercy toward us,
and after this our exile show unto us the blessed fruit of thy womb, Jesus.
O clement, O loving, O sweet Virgin Mary.
Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen.`,
        description: 'A Marian antiphon traditionally sung or recited after the Rosary.',
        source: 'Traditional Marian Prayer'
      },
      {
        slug: 'fatima-prayer',
        name: 'Fatima Prayer',
        text: `O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy. Amen.`,
        description: 'A prayer taught by Our Lady of Fatima, often added after each decade of the Rosary.',
        source: 'Our Lady of Fatima (1917)'
      }
    ]
  },
  'mass': {
    name: 'Mass Prayers',
    description: 'Prayers used during the celebration of Mass',
    icon: '✞',
    prayers: [
      {
        slug: 'kyrie',
        name: 'Kyrie Eleison',
        text: `Lord, have mercy.
Christ, have mercy.
Lord, have mercy.`,
        description: 'A prayer for mercy sung or recited during Mass.',
        source: 'Roman Missal'
      },
      {
        slug: 'gloria',
        name: 'Gloria in Excelsis',
        text: `Glory to God in the highest, and on earth peace to people of good will.
We praise you, we bless you, we adore you, we glorify you,
we give you thanks for your great glory,
Lord God, heavenly King, O God, almighty Father.
Lord Jesus Christ, Only Begotten Son,
Lord God, Lamb of God, Son of the Father,
you take away the sins of the world, have mercy on us;
you take away the sins of the world, receive our prayer;
you are seated at the right hand of the Father, have mercy on us.
For you alone are the Holy One,
you alone are the Lord,
you alone are the Most High, Jesus Christ,
with the Holy Spirit, in the glory of God the Father. Amen.`,
        description: 'A hymn of praise sung during Mass.',
        source: 'Roman Missal'
      },
      {
        slug: 'sanctus',
        name: 'Sanctus (Holy, Holy, Holy)',
        text: `Holy, Holy, Holy Lord God of hosts.
Heaven and earth are full of your glory.
Hosanna in the highest.
Blessed is he who comes in the name of the Lord.
Hosanna in the highest.`,
        description: 'The hymn of praise sung during the Eucharistic Prayer.',
        source: 'Roman Missal'
      },
      {
        slug: 'memorial-acclamation',
        name: 'Memorial Acclamation',
        text: `We proclaim your Death, O Lord,
and profess your Resurrection
until you come again.`,
        description: 'The congregation\'s response during the Eucharistic Prayer.',
        source: 'Roman Missal'
      },
      {
        slug: 'agnus-dei',
        name: 'Agnus Dei (Lamb of God)',
        text: `Lamb of God, you take away the sins of the world,
have mercy on us.
Lamb of God, you take away the sins of the world,
have mercy on us.
Lamb of God, you take away the sins of the world,
grant us peace.`,
        description: 'A prayer sung before Communion.',
        source: 'Roman Missal'
      },
      {
        slug: 'spiritual-communion',
        name: 'Spiritual Communion',
        text: `My Jesus, I believe that You are present in the Most Holy Sacrament.
I love You above all things, and I long to receive You into my soul.
Since I cannot at this moment receive You sacramentally,
come at least spiritually into my heart.
I embrace You as if You were already there
and unite myself wholly to You.
Never permit me to be separated from You. Amen.`,
        description: 'A prayer for those unable to receive Communion physically.',
        source: 'St. Alphonsus Liguori'
      },
      {
        slug: 'confiteor',
        name: 'Confiteor (I Confess)',
        text: `I confess to almighty God
and to you, my brothers and sisters,
that I have greatly sinned,
in my thoughts and in my words,
in what I have done and in what I have failed to do,
through my fault, through my fault,
through my most grievous fault;
therefore I ask blessed Mary ever-Virgin,
all the Angels and Saints,
and you, my brothers and sisters,
to pray for me to the Lord our God.`,
        description: 'A prayer of confession at the beginning of Mass.',
        source: 'Roman Missal'
      },
      {
        slug: 'anima-christi',
        name: 'Anima Christi (Soul of Christ)',
        text: `Soul of Christ, sanctify me.
Body of Christ, save me.
Blood of Christ, inebriate me.
Water from Christ's side, wash me.
Passion of Christ, strengthen me.
O good Jesus, hear me.
Within Thy wounds hide me.
Suffer me not to be separated from Thee.
From the malicious enemy defend me.
In the hour of my death call me
and bid me come unto Thee,
That I may praise Thee with Thy saints
and with Thy angels
Forever and ever. Amen.`,
        description: 'A prayer of intimate union with Christ.',
        source: 'Traditional Prayer (14th century)'
      },
      {
        slug: 'divine-praises',
        name: 'Divine Praises',
        text: `Blessed be God.
Blessed be His Holy Name.
Blessed be Jesus Christ, true God and true Man.
Blessed be the Name of Jesus.
Blessed be His Most Sacred Heart.
Blessed be His Most Precious Blood.
Blessed be Jesus in the Most Holy Sacrament of the Altar.
Blessed be the Holy Spirit, the Paraclete.
Blessed be the great Mother of God, Mary most Holy.
Blessed be her Holy and Immaculate Conception.
Blessed be her Glorious Assumption.
Blessed be the name of Mary, Virgin and Mother.
Blessed be St. Joseph, her most chaste spouse.
Blessed be God in His Angels and in His Saints. Amen.`,
        description: 'A series of praises traditionally recited after Benediction.',
        source: 'Traditional Catholic Prayer'
      }
    ]
  },
  'marian': {
    name: 'Marian Prayers',
    description: 'Prayers to the Blessed Virgin Mary',
    icon: '👸',
    prayers: [
      {
        slug: 'memorare',
        name: 'Memorare',
        text: `Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thy intercession was left unaided.
Inspired with this confidence, I fly to thee, O Virgin of virgins, my Mother; to thee do I come; before thee I stand, sinful and sorrowful.
O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.`,
        description: 'A prayer of confidence in Mary\'s intercession, attributed to St. Bernard.',
        source: 'Attributed to St. Bernard of Clairvaux'
      },
      {
        slug: 'angelus',
        name: 'The Angelus',
        text: `V. The Angel of the Lord declared unto Mary.
R. And she conceived of the Holy Spirit.
Hail Mary...

V. Behold the handmaid of the Lord.
R. Be it done unto me according to thy word.
Hail Mary...

V. And the Word was made flesh.
R. And dwelt among us.
Hail Mary...

V. Pray for us, O holy Mother of God.
R. That we may be made worthy of the promises of Christ.

Pour forth, we beseech thee, O Lord, thy grace into our hearts, that we to whom the Incarnation of Christ thy Son was made known by the message of an Angel, may by his Passion and Cross be brought to the glory of his Resurrection. Through the same Christ our Lord. Amen.`,
        description: 'A devotion commemorating the Incarnation, traditionally prayed three times daily.',
        source: 'Traditional Catholic Devotion'
      },
      {
        slug: 'regina-caeli',
        name: 'Regina Caeli (Queen of Heaven)',
        text: `Queen of Heaven, rejoice, alleluia.
For He whom you did merit to bear, alleluia.
Has risen, as he said, alleluia.
Pray for us to God, alleluia.

V. Rejoice and be glad, O Virgin Mary, alleluia.
R. For the Lord has truly risen, alleluia.

Let us pray:
O God, who gave joy to the world through the resurrection of Thy Son, our Lord Jesus Christ, grant we beseech Thee, that through the intercession of the Virgin Mary, His Mother, we may obtain the joys of everlasting life. Through the same Christ our Lord. Amen.`,
        description: 'The Marian antiphon prayed during Easter season instead of the Angelus.',
        source: 'Traditional Catholic Prayer'
      },
      {
        slug: 'immaculate-conception',
        name: 'Prayer to Our Lady of the Immaculate Conception',
        text: `O Mary, conceived without sin, pray for us who have recourse to thee.
O refuge of sinners, Mother of mercy, health of the sick and comfort of the afflicted, you know my needs, my troubles, my sufferings; cast upon me a look of pity.
By appearing in the Grotto of Lourdes, you were pleased to make it a privileged sanctuary, from whence you dispense your favors, and already many sufferers have obtained the cure of their infirmities, both spiritual and corporal.
I come, therefore, with complete confidence to implore your maternal intercession. Obtain, O loving Mother, the grant of my requests. Amen.`,
        description: 'A prayer honoring Mary\'s Immaculate Conception.',
        source: 'Traditional Catholic Prayer'
      },
      {
        slug: 'sub-tuum',
        name: 'Sub Tuum Praesidium',
        text: `We fly to thy protection, O holy Mother of God.
Despise not our petitions in our necessities,
but deliver us always from all dangers,
O glorious and blessed Virgin. Amen.`,
        description: 'One of the oldest known Marian prayers, dating to the 3rd century.',
        source: 'Ancient Christian Prayer'
      },
      {
        slug: 'magnificat',
        name: 'The Magnificat',
        text: `My soul proclaims the greatness of the Lord,
my spirit rejoices in God my Savior
for he has looked with favor on his lowly servant.
From this day all generations will call me blessed:
the Almighty has done great things for me,
and holy is his Name.
He has mercy on those who fear him
in every generation.
He has shown the strength of his arm,
he has scattered the proud in their conceit.
He has cast down the mighty from their thrones,
and has lifted up the lowly.
He has filled the hungry with good things,
and the rich he has sent away empty.
He has come to the help of his servant Israel
for he has remembered his promise of mercy,
the promise he made to our fathers,
to Abraham and his children for ever. Amen.`,
        description: 'Mary\'s canticle of praise from the Gospel of Luke.',
        source: 'Luke 1:46-55'
      },
      {
        slug: 'salve-regina',
        name: 'Salve Regina',
        text: `Salve, Regina, Mater misericordiae:
Vita, dulcedo, et spes nostra, salve.
Ad te clamamus, exsules filii Hevae.
Ad te suspiramus, gementes et flentes
in hac lacrimarum valle.
Eia ergo, Advocata nostra,
illos tuos misericordes oculos
ad nos converte.
Et Jesum, benedictum fructum ventris tui,
nobis post hoc exsilium ostende.
O clemens, O pia, O dulcis Virgo Maria.`,
        description: 'The Latin version of the Hail Holy Queen prayer.',
        source: 'Traditional Latin Prayer'
      }
    ]
  },
  'novenas': {
    name: 'Novenas',
    description: 'Nine-day prayer devotions for special intentions',
    icon: '📅',
    prayers: [
      {
        slug: 'novena-to-sacred-heart',
        name: 'Novena to the Sacred Heart of Jesus',
        text: `O most holy Heart of Jesus, fountain of every blessing, I adore Thee, I love Thee, and with a lively sorrow for my sins, I offer Thee this poor heart of mine. Make me humble, patient, pure, and wholly obedient to Thy will. Grant, good Jesus, that I may live in Thee and for Thee. Protect me in the midst of danger; comfort me in my afflictions; give me health of body, assistance in my temporal needs, Thy blessing on all that I do, and the grace of a holy death. Within Thy Heart I place my every care. In every need let me come to Thee with humble trust saying, Heart of Jesus help me. Amen.`,
        description: 'A novena to the Sacred Heart of Jesus, source of all grace.',
        source: 'Traditional Catholic Novena'
      },
      {
        slug: 'novena-to-st-jude',
        name: 'Novena to St. Jude',
        text: `Most holy Apostle, St. Jude, faithful servant and friend of Jesus, the Church honors and invokes you universally, as the patron of hopeless cases, of things almost despaired of.
Pray for me, I am so helpless and alone. Intercede with God for me that He bring visible and speedy help where help is almost despaired of.
Come to my assistance in this great need that I may receive the consolation and help of heaven in all my necessities, tribulations, and sufferings, particularly (make your request here) and that I may praise God with you and all the saints forever.
I promise, O blessed St. Jude, to be ever mindful of this great favor granted me by God and to always honor you as my special and powerful patron, and to gratefully encourage devotion to you. Amen.`,
        description: 'A novena to St. Jude, patron saint of hopeless causes.',
        source: 'Traditional Catholic Novena'
      },
      {
        slug: 'novena-for-souls-purgatory',
        name: 'Novena for the Souls in Purgatory',
        text: `Jesus, through your blood on the cross, have mercy on the souls in purgatory.
Jesus, through the blow you received on your sacred face, have mercy on the souls in purgatory.
Jesus, through the cruel scourging you endured, have mercy on the souls in purgatory.
Jesus, through the crown of thorns that pierced your head, have mercy on the souls in purgatory.
Jesus, through your carrying of the cross, have mercy on the souls in purgatory.
Jesus, through your holy body nailed on the cross, have mercy on the souls in purgatory.
Jesus, through your side pierced with a lance and from which flowed blood and water, have mercy on the souls in purgatory.

Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May the souls of the faithful departed, through the mercy of God, rest in peace. Amen.`,
        description: 'A novena to pray for the souls in Purgatory.',
        source: 'Traditional Catholic Novena'
      }
    ]
  },
  'saints': {
    name: 'Prayers to Saints',
    description: 'Prayers to various Catholic saints for intercession',
    icon: '👨‍🎓',
    prayers: [
      {
        slug: 'st-michael-prayer',
        name: 'Prayer to St. Michael the Archangel',
        text: `Saint Michael the Archangel, defend us in battle;
be our protection against the wickedness and snares of the devil.
May God rebuke him, we humbly pray,
and do thou, O Prince of the heavenly host,
by the power of God,
thrust into hell Satan and all the evil spirits
who prowl about the world seeking the ruin of souls. Amen.`,
        description: 'A prayer for protection against evil, composed by Pope Leo XIII.',
        source: 'Pope Leo XIII'
      },
      {
        slug: 'st-anthony-prayer',
        name: 'Prayer to St. Anthony of Padua',
        text: `Blessed be God in His Angels and in His Saints.
O Holy St. Anthony, gentlest of Saints, your love for God and Charity for His creatures, made you worthy, when on earth, to possess miraculous powers.
Encouraged by this thought, I implore you to obtain for me (request).
O gentle and loving St. Anthony, whose heart was ever full of human sympathy, whisper my petition into the ears of the sweet Infant Jesus, who loved to be folded in your arms; and the gratitude of my heart will ever be yours. Amen.`,
        description: 'A prayer to St. Anthony, patron of lost things and finder of the lost.',
        source: 'Traditional Catholic Prayer'
      },
      {
        slug: 'st-joseph-prayer',
        name: 'Prayer to St. Joseph',
        text: `O St. Joseph, whose protection is so great, so strong, so prompt before the Throne of God, I place in you all my interests and desires.
O St. Joseph, do assist me by your powerful intercession and obtain for me from your Divine Son all spiritual blessings through Jesus Christ, Our Lord; so that having engaged here below your Heavenly power I may offer my Thanksgiving and Homage to the most Loving of Fathers.
O St. Joseph, I never weary contemplating you and Jesus asleep in your arms. I dare not approach while He reposes near your heart. Press him in my name and kiss His fine Head for me, and ask Him to return the Kiss when I draw my dying breath. St. Joseph, Patron of departing souls, pray for us. Amen.`,
        description: 'A prayer to St. Joseph, patron of the universal Church and holy death.',
        source: 'Traditional Catholic Prayer'
      },
      {
        slug: 'st-therese-prayer',
        name: 'Prayer to St. Thérèse of Lisieux',
        text: `O Little Thérèse of the Child Jesus, please pick for me a rose from the heavenly gardens and send it to me as a message of love.
O Little Flower of Jesus, ask God today to grant the favors I now place with confidence in your hands (mention specific requests).
St. Thérèse, help me to always believe as you did, in God's great love for me, so that I might imitate your "Little Way" each day. Amen.`,
        description: 'A prayer to St. Thérèse, the Little Flower, known for her "little way" of trust and surrender.',
        source: 'Traditional Catholic Prayer'
      }
    ]
  },
  'healing': {
    name: 'Healing Prayers',
    description: 'Prayers for physical, emotional, and spiritual healing',
    icon: '💚',
    prayers: [
      {
        slug: 'prayer-for-healing',
        name: 'Prayer for Healing',
        text: `Heavenly Father, we ask you to heal our sick. Give your power to those who minister to the sick: doctors, nurses, and all others who promote healing and human wholeness.
Strengthen those who are ill. Give them hope for recovery and help them to trust in your goodness.
Grant to those who live with pain, infirmity, and illness an extra portion of your sustaining love.
Restore to health those who can be healed. Give peace and comfort to those for whom there is no healing.
To those who are close to death, grant the grace to entrust their lives to you with confidence and to find in you their true life that never ends.
Through Jesus Christ our Lord. Amen.`,
        description: 'A general prayer for all types of healing.',
        source: 'Traditional Catholic Prayer'
      },
      {
        slug: 'prayer-raphael',
        name: 'Prayer to St. Raphael for Healing',
        text: `Glorious Archangel St. Raphael, great prince of the heavenly court, you are illustrious for your gifts of wisdom and grace.
You are a guide of those who journey by land or sea or air, consoler of the afflicted, and refuge of sinners.
I beg you, assist me in all my needs and in all the sufferings of this life, as once you helped the young Tobias on his travels.
Because you are the "medicine of God" I humbly pray you to heal the many infirmities of my soul and the ills that afflict my body.
I especially ask of you the favor (mention your request), and the great grace of purity to prepare me to be the temple of the Holy Spirit. Amen.`,
        description: 'A prayer to St. Raphael, the archangel known as the "medicine of God."',
        source: 'Traditional Catholic Prayer'
      }
    ]
  },
  'seasonal': {
    name: 'Seasonal Prayers',
    description: 'Prayers for different liturgical seasons and holy days',
    icon: '🌸',
    prayers: [
      {
        slug: 'advent-prayer',
        name: 'Advent Prayer',
        text: `Come, Lord Jesus, do not delay;
give new courage to your people who trust in your love.
By your power, strengthen us in our weakness
and by your coming, raise us to eternal life,
where you live and reign with the Father and the Holy Spirit,
one God, for ever and ever. Amen.`,
        description: 'A prayer for the Advent season, preparing for Christ\'s coming.',
        source: 'Liturgical Prayer'
      },
      {
        slug: 'christmas-prayer',
        name: 'Christmas Prayer',
        text: `O Come, let us adore Him, Christ the Lord!
Almighty God, you have given us your only-begotten Son to take our nature upon him, and to be born this day of a pure virgin.
Grant that we, who have been born again and made your children by adoption and grace, may daily be renewed by your Holy Spirit; through our Lord Jesus Christ, to whom with you and the same Spirit be honor and glory, now and for ever. Amen.`,
        description: 'A prayer celebrating the birth of Jesus Christ.',
        source: 'Traditional Christmas Prayer'
      },
      {
        slug: 'lenten-prayer',
        name: 'Lenten Prayer',
        text: `Merciful God, you called us forth from the dust of the earth;
you claimed us for Christ in the waters of baptism.
Look upon us as we enter these forty days bearing the mark of ashes,
and bless our journey through the desert of Lent to the font of rebirth.
May our fasting be hunger for justice;
our alms, a making of peace;
our prayer, the chant of humble and grateful hearts.
All that we do and pray is in the name of Jesus,
for in his cross you proclaim your love
and promise our salvation. Amen.`,
        description: 'A prayer for the season of Lent, focusing on penance and preparation.',
        source: 'Liturgical Prayer'
      },
      {
        slug: 'easter-prayer',
        name: 'Easter Prayer',
        text: `Almighty and eternal God, through the resurrection of your Son you have given us new life and eternal hope.
Increase in us the gifts of the Spirit: make us loving in service,
patient in suffering, faithful in believing, hopeful in preaching,
and joyful in believing, through Jesus Christ our Lord,
who lives and reigns with you and the Holy Spirit,
one God, for ever and ever. Amen.

Alleluia! Christ is risen!`,
        description: 'A prayer celebrating the resurrection of Jesus Christ.',
        source: 'Traditional Easter Prayer'
      }
    ]
  }
};

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const categoryData = prayerCategories[category as keyof typeof prayerCategories]
  
  if (!categoryData) {
    return {
      title: 'Category Not Found',
      description: 'The requested prayer category was not found.'
    }
  }

  return {
    title: `${categoryData.name}`,
    description: `${categoryData.description}. Discover authentic Catholic prayers from this collection.`,
    keywords: `${categoryData.name.toLowerCase()}, catholic prayers, traditional prayers, ${category} prayers, catholic devotions`,
    openGraph: {
      title: `${categoryData.name} | Catholic Bible Online`,
      description: categoryData.description,
      type: 'website',
      url: `https://catholicbibleonline.com/prayers/${category}`,
      siteName: 'Catholic Bible Online'
    },
    twitter: {
      card: 'summary',
      title: `${categoryData.name} | Catholic Bible Online`,
      description: categoryData.description
    }
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const categoryData = prayerCategories[category as keyof typeof prayerCategories]

  if (!categoryData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{categoryData.icon}</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            {categoryData.name}
          </h1>
          <p className="text-xl text-black mb-6">
            {categoryData.description}
          </p>
          <div className="bg-gray-50 px-4 py-2 rounded-full inline-block">
            <span className="text-gray-600 font-medium">{categoryData.prayers.length} prayers</span>
          </div>
        </div>

        {/* Prayers List */}
        <div className="space-y-8">
          {categoryData.prayers.map((prayer, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-3">
                {prayer.name}
              </h2>
              <p className="text-gray-600 mb-4 italic">
                {prayer.description}
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="whitespace-pre-line text-black leading-relaxed">
                  {prayer.text}
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <strong>Source:</strong> {prayer.source}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 text-center space-x-4">
          <Link 
            href="/prayers"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Prayer Categories
          </Link>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-600 rounded-md hover:bg-gray-50 transition-colors"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  )
} 