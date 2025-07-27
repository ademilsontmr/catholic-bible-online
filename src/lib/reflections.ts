export function getReflection(book: string, chapter: number): string {
  const bookLower = book.toLowerCase();
  
  // Specific reflections for key chapters - each completely unique
  if (bookLower === 'genesis' && chapter === 1) {
    return `In the beginning, God spoke, and the universe burst into existence—a truth that Genesis Chapter 1 reveals with breathtaking beauty. Every word from the Creator's mouth carried the power to transform nothingness into wonder, darkness into light, and emptiness into abundance. This opening chapter of the Catholic Bible presents us with the most fundamental truth about reality: everything that exists flows from the creative love of our eternal God.

This sacred chapter reminds us that we live in a world intentionally crafted by divine love. When life feels chaotic or purposeless, Genesis Chapter 1 calls us back to this fundamental truth: nothing in creation is accidental. The same God who separated light from darkness can bring clarity to our confusion, and the One who called forth life from the void can breathe new hope into our weary hearts. Each day of creation builds upon the previous, revealing God's methodical and purposeful approach to bringing order from chaos.

As we reflect on this chapter, we're invited to see our own lives as part of God's ongoing creative work. Just as He declared each day's creation "good," He looks upon us with the same loving approval. In moments of doubt or struggle, remember that you are part of God's masterpiece—created with intention, called by name, and destined for glory.`;
  }

  if (bookLower === 'psalms' && chapter === 23) {
    return `Psalm 23, perhaps the most beloved passage in all of Scripture, speaks directly to the human heart's deepest longings. "The Lord is my shepherd, I shall not want"—these words offer a profound truth that transcends time and circumstance. In a world that constantly tells us we need more, this psalm reminds us that with God as our shepherd, we already have everything we truly need.

The imagery of the shepherd caring for his sheep speaks to God's intimate knowledge of each of us. He knows when we need rest in green pastures, when we need the still waters of peace, and when we need His rod and staff for guidance and protection. Even in the darkest valleys of life, we need not fear evil, for God is with us, His presence bringing comfort and courage.

This psalm teaches us that true contentment comes not from accumulating possessions or achievements, but from trusting in God's provision and care. When we allow God to be our shepherd, we find that our souls are restored, our paths are guided in righteousness, and goodness and mercy follow us all the days of our lives. The promise of dwelling in the house of the Lord forever reminds us that our relationship with God is not temporary, but eternal.`;
  }

  if (bookLower === 'john' && chapter === 3) {
    return `John Chapter 3 contains one of the most quoted verses in the Bible: "For God so loved the world that he gave his only Son, that whoever believes in him should not perish but have eternal life." This chapter reveals the heart of the Gospel—God's incredible love for humanity and His desire for our salvation.

The conversation between Jesus and Nicodemus shows us that salvation is not about our works or religious status, but about being born again through faith in Christ. Just as Nicodemus struggled to understand this spiritual truth, we too may find it difficult to grasp the depth of God's love and the simplicity of His plan for our salvation.

This chapter reminds us that God's love is not conditional or limited. He loves the world—every person, regardless of their background, sins, or circumstances. His love is so great that He was willing to sacrifice His only Son to bring us back to Him. When we feel unworthy or unloved, John 3 calls us to remember that God's love for us is greater than we can imagine, and His desire is for our eternal happiness with Him.`;
  }

  if (bookLower === 'matthew' && chapter === 5) {
    return `Matthew Chapter 5 begins the Sermon on the Mount, where Jesus presents the Beatitudes—a revolutionary vision of what it means to be blessed in God's kingdom. These teachings turn the world's values upside down, showing that true happiness comes not from power, wealth, or success, but from humility, mercy, and righteousness.

The Beatitudes challenge us to examine our hearts and priorities. Are we poor in spirit, recognizing our need for God? Do we mourn over sin and suffering? Are we meek, gentle, and patient? Do we hunger and thirst for righteousness? These qualities, which the world might see as weaknesses, are actually the path to true blessedness and joy.

Jesus then calls His followers to be salt and light in the world—preserving what is good and illuminating the darkness with His love and truth. This chapter reminds us that our faith is not meant to be private or hidden, but should influence every aspect of our lives and relationships. Through the Beatitudes and the call to be salt and light, Jesus shows us how to live as citizens of God's kingdom while still being present and active in the world.`;
  }

  if (bookLower === 'luke' && chapter === 15) {
    return `Luke Chapter 15 contains three parables about lost things being found: the lost sheep, the lost coin, and the prodigal son. These stories reveal God's heart for those who are lost and His joy when they are found. They remind us that no one is beyond God's love and mercy, and that He actively seeks out those who have wandered away.

The parable of the prodigal son is particularly powerful, showing both the depth of human sin and the greater depth of God's forgiveness. The father's response to his wayward son—running to meet him, embracing him, and celebrating his return—illustrates how God responds to us when we turn back to Him. There's no lecture, no punishment, only love and celebration.

These parables also challenge us to reflect on our own attitudes toward those who are lost or have made mistakes. Do we share God's heart for the lost? Are we willing to celebrate when someone returns to God, or do we harbor resentment like the older brother? Luke 15 calls us to be instruments of God's mercy and to rejoice whenever someone finds their way back to Him.`;
  }

  // General reflections for other chapters
  const generalReflections = [
    `As you read ${book} Chapter ${chapter}, consider how God's Word speaks to your current situation. Every passage of Scripture has the power to transform our hearts and guide our lives when we approach it with an open mind and a prayerful spirit.`,
    
    `The words of ${book} Chapter ${chapter} are not just ancient text—they are living and active, capable of speaking directly to your heart today. Take time to meditate on these verses and ask God to reveal His truth to you.`,
    
    `In ${book} Chapter ${chapter}, we find timeless wisdom that applies to every generation. The challenges and triumphs described here mirror our own experiences, showing us that God's love and guidance are constant throughout human history.`,
    
    `Reading ${book} Chapter ${chapter} reminds us that we are part of a great story—God's story of love, redemption, and hope. Each verse contributes to the beautiful narrative of God's relationship with humanity.`,
    
    `The message of ${book} Chapter ${chapter} calls us to deeper faith and trust in God. As you reflect on these words, consider how they might guide your decisions and strengthen your relationship with the Lord.`
  ];

  return generalReflections[chapter % generalReflections.length];
}