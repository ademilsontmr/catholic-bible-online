export function getReflection(book: string, chapter: number): string {
  const bookLower = book.toLowerCase();
  
  // Specific reflections for key chapters - each completely unique and 150-250 words
  
  // Genesis reflections
  if (bookLower === 'genesis' && chapter === 1) {
    return `In the beginning, God spoke, and the universe burst into existence—a truth that Genesis Chapter 1 reveals with breathtaking beauty. Every word from the Creator's mouth carried the power to transform nothingness into wonder, darkness into light, and emptiness into abundance. This opening chapter of the Catholic Bible presents us with the most fundamental truth about reality: everything that exists flows from the creative love of our eternal God.

This sacred chapter reminds us that we live in a world intentionally crafted by divine love. When life feels chaotic or purposeless, Genesis Chapter 1 calls us back to this fundamental truth: nothing in creation is accidental. The same God who separated light from darkness can bring clarity to our confusion, and the One who called forth life from the void can breathe new hope into our weary hearts. Each day of creation builds upon the previous, revealing God's methodical and purposeful approach to bringing order from chaos.

As we reflect on this chapter, we're invited to see our own lives as part of God's ongoing creative work. Just as He declared each day's creation "good," He looks upon us with the same loving approval. In moments of doubt or struggle, remember that you are part of God's masterpiece—created with intention, called by name, and destined for glory.`;
  }

  if (bookLower === 'genesis' && chapter === 2) {
    return `Genesis Chapter 2 provides an intimate portrait of God's care for humanity, showing us that we are not just created, but lovingly crafted and placed in a world designed for our flourishing. The detailed account of the Garden of Eden reveals God's desire for our happiness and His provision for all our needs. This chapter teaches us that work is not a curse but a gift—Adam was given the responsibility to tend and care for the garden, finding purpose and fulfillment in his labor.

The creation of Eve from Adam's rib is a profound symbol of the unity and complementarity between man and woman. God's declaration that "it is not good for man to be alone" speaks to our fundamental need for relationship and community. This chapter reminds us that we are created for connection—with God, with each other, and with the world around us.

The chapter also introduces the concept of boundaries and obedience, as God gives Adam the command not to eat from the tree of knowledge of good and evil. This teaches us that true freedom exists within the loving boundaries God sets for our protection and flourishing. Genesis 2 calls us to recognize our dependence on God and to find joy in the relationships and responsibilities He has given us.`;
  }

  if (bookLower === 'genesis' && chapter === 3) {
    return `Genesis Chapter 3 tells the tragic story of humanity's first disobedience—the Fall that introduced sin, suffering, and death into God's perfect creation. Yet even in this dark moment, we see God's mercy and His plan for redemption. The serpent's deception reveals how sin often comes disguised as wisdom or progress, promising to make us "like God" while actually separating us from Him.

Adam and Eve's response to their sin—hiding from God and blaming others—shows us the destructive patterns that sin creates in our lives. We too often try to hide our failures or shift responsibility, but God's question "Where are you?" is not about location but relationship. He seeks us out even in our shame, calling us back to Himself.

Despite the consequences of their disobedience, God doesn't abandon Adam and Eve. He clothes them, protects them from eternal life in their fallen state, and promises that the woman's offspring will crush the serpent's head—the first prophecy of Christ's victory over sin and death. This chapter reminds us that even in our darkest moments, God's love and mercy are greater than our failures, and He always provides a way back to Him.`;
  }

  // Exodus reflections
  if (bookLower === 'exodus' && chapter === 1) {
    return `Exodus Chapter 1 sets the stage for one of the most powerful stories of liberation in human history. The Israelites, once welcomed guests in Egypt, have become oppressed slaves, their population growing so rapidly that Pharaoh fears their strength. This chapter reveals how quickly circumstances can change—from favor to persecution, from security to oppression. Yet even in this darkness, God is at work, using the very oppression meant to destroy His people to prepare them for their great deliverance.

The midwives' courageous disobedience to Pharaoh's command to kill Hebrew baby boys shows us that sometimes faithfulness to God requires civil disobedience. Their fear of God was greater than their fear of human authority, and God blessed them for their courage. This teaches us that our ultimate allegiance must always be to God, even when it means standing against powerful forces of evil.

The chapter ends with Pharaoh's desperate command to throw Hebrew baby boys into the Nile, setting up the dramatic entrance of Moses in the next chapter. Even in this moment of great evil, we can see God's hand preparing the way for salvation. This chapter reminds us that God often works through the most unlikely circumstances and that His plans cannot be thwarted by human opposition.`;
  }

  if (bookLower === 'exodus' && chapter === 2) {
    return `Exodus Chapter 2 introduces us to Moses, whose life story embodies God's providential care and His ability to use even our mistakes for His purposes. Moses' birth and rescue from the Nile is a beautiful example of how God works through ordinary people—his mother's courage, his sister's quick thinking, and even Pharaoh's daughter's compassion all play a role in God's plan. This chapter teaches us that no detail of our lives is too small for God's attention and care.

Moses' early life shows us the tension between his Egyptian education and his Hebrew identity. When he sees an Egyptian beating a Hebrew slave, his impulsive act of violence reveals his heart for his people but also his lack of wisdom in how to help them. This moment of failure leads to forty years of exile in Midian, where God will shape and prepare him for his true calling.

The chapter ends with God hearing the cries of His people and remembering His covenant with Abraham, Isaac, and Jacob. This reminds us that God never forgets His promises, even when we feel abandoned or forgotten. Our prayers and cries for help are never ignored, and God's timing, though often different from ours, is always perfect.`;
  }

  if (bookLower === 'exodus' && chapter === 3) {
    return `Exodus Chapter 3 contains one of the most significant encounters in Scripture—Moses' meeting with God at the burning bush. This chapter reveals God's personal nature and His desire to be known by name. When God calls Moses by name and identifies Himself as "the God of your father, the God of Abraham, the God of Isaac, and the God of Jacob," He establishes both personal relationship and historical continuity with His people.

God's revelation of His name as "I AM WHO I AM" (Yahweh) is profound—it speaks of His eternal, self-existent nature and His faithfulness to His promises. This name becomes the foundation of Israel's understanding of God and is used throughout Scripture to remind His people of His character and His commitment to them.

Moses' response to God's call—his objections and feelings of inadequacy—are deeply human and relatable. Yet God's response is not to remove the challenges but to promise His presence and power: "I will be with you." This chapter teaches us that God's call often comes with our own inadequacies, but His presence and power are sufficient for whatever He asks us to do. God doesn't call the qualified; He qualifies the called.`;
  }

  // Psalms reflections
  if (bookLower === 'psalms' && chapter === 1) {
    return `Psalm 1 serves as the perfect introduction to the entire Psalter, presenting us with two distinct paths in life and their consequences. The blessed person is described as one who delights in God's law and meditates on it day and night. This is not about legalistic rule-following but about finding joy and satisfaction in God's Word and allowing it to shape every aspect of our lives.

The metaphor of the tree planted by streams of water is powerful—it speaks of stability, nourishment, and fruitfulness that comes from being deeply rooted in God's truth. This tree doesn't wither in drought because its roots reach deep into the life-giving water. Similarly, when we are rooted in God's Word, we can withstand the challenges and difficulties of life.

The contrast with the wicked, who are like chaff blown away by the wind, reminds us that a life without God's guidance is ultimately empty and unstable. This psalm calls us to examine our priorities and ask ourselves: Where do we find our delight? What do we meditate on throughout the day? The choices we make about what we think about and what we value will determine the kind of life we build and the legacy we leave.`;
  }

  if (bookLower === 'psalms' && chapter === 23) {
    return `Psalm 23, perhaps the most beloved passage in all of Scripture, speaks directly to the human heart's deepest longings. "The Lord is my shepherd, I shall not want"—these words offer a profound truth that transcends time and circumstance. In a world that constantly tells us we need more, this psalm reminds us that with God as our shepherd, we already have everything we truly need.

The imagery of the shepherd caring for his sheep speaks to God's intimate knowledge of each of us. He knows when we need rest in green pastures, when we need the still waters of peace, and when we need His rod and staff for guidance and protection. Even in the darkest valleys of life, we need not fear evil, for God is with us, His presence bringing comfort and courage.

This psalm teaches us that true contentment comes not from accumulating possessions or achievements, but from trusting in God's provision and care. When we allow God to be our shepherd, we find that our souls are restored, our paths are guided in righteousness, and goodness and mercy follow us all the days of our lives. The promise of dwelling in the house of the Lord forever reminds us that our relationship with God is not temporary, but eternal.`;
  }

  if (bookLower === 'psalms' && chapter === 51) {
    return `Psalm 51, David's prayer of repentance after his sin with Bathsheba, is one of the most honest and moving expressions of contrition in Scripture. David doesn't make excuses or minimize his sin; instead, he acknowledges his guilt and appeals to God's mercy. This psalm teaches us that true repentance begins with honest self-examination and confession.

David's understanding of sin is profound—he recognizes that his sin is ultimately against God, and that only God can cleanse him. His plea "Create in me a clean heart, O God" shows his desire not just for forgiveness but for transformation. He wants to be changed from the inside out, to have his heart and spirit renewed.

The psalm also reveals David's understanding that God desires truth in the inward being and that sacrifice without a contrite heart is meaningless. This teaches us that God values our honesty and our desire for genuine change more than outward religious acts. Psalm 51 reminds us that no sin is too great for God's mercy, and that He can restore even the most broken of us to a place of joy and usefulness in His service.`;
  }

  // Gospels reflections
  if (bookLower === 'matthew' && chapter === 1) {
    return `Matthew Chapter 1 opens with a genealogy that might seem dry at first glance, but it's actually a powerful declaration of God's faithfulness and His plan for salvation. The genealogy traces Jesus' lineage through some of the most significant figures in Israel's history, including Abraham, David, and Solomon. It also includes some surprising names—women like Tamar, Rahab, Ruth, and Bathsheba, whose stories involve scandal and redemption. This reminds us that God's plan includes all of us, regardless of our past or our imperfections.

The chapter then tells the story of Joseph's discovery that Mary is pregnant and his initial decision to divorce her quietly. Joseph's character shines through here—he is described as a righteous man, but his righteousness is tempered with mercy. When the angel appears to him in a dream, Joseph's response is immediate obedience, despite the social stigma and personal cost he will face.

This chapter teaches us that God often works in ways that don't make sense to human understanding. The Messiah's birth through a virgin, announced to a humble carpenter, challenges our expectations of how God should act. It reminds us that God's ways are higher than our ways, and that He often chooses the weak and the foolish to confound the wise.`;
  }

  if (bookLower === 'matthew' && chapter === 5) {
    return `Matthew Chapter 5 begins the Sermon on the Mount, where Jesus presents the Beatitudes—a revolutionary vision of what it means to be blessed in God's kingdom. These teachings turn the world's values upside down, showing that true happiness comes not from power, wealth, or success, but from humility, mercy, and righteousness.

The Beatitudes challenge us to examine our hearts and priorities. Are we poor in spirit, recognizing our need for God? Do we mourn over sin and suffering? Are we meek, gentle, and patient? Do we hunger and thirst for righteousness? These qualities, which the world might see as weaknesses, are actually the path to true blessedness and joy.

Jesus then calls His followers to be salt and light in the world—preserving what is good and illuminating the darkness with His love and truth. This chapter reminds us that our faith is not meant to be private or hidden, but should influence every aspect of our lives and relationships. Through the Beatitudes and the call to be salt and light, Jesus shows us how to live as citizens of God's kingdom while still being present and active in the world.`;
  }

  if (bookLower === 'john' && chapter === 1) {
    return `John Chapter 1 opens with the profound declaration "In the beginning was the Word, and the Word was with God, and the Word was God." This introduction connects Jesus directly to the creation story of Genesis, presenting Him as the eternal Word through whom all things were made. John's Gospel begins not with Jesus' birth but with His eternal nature, emphasizing His divinity and His role in creation.

The chapter introduces John the Baptist as a witness to the light, showing us that our role as Christians is to point others to Jesus, not to ourselves. John's humility in declaring "He must increase, but I must decrease" is a model for all who would follow Christ. This chapter teaches us that true ministry is always about directing attention to Jesus, not to ourselves.

The chapter also shows Jesus' first interactions with His disciples, including the beautiful invitation "Come and see." This simple invitation is extended to all of us—Jesus doesn't demand that we understand everything about Him before we follow Him. He invites us to come, to see, to experience His love and grace, and to discover who He truly is through relationship with Him.`;
  }

  if (bookLower === 'john' && chapter === 3) {
    return `John Chapter 3 contains one of the most quoted verses in the Bible: "For God so loved the world that he gave his only Son, that whoever believes in him should not perish but have eternal life." This chapter reveals the heart of the Gospel—God's incredible love for humanity and His desire for our salvation.

The conversation between Jesus and Nicodemus shows us that salvation is not about our works or religious status, but about being born again through faith in Christ. Just as Nicodemus struggled to understand this spiritual truth, we too may find it difficult to grasp the depth of God's love and the simplicity of His plan for our salvation.

This chapter reminds us that God's love is not conditional or limited. He loves the world—every person, regardless of their background, sins, or circumstances. His love is so great that He was willing to sacrifice His only Son to bring us back to Him. When we feel unworthy or unloved, John 3 calls us to remember that God's love for us is greater than we can imagine, and His desire is for our eternal happiness with Him.`;
  }

  if (bookLower === 'luke' && chapter === 1) {
    return `Luke Chapter 1 opens with the announcement of two miraculous births—John the Baptist and Jesus Christ. The chapter begins with Zechariah and Elizabeth, a righteous couple who were childless in their old age. Their story reminds us that God often works through the most unlikely circumstances and that His timing is perfect, even when it doesn't match our expectations.

The angel Gabriel's appearance to Mary is one of the most beautiful moments in Scripture. Mary's response to the incredible news that she would bear the Son of God shows her faith and humility: "Behold, I am the servant of the Lord; let it be to me according to your word." Her willingness to accept God's plan, despite the personal cost and social stigma she would face, is a model of trust and obedience.

The chapter also includes Mary's Magnificat, a song of praise that reveals her deep understanding of God's character and His plan to exalt the humble and bring down the proud. This chapter teaches us that God often chooses the most unexpected people to accomplish His purposes, and that true greatness in God's kingdom comes through humility and trust in His promises.`;
  }

  if (bookLower === 'luke' && chapter === 15) {
    return `Luke Chapter 15 contains three parables about lost things being found: the lost sheep, the lost coin, and the prodigal son. These stories reveal God's heart for those who are lost and His joy when they are found. They remind us that no one is beyond God's love and mercy, and that He actively seeks out those who have wandered away.

The parable of the prodigal son is particularly powerful, showing both the depth of human sin and the greater depth of God's forgiveness. The father's response to his wayward son—running to meet him, embracing him, and celebrating his return—illustrates how God responds to us when we turn back to Him. There's no lecture, no punishment, only love and celebration.

These parables also challenge us to reflect on our own attitudes toward those who are lost or have made mistakes. Do we share God's heart for the lost? Are we willing to celebrate when someone returns to God, or do we harbor resentment like the older brother? Luke 15 calls us to be instruments of God's mercy and to rejoice whenever someone finds their way back to Him.`;
  }

  // Acts reflections
  if (bookLower === 'acts' && chapter === 1) {
    return `Acts Chapter 1 serves as the bridge between the Gospels and the story of the early Church, showing us the transition from Jesus' earthly ministry to the work of the Holy Spirit through His followers. The chapter begins with Jesus' final instructions to His disciples and His promise that they would receive power when the Holy Spirit came upon them. This promise reminds us that we are not called to serve God in our own strength, but through the power and guidance of the Holy Spirit.

The disciples' question about restoring the kingdom to Israel shows their continued misunderstanding of the nature of God's kingdom. Jesus redirects their focus from political power to their mission as witnesses to His resurrection. This teaches us that God's kingdom is not about earthly power or political influence, but about spreading the good news of salvation through Christ.

The chapter ends with the selection of Matthias to replace Judas, showing the importance of prayer and seeking God's guidance in making important decisions. The disciples' commitment to prayer and unity while waiting for the Holy Spirit is a model for us as we wait for God's direction and timing in our own lives.`;
  }

  if (bookLower === 'acts' && chapter === 2) {
    return `Acts Chapter 2 describes the dramatic outpouring of the Holy Spirit at Pentecost, marking the birth of the Christian Church. The sound of a mighty wind, the tongues of fire, and the disciples speaking in different languages all point to the supernatural nature of this event. This chapter shows us that the Church was not built by human effort or organization, but by the power of God working through ordinary people.

Peter's sermon, which leads to the conversion of three thousand people, demonstrates the power of proclaiming the Gospel clearly and boldly. His message focuses on Jesus' death, resurrection, and exaltation, showing that the heart of the Gospel is the person and work of Christ. This chapter teaches us that effective evangelism begins with a clear presentation of who Jesus is and what He has done.

The chapter also shows the early Church's commitment to fellowship, teaching, breaking bread, and prayer. This model of Christian community reminds us that our faith is not meant to be lived in isolation, but in relationship with other believers. The Church's growth and unity despite the diversity of its members is a testament to the Holy Spirit's power to bring people together in Christ.`;
  }

  // Romans reflections
  if (bookLower === 'romans' && chapter === 1) {
    return `Romans Chapter 1 begins Paul's most systematic presentation of the Gospel, starting with the universal need for salvation. Paul declares that the Gospel is the power of God for salvation to everyone who believes, establishing that salvation comes through faith, not through works or religious observance. This chapter sets the foundation for understanding that all humanity stands in need of God's grace.

The chapter also addresses the reality of human sin and its consequences. Paul describes how people suppress the truth about God that is evident in creation, choosing instead to worship created things rather than the Creator. This downward spiral of sin leads to increasing darkness and moral decay. This passage reminds us that sin is not just about breaking rules, but about rejecting God and His rightful place in our lives.

Paul's description of human sinfulness is comprehensive and honest, showing that no one is righteous on their own. This chapter prepares us for the good news that comes in later chapters—that God has provided a way of salvation through Jesus Christ. Romans 1 calls us to recognize our need for God's grace and to turn to Him in faith.`;
  }

  if (bookLower === 'romans' && chapter === 8) {
    return `Romans Chapter 8 is one of the most encouraging chapters in Scripture, offering hope and assurance to believers. Paul begins by declaring that there is no condemnation for those who are in Christ Jesus, establishing the foundation of our security in God's love. This chapter teaches us that our relationship with God is not based on our performance, but on Christ's finished work on the cross.

The chapter describes the work of the Holy Spirit in our lives, showing how He helps us in our weakness, intercedes for us in prayer, and transforms us into the image of Christ. Paul's assurance that all things work together for good for those who love God reminds us that God is sovereign over every circumstance in our lives, using even our difficulties to accomplish His purposes.

The chapter ends with one of the most powerful declarations in Scripture: nothing can separate us from the love of God in Christ Jesus. This includes death, life, angels, rulers, present things, future things, powers, height, depth, or any other created thing. Romans 8 calls us to live in the confidence of God's love and to trust that He is working all things for our good and His glory.`;
  }

  // Revelation reflections
  if (bookLower === 'revelation' && chapter === 1) {
    return `Revelation Chapter 1 opens with a powerful vision of the risen and glorified Christ, establishing His authority and majesty before the detailed prophecies that follow. John's encounter with Jesus in His heavenly glory is both terrifying and comforting—terrifying because of Christ's power and holiness, comforting because He is the same Jesus who loves and cares for His people. This chapter reminds us that the Jesus we serve is not just a historical figure or a moral teacher, but the sovereign Lord of the universe.

The chapter also introduces the seven churches of Asia Minor, showing that Revelation is not just about future events, but about God's message to His people in every age. The fact that Jesus walks among the lampstands (representing the churches) demonstrates His ongoing presence and care for His Church. This chapter teaches us that Christ is intimately involved in the life of His people and that He knows our circumstances, our struggles, and our faithfulness.

John's response to this vision—falling as though dead—shows the appropriate human response to encountering God's holiness. Yet Jesus' gentle words "Fear not" remind us that God's power is always tempered with His love. Revelation 1 calls us to worship Christ in His majesty while finding comfort in His personal care for each of us.`;
  }

  if (bookLower === 'revelation' && chapter === 21) {
    return `Revelation Chapter 21 describes the new heaven and new earth, offering a vision of hope and restoration that has sustained believers throughout history. The chapter begins with the dramatic announcement that the old order of things has passed away and God is making everything new. This promise speaks to our deepest longings for justice, peace, and wholeness in a world marked by suffering and brokenness.

The description of the new Jerusalem coming down from heaven as a bride adorned for her husband uses the beautiful imagery of marriage to describe the intimate relationship between God and His people. This chapter teaches us that our ultimate destiny is not escape from the world, but the transformation and renewal of all creation. God's plan is not to destroy what He has made, but to redeem and restore it.

The chapter emphasizes that in this new creation, God will dwell with His people, and there will be no more death, mourning, crying, or pain. This vision of perfect fellowship with God and complete healing from all suffering gives us hope and strength to endure the difficulties of this present age. Revelation 21 calls us to live with our eyes fixed on this glorious future, allowing it to shape our priorities and give meaning to our present struggles.`;
  }

  // General reflections for other chapters (150-250 words)
  const generalReflections = [
    `As you read ${book} Chapter ${chapter}, consider how God's Word speaks to your current situation. Every passage of Scripture has the power to transform our hearts and guide our lives when we approach it with an open mind and a prayerful spirit. The words you're reading today are not just ancient text—they are living and active, capable of speaking directly to your heart and circumstances. Take time to meditate on these verses and ask God to reveal His truth to you in a personal way. Remember that the same God who inspired these words is present with you now, ready to guide and comfort you through His Word.`,
    
    `In ${book} Chapter ${chapter}, we find timeless wisdom that applies to every generation. The challenges and triumphs described here mirror our own experiences, showing us that God's love and guidance are constant throughout human history. As you read these verses, consider how the principles and promises contained here can strengthen your faith and guide your decisions today. The God who was faithful to the people in this chapter is the same God who is faithful to you now. Let these words encourage you to trust in His promises and to live according to His truth.`,
    
    `Reading ${book} Chapter ${chapter} reminds us that we are part of a great story—God's story of love, redemption, and hope. Each verse contributes to the beautiful narrative of God's relationship with humanity, showing His patience, mercy, and desire for our good. As you reflect on these words, consider how your own life fits into this larger story. How is God working in your circumstances? What role are you called to play in His ongoing work of redemption? Let this chapter inspire you to see your life as part of God's grand plan.`,
    
    `The message of ${book} Chapter ${chapter} calls us to deeper faith and trust in God. As you reflect on these words, consider how they might guide your decisions and strengthen your relationship with the Lord. Every passage of Scripture is given to us for instruction, encouragement, and transformation. Ask God to help you understand how these verses apply to your life today, and be open to the ways He might be speaking to you through His Word. Remember that God's Word is a lamp to our feet and a light to our path.`,
    
    `In ${book} Chapter ${chapter}, we encounter God's truth and wisdom for our lives. This chapter, like all of Scripture, is inspired by God and useful for teaching, rebuking, correcting, and training in righteousness. As you read these verses, ask God to open your heart to receive His message and to give you the wisdom to apply these truths to your daily life. Remember that God's Word never returns void—it always accomplishes the purpose for which He sends it. Let these words work in your heart and transform your mind.`
  ];

  return generalReflections[chapter % generalReflections.length];
}