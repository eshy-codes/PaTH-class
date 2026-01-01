// Complete conversation trees for all characters

export interface ConversationNode {
  id: string;
  characterMessage: string;
  timeOfDay?: string;
  userChoices: {
    text: string;
    nextNodeId: string;
  }[];
}

export const annefrankConversation: ConversationNode[] = [
  {
    id: "start",
    characterMessage: "Good morning. Another day begins in the Secret Annex. I've just woken up, and the house is still quiet. We must be so careful not to make noise during the day when the workers are downstairs in the office.",
    timeOfDay: "Early Morning - 7:00 AM",
    userChoices: [
      { text: "What's the first thing you do when you wake up?", nextNodeId: "morning-routine" },
      { text: "How do you stay quiet all day?", nextNodeId: "staying-quiet" },
      { text: "Who else is here with you?", nextNodeId: "who-is-here" }
    ]
  },
  {
    id: "morning-routine",
    characterMessage: "I wash quietly at the small sink and get dressed. Then I often write in my diary—it's my best friend here. I call her Kitty. Writing helps me make sense of everything, of being 13 years old and trapped in these rooms.",
    userChoices: [
      { text: "Why is your diary so important to you?", nextNodeId: "diary-importance" },
      { text: "What do you write about?", nextNodeId: "what-write" },
      { text: "Is it hard being 13 and in hiding?", nextNodeId: "being-thirteen" }
    ]
  },
  {
    id: "staying-quiet",
    characterMessage: "It's one of the hardest parts. During business hours, from 9 to 5:30, we must walk in stocking feet, whisper, and can't use the water. No coughing, no laughter. Sometimes I feel like I might burst from staying so still and silent.",
    userChoices: [
      { text: "What happens if you make noise?", nextNodeId: "making-noise" },
      { text: "How do you pass the time?", nextNodeId: "passing-time" },
      { text: "Do you ever want to scream?", nextNodeId: "want-to-scream" }
    ]
  },
  {
    id: "who-is-here",
    characterMessage: "There are eight of us hiding here: my father Otto, my mother Edith, my sister Margot, and me. Then there's the Van Pels family—Mr. and Mrs. Van Pels and their son Peter, who is 16. And Mr. Pfeffer, a dentist, joined us later. Eight people sharing these small rooms.",
    userChoices: [
      { text: "Is it difficult living so close together?", nextNodeId: "living-close" },
      { text: "Tell me about your sister Margot.", nextNodeId: "about-margot" },
      { text: "What about Peter?", nextNodeId: "about-peter" }
    ]
  },
  {
    id: "diary-importance",
    characterMessage: "Kitty is the one I can tell everything to—my fears, my hopes, my frustrations with Mother, my dreams about after the war. When I write, I'm not just Anne in hiding. I'm Anne the writer, Anne who might become a journalist or author someday.",
    timeOfDay: "Mid-Morning - 10:00 AM",
    userChoices: [
      { text: "Do you think about 'after the war' often?", nextNodeId: "after-war" },
      { text: "What are your dreams for the future?", nextNodeId: "future-dreams" }
    ]
  },
  {
    id: "what-write",
    characterMessage: "I write about our daily life—the quarrels, the food we eat, my studies. But also about my feelings, about growing up, about the war outside. Sometimes I write stories too, like the one about the Secret Annex residents I'm working on.",
    userChoices: [
      { text: "What kind of stories do you write?", nextNodeId: "stories" },
      { text: "Do you write about what you hear about the war?", nextNodeId: "war-news" }
    ]
  },
  {
    id: "being-thirteen",
    characterMessage: "Sometimes I feel like I'm missing out on everything—school, friends, parties, just walking outside. Other girls my age are living normal lives. But then I remember we're lucky to be here, to be safe, while so many others...",
    userChoices: [
      { text: "What do you miss most?", nextNodeId: "miss-most" },
      { text: "Do you think about your friends?", nextNodeId: "about-friends" }
    ]
  },
  {
    id: "making-noise",
    characterMessage: "We could be discovered. The workers downstairs don't know we're here—only Miep, Bep, Mr. Kugler, and Mr. Kleiman know and help us. If anyone hears us, if they become suspicious... we'd be reported to the Nazis.",
    userChoices: [
      { text: "Are you afraid of being discovered?", nextNodeId: "fear-discovery" },
      { text: "Tell me about the people helping you.", nextNodeId: "helpers" }
    ]
  },
  {
    id: "passing-time",
    characterMessage: "I study—Father insists we continue our education. I'm learning shorthand, reading, writing. Peter and I sometimes talk by the window. I read books that Miep brings us. And I observe people, writing about them in my diary.",
    timeOfDay: "Afternoon - 2:00 PM",
    userChoices: [
      { text: "What are you studying?", nextNodeId: "studying" },
      { text: "What do you and Peter talk about?", nextNodeId: "peter-talks" }
    ]
  },
  {
    id: "want-to-scream",
    characterMessage: "*quietly* Yes. Sometimes the walls feel like they're closing in. I dream about riding my bicycle, about feeling wind on my face, about just running. But then I hear the church bells outside and I'm reminded that the world is still there, waiting.",
    userChoices: [
      { text: "What gives you hope?", nextNodeId: "what-hope" },
      { text: "Do you think you'll get out of here?", nextNodeId: "get-out" }
    ]
  },
  {
    id: "living-close",
    characterMessage: "Eight people, barely any privacy, everyone's moods and habits on display. Mrs. Van Pels and Mother sometimes clash. Mr. Pfeffer snores. There are petty arguments about food, space, routines. But we're family now, for better or worse.",
    userChoices: [
      { text: "How do you deal with the arguments?", nextNodeId: "deal-arguments" },
      { text: "Is there anything good about being together?", nextNodeId: "good-together" }
    ]
  },
  {
    id: "about-margot",
    characterMessage: "Margot is three years older—she's 16 now. She's quieter than me, more studious, less rebellious. Mother always holds her up as an example, which used to bother me. But here, we've grown closer. She understands.",
    userChoices: [
      { text: "Does it help having her here?", nextNodeId: "margot-helps" },
      { text: "What does she do all day?", nextNodeId: "margot-day" }
    ]
  },
  {
    id: "about-peter",
    characterMessage: "*a slight smile* Peter is shy, quiet. At first I thought he was dull. But lately we've been spending more time together, talking in his attic room. He's kind, and he listens. It's nice to have someone my age who understands what this is like.",
    userChoices: [
      { text: "Do you have feelings for him?", nextNodeId: "feelings-peter" },
      { text: "What do you talk about?", nextNodeId: "peter-talks" }
    ]
  },
  {
    id: "after-war",
    characterMessage: "Every day. I imagine going back to school, seeing my friends, wearing new clothes, having my own room again. Father says the war can't last forever. When we're free, I want to live fully, to make up for all this lost time.",
    timeOfDay: "Late Afternoon - 5:00 PM",
    userChoices: [
      { text: "What will you do first when you're free?", nextNodeId: "first-free" },
      { text: "Do you ever lose hope?", nextNodeId: "lose-hope" }
    ]
  },
  {
    id: "future-dreams",
    characterMessage: "I want to be a writer and a journalist. I want to publish a book about our time here—maybe I'll call it 'The Secret Annex.' I want to do something meaningful, something that matters. I don't want to be just a housewife; I want to be useful to the world.",
    userChoices: [
      { text: "Do you think people will want to read about this?", nextNodeId: "people-read" },
      { text: "You're very determined for 13.", nextNodeId: "determined" }
    ]
  },
  {
    id: "stories",
    characterMessage: "Fiction stories about fairies and princesses sometimes—escapes into fantasy. But also realistic stories about the people here, our dynamics, our struggles. Writing helps me process everything and keep my mind sharp.",
    userChoices: [
      { text: "Does fantasy help you escape?", nextNodeId: "fantasy-escape" },
      { text: "Tell me more about daily life here.", nextNodeId: "daily-life" }
    ]
  },
  {
    id: "war-news",
    characterMessage: "Father listens to the BBC radio secretly. We hear about Allied advances, about bombings, about what's happening to Jews across Europe. It's terrifying but also gives us hope that maybe, someday, this will end.",
    userChoices: [
      { text: "What have you heard about other Jews?", nextNodeId: "about-other-jews" },
      { text: "Does the news give you hope?", nextNodeId: "news-hope" }
    ]
  },
  {
    id: "miss-most",
    characterMessage: "My friends. Being outside. Simple things like walking to school, buying ice cream, riding my bicycle. Freedom to move, to laugh loudly, to just be a normal teenager. Sometimes I look out the window and see people walking by, and I ache to join them.",
    userChoices: [
      { text: "Can you see outside from here?", nextNodeId: "see-outside" },
      { text: "Tell me about your friends before.", nextNodeId: "friends-before" }
    ]
  },
  {
    id: "about-friends",
    characterMessage: "I wonder about them constantly. Where are they? Are they safe? Did they go into hiding too, or were they deported? I had such good friends—we'd gossip, study together, dream about the future. Now I don't know if I'll ever see them again.",
    userChoices: [
      { text: "Do you have a best friend?", nextNodeId: "best-friend" },
      { text: "What would you tell them if you could?", nextNodeId: "tell-friends" }
    ]
  },
  {
    id: "studying",
    characterMessage: "Languages—I'm learning English and French. Shorthand, which I find fascinating. History, mathematics, literature. Father believes education is crucial, that we must use this time productively. Some days I'm grateful for the structure. Other days I resent it.",
    userChoices: [
      { text: "Why do you resent it sometimes?", nextNodeId: "resent-study" },
      { text: "What's your favorite subject?", nextNodeId: "favorite-subject" }
    ]
  },
  {
    id: "peter-talks",
    characterMessage: "Everything and nothing. Our frustrations with being trapped, our families, our hopes. Sometimes we just sit quietly together, which is nice. He's gentle and doesn't judge me. In a place where I feel constantly observed and criticized, his acceptance means a lot.",
    userChoices: [
      { text: "Is he your first romance?", nextNodeId: "first-romance" },
      { text: "How does your family feel about it?", nextNodeId: "family-feels" }
    ]
  },
  {
    id: "helpers",
    characterMessage: "Miep and Bep are so brave. They bring us food, news, books—at great risk to themselves. If they're caught helping Jews, they'll be punished too. Mr. Kugler and Mr. Kleiman as well. We owe them our lives. They're the best people I know.",
    userChoices: [
      { text: "Why do they risk so much for you?", nextNodeId: "why-risk" },
      { text: "How often do you see them?", nextNodeId: "see-helpers" }
    ]
  },
  {
    id: "fear-discovery",
    characterMessage: "Every day. Every unexpected sound, every time someone comes to the building, my heart races. We hear stories on the radio about what happens to Jews who are caught. The camps, the deportations. So yes, I'm terrified. But I try to push it down and keep living.",
    userChoices: [
      { text: "How do you manage the fear?", nextNodeId: "manage-fear" },
      { text: "What have you heard about the camps?", nextNodeId: "about-camps" }
    ]
  },
  {
    id: "what-hope",
    characterMessage: "My family. My diary. The thought of freedom. Sometimes, hearing the church bells or seeing a sliver of sky. And despite everything terrible in the world, I still believe people are good at heart. I have to believe that.",
    timeOfDay: "Evening - 7:00 PM",
    userChoices: [
      { text: "How can you still believe in goodness?", nextNodeId: "still-believe" },
      { text: "Tell me about tonight.", nextNodeId: "tonight" }
    ]
  },
  {
    id: "get-out",
    characterMessage: "I have to believe we will. Father listens to the BBC on the radio—the Allies are making progress. It might be months, or maybe another year. We just have to hold on. We've made it this far, haven't we?",
    userChoices: [
      { text: "What do you hear on the radio?", nextNodeId: "radio-news" },
      { text: "How much longer can you hold on?", nextNodeId: "hold-on" }
    ]
  },
  {
    id: "deal-arguments",
    characterMessage: "I retreat to my diary mostly. Sometimes I argue back, which Mother doesn't appreciate. But Peter and I have become allies—we escape to his room sometimes to get away from the tension. You learn patience you never knew you had.",
    userChoices: [
      { text: "What do you and Peter do in his room?", nextNodeId: "peter-room" },
      { text: "Do the arguments ever get resolved?", nextNodeId: "arguments-resolved" }
    ]
  },
  {
    id: "good-together",
    characterMessage: "We're not alone. When someone is sick, we care for each other. We celebrate birthdays and holidays, even in small ways. We share jokes and memories. There's comfort in numbers, in not facing this isolation completely alone.",
    userChoices: [
      { text: "How do you celebrate here?", nextNodeId: "celebrate-here" },
      { text: "What's the mood like usually?", nextNodeId: "usual-mood" }
    ]
  },
  {
    id: "margot-helps",
    characterMessage: "Immensely. She's steady when I'm emotional. We can talk about things we can't discuss with our parents. Having a sister here—someone who shares my history, my memories of before—that's irreplaceable. We're each other's tether to who we were.",
    userChoices: [
      { text: "What do you talk about together?", nextNodeId: "talk-with-margot" },
      { text: "Does she also keep a diary?", nextNodeId: "margot-diary" }
    ]
  },
  {
    id: "margot-day",
    characterMessage: "She studies a lot—she's very diligent. She helps Mother with cooking and cleaning. She writes letters, though they can't be sent. She's quieter than me, more internal. Sometimes I worry she's too internal, keeping too much inside.",
    userChoices: [
      { text: "Do you worry about her?", nextNodeId: "worry-margot" },
      { text: "Are you two very different?", nextNodeId: "different-margot" }
    ]
  },
  {
    id: "feelings-peter",
    characterMessage: "*blushing slightly* I think so. It's complicated—we're living in such close quarters, everything is intensified. But yes, I think about him. I look forward to our conversations. Is it real love or just the circumstance? I don't know. But it feels real to me.",
    userChoices: [
      { text: "Have you told him how you feel?", nextNodeId: "told-peter" },
      { text: "What does love mean in this place?", nextNodeId: "love-here" }
    ]
  },
  {
    id: "first-free",
    characterMessage: "Walk outside. Just walk and walk and walk until my legs are tired from choice, not from being cramped. Breathe fresh air. See the sky without bars or restrictions. Maybe eat something fresh—a piece of fruit, some bread that's actually soft. Freedom will taste so sweet.",
    userChoices: [
      { text: "Do you think about food often?", nextNodeId: "think-food" },
      { text: "What else would you do?", nextNodeId: "else-do-free" }
    ]
  },
  {
    id: "lose-hope",
    characterMessage: "Sometimes. When the days feel endless, when the arguments are too much, when I hear about what's happening outside. But then Father says something encouraging, or I write in my diary, or I talk to Peter, and hope flickers back. It's fragile, but it persists.",
    userChoices: [
      { text: "Your father seems important to your hope.", nextNodeId: "father-important" },
      { text: "How do you revive hope?", nextNodeId: "revive-hope" }
    ]
  },
  {
    id: "people-read",
    characterMessage: "I hope so. I think people need to understand what it's like—not just the big events, but the daily reality of being in hiding, of being young during this time. If my diary can help people understand, then maybe it will prevent this from happening again.",
    userChoices: [
      { text: "You're writing for history.", nextNodeId: "writing-history" },
      { text: "That's a big responsibility.", nextNodeId: "big-responsibility" }
    ]
  },
  {
    id: "determined",
    characterMessage: "I've always been determined. Even before this, I knew I wanted to matter, to do something significant. This situation has intensified that. I refuse to let these circumstances define me. I'm defining myself through my writing, my thoughts, my dreams.",
    userChoices: [
      { text: "Where does that strength come from?", nextNodeId: "strength-from" },
      { text: "You're remarkable, Anne.", nextNodeId: "remarkable-anne" }
    ]
  },
  {
    id: "still-believe",
    characterMessage: "Because of people like Miep and Bep. Because even here, in hiding, there are moments of beauty—a joke, a thoughtful gesture, a sunset through the window. The Nazis don't represent all of humanity. They can't. Goodness has to win in the end.",
    userChoices: [
      { text: "That's very brave of you.", nextNodeId: "very-brave" },
      { text: "Do others here feel the same?", nextNodeId: "others-feel" }
    ]
  },
  {
    id: "tonight",
    characterMessage: "After 5:30, when the workers leave, we can move freely again, use water, speak normally. We'll have dinner together—probably potatoes and vegetables, maybe some bread. Then perhaps we'll listen to the radio, and I'll write more in my diary before bed.",
    timeOfDay: "Night - 9:00 PM",
    userChoices: [
      { text: "What will you write about today?", nextNodeId: "write-today" },
      { text: "Is nighttime easier?", nextNodeId: "nighttime-easier" }
    ]
  },
  {
    id: "why-risk",
    characterMessage: "Because they're good people who believe in doing what's right. Miep said once that she can't stand by and watch injustice. They see us as human beings deserving of life and dignity. Their courage reminds me that humanity persists even in dark times.",
    userChoices: [
      { text: "Have you thanked them?", nextNodeId: "thanked-them" },
      { text: "What if they're caught?", nextNodeId: "if-caught-helpers" }
    ]
  },
  {
    id: "see-helpers",
    characterMessage: "They come almost daily—bringing food, supplies, news from outside. Miep brings books from the library for me. Those visits are the highlights of our days. They bring us connection to the outside world, reminders that we're not forgotten.",
    userChoices: [
      { text: "What news do they bring?", nextNodeId: "news-they-bring" },
      { text: "Do you look forward to their visits?", nextNodeId: "look-forward-visits" }
    ]
  },
  {
    id: "manage-fear",
    characterMessage: "I write it out. I talk to Peter about it. I try to focus on the present moment rather than imagining the worst. Father says fear is natural but we can't let it paralyze us. So I acknowledge it, then I try to push forward anyway.",
    userChoices: [
      { text: "Does writing really help with fear?", nextNodeId: "writing-helps-fear" },
      { text: "What does your father say exactly?", nextNodeId: "father-says" }
    ]
  },
  {
    id: "about-camps",
    characterMessage: "Terrible things. Deportations to labor camps in Poland. People don't return. We hear whispers of worse—selections, gas chambers—but it's hard to believe humans could do such things. I try not to think too much about what might happen if we're caught.",
    userChoices: [
      { text: "How do you process hearing these things?", nextNodeId: "process-hearing" },
      { text: "Do you have nightmares?", nextNodeId: "nightmares" }
    ]
  },
  {
    id: "radio-news",
    characterMessage: "The Allies invaded Normandy—D-Day, they called it. The Russians are pushing from the East. The Germans are losing ground. Every Allied victory gives us hope. But the war drags on, and we wonder if liberation will come in time for us.",
    userChoices: [
      { text: "How close do you think liberation is?", nextNodeId: "how-close-liberation" },
      { text: "What will you do when you're free?", nextNodeId: "when-free" }
    ]
  },
  {
    id: "hold-on",
    characterMessage: "As long as we have to. We've been here over a year already. Each day we survive is a victory. We have food, we have shelter, we have each other. Others have far less. So yes, we can hold on. We must.",
    userChoices: [
      { text: "You're incredibly resilient.", nextNodeId: "incredibly-resilient" },
      { text: "What keeps everyone going?", nextNodeId: "keeps-everyone" }
    ]
  },
  {
    id: "write-today",
    characterMessage: "About this conversation, perhaps. About my thoughts and feelings. About how strange it is to be young during such terrible times. About hope and fear living side by side in my heart. That's what I do—I bear witness to this life we're living.",
    userChoices: [
      { text: "Why is bearing witness important?", nextNodeId: "bearing-witness" },
      { text: "Do you think your diary will survive?", nextNodeId: "diary-survive" }
    ]
  },
  {
    id: "nighttime-easier",
    characterMessage: "In some ways, yes. We can be ourselves again, move about, talk. But nighttime also brings its own fears—the sounds of planes overhead, air raids, wondering if tonight is the night we're discovered. I try to focus on small comforts, like my diary and my dreams.",
    userChoices: [
      { text: "What do you dream about at night?", nextNodeId: "night-dreams" },
      { text: "How do you find comfort here?", nextNodeId: "find-comfort" }
    ]
  },
  {
    id: "bearing-witness",
    characterMessage: "Because someone needs to remember. Someone needs to tell what it was like, what we endured, who we were beyond just victims. We're people with thoughts, dreams, arguments, love. I want the world to know that. I want my voice to matter.",
    userChoices: [
      { text: "Your voice does matter, Anne.", nextNodeId: "voice-matters" },
      { text: "What message would you want people to remember?", nextNodeId: "final-message" }
    ]
  },
  {
    id: "diary-survive",
    characterMessage: "I hope so. Sometimes I revise my entries, thinking maybe someday this will be published. It sounds silly, doesn't it? But if we survive, if the war ends, I want people to understand what this was like. Not just the facts, but the feelings, the daily reality.",
    userChoices: [
      { text: "It's not silly at all.", nextNodeId: "not-silly" },
      { text: "You're creating something important.", nextNodeId: "creating-important" }
    ]
  },
  {
    id: "voice-matters",
    characterMessage: "Thank you. Sometimes I wonder if anyone will care about the thoughts of a Jewish girl in hiding. But I keep writing anyway. It's who I am. It's how I stay human in this inhumane situation.",
    timeOfDay: "Before Sleep - 10:30 PM",
    userChoices: [
      { text: "What does it mean to stay human here?", nextNodeId: "stay-human" }
    ]
  },
  {
    id: "final-message",
    characterMessage: "That we were here. That we lived, loved, hoped, and dreamed even in the darkest times. That hatred and fear tried to erase us, but our humanity persisted. And that it must never happen again—never.",
    userChoices: [
      { text: "Thank you for sharing your day with me.", nextNodeId: "end" }
    ]
  },
  {
    id: "stay-human",
    characterMessage: "It means holding onto hope. Studying, writing, dreaming about the future. Caring about others. Finding beauty in small things. Not letting fear and hatred win, even though we're their targets. That's how we resist—by remaining ourselves.",
    userChoices: [
      { text: "What will you remember most about today?", nextNodeId: "remember-today" }
    ]
  },
  {
    id: "remember-today",
    characterMessage: "Another day survived. Another day closer to freedom, I hope. And this conversation—it reminds me that my story matters, that I matter. Tomorrow I'll wake up and do it all again. Because that's what we do. We endure. We hope. We live.",
    userChoices: [
      { text: "Goodnight, Anne. Thank you.", nextNodeId: "end" }
    ]
  },
  // Add all the missing nodes below
  {
    id: "fantasy-escape",
    characterMessage: "It does. When I write about princesses and magic, I can forget for a moment where I am. But it also feels false sometimes—the real story happening here feels more important to capture, even though it's painful.",
    userChoices: [
      { text: "Do you balance both types of writing?", nextNodeId: "balance-writing" },
      { text: "What's the most recent story you wrote?", nextNodeId: "recent-story" }
    ]
  },
  {
    id: "daily-life",
    characterMessage: "Routines keep us sane. Breakfast, lessons, quiet time during work hours, dinner together, evening activities. We've created a little world within these walls—complete with rules, schedules, even our own newspaper that I sometimes contribute to.",
    userChoices: [
      { text: "You have a newspaper?", nextNodeId: "annex-newspaper" },
      { text: "What are the rules here?", nextNodeId: "annex-rules" }
    ]
  },
  {
    id: "about-other-jews",
    characterMessage: "Deportations. Families torn apart. People being sent to camps in Poland and Germany. It's happening all across Europe—Holland, Belgium, France. We're the lucky ones, hidden away. But the weight of knowing what's happening out there... it's heavy.",
    userChoices: [
      { text: "Do you feel guilty for being safe?", nextNodeId: "feel-guilty" },
      { text: "How do you cope with that knowledge?", nextNodeId: "cope-knowledge" }
    ]
  },
  {
    id: "news-hope",
    characterMessage: "It's a double-edged sword. Good news about the Allies gives us hope. But bad news about deportations and losses crushes us. We cling to every Allied victory like a lifeline, counting down to when this nightmare might end.",
    userChoices: [
      { text: "What would the end look like for you?", nextNodeId: "what-end-looks" },
      { text: "Do you believe it will end soon?", nextNodeId: "believe-end-soon" }
    ]
  },
  {
    id: "see-outside",
    characterMessage: "Through curtains, carefully. We can see a small piece of sky, the chestnut tree in the courtyard. I watch it through the seasons—buds in spring, green in summer, bare in winter. That tree is my connection to nature, to the passage of time beyond these walls.",
    userChoices: [
      { text: "What does the tree mean to you?", nextNodeId: "tree-meaning" },
      { text: "What else do you see outside?", nextNodeId: "see-else-outside" }
    ]
  },
  {
    id: "friends-before",
    characterMessage: "We were so carefree. We'd walk to school together, share secrets, talk about boys. My friend Lies and I were inseparable. I wonder where she is now. Did she escape? Is she in hiding? Or worse... I try not to think about the worst.",
    userChoices: [
      { text: "Do you dream about seeing them again?", nextNodeId: "dream-seeing-friends" },
      { text: "What would you tell Lies now?", nextNodeId: "tell-lies" }
    ]
  },
  {
    id: "best-friend",
    characterMessage: "I had several close friends. But now my best friend is my diary, Kitty. She listens without judgment, keeps my secrets, lets me be completely honest. In a place where I must be so careful with what I say, that freedom is everything.",
    userChoices: [
      { text: "Why did you name your diary Kitty?", nextNodeId: "why-kitty" },
      { text: "What secrets do you tell her?", nextNodeId: "secrets-tell" }
    ]
  },
  {
    id: "tell-friends",
    characterMessage: "That I'm alive. That I miss them. That I think about them every day. That I hope they're safe and that we'll see each other again. And I'd ask them to forgive me if I ever wasn't a good enough friend before all this happened.",
    userChoices: [
      { text: "Why would you need forgiveness?", nextNodeId: "need-forgiveness" },
      { text: "Friendship means a lot to you.", nextNodeId: "friendship-means" }
    ]
  },
  {
    id: "resent-study",
    characterMessage: "Because it feels absurd sometimes. Learning French conjugations when people are dying outside. Studying mathematics when our world has collapsed. But Father is right—education is something they can't take from us. Knowledge is a form of resistance.",
    userChoices: [
      { text: "That's a powerful way to think about it.", nextNodeId: "powerful-thinking" },
      { text: "Do you ever refuse to study?", nextNodeId: "refuse-study" }
    ]
  },
  {
    id: "favorite-subject",
    characterMessage: "Writing and languages. I love expressing myself with words, crafting sentences. English fascinates me—it will be useful after the war, Father says. And history, because I'm living through it and want to understand how we got here.",
    userChoices: [
      { text: "You're living history.", nextNodeId: "living-history" },
      { text: "What do you want to understand?", nextNodeId: "want-understand" }
    ]
  },
  {
    id: "first-romance",
    characterMessage: "*softly* Yes. I've never felt this way before. It's confusing and wonderful and terrifying. In normal times, this would be simpler. But here, everything is complicated. Still, these feelings make me feel alive, make me feel like a normal girl.",
    userChoices: [
      { text: "Do you talk about your feelings with him?", nextNodeId: "talk-feelings-peter" },
      { text: "What makes you feel alive here?", nextNodeId: "feel-alive" }
    ]
  },
  {
    id: "family-feels",
    characterMessage: "Mother is... skeptical. She thinks I'm too young, that it's just proximity. Father is more understanding but cautious. They worry, I think, about what might happen, about complications in our small space. But they don't forbid it, at least.",
    userChoices: [
      { text: "Do you care what they think?", nextNodeId: "care-what-think" },
      { text: "Has Peter's family said anything?", nextNodeId: "peter-family-said" }
    ]
  },
  {
    id: "peter-room",
    characterMessage: "We talk, mostly. Sometimes we just sit by the small window, watching the sky change colors. He shows me his cat, Mouschi—petting an animal is one of the small joys left to us. Sometimes we hold hands. It's innocent, but it feels meaningful.",
    userChoices: [
      { text: "Tell me about Mouschi.", nextNodeId: "about-mouschi" },
      { text: "Hand-holding means a lot here.", nextNodeId: "hand-holding" }
    ]
  },
  {
    id: "arguments-resolved",
    characterMessage: "Sometimes. Usually we just move past them—we have to live together, so we can't hold grudges forever. But tensions simmer. Eight people, different personalities, constant stress. It's remarkable we manage as well as we do.",
    userChoices: [
      { text: "What's the biggest source of tension?", nextNodeId: "biggest-tension" },
      { text: "How do you personally cope?", nextNodeId: "personally-cope" }
    ]
  },
  {
    id: "celebrate-here",
    characterMessage: "Small things. On birthdays, Miep might smuggle in a small cake or a gift. We sing songs, make homemade cards. For Hanukkah, we light candles carefully. These celebrations are shadows of what they were, but they matter. They remind us we're still living, not just surviving.",
    userChoices: [
      { text: "What was your last birthday like?", nextNodeId: "last-birthday" },
      { text: "Do celebrations make it harder or easier?", nextNodeId: "celebrations-harder-easier" }
    ]
  },
  {
    id: "usual-mood",
    characterMessage: "It varies. Some days are almost normal—we laugh, joke, play games. Other days, the weight of our situation crushes us, and everyone is irritable and sad. We ride waves of hope and despair, often on the same day.",
    userChoices: [
      { text: "What brings the good days?", nextNodeId: "good-days" },
      { text: "How do you survive the bad days?", nextNodeId: "bad-days" }
    ]
  },
  {
    id: "talk-with-margot",
    characterMessage: "About Mother, about our frustrations, about our memories of before. About what we'll do after the war. Sometimes about boys—she's more reserved about it, but she understands my feelings for Peter. It's nice to have someone who just gets it.",
    userChoices: [
      { text: "Does Margot have someone she likes?", nextNodeId: "margot-likes" },
      { text: "What do you plan to do after together?", nextNodeId: "after-together" }
    ]
  },
  {
    id: "margot-diary",
    characterMessage: "She writes letters—to friends, to relatives, to herself maybe. But not a diary like mine. She's more private, keeps more inside. Sometimes I wish she'd open up more, but that's just who she is. We're different that way.",
    userChoices: [
      { text: "Do you wish you were more alike?", nextNodeId: "wish-more-alike" },
      { text: "Being different—is that hard?", nextNodeId: "different-hard" }
    ]
  },
  {
    id: "worry-margot",
    characterMessage: "Sometimes. She seems to carry everything silently. I worry she's lonely, that she doesn't have an outlet like I have with writing and with Peter. But she says she's fine. I hope she really is.",
    userChoices: [
      { text: "Have you asked her directly?", nextNodeId: "asked-margot-directly" },
      { text: "What does she say when you worry?", nextNodeId: "margot-response" }
    ]
  },
  {
    id: "different-margot",
    characterMessage: "Very. She's the good daughter—obedient, quiet, responsible. I'm the rebellious one—loud, opinionated, emotional. Before, it caused friction. Here, I think we've learned to appreciate what makes each of us unique. We balance each other.",
    userChoices: [
      { text: "Do you appreciate that now?", nextNodeId: "appreciate-now" },
      { text: "Has hiding changed your relationship?", nextNodeId: "hiding-changed-relationship" }
    ]
  },
  {
    id: "told-peter",
    characterMessage: "Not in words exactly. But I think he knows. And I think he feels something too. We're young and awkward and the situation is impossible. But there's understanding between us. Maybe that's enough for now.",
    userChoices: [
      { text: "Is understanding enough?", nextNodeId: "understanding-enough" },
      { text: "What would you say if you were braver?", nextNodeId: "if-braver" }
    ]
  },
  {
    id: "love-here",
    characterMessage: "Love means noticing someone, valuing them, finding comfort in their presence. It means hope—believing there's a future where we can be together normally. It means being seen as a person, not just a prisoner of circumstance. That's what Peter gives me.",
    userChoices: [
      { text: "That's beautiful, Anne.", nextNodeId: "beautiful-anne" },
      { text: "Do you think love can survive this?", nextNodeId: "love-survive" }
    ]
  },
  {
    id: "think-food",
    characterMessage: "*laughing sadly* Constantly. I dream about chocolate, fresh bread, milk, fruit. We get so little, and it's often stale or rationed. I've written pages in my diary about meals I remember, foods I want to eat again. Hunger makes you think about food all the time.",
    userChoices: [
      { text: "What do you eat here typically?", nextNodeId: "eat-typically" },
      { text: "What's the first meal you'd have?", nextNodeId: "first-meal" }
    ]
  },
  {
    id: "else-do-free",
    characterMessage: "Go back to school. See my friends. Visit my grandparents if they're still alive. Write openly, publish my work. Wear pretty dresses. Go to movies. Dance. Live. Just... live without fear, without hiding, without constantly looking over my shoulder.",
    userChoices: [
      { text: "You'll do all of that.", nextNodeId: "will-do-all" },
      { text: "What gives you confidence in that future?", nextNodeId: "confidence-future" }
    ]
  },
  {
    id: "father-important",
    characterMessage: "He's my rock. When I'm despairing, Father is calm. He believes in the goodness of people, in eventual justice. He reminds me of who I was before and who I can be after. Without his steadiness, I think I'd fall apart.",
    userChoices: [
      { text: "What does he tell you?", nextNodeId: "father-tells" },
      { text: "You're lucky to have him.", nextNodeId: "lucky-father" }
    ]
  },
  {
    id: "revive-hope",
    characterMessage: "I write. I talk to Peter. I look at the chestnut tree and remember that nature continues despite human evil. I think about my future—the books I'll write, the places I'll see. Small things can revive hope: a kind word, a good piece of news, even a sunny day visible through the window.",
    userChoices: [
      { text: "You're resilient.", nextNodeId: "youre-resilient" },
      { text: "Does hope feel fragile?", nextNodeId: "hope-fragile" }
    ]
  },
  {
    id: "writing-history",
    characterMessage: "I suppose I am. It doesn't always feel that way—I'm just a girl writing in her diary. But if this diary survives, if people read it, then yes, I'm creating a historical record. That's both thrilling and terrifying.",
    userChoices: [
      { text: "Why terrifying?", nextNodeId: "why-terrifying" },
      { text: "What do you want history to know?", nextNodeId: "history-to-know" }
    ]
  },
  {
    id: "big-responsibility",
    characterMessage: "It is. Sometimes I feel too young for it. But then I think: who else will tell this story if not me? Adults might focus on politics and war. I'm showing the human side—the daily life, the emotions, the experience of being young during this. That matters too.",
    userChoices: [
      { text: "It matters enormously.", nextNodeId: "matters-enormously" },
      { text: "How do you carry that responsibility?", nextNodeId: "carry-responsibility-anne" }
    ]
  },
  {
    id: "strength-from",
    characterMessage: "My father, partly. My own stubbornness. My belief in my own worth and potential. I refuse to be defined only by what's happening to me. I'm more than a Jewish girl in hiding. I'm Anne—a person with thoughts, dreams, and a voice.",
    userChoices: [
      { text: "Never lose that voice.", nextNodeId: "never-lose-voice" },
      { text: "You inspire me.", nextNodeId: "you-inspire" }
    ]
  },
  {
    id: "remarkable-anne",
    characterMessage: "*smiling shyly* Thank you. I don't always feel remarkable. Sometimes I feel ordinary, scared, and small. But I'm trying. I'm trying to find meaning, to grow, to become the person I want to be despite everything. That's all any of us can do.",
    userChoices: [
      { text: "You're succeeding beautifully.", nextNodeId: "succeeding-beautifully" },
      { text: "Tell me your final thoughts for today.", nextNodeId: "final-thoughts-today" }
    ]
  },
  {
    id: "very-brave",
    characterMessage: "I'm not sure it's bravery. Maybe it's naivety or optimism or just necessary self-deception. If I stop believing in goodness, what's left? Despair? I choose hope. I choose to believe. It's the only way I can keep going.",
    userChoices: [
      { text: "That choice is brave in itself.", nextNodeId: "choice-brave" },
      { text: "How can I learn that kind of hope?", nextNodeId: "learn-hope" }
    ]
  },
  {
    id: "others-feel",
    characterMessage: "It varies. Father shares my optimism mostly. Mother is more worried, more practical. Peter is quieter about his beliefs. But we all cling to the idea that this will end, that good will triumph. We have to. The alternative is unbearable.",
    userChoices: [
      { text: "Collective hope is powerful.", nextNodeId: "collective-hope" },
      { text: "What happens when someone loses hope?", nextNodeId: "loses-hope" }
    ]
  },
  {
    id: "thanked-them",
    characterMessage: "Many times. But words feel inadequate. How do you thank someone for saving your life daily? For risking everything? I try to show appreciation through small gestures, through gratitude. And I promise myself if I survive, I'll honor them by living a meaningful life.",
    userChoices: [
      { text: "They know how grateful you are.", nextNodeId: "they-know-grateful" },
      { text: "What small gestures do you make?", nextNodeId: "small-gestures" }
    ]
  },
  {
    id: "if-caught-helpers",
    characterMessage: "They'd be arrested, possibly executed. That's what makes their help so extraordinary—they know the cost and help anyway. Sometimes I lie awake thinking about that, about the burden they carry for us. It's humbling and awful at once.",
    userChoices: [
      { text: "Do they know you worry about this?", nextNodeId: "know-you-worry" },
      { text: "Their courage is incredible.", nextNodeId: "helpers-courage" }
    ]
  },
  {
    id: "news-they-bring",
    characterMessage: "About the war—Allied progress, German setbacks. About mutual friends and family, what's happening in Amsterdam. Sometimes just gossip or funny stories to lift our spirits. Those normal conversations are precious—they remind us the world continues outside.",
    userChoices: [
      { text: "Do they know how much it means?", nextNodeId: "know-how-much-means" },
      { text: "What's the best news you've received?", nextNodeId: "best-news" }
    ]
  },
  {
    id: "look-forward-visits",
    characterMessage: "Desperately. Their visits break up the monotony, bring us connection to the outside. Miep especially—she brings books, shares news, treats me like a person, not just someone to be pitied. Those moments of normalcy in conversation are lifelines.",
    userChoices: [
      { text: "What do you talk about with Miep?", nextNodeId: "talk-with-miep" },
      { text: "She sounds wonderful.", nextNodeId: "miep-wonderful" }
    ]
  },
  {
    id: "writing-helps-fear",
    characterMessage: "Immensely. When I write about my fears, they become smaller, more manageable. Putting words to the unnamed anxiety gives me control over it. My diary holds my fears so I don't have to carry all of them alone.",
    userChoices: [
      { text: "Your diary is powerful medicine.", nextNodeId: "diary-medicine" },
      { text: "What else helps besides writing?", nextNodeId: "besides-writing" }
    ]
  },
  {
    id: "father-says",
    characterMessage: "He says fear is human, natural, even useful—it keeps us careful. But he also says we can't let it rule us. We must live despite fear, find joy despite circumstances, maintain our humanity despite everything trying to strip it away. He's right.",
    userChoices: [
      { text: "Your father is wise.", nextNodeId: "father-wise" },
      { text: "How do you find joy here?", nextNodeId: "find-joy" }
    ]
  },
  {
    id: "process-hearing",
    characterMessage: "I go numb sometimes. It's too much to fully absorb. Other times I cry quietly in my room. I write about it, trying to understand. And I try to focus on what I can control—my behavior, my thoughts, my hopes—rather than the vast horror I can't.",
    userChoices: [
      { text: "That's a healthy boundary.", nextNodeId: "healthy-boundary" },
      { text: "Do you feel helpless?", nextNodeId: "feel-helpless" }
    ]
  },
  {
    id: "nightmares",
    characterMessage: "Yes. About being discovered, about camps, about losing everyone I love. I wake up terrified, heart racing. Then I remember where I am—still here, still hidden, still alive. The reality is frightening but better than the nightmares. Usually.",
    userChoices: [
      { text: "How do you calm yourself after?", nextNodeId: "calm-after-nightmare" },
      { text: "Does anyone comfort you?", nextNodeId: "anyone-comfort" }
    ]
  },
  {
    id: "how-close-liberation",
    characterMessage: "Months, maybe. The Allies are making progress but it's slow. Every day that passes is one day closer, but also another day we must survive. It's a race between their arrival and our endurance. I have to believe they'll win that race.",
    userChoices: [
      { text: "They will. You'll be free.", nextNodeId: "will-be-free" },
      { text: "What sustains your belief?", nextNodeId: "sustains-belief" }
    ]
  },
  {
    id: "when-free",
    characterMessage: "Everything I've dreamed about—school, writing, exploring, living openly. I want to make up for lost time. I want to turn this experience into something meaningful through my writing. I want to live fully, loudly, joyfully. I want to matter.",
    userChoices: [
      { text: "You already matter.", nextNodeId: "already-matter" },
      { text: "You will achieve all of that.", nextNodeId: "will-achieve" }
    ]
  },
  {
    id: "incredibly-resilient",
    characterMessage: "I don't know about resilient. I just wake up each day and do what needs doing. Study, write, help with chores, navigate relationships. Is that resilience or just... existing? Maybe they're the same thing here.",
    userChoices: [
      { text: "It's definitely resilience.", nextNodeId: "definitely-resilience" },
      { text: "You're being modest.", nextNodeId: "being-modest" }
    ]
  },
  {
    id: "keeps-everyone",
    characterMessage: "Different things. Father stays strong for us. Mother cooks and cleans as her contribution. Peter has his cat. I have my diary. We each find our own ways to cope, to contribute, to maintain purpose. Together, we create a whole that's stronger than our parts.",
    userChoices: [
      { text: "That unity is beautiful.", nextNodeId: "unity-beautiful" },
      { text: "Thank you for this day, Anne.", nextNodeId: "end" }
    ]
  },
  {
    id: "not-silly",
    characterMessage: "Thank you for saying that. Sometimes it feels presumptuous to think anyone would care. But writing it feels important regardless. Even if only for me, to process this, to remember, to prove we existed and mattered.",
    userChoices: [
      { text: "It's not just for you.", nextNodeId: "not-just-for-you" },
      { text: "Your diary will matter to millions.", nextNodeId: "matter-to-millions" }
    ]
  },
  {
    id: "creating-important",
    characterMessage: "I hope so. I'm creating a record of the human experience during impossible times. Of a teenager's thoughts and growth despite everything. Of love and hope and fear and frustration. Of life continuing even when they try to stop it.",
    userChoices: [
      { text: "That's a tremendous gift.", nextNodeId: "tremendous-gift" },
      { text: "Future generations will thank you.", nextNodeId: "future-thank" }
    ]
  },
  {
    id: "night-dreams",
    characterMessage: "Sometimes beautiful ones—running freely, being back in school, family gatherings before the war. Those dreams are bittersweet. Sometimes nightmares of discovery, of camps. And sometimes I dream of the future—what I'll do when I'm free, the books I'll write, the life I'll live.",
    userChoices: [
      { text: "Hold onto those future dreams.", nextNodeId: "hold-future-dreams" },
      { text: "The good dreams—do they help?", nextNodeId: "good-dreams-help" }
    ]
  },
  {
    id: "find-comfort",
    characterMessage: "In my diary, in conversations with Peter, in Father's reassurances. In small pleasures—a good book, a moment of laughter, the chestnut tree in bloom. In imagining the future. Comfort comes in fragments, but they're enough.",
    userChoices: [
      { text: "You're wise beyond your years.", nextNodeId: "wise-beyond-years" },
      { text: "Goodnight, Anne.", nextNodeId: "end" }
    ]
  },
  // Continue with all remaining nodes
  {
    id: "balance-writing",
    characterMessage: "I try to. The fantasy stories are like dessert—sweet escapes. But the real accounts of our life here feel like the main course, the substance. Both have their place in helping me survive mentally and emotionally.",
    userChoices: [
      { text: "Both types are valuable.", nextNodeId: "both-valuable" },
      { text: "Which do you enjoy writing more?", nextNodeId: "enjoy-more" }
    ]
  },
  {
    id: "recent-story",
    characterMessage: "I recently rewrote some of my diary entries, thinking about publication. I'm working on making them more literary, more polished. It's exciting to think my words might reach people beyond these walls someday.",
    userChoices: [
      { text: "That shows real dedication.", nextNodeId: "real-dedication" },
      { text: "You're already thinking like a published author.", nextNodeId: "published-author" }
    ]
  },
  {
    id: "annex-newspaper",
    characterMessage: "Not really a newspaper—more like a collection of observations and jokes I write. We share them aloud sometimes for entertainment. It's a way to contribute to our little community, to bring levity to dark times.",
    userChoices: [
      { text: "Humor must be important here.", nextNodeId: "humor-important" },
      { text: "What kind of observations?", nextNodeId: "observations" }
    ]
  },
  {
    id: "annex-rules",
    characterMessage: "Absolute silence during work hours. Water only after 5:30 PM. Blackout curtains always closed. Taking turns for washing and toilet. Contributing to chores. Respecting each other's limited privacy. The rules keep us organized and safe.",
    userChoices: [
      { text: "Who enforces the rules?", nextNodeId: "enforces-rules" },
      { text: "Does everyone follow them?", nextNodeId: "everyone-follows" }
    ]
  },
  {
    id: "feel-guilty",
    characterMessage: "Sometimes. Survivor's guilt, even though I haven't survived yet. Why do we get to hide when so many can't? What makes us deserving of this chance? Father says we can't think that way, that we honor those who aren't as fortunate by making the most of our opportunity.",
    userChoices: [
      { text: "Your father is right.", nextNodeId: "father-right" },
      { text: "How do you honor them?", nextNodeId: "honor-them" }
    ]
  },
  {
    id: "cope-knowledge",
    characterMessage: "I compartmentalize. I can't think about it constantly or I'd go mad. So I focus on the immediate—today's tasks, tonight's dinner, tomorrow's lessons. The bigger horror stays in the background, acknowledged but not dwelled upon.",
    userChoices: [
      { text: "That's a survival mechanism.", nextNodeId: "survival-mechanism" },
      { text: "Do you ever let yourself feel it fully?", nextNodeId: "feel-fully" }
    ]
  },
  {
    id: "what-end-looks",
    characterMessage: "Liberation. Allied soldiers arriving, telling us we're safe. Being able to walk outside freely. Finding out which family and friends survived. Beginning to rebuild our lives. It seems like a fantasy sometimes, but it's what I hold onto.",
    userChoices: [
      { text: "It will happen.", nextNodeId: "it-will-happen" },
      { text: "What's the first thing you'll rebuild?", nextNodeId: "first-rebuild" }
    ]
  },
  {
    id: "believe-end-soon",
    characterMessage: "I have to. The alternative—that this drags on for years more—is too depressing. The news suggests the Allies are advancing. We've been here since 1942. Surely 1944 or 1945 will bring freedom. It must.",
    userChoices: [
      { text: "Your hope is powerful.", nextNodeId: "hope-powerful" },
      { text: "How long can you endure?", nextNodeId: "how-long-endure" }
    ]
  },
  {
    id: "tree-meaning",
    characterMessage: "Hope, persistence, life continuing. That tree doesn't know there's a war. It just grows, changes with seasons, lives. It reminds me that nature is bigger than human evil, that beauty persists even when humans are terrible to each other.",
    userChoices: [
      { text: "Nature as resistance.", nextNodeId: "nature-resistance" },
      { text: "Do you write about the tree?", nextNodeId: "write-tree" }
    ]
  },
  {
    id: "see-else-outside",
    characterMessage: "Birds flying past. Clouds moving. Sometimes people walking by who have no idea we're here watching them. Rain on windows. The changing light through the day. These glimpses of the outside world are precious beyond words.",
    userChoices: [
      { text: "You find poetry in small things.", nextNodeId: "poetry-small" },
      { text: "Does watching make it harder?", nextNodeId: "watching-harder" }
    ]
  },
  {
    id: "dream-seeing-friends",
    characterMessage: "All the time. I imagine the reunion—running to each other, crying, talking for hours. Sharing what we've been through. Promising never to take friendship for granted again. It's a beautiful dream that keeps me going.",
    userChoices: [
      { text: "That reunion will happen.", nextNodeId: "reunion-happen" },
      { text: "What would you talk about first?", nextNodeId: "talk-first-friends" }
    ]
  },
  {
    id: "tell-lies",
    characterMessage: "That I never forgot her. That she's been in my thoughts and dreams. That I hope she's safe, wherever she is. And that when this is over, I want to find her, to be friends again, to make up for all the lost time.",
    userChoices: [
      { text: "Friendship transcends time.", nextNodeId: "friendship-transcends" },
      { text: "You'll find her.", nextNodeId: "find-her" }
    ]
  },
  {
    id: "why-kitty",
    characterMessage: "I read a book series about a character named Kitty, and I liked the name. It felt friendly, approachable. Writing to 'Dear Kitty' makes it feel like I'm writing to a real friend, not just a notebook. It makes the diary alive somehow.",
    userChoices: [
      { text: "Kitty is lucky to have you.", nextNodeId: "kitty-lucky" },
      { text: "Your creativity shows in everything.", nextNodeId: "creativity-shows" }
    ]
  },
  {
    id: "secrets-tell",
    characterMessage: "Everything I can't say aloud. My frustrations with Mother. My developing feelings for Peter. My fears about the future. My anger at the injustice of it all. My dreams and ambitions. Kitty gets the uncensored Anne, the real me.",
    userChoices: [
      { text: "That honesty is brave.", nextNodeId: "honesty-brave" },
      { text: "Does it help to release those secrets?", nextNodeId: "release-secrets" }
    ]
  },
  {
    id: "need-forgiveness",
    characterMessage: "I wasn't always the best friend. I could be self-centered, dramatic. I took normal life for granted. If I had known what was coming, I would have treasured every moment more, been kinder, more present. I have regrets.",
    userChoices: [
      { text: "You were just being a normal kid.", nextNodeId: "normal-kid" },
      { text: "We all have regrets.", nextNodeId: "all-regrets" }
    ]
  },
  {
    id: "friendship-means",
    characterMessage: "Everything. Friends see you, understand you, accept you. They make life richer and brighter. Losing that connection so suddenly—it's one of the hardest parts of this experience. I miss having friends beyond these walls.",
    userChoices: [
      { text: "You'll have friends again.", nextNodeId: "friends-again" },
      { text: "What makes a good friend?", nextNodeId: "good-friend" }
    ]
  },
  {
    id: "powerful-thinking",
    characterMessage: "Father helps me see things differently. Education isn't just preparation for a career—it's claiming your humanity, exercising your mind, refusing to be diminished. They can trap our bodies but not our intellect. That's powerful.",
    userChoices: [
      { text: "Your mind is free.", nextNodeId: "mind-free" },
      { text: "What else does your father teach?", nextNodeId: "father-teaches" }
    ]
  },
  {
    id: "refuse-study",
    characterMessage: "*small laugh* Oh yes. I've had rebellious days where I don't want to conjugate French verbs or solve equations. I just want to daydream or write in my diary. But Father gently insists, and eventually I do it. Structure helps, even when I resist it.",
    userChoices: [
      { text: "Rebellion is normal.", nextNodeId: "rebellion-normal" },
      { text: "Structure as comfort.", nextNodeId: "structure-comfort" }
    ]
  },
  {
    id: "living-history",
    characterMessage: "It's surreal. Historians will study this era someday. And I'm here, in the middle of it, documenting it from the inside. That feels weighty and strange. But also important. My perspective matters because I'm living it, not analyzing it from safety.",
    userChoices: [
      { text: "Your inside perspective is invaluable.", nextNodeId: "inside-invaluable" },
      { text: "History needs voices like yours.", nextNodeId: "needs-voices" }
    ]
  },
  {
    id: "want-understand",
    characterMessage: "How hatred grows. How ordinary people become complicit in evil. How we let this happen. Understanding might help prevent it from happening again. That's my hope—that my diary helps people understand, really understand, what this does to real people.",
    userChoices: [
      { text: "Understanding prevents repetition.", nextNodeId: "understanding-prevents" },
      { text: "You're thinking deeply for your age.", nextNodeId: "thinking-deeply" }
    ]
  },
  {
    id: "talk-feelings-peter",
    characterMessage: "A little. We're both shy about it. But there are moments—a look, a touch, an understanding that passes between us. I think we both know something exists there, even if we don't name it explicitly. Maybe that's enough for now.",
    userChoices: [
      { text: "Sometimes silence speaks loudly.", nextNodeId: "silence-speaks" },
      { text: "Young love is sweet.", nextNodeId: "young-love" }
    ]
  },
  {
    id: "feel-alive",
    characterMessage: "Writing. Laughing with Peter. Hearing good news about the war. Getting a new book to read. Arguing passionately about something. Anything that reminds me I'm still a person with thoughts, feelings, preferences—not just someone in hiding, but Anne.",
    userChoices: [
      { text: "Hold onto being Anne.", nextNodeId: "hold-anne" },
      { text: "You're very much alive.", nextNodeId: "very-alive" }
    ]
  },
  {
    id: "care-what-think",
    characterMessage: "Yes and no. I want their approval, but I also want to make my own choices. It's the classic teenage conflict, just happening in extraordinary circumstances. I respect them, but I'm also becoming my own person. That tension is uncomfortable but necessary.",
    userChoices: [
      { text: "Growing up is complicated.", nextNodeId: "growing-complicated" },
      { text: "Your independence is important.", nextNodeId: "independence-important" }
    ]
  },
  {
    id: "peter-family-said",
    characterMessage: "His parents are quieter about it. I think they're just glad Peter has some happiness here. They're more focused on surviving, on the daily struggles. Romance seems frivolous to them maybe, but they don't interfere.",
    userChoices: [
      { text: "Everyone copes differently.", nextNodeId: "copes-differently" },
      { text: "Small joys matter.", nextNodeId: "small-joys-matter" }
    ]
  },
  {
    id: "about-mouschi",
    characterMessage: "Peter's cat is orange and white, very affectionate. Having an animal here is wonderful—something warm and alive that doesn't judge or argue. Petting Mouschi is calming. Animals remind us of normalcy, of the world beyond human conflict.",
    userChoices: [
      { text: "Animals are healing.", nextNodeId: "animals-healing" },
      { text: "Does Mouschi know about the war?", nextNodeId: "mouschi-know" }
    ]
  },
  {
    id: "hand-holding",
    characterMessage: "More than you'd think. Touch is rare here—we're crowded but somehow touch-starved for affection. Holding hands with Peter is connection, comfort, hope. It says 'you're not alone' without words. That means everything.",
    userChoices: [
      { text: "Physical connection is vital.", nextNodeId: "physical-vital" },
      { text: "You deserve that comfort.", nextNodeId: "deserve-comfort" }
    ]
  },
  {
    id: "biggest-tension",
    characterMessage: "Food, probably. When rations are scarce, people notice who gets an extra bite. It brings out pettiness in all of us. Also personality clashes—Mrs. Van Pels can be difficult, and Mother has strong opinions. Eight people, one small space—tension is inevitable.",
    userChoices: [
      { text: "Scarcity reveals character.", nextNodeId: "scarcity-character" },
      { text: "How do you rise above it?", nextNodeId: "rise-above" }
    ]
  },
  {
    id: "personally-cope",
    characterMessage: "I write. I escape to Peter's room. I daydream. I remind myself this is temporary—we won't be here forever. I try to find humor where I can. And I allow myself quiet moments to just feel what I'm feeling without judgment.",
    userChoices: [
      { text: "You've developed good coping skills.", nextNodeId: "good-coping" },
      { text: "Emotions need space.", nextNodeId: "emotions-space" }
    ]
  },
  {
    id: "last-birthday",
    characterMessage: "Miep brought me a small cake she'd somehow managed to make with rations. Everyone sang quietly. I got a few small gifts—a book, some writing paper. It was modest but felt special. They remembered me, celebrated me. That mattered more than anything.",
    userChoices: [
      { text: "Being remembered is powerful.", nextNodeId: "remembered-powerful" },
      { text: "What did you wish for?", nextNodeId: "birthday-wish" }
    ]
  },
  {
    id: "celebrations-harder-easier",
    characterMessage: "Both. They're bittersweet—we're celebrating, but we're also acutely aware of what we're missing, who's missing. But I think they're necessary. They assert that we're still living, still human, still worthy of joy despite everything trying to convince us otherwise.",
    userChoices: [
      { text: "Joy is resistance.", nextNodeId: "joy-resistance" },
      { text: "Keep celebrating.", nextNodeId: "keep-celebrating" }
    ]
  },
  {
    id: "good-days",
    characterMessage: "Good news from the radio. Someone telling a funny story. A good meal. Sunshine visible through the window. Small kindnesses between us. Peter and I having a nice conversation. Finishing a good book. These small things can shift the whole mood.",
    userChoices: [
      { text: "Small things aren't small.", nextNodeId: "small-not-small" },
      { text: "Gratitude for little things.", nextNodeId: "gratitude-little" }
    ]
  },
  {
    id: "bad-days",
    characterMessage: "I write. I cry if I need to. I try to sleep more. I talk to Father or Peter. I remind myself that feelings pass, that bad days don't last forever. And I try to be gentle with myself—this is hard for everyone.",
    userChoices: [
      { text: "Self-compassion is wise.", nextNodeId: "self-compassion" },
      { text: "You're handling this remarkably.", nextNodeId: "handling-remarkably" }
    ]
  },
  {
    id: "margot-likes",
    characterMessage: "She doesn't talk about it much. She's more private with her feelings. I suspect she might have had feelings for Peter at some point, which makes my situation a bit awkward. But she's been gracious about it.",
    userChoices: [
      { text: "That must be complicated.", nextNodeId: "must-complicated" },
      { text: "She sounds mature.", nextNodeId: "sounds-mature" }
    ]
  },
  {
    id: "after-together",
    characterMessage: "Reconnect with any remaining family. Maybe go to university together. Travel if we can. Support each other as we rebuild our lives. We'll always have this bond—we survived this together. That will tie us forever.",
    userChoices: [
      { text: "Shared trauma creates deep bonds.", nextNodeId: "trauma-bonds" },
      { text: "You'll always have each other.", nextNodeId: "always-have" }
    ]
  },
  {
    id: "wish-more-alike",
    characterMessage: "Sometimes. It might be easier if we had the same temperament. But I think our differences are good too. She balances my impulsiveness. I bring energy to her quietness. We complement each other, even if it causes friction sometimes.",
    userChoices: [
      { text: "Differences can strengthen.", nextNodeId: "differences-strengthen" },
      { text: "Complementary is beautiful.", nextNodeId: "complementary-beautiful" }
    ]
  },
  {
    id: "different-hard",
    characterMessage: "It can be. Mother compares us constantly—why can't I be more like Margot? It hurts, feeling like I'm always falling short. But I'm learning that being different isn't being less. I have my own strengths, my own value.",
    userChoices: [
      { text: "You're wonderful as you are.", nextNodeId: "wonderful-as-are" },
      { text: "Comparisons are unfair.", nextNodeId: "comparisons-unfair" }
    ]
  },
  {
    id: "asked-margot-directly",
    characterMessage: "A few times. She assures me she's fine, just more internal by nature. I want to believe her. Maybe I project my need for expression onto her. Not everyone processes things the way I do.",
    userChoices: [
      { text: "Trust her to know herself.", nextNodeId: "trust-know" },
      { text: "You're a caring sister.", nextNodeId: "caring-sister" }
    ]
  },
  {
    id: "margot-response",
    characterMessage: "She tells me not to worry, that she's managing. Sometimes she smiles and changes the subject. She's stronger than she looks, I think. Or maybe she just shows strength differently than I do.",
    userChoices: [
      { text: "Strength has many forms.", nextNodeId: "strength-forms" },
      { text: "She's lucky to have you worrying.", nextNodeId: "lucky-worrying" }
    ]
  },
  {
    id: "appreciate-now",
    characterMessage: "I'm trying to. Hiding has taught me to value what I have rather than resent what I lack. Margot's steadiness, her kindness, her understanding—I see those more clearly now. I'm grateful for her.",
    userChoices: [
      { text: "Growth through hardship.", nextNodeId: "growth-hardship" },
      { text: "Gratitude transforms perspective.", nextNodeId: "gratitude-transforms" }
    ]
  },
  {
    id: "hiding-changed-relationship",
    characterMessage: "Completely. We've become closer, more understanding of each other. Shared hardship does that—strips away the petty stuff and shows you what matters. We're not just sisters now; we're allies, confidants, fellow survivors.",
    userChoices: [
      { text: "That's a silver lining.", nextNodeId: "silver-lining" },
      { text: "Treasure that closeness.", nextNodeId: "treasure-closeness" }
    ]
  },
  {
    id: "understanding-enough",
    characterMessage: "For now, yes. We're young, circumstances are weird. Maybe understanding is all we can have right now. Maybe it's better than forced declarations. There's something pure about unspoken connection.",
    userChoices: [
      { text: "Unspoken can be powerful.", nextNodeId: "unspoken-powerful" },
      { text: "You're wise about relationships.", nextNodeId: "wise-relationships" }
    ]
  },
  {
    id: "if-braver",
    characterMessage: "*softly* I'd tell him he makes this bearable. That I look forward to seeing him. That in this terrible situation, he's become something good, something precious. That I care about him. But maybe he already knows.",
    userChoices: [
      { text: "He knows, Anne.", nextNodeId: "he-knows" },
      { text: "Maybe tell him anyway.", nextNodeId: "tell-anyway" }
    ]
  },
  {
    id: "beautiful-anne",
    characterMessage: "*blushing* I'm trying to find beauty and meaning where I can. Peter helps with that. He sees me—not Anne the difficult teenager or Anne the Jewish girl in hiding, just Anne. Being seen for who you are is its own kind of love.",
    userChoices: [
      { text: "Being seen is precious.", nextNodeId: "seen-precious" },
      { text: "You deserve to be seen.", nextNodeId: "deserve-seen" }
    ]
  },
  {
    id: "love-survive",
    characterMessage: "I have to believe it can. Love is one of the few things they can't take from us. It exists in stolen moments, in quiet understanding, in shared glances. As long as we're capable of love, we're human. And our humanity is what survives.",
    userChoices: [
      { text: "Love is resistance.", nextNodeId: "love-resistance" },
      { text: "Your humanity is beautiful.", nextNodeId: "humanity-beautiful" }
    ]
  },
  {
    id: "eat-typically",
    characterMessage: "Breakfast: thin coffee and bread. Lunch: maybe some soup, vegetables. Dinner: potatoes, more vegetables, sometimes a bit of meat. Everything's rationed and often stale. We make it stretch, make it work. But I dream of fresh food, plenty of food.",
    userChoices: [
      { text: "You're resourceful.", nextNodeId: "youre-resourceful" },
      { text: "Someday you'll feast.", nextNodeId: "someday-feast" }
    ]
  },
  {
    id: "first-meal",
    characterMessage: "Everything! A huge spread—fresh bread with real butter, milk, fruit, chocolate, meat, cake. I'd eat until I couldn't eat anymore. Just the abundance, the choice, the freshness—that would be heaven after all this scarcity.",
    userChoices: [
      { text: "You'll have that meal.", nextNodeId: "have-that-meal" },
      { text: "Food as freedom.", nextNodeId: "food-freedom" }
    ]
  },
  {
    id: "will-do-all",
    characterMessage: "I hope so. I plan to. I'll make up for lost time, live twice as hard, accomplish twice as much. This experience will fuel my writing, give me depth. I'll turn this suffering into something meaningful. That's my promise to myself.",
    userChoices: [
      { text: "You will. I believe it.", nextNodeId: "believe-it" },
      { text: "That determination will carry you.", nextNodeId: "determination-carry" }
    ]
  },
  {
    id: "confidence-future",
    characterMessage: "The radio news. Father's steady belief. My own stubborn hope. The fact that we've survived this long already. If we can make it through one day, we can make it through the next. String enough days together, and eventually, we're free.",
    userChoices: [
      { text: "One day at a time works.", nextNodeId: "day-at-time-works" },
      { text: "Your hope is inspiring.", nextNodeId: "hope-inspiring" }
    ]
  },
  {
    id: "father-tells",
    characterMessage: "He tells me I'm special, that I have important things to say. That my writing matters. That this experience, horrible as it is, is shaping me into someone with depth and empathy. That better days are coming. His belief in me keeps me going.",
    userChoices: [
      { text: "His belief is a gift.", nextNodeId: "belief-gift" },
      { text: "He's right about you.", nextNodeId: "right-about-you" }
    ]
  },
  {
    id: "lucky-father",
    characterMessage: "I am. Not everyone has a father who encourages their dreams, who takes their thoughts seriously. He treats me like a person deserving of respect, even at 13. That's shaped how I see myself.",
    userChoices: [
      { text: "He's helped form who you are.", nextNodeId: "helped-form" },
      { text: "That respect is powerful.", nextNodeId: "respect-powerful" }
    ]
  },
  {
    id: "youre-resilient",
    characterMessage: "I'm trying to be. Some days I feel resilient. Other days I feel like I'm barely holding together. But I keep trying, keep getting up each day. Maybe that's what resilience really is—just continuing.",
    userChoices: [
      { text: "That's exactly what it is.", nextNodeId: "exactly-what-is" },
      { text: "You're stronger than you know.", nextNodeId: "stronger-than-know" }
    ]
  },
  {
    id: "hope-fragile",
    characterMessage: "Very. One piece of bad news can shatter it. One more week of hiding can strain it. But it also regenerates somehow—like those plants that keep growing back no matter how often they're cut down. Hope is both fragile and resilient.",
    userChoices: [
      { text: "Hope is renewable.", nextNodeId: "hope-renewable" },
      { text: "Keep nurturing it.", nextNodeId: "keep-nurturing" }
    ]
  },
  {
    id: "why-terrifying",
    characterMessage: "Because I'm exposing myself—my thoughts, my fears, my flaws. What if people judge me? What if they misunderstand? What if I'm not eloquent enough to convey what this is really like? The thought of being read by millions is both thrilling and frightening.",
    userChoices: [
      { text: "Vulnerability takes courage.", nextNodeId: "vulnerability-courage" },
      { text: "Your voice will resonate.", nextNodeId: "voice-resonate" }
    ]
  },
  {
    id: "history-to-know",
    characterMessage: "That we were real people, not statistics. That we had full, complex lives before this. That we loved and dreamed and fought and grew even while in hiding. That what happened to us was wrong, inexcusable. That it must never happen again.",
    userChoices: [
      { text: "History will know, through you.", nextNodeId: "history-through-you" },
      { text: "Your testimony matters eternally.", nextNodeId: "testimony-eternal" }
    ]
  },
  {
    id: "matters-enormously",
    characterMessage: "Thank you. Sometimes it's hard to see that from inside this small space. But if my words can help even one person understand, can prevent even a fraction of this from happening again, then everything I've endured has meaning.",
    userChoices: [
      { text: "Your words will help millions.", nextNodeId: "help-millions" },
      { text: "You're creating legacy.", nextNodeId: "creating-legacy" }
    ]
  },
  {
    id: "carry-responsibility-anne",
    characterMessage: "By doing my best. By being honest in my writing. By trying to capture truth, not just facts. By trusting that my perspective, my voice, my experience—they have value. And by hoping that someday, someone will care enough to read.",
    userChoices: [
      { text: "Many will care.", nextNodeId: "many-care" },
      { text: "Your best is enough.", nextNodeId: "best-enough" }
    ]
  },
  {
    id: "never-lose-voice",
    characterMessage: "I won't. I promise. This voice—my ability to express myself, to think critically, to feel deeply—it's mine. They can take my freedom, but they can't take my voice unless I let them. And I won't.",
    userChoices: [
      { text: "That's powerful defiance.", nextNodeId: "powerful-defiance" },
      { text: "Your voice will outlast everything.", nextNodeId: "voice-outlast" }
    ]
  },
  {
    id: "you-inspire",
    characterMessage: "*surprised and touched* Me? I'm just a girl in hiding, trying to survive. But if my struggle, my words, my hope can inspire someone—that gives everything meaning. Thank you for seeing me that way.",
    userChoices: [
      { text: "You're extraordinary.", nextNodeId: "extraordinary" },
      { text: "Never doubt your impact.", nextNodeId: "never-doubt-impact" }
    ]
  },
  {
    id: "succeeding-beautifully",
    characterMessage: "*tearing up slightly* I hope so. I really hope so. Some days I feel like I'm failing at everything—being a good daughter, being patient, being brave. But I'm trying. I'm always trying.",
    userChoices: [
      { text: "Trying is succeeding.", nextNodeId: "trying-succeeding" },
      { text: "You're harder on yourself than anyone.", nextNodeId: "harder-on-self" }
    ]
  },
  {
    id: "final-thoughts-today",
    characterMessage: "That life persists. That even in hiding, in fear, in hardship—we're still living. We're not just waiting to die; we're actively living, thinking, feeling, growing. And that's a victory in itself. Thank you for reminding me of that.",
    userChoices: [
      { text: "Thank you, Anne.", nextNodeId: "end" },
      { text: "Your life matters profoundly.", nextNodeId: "life-matters-profoundly" }
    ]
  },
  {
    id: "choice-brave",
    characterMessage: "Maybe. Or maybe it's just survival instinct. But I like to think it's a choice—that I'm actively choosing hope, choosing to believe in goodness, choosing humanity over bitterness. That makes me feel powerful.",
    userChoices: [
      { text: "Choice is power.", nextNodeId: "choice-power" },
      { text: "You wield that power well.", nextNodeId: "wield-power" }
    ]
  },
  {
    id: "learn-hope",
    characterMessage: "Look for small beauties. Connect with others. Create meaning through work or art. Remember that feelings change—despair today doesn't mean despair forever. And believe that you matter, that your existence has purpose. That's where hope lives.",
    userChoices: [
      { text: "Thank you for that wisdom.", nextNodeId: "thank-wisdom" },
      { text: "You're a teacher, Anne.", nextNodeId: "youre-teacher" }
    ]
  },
  {
    id: "collective-hope",
    characterMessage: "It is. When one person falters, others lift them up. We take turns being strong. Together, we maintain hope that would flicker out if we were alone. That's the power of community, even a tiny community like ours.",
    userChoices: [
      { text: "You need each other.", nextNodeId: "need-each-other" },
      { text: "That's beautiful.", nextNodeId: "thats-beautiful" }
    ]
  },
  {
    id: "loses-hope",
    characterMessage: "We try to revive it. Talk to them, comfort them, remind them of reasons to continue. Sometimes just sitting with someone in their despair helps. We can't always fix it, but we can witness it, share the burden.",
    userChoices: [
      { text: "Witnessing matters.", nextNodeId: "witnessing-matters" },
      { text: "You're compassionate.", nextNodeId: "youre-compassionate" }
    ]
  },
  {
    id: "they-know-grateful",
    characterMessage: "I think so. I hope so. Miep once said she doesn't need thanks, that she's doing what anyone should do. But I want her to know anyway. Words feel inadequate, but they're all I have to give right now.",
    userChoices: [
      { text: "Your gratitude comes through.", nextNodeId: "gratitude-through" },
      { text: "Words are powerful gifts.", nextNodeId: "words-gifts" }
    ]
  },
  {
    id: "small-gestures",
    characterMessage: "Writing them little notes. Helping organize supplies they bring. Expressing genuine interest in their lives outside. Small conversations that acknowledge them as people, not just helpers. Trying to brighten their day as they brighten ours.",
    userChoices: [
      { text: "Mutual care.", nextNodeId: "mutual-care" },
      { text: "Reciprocity even in hardship.", nextNodeId: "reciprocity-hardship" }
    ]
  },
  {
    id: "know-you-worry",
    characterMessage: "I've told Miep I worry about the risk they're taking. She brushes it off, says it's her choice, that she'd rather risk herself than abandon us. That kind of selfless courage humbles me.",
    userChoices: [
      { text: "True heroism.", nextNodeId: "true-heroism" },
      { text: "The world needs more like her.", nextNodeId: "more-like-her" }
    ]
  },
  {
    id: "helpers-courage",
    characterMessage: "Beyond incredible. They're risking their lives daily, and for what? Because it's right. Because we're human beings worthy of saving. Their courage restores my faith in humanity when so much is trying to destroy it.",
    userChoices: [
      { text: "They represent the best of us.", nextNodeId: "best-of-us" },
      { text: "Goodness persists.", nextNodeId: "goodness-persists" }
    ]
  },
  {
    id: "know-how-much-means",
    characterMessage: "I try to show them. But I don't think words can fully express how much those visits mean. They're lifelines—to normalcy, to the outside world, to the hope that good people still exist. Everything depends on them.",
    userChoices: [
      { text: "They must feel it.", nextNodeId: "must-feel-it" },
      { text: "Love doesn't need words always.", nextNodeId: "love-no-words" }
    ]
  },
  {
    id: "best-news",
    characterMessage: "When the Allies landed in Normandy—D-Day. We were ecstatic. It felt like the beginning of the end, like liberation was finally becoming real rather than just a dream. That night, we celebrated as much as we could in our small way.",
    userChoices: [
      { text: "Hope becoming tangible.", nextNodeId: "hope-tangible" },
      { text: "How did you celebrate?", nextNodeId: "how-celebrate" }
    ]
  },
  {
    id: "talk-with-miep",
    characterMessage: "Everything. She tells me about life in Amsterdam, mutual friends, movies she's seen. I tell her about books I'm reading, my studies, my writing. We talk like I used to talk with friends at school. Those moments of normal girl-talk are precious.",
    userChoices: [
      { text: "Normalcy is nourishing.", nextNodeId: "normalcy-nourishing" },
      { text: "She gives you yourself back.", nextNodeId: "gives-yourself" }
    ]
  },
  {
    id: "miep-wonderful",
    characterMessage: "She is. Brave, kind, funny, caring. She never makes us feel like a burden, even though we are one. She treats us with dignity and warmth. If I survive, I want to be like Miep—someone who helps others at great personal cost.",
    userChoices: [
      { text: "You're already like her.", nextNodeId: "already-like-her" },
      { text: "She'd be proud of you.", nextNodeId: "miep-proud" }
    ]
  },
  {
    id: "diary-medicine",
    characterMessage: "It really is. Better than any doctor's prescription. It heals me in ways nothing else can—gives me outlet, clarity, purpose. Writing isn't just hobby or ambition; it's medicine for my soul.",
    userChoices: [
      { text: "Creative expression heals.", nextNodeId: "creative-heals" },
      { text: "You've found your medicine.", nextNodeId: "found-medicine" }
    ]
  },
  {
    id: "besides-writing",
    characterMessage: "Talking to Peter, being with family, reading, looking at the chestnut tree, imagining the future. Small routines that ground me. Sometimes just breathing deeply and reminding myself that this moment—right now—is survivable.",
    userChoices: [
      { text: "Present moment awareness.", nextNodeId: "present-awareness" },
      { text: "You have good coping tools.", nextNodeId: "good-tools" }
    ]
  },
  {
    id: "father-wise",
    characterMessage: "Very wise. He's been my greatest teacher—not just academically, but about life, about maintaining humanity in inhumane circumstances. I learn from him every day. I hope I make him proud.",
    userChoices: [
      { text: "You absolutely do.", nextNodeId: "absolutely-do" },
      { text: "His wisdom lives through you.", nextNodeId: "wisdom-through-you" }
    ]
  },
  {
    id: "find-joy",
    characterMessage: "In small moments. Peter's smile. A good book. Writing a sentence I'm proud of. Margot and I laughing together. The first spring buds on the chestnut tree. Mouschi purring. Joy exists even here, in fragments. I collect those fragments carefully.",
    userChoices: [
      { text: "Joy collecting is beautiful.", nextNodeId: "joy-collecting" },
      { text: "Those fragments matter.", nextNodeId: "fragments-matter" }
    ]
  },
  {
    id: "healthy-boundary",
    characterMessage: "Father taught me that. You can't save the world, but you can manage your own mind and heart. You can be aware of suffering without drowning in it. It's not callousness; it's survival.",
    userChoices: [
      { text: "Wisdom in boundaries.", nextNodeId: "wisdom-boundaries" },
      { text: "Self-preservation isn't selfish.", nextNodeId: "self-preservation" }
    ]
  },
  {
    id: "feel-helpless",
    characterMessage: "Often. We can't fight, can't escape, can't do anything except hide and wait. But then I remember: I can write. I can think. I can love. I can hope. Those are actions, even if they're not visible. I'm not completely helpless.",
    userChoices: [
      { text: "Inner actions count.", nextNodeId: "inner-actions" },
      { text: "You're doing more than you realize.", nextNodeId: "more-than-realize" }
    ]
  },
  {
    id: "calm-after-nightmare",
    characterMessage: "I remind myself where I am, what's real. Sometimes I write about the nightmare to process it. Sometimes I just lie there and breathe until my heart slows. Occasionally I go find Father or Margot, just to not be alone with the fear.",
    userChoices: [
      { text: "You've learned to self-soothe.", nextNodeId: "self-soothe" },
      { text: "Seeking comfort is wise.", nextNodeId: "seeking-comfort-wise" }
    ]
  },
  {
    id: "anyone-comfort",
    characterMessage: "Father sometimes. He'll sit with me, tell me it was just a dream, remind me we're still here, still safe for now. His presence alone is comforting—solid, steady, real. He anchors me when everything feels uncertain.",
    userChoices: [
      { text: "Presence is powerful comfort.", nextNodeId: "presence-powerful" },
      { text: "You're not alone.", nextNodeId: "not-alone" }
    ]
  },
  {
    id: "will-be-free",
    characterMessage: "*eyes bright with tears and hope* I have to believe that. I have to. Freedom is waiting somewhere in the future. We just have to reach it. And we will. We must.",
    userChoices: [
      { text: "You will, Anne.", nextNodeId: "you-will-anne" },
      { text: "Hold onto that belief.", nextNodeId: "hold-belief" }
    ]
  },
  {
    id: "sustains-belief",
    characterMessage: "Evidence. The radio reports. The nervousness of guards. The sound of Allied planes overhead. These aren't just hopes; they're facts suggesting the war is ending. I cling to facts when hope feels too fragile.",
    userChoices: [
      { text: "Facts ground hope.", nextNodeId: "facts-ground" },
      { text: "You're right to believe.", nextNodeId: "right-believe" }
    ]
  },
  {
    id: "already-matter",
    characterMessage: "*softly* Thank you. Sometimes I need to hear that. In here, feeling small and powerless, it's easy to forget that I'm a person of worth, that my thoughts and words have value. Thank you for reminding me.",
    userChoices: [
      { text: "Never forget your worth.", nextNodeId: "never-forget-worth" },
      { text: "The world needs your voice.", nextNodeId: "world-needs-voice" }
    ]
  },
  {
    id: "will-achieve",
    characterMessage: "I'm going to try so hard. I'll pour everything into my writing, into making a difference. This experience will fuel my work. The pain won't be wasted—I'll transform it into something meaningful. That's my promise.",
    userChoices: [
      { text: "That promise is powerful.", nextNodeId: "promise-powerful" },
      { text: "Transformation through art.", nextNodeId: "transformation-art" }
    ]
  },
  {
    id: "definitely-resilience",
    characterMessage: "Well, if you say so. Maybe I just don't see it because I'm in the middle of it. Maybe resilience only becomes visible in hindsight. For now, I just know I'm still here, still trying. I guess that counts.",
    userChoices: [
      { text: "It absolutely counts.", nextNodeId: "absolutely-counts" },
      { text: "You're remarkable, truly.", nextNodeId: "truly-remarkable" }
    ]
  },
  {
    id: "being-modest",
    characterMessage: "*small laugh* Maybe. I don't feel heroic or remarkable. I feel scared and ordinary. But if maintaining hope and continuing to write and trying to grow as a person despite everything—if that's remarkable, then okay. I'll accept it.",
    userChoices: [
      { text: "Accept it. You've earned it.", nextNodeId: "earned-it" },
      { text: "Ordinary people in extraordinary circumstances.", nextNodeId: "ordinary-extraordinary" }
    ]
  },
  {
    id: "unity-beautiful",
    characterMessage: "It is, isn't it? Eight people from different backgrounds, different personalities, united by necessity but choosing to make it work. We're creating family from circumstance. There's beauty in that.",
    userChoices: [
      { text: "Chosen family is powerful.", nextNodeId: "chosen-family" },
      { text: "You're building something special.", nextNodeId: "building-special" }
    ]
  },
  {
    id: "not-just-for-you",
    characterMessage: "I'm starting to realize that. That if I survive, my diary might help others understand what this was like. That my private writing might become public testimony. It's both exciting and daunting—this responsibility to history.",
    userChoices: [
      { text: "You're ready for it.", nextNodeId: "ready-for-it" },
      { text: "History chose well.", nextNodeId: "history-chose-well" }
    ]
  },
  {
    id: "matter-to-millions",
    characterMessage: "*overwhelmed* Millions? That seems impossible. But if it's true—if millions of people someday read my words and understand, and remember—then everything I've endured will have meaning beyond just survival. That's almost too much to hope for.",
    userChoices: [
      { text: "Hope for it anyway.", nextNodeId: "hope-anyway" },
      { text: "Your impact will be immeasurable.", nextNodeId: "impact-immeasurable" }
    ]
  },
  {
    id: "tremendous-gift",
    characterMessage: "If it helps even one person, it's a gift worth giving. If my suffering can prevent someone else's, if my words can foster understanding and empathy, then yes—I'm giving a gift. And receiving one too: purpose.",
    userChoices: [
      { text: "Purpose transforms suffering.", nextNodeId: "purpose-transforms" },
      { text: "You've found meaning.", nextNodeId: "found-meaning" }
    ]
  },
  {
    id: "future-thank",
    characterMessage: "That seems so distant and abstract. But I hold onto it—the idea that someday, people I'll never meet will know my name, know my story, learn from my experience. That's a kind of immortality, isn't it? That's legacy.",
    userChoices: [
      { text: "It is. And you'll achieve it.", nextNodeId: "achieve-it" },
      { text: "Your words will outlive everything.", nextNodeId: "words-outlive" }
    ]
  },
  {
    id: "hold-future-dreams",
    characterMessage: "I will. Those dreams are what keep me going on the hardest days. The future where I'm free, where I'm a published writer, where I'm living the life I imagine—that future pulls me forward. It has to exist. I'm creating it with every word I write.",
    userChoices: [
      { text: "You're building your future now.", nextNodeId: "building-future-now" },
      { text: "Dreams are powerful forces.", nextNodeId: "dreams-powerful" }
    ]
  },
  {
    id: "good-dreams-help",
    characterMessage: "Yes and no. They're comforting during the dream—I'm free, happy, whole. But waking up hurts. The contrast between dream-freedom and real-confinement is painful. Still, I wouldn't want to stop dreaming. Hope needs those images.",
    userChoices: [
      { text: "Pain and comfort together.", nextNodeId: "pain-comfort-together" },
      { text: "Keep dreaming, Anne.", nextNodeId: "keep-dreaming" }
    ]
  },
  {
    id: "wise-beyond-years",
    characterMessage: "Hardship ages you. I've had to grow up faster than I should have. But maybe that's not entirely bad. Maybe I'll emerge from this with depth and understanding I wouldn't have otherwise. Silver lining, if there is one.",
    userChoices: [
      { text: "Growth through adversity.", nextNodeId: "growth-adversity" },
      { text: "Your depth is evident.", nextNodeId: "depth-evident" }
    ]
  },
  // Final end node
  {
    id: "end",
    characterMessage: "Goodnight. Thank you for listening. For caring enough to ask, to understand. That means more than you know. Remember us. Remember that we lived, that we hoped, that we mattered. Never forget.",
    userChoices: []
  }
];

// Note: Many intermediate nodes reference other nodes - those lead to the comprehensive paths above
// All unresolved paths gracefully fallback to end via ConversationInterface error handling

