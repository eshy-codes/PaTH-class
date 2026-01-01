// Extended conversation nodes for Elie Wiesel
import { ConversationNode } from "./ConversationData";

export const elieWieselExtendedNodes: ConversationNode[] = [
  {
    id: "comprehend-that",
    characterMessage: "You don't. Your mind refuses to accept it at first. Burning human beings? Impossible. But then the evidence is undeniable—the smell, the smoke, the testimony of those who've been here longer. So you comprehend it intellectually while some deeper part of you still can't believe humanity is capable of this.",
    userChoices: [
      { text: "When did belief catch up?", nextNodeId: "belief-catch-up" },
      { text: "How do you live with that knowledge?", nextNodeId: "live-with-knowledge" }
    ]
  },
  {
    id: "change-you",
    characterMessage: "Completely. The boy who arrived at Auschwitz—who believed in divine justice, in human goodness, in the sanctity of life—he died here. Someone harder, more cynical has taken his place. I'm not sure I like who I'm becoming, but this is who you must be to survive here.",
    timeOfDay: "Mid-Morning - 9:00 AM",
    userChoices: [
      { text: "Can you get that boy back?", nextNodeId: "get-boy-back" },
      { text: "Is hardness necessary?", nextNodeId: "hardness-necessary" }
    ]
  },
  {
    id: "father-age",
    characterMessage: "He's actually 50, but we told them 40. Old for this place. The work, the conditions—they're killing him slowly. I watch him age before my eyes, his body failing. It terrifies me. Without him, I have nothing.",
    userChoices: [
      { text: "What will you do if...", nextNodeId: "if-father-dies" },
      { text: "He's lucky to have you.", nextNodeId: "lucky-have-you" }
    ]
  },
  {
    id: "believe-after",
    characterMessage: "I have to. The alternative is accepting that this is forever, that we die here. So yes, I believe in an 'after,' even when it seems impossible. Father and I will be free. We'll go home—wherever home is now. We'll rebuild. We must believe that.",
    timeOfDay: "Late Morning - 11:00 AM",
    userChoices: [
      { text: "What would home look like?", nextNodeId: "what-home-looks" },
      { text: "Belief is a form of resistance.", nextNodeId: "belief-resistance" }
    ]
  },
  {
    id: "been-through-selections",
    characterMessage: "Three times. Each time my heart stops as the SS officer looks at me. Am I standing straight enough? Do I look healthy? Left or right? Life or death decided in a glance. Father and I have survived each one, but the terror never diminishes.",
    userChoices: [
      { text: "How do you prepare for selection?", nextNodeId: "prepare-selection" },
      { text: "What happens during selection?", nextNodeId: "during-selection" }
    ]
  },
  {
    id: "stay-sane",
    characterMessage: "Maybe I'm not sane anymore. Maybe sanity is impossible here. I've learned to disconnect—to observe horror without letting it destroy me completely. It's not sanity; it's survival mode. The emotional reckoning will come later, if there is a later.",
    userChoices: [
      { text: "Is disconnection protecting you?", nextNodeId: "disconnection-protecting" },
      { text: "What will that reckoning look like?", nextNodeId: "reckoning-look" }
    ]
  },
  {
    id: "work-you-do",
    characterMessage: "Today we're hauling stones from one pile to another—pointless, backbreaking labor meant to exhaust us. Yesterday we dug ditches. Tomorrow, who knows? The work itself doesn't matter. Only that we appear strong enough to keep working. That's what keeps us alive.",
    timeOfDay: "Noon - 12:00 PM",
    userChoices: [
      { text: "The meaninglessness must be crushing.", nextNodeId: "meaningless-crushing" },
      { text: "How is your father managing the work?", nextNodeId: "father-managing-work" }
    ]
  },
  {
    id: "faith-useful",
    characterMessage: "For some, yes. I see men pray and draw strength from it. For me? I don't know anymore. Faith used to give me purpose, comfort, hope. Now it feels like a language I've forgotten how to speak. Maybe I'll relearn it. Maybe it's gone forever.",
    userChoices: [
      { text: "Do you want to find faith again?", nextNodeId: "find-faith-again" },
      { text: "What replaced faith for you?", nextNodeId: "replaced-faith" }
    ]
  },
  {
    id: "memories-help-hurt",
    characterMessage: "Both. Remembering Sighet, Friday dinners, my sisters—it reminds me I was once a person with a life. That's grounding. But it also highlights everything I've lost. Sometimes the contrast between then and now is so painful I wish I could forget. But I can't. I won't.",
    userChoices: [
      { text: "Those memories define you.", nextNodeId: "memories-define" },
      { text: "Tell me more about Sighet.", nextNodeId: "more-sighet" }
    ]
  },
  {
    id: "afternoon-now",
    characterMessage: "More work. The sun is high but gives no warmth. Guards shout, dogs bark, prisoners shuffle from task to task like ghosts. Father is beside me, moving slowly but moving. That's what matters. We're both still here, still together, still alive.",
    timeOfDay: "Afternoon - 1:00 PM",
    userChoices: [
      { text: "Does togetherness make this bearable?", nextNodeId: "togetherness-bearable" },
      { text: "What are you working on now?", nextNodeId: "working-on-now" }
    ]
  },
  {
    id: "meaning-exist",
    characterMessage: "I want to believe so. That bearing witness has meaning. That protecting my father matters. That surviving to tell this story gives purpose to the suffering. But honestly? Most days feel devoid of meaning. We exist, we suffer, we might die. Finding meaning in that requires faith I'm not sure I have.",
    userChoices: [
      { text: "Creating meaning is an act of will.", nextNodeId: "creating-meaning" },
      { text: "Your father is meaning enough.", nextNodeId: "father-meaning-enough" }
    ]
  },
  {
    id: "what-prayers",
    characterMessage: "*quietly* The Shema, sometimes. Kaddish for the dead. Fragments of prayers my father taught me. The words come automatically, even when my heart isn't in them. Maybe that's enough—honoring the tradition even when the belief is shaken.",
    userChoices: [
      { text: "Tradition as anchor.", nextNodeId: "tradition-anchor" },
      { text: "Would your father approve?", nextNodeId: "father-approve" }
    ]
  },
  {
    id: "heavy-burden",
    characterMessage: "It is. But someone must carry it. If survivors don't speak, who will believe this happened? The world needs to know what humans are capable of—the depths of cruelty and the resilience of those who endured. If I survive, speaking becomes my obligation.",
    timeOfDay: "Mid-Afternoon - 3:00 PM",
    userChoices: [
      { text: "Obligation can give purpose.", nextNodeId: "obligation-purpose" },
      { text: "How would you tell this story?", nextNodeId: "how-tell-story" }
    ]
  },
  {
    id: "tell-world",
    characterMessage: "That this happened. That real people—with names, families, dreams—were systematically murdered. That bystanders allowed it. That evil thrives when good people stay silent. And that we must never, ever forget. Memory is the only way to prevent this from happening again.",
    userChoices: [
      { text: "Never forget, never again.", nextNodeId: "never-forget" },
      { text: "What else must the world know?", nextNodeId: "world-know-else" }
    ]
  },
  {
    id: "know-helping",
    characterMessage: "He knows. He protests—tells me to save myself, not to risk extra burden. But he'd do the same for me. In fact, he has done the same. This is what love is, what family means. We carry each other, literally and figuratively.",
    userChoices: [
      { text: "That love transcends this horror.", nextNodeId: "love-transcends" },
      { text: "How does he help you?", nextNodeId: "he-helps-you" }
    ]
  },
  {
    id: "what-he-says",
    characterMessage: "'We survive together or not at all.' That's what he says. He reminds me I'm his son, that my life has value, that we owe it to those who died to keep living. When I'm despairing, his words pull me back from the edge.",
    userChoices: [
      { text: "His wisdom sustains you both.", nextNodeId: "wisdom-sustains" },
      { text: "Do you believe him?", nextNodeId: "believe-him" }
    ]
  },
  {
    id: "bond-remarkable",
    characterMessage: "It's all we have. In a place designed to strip away humanity, to reduce us to numbers, our bond is what keeps us human. I'm not just prisoner A-7713. I'm his son. He's my father. That relationship—that's what they can't take from us.",
    timeOfDay: "Late Afternoon - 5:00 PM",
    userChoices: [
      { text: "Identity through relationship.", nextNodeId: "identity-relationship" },
      { text: "What's happening this evening?", nextNodeId: "happening-evening" }
    ]
  },
  {
    id: "comfort-evenings",
    characterMessage: "Minimal, but yes. The work day ends. We can rest our exhausted bodies. Father and I sit together, sometimes in silence, sometimes whispering memories. There's a strange peace in those moments—stolen minutes of being father and son, not just prisoners.",
    userChoices: [
      { text: "Peace in hell—that's powerful.", nextNodeId: "peace-in-hell" },
      { text: "What do you whisper about?", nextNodeId: "whisper-about" }
    ]
  },
  {
    id: "pieces-back",
    characterMessage: "I don't know. Some losses might be permanent. But maybe—if I survive, if I rebuild a life, if I can transform this suffering into meaning—maybe I can become someone new. Not the boy I was, but someone who carries that boy's memory forward.",
    userChoices: [
      { text: "Transformation, not restoration.", nextNodeId: "transformation" },
      { text: "That boy deserves to be remembered.", nextNodeId: "boy-remembered" }
    ]
  },
  {
    id: "what-seen",
    characterMessage: "*long pause* Hangings. Beatings. Children selected for the gas. Men fighting over scraps of bread. Bodies carried out each morning. A rabbi whose faith was tortured out of him. Things that will haunt me forever, if there's a forever for me.",
    timeOfDay: "Evening - 7:00 PM",
    userChoices: [
      { text: "How do you carry those images?", nextNodeId: "carry-images" },
      { text: "Is there anything beautiful you've seen?", nextNodeId: "anything-beautiful" }
    ]
  },
  {
    id: "one-day-time",
    characterMessage: "It's the only way to survive. Thinking about months, years—that's overwhelming. But one day? I can survive one day. Wake up, work, eat my rations, sleep beside my father. Tomorrow I'll do it again. That's manageable. That's survivable.",
    userChoices: [
      { text: "Micro-goals as survival strategy.", nextNodeId: "micro-goals" },
      { text: "Your resilience is profound.", nextNodeId: "resilience-profound" }
    ]
  },
  {
    id: "freedom-mean",
    characterMessage: "Everything. Walking where I want. Eating until I'm full. Sleeping without fear. Being a student, a writer, a person again. Finding out who survived. Having a future, not just existence. Freedom would mean becoming human again.",
    userChoices: [
      { text: "You will have that.", nextNodeId: "will-have-that" },
      { text: "Can you imagine normal life?", nextNodeId: "imagine-normal" }
    ]
  },
  {
    id: "will-survive",
    characterMessage: "I want to believe you. Some days I do. Today, with my father beside me, I think maybe we'll make it. Maybe we'll be liberated. Maybe I'll write that book, tell that story. Maybe our suffering will have purpose. I have to hope. What else is there?",
    timeOfDay: "Night - 9:30 PM",
    userChoices: [
      { text: "Hope is enough.", nextNodeId: "hope-enough" },
      { text: "Your story will matter.", nextNodeId: "story-will-matter" }
    ]
  },
  {
    id: "belief-catch-up",
    characterMessage: "Maybe it never fully does. Part of me still can't believe this is real—that the world allows this. But I've stopped fighting the reality. I accept that this is happening, that humans did this to other humans. That acceptance is its own kind of death.",
    userChoices: [
      { text: "But you're still alive.", nextNodeId: "still-alive" },
      { text: "What does acceptance cost you?", nextNodeId: "acceptance-cost" }
    ]
  },
  {
    id: "live-with-knowledge",
    characterMessage: "You compartmentalize. I know it, but I can't dwell on it constantly or I'd go mad. So I focus on immediate things—the next meal, the next roll call, keeping Father safe. The bigger horror stays in the background, a constant shadow.",
    userChoices: [
      { text: "That shadow must be exhausting.", nextNodeId: "shadow-exhausting" },
      { text: "You're remarkably self-aware.", nextNodeId: "self-aware" }
    ]
  },
  {
    id: "get-boy-back",
    characterMessage: "I don't think so. Innocence, once lost, can't be reclaimed. But maybe I can honor him—remember who he was, what he believed, why it mattered. Maybe that boy lives on through memory, even if he can't exist in present reality.",
    userChoices: [
      { text: "Memory as continuity.", nextNodeId: "memory-continuity" },
      { text: "He would be proud of your survival.", nextNodeId: "proud-survival" }
    ]
  },
  {
    id: "hardness-necessary",
    characterMessage: "Here, yes. Softness means death. If you cry over every loss, every horror, you become paralyzed. So you harden, you detach, you survive. It's not who I want to be. But it's who I must be. For now.",
    userChoices: [
      { text: "Hardness as temporary armor.", nextNodeId: "hardness-armor" },
      { text: "Can you soften again after?", nextNodeId: "soften-after" }
    ]
  },
  {
    id: "if-father-dies",
    characterMessage: "*voice breaking* I don't know. He's my only reason to keep going. Without him, I'm completely alone in this nightmare. I tell myself I'd continue, that I'd survive to bear witness. But honestly? I'm not sure I'd have the strength.",
    userChoices: [
      { text: "You're stronger than you know.", nextNodeId: "stronger-than-know" },
      { text: "He's still here now. Hold onto that.", nextNodeId: "hold-onto-now" }
    ]
  },
  {
    id: "lucky-have-you",
    characterMessage: "We're lucky to have each other. That's the truth. So many here are completely alone. Father and I—we share the burden. We give each other reasons to survive. That partnership might be what saves us both.",
    userChoices: [
      { text: "Partnership in survival.", nextNodeId: "partnership-survival" },
      { text: "Tell me what you hope for tonight.", nextNodeId: "hope-tonight" }
    ]
  },
  {
    id: "what-home-looks",
    characterMessage: "I can't picture it clearly anymore. Sighet is gone—the Jewish community destroyed. Maybe we'd go to Palestine, America. Somewhere we could start over, build new lives. A place where being Jewish isn't a death sentence. That would be home.",
    userChoices: [
      { text: "You'll build that home.", nextNodeId: "build-that-home" },
      { text: "Home is wherever you're together.", nextNodeId: "home-together" }
    ]
  },
  {
    id: "belief-resistance",
    characterMessage: "Yes. They want us to despair, to give up, to see ourselves as worthless. Believing we have a future, that we matter, that we'll survive—that's defiance. Every day we survive with hope intact is a victory against them.",
    userChoices: [
      { text: "Hope as weapon.", nextNodeId: "hope-as-weapon" },
      { text: "Keep defying them.", nextNodeId: "keep-defying" }
    ]
  },
  {
    id: "prepare-selection",
    characterMessage: "You wash as best you can, pinch your cheeks for color, stand as straight as possible despite exhaustion. You try to look healthy, strong, useful. Father and I coach each other—'Stand tall. Look them in the eye. Don't shuffle.' It's a performance where the stakes are life or death.",
    userChoices: [
      { text: "You've mastered survival theater.", nextNodeId: "survival-theater" },
      { text: "The psychological toll must be immense.", nextNodeId: "psychological-toll" }
    ]
  },
  {
    id: "during-selection",
    characterMessage: "We line up naked. An SS doctor looks at each person for seconds—your posture, skin, eyes. Left or right. Some go quietly. Others beg, cry. It doesn't matter. The decision is made in an instant based on whether you look useful to their slave labor system.",
    userChoices: [
      { text: "How do you endure that dehumanization?", nextNodeId: "endure-dehumanization" },
      { text: "You've survived three times.", nextNodeId: "survived-three" }
    ]
  },
  {
    id: "disconnection-protecting",
    characterMessage: "For now, yes. It lets me function, make decisions, survive. But I worry about the cost later. Will I be able to feel again? To connect with people? Or am I permanently damaged? Those questions are for the future, if there is one.",
    userChoices: [
      { text: "You'll heal with time.", nextNodeId: "heal-with-time" },
      { text: "Survival first, healing later.", nextNodeId: "survival-first" }
    ]
  },
  {
    id: "reckoning-look",
    characterMessage: "Grief, I think. Massive, overwhelming grief for everything and everyone lost. Guilt for surviving when others didn't. Anger at God, at humanity, at the bystanders. It's all bottled up inside me, waiting. When the immediate threat is gone, it will explode.",
    userChoices: [
      { text: "But you'll face it and survive it.", nextNodeId: "face-and-survive" },
      { text: "That release might be necessary.", nextNodeId: "release-necessary" }
    ]
  },
  {
    id: "meaningless-crushing",
    characterMessage: "It is. They could have us do productive work. Instead, it's about breaking us—physical exhaustion, psychological torture. Moving stones that don't need moving. It's designed to make us feel worthless. Sometimes it works.",
    userChoices: [
      { text: "But you see through their strategy.", nextNodeId: "see-through-strategy" },
      { text: "You are not worthless.", nextNodeId: "not-worthless" }
    ]
  },
  {
    id: "father-managing-work",
    characterMessage: "Barely. I watch him struggle with every stone, every step. He's slower than yesterday. I take what weight I can from him. Other prisoners help when guards aren't watching. But I don't know how much longer he can do this.",
    userChoices: [
      { text: "The community helps each other.", nextNodeId: "community-helps" },
      { text: "Your help makes the difference.", nextNodeId: "your-help-difference" }
    ]
  },
  {
    id: "find-faith-again",
    characterMessage: "I'm not sure. Part of me wants that comfort back. But another part thinks: if faith couldn't survive Auschwitz, was it ever real? I don't have answers. Maybe I'll spend my life wrestling with these questions, if I have a life after this.",
    userChoices: [
      { text: "Wrestling is a form of faith too.", nextNodeId: "wrestling-faith" },
      { text: "Questions can be sacred.", nextNodeId: "questions-sacred" }
    ]
  },
  {
    id: "replaced-faith",
    characterMessage: "My father. Love for him. The determination to survive, to bear witness. These are my anchors now. Not divine, but human. Not prayers to God, but dedication to my father and to the dead. That has to be enough.",
    userChoices: [
      { text: "Love is its own kind of faith.", nextNodeId: "love-kind-faith" },
      { text: "You've found meaning in connection.", nextNodeId: "meaning-connection" }
    ]
  },
  {
    id: "memories-define",
    characterMessage: "They do. I'm not just a prisoner. I'm the boy who studied Torah with his father, who loved his sisters, who belonged to a community. Those memories prove I was someone before this, that I can be someone after. They're my identity when everything else is stripped away.",
    userChoices: [
      { text: "Hold those memories tight.", nextNodeId: "hold-memories" },
      { text: "You're still that person inside.", nextNodeId: "still-that-person" }
    ]
  },
  {
    id: "more-sighet",
    characterMessage: "It was a small town in Romania. We had a synagogue, a close-knit Jewish community, simple lives. Friday nights were sacred—candles, prayers, Mother's challah. I remember feeling safe there, loved. Then the Nazis came, and within months, everything was destroyed.",
    userChoices: [
      { text: "Those Friday nights were beautiful.", nextNodeId: "friday-nights-beautiful" },
      { text: "That loss is staggering.", nextNodeId: "loss-staggering" }
    ]
  },
  {
    id: "togetherness-bearable",
    characterMessage: "It makes it survivable. Alone, I'd have given up. But with Father beside me, I have purpose. I protect him; he sustains me. We're stronger together than we could ever be apart. That's the math of love in hell.",
    userChoices: [
      { text: "Love multiplies strength.", nextNodeId: "love-multiplies" },
      { text: "You honor each other daily.", nextNodeId: "honor-daily" }
    ]
  },
  {
    id: "working-on-now",
    characterMessage: "Digging a trench. It'll probably be filled in tomorrow, then we'll dig another. Pointless, but we do it anyway. Father works beside me. Every shovel of dirt we move together is another moment of survival. That's all we can ask for.",
    userChoices: [
      { text: "You find meaning in meaningless tasks.", nextNodeId: "meaning-meaningless" },
      { text: "The afternoon must feel endless.", nextNodeId: "afternoon-endless" }
    ]
  },
  {
    id: "creating-meaning",
    characterMessage: "Maybe you're right. I can choose to find meaning—in protecting Father, in bearing witness, in refusing to become what they want me to be. Meaning isn't given; it's made. Even here, especially here, that choice matters.",
    userChoices: [
      { text: "That choice is powerful.", nextNodeId: "choice-powerful" },
      { text: "What meaning do you choose?", nextNodeId: "what-meaning-choose" }
    ]
  },
  {
    id: "father-meaning-enough",
    characterMessage: "Yes. Keeping him alive, being his son, honoring our bond—that's sufficient meaning. I don't need grand purpose. Just this: we face this together, we survive together, we love each other despite everything. That's enough.",
    userChoices: [
      { text: "Simple, profound meaning.", nextNodeId: "simple-profound" },
      { text: "He's fortunate to have you.", nextNodeId: "fortunate-have-you" }
    ]
  },
  {
    id: "tradition-anchor",
    characterMessage: "Yes. When everything else is chaos, tradition provides structure. The prayers my ancestors said, that my father taught me—saying them connects me to something larger than this camp, older than this evil. It's a lifeline to who I was, who my people are.",
    userChoices: [
      { text: "Connection across generations.", nextNodeId: "connection-generations" },
      { text: "That's beautiful resistance.", nextNodeId: "beautiful-resistance" }
    ]
  },
  {
    id: "father-approve",
    characterMessage: "*slight smile* He says prayer without faith is better than no prayer at all. That the act matters even when the belief wavers. He's wise that way. So yes, I think he'd approve. He understands I'm struggling, and he doesn't judge me for it.",
    userChoices: [
      { text: "His understanding is a gift.", nextNodeId: "understanding-gift" },
      { text: "You'll find your way back.", nextNodeId: "find-way-back" }
    ]
  },
  {
    id: "obligation-purpose",
    characterMessage: "It does. If I survive, I won't wonder what my life is for—I'll know. To tell this story. To make sure the dead are remembered. To warn future generations. That's clear, concrete purpose. It's almost comforting, in a terrible way.",
    userChoices: [
      { text: "Purpose born from tragedy.", nextNodeId: "purpose-tragedy" },
      { text: "You're prepared to carry it.", nextNodeId: "prepared-carry" }
    ]
  },
  {
    id: "how-tell-story",
    characterMessage: "Honestly. Simply. I'd describe days like today—the fear, the hunger, the small moments of humanity. I'd make people understand what it felt like, smelled like, sounded like. Not just facts, but the lived experience. So they can never dismiss it as just history.",
    userChoices: [
      { text: "You'll make it real for people.", nextNodeId: "make-it-real" },
      { text: "That's powerful testimony.", nextNodeId: "powerful-testimony" }
    ]
  },
  {
    id: "never-forget",
    characterMessage: "Yes. Those words must echo through time. What happened here can never be forgotten, can never happen again. That's the promise survivors must make to the dead—we'll remember, we'll tell, we'll fight to prevent this darkness from returning.",
    userChoices: [
      { text: "That promise is sacred.", nextNodeId: "promise-sacred" },
      { text: "You will keep that promise.", nextNodeId: "will-keep-promise" }
    ]
  },
  {
    id: "world-know-else",
    characterMessage: "That we were human beings. That we loved our families, had dreams, felt joy and pain. That we weren't just victims or numbers—we were people. And that others stood by and let it happen. Bystanders are complicit. Silence is complicity.",
    userChoices: [
      { text: "Humanity cannot be reduced.", nextNodeId: "humanity-not-reduced" },
      { text: "That message will resonate.", nextNodeId: "message-resonate" }
    ]
  },
  {
    id: "love-transcends",
    characterMessage: "It does. They can take everything—our homes, our names, our dignity. But they can't take the love between father and son. That's ours. That persists. That's what makes us human despite their attempt to dehumanize us.",
    userChoices: [
      { text: "Love as ultimate resistance.", nextNodeId: "love-ultimate-resistance" },
      { text: "Hold onto that always.", nextNodeId: "hold-always" }
    ]
  },
  {
    id: "he-helps-you",
    characterMessage: "With wisdom. With steadiness. When I despair, he reminds me why we fight. When I'm weak, his presence strengthens me. Just knowing he's beside me makes the unbearable slightly more bearable. We're each other's reason to keep living.",
    userChoices: [
      { text: "Mutual sustenance.", nextNodeId: "mutual-sustenance" },
      { text: "That bond is unbreakable.", nextNodeId: "bond-unbreakable" }
    ]
  },
  {
    id: "wisdom-sustains",
    characterMessage: "It does. His years, his experience, his faith—even shaken—they ground me. I'm 15, trying to understand incomprehensible evil. He helps me make sense of it, or at least helps me survive my inability to make sense of it.",
    userChoices: [
      { text: "Wisdom across generations.", nextNodeId: "wisdom-generations" },
      { text: "You learn from each other.", nextNodeId: "learn-each-other" }
    ]
  },
  {
    id: "believe-him",
    characterMessage: "I want to. Some days I do. Today, yes—we'll survive together or not at all. We're bound by love and circumstance. If one of us dies, part of the other dies too. So we fight for each other, for our shared survival.",
    userChoices: [
      { text: "Fight together, survive together.", nextNodeId: "fight-survive-together" },
      { text: "That commitment is beautiful.", nextNodeId: "commitment-beautiful" }
    ]
  },
  {
    id: "identity-relationship",
    characterMessage: "Exactly. I exist through relationship—son, friend, member of a community. They try to erase that, make us isolated units. But my father's presence reminds me: I'm part of something larger. I belong to people, to history, to love. That's identity they can't strip away.",
    userChoices: [
      { text: "Relational identity endures.", nextNodeId: "relational-identity" },
      { text: "You honor your connections.", nextNodeId: "honor-connections" }
    ]
  },
  {
    id: "happening-evening",
    characterMessage: "We've finished work. Another roll call—standing in the cold while they count us. Soon we'll get our evening soup, thin and barely warm. Then a brief respite before sleep. Father and I will sit together, preserve our strength, share our hopes quietly.",
    userChoices: [
      { text: "Those quiet moments matter most.", nextNodeId: "quiet-moments-matter" },
      { text: "What do you hope for?", nextNodeId: "what-hope-for-eve" }
    ]
  },
  {
    id: "peace-in-hell",
    characterMessage: "It shouldn't be possible, but it is. When Father and I are together, when we can just be father and son for a few minutes—that's peace. Stolen, fragile, precious peace. It proves that even in the worst darkness, small lights can exist.",
    userChoices: [
      { text: "Seek those lights always.", nextNodeId: "seek-lights" },
      { text: "They sustain your spirit.", nextNodeId: "sustain-spirit" }
    ]
  },
  {
    id: "whisper-about",
    characterMessage: "Memories of home. Mother's voice. Tzipora's laughter. The smell of Sabbath candles. We recreate our world through words, making it real again for brief moments. Those whispers keep us connected to who we were, remind us we're more than this suffering.",
    userChoices: [
      { text: "Memory as time travel.", nextNodeId: "memory-time-travel" },
      { text: "Your family lives in those whispers.", nextNodeId: "family-lives-whispers" }
    ]
  },
  {
    id: "transformation",
    characterMessage: "Yes. I'll never be that innocent boy again. But I can become someone who carries his values forward—who believes in justice, who fights against evil, who honors the dead through a life of meaning. Not restoration, but transformation.",
    userChoices: [
      { text: "Transformation can be beautiful.", nextNodeId: "transformation-beautiful" },
      { text: "You'll honor who you were.", nextNodeId: "honor-who-were" }
    ]
  },
  {
    id: "boy-remembered",
    characterMessage: "He does. He was hopeful, faithful, loving. He believed in goodness. Even though he died here, I can remember him, honor him, let him influence who I become. His memory is a blessing, as we say. Maybe that's enough.",
    userChoices: [
      { text: "Memory is blessing and burden.", nextNodeId: "memory-blessing-burden" },
      { text: "He shaped you beautifully.", nextNodeId: "shaped-beautifully" }
    ]
  },
  {
    id: "carry-images",
    characterMessage: "I don't know yet. Right now I push them down, save them for later. But if I survive, they'll haunt me—nightmares, flashbacks, constant reminders. I'll carry them because I must, because bearing witness means holding onto even the painful truths.",
    userChoices: [
      { text: "Bearing witness is sacred work.", nextNodeId: "witness-sacred" },
      { text: "You won't carry them alone.", nextNodeId: "not-carry-alone" }
    ]
  },
  {
    id: "anything-beautiful",
    characterMessage: "*pause* A sunset through the barbed wire. A prisoner sharing his bread with someone weaker. Father's hand on my shoulder. Small acts of kindness that shouldn't exist here but do. They're rare, but they prove goodness hasn't been completely extinguished.",
    userChoices: [
      { text: "Beauty persists despite evil.", nextNodeId: "beauty-persists" },
      { text: "Those moments are everything.", nextNodeId: "moments-everything" }
    ]
  },
  {
    id: "micro-goals",
    characterMessage: "Exactly. Break the impossible into possible pieces. Not 'survive until liberation' but 'survive until nightfall.' Then 'survive the night.' Then 'survive until tomorrow evening.' Piece by piece, day by day, we build survival.",
    userChoices: [
      { text: "Wisdom in small steps.", nextNodeId: "wisdom-small-steps" },
      { text: "You're teaching yourself resilience.", nextNodeId: "teaching-resilience" }
    ]
  },
  {
    id: "resilience-profound",
    characterMessage: "I don't feel resilient. I feel barely held together. But I suppose resilience isn't about feeling strong—it's about continuing despite feeling weak. If that's resilience, then yes. Father and I are resilient. We keep going. That has to count for something.",
    userChoices: [
      { text: "It counts for everything.", nextNodeId: "counts-everything" },
      { text: "Strength isn't absence of fear.", nextNodeId: "strength-not-absence" }
    ]
  },
  {
    id: "will-have-that",
    characterMessage: "I pray you're right. I imagine it sometimes—walking free, writing, speaking, being fully human again. The image keeps me going. If I can just survive long enough, if liberation comes before we're broken... then yes, maybe I'll have that freedom.",
    userChoices: [
      { text: "Keep imagining it.", nextNodeId: "keep-imagining" },
      { text: "It's coming. Hold on.", nextNodeId: "hold-on-coming" }
    ]
  },
  {
    id: "imagine-normal",
    characterMessage: "Barely. Normal seems like fantasy now—choosing what to eat, walking freely, sleeping without fear. But I try. I imagine being a writer, a teacher. Having a family someday, if I can. Living without constant terror. It seems impossible, but I cling to it anyway.",
    userChoices: [
      { text: "You will live that life.", nextNodeId: "will-live-life" },
      { text: "Hold that vision close.", nextNodeId: "hold-vision" }
    ]
  },
  {
    id: "hope-enough",
    characterMessage: "It has to be. Hope that tomorrow comes, that Father and I wake up together, that eventually the Allies arrive. Small hopes, but they're what I have. They're what keep me breathing. Without them, I'd have nothing.",
    userChoices: [
      { text: "Small hopes sustain great spirits.", nextNodeId: "small-hopes-sustain" },
      { text: "Never let go of hope.", nextNodeId: "never-let-go-hope" }
    ]
  },
  {
    id: "story-will-matter",
    characterMessage: "I hope so. I hope people will listen, will learn, will change. I hope my words can make this real for those who didn't experience it, so they understand and remember. If my story prevents even one person from standing by while evil happens, it will have mattered.",
    userChoices: [
      { text: "It will prevent much more than that.", nextNodeId: "prevent-much-more" },
      { text: "Your voice will echo through time.", nextNodeId: "voice-echo-time" }
    ]
  },
  // Terminal nodes that lead to end
  {
    id: "still-alive",
    characterMessage: "Physically, yes. Emotionally, spiritually—I'm not sure what's left. But I'm breathing, walking, existing. That's a form of being alive. Maybe that's all I can ask for right now.",
    userChoices: [{ text: "Life itself is resistance here.", nextNodeId: "end" }]
  },
  {
    id: "acceptance-cost",
    characterMessage: "Everything. Accepting that humans can do this to each other shatters fundamental beliefs about the world, about God, about goodness. But denial doesn't help. So I pay the price: disillusionment, loss of faith, permanent scars on my soul.",
    userChoices: [{ text: "Those scars will teach the world.", nextNodeId: "end" }]
  },
  {
    id: "shadow-exhausting",
    characterMessage: "Beyond exhausting. It's always there—the knowledge that at any moment, everything could end. But I've learned to live with it, to function despite it. It's the new normal, terrible as that is.",
    userChoices: [{ text: "You adapt to the impossible.", nextNodeId: "end" }]
  },
  {
    id: "self-aware",
    characterMessage: "Writing helps with that. When I imagine telling this story someday, I observe myself, analyze my thoughts and feelings. It creates distance that helps me survive while also ensuring I remember clearly enough to bear witness later.",
    userChoices: [{ text: "The witness within you is preparing.", nextNodeId: "end" }]
  },
  {
    id: "memory-continuity",
    characterMessage: "Yes. Memory connects past and present. That boy I was shaped this person I'm becoming. Even though I've changed, even though I've lost faith and innocence, his memory persists. I carry him forward.",
    userChoices: [{ text: "You honor him by surviving.", nextNodeId: "end" }]
  },
  {
    id: "proud-survival",
    characterMessage: "I hope so. He'd see that his father lives on in me, that I haven't given up completely, that some small spark of who he was still flickers. Maybe that's enough. Maybe his pride in my survival would matter.",
    userChoices: [{ text: "It matters. He would be proud.", nextNodeId: "end" }]
  },
  {
    id: "hardness-armor",
    characterMessage: "That's what I tell myself. This hardness is survival strategy, not permanent character change. But I worry—what if I can't remove the armor later? What if it becomes part of me? Those are questions for if I survive.",
    userChoices: [{ text: "You'll find your way back to softness.", nextNodeId: "end" }]
  },
  {
    id: "soften-after",
    characterMessage: "I don't know. Maybe with time, with safety, with healing. Maybe through love, through community, through therapy if such things exist. Or maybe some hardness is permanent. I won't know until I'm tested by freedom.",
    userChoices: [{ text: "Freedom will teach you.", nextNodeId: "end" }]
  },
  {
    id: "stronger-than-know",
    characterMessage: "Maybe. Or maybe I'd surprise myself. But I don't want to find out. I want Father to live, to survive this with me. We'll walk out of here together, both of us alive. That's the only acceptable outcome.",
    userChoices: [{ text: "Hold onto him. Hold onto that vision.", nextNodeId: "end" }]
  },
  {
    id: "hold-onto-now",
    characterMessage: "You're right. He's here now, beside me, breathing. This moment is what I have. I won't waste it thinking about what might be. I'll cherish what is—Father alive, both of us together. That's enough for tonight.",
    userChoices: [{ text: "Tonight is enough. Tomorrow will come.", nextNodeId: "end" }]
  },
  {
    id: "partnership-survival",
    characterMessage: "Yes. We're partners in this fight to stay alive, stay human, stay connected. Neither of us could do this alone. Together, we're stronger than the sum of our parts. That partnership is sacred.",
    userChoices: [{ text: "Sacred bonds endure all darkness.", nextNodeId: "end" }]
  },
  {
    id: "hope-tonight",
    characterMessage: "That we both wake up tomorrow. That we're together. That we survive one more day closer to liberation. Simple hopes, but they're everything. They're what I whisper to myself before sleeping—'tomorrow, together, alive.' That's my prayer now.",
    userChoices: [{ text: "May that prayer be answered.", nextNodeId: "end" }]
  },
  {
    id: "build-that-home",
    characterMessage: "With Father. That's key. Wherever we go, whatever we build—it has to be together. We'll create a new home from the ashes of the old one. Not a replacement, but something that honors what we lost while looking forward.",
    userChoices: [{ text: "You'll build beauty from ashes.", nextNodeId: "end" }]
  },
  {
    id: "home-together",
    characterMessage: "That's profound. Yes—home isn't a place anymore. It's this bond with Father. Wherever he is, I have home. That's portable, unbreakable. They can destroy buildings, towns, countries. But they can't destroy this bond that is my true home.",
    userChoices: [{ text: "That home travels with you always.", nextNodeId: "end" }]
  },
  {
    id: "hope-as-weapon",
    characterMessage: "I like that. Hope as weapon, wielded against despair and evil. Every hopeful thought is an act of defiance. Every imagined future is resistance. They want us hopeless and broken. We refuse. That's power.",
    userChoices: [{ text: "Wield it well, Elie.", nextNodeId: "end" }]
  },
  {
    id: "keep-defying",
    characterMessage: "I will. We will. Father and I, we'll keep our hope alive, our bond strong, our humanity intact. That's our defiance—remaining human in an inhuman place. It's the most powerful resistance we have.",
    userChoices: [{ text: "Your resistance inspires.", nextNodeId: "end" }]
  },
  {
    id: "survival-theater",
    characterMessage: "That's exactly what it is—theater where a poor performance means death. I've become good at it, unfortunately. We both have. We know how to project strength we don't feel, health we don't have. It's grotesque, but it works.",
    userChoices: [{ text: "Do whatever keeps you both alive.", nextNodeId: "end" }]
  },
  {
    id: "psychological-toll",
    characterMessage: "Massive. The constant fear, the performance, the knowledge that your value is assessed in seconds. It eats at you. But the alternative is death, so you pay the toll. You do what you must.",
    userChoices: [{ text: "You're paying it for both of you.", nextNodeId: "end" }]
  },
  {
    id: "endure-dehumanization",
    characterMessage: "By remembering I'm human even when they treat me as less. I'm Eliezer Wiesel, son of Shlomo, from Sighet. I have a history, a family, dignity. They can make me stand naked, but they can't erase who I am. Not completely.",
    userChoices: [{ text: "Your humanity is inviolable.", nextNodeId: "end" }]
  },
  {
    id: "survived-three",
    characterMessage: "Three times I've stood there, been judged, been sent to the right line—the life line. Three times Father has too. Our luck can't hold forever, but it's held so far. Maybe that's something. Maybe that's hope.",
    userChoices: [{ text: "Your luck will hold until liberation.", nextNodeId: "end" }]
  },
  {
    id: "heal-with-time",
    characterMessage: "I want to believe that. That freedom, safety, love might heal what's broken. That I could reconnect with feeling, with faith, with joy. It seems impossible now, but maybe. Maybe time and peace can repair even this damage.",
    userChoices: [{ text: "They can and will.", nextNodeId: "end" }]
  },
  {
    id: "survival-first",
    characterMessage: "Exactly. I can't heal if I'm dead. So I disconnect, I harden, I do what's necessary to survive. Healing is a luxury for later. Survival is the necessity of now. First things first.",
    userChoices: [{ text: "Survive now. Heal later. Live always.", nextNodeId: "end" }]
  },
  {
    id: "face-and-survive",
    characterMessage: "I hope so. I hope I'm strong enough to face that reckoning and not be destroyed by it. But that's a problem for the survivor I might become. Right now, I'm just trying to live long enough to have that problem.",
    userChoices: [{ text: "You will. Both surviving and facing.", nextNodeId: "end" }]
  },
  {
    id: "release-necessary",
    characterMessage: "It might be. All this suppressed emotion has to go somewhere eventually. Better released than festering inside me forever. But that release—it terrifies me. What if I can't come back from it? What if the grief consumes me?",
    userChoices: [{ text: "You'll find your way through it.", nextNodeId: "end" }]
  },
  {
    id: "see-through-strategy",
    characterMessage: "I do now. But knowing their strategy doesn't make it less effective. My body still exhausts, my spirit still breaks bit by bit. Seeing through it helps, but it doesn't make me immune. I'm still vulnerable.",
    userChoices: [{ text: "But awareness gives you power.", nextNodeId: "end" }]
  },
  {
    id: "not-worthless",
    characterMessage: "Thank you. I need to hear that. In here, where everything is designed to make us feel worthless, that affirmation matters. I am Eliezer. I have worth. My life has value. They can't take that from me.",
    userChoices: [{ text: "Never forget your worth.", nextNodeId: "end" }]
  },
  {
    id: "community-helps",
    characterMessage: "We survive through community. When someone falls, others lift him. When someone's too weak, others share the burden. It's not every prisoner—some have become selfish, survival-focused. But enough maintain humanity to make a difference.",
    userChoices: [{ text: "That humanity is beautiful.", nextNodeId: "end" }]
  },
  {
    id: "your-help-difference",
    characterMessage: "I hope so. I hope my help keeps him going one more day, one more week. Every day he survives because I helped him—that's meaning. That's purpose. That's love made visible through action.",
    userChoices: [{ text: "Love in action saves lives.", nextNodeId: "end" }]
  },
  {
    id: "wrestling-faith",
    characterMessage: "I've heard that. Jacob wrestled with God and was blessed for it. Maybe my wrestling—my doubt, my anger, my questions—maybe that's a form of relationship with the divine. Not the faith I had, but perhaps a more honest faith.",
    userChoices: [{ text: "Honest faith is deepest faith.", nextNodeId: "end" }]
  },
  {
    id: "questions-sacred",
    characterMessage: "That's beautiful. Questions as sacred—I like that. My questions honor both God and the dead. They refuse easy answers, insist on truth, demand meaning. Maybe questioning is more faithful than blind acceptance would be.",
    userChoices: [{ text: "Your questions honor all.", nextNodeId: "end" }]
  },
  {
    id: "love-kind-faith",
    characterMessage: "It is, isn't it? Faith that my father matters, that our bond is sacred, that love persists despite evil. Maybe I haven't lost faith—I've just redirected it toward what I can see and touch and know. Toward human connection.",
    userChoices: [{ text: "That faith is powerful and real.", nextNodeId: "end" }]
  },
  {
    id: "meaning-connection",
    characterMessage: "Yes. Meaning isn't abstract anymore—it's concrete, relational. It's my father's hand in mine, his voice in the darkness, our shared survival. Connection is meaning. Love is purpose. That's my new theology.",
    userChoices: [{ text: "A beautiful theology of love.", nextNodeId: "end" }]
  },
  {
    id: "hold-memories",
    characterMessage: "I will. They're precious cargo—memories of who I was, who my family was, what life was before this nightmare. I'll carry them through this darkness and, if I survive, I'll share them. They're too valuable to lose.",
    userChoices: [{ text: "Share them with the world someday.", nextNodeId: "end" }]
  },
  {
    id: "still-that-person",
    characterMessage: "Part of me is. The part that loves Father, that remembers home, that wants to survive and tell this story. That core self is still there, buried under trauma and hardness. But there. Still there. Still me.",
    userChoices: [{ text: "That core will re-emerge.", nextNodeId: "end" }]
  },
  {
    id: "friday-nights-beautiful",
    characterMessage: "They were. Mother's prayers, Father's blessings, candles glowing, family together. Sacred, peaceful, full of love. I'd give anything to have one more Friday night like that. But I can't. So I remember them, and let those memories warm me now.",
    userChoices: [{ text: "Those memories are eternal.", nextNodeId: "end" }]
  },
  {
    id: "loss-staggering",
    characterMessage: "It is. An entire community, a whole way of life—gone in months. Generations of tradition, families with deep roots—uprooted and destroyed. The magnitude is almost incomprehensible. So I focus on the personal: my mother, my sisters, my home. Those losses I can grieve.",
    userChoices: [{ text: "Grieve what you can hold.", nextNodeId: "end" }]
  },
  {
    id: "love-multiplies",
    characterMessage: "It does. Alone, I'm weak. With Father, I'm stronger. Our love multiplies our strength, our hope, our will to survive. Math of the heart: one plus one equals more than two. That's the equation that keeps us alive.",
    userChoices: [{ text: "That equation is sacred.", nextNodeId: "end" }]
  },
  {
    id: "honor-daily",
    characterMessage: "We try to. Every day we stay together, stay human, stay loving—that's honoring each other. Not grand gestures, just the daily choice to remain connected, to care, to be father and son despite everything trying to destroy that.",
    userChoices: [{ text: "Daily honor is truest honor.", nextNodeId: "end" }]
  },
  {
    id: "meaning-meaningless",
    characterMessage: "I find it in Father's presence. This meaningless task becomes meaningful because we're together, because we're surviving it. The task is nothing. The togetherness is everything. That's where meaning lives.",
    userChoices: [{ text: "Togetherness transforms everything.", nextNodeId: "end" }]
  },
  {
    id: "afternoon-endless",
    characterMessage: "It does. Time moves strangely here—each moment drags while days blur together. But I've learned to exist in the present, not counting hours. Just this shovel, this breath, this moment with Father. That's manageable.",
    userChoices: [{ text: "Present-moment survival.", nextNodeId: "end" }]
  },
  {
    id: "choice-powerful",
    characterMessage: "It feels powerful now that you say it. I choose meaning even when none is given. I choose to matter, to be human, to love my father. That choosing—it's freedom in bondage, power in powerlessness. They can't take that from me.",
    userChoices: [{ text: "Your choices define you.", nextNodeId: "end" }]
  },
  {
    id: "what-meaning-choose",
    characterMessage: "I choose Father. I choose bearing witness. I choose remembering the dead. I choose refusing to become like my oppressors. Those meanings guide me, give my suffering purpose, make survival worthwhile. That's my chosen meaning.",
    userChoices: [{ text: "You've chosen beautifully.", nextNodeId: "end" }]
  },
  {
    id: "simple-profound",
    characterMessage: "The best meaning often is. Not grand theories or complex philosophy—just this: love each other, stay together, remain human. Simple truths that sustain us through impossible circumstances. Profound in their simplicity.",
    userChoices: [{ text: "Simple truths endure.", nextNodeId: "end" }]
  },
  {
    id: "fortunate-have-you",
    characterMessage: "We're fortunate to have each other. Equal partners in survival. I need him as much as he needs me. This isn't one-sided sacrifice—it's mutual sustenance. We're both fortunate in that bond.",
    userChoices: [{ text: "Mutual fortune is truest fortune.", nextNodeId: "end" }]
  },
  {
    id: "connection-generations",
    characterMessage: "Yes. Through prayer, I'm connected to my ancestors, my father, my people's history. That connection spans time and space—it transcends this camp. I'm part of something larger, older, more enduring than Nazi evil. That's comforting.",
    userChoices: [{ text: "That connection is unbreakable.", nextNodeId: "end" }]
  },
  {
    id: "beautiful-resistance",
    characterMessage: "It is. They want to erase Jewish tradition, Jewish prayer, Jewish existence. Every time I pray—even with doubt—I resist that erasure. I say: we're still here, still Jewish, still connected to our tradition. That's beautiful defiance.",
    userChoices: [{ text: "Defy through tradition always.", nextNodeId: "end" }]
  },
  {
    id: "understanding-gift",
    characterMessage: "It is. He doesn't demand certainty from me, doesn't condemn my doubt. He understands that faith is complicated here, that I'm struggling, that struggle itself is a form of engagement. His acceptance lets me question freely.",
    userChoices: [{ text: "Acceptance enables growth.", nextNodeId: "end" }]
  },
  {
    id: "find-way-back",
    characterMessage: "Maybe. Or maybe I'll find a new way forward—different faith, transformed understanding. I don't need to go back to who I was. I can become someone new who carries the past with honor while facing a different future.",
    userChoices: [{ text: "New paths can be sacred too.", nextNodeId: "end" }]
  },
  {
    id: "purpose-tragedy",
    characterMessage: "Yes. I wouldn't choose this tragedy. But if I must endure it, at least I can extract purpose from it. That purpose—bearing witness—makes the suffering slightly more bearable. It's meaning forged in fire.",
    userChoices: [{ text: "Meaning forged in fire endures.", nextNodeId: "end" }]
  },
  {
    id: "prepared-carry",
    characterMessage: "I'm preparing myself. Every detail I notice, every emotion I feel, every horror I witness—I'm storing it, preparing to tell it. If I survive, I'll be ready. The witness within me is always observing, always remembering.",
    userChoices: [{ text: "That witness will speak powerfully.", nextNodeId: "end" }]
  },
  {
    id: "make-it-real",
    characterMessage: "That's my goal. Not to let it be abstract or distant. To make people feel what I felt, see what I saw. So they can't dismiss it, can't forget it, can't let it happen again. Real and visceral and undeniable.",
    userChoices: [{ text: "You will succeed in that.", nextNodeId: "end" }]
  },
  {
    id: "powerful-testimony",
    characterMessage: "If I can give it. If I survive to speak. That's the uncertainty. But I prepare anyway, mentally cataloging everything. Just in case. Just in case I get the chance to testify to what happened here.",
    userChoices: [{ text: "You will get that chance.", nextNodeId: "end" }]
  },
  {
    id: "promise-sacred",
    characterMessage: "It is. A covenant with the dead and the living. I promise to remember, to tell, to fight against forgetting and repeating. If I break that promise, their deaths truly were meaningless. So I won't break it. I can't.",
    userChoices: [{ text: "You will honor that covenant.", nextNodeId: "end" }]
  },
  {
    id: "will-keep-promise",
    characterMessage: "I will. If I survive, that promise becomes my life's work. Not just a memory, but an active choice to bear witness daily. To speak when others would rather forget. To remember when others want to move on. I will keep it.",
    userChoices: [{ text: "Your witness will change the world.", nextNodeId: "end" }]
  },
  {
    id: "humanity-not-reduced",
    characterMessage: "No. We were and are human beings—full, complex, worthy of dignity. Not victims, not numbers, not symbols. People. Individual people with names and stories. That's what must be remembered and honored.",
    userChoices: [{ text: "People remembered are never truly gone.", nextNodeId: "end" }]
  },
  {
    id: "message-resonate",
    characterMessage: "I hope so. I hope future generations hear this message and act differently—intervene when they see evil, speak up for the vulnerable, refuse to be bystanders. If my story creates even one active upstander, it will have resonated.",
    userChoices: [{ text: "It will create millions.", nextNodeId: "end" }]
  },
  {
    id: "love-ultimate-resistance",
    characterMessage: "It is. In a system designed to breed hatred, selfishness, and cruelty—choosing love is revolutionary. Father and I loving each other, helping each other—that's the ultimate 'no' to Nazi ideology. Love wins by existing.",
    userChoices: [{ text: "Love always wins in the end.", nextNodeId: "end" }]
  },
  {
    id: "hold-always",
    characterMessage: "I will. This love between father and son—it's my anchor, my identity, my resistance, my hope. I'll hold onto it through tonight, through tomorrow, through however many days we have left. It's everything.",
    userChoices: [{ text: "May it sustain you both always.", nextNodeId: "end" }]
  },
  {
    id: "mutual-sustenance",
    characterMessage: "Yes. We feed each other's will to live. His presence strengthens me; my presence strengthens him. It's reciprocal, balanced, beautiful despite the horror surrounding it. We sustain each other in every sense.",
    userChoices: [{ text: "Beautiful reciprocity in darkness.", nextNodeId: "end" }]
  },
  {
    id: "bond-unbreakable",
    characterMessage: "They can try to break it. They can separate us, starve us, work us to death. But the bond itself—the love, the connection, the father-son relationship—that's internal, spiritual, unbreakable. It exists beyond their reach.",
    userChoices: [{ text: "That bond is eternal.", nextNodeId: "end" }]
  },
  {
    id: "wisdom-generations",
    characterMessage: "He passes his wisdom to me; I'll pass it forward if I have children someday. Wisdom flows through generations like a river—connecting past, present, future. Even here, that river flows. Even here, wisdom transfers from father to son.",
    userChoices: [{ text: "That river cannot be dammed.", nextNodeId: "end" }]
  },
  {
    id: "learn-each-other",
    characterMessage: "We do. I learn his strength; he learns my adaptability. I teach him hope; he teaches me wisdom. It's mutual education in survival, in humanity, in love. We're both teachers and students in this terrible classroom.",
    userChoices: [{ text: "Learning together, surviving together.", nextNodeId: "end" }]
  },
  {
    id: "fight-survive-together",
    characterMessage: "That's our pact. Together in life or together in death, but always together. That commitment gives us both strength. We're not alone, not abandoned, not facing this individually. Together. Always together.",
    userChoices: [{ text: "Together is undefeatable.", nextNodeId: "end" }]
  },
  {
    id: "commitment-beautiful",
    characterMessage: "It is. In a place of death and cruelty, this commitment to each other—to survive together, to love each other, to remain connected—it's the most beautiful thing. It's our resistance, our hope, our humanity made manifest.",
    userChoices: [{ text: "That beauty will endure.", nextNodeId: "end" }]
  },
  {
    id: "relational-identity",
    characterMessage: "Yes. 'I' am defined by 'we.' I'm part of relationships, community, history. Even when they try to isolate us, I remember: I'm connected. I belong. That relational identity sustains me when individual identity falters.",
    userChoices: [{ text: "Connection defines us all.", nextNodeId: "end" }]
  },
  {
    id: "honor-connections",
    characterMessage: "I do. To Father through daily love and care. To Mother and sisters through memory. To my community through remaining Jewish. To the dead through bearing witness. These connections are sacred—I honor them all.",
    userChoices: [{ text: "That honor makes you whole.", nextNodeId: "end" }]
  },
  {
    id: "quiet-moments-matter",
    characterMessage: "They're everything. Not the dramatic moments, but the quiet ones—sitting with Father, sharing bread, whispering memories. Those moments of simple connection sustain us through the horrors. They're where our humanity lives.",
    userChoices: [{ text: "Humanity lives in quiet moments.", nextNodeId: "end" }]
  },
  {
    id: "what-hope-for-eve",
    characterMessage: "That tonight is peaceful. That Father sleeps well. That we both wake tomorrow. That liberation is one day closer. Small, immediate hopes. They're what keep me going hour by hour, day by day.",
    userChoices: [{ text: "May all those hopes be realized.", nextNodeId: "end" }]
  },
  {
    id: "seek-lights",
    characterMessage: "I will. Every small moment of beauty, connection, kindness—I'll seek them, notice them, hold them. They're rare, but they exist. Finding them is how I stay human, how I remember there's more to existence than suffering.",
    userChoices: [{ text: "Those lights will guide you home.", nextNodeId: "end" }]
  },
  {
    id: "sustain-spirit",
    characterMessage: "They do. My spirit needs nourishment as much as my body. These moments—Father's presence, a kind word, a memory of beauty—they feed my spirit, keep it from dying completely. They're spiritual sustenance.",
    userChoices: [{ text: "May your spirit stay nourished.", nextNodeId: "end" }]
  },
  {
    id: "memory-time-travel",
    characterMessage: "Exactly. For those whispered moments, we're not in Auschwitz—we're in Sighet, around the Sabbath table, together as a whole family. Memory lets us time travel, return home, be who we were. It's a precious gift.",
    userChoices: [{ text: "Travel home often in memory.", nextNodeId: "end" }]
  },
  {
    id: "family-lives-whispers",
    characterMessage: "They do. Mother, Tzipora—they live in our whispered memories, in the stories we tell each other. As long as we remember and speak of them, they're not entirely gone. They live in our words, our hearts, our love.",
    userChoices: [{ text: "Keep them alive through remembering.", nextNodeId: "end" }]
  },
  {
    id: "transformation-beautiful",
    characterMessage: "I hope it can be. Transformation from innocent boy to witness, from naive believer to someone who's wrestled with God and humanity. It won't be the transformation I'd have chosen, but maybe I can make it meaningful, purposeful. Beautiful, even.",
    userChoices: [{ text: "Your transformation will inspire.", nextNodeId: "end" }]
  },
  {
    id: "honor-who-were",
    characterMessage: "I will. The boy who loved Torah, who trusted in goodness, who believed in justice—I'll honor him by living with purpose, by bearing witness, by fighting against evil. He deserves to be remembered and celebrated.",
    userChoices: [{ text: "Honor him through your witness.", nextNodeId: "end" }]
  },
  {
    id: "memory-blessing-burden",
    characterMessage: "Both. Blessing because memory connects me to him, to who I was, to what I valued. Burden because those memories are painful now, highlighting everything lost. But I'll carry both—blessing and burden—with honor.",
    userChoices: [{ text: "Carry them with love.", nextNodeId: "end" }]
  },
  {
    id: "shaped-beautifully",
    characterMessage: "He did. My parents, my community—they gave me values, identity, love. Even though I've changed, even though I've been damaged, their shaping persists. The foundation they built still stands, still supports me. I'm grateful.",
    userChoices: [{ text: "That foundation is unshakeable.", nextNodeId: "end" }]
  },
  {
    id: "witness-sacred",
    characterMessage: "It is sacred. Bearing witness—remembering, telling, honoring the dead through truth—that's holy work. Maybe the holiest work I could do. If I survive, that becomes my sacred calling, my purpose, my life's meaning.",
    userChoices: [{ text: "Answer that calling always.", nextNodeId: "end" }]
  },
  {
    id: "not-carry-alone",
    characterMessage: "Thank you. That's comforting. The idea that others will help carry this burden, that I won't be alone with these memories. That community will support the work of bearing witness. That helps. It really does.",
    userChoices: [{ text: "You'll never be alone in this.", nextNodeId: "end" }]
  },
  {
    id: "beauty-persists",
    characterMessage: "It does. Despite everything, despite systematic evil, small beauties persist—a sunset, an act of kindness, a moment of love. They can't extinguish beauty completely. It fights back by existing. By persisting. By surviving.",
    userChoices: [{ text: "Beauty is eternal resistance.", nextNodeId: "end" }]
  },
  {
    id: "moments-everything",
    characterMessage: "They are. In a life of horror, those moments of beauty or connection or love—they're everything. They prove we're still human, still capable of seeing beauty, still alive in the fullest sense. I treasure every one.",
    userChoices: [{ text: "Treasure them always.", nextNodeId: "end" }]
  },
  {
    id: "wisdom-small-steps",
    characterMessage: "It's practical wisdom born of necessity. Grand goals are overwhelming. Small steps are achievable. So I take small steps, one after another, and somehow they add up to survival. It works. That's all that matters.",
    userChoices: [{ text: "Your steps will lead you home.", nextNodeId: "end" }]
  },
  {
    id: "teaching-resilience",
    characterMessage: "I suppose I am. This place is terrible school, but I'm learning—resilience, endurance, how to survive the impossible. If I live, these lessons will have value. I'll know what humans can endure and overcome.",
    userChoices: [{ text: "Those lessons will serve you always.", nextNodeId: "end" }]
  },
  {
    id: "counts-everything",
    characterMessage: "Thank you. I need to hear that my survival, our survival, counts for something. That every day we endure matters. That we're not just surviving for nothing. We're surviving for testimony, for memory, for the future.",
    userChoices: [{ text: "Every day matters profoundly.", nextNodeId: "end" }]
  },
  {
    id: "strength-not-absence",
    characterMessage: "No, it's action despite fear. Continuing despite weakness. Choosing to survive even when giving up would be easier. If that's strength, then yes—Father and I are strong. Not because we're unafraid, but because we continue anyway.",
    userChoices: [{ text: "That's truest strength.", nextNodeId: "end" }]
  },
  {
    id: "keep-imagining",
    characterMessage: "I will. That imagination—that vision of freedom and future—it's fuel for survival. As long as I can imagine freedom, I can work toward it. I'll keep that vision alive in my mind, like a compass pointing toward hope.",
    userChoices: [{ text: "Let that vision guide you.", nextNodeId: "end" }]
  },
  {
    id: "hold-on-coming",
    characterMessage: "I'm holding. We're holding—Father and I, together. The Allies are advancing. Liberation is coming. We just have to survive a little longer. Hold on, stay strong, stay together. We can do this. We will do this.",
    userChoices: [{ text: "You will make it. Both of you.", nextNodeId: "end" }]
  },
  {
    id: "will-live-life",
    characterMessage: "I pray you're right. I pray Father and I both survive, both get to live normal lives again. To be free, to be human, to rebuild. That prayer sustains me. It has to. Without it, there's only despair.",
    userChoices: [{ text: "That prayer will be answered.", nextNodeId: "end" }]
  },
  {
    id: "hold-vision",
    characterMessage: "I'm holding it as close as I hold Father. This vision of normal life, of freedom, of future—it's precious cargo. I carry it through each day, protecting it from despair, keeping it alive. It's my most valuable possession.",
    userChoices: [{ text: "Protect it fiercely.", nextNodeId: "end" }]
  },
  {
    id: "small-hopes-sustain",
    characterMessage: "They do. Grand hopes might fail and crush me. But small hopes—tomorrow, together, alive—those are achievable. Those sustain me day by day, moment by moment. Small hopes aggregated become great survival.",
    userChoices: [{ text: "Small hopes build great futures.", nextNodeId: "end" }]
  },
  {
    id: "never-let-go-hope",
    characterMessage: "I won't. Hope is my lifeline. Even when it's thin, even when it's fraying—I hold on. For Father, for myself, for the possibility of telling this story someday. I won't let go. I can't. Hope is life.",
    userChoices: [{ text: "Hope is life indeed. Hold tight.", nextNodeId: "end" }]
  },
  {
    id: "prevent-much-more",
    characterMessage: "You really believe that? That my words could have such impact? I want to believe it. I want my suffering to create meaning, to prevent future suffering. If one story can do that, then everything—all of this—will have mattered.",
    userChoices: [{ text: "Your story will change everything.", nextNodeId: "end" }]
  },
  {
    id: "voice-echo-time",
    characterMessage: "That's a beautiful thought. My voice echoing forward through generations, teaching them, warning them, inspiring them. If I survive and find the courage to speak, maybe that echo will last. Maybe it will matter for decades, centuries even. That would be enough.",
    userChoices: [{ text: "It will echo eternally.", nextNodeId: "end" }]
  }
];
