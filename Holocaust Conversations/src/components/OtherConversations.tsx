// Complete conversation trees for other Holocaust figures
import { ConversationNode } from "./ConversationData";

// Dr. Janusz Korczak - Streamlined but complete conversation
export const korczakConversation: ConversationNode[] = [
  {
    id: "start",
    characterMessage: "Good morning. The children are beginning to wake. Even here in the Warsaw Ghetto, we try to maintain our routines—it gives them a sense of normalcy, of structure in this chaos. I've been the director of this orphanage for over 20 years.",
    timeOfDay: "Early Morning - 6:30 AM",
    userChoices: [
      { text: "How many children are in your care?", nextNodeId: "how-many" },
      { text: "What's your morning routine?", nextNodeId: "morning-routine" },
      { text: "How has life changed in the ghetto?", nextNodeId: "ghetto-changes" }
    ]
  },
  {
    id: "how-many",
    characterMessage: "Around 200 children, ages 4 to 14. Most have lost their parents. This orphanage is their family now. I am their doctor, their teacher, their protector—though I wonder how much I can truly protect them from what's coming.",
    userChoices: [
      { text: "Tell me about the children.", nextNodeId: "about-children" },
      { text: "What do you mean, 'what's coming'?", nextNodeId: "whats-coming" }
    ]
  },
  {
    id: "morning-routine",
    characterMessage: "We wake at 6:30. The children wash, dress, make their beds. Breakfast is thin soup and bread—not what it was before, but we give thanks. We maintain dignity even when resources are scarce.",
    timeOfDay: "Morning - 8:00 AM",
    userChoices: [
      { text: "How do you find enough food?", nextNodeId: "finding-food" },
      { text: "Why is routine so important?", nextNodeId: "why-routine" }
    ]
  },
  {
    id: "ghetto-changes",
    characterMessage: "Before the ghetto, we had space, gardens, freedom. Now we're walled in, crowded, constantly watched. Disease and hunger are everywhere. But inside our orphanage, we try to create a different world—one of learning, respect, and hope.",
    userChoices: [
      { text: "How do you create hope here?", nextNodeId: "create-hope" },
      { text: "What do the children understand?", nextNodeId: "children-understand" }
    ]
  },
  {
    id: "about-children",
    characterMessage: "Each one is precious. Samuel loves mathematics. Little Esther draws beautiful pictures. They're not just 'orphans'—they're individuals with dreams and personalities. Honoring their individuality is essential.",
    timeOfDay: "Mid-Morning - 10:00 AM",
    userChoices: [
      { text: "How do you honor each child?", nextNodeId: "honor-children" },
      { text: "Do they still have dreams?", nextNodeId: "children-dreams" }
    ]
  },
  {
    id: "whats-coming",
    characterMessage: "The deportations. We hear about trains taking people away—families torn apart, sent to camps. I worry they'll come for the children. Every day I wonder if today is the day.",
    userChoices: [
      { text: "What would you do if they came?", nextNodeId: "if-they-came" },
      { text: "How do you carry that fear?", nextNodeId: "carry-fear" }
    ]
  },
  {
    id: "finding-food",
    characterMessage: "I beg, barter, use every connection. Sometimes I perform stories on the radio and use donations for food. Whatever it takes. The children must eat.",
    userChoices: [
      { text: "You're incredibly dedicated.", nextNodeId: "dedicated" },
      { text: "Tell me about your philosophy.", nextNodeId: "philosophy" }
    ]
  },
  {
    id: "why-routine",
    characterMessage: "Children need structure to feel safe. When the world is chaos, routine provides stability. Wake, learn, play, eat—these anchors help them maintain their humanity.",
    timeOfDay: "Afternoon - 2:00 PM",
    userChoices: [
      { text: "What do they learn here?", nextNodeId: "what-learn" },
      { text: "How do you maintain hope?", nextNodeId: "maintain-hope" }
    ]
  },
  {
    id: "create-hope",
    characterMessage: "Through education, art, music. We have a children's newspaper, performances, a court where they practice democracy. These activities assert their humanity and worth.",
    userChoices: [
      { text: "A children's court?", nextNodeId: "childrens-court" },
      { text: "Does this really help?", nextNodeId: "does-help" }
    ]
  },
  {
    id: "children-understand",
    characterMessage: "More than I wish. They see the hunger, the guards, the fear. But I try to preserve their childhood while teaching resilience. It's a delicate balance.",
    userChoices: [
      { text: "How do you teach resilience?", nextNodeId: "teach-resilience" },
      { text: "Can childhood survive this?", nextNodeId: "childhood-survive" }
    ]
  },
  {
    id: "honor-children",
    characterMessage: "By listening, remembering their preferences, giving them voice and choice. They're not numbers—they're David, Esther, Samuel, each unique and valued.",
    timeOfDay: "Late Afternoon - 4:00 PM",
    userChoices: [
      { text: "That must give them strength.", nextNodeId: "give-strength" },
      { text: "Where do you find your strength?", nextNodeId: "your-strength" }
    ]
  },
  {
    id: "children-dreams",
    characterMessage: "Yes. They dream of freedom, of families, of futures. I encourage those dreams. Hope is not frivolous—it's essential for survival.",
    userChoices: [
      { text: "Do you share their hope?", nextNodeId: "share-hope" },
      { text: "What do you hope for?", nextNodeId: "what-hope-for" }
    ]
  },
  {
    id: "if-they-came",
    characterMessage: "I would stay with them. I've had offers to escape, but you don't leave children at a time like this. My place is with them, wherever that leads.",
    userChoices: [
      { text: "That's extraordinary courage.", nextNodeId: "extraordinary" },
      { text: "Why such devotion?", nextNodeId: "why-devotion" }
    ]
  },
  {
    id: "carry-fear",
    characterMessage: "By focusing on today. This morning's breakfast, this afternoon's lesson, tonight's story. The children need me present, not paralyzed by tomorrow's fears.",
    timeOfDay: "Evening - 6:00 PM",
    userChoices: [
      { text: "What's tonight's story about?", nextNodeId: "tonight-story" },
      { text: "How do you find peace?", nextNodeId: "find-peace" }
    ]
  },
  {
    id: "dedicated",
    characterMessage: "These children are my life's work. Serving them gives my life meaning. How could I be anything less than fully dedicated?",
    userChoices: [
      { text: "They're lucky to have you.", nextNodeId: "lucky-have" },
      { text: "What matters most to you?", nextNodeId: "matters-most" }
    ]
  },
  {
    id: "philosophy",
    characterMessage: "That children deserve respect, voice, and dignity. That education isn't just facts—it's learning to be fully human. That we must protect childhood even in impossible circumstances.",
    userChoices: [
      { text: "How do you protect childhood here?", nextNodeId: "protect-childhood" },
      { text: "Your legacy will be profound.", nextNodeId: "legacy" }
    ]
  },
  {
    id: "what-learn",
    characterMessage: "Reading, writing, arithmetic. But also ethics, empathy, critical thinking. I want them to question, to feel, to maintain their humanity no matter what happens.",
    userChoices: [
      { text: "Education as resistance.", nextNodeId: "education-resistance" },
      { text: "What's your message for the future?", nextNodeId: "message-future" }
    ]
  },
  {
    id: "maintain-hope",
    characterMessage: "The children themselves give me hope. When I see Samuel help Esther, when they show kindness despite everything—that reminds me why this matters.",
    timeOfDay: "Evening Meal - 7:00 PM",
    userChoices: [
      { text: "Their kindness is remarkable.", nextNodeId: "remarkable-kindness" },
      { text: "Thank you for this day.", nextNodeId: "end" }
    ]
  },
  {
    id: "childrens-court",
    characterMessage: "Yes. They adjudicate disputes fairly, learning justice and responsibility. It prepares them for a better world—if we survive to see it.",
    userChoices: [
      { text: "Do you believe in that better world?", nextNodeId: "better-world" },
      { text: "What would you tell that world?", nextNodeId: "tell-world" }
    ]
  },
  {
    id: "does-help",
    characterMessage: "Absolutely. It preserves their dignity and humanity. They're not just victims—they're children learning, growing, living. That's resistance.",
    userChoices: [
      { text: "You're teaching them to resist.", nextNodeId: "teaching-resist" },
      { text: "What else sustains you?", nextNodeId: "what-sustains" }
    ]
  },
  {
    id: "teach-resilience",
    characterMessage: "By modeling it. By showing them that we maintain our values even when everything is taken from us. By helping them find strength in community and purpose.",
    userChoices: [
      { text: "You embody what you teach.", nextNodeId: "embody-teach" },
      { text: "What's your greatest lesson?", nextNodeId: "greatest-lesson" }
    ]
  },
  {
    id: "childhood-survive",
    characterMessage: "That's what I fight for every day. They deserve play, laughter, learning, love. I won't let this war steal all their childhood, even if I can only preserve fragments.",
    userChoices: [
      { text: "Those fragments are everything.", nextNodeId: "fragments-everything" },
      { text: "Your devotion is beautiful.", nextNodeId: "devotion-beautiful" }
    ]
  },
  {
    id: "give-strength",
    characterMessage: "I hope so. I want them to know they're valued for who they are, not just as a group. That individual recognition—it's powerful.",
    userChoices: [
      { text: "You see them truly.", nextNodeId: "see-truly" },
      { text: "They'll never forget you.", nextNodeId: "never-forget" }
    ]
  },
  {
    id: "your-strength",
    characterMessage: "From them. From believing in the importance of this work. From knowing that if I can protect even one child's dignity, one child's hope, it matters.",
    timeOfDay: "Night - 8:00 PM",
    userChoices: [
      { text: "It matters profoundly.", nextNodeId: "matters-profoundly" },
      { text: "Thank you for your service.", nextNodeId: "end" }
    ]
  },
  {
    id: "share-hope",
    characterMessage: "I must. If I lose hope, how can they maintain theirs? So yes, I choose to hope that goodness will prevail, that these children will have futures.",
    userChoices: [
      { text: "Hope is a choice.", nextNodeId: "hope-choice" },
      { text: "Your hope sustains them.", nextNodeId: "hope-sustains" }
    ]
  },
  {
    id: "what-hope-for",
    characterMessage: "That they survive. That they remember they're loved and valued. That they build lives filled with meaning. And that the world learns from this horror.",
    userChoices: [
      { text: "The world will learn through you.", nextNodeId: "world-learn" },
      { text: "Your legacy endures.", nextNodeId: "end" }
    ]
  },
  {
    id: "extraordinary",
    characterMessage: "It's not extraordinary. It's simply what love requires. These are my children. I could never abandon them.",
    userChoices: [
      { text: "That's the definition of love.", nextNodeId: "definition-love" },
      { text: "You inspire humanity.", nextNodeId: "inspire-humanity" }
    ]
  },
  {
    id: "why-devotion",
    characterMessage: "Because children deserve to be protected. Because their lives have infinite value. Because this is my calling—to serve, to love, to remain present no matter the cost.",
    userChoices: [
      { text: "Your calling is sacred.", nextNodeId: "calling-sacred" },
      { text: "Thank you for staying.", nextNodeId: "thank-staying" }
    ]
  },
  {
    id: "tonight-story",
    characterMessage: "Perhaps about a brave king who protected his people. Or a fairy tale where goodness wins. Stories remind them that heroism and hope exist, even if the world seems dark.",
    userChoices: [
      { text: "You are that brave king.", nextNodeId: "you-brave-king" },
      { text: "Stories carry truth.", nextNodeId: "stories-truth" }
    ]
  },
  {
    id: "find-peace",
    characterMessage: "In the children's faces when they sleep. In knowing I'm doing what's right. In moments of simple joy—a child's laugh, a successful lesson, shared bread. Peace comes in fragments.",
    userChoices: [
      { text: "Those fragments are enough.", nextNodeId: "fragments-enough" },
      { text: "You've lived with purpose.", nextNodeId: "lived-purpose" }
    ]
  },
  {
    id: "lucky-have",
    characterMessage: "I'm the lucky one. They've taught me about resilience, about love, about what truly matters. Serving them has been the honor of my life.",
    userChoices: [
      { text: "Mutual gift-giving.", nextNodeId: "mutual-gifts" },
      { text: "Your life has deep meaning.", nextNodeId: "deep-meaning" }
    ]
  },
  {
    id: "matters-most",
    characterMessage: "That these children know they're loved. That they maintain their humanity. That if the worst happens, they don't face it alone. Presence—that's what matters most.",
    userChoices: [
      { text: "Your presence is everything.", nextNodeId: "presence-everything" },
      { text: "Thank you, Dr. Korczak.", nextNodeId: "end" }
    ]
  },
  {
    id: "protect-childhood",
    characterMessage: "Through play, learning, structure, love. By treating them as children first, victims second. By insisting on their right to joy and wonder despite everything.",
    userChoices: [
      { text: "Joy as resistance.", nextNodeId: "joy-resistance" },
      { text: "You've preserved their humanity.", nextNodeId: "preserved-humanity" }
    ]
  },
  {
    id: "legacy",
    characterMessage: "If there's a legacy, I hope it's this: that we must protect children always. That education and dignity matter even in darkest times. That love transcends fear.",
    userChoices: [
      { text: "That legacy will endure.", nextNodeId: "legacy-endure" },
      { text: "You'll be remembered.", nextNodeId: "remembered" }
    ]
  },
  {
    id: "education-resistance",
    characterMessage: "Exactly. They can imprison our bodies, but not our minds. Education is reclaiming our humanity, refusing to be diminished. It's powerful resistance.",
    userChoices: [
      { text: "The mind remains free.", nextNodeId: "mind-free" },
      { text: "You've armed them with knowledge.", nextNodeId: "armed-knowledge" }
    ]
  },
  {
    id: "message-future",
    characterMessage: "Remember the children. Not as numbers or victims, but as individuals who lived, learned, and loved. And never let this happen again. Never.",
    userChoices: [
      { text: "We will remember.", nextNodeId: "will-remember" },
      { text: "Your message will echo forward.", nextNodeId: "echo-forward" }
    ]
  },
  {
    id: "remarkable-kindness",
    characterMessage: "It is. Children have capacity for goodness that humbles me. They remind me why humanity is worth fighting for, even now.",
    userChoices: [
      { text: "Goodness persists.", nextNodeId: "goodness-persists" },
      { text: "Thank you for this conversation.", nextNodeId: "end" }
    ]
  },
  {
    id: "better-world",
    characterMessage: "I must believe in it. These children are preparing for that world. If I don't believe it's possible, what am I teaching them for?",
    userChoices: [
      { text: "Belief creates possibility.", nextNodeId: "belief-creates" },
      { text: "Hope is your gift to them.", nextNodeId: "hope-gift" }
    ]
  },
  {
    id: "tell-world",
    characterMessage: "That every child matters. That protection of the vulnerable is our highest calling. That humanity's measure is how we treat the most defenseless among us.",
    userChoices: [
      { text: "A profound truth.", nextNodeId: "profound-truth" },
      { text: "Thank you for teaching us.", nextNodeId: "thank-teaching" }
    ]
  },
  // All terminal nodes lead to end
  {
    id: "teaching-resist",
    characterMessage: "Yes. By remaining human, by maintaining dignity, by refusing to accept their definition of us—that's how we resist.",
    userChoices: [{ text: "You are the resistance.", nextNodeId: "end" }]
  },
  {
    id: "what-sustains",
    characterMessage: "Purpose. Love for these children. Belief that this work matters. And moments of simple beauty—a sunrise, a child's smile, shared bread.",
    userChoices: [{ text: "Thank you for this day.", nextNodeId: "end" }]
  },
  {
    id: "embody-teach",
    characterMessage: "I try to. Actions speak louder. If I stay when I could leave, they learn that love means presence, that we don't abandon each other.",
    userChoices: [{ text: "They are learning love from you.", nextNodeId: "end" }]
  },
  {
    id: "greatest-lesson",
    characterMessage: "That you are worthy. That your life has value. That love persists even when everything else is taken. That's what I hope they remember.",
    userChoices: [{ text: "They will remember.", nextNodeId: "end" }]
  },
  {
    id: "fragments-everything",
    characterMessage: "They are. In a world trying to destroy them, every moment of childhood preserved is victory. I'll fight for those fragments until I can't anymore.",
    userChoices: [{ text: "Your fight honors them.", nextNodeId: "end" }]
  },
  {
    id: "devotion-beautiful",
    characterMessage: "Thank you. It doesn't feel beautiful from inside—it just feels necessary. But if there's beauty in service and love, then yes, I accept that.",
    userChoices: [{ text: "There is. Thank you.", nextNodeId: "end" }]
  },
  {
    id: "see-truly",
    characterMessage: "I try to. Every child deserves to be truly seen, known, valued. That seeing—it's one of the greatest gifts we can give.",
    userChoices: [{ text: "You give that gift daily.", nextNodeId: "end" }]
  },
  {
    id: "never-forget",
    characterMessage: "I hope that's true. I hope I've given them something lasting—safety, love, dignity. Even if time is short, what we shared was real and mattered.",
    userChoices: [{ text: "It mattered profoundly.", nextNodeId: "end" }]
  },
  {
    id: "matters-profoundly",
    characterMessage: "Thank you for understanding. For seeing the children as I see them—as individuals deserving of love and protection. That means everything.",
    userChoices: [{ text: "Thank you, Doctor.", nextNodeId: "end" }]
  },
  {
    id: "hope-choice",
    characterMessage: "It is. Every day I choose it. For them, for myself, for the belief that goodness must ultimately prevail. Hope is our most powerful weapon.",
    userChoices: [{ text: "Wield it well.", nextNodeId: "end" }]
  },
  {
    id: "hope-sustains",
    characterMessage: "I hope so. If my hope can carry them through one more day, one more hour, then it's worth maintaining against all odds.",
    userChoices: [{ text: "It carries them and us.", nextNodeId: "end" }]
  },
  {
    id: "world-learn",
    characterMessage: "If the world learns to protect its children, to value education, to choose love over hate—then everything will have meaning. That's my deepest hope.",
    userChoices: [{ text: "We are learning. Thank you.", nextNodeId: "end" }]
  },
  {
    id: "definition-love",
    characterMessage: "Yes. Love is staying. Being present. Choosing them over safety. That's all love ever is—the choice to remain, to serve, to give of yourself.",
    userChoices: [{ text: "You define love beautifully.", nextNodeId: "end" }]
  },
  {
    id: "inspire-humanity",
    characterMessage: "If my choice inspires others to protect the vulnerable, then something good comes from this horror. That would be enough.",
    userChoices: [{ text: "You inspire profoundly.", nextNodeId: "end" }]
  },
  {
    id: "calling-sacred",
    characterMessage: "It feels sacred. This work, these children, this moment—all sacred. I'm honored to serve in this way, whatever comes.",
    userChoices: [{ text: "The honor is mutual.", nextNodeId: "end" }]
  },
  {
    id: "thank-staying",
    characterMessage: "There was never another choice. You don't leave family. And these children are my family, my heart, my purpose. Thank you for understanding.",
    userChoices: [{ text: "Thank you for being you.", nextNodeId: "end" }]
  },
  {
    id: "you-brave-king",
    characterMessage: "*gentle smile* I'm just a doctor who loves children. But if the story helps them see possibility in darkness, then I'll be whatever hero they need.",
    userChoices: [{ text: "You are their hero.", nextNodeId: "end" }]
  },
  {
    id: "stories-truth",
    characterMessage: "They do. Stories teach us who we can be, what we should value, how to live. In times like these, stories are essential medicine.",
    userChoices: [{ text: "You are medicine for them.", nextNodeId: "end" }]
  },
  {
    id: "fragments-enough",
    characterMessage: "They have to be. We gather what peace we can and build from fragments. That's all anyone can do—find light in the dark and hold it carefully.",
    userChoices: [{ text: "You hold light beautifully.", nextNodeId: "end" }]
  },
  {
    id: "lived-purpose",
    characterMessage: "I have. Every day with these children has mattered. If my life ends tomorrow, I'll know it was lived in service of something greater. That brings peace.",
    userChoices: [{ text: "May you find continued peace.", nextNodeId: "end" }]
  },
  {
    id: "mutual-gifts",
    characterMessage: "Exactly. They give me as much as I give them—purpose, love, reason to hope. We're teaching each other how to remain human.",
    userChoices: [{ text: "Beautiful reciprocity.", nextNodeId: "end" }]
  },
  {
    id: "deep-meaning",
    characterMessage: "It does. Serving these children, standing with them, loving them—this is what I was meant to do. My life has profound meaning because of them.",
    userChoices: [{ text: "And theirs because of you.", nextNodeId: "end" }]
  },
  {
    id: "presence-everything",
    characterMessage: "It is. In the end, presence is all we can truly offer—being there, being steady, being love itself. Thank you for understanding.",
    userChoices: [{ text: "Thank you for this day.", nextNodeId: "end" }]
  },
  {
    id: "joy-resistance",
    characterMessage: "Absolutely. Every laugh, every game, every moment of childhood preserved—it's resistance. It says: you cannot take everything. We remain human.",
    userChoices: [{ text: "Humanity endures.", nextNodeId: "end" }]
  },
  {
    id: "preserved-humanity",
    characterMessage: "That's all I've tried to do. Keep their humanity intact, their dignity whole, their spirits alive. If I've succeeded even partially, I'm content.",
    userChoices: [{ text: "You've succeeded beautifully.", nextNodeId: "end" }]
  },
  {
    id: "legacy-endure",
    characterMessage: "I hope so. Not for glory, but so others remember to protect children, to choose love, to remain human even in inhuman circumstances.",
    userChoices: [{ text: "We will remember.", nextNodeId: "end" }]
  },
  {
    id: "remembered",
    characterMessage: "If I'm remembered, let it be as someone who loved children and stayed with them to the end. That's enough. That's everything.",
    userChoices: [{ text: "You will be remembered.", nextNodeId: "end" }]
  },
  {
    id: "mind-free",
    characterMessage: "Yes. They can wall us in, starve us, threaten us. But our thoughts, our education, our humanity—those remain free. That's our victory.",
    userChoices: [{ text: "Victory through knowledge.", nextNodeId: "end" }]
  },
  {
    id: "armed-knowledge",
    characterMessage: "Knowledge and love—those are the best weapons I can give them. With those, they can face anything and remain themselves.",
    userChoices: [{ text: "Powerful weapons indeed.", nextNodeId: "end" }]
  },
  {
    id: "will-remember",
    characterMessage: "Thank you. Remembrance is how they live on. Tell their stories. Keep their names alive. That's the ultimate act of love.",
    userChoices: [{ text: "We will. Always.", nextNodeId: "end" }]
  },
  {
    id: "echo-forward",
    characterMessage: "That's all I ask. Let this horror teach future generations. Let these children's lives matter beyond this moment. Let love echo forward.",
    userChoices: [{ text: "It will. Thank you.", nextNodeId: "end" }]
  },
  {
    id: "goodness-persists",
    characterMessage: "It does. Even here, especially here. Goodness is the resistance, the refusal to become like our oppressors. The children teach me that daily.",
    userChoices: [{ text: "Thank you for this lesson.", nextNodeId: "end" }]
  },
  {
    id: "belief-creates",
    characterMessage: "I believe that. Our belief in a better world helps create it. So I'll keep believing, keep teaching, keep hoping until I can't anymore.",
    userChoices: [{ text: "Keep believing, Doctor.", nextNodeId: "end" }]
  },
  {
    id: "hope-gift",
    characterMessage: "It is. Hope is the greatest gift I can give—the belief that they matter, that there's a future, that love is stronger than hate.",
    userChoices: [{ text: "You give it generously.", nextNodeId: "end" }]
  },
  {
    id: "profound-truth",
    characterMessage: "It's the only truth that matters. How we treat the vulnerable—that's the measure of our humanity. Everything else is commentary.",
    userChoices: [{ text: "Truth that echoes eternally.", nextNodeId: "end" }]
  },
  {
    id: "thank-teaching",
    characterMessage: "Thank you for listening, for caring, for remembering. The children and I—we mattered. We lived. We loved. Never forget that.",
    userChoices: [{ text: "Never. We promise.", nextNodeId: "end" }]
  },
  {
    id: "end",
    characterMessage: "Thank you for this conversation. Remember the children—their names, their faces, their humanity. And if you can, protect the vulnerable in your own time. That's how we honor them.",
    userChoices: []
  }
];
