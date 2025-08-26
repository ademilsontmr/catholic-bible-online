const fs = require('fs');
const path = require('path');

console.log('Adicionando 4 artigos de festas...');

const posts = [
  {
    slug: 'feast-triumph-of-the-cross',
    title: 'The Feast of the Triumph of the Cross',
    excerpt: 'The Cross: sign of love, victory, and healing—how Christians live beneath its banner.',
    category: 'Bible & Faith',
    image: '',
    readTime: '8 min read',
    author: 'Catholic Bible Online',
    date: '2025-02-02',
    publishedAt: '2025-02-02',
    content: `<h2>Introduction</h2><p>The Feast of the Triumph of the Cross proclaims that through the Cross Christ conquered sin and death. What once symbolized shame and failure becomes the tree of life. We do not glorify suffering for its own sake; we glorify the love that suffered for us and now transforms every trial from within.</p><h2>Scriptural Roots</h2><p>In Numbers 21, the bronze serpent lifted in the desert becomes a sign of healing for the bitten; in John 3, Jesus reveals that he will be lifted up so that all who believe may have eternal life. Paul declares that he will boast in nothing but the Cross (Gal 6:14). The Cross is revelation: of God’s justice that confronts sin and of God’s mercy that embraces sinners.</p><h2>Living Under the Sign of the Cross</h2><ul><li><strong>Identity:</strong> We trace the sign of the Cross to remember whose we are—beloved of the Father, redeemed by the Son, anointed by the Spirit.</li><li><strong>Discipleship:</strong> Taking up the Cross means daily fidelity: keeping promises, forgiving enemies, serving the weak.</li><li><strong>Hope:</strong> No wound is final where Christ reigns; every Calvary contains an Easter in seed.</li></ul><h2>The Cross and Healing</h2><p>Beneath the Cross, bitterness yields to intercession. We bring our sins to mercy, our memories to cleansing, our bodies and relationships to restoration. The Cross does not erase history; it redeems it.</p><h2>Prayer</h2><blockquote><p>We adore you, O Christ, and we bless you, because by your Holy Cross you have redeemed the world. Teach us to love as you love. Amen.</p></blockquote>`
  },
  {
    slug: 'feast-christ-the-king',
    title: 'The Feast of Christ the King',
    excerpt: 'Christ the King: a kingdom of truth, life, holiness, justice, love, and peace.',
    category: 'Bible & Faith',
    image: '',
    readTime: '8 min read',
    author: 'Catholic Bible Online',
    date: '2025-02-02',
    publishedAt: '2025-02-02',
    content: `<h2>Introduction</h2><p>The Feast of Christ the King crowns the liturgical year with a bold confession: Jesus is Lord of history and the human heart. His crown is of thorns, his throne the Cross, his scepter mercy. He reigns not by domination but by self-giving love.</p><h2>Gospel Vision</h2><p>Before Pilate, Jesus declares, “My kingdom is not of this world” (Jn 18). Not meaning otherworldly escape, but a different logic: truth over propaganda, service over power, holiness over cynicism. The Beatitudes name the culture of his kingdom.</p><h2>Allegiance and Mission</h2><ul><li><strong>Worship:</strong> Place Christ at the center—Sunday Mass, adoration, daily prayer.</li><li><strong>Conscience:</strong> Let the King form your judgments; truth is not negotiated by polls.</li><li><strong>Charity:</strong> Recognize Christ in the least; the final judgment (Mt 25) measures love.</li></ul><h2>Public Life</h2><p>Christ’s kingship inspires civic virtue: honesty, defense of life, care for the poor, religious freedom. Christians engage without bitterness, hopeful and courageous.</p><h2>Prayer</h2><blockquote><p>Jesus, King of the Universe, reign in us. Make our homes, work, and society reflect your kingdom of truth and peace. Amen.</p></blockquote>`
  },
  {
    slug: 'feast-holy-trinity',
    title: 'The Feast of the Holy Trinity',
    excerpt: 'The Trinity: one God in three Persons—Father, Son, and Holy Spirit—source and goal of Christian life.',
    category: 'Bible & Faith',
    image: '',
    readTime: '8 min read',
    author: 'Catholic Bible Online',
    date: '2025-02-02',
    publishedAt: '2025-02-02',
    content: `<h2>Introduction</h2><p>Trinity Sunday is not a puzzle to be solved but a mystery to be adored. God is communion: the Father gives all to the Son; the Son receives and returns all to the Father; the Spirit is the love poured out. The Christian life is participation in this exchange.</p><h2>Revelation of Communion</h2><p>At Jesus’ Baptism and Transfiguration we glimpse the Triune life. The Great Commission sends us to baptize “in the name of the Father, and of the Son, and of the Holy Spirit.” Salvation is entry into divine friendship.</p><h2>Praying Trinitarianly</h2><ul><li>Begin and end with the Sign of the Cross.</li><li>Address the Father through the Son in the Spirit.</li><li>Practice doxology: “Glory be to the Father...” throughout the day.</li></ul><h2>Imitation</h2><p>Families, parishes, and communities mirror God when they live unity with distinct gifts, mutual self-giving, and joy.</p><h2>Prayer</h2><blockquote><p>Most Holy Trinity, draw us into your life of love. Make us one, as you are One. Amen.</p></blockquote>`
  },
  {
    slug: 'feast-conversion-saint-paul',
    title: 'The Feast of the Conversion of Saint Paul',
    excerpt: 'From persecutor to apostle: grace that turns a life around for the Gospel.',
    category: 'Bible & Faith',
    image: '',
    readTime: '8 min read',
    author: 'Catholic Bible Online',
    date: '2025-02-02',
    publishedAt: '2025-02-02',
    content: `<h2>Introduction</h2><p>On the road to Damascus, Saul is overtaken by light and addressed by the Risen Lord. He falls, listens, and is sent. The feast reveals conversion as encounter: not self-improvement alone, but surrender to a Person who reorients desire and mission.</p><h2>Marks of True Conversion</h2><ul><li><strong>Truth:</strong> Paul admits he was wrong; humility opens the door.</li><li><strong>Baptism and Community:</strong> Ananias welcomes him; conversion inserts us into the Church.</li><li><strong>Mission:</strong> The convert becomes a witness; zeal now serves love.</li></ul><h2>For Us Today</h2><p>Conversion may be sudden or slow; in both, grace acts. We meet Christ in Scripture, sacraments, the poor, and the voice of conscience. Daily conversion looks like prayerful listening, confession, reconciliation, and courageous witness.</p><h2>Prayer</h2><blockquote><p>Lord Jesus, light of the nations, convert our hearts anew. Like Paul, make us fearless in proclaiming your Gospel in word and deed. Amen.</p></blockquote>`
  }
];

const blogPath = path.join(__dirname, 'src', 'data', 'blog.json');
const data = JSON.parse(fs.readFileSync(blogPath, 'utf8'));
fs.writeFileSync(blogPath, JSON.stringify([...posts, ...data], null, 2));

console.log('Artigos adicionados:');
posts.forEach(p => console.log(`- ${p.title} (${p.slug})`)); 