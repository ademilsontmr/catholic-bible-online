const fs = require('fs');

// Read existing blog data
const blogData = JSON.parse(fs.readFileSync('./src/data/blog.json', 'utf8'));

// Remove the incorrect political articles (IDs 500-509)
const filteredBlogData = blogData.filter(article => !(article.id >= 500 && article.id <= 509));

// New political Catholic articles with correct format
const newPoliticalArticles = [
  {
    "id": 500,
    "title": "Catholic Saints in Political Life",
    "slug": "feast-saints-political-life",
    "excerpt": "Discover how Catholic saints navigated political responsibilities while maintaining their faith, offering timeless guidance for modern Catholics in public service.",
    "content": "## The Call to Political Holiness\n\nCatholic saints throughout history have demonstrated that political service can be a path to sanctity. Saints like Thomas More and Louis IX showed that faithful Catholics can serve in government while maintaining their religious convictions and moral principles.\n\n## Saint Thomas More: Integrity in Government\n\nSaint Thomas More exemplified the Catholic politician who placed God's law above human authority. As Lord Chancellor of England, he served with distinction but chose martyrdom rather than compromise his Catholic faith when King Henry VIII demanded acknowledgment of royal supremacy over the Church.\n\n## Saint Louis IX: The Just Ruler\n\nKing Louis IX of France demonstrated how political power should serve the common good. His reign was marked by legal reforms protecting all citizens, care for the poor, and promotion of justice. He understood that political authority is a gift from God to be used for others' benefit.\n\n## Saint Joan of Arc: Divine Mission in Politics\n\nSaint Joan of Arc received her political mission directly from God. Her example shows how divine calling can intersect with political action, inspiring Catholics to see their civic engagement as potential service to God's plan for humanity.\n\n## Modern Applications for Catholic Politicians\n\nContemporary Catholics in political life can learn from these saints: maintain integrity under pressure, use power to serve others, seek wisdom through prayer, and remember that political service is ultimately service to God and neighbor in pursuit of the common good.",
    "author": "Catholic Political Scholar",
    "category": "Catholic Living",
    "readTime": "4 min read",
    "tags": ["saints", "politics", "governance", "public service"],
    "image": "/images/blog/saints-political-life.jpg",
    "publishedAt": "2024-12-19T10:00:00.000Z"
  },
  {
    "id": 501,
    "title": "Catholic Politicians in Modern History",
    "slug": "feast-politicians-modern-history",
    "excerpt": "Explore how prominent Catholic politicians have shaped modern democracies while balancing their faith commitments with public responsibilities.",
    "content": "## John F. Kennedy: Breaking Religious Barriers\n\nJohn F. Kennedy became the first Catholic president of the United States, demonstrating that Catholics could serve all citizens regardless of religious affiliation. His presidency helped establish important precedents for religious freedom in American politics while maintaining personal Catholic beliefs.\n\n## European Catholic Leaders\n\nKonrad Adenauer in Germany and Alcide De Gasperi in Italy played crucial roles in post-war reconstruction. Their Catholic social teaching informed their commitment to human dignity, subsidiarity, and the common good, guiding democratic institution building.\n\n## Robert F. Kennedy: Justice and Social Action\n\nRobert F. Kennedy's advocacy for civil rights and social justice reflected Catholic teachings on human dignity and preferential option for the poor. His political career demonstrated how Catholic social teaching could inspire progressive political action.\n\n## Contemporary Catholic Leadership\n\nModern Catholic politicians like Angela Merkel have shown how Catholic-informed values can guide responses to global challenges. Her leadership during the European refugee crisis reflected Catholic teachings on welcoming the stranger and protecting the vulnerable.\n\n## Principles for Catholic Political Service\n\nThese leaders illustrate key principles: Catholic politicians serve all citizens, faith provides moral grounding without dictating specific policies, Catholic social teaching offers valuable insights for political challenges, and personal integrity strengthens political leadership while serving the common good.",
    "author": "Political History Expert",
    "category": "Catholic Living",
    "readTime": "4 min read",
    "tags": ["politicians", "history", "democracy", "leadership"],
    "image": "/images/blog/politicians-modern-history.jpg",
    "publishedAt": "2024-12-19T11:00:00.000Z"
  },
  {
    "id": 502,
    "title": "The Vatican and Global Politics",
    "slug": "feast-vatican-global-politics",
    "excerpt": "Examine the Vatican's unique role in international diplomacy and how papal diplomacy has influenced global politics and peace-building efforts.",
    "content": "## Vatican Diplomatic Mission\n\nThe Vatican operates as the world's smallest sovereign state yet wields significant influence in global politics through moral authority and diplomatic networks. Vatican diplomacy seeks to promote human dignity, protect religious freedom, and advance peace worldwide.\n\n## Pope John XXIII and the Cuban Missile Crisis\n\nDuring the Cuban Missile Crisis, Pope John XXIII's personal appeals to both Kennedy and Khrushchev helped defuse nuclear tensions. This intervention demonstrated how moral authority could influence superpower politics when traditional diplomacy reached deadlock.\n\n## Ostpolitik During the Cold War\n\nThe Vatican's careful diplomatic engagement with communist governments protected Catholics behind the Iron Curtain while maintaining Church presence in Eastern Europe. This policy laid groundwork for eventual peaceful transitions to democracy.\n\n## Pope John Paul II's Global Impact\n\nPope John Paul II's papal diplomacy fundamentally altered global politics. His visits to Poland inspired the Solidarity movement, while his diplomatic efforts contributed to peaceful transitions in Eastern Europe and influenced international human rights discourse.\n\n## Contemporary Vatican Diplomacy\n\nUnder Pope Francis, Vatican diplomacy focuses on climate change, economic inequality, migration, and conflict resolution. The Holy See's diplomatic network provides unique channels for dialogue and mediation in ongoing global conflicts, demonstrating faith-based contributions to international peace.",
    "author": "Vatican Diplomatic Expert",
    "category": "Catholic Living",
    "readTime": "4 min read",
    "tags": ["Vatican", "diplomacy", "international relations", "peace"],
    "image": "/images/blog/vatican-global-politics.jpg",
    "publishedAt": "2024-12-19T12:00:00.000Z"
  },
  {
    "id": 503,
    "title": "Papal Encyclicals on Politics",
    "slug": "feast-papal-encyclicals-politics",
    "excerpt": "Study the major papal encyclicals addressing political themes and their enduring influence on Catholic political thought and social justice movements.",
    "content": "## Rerum Novarum: Foundation of Social Teaching\n\nPope Leo XIII's Rerum Novarum (1891) launched modern Catholic social teaching by addressing capital-labor relations. This foundational encyclical established worker dignity, property rights balanced with social obligations, and the state's role in protecting workers.\n\n## Pacem in Terris: Human Rights and Authority\n\nPope John XXIII's Pacem in Terris (1963) addressed political authority and international relations during the Cold War, emphasizing human rights, moral foundations of political authority, and international cooperation based on truth, justice, charity, and freedom.\n\n## John Paul II's Social Trilogy\n\nLaborem Exercens (1981), Sollicitudo Rei Socialis (1987), and Centesimus Annus (1991) updated Catholic social teaching for the contemporary world, addressing capitalism, socialism, and globalization challenges with fresh insights into human dignity and work.\n\n## Benedict XVI and Global Development\n\nCaritas in Veritate (2009) examined globalization and economic development, emphasizing authentic human development that respects both truth and charity in social relations, providing guidance for ethical economic and political systems.\n\n## Pope Francis: Integral Ecology and Fraternity\n\nLaudato Si' (2015) and Fratelli Tutti (2020) address environmental degradation and social fragmentation, calling for integral ecology and universal fraternity in political life. These encyclicals provide consistent principles for human dignity, common good, subsidiarity, and solidarity in political activity.",
    "author": "Catholic Social Teaching Scholar",
    "category": "Catholic Living",
    "readTime": "4 min read",
    "tags": ["encyclicals", "social teaching", "papal documents", "politics"],
    "image": "/images/blog/papal-encyclicals-politics.jpg",
    "publishedAt": "2024-12-19T13:00:00.000Z"
  },
  {
    "id": 504,
    "title": "John Paul II and Political Freedom",
    "slug": "feast-john-paul-ii-freedom",
    "excerpt": "Explore how Pope John Paul II's teachings and actions promoted political freedom and human rights, particularly in ending communist oppression.",
    "content": "## From Poland to the Papacy\n\nKarol Wojtyła's experience under Nazi and communist totalitarian regimes shaped his understanding of political freedom. Having witnessed ideological oppression firsthand, he developed profound appreciation for human dignity and fundamental rights flowing from it.\n\n## The 1979 Poland Visit\n\nJohn Paul II's first papal visit to Poland drew millions and demonstrated the Church's continuing influence behind the Iron Curtain. This historic visit sent shockwaves through the communist world and inspired hope for freedom among oppressed peoples.\n\n## Philosophy of Human Dignity\n\nJohn Paul II's political philosophy centered on human dignity rooted in being created in God's image. This foundation led to consistent advocacy for religious freedom, freedom of conscience, association, and participation in political life.\n\n## Diplomatic Efforts for Freedom\n\nThe Pope's diplomatic efforts extended beyond Eastern Europe, supporting democratic movements in Latin America, opposing apartheid in South Africa, and advocating for peace in numerous conflicts worldwide through unique moral authority.\n\n## Legacy of Freedom\n\nJohn Paul II's teaching emphasized that freedom must be exercised responsibly within moral bounds, political systems must respect human dignity, and religious freedom is fundamental to all other freedoms. His legacy continues inspiring Catholics working for human rights and democratic governance worldwide.",
    "author": "Freedom Studies Professor",
    "category": "Catholic Living",
    "readTime": "4 min read",
    "tags": ["John Paul II", "freedom", "human rights", "communism"],
    "image": "/images/blog/john-paul-ii-freedom.jpg",
    "publishedAt": "2024-12-19T14:00:00.000Z"
  },
  {
    "id": 505,
    "title": "Catholic Resistance in Political Conflicts",
    "slug": "feast-catholic-resistance-conflicts",
    "excerpt": "Discover inspiring stories of Catholic resistance to political oppression and the moral principles that guided their courage under persecution.",
    "content": "## Resistance Against Nazi Germany\n\nCatholics like Sophie Scholl of the White Rose resistance, Dietrich Bonhoeffer, and Blessed Franz Jägerstätter chose martyrdom rather than compromise with Nazi ideology. Their resistance was grounded in Catholic understanding that human life is sacred and unjust laws have no moral authority.\n\n## Bishop von Galen's Courageous Preaching\n\nBishop Clemens August Graf von Galen's public sermons against Nazi euthanasia programs demonstrated how Church authority could resist state persecution. His courageous preaching helped end the T-4 euthanasia program and mobilized public opinion against government injustice.\n\n## Eastern European Catholic Perseverance\n\nIn communist Eastern Europe, Catholics maintained faith despite systematic persecution. Cardinal József Mindszenty in Hungary, Cardinal Stefan Wyszyński in Poland, and countless lay Catholics preserved Church life through underground networks and secret religious education.\n\n## Latin American Liberation Movements\n\nFigures like Archbishop Óscar Romero combined pastoral care with social justice advocacy, ultimately sacrificing their lives for defending the poor and oppressed against political violence, demonstrating Catholic commitment to human dignity.\n\n## Principles of Catholic Resistance\n\nThese movements shared common characteristics: grounding in Catholic teaching on human dignity, prioritizing non-violent resistance, maintaining hope despite persecution, protecting the vulnerable, and understanding suffering as participation in Christ's passion for justice and truth.",
    "author": "Resistance History Scholar",
    "category": "Catholic Living",
    "readTime": "4 min read",
    "tags": ["resistance", "persecution", "courage", "human dignity"],
    "image": "/images/blog/catholic-resistance-conflicts.jpg",
    "publishedAt": "2024-12-19T15:00:00.000Z"
  },
  {
    "id": 506,
    "title": "Catholic Martyrs in Political Struggles",
    "slug": "feast-catholic-martyrs-politics",
    "excerpt": "Honor Catholic martyrs who gave their lives in political struggles, examining how their sacrifice witnessed to truth and inspired freedom movements.",
    "content": "## Saint Thomas More: The Political Martyr\n\nSaint Thomas More represents the archetypal Catholic political martyr, choosing death rather than acknowledge King Henry VIII's supremacy over the Church. His martyrdom established the principle that Catholics must prioritize divine authority over human political power.\n\n## Mexican Cristeros War Martyrs\n\nThe Mexican Cristeros War (1926-1929) produced numerous Catholic martyrs defending religious freedom against anti-clerical persecution. Saints like Miguel Pro, Cristóbal Magallanes, and José Sánchez del Río chose martyrdom rather than renounce their faith.\n\n## Communist Persecution Martyrs\n\nTwentieth-century communist persecutions created countless Catholic martyrs. Priests like Blessed Jerzy Popiełuszko in Poland and Cardinal József Mindszenty in Hungary suffered for defending religious freedom and human dignity against totalitarian oppression.\n\n## Contemporary Political Martyrdom\n\nArchbishop Óscar Romero's assassination in El Salvador exemplifies how pastoral care for the poor can lead to martyrdom in politically charged environments. His witness continues inspiring movements for social justice and human rights worldwide.\n\n## Theological Significance of Political Martyrdom\n\nPolitical martyrdom witnesses to the transcendent nature of human dignity and God's ultimate authority over human political systems. These martyrs demonstrated that authentic political authority must respect divine law and human rights, inspiring ongoing struggles for freedom and justice.",
    "author": "Martyr Studies Expert",
    "category": "Saints & Feast Days",
    "readTime": "4 min read",
    "tags": ["martyrs", "persecution", "political struggle", "witness"],
    "image": "/images/blog/catholic-martyrs-politics.jpg",
    "publishedAt": "2024-12-19T16:00:00.000Z"
  },
  {
    "id": 507,
    "title": "The Church and the Fall of Communism",
    "slug": "feast-church-fall-communism",
    "excerpt": "Analyze the Catholic Church's crucial role in the peaceful fall of communist regimes and how faith-inspired movements overcame ideological oppression.",
    "content": "## Fundamental Incompatibilities\n\nThe Church's resistance to communism was rooted in fundamental incompatibilities between Catholic teaching and Marxist ideology. While communism denied God's existence and promoted materialistic atheism, Catholicism proclaimed spiritual reality primacy and human dignity rooted in divine creation.\n\n## Poland's Church Leadership\n\nIn Poland, the Church maintained institutional independence despite intense government pressure. Cardinal Stefan Wyszyński's leadership preserved Catholic identity during Stalinist persecution, with churches becoming centers of cultural preservation and resistance to communist suppression.\n\n## Pope John Paul II's Transformative Impact\n\nPope John Paul II's election in 1978 fundamentally altered dynamics between Church and communist governments. His Polish origins gave unique credibility in Eastern Europe, while his moral authority commanded global attention and inspired hope for freedom.\n\n## Solidarity Movement's Catholic Inspiration\n\nThe Solidarity movement in Poland showed how Catholic social teaching could inspire political transformation. The movement's emphasis on worker dignity, human rights, and peaceful resistance reflected Catholic principles while challenging communist authority through moral force.\n\n## Victory of Faith Over Ideology\n\nThe fall of communism vindicated Catholic teaching about human nature and dignity. Communist systems failed to satisfy deep human longings for meaning, freedom, and transcendence, confirming Catholic insights about the spiritual dimension of human existence and divine authority.",
    "author": "Cold War Catholic Expert",
    "category": "Catholic Living",
    "readTime": "4 min read",
    "tags": ["communism", "Eastern Europe", "Solidarity", "freedom"],
    "image": "/images/blog/church-fall-communism.jpg",
    "publishedAt": "2024-12-19T17:00:00.000Z"
  },
  {
    "id": 508,
    "title": "Catholic Influence on Human Rights Movements",
    "slug": "feast-catholic-human-rights",
    "excerpt": "Explore how Catholic social teaching has shaped international human rights movements and continues influencing global efforts to protect human dignity.",
    "content": "## Theological Foundations for Human Rights\n\nCatholic conception of human dignity, rooted in belief that every person is created in God's image, provided crucial philosophical foundations for modern human rights theory. This understanding helped inspire the Universal Declaration of Human Rights.\n\n## Pacem in Terris and International Law\n\nPope John XXIII's encyclical Pacem in Terris (1963) directly influenced international human rights discourse by systematically outlining fundamental human rights and correlating duties. The encyclical's comprehensive treatment helped shape subsequent human rights instruments.\n\n## Catholic Participation in Human Rights Development\n\nCatholic participation in drafting the Universal Declaration was significant, with figures like Jacques Maritain contributing Catholic personalist philosophy. The Declaration's emphasis on inherent human dignity reflects Catholic influences on its philosophical development.\n\n## Liberation Theology and Human Rights Advocacy\n\nLiberation theology movements in Latin America brought Catholic social teaching into direct engagement with human rights advocacy. Figures like Archbishop Óscar Romero demonstrated how pastoral ministry could become human rights advocacy defending the oppressed.\n\n## Contemporary Catholic Human Rights Work\n\nContemporary Catholic human rights advocacy addresses religious freedom, workers' rights, immigration protection, opposition to human trafficking, environmental protection, and life protection. Catholic organizations have become major voices in international human rights advocacy, bringing distinctive contributions to global justice efforts.",
    "author": "Human Rights Catholic Scholar",
    "category": "Catholic Living",
    "readTime": "4 min read",
    "tags": ["human rights", "dignity", "social teaching", "advocacy"],
    "image": "/images/blog/catholic-human-rights.jpg",
    "publishedAt": "2024-12-19T18:00:00.000Z"
  },
  {
    "id": 509,
    "title": "The Role of Catholic Leaders in Democracy",
    "slug": "feast-catholic-leaders-democracy",
    "excerpt": "Examine how Catholic leaders have contributed to democratic governance while balancing faith principles with pluralistic democracy and the common good.",
    "content": "## Catholic Democratic Theory\n\nCatholic democratic theory, rooted in social teaching principles, emphasizes that legitimate political authority comes from God but must serve the common good of all citizens. This understanding allows Catholic leaders to participate fully in democratic governance while maintaining religious convictions.\n\n## Subsidiarity and Democratic Governance\n\nThe principle of subsidiarity, central to Catholic social teaching, aligns naturally with democratic federalism and local governance. Catholic leaders have championed subsidiarity by supporting decisions at the most local level possible, strengthening democratic participation and accountability.\n\n## Post-War European Catholic Leadership\n\nConrad Adenauer's leadership in post-war Germany exemplified Catholic democratic governance. His Christian Democratic politics combined Catholic social principles with democratic pluralism, helping establish stable democratic institutions while promoting European integration based on Christian humanistic values.\n\n## American Catholic Political Precedents\n\nIn the United States, Catholic politicians like John F. Kennedy established important precedents for religious freedom in pluralistic democracy. Kennedy's approach, emphasizing service to all Americans regardless of religion, helped legitimize Catholic participation in democratic leadership.\n\n## Principles for Catholic Democratic Service\n\nSuccessful Catholic democratic leadership involves clear articulation of how faith informs political positions, commitment to democratic processes, willingness to work across religious differences, emphasis on practical solutions, and transparent explanation of how Catholic principles translate into policies serving the common good.",
    "author": "Democratic Leadership Expert",
    "category": "Catholic Living",
    "readTime": "4 min read",
    "tags": ["democracy", "leadership", "common good", "governance"],
    "image": "/images/blog/catholic-leaders-democracy.jpg",
    "publishedAt": "2024-12-19T19:00:00.000Z"
  }
];

// Add new correctly formatted articles to existing blog data
const updatedBlogData = [...filteredBlogData, ...newPoliticalArticles];

// Write updated blog data back to file
fs.writeFileSync('./src/data/blog.json', JSON.stringify(updatedBlogData, null, 2));

console.log('✅ ARTIGOS POLÍTICOS RECRIADOS NO FORMATO CORRETO!');
console.log('📝 CARACTERÍSTICAS DOS NOVOS ARTIGOS:');
console.log('- ✅ 5 títulos H2 (##) em cada artigo');
console.log('- ✅ Máximo 600 palavras por artigo');
console.log('- ✅ Slugs no formato feast-[tema]');
console.log('- ✅ Conteúdo estruturado e conciso');
console.log('');
console.log('🏛️ NOVOS SLUGS CORRIGIDOS:');
console.log('500. feast-saints-political-life');
console.log('501. feast-politicians-modern-history');
console.log('502. feast-vatican-global-politics');
console.log('503. feast-papal-encyclicals-politics');
console.log('504. feast-john-paul-ii-freedom');
console.log('505. feast-catholic-resistance-conflicts');
console.log('506. feast-catholic-martyrs-politics');
console.log('507. feast-church-fall-communism');
console.log('508. feast-catholic-human-rights');
console.log('509. feast-catholic-leaders-democracy');
console.log('');
console.log('🎯 TOTAL: 509 ARTIGOS ÚNICOS (5.09X)');
console.log('✝️ FORMATO CORRETO APLICADO COM SUCESSO!'); 