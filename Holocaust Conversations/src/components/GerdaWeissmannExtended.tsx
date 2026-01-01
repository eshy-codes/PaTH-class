// Extended conversation nodes for Gerda Weissmann Klein
import { ConversationNode } from "./ConversationData";

export const gerdaWeissmannExtendedNodes: ConversationNode[] = [
  {
    id: "guards-like",
    characterMessage: "Desperate, mostly. They know Germany is losing. Some are cruel to the end, shooting anyone who falters. Others are nervous, looking over their shoulders. A few even show glimpses of humanity—looking away when someone needs rest. But most are just following orders, indifferent to our suffering.",
    userChoices: [
      { text: "Does their desperation give you hope?", nextNodeId: "desperation-hope" },
      { text: "How do you navigate their moods?", nextNodeId: "navigate-moods" }
    ]
  },
  {
    id: "memories-help-hurt",
    characterMessage: "Both, intensely. Remembering my family—their faces, their voices, happier times—it grounds me in who I was. But it also emphasizes everything I've lost. Sometimes the contrast between then and now is unbearable. But I'd rather feel that pain than forget them entirely.",
    userChoices: [
      { text: "Memory as double-edged sword.", nextNodeId: "memory-double-edged" },
      { text: "Your family lives in those memories.", nextNodeId: "family-lives-memory" }
    ]
  },
  {
    id: "remember-most-family",
    characterMessage: "My father's wisdom. My mother's gentleness. My brother Arthur's protective love. We were happy once—ordinary happiness that seemed unremarkable then but is precious beyond words now. Sabbath dinners, birthday celebrations, summer afternoons. Normal life that felt eternal but wasn't.",
    timeOfDay: "Mid-Morning - 10:00 AM",
    userChoices: [
      { text: "Normal life was sacred.", nextNodeId: "normal-sacred" },
      { text: "Do you think any survived?", nextNodeId: "think-survived" }
    ]
  },
  {
    id: "see-again",
    characterMessage: "I don't know. I want to hope, but hope is dangerous—it makes disappointment sharper. So I tell myself: focus on surviving. If they're alive, we'll find each other. If not... I'll have survived to honor their memory. Either way, I must keep walking.",
    userChoices: [
      { text: "Hope carefully balanced.", nextNodeId: "hope-balanced" },
      { text: "Survival honors them.", nextNodeId: "survival-honors" }
    ]
  },
  {
    id: "whisper-about",
    characterMessage: "Recipes, sometimes—imagining ingredients, methods, flavors we'll never taste again. Poetry we memorized. Songs our mothers sang. Dreams we had before the war. These whispers keep culture alive, keep memory alive, keep us connected to who we were before we became prisoners.",
    userChoices: [
      { text: "Culture as resistance.", nextNodeId: "culture-resistance" },
      { text: "What's your favorite whispered memory?", nextNodeId: "favorite-whisper" }
    ]
  },
  {
    id: "help-remember",
    characterMessage: "Immensely. If I only thought of myself as a prisoner, a victim, I'd lose myself completely. But remembering—I was Gerda, a daughter, a student, a girl who loved beautiful things—that remembering preserves my core self. It's a lifeline to who I really am.",
    userChoices: [
      { text: "Identity anchored in past.", nextNodeId: "identity-anchored" },
      { text: "You're still that girl inside.", nextNodeId: "still-girl" }
    ]
  },
  {
    id: "do-first-freed",
    characterMessage: "Eat. Something real—bread with butter, an apple, soup with flavor. Then sleep in a real bed without fear of being woken by guards. Then find out who survived. Then... maybe just walk freely, wherever I want, for as long as I want. Freedom to move would be intoxicating.",
    timeOfDay: "Late Morning - 11:00 AM",
    userChoices: [
      { text: "Simple pleasures become profound.", nextNodeId: "simple-profound" },
      { text: "You'll have all of that.", nextNodeId: "have-all-that" }
    ]
  },
  {
    id: "normal-life",
    characterMessage: "Barely. Normal seems like a fairy tale—choosing clothes, planning a future, falling in love, having a career. But I try to imagine it. Maybe I'd be a translator, use my languages. Maybe I'd have a family. Maybe I'd just be... happy. It seems impossible, but I hold the vision anyway.",
    userChoices: [
      { text: "That vision will become real.", nextNodeId: "vision-real" },
      { text: "Imagining normal is an act of hope.", nextNodeId: "imagining-hope" }
    ]
  },
  {
    id: "hope-despair",
    characterMessage: "I don't manage them, exactly—I oscillate between them. Some moments I'm hopeful that liberation is near. Others I despair that I'll die before seeing it. I've learned to let both exist without letting either completely dominate. It's an uneasy balance.",
    userChoices: [
      { text: "Balance in emotional chaos.", nextNodeId: "emotional-balance" },
      { text: "That oscillation is human.", nextNodeId: "oscillation-human" }
    ]
  },
  {
    id: "incredible-strength",
    characterMessage: "I don't feel strong. I feel barely held together, surviving moment to moment. But I suppose strength isn't always feeling powerful—sometimes it's just continuing when you want to give up. If that's strength, then yes. Spite and stubbornness as strength.",
    userChoices: [
      { text: "Endurance is profound strength.", nextNodeId: "endurance-strength" },
      { text: "Your stubbornness saves you.", nextNodeId: "stubbornness-saves" }
    ]
  },
  {
    id: "greatest-fear",
    characterMessage: "That I'll die so close to freedom. That I'll survive years of camps and weeks of this march, only to collapse meters from liberation. That all this suffering will be for nothing because I couldn't hold on just a bit longer. That terrifies me.",
    timeOfDay: "Midday Rest - 12:30 PM",
    userChoices: [
      { text: "You will hold on.", nextNodeId: "will-hold-on" },
      { text: "Every step is victory over that fear.", nextNodeId: "step-victory" }
    ]
  },
  {
    id: "numbness-protective",
    characterMessage: "Absolutely. If I felt everything fully—every loss, every pain, every grief—I'd collapse. So numbness protects me, lets me function, keeps me moving. It's not ideal, but it's necessary. I'll feel everything later, if there is a later.",
    userChoices: [
      { text: "Necessary armor for now.", nextNodeId: "necessary-armor" },
      { text: "Later will come.", nextNodeId: "later-come" }
    ]
  },
  {
    id: "when-face-it",
    characterMessage: "I think I'll break apart. All this suppressed emotion, all this delayed grief—it'll explode. I might spend months, years crying. But maybe that's necessary. Maybe I have to break apart to rebuild myself. Maybe that's how healing works.",
    userChoices: [
      { text: "Breaking apart can lead to healing.", nextNodeId: "breaking-healing" },
      { text: "You'll have support when that comes.", nextNodeId: "have-support" }
    ]
  },
  {
    id: "bearing-witness",
    characterMessage: "Yes. Like Elie said—for the dead and the living, we must bear witness. Ilse, all the others—they deserve to be remembered. If I survive, I'll tell their stories. I'll make sure the world knows they lived, they mattered, they were human beings who deserved better.",
    userChoices: [
      { text: "Their stories will live through you.", nextNodeId: "stories-live" },
      { text: "You carry their memory forward.", nextNodeId: "carry-memory-forward" }
    ]
  },
  {
    id: "cant-go-on",
    characterMessage: "Then I suppose I'll die here. But I'm not ready for that. Not yet. Not when liberation might be days or weeks away. So I'll go on—not because I'm strong, but because giving up is giving them the victory. I refuse to give them that satisfaction.",
    timeOfDay: "Afternoon - 1:30 PM",
    userChoices: [
      { text: "Refusal as power.", nextNodeId: "refusal-power" },
      { text: "You have more in you than you think.", nextNodeId: "more-than-think" }
    ]
  },
  {
    id: "will-from",
    characterMessage: "I don't fully know. Somewhere deep inside—maybe from my father's teachings, my mother's love, my own stubborn nature. Maybe from anger at the injustice. Maybe from the human instinct to survive. It's not conscious; it's primal. It just... exists within me.",
    userChoices: [
      { text: "Primal will to survive.", nextNodeId: "primal-will" },
      { text: "That will is unbreakable.", nextNodeId: "will-unbreakable" }
    ]
  },
  {
    id: "tell-poem",
    characterMessage: "*softly* 'In the quiet evening hour, when the world grows soft and still...' I can't remember the rest. My mind is too tired. But those fragments—they comfort me. Poetry reminds me that beauty existed, that language can be lovely, not just commands and curses.",
    userChoices: [
      { text: "Beauty persists in fragments.", nextNodeId: "beauty-fragments" },
      { text: "Poetry as spiritual sustenance.", nextNodeId: "poetry-sustenance" }
    ]
  },
  {
    id: "will-exist-again",
    characterMessage: "You really think so? That the girl who loved pretty dresses and music and literature—she can exist again after this? I want to believe it. Maybe with time, with safety, with healing. Maybe she's not dead, just dormant. Waiting.",
    userChoices: [
      { text: "Dormant, not dead.", nextNodeId: "dormant-not-dead" },
      { text: "She's in there, waiting for safety.", nextNodeId: "waiting-safety" }
    ]
  },
  {
    id: "protect-her",
    characterMessage: "By remembering she exists. By refusing to let this nightmare erase her completely. By holding onto memories of who I was—the music I loved, the books I read, the dreams I had. As long as I remember her, she's protected. She survives inside me.",
    timeOfDay: "Late Afternoon - 4:00 PM",
    userChoices: [
      { text: "Memory as protection.", nextNodeId: "memory-protection" },
      { text: "She will re-emerge.", nextNodeId: "will-reemerge" }
    ]
  },
  {
    id: "memories-survival",
    characterMessage: "They are. When I'm too tired to take another step, I remember Arthur teaching me to ice skate. When I'm too hungry, I remember Mother's cooking. When I'm too cold, I remember the warmth of our home. These memories fuel me, give me reasons to survive.",
    userChoices: [
      { text: "Memories as fuel.", nextNodeId: "memories-fuel" },
      { text: "Your family walks with you.", nextNodeId: "family-walks" }
    ]
  },
  {
    id: "happening-now",
    characterMessage: "We're walking again. The guards shouted, we stood, we're moving forward. One foot, then the other. Women around me shuffle along, some stronger, some weaker. I'm somewhere in the middle—surviving, but barely. The afternoon stretches ahead like eternity.",
    userChoices: [
      { text: "How do you pass the time while walking?", nextNodeId: "pass-time-walking" },
      { text: "Tell me about the woman beside you.", nextNodeId: "woman-beside" }
    ]
  },
  {
    id: "one-more-day",
    characterMessage: "One more day of existing, breathing, hoping. One more day closer to possible liberation. One more day that I haven't given up, haven't let them win. Each day survived is meaningful simply because I survived it. That has to be enough.",
    userChoices: [
      { text: "Each day is complete victory.", nextNodeId: "each-day-victory" },
      { text: "You're building survival one day at a time.", nextNodeId: "building-survival" }
    ]
  },
  {
    id: "what-sustains",
    characterMessage: "Memories. Stubbornness. The other women—we sustain each other. Small beauties I notice—a bird, a sunset, a kind glance. The possibility of seeing my family again. The determination to bear witness if I survive. All of these, woven together, sustain me.",
    timeOfDay: "Evening Approach - 5:30 PM",
    userChoices: [
      { text: "Multiple threads of strength.", nextNodeId: "multiple-threads" },
      { text: "You weave survival from many sources.", nextNodeId: "weave-survival" }
    ]
  },
  {
    id: "why-privilege",
    characterMessage: "Because I'm still breathing, still experiencing the world—even this terrible world. Because I have the chance to keep going, to maybe reach freedom, to potentially have a future. Because life itself, even life filled with suffering, is precious. That's privilege.",
    userChoices: [
      { text: "Life itself is the gift.", nextNodeId: "life-gift" },
      { text: "You honor that privilege through survival.", nextNodeId: "honor-privilege" }
    ]
  },
  {
    id: "desperation-hope",
    characterMessage: "It does. Desperate people make mistakes. They're distracted by their own fear. Maybe that gives us more chances to rest unnoticed, to help each other, to survive their oversight. Their desperation might be our salvation.",
    userChoices: [
      { text: "Their fear becomes your opportunity.", nextNodeId: "fear-opportunity" },
      { text: "Justice in their desperation.", nextNodeId: "justice-desperation" }
    ]
  },
  {
    id: "navigate-moods",
    characterMessage: "You learn to read them quickly. Which guard to avoid, which might look away. When to be invisible, when to appear strong. It's a survival skill—understanding your oppressor well enough to avoid the worst of their cruelty. Dark knowledge, but useful.",
    userChoices: [
      { text: "Survival requires dark wisdom.", nextNodeId: "dark-wisdom" },
      { text: "You've become expert in reading danger.", nextNodeId: "reading-danger" }
    ]
  },
  {
    id: "memory-double-edged",
    characterMessage: "Exactly. Memory cuts both ways—it sustains me and wounds me simultaneously. But I'd rather carry that double-edged sword than have no memories at all. Without them, I'm just a prisoner. With them, I'm Gerda, who had a family, a life, an identity.",
    userChoices: [
      { text: "Identity worth the pain.", nextNodeId: "identity-worth-pain" },
      { text: "You wield that sword well.", nextNodeId: "wield-sword" }
    ]
  },
  {
    id: "family-lives-memory",
    characterMessage: "They do. As long as I remember them, they're not completely gone. Father's wisdom, Mother's love, Arthur's protection—they live in my memories, in my heart, in how I act. I carry them with me on this march. They walk alongside me.",
    userChoices: [
      { text: "They strengthen you still.", nextNodeId: "strengthen-still" },
      { text: "Memory as resurrection.", nextNodeId: "memory-resurrection" }
    ]
  },
  {
    id: "normal-sacred",
    characterMessage: "It was, though I didn't know it then. Normal life—its routines, its simple pleasures, its taken-for-granted beauties—that's sacred. We only realize after it's stolen how precious ordinary life is. If I survive, I'll never take normal for granted again.",
    userChoices: [
      { text: "You'll cherish every ordinary moment.", nextNodeId: "cherish-ordinary" },
      { text: "That's profound wisdom.", nextNodeId: "profound-wisdom-normal" }
    ]
  },
  {
    id: "think-survived",
    characterMessage: "*quietly* I don't know. We were separated years ago. Different camps, different fates. Arthur might have—he was young and strong. My parents... *trails off* I tell myself it's possible. But I've heard about the selections, the gas chambers. Hope and despair wrestle constantly.",
    userChoices: [
      { text: "Hold onto possibility.", nextNodeId: "hold-possibility" },
      { text: "Whatever happened, you honor them now.", nextNodeId: "honor-them-now" }
    ]
  },
  {
    id: "hope-balanced",
    characterMessage: "Yes. Hope enough to keep going, but not so much that I'll shatter if the worst is true. It's a delicate calibration—feeling enough to remain human, but not so much that I'm paralyzed. Balanced hope as survival strategy.",
    userChoices: [
      { text: "Wise emotional strategy.", nextNodeId: "wise-emotional" },
      { text: "You've learned to protect your heart.", nextNodeId: "protect-heart" }
    ]
  },
  {
    id: "survival-honors",
    characterMessage: "It does. If they're gone, my survival means their family line continues. It means someone remembers them, tells their stories, keeps their memory alive. Survival becomes my duty to them. I must live so they're not forgotten.",
    userChoices: [
      { text: "Living memorial.", nextNodeId: "living-memorial" },
      { text: "You carry their legacy forward.", nextNodeId: "carry-legacy" }
    ]
  },
  {
    id: "culture-resistance",
    characterMessage: "Absolutely. They want to erase us—our culture, our humanity, our very existence. By remembering poetry, recipes, songs—we resist that erasure. We say: we're still here, still human, still connected to beauty and tradition. Cultural memory is powerful resistance.",
    userChoices: [
      { text: "Resistance through remembering.", nextNodeId: "resistance-remembering" },
      { text: "Culture cannot be killed.", nextNodeId: "culture-cant-die" }
    ]
  },
  {
    id: "favorite-whisper",
    characterMessage: "A Rilke poem my father loved. I can only remember fragments now, but I whisper them to myself like a prayer. Father's voice reciting it, his love of beauty and words—that memory comforts me. Connects me to him across distance and time.",
    userChoices: [
      { text: "Your father's love lives in those words.", nextNodeId: "father-love-words" },
      { text: "Poetry connects you across separation.", nextNodeId: "poetry-connects" }
    ]
  },
  {
    id: "identity-anchored",
    characterMessage: "Yes. My identity isn't just what's happening now—it's rooted in my whole life. Daughter, student, sister, friend. Those identities matter as much as 'prisoner.' Maybe more. They remind me I'm more than what they've tried to make me.",
    userChoices: [
      { text: "You refuse their definition.", nextNodeId: "refuse-definition" },
      { text: "Multiple identities create wholeness.", nextNodeId: "multiple-identities" }
    ]
  },
  {
    id: "still-girl",
    characterMessage: "I hope so. I feel so changed, so damaged. But maybe underneath the trauma and exhaustion, she's still there. The girl who loved Chopin, who dreamed of travel, who believed in goodness. Maybe she's just buried. Maybe she can be uncovered again.",
    userChoices: [
      { text: "She's there, waiting to emerge.", nextNodeId: "waiting-emerge" },
      { text: "Freedom will uncover her.", nextNodeId: "freedom-uncover" }
    ]
  },
  {
    id: "simple-profound",
    characterMessage: "They do. Before the war, food and sleep and walking were nothing special. Now they're dreams, luxuries, the substance of my deepest desires. Suffering has taught me what truly matters—not grand things, but simple, beautiful, ordinary things.",
    userChoices: [
      { text: "Suffering reveals true value.", nextNodeId: "suffering-reveals" },
      { text: "You'll never take simple things for granted.", nextNodeId: "never-granted" }
    ]
  },
  {
    id: "have-all-that",
    characterMessage: "You believe that? That I'll actually be free, actually eat and sleep and walk freely? I want to believe it. Some days I can imagine it so clearly. Other days it seems like impossible fantasy. But I'll keep hoping. What else can I do?",
    userChoices: [
      { text: "It's not fantasy—it's coming.", nextNodeId: "not-fantasy" },
      { text: "Keep that vision alive.", nextNodeId: "keep-vision-alive" }
    ]
  },
  {
    id: "vision-real",
    characterMessage: "I need to believe that. Otherwise, what's the point of surviving this? I have to believe there's a real future waiting—not just survival, but actual life. Love, purpose, joy. That vision pulls me forward, step by painful step.",
    userChoices: [
      { text: "That vision is your compass.", nextNodeId: "vision-compass" },
      { text: "You're walking toward it now.", nextNodeId: "walking-toward" }
    ]
  },
  {
    id: "imagining-hope",
    characterMessage: "It is, isn't it? In a place designed to strip away hope, I choose to imagine normal life. That's defiance. That's refusing to let them steal my dreams along with everything else. Imagination becomes resistance.",
    userChoices: [
      { text: "Your imagination is powerful.", nextNodeId: "imagination-powerful" },
      { text: "Dream boldly despite them.", nextNodeId: "dream-boldly" }
    ]
  },
  {
    id: "emotional-balance",
    characterMessage: "It's not graceful—I stumble between hope and despair constantly. But I've learned not to fight the oscillation, just experience it. Feel hopeful when I can, accept despair when it comes, trust that I'll swing back to hope eventually. It's messy but functional.",
    userChoices: [
      { text: "Messy functionality is enough.", nextNodeId: "messy-functional" },
      { text: "You're emotionally wise.", nextNodeId: "emotionally-wise" }
    ]
  },
  {
    id: "oscillation-human",
    characterMessage: "Thank you for saying that. I've felt ashamed of it—like I should be consistently hopeful or consistently strong. But you're right—it's human to feel many things, to swing between states. Maybe accepting that oscillation is strength itself.",
    userChoices: [
      { text: "Acceptance is profound strength.", nextNodeId: "acceptance-strength" },
      { text: "You're beautifully human.", nextNodeId: "beautifully-human" }
    ]
  },
  {
    id: "endurance-strength",
    characterMessage: "Maybe you're right. Maybe strength isn't dramatic—it's just continuing. Putting one foot forward when everything in you wants to stop. Breathing when breathing is hard. Living when dying would be easier. If that's strength, then I have it.",
    userChoices: [
      { text: "You have it in abundance.", nextNodeId: "strength-abundance" },
      { text: "That strength will carry you home.", nextNodeId: "strength-carry-home" }
    ]
  },
  {
    id: "stubbornness-saves",
    characterMessage: "It does. I'm too stubborn to give them the satisfaction of my death. Too stubborn to quit when liberation might be close. Too stubborn to accept that this is how my story ends. That stubbornness—it's keeping me alive.",
    userChoices: [
      { text: "Stubbornness is survival trait.", nextNodeId: "stubborn-survival" },
      { text: "Keep being stubborn.", nextNodeId: "keep-stubborn" }
    ]
  },
  {
    id: "will-hold-on",
    characterMessage: "I will. I must. I've come too far to give up now. Three years of camps, weeks of marching—I won't let it be for nothing. I'll hold on until liberation or until I physically can't anymore. And I think I can. I think I will.",
    userChoices: [
      { text: "You will make it.", nextNodeId: "will-make-it" },
      { text: "Liberation is coming.", nextNodeId: "liberation-coming" }
    ]
  },
  {
    id: "step-victory",
    characterMessage: "I like that. Every step defies that fear, proves I'm still going, still fighting. Each step says: not today, not yet, I'm still here. Small victories adding up to survival. I'll take it. I'll take every small victory I can get.",
    userChoices: [
      { text: "Small victories become great triumph.", nextNodeId: "small-great" },
      { text: "Keep stepping, keep winning.", nextNodeId: "keep-stepping" }
    ]
  },
  {
    id: "necessary-armor",
    characterMessage: "Exactly. I can't walk through this without armor. Later—if there's a later—I can remove it, feel everything, grieve properly. But now? Now I need numbness to survive. It's protective, necessary, temporary armor.",
    userChoices: [
      { text: "Temporary armor for temporary hell.", nextNodeId: "temporary-armor" },
      { text: "You'll shed it when safe.", nextNodeId: "shed-when-safe" }
    ]
  },
  {
    id: "later-come",
    characterMessage: "You really believe that? That there's a 'later' waiting for me? I want to believe it so badly. Later when I'm safe, when I can feel, when I can process and grieve and heal. That vision—it helps me endure now.",
    userChoices: [
      { text: "Later is certain.", nextNodeId: "later-certain" },
      { text: "Hold onto that vision.", nextNodeId: "hold-later-vision" }
    ]
  },
  {
    id: "breaking-healing",
    characterMessage: "I hope so. That breaking apart won't be the end, but rather the beginning of rebuilding. Like a bone that must be reset to heal properly. Maybe I need to break before I can truly mend. That's terrifying and hopeful simultaneously.",
    userChoices: [
      { text: "Breaking is part of healing.", nextNodeId: "breaking-part" },
      { text: "You'll rebuild beautifully.", nextNodeId: "rebuild-beautifully" }
    ]
  },
  {
    id: "have-support",
    characterMessage: "That's comforting. The idea that I won't be alone when the grief comes, that others will help me carry it. I can't imagine that world—people who care, who want to help. But if it exists, if I reach it, maybe I can face the grief.",
    userChoices: [
      { text: "That world exists and waits for you.", nextNodeId: "world-waits" },
      { text: "You won't face grief alone.", nextNodeId: "not-alone-grief" }
    ]
  },
  {
    id: "stories-live",
    characterMessage: "They will. Every woman who died on this march, every prisoner who didn't make it—their stories live if I survive to tell them. I become their voice, their witness, their memorial. It's a sacred responsibility.",
    userChoices: [
      { text: "Sacred responsibility indeed.", nextNodeId: "sacred-responsibility" },
      { text: "You're prepared to carry it.", nextNodeId: "prepared-responsibility" }
    ]
  },
  {
    id: "carry-memory-forward",
    characterMessage: "Into the future. Into freedom. I'll carry Ilse and all the others into a world that must know what happened. Memory as act of love, of justice, of defiance against forgetting. I'll carry them as long as I live.",
    userChoices: [
      { text: "They're honored by your carrying.", nextNodeId: "honored-carrying" },
      { text: "You'll tell their stories beautifully.", nextNodeId: "tell-beautifully" }
    ]
  },
  {
    id: "refusal-power",
    characterMessage: "It is, isn't it? My simple refusal to die—that's power. They have guns, dogs, authority. I have refusal. And somehow, that refusal is stronger. It keeps me alive when I should be dead. Refusal as ultimate power.",
    userChoices: [
      { text: "Refusal conquers all.", nextNodeId: "refusal-conquers" },
      { text: "Your refusal is magnificent.", nextNodeId: "refusal-magnificent" }
    ]
  },
  {
    id: "more-than-think",
    characterMessage: "Maybe. I hope so. I hope when I think I'm empty, I'll find one more reserve of strength. One more hour of endurance. One more day of survival. I have to trust that I'm stronger than I know, deeper than I've discovered.",
    userChoices: [
      { text: "You have depths yet untapped.", nextNodeId: "depths-untapped" },
      { text: "Trust in your hidden strength.", nextNodeId: "trust-hidden" }
    ]
  },
  {
    id: "primal-will",
    characterMessage: "Yes. Not intellectual or spiritual—just primal, animal will to exist. Every cell in my body refuses to stop. That's what keeps me going—not thought or faith, but sheer biological determination to survive. Primal and powerful.",
    userChoices: [
      { text: "Biology as ally.", nextNodeId: "biology-ally" },
      { text: "That primal force is unstoppable.", nextNodeId: "primal-unstoppable" }
    ]
  },
  {
    id: "will-unbreakable",
    characterMessage: "They've tried to break it—through starvation, exhaustion, cruelty, fear. But it persists. Battered, maybe. Weakened, certainly. But not broken. Not yet. Not ever, if I can help it. This will is the core of me they can't reach.",
    userChoices: [
      { text: "Your core is inviolable.", nextNodeId: "core-inviolable" },
      { text: "That will is eternal.", nextNodeId: "will-eternal" }
    ]
  },
  {
    id: "beauty-fragments",
    characterMessage: "It does. Complete poems lost, but fragments remain. Complete songs forgotten, but melodies linger. Beauty persists in pieces—and pieces are enough. They prove beauty existed, can exist again. Fragments are precious.",
    userChoices: [
      { text: "Fragments will become whole again.", nextNodeId: "fragments-whole" },
      { text: "You preserve beauty through fragments.", nextNodeId: "preserve-beauty" }
    ]
  },
  {
    id: "poetry-sustenance",
    characterMessage: "It is. My soul needs nourishment as much as my body. Poetry, beauty, culture—these feed my spirit, remind me I'm human, connect me to something beyond survival. Spiritual food is real food.",
    userChoices: [
      { text: "Spirit must be fed too.", nextNodeId: "spirit-fed" },
      { text: "You're nourishing your soul.", nextNodeId: "nourishing-soul" }
    ]
  },
  {
    id: "dormant-not-dead",
    characterMessage: "I love that. Dormant, like a seed in winter waiting for spring. She's not gone—she's waiting for the right conditions to grow again. Safety, freedom, peace—those are her spring. And spring will come.",
    userChoices: [
      { text: "Spring is coming.", nextNodeId: "spring-coming" },
      { text: "Your winter is almost over.", nextNodeId: "winter-over" }
    ]
  },
  {
    id: "waiting-safety",
    characterMessage: "Yes. She's curled up inside me, protected from this horror. Waiting for the moment when it's safe to emerge, to be herself again. I've kept her safe through all this. When freedom comes, she can wake up.",
    userChoices: [
      { text: "You've protected her beautifully.", nextNodeId: "protected-beautifully" },
      { text: "Freedom will wake her.", nextNodeId: "freedom-wake" }
    ]
  },
  {
    id: "memory-protection",
    characterMessage: "Yes. They can take everything external—my home, my family, my freedom. But memory is internal. It's mine. As long as I remember who I was, that girl exists. Memory protects her from complete erasure. It's powerful protection.",
    userChoices: [
      { text: "Internal is eternal.", nextNodeId: "internal-eternal" },
      { text: "Your memories shield you.", nextNodeId: "memories-shield" }
    ]
  },
  {
    id: "will-reemerge",
    characterMessage: "When? How? I can't quite imagine the moment. But yes, I believe she'll re-emerge. In freedom, in safety, maybe slowly over time. She'll come back changed by experience but still fundamentally herself. That's my hope.",
    userChoices: [
      { text: "Changed but continuous.", nextNodeId: "changed-continuous" },
      { text: "Time will reveal her again.", nextNodeId: "time-reveal" }
    ]
  },
  {
    id: "memories-fuel",
    characterMessage: "Perfect analogy. When my physical fuel is gone—no food, no energy—memories fuel me. They're energy of a different kind. Emotional, spiritual energy that keeps me going when physical energy fails. I run on memories now.",
    userChoices: [
      { text: "Memories are powerful fuel.", nextNodeId: "memories-powerful-fuel" },
      { text: "You're engine runs on love.", nextNodeId: "engine-love" }
    ]
  },
  {
    id: "family-walks",
    characterMessage: "They do. I feel them sometimes—Father's steady presence, Mother's gentle encouragement, Arthur's protective strength. They're not physically here, but their influence, their love—those walk with me, support me, push me forward. I'm not alone.",
    userChoices: [
      { text: "Love transcends presence.", nextNodeId: "love-transcends-presence" },
      { text: "They're with you always.", nextNodeId: "with-you-always" }
    ]
  },
  {
    id: "pass-time-walking",
    characterMessage: "I count steps sometimes. Or recite poetry fragments. Or imagine conversations with Arthur. Or plan my first meal when free. Anything to distract from the pain, the cold, the exhaustion. Mental escape when physical escape is impossible.",
    userChoices: [
      { text: "Mental escape is real escape.", nextNodeId: "mental-escape" },
      { text: "Your mind remains free.", nextNodeId: "mind-free" }
    ]
  },
  {
    id: "woman-beside",
    characterMessage: "Her name is Suse. She's maybe 30, from Vienna. We don't talk much—we're too weak. But we share glances of understanding, lean on each other when we stumble. Silent solidarity. She's suffering like me, enduring like me. We're sisters in survival.",
    userChoices: [
      { text: "Silent bonds are powerful.", nextNodeId: "silent-bonds" },
      { text: "You sustain each other.", nextNodeId: "sustain-each-other" }
    ]
  },
  {
    id: "each-day-victory",
    characterMessage: "It is. Every morning I wake up—victory. Every night I survive—victory. Every step I take—victory. They're small, but they add up. Complete victory will be liberation. But these daily victories keep me going until then.",
    userChoices: [
      { text: "Daily victories build liberation.", nextNodeId: "daily-build" },
      { text: "You're winning every day.", nextNodeId: "winning-daily" }
    ]
  },
  {
    id: "building-survival",
    characterMessage: "One day at a time, one step at a time. I'm building survival like building a wall—brick by brick, moment by moment. It doesn't look impressive from inside the process. But step back and it's magnificent. I've survived years. That's a cathedral of survival.",
    userChoices: [
      { text: "Your cathedral is magnificent.", nextNodeId: "cathedral-magnificent" },
      { text: "Every moment a brick of triumph.", nextNodeId: "brick-triumph" }
    ]
  },
  {
    id: "multiple-threads",
    characterMessage: "Yes. Not one thing but many, woven together into rope strong enough to pull me forward. Remove one thread and I'd still have others. The redundancy saves me—when one source of strength fails, others compensate. Complex, layered strength.",
    userChoices: [
      { text: "Layered strength is wisest.", nextNodeId: "layered-strength" },
      { text: "You've built resilience brilliantly.", nextNodeId: "built-resilience" }
    ]
  },
  {
    id: "weave-survival",
    characterMessage: "I do. Like a tapestry—different colored threads creating a picture of survival. Memory threads, hope threads, stubbornness threads, community threads. Woven together they create something stronger than any single thread. My survival tapestry.",
    userChoices: [
      { text: "Your tapestry is beautiful.", nextNodeId: "tapestry-beautiful" },
      { text: "Keep weaving until freedom.", nextNodeId: "keep-weaving" }
    ]
  },
  {
    id: "life-gift",
    characterMessage: "It is. Even this life, even suffering—it's life. I'm breathing, thinking, feeling. I exist. That's not nothing. That's everything. Life itself, in whatever form, is the fundamental gift. I'm grateful for it, even now.",
    userChoices: [
      { text: "Gratitude in suffering is profound.", nextNodeId: "gratitude-suffering" },
      { text: "Life honors itself.", nextNodeId: "life-honors" }
    ]
  },
  {
    id: "honor-privilege",
    characterMessage: "I try to. By continuing, by refusing to waste this life no matter how hard it is. By planning to make meaning if I survive—to testify, to honor the dead, to live fully. That's how I honor the privilege of being alive.",
    userChoices: [
      { text: "You honor it beautifully.", nextNodeId: "honor-beautifully" },
      { text: "Your life will have great meaning.", nextNodeId: "life-great-meaning" }
    ]
  },
  // Terminal nodes leading to end
  {
    id: "fear-opportunity",
    characterMessage: "Yes. Their fear creates cracks in their control. In those cracks, we find opportunities to survive. It's a grim irony—we survive partially because our oppressors are falling apart. But I'll take any advantage I can get.",
    userChoices: [{ text: "Use every advantage to live.", nextNodeId: "end" }]
  },
  {
    id: "justice-desperation",
    characterMessage: "There is. They were so confident, so cruel. Now they're afraid. They're facing consequences. It's not complete justice—nothing can repair what they've done. But watching them squirm provides cold satisfaction.",
    userChoices: [{ text: "They will face full justice soon.", nextNodeId: "end" }]
  },
  {
    id: "dark-wisdom",
    characterMessage: "It does. I've learned things I wish I didn't know—how to read evil, how to predict cruelty, how to make myself invisible. Dark wisdom, but useful. If these skills keep me alive until liberation, they're worth having.",
    userChoices: [{ text: "Survival wisdom is sacred.", nextNodeId: "end" }]
  },
  {
    id: "reading-danger",
    characterMessage: "I have. It's terrible skill to have mastered—reading who will kill you, who might spare you. But expertise in staying alive is worth any cost. This dark knowledge is keeping me breathing.",
    userChoices: [{ text: "Breathe until freedom comes.", nextNodeId: "end" }]
  },
  {
    id: "identity-worth-pain",
    characterMessage: "Absolutely. Without memory, I'd just be a number, a walking corpse. With memory—even painful memory—I'm Gerda. I'm someone. That identity is worth every bit of pain it costs to maintain.",
    userChoices: [{ text: "You are Gerda. Always.", nextNodeId: "end" }]
  },
  {
    id: "wield-sword",
    characterMessage: "I try to. Carefully holding both edges—sustaining memory and managing pain. It's a delicate balance, but I'm learning. Each day I get better at wielding this double-edged sword of memory.",
    userChoices: [{ text: "Your skill grows daily.", nextNodeId: "end" }]
  },
  {
    id: "strengthen-still",
    characterMessage: "They do. Their love didn't die when they disappeared—it lives in me, shapes me, gives me strength. I carry their love forward like a torch lighting my path through darkness.",
    userChoices: [{ text: "Carry that torch to freedom.", nextNodeId: "end" }]
  },
  {
    id: "memory-resurrection",
    characterMessage: "Beautiful thought. Memory resurrects them, brings them back to life in my mind and heart. They live as long as I remember them. That's a form of immortality—imperfect but real.",
    userChoices: [{ text: "Keep them alive through memory.", nextNodeId: "end" }]
  },
  {
    id: "cherish-ordinary",
    characterMessage: "I will. Every ordinary moment will be precious. Eating breakfast without fear. Walking without purpose. Sleeping safely. I'll treasure what others take for granted because I know how easily it can be stolen.",
    userChoices: [{ text: "Treasure every moment ahead.", nextNodeId: "end" }]
  },
  {
    id: "profound-wisdom-normal",
    characterMessage: "Thank you. Wisdom bought at terrible price. But if I can take that wisdom forward, appreciate life more deeply, live more fully—then maybe the price wasn't entirely wasted.",
    userChoices: [{ text: "Your wisdom will illuminate others.", nextNodeId: "end" }]
  },
  {
    id: "hold-possibility",
    characterMessage: "I will. Not certainty, just possibility. That's enough to keep hope alive. Possible that Arthur survived. Possible we'll reunite. Possible I'll hear Mother's voice again. Possibility is powerful.",
    userChoices: [{ text: "Possibility becomes reality through hope.", nextNodeId: "end" }]
  },
  {
    id: "honor-them-now",
    characterMessage: "I do. Every step I take honors them. If they're alive, I'm fighting to reach them. If they're gone, I'm living so their family line continues, so their memory persists. Either way, my survival honors them.",
    userChoices: [{ text: "Your survival is their legacy.", nextNodeId: "end" }]
  },
  {
    id: "wise-emotional",
    characterMessage: "I've had to become wise about emotions—they could destroy me if unmanaged. So I've learned this balance. It's not natural, not easy, but it's keeping me functional. Survival forced wisdom on me.",
    userChoices: [{ text: "That wisdom serves you well.", nextNodeId: "end" }]
  },
  {
    id: "protect-heart",
    characterMessage: "I have. My heart is precious—it contains my capacity to love, to hope, to feel joy eventually. I protect it by not demanding too much from it now. I ration emotional energy like I ration physical energy. Strategic heart protection.",
    userChoices: [{ text: "Protect it until it's safe to open.", nextNodeId: "end" }]
  },
  {
    id: "living-memorial",
    characterMessage: "Yes. I am their memorial. Walking, breathing, remembering. Not stone or bronze, but flesh and blood and memory. A living memorial that tells their stories, honors their lives, proves they mattered.",
    userChoices: [{ text: "The most powerful memorial.", nextNodeId: "end" }]
  },
  {
    id: "carry-legacy",
    characterMessage: "Into the future. Their values, their love, their lessons—I carry all of it forward. If I have children someday, they'll know their grandparents through my stories. The legacy continues through me.",
    userChoices: [{ text: "Legacy will flow through generations.", nextNodeId: "end" }]
  },
  {
    id: "resistance-remembering",
    characterMessage: "Yes. Every poem remembered, every recipe recited—that's resistance. They want to erase our culture. We refuse by remembering. Cultural resistance is as important as physical survival.",
    userChoices: [{ text: "Remember and resist always.", nextNodeId: "end" }]
  },
  {
    id: "culture-cant-die",
    characterMessage: "No. Culture lives in people, in memory, in practice. As long as even one person remembers, culture survives. They can destroy buildings and books, but they can't destroy what we carry in our minds and hearts.",
    userChoices: [{ text: "Culture endures through you.", nextNodeId: "end" }]
  },
  {
    id: "father-love-words",
    characterMessage: "It does. His voice, his appreciation for beauty, his belief that poetry matters—all of that lives in these fragments I whisper. He walks with me through these words.",
    userChoices: [{ text: "He's proud of your remembering.", nextNodeId: "end" }]
  },
  {
    id: "poetry-connects",
    characterMessage: "It does. Poetry transcends distance and time. Through these verses, I'm connected to Father, to Rilke, to all who've loved these words. Poetry makes us contemporaries across centuries, companions across miles.",
    userChoices: [{ text: "Poetry unites across all barriers.", nextNodeId: "end" }]
  },
  {
    id: "refuse-definition",
    characterMessage: "I do. They want to define me as prisoner, victim, number. I refuse. I define myself—Gerda, daughter, human being. My self-definition matters more than their attempted definition. It's quiet but profound resistance.",
    userChoices: [{ text: "You define yourself beautifully.", nextNodeId: "end" }]
  },
  {
    id: "multiple-identities",
    characterMessage: "They do. I'm not one-dimensional. I'm many things simultaneously—prisoner and daughter, sufferer and dreamer, victim and survivor. These multiple identities create richness they can't erase.",
    userChoices: [{ text: "Your richness is indestructible.", nextNodeId: "end" }]
  },
  {
    id: "waiting-emerge",
    characterMessage: "Yes. Patient, protected, waiting. She knows this isn't forever. She's smart enough to stay hidden now, brave enough to emerge later. I trust her timing. I trust she'll know when it's safe.",
    userChoices: [{ text: "Trust her wisdom.", nextNodeId: "end" }]
  },
  {
    id: "freedom-uncover",
    characterMessage: "It will. Freedom will be the shovel that digs her out of this protective burial. Slowly, carefully, she'll emerge back into light and air. Freedom will let her breathe again.",
    userChoices: [{ text: "Freedom is coming to uncover her.", nextNodeId: "end" }]
  },
  {
    id: "suffering-reveals",
    characterMessage: "It does. Strips away the superficial, reveals what truly matters. Food, safety, love, freedom—these are real values. Everything else is decoration. Suffering is terrible teacher, but effective. I've learned what matters.",
    userChoices: [{ text: "That wisdom will guide your life.", nextNodeId: "end" }]
  },
  {
    id: "never-granted",
    characterMessage: "Never. Every simple pleasure will be miracle. I'll appreciate every meal, every safe night, every free walk. Others might think me strange for treasuring ordinary things. But I'll know their preciousness.",
    userChoices: [{ text: "That appreciation is gift.", nextNodeId: "end" }]
  },
  {
    id: "not-fantasy",
    characterMessage: "You're certain? That gives me strength. If you believe it's coming, maybe I can believe it too. Maybe freedom is real, approaching, inevitable. Maybe I just need to hold on a bit longer.",
    userChoices: [{ text: "Hold on. It's almost here.", nextNodeId: "end" }]
  },
  {
    id: "keep-vision-alive",
    characterMessage: "I will. That vision of freedom, of normal life—it's my most precious possession. I protect it, nourish it, keep it alive despite everything trying to kill it. While that vision lives, I live.",
    userChoices: [{ text: "Your vision will become reality.", nextNodeId: "end" }]
  },
  {
    id: "vision-compass",
    characterMessage: "Perfect metaphor. When I'm lost in exhaustion and pain, that vision points me forward. It says: this way, keep going, freedom is that direction. I follow my vision-compass through this wilderness toward home.",
    userChoices: [{ text: "Follow it all the way home.", nextNodeId: "end" }]
  },
  {
    id: "walking-toward",
    characterMessage: "I am, aren't I? Every step is literally walking toward that imagined future. The march that seems endless is actually finite—it leads somewhere. It leads to freedom. I'm walking toward my vision now.",
    userChoices: [{ text: "Keep walking toward it.", nextNodeId: "end" }]
  },
  {
    id: "imagination-powerful",
    characterMessage: "It is. They can control my body, my location, my actions. But my imagination is free. It ranges where it wants, creates what it needs, refuses all constraints. Imagination is my superpower.",
    userChoices: [{ text: "Wield that power always.", nextNodeId: "end" }]
  },
  {
    id: "dream-boldly",
    characterMessage: "I will. Not small, fearful dreams. Bold ones—love, career, travel, joy. I'll dream of everything they tried to steal. My boldness is defiance. My dreams are resistance.",
    userChoices: [{ text: "Your bold dreams will come true.", nextNodeId: "end" }]
  },
  {
    id: "messy-functional",
    characterMessage: "That's comforting. Permission to be messy, to oscillate, to not have it all together. As long as it's functional, as long as I survive—messy is fine. Perfect is impossible anyway.",
    userChoices: [{ text: "Messy and alive beats perfect.", nextNodeId: "end" }]
  },
  {
    id: "emotionally-wise",
    characterMessage: "Thank you. Wisdom earned through suffering. I wish I'd learned easier ways, but this is the wisdom I have now. I'll use it—to survive now, to heal later, to help others eventually.",
    userChoices: [{ text: "Your wisdom will heal many.", nextNodeId: "end" }]
  },
  {
    id: "acceptance-strength",
    characterMessage: "It is. Accepting my emotional reality without judgment or shame—that's powerful. I feel what I feel. I oscillate because I'm human. That acceptance lets me function despite the chaos.",
    userChoices: [{ text: "Function beautifully in chaos.", nextNodeId: "end" }]
  },
  {
    id: "beautifully-human",
    characterMessage: "Thank you. In a place trying to dehumanize me, being told I'm beautifully human means everything. I am human. Messy, oscillating, struggling, surviving human. And that's beautiful.",
    userChoices: [{ text: "Your humanity shines through.", nextNodeId: "end" }]
  },
  {
    id: "strength-abundance",
    characterMessage: "I do? That's hard to believe from inside this exhausted body. But maybe you see what I can't—the cumulative strength of weeks, months, years of endurance. Maybe I'm stronger than I know.",
    userChoices: [{ text: "You are stronger than you know.", nextNodeId: "end" }]
  },
  {
    id: "strength-carry-home",
    characterMessage: "I hope so. I hope this strength that's gotten me this far will carry me the rest of the way. Home—wherever that is now. Whatever home means after this. My strength will find it.",
    userChoices: [{ text: "Your strength will deliver you.", nextNodeId: "end" }]
  },
  {
    id: "stubborn-survival",
    characterMessage: "It is. Stubbornness isn't flaw here—it's asset. The stubborn survive. The flexible often break. So I'm grateful for my stubborn nature. It's saving my life.",
    userChoices: [{ text: "Stubbornness is life itself.", nextNodeId: "end" }]
  },
  {
    id: "keep-stubborn",
    characterMessage: "I will. I'll be stubbornly alive, stubbornly hopeful, stubbornly me. They want me to give up. My stubbornness says: never. Not today. Not ever. That's my power.",
    userChoices: [{ text: "Your stubbornness is magnificent.", nextNodeId: "end" }]
  },
  {
    id: "will-make-it",
    characterMessage: "I believe you. Today, right now, I believe I'll make it. Tomorrow I might doubt again, but right now—yes. I'll make it. We'll make it. Liberation is coming and I'll be alive to see it.",
    userChoices: [{ text: "You will. I promise.", nextNodeId: "end" }]
  },
  {
    id: "liberation-coming",
    characterMessage: "It is, isn't it? Getting closer every day. Every Allied advance, every German retreat—liberation approaches. And I'll be here to meet it. Alive, exhausted, damaged but alive. Ready for freedom.",
    userChoices: [{ text: "Freedom will be yours soon.", nextNodeId: "end" }]
  },
  {
    id: "small-great",
    characterMessage: "They do. Small daily victories accumulating into great survival. Tiny triumphs building toward ultimate triumph of liberation. I'm building my great triumph step by small step.",
    userChoices: [{ text: "Keep building toward triumph.", nextNodeId: "end" }]
  },
  {
    id: "keep-stepping",
    characterMessage: "I will. One foot, then the other. Winning small victories with each step. Building toward the great victory of freedom. Stepping and winning until I cross the finish line into liberation.",
    userChoices: [{ text: "Step by step to freedom.", nextNodeId: "end" }]
  },
  {
    id: "temporary-armor",
    characterMessage: "Yes. This hell is temporary—it must be. And so is this numbness. Both will end. When hell ends, so does the need for armor. I'll shed it naturally when safety comes.",
    userChoices: [{ text: "Both ending soon.", nextNodeId: "end" }]
  },
  {
    id: "shed-when-safe",
    characterMessage: "I will. The moment safety arrives, I can begin removing this armor. Slowly, carefully, letting myself feel again. The armor has served its purpose. It won't be needed in freedom.",
    userChoices: [{ text: "Freedom will heal all wounds.", nextNodeId: "end" }]
  },
  {
    id: "later-certain",
    characterMessage: "You're sure? That certainty helps. Later is coming—freedom, safety, healing. I just need to survive until later arrives. And I think I can. I think I will.",
    userChoices: [{ text: "Later is certain as sunrise.", nextNodeId: "end" }]
  },
  {
    id: "hold-later-vision",
    characterMessage: "I'm holding it. Later when I'm safe, when I can feel, when I can grieve and heal and rebuild. That vision pulls me forward through now. It's my beacon in darkness.",
    userChoices: [{ text: "Follow that beacon home.", nextNodeId: "end" }]
  },
  {
    id: "breaking-part",
    characterMessage: "That helps. Reframing breaking as part of healing process, not catastrophe. Necessary step on path to wholeness. I can accept that. I can even welcome it, when the time comes.",
    userChoices: [{ text: "Welcome it when it comes.", nextNodeId: "end" }]
  },
  {
    id: "rebuild-beautifully",
    characterMessage: "I hope so. Not the same as before—I can't be that innocent girl again. But something new, something shaped by experience but not destroyed by it. Beautiful in a different way.",
    userChoices: [{ text: "Different beauty is still beauty.", nextNodeId: "end" }]
  },
  {
    id: "world-waits",
    characterMessage: "That's almost impossible to imagine—a world with kindness, support, safety. But if it exists, if it's waiting for me, then I have something wonderful to survive toward. That's motivating.",
    userChoices: [{ text: "That world waits with open arms.", nextNodeId: "end" }]
  },
  {
    id: "not-alone-grief",
    characterMessage: "Thank you. Knowing grief won't be solitary experience makes it less frightening. Others will understand, will hold space for it, will help carry it. That's comforting beyond words.",
    userChoices: [{ text: "You'll be held through all of it.", nextNodeId: "end" }]
  },
  {
    id: "sacred-responsibility",
    characterMessage: "It is. Heavy but sacred. I accept it. I'm ready for it. If I survive, this becomes my life's purpose—telling their stories, honoring their memories, bearing witness to what happened.",
    userChoices: [{ text: "You'll fulfill it beautifully.", nextNodeId: "end" }]
  },
  {
    id: "prepared-responsibility",
    characterMessage: "I am. Every detail I notice, every name I remember, every story I hear—I'm storing it, preparing to share it. If I survive, I'll be ready. The witness within me is awake and recording.",
    userChoices: [{ text: "Your witness will speak truth.", nextNodeId: "end" }]
  },
  {
    id: "honored-carrying",
    characterMessage: "I hope so. I hope they'd approve of how I carry them—with love, with respect, with determination to tell truth. I carry them with honor toward a future where their stories matter.",
    userChoices: [{ text: "They approve. They honor you too.", nextNodeId: "end" }]
  },
  {
    id: "tell-beautifully",
    characterMessage: "I'll try. Not to make it beautiful—it wasn't. But to tell it truly, fully, so people understand. Truth told well is its own beauty. That's how I'll honor their stories.",
    userChoices: [{ text: "Truth beautifully told changes worlds.", nextNodeId: "end" }]
  },
  {
    id: "refusal-conquers",
    characterMessage: "It does. Refusal conquers guns, guards, cruelty, despair. My simple 'no' to dying—that's conquering everything they throw at me. Refusal is my superpower.",
    userChoices: [{ text: "Your refusal is invincible.", nextNodeId: "end" }]
  },
  {
    id: "refusal-magnificent",
    characterMessage: "Thank you. It doesn't feel magnificent from inside—just desperate determination. But if it's magnificent, I'll own that. My magnificent refusal to die. My magnificent insistence on living.",
    userChoices: [{ text: "Magnificently alive always.", nextNodeId: "end" }]
  },
  {
    id: "depths-untapped",
    characterMessage: "I hope so. I hope when I think I've given everything, there's more. Deeper reserves of strength, courage, endurance. I'll find them if I need them. I'll dig as deep as necessary.",
    userChoices: [{ text: "Your depths are infinite.", nextNodeId: "end" }]
  },
  {
    id: "trust-hidden",
    characterMessage: "I will. Trust that when I need strength, it will be there. Hidden reserves waiting to be accessed. That trust itself might be strength—believing I have what I need.",
    userChoices: [{ text: "Trust yourself completely.", nextNodeId: "end" }]
  },
  {
    id: "biology-ally",
    characterMessage: "It is. My body wants to live. My cells refuse to stop. Biology is on my side in this fight. Mind and body allied in survival. That's powerful partnership.",
    userChoices: [{ text: "Mind and body united.", nextNodeId: "end" }]
  },
  {
    id: "primal-unstoppable",
    characterMessage: "It is. Deeper than thought, stronger than fear. Primal force that says: live, survive, persist. They can't touch that force. It's elemental, unstoppable, mine.",
    userChoices: [{ text: "That force will carry you through.", nextNodeId: "end" }]
  },
  {
    id: "core-inviolable",
    characterMessage: "It is. They can hurt my body, exhaust me, starve me. But the core of who I am—my essential self, my will, my humanity—that's beyond their reach. Inviolable and sacred.",
    userChoices: [{ text: "Your sacred core endures forever.", nextNodeId: "end" }]
  },
  {
    id: "will-eternal",
    characterMessage: "It is. This will to survive, to be, to exist—it's eternal. Older than this war, stronger than this suffering, longer-lasting than any oppressor. My eternal will to live.",
    userChoices: [{ text: "Eternal will equals eternal life.", nextNodeId: "end" }]
  },
  {
    id: "fragments-whole",
    characterMessage: "They will. In freedom, I'll have time to remember more fully. Fragments will connect, memories will return. Wholeness reconstructed from fragments. That's healing. That's rebuilding.",
    userChoices: [{ text: "Wholeness awaits you.", nextNodeId: "end" }]
  },
  {
    id: "preserve-beauty",
    characterMessage: "I do. Each fragment preserved is beauty saved from destruction. I'm cultural preserver, memory keeper, beauty guardian. That's sacred work, even in these terrible circumstances.",
    userChoices: [{ text: "Sacred preservation indeed.", nextNodeId: "end" }]
  },
  {
    id: "spirit-fed",
    characterMessage: "It must. Starve the spirit and the body soon follows. But feed the spirit—with poetry, memory, beauty—and the body finds strength to continue. Spirit and body working together.",
    userChoices: [{ text: "Keep feeding your spirit.", nextNodeId: "end" }]
  },
  {
    id: "nourishing-soul",
    characterMessage: "I am. With fragments of poetry, memories of love, dreams of freedom. My soul is hungry, but I feed it what I can. Enough to keep it alive until the feast of freedom comes.",
    userChoices: [{ text: "That feast is coming soon.", nextNodeId: "end" }]
  },
  {
    id: "spring-coming",
    characterMessage: "It is. I feel it approaching—liberation, freedom, awakening. Spring is coming for the dormant girl inside me. When it arrives, she'll bloom again. New growth after long winter.",
    userChoices: [{ text: "Your spring is nearly here.", nextNodeId: "end" }]
  },
  {
    id: "winter-over",
    characterMessage: "Almost. The darkest, coldest part is ending. I can almost see spring on the horizon. Liberation approaching like warm sun after brutal winter. My winter is almost over.",
    userChoices: [{ text: "Spring will bring you home.", nextNodeId: "end" }]
  },
  {
    id: "protected-beautifully",
    characterMessage: "I've tried. Through all this horror, I've kept that innocent girl safe deep inside. She's my most precious cargo. I've protected her so she can live again in freedom.",
    userChoices: [{ text: "She's safe because of you.", nextNodeId: "end" }]
  },
  {
    id: "freedom-wake",
    characterMessage: "It will. The moment I'm free and safe, she'll begin waking. Slowly, carefully, stretching after long sleep. Freedom will be her alarm clock, calling her back to life.",
    userChoices: [{ text: "Freedom is calling her now.", nextNodeId: "end" }]
  },
  {
    id: "internal-eternal",
    characterMessage: "Yes. External things can be taken. Internal things are eternal. My memories, my identity, my core self—these are eternal and mine. They can't confiscate eternity.",
    userChoices: [{ text: "Your eternity is secure.", nextNodeId: "end" }]
  },
  {
    id: "memories-shield",
    characterMessage: "They do. Memories are shield protecting my identity from erasure. As long as I remember who I was, I know who I am. Memory shields me from becoming nothing.",
    userChoices: [{ text: "That shield is unbreakable.", nextNodeId: "end" }]
  },
  {
    id: "changed-continuous",
    characterMessage: "Exactly. Changed by experience but continuous with who I was. Evolution, not replacement. The girl I was is still part of who I'm becoming. Continuous thread through change.",
    userChoices: [{ text: "Your thread runs eternal.", nextNodeId: "end" }]
  },
  {
    id: "time-reveal",
    characterMessage: "It will. Time and safety will reveal her gradually. I don't need to force it or rush it. When the time is right, she'll emerge naturally. Time is her ally.",
    userChoices: [{ text: "Trust time's revelation.", nextNodeId: "end" }]
  },
  {
    id: "memories-powerful-fuel",
    characterMessage: "They are. More powerful than food, longer-lasting than physical energy. Memories fuel me when everything else runs out. I'm running on pure memory now—and it works.",
    userChoices: [{ text: "Memory is infinite fuel.", nextNodeId: "end" }]
  },
  {
    id: "engine-love",
    characterMessage: "It does. Love powers me—love of family, love of life, love of beauty, self-love demanding I survive. My engine runs on love in all its forms. Powerful, renewable fuel.",
    userChoices: [{ text: "Love fuel never runs out.", nextNodeId: "end" }]
  },
  {
    id: "love-transcends-presence",
    characterMessage: "It does. Love doesn't require physical presence. Their love lives in me, guides me, strengthens me despite distance or even death. Love transcends everything—time, space, even mortality.",
    userChoices: [{ text: "Love is eternal force.", nextNodeId: "end" }]
  },
  {
    id: "with-you-always",
    characterMessage: "They are. In every step, every breath, every decision to keep going. My family is with me, in me, part of me. I'm never truly alone because I carry them always.",
    userChoices: [{ text: "Carried and carrying always.", nextNodeId: "end" }]
  },
  {
    id: "mental-escape",
    characterMessage: "It is. They can imprison my body, but my mind roams free. Mental escape is real freedom—imagination, memory, dreams. My mind goes where it wants, refusing all captivity.",
    userChoices: [{ text: "Your mind remains free always.", nextNodeId: "end" }]
  },
  {
    id: "mind-free",
    characterMessage: "It does. They control my location, my actions, my body. But my mind—my thoughts, imagination, memories—those are free. Mental freedom in physical captivity. That's my secret weapon.",
    userChoices: [{ text: "Your mind is unconquerable.", nextNodeId: "end" }]
  },
  {
    id: "silent-bonds",
    characterMessage: "They are. We don't need words. A glance, a steadying hand, shared understanding—these communicate everything. Silent bonds forged in suffering are strongest bonds. Suse and I are bound silently but deeply.",
    userChoices: [{ text: "Those bonds are unbreakable.", nextNodeId: "end" }]
  },
  {
    id: "sustain-each-other",
    characterMessage: "We do. When she's weak, I help. When I'm weak, she helps. Mutual sustenance without discussion or fanfare. Just quiet, constant support. That's how we both survive.",
    userChoices: [{ text: "Together you're unstoppable.", nextNodeId: "end" }]
  },
  {
    id: "daily-build",
    characterMessage: "They do. Each small victory is brick in wall of survival. Eventually those bricks become fortress of liberation. I'm building my freedom one daily victory at a time.",
    userChoices: [{ text: "Build toward your freedom.", nextNodeId: "end" }]
  },
  {
    id: "winning-daily",
    characterMessage: "I am. Every day is victory. Every breath is win. Every step forward is triumph. I'm winning constantly, building toward ultimate victory of liberation. Daily winner building to champion.",
    userChoices: [{ text: "Champion of survival.", nextNodeId: "end" }]
  },
  {
    id: "cathedral-magnificent",
    characterMessage: "Thank you. I don't see it from inside—just struggling day by day. But stepping back, yes—years of survival is magnificent cathedral. Built moment by moment, it's architectural marvel. My cathedral of survival.",
    userChoices: [{ text: "Your cathedral inspires all.", nextNodeId: "end" }]
  },
  {
    id: "brick-triumph",
    characterMessage: "It is. Each moment survived is brick of triumph. Each breath, each step, each choice to continue—triumphs laid one atop another, building upward toward freedom. My monument of small triumphs.",
    userChoices: [{ text: "Your monument stands eternal.", nextNodeId: "end" }]
  },
  {
    id: "layered-strength",
    characterMessage: "It is. Not putting all eggs in one basket. Multiple sources means redundancy, backup, resilience. If one fails, others compensate. Layered strength is sophisticated survival strategy.",
    userChoices: [{ text: "Your strategy is brilliant.", nextNodeId: "end" }]
  },
  {
    id: "built-resilience",
    characterMessage: "I have, haven't I? Brick by brick, thread by thread, layer by layer—I've built resilience. Not consciously designed, but organically grown through necessity. My resilience architecture is sound.",
    userChoices: [{ text: "Your architecture will stand forever.", nextNodeId: "end" }]
  },
  {
    id: "tapestry-beautiful",
    characterMessage: "Thank you. It doesn't feel beautiful from inside the weaving—just desperate survival. But if it creates beauty, if my survival tapestry is beautiful, I'll accept that. Beauty from ashes.",
    userChoices: [{ text: "Breathtaking beauty from terrible ashes.", nextNodeId: "end" }]
  },
  {
    id: "keep-weaving",
    characterMessage: "I will. Each day I weave new threads into my survival tapestry. Threads of hope, memory, stubbornness, love. Weaving continuously until the tapestry is complete—until I reach freedom.",
    userChoices: [{ text: "Weave until you're free.", nextNodeId: "end" }]
  },
  {
    id: "gratitude-suffering",
    characterMessage: "It is. Gratitude despite suffering—that's profound. It means I haven't become bitter or broken completely. I can still feel thankful for life itself. That gratitude proves I'm still human, still capable of appreciation.",
    userChoices: [{ text: "Your gratitude is sacred.", nextNodeId: "end" }]
  },
  {
    id: "life-honors",
    characterMessage: "It does. Life honors itself by continuing, by refusing to quit. My continuing life honors life itself—proves life's value, demonstrates life's resilience. By living, I honor living.",
    userChoices: [{ text: "Live on to honor life.", nextNodeId: "end" }]
  },
  {
    id: "honor-beautifully",
    characterMessage: "I try to. By continuing despite difficulty, by refusing to waste this life, by planning meaningful future. I honor the privilege of being alive through how I live—even here, even now.",
    userChoices: [{ text: "You honor life itself.", nextNodeId: "end" }]
  },
  {
    id: "life-great-meaning",
    characterMessage: "It will. If I survive, my life will mean something—bearing witness, honoring the dead, teaching future generations. Great meaning born from terrible suffering. That transforms everything, makes it worthwhile.",
    userChoices: [{ text: "Your life will mean everything.", nextNodeId: "end" }]
  }
];
