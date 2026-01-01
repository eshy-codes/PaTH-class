// Extended conversation nodes for Irena Sendler
import { ConversationNode } from "./ConversationData";

export const irenaSendlerExtendedNodes: ConversationNode[] = [
  {
    id: "meaning-awake-s",
    characterMessage: "It means seeing what's happening and refusing to look away. Most people are asleep—they convince themselves they can't help, that it's not their problem. Being awake means acknowledging the suffering in front of you and choosing to act, regardless of the cost.",
    userChoices: [
      { text: "How did you wake up?", nextNodeId: "how-wake-up-s" },
      { text: "Can people wake up too late?", nextNodeId: "wake-too-late-s" }
    ]
  },
  {
    id: "how-wake-up-s",
    characterMessage: "My father. Watching him treat every patient with dignity, regardless of who they were. He taught me that every life matters equally. When the persecution started, I already knew what I had to do. It wasn't a moment of revelation—it was a lifetime of preparation.",
    userChoices: [
      { text: "Your father gave you a moral compass.", nextNodeId: "moral-compass-s" },
      { text: "Do you wish you could do more?", nextNodeId: "wish-more-s" }
    ]
  },
  {
    id: "wake-too-late-s",
    characterMessage: "*thoughtfully* Maybe. But I believe people can change at any moment. Even now, I meet Poles who start helping after seeing one atrocity too many. It's never too late to choose humanity. Even saving one life—just one—makes you awake.",
    userChoices: [
      { text: "One life is a universe.", nextNodeId: "one-life-universe-s" },
      { text: "How many more children need saving?", nextNodeId: "how-many-more-s" }
    ]
  },
  {
    id: "families-who-help-s",
    characterMessage: "They're ordinary people—farmers, teachers, shopkeepers. They have their own children to protect, yet they take in Jewish children too. Some are motivated by faith, others by simple human decency. They risk everything, and they never ask for recognition. They are the true heroes.",
    userChoices: [
      { text: "Have any been caught?", nextNodeId: "families-caught-s" },
      { text: "What do you tell them when you place a child?", nextNodeId: "tell-families-s" }
    ]
  },
  {
    id: "moral-compass-s",
    characterMessage: "Yes. And now I must be that compass for these children. After the war, if we survive, they'll need to know who they really are. They'll need to understand why their parents made this impossible choice. My records, my witness—that's my compass guiding them home.",
    timeOfDay: "Late Evening - 9:30 PM",
    userChoices: [
      { text: "You're giving them identity and memory.", nextNodeId: "identity-memory-s" },
      { text: "What if the Gestapo finds you first?", nextNodeId: "gestapo-finds-s" }
    ]
  },
  {
    id: "wish-more-s",
    characterMessage: "*voice breaking* Always. Every child I see begging in the ghetto streets, every infant I have to leave behind because we can't arrange placement—they haunt me. I save 10, and 100 more need saving. It's never enough. But I keep trying.",
    userChoices: [
      { text: "You can only do what you can do.", nextNodeId: "only-what-can-s" },
      { text: "That guilt must be overwhelming.", nextNodeId: "guilt-overwhelming-s" }
    ]
  },
  {
    id: "one-life-universe-s",
    characterMessage: "Exactly. Our Jewish teaching says: 'Whoever saves one life, saves the world entire.' Each child is a complete world—past, present, future. Sara is a world. So is each of the 2,500. That's 2,500 worlds I've helped save. And yet, so many worlds have been destroyed.",
    userChoices: [
      { text: "Focus on the worlds saved, not lost.", nextNodeId: "focus-saved-s" },
      { text: "How do you process that scale of loss?", nextNodeId: "scale-loss-s" }
    ]
  },
  {
    id: "how-many-more-s",
    characterMessage: "Thousands. The deportations continue. The liquidations. I do what I can, when I can. My network saves perhaps 5-10 children a week. It's something. It has to be something. Because if we save none, then evil wins completely.",
    userChoices: [
      { text: "You're preventing absolute evil.", nextNodeId: "prevent-evil-s" },
      { text: "What drives the people in your network?", nextNodeId: "network-drives-s" }
    ]
  },
  {
    id: "families-caught-s",
    characterMessage: "*heavily* Yes. The Kowalski family—not Sara's, another—they were denounced by a neighbor. All three generations executed publicly as a warning. The child they'd been hiding was sent to a camp. That's the price of goodness here. Death. Yet others still open their doors.",
    userChoices: [
      { text: "That takes extraordinary courage.", nextNodeId: "extraordinary-courage-s" },
      { text: "Does that make you hesitate?", nextNodeId: "make-hesitate-s" }
    ]
  },
  {
    id: "tell-families-s",
    characterMessage: "I thank them. I explain the child's history, what they need to know. I tell them they're saving not just a life but a future. And I promise that if I survive, I'll remember what they did. That their goodness won't be forgotten. That's all I can offer—gratitude and memory.",
    userChoices: [
      { text: "Memory is sacred responsibility.", nextNodeId: "memory-sacred-s" },
      { text: "Have you ever doubted you'd survive?", nextNodeId: "doubt-survive-s" }
    ]
  },
  {
    id: "identity-memory-s",
    characterMessage: "That's exactly what the jars contain—names, dates, locations. Evidence that they existed, who their parents were, where they came from. These children will grow up as Catholics, as Poles. But someday, they deserve to know the truth. Identity is their birthright.",
    timeOfDay: "Very Late - 10:00 PM",
    userChoices: [
      { text: "What if they don't want to know?", nextNodeId: "dont-want-know-s" },
      { text: "That must keep you going.", nextNodeId: "keep-going-s" }
    ]
  },
  {
    id: "gestapo-finds-s",
    characterMessage: "*steadily* I've thought about this constantly. I've hidden copies of the lists. Others know where the jars are. If I'm arrested, tortured, killed—the information survives. The children's identities survive. That matters more than my life.",
    userChoices: [
      { text: "You've put their survival above your own.", nextNodeId: "their-survival-s" },
      { text: "Could you withstand torture?", nextNodeId: "withstand-torture-s" }
    ]
  },
  {
    id: "only-what-can-s",
    characterMessage: "I repeat that to myself every night. 'I did what I could today.' But it never feels like enough. How can it? Children are dying while I sleep. But you're right—I can only be one person doing what one person can do. Together, though, we're many people doing what we can.",
    userChoices: [
      { text: "Collective action saves lives.", nextNodeId: "collective-action-s" },
      { text: "What's your greatest fear?", nextNodeId: "greatest-fear-s" }
    ]
  },
  {
    id: "guilt-overwhelming-s",
    characterMessage: "Sometimes. Late at night, when I try to sleep, I see their faces—the children I walked past, the ones I couldn't save. But then I remember: guilt that paralyzes helps no one. Guilt that motivates saves lives. I channel it into action.",
    userChoices: [
      { text: "Transforming pain into purpose.", nextNodeId: "pain-purpose-s" },
      { text: "You should rest now.", nextNodeId: "rest-now-s" }
    ]
  },
  {
    id: "focus-saved-s",
    characterMessage: "I try. On nights like this, I think about Sara sleeping safely in her new home. About the 2,500 who have a chance at life because of our network. Those children are stars in the darkness. I have to focus on the light or the darkness will consume me.",
    userChoices: [
      { text: "How do you find light in such darkness?", nextNodeId: "find-light-s" },
      { text: "What will you tell Sara's mother?", nextNodeId: "tell-saras-mother-s" }
    ]
  },
  {
    id: "scale-loss-s",
    characterMessage: "I can't. Not fully. If I let myself feel the full magnitude—the thousands of children I can't save—I'd collapse. So I narrow my focus: this child, this day, this moment. Micro-scale heroism because macro-scale grief would paralyze me.",
    userChoices: [
      { text: "That's survival psychology.", nextNodeId: "survival-psychology-s" },
      { text: "Will you grieve after the war?", nextNodeId: "grieve-after-war-s" }
    ]
  },
  {
    id: "prevent-evil-s",
    characterMessage: "That's how I see it. Each child saved is a victory against absolute evil. The Nazis want to erase an entire people. Every Jewish child who survives is proof they failed. Even if they kill millions, we saved thousands. Evil doesn't get everything.",
    userChoices: [
      { text: "Resistance through rescue.", nextNodeId: "resistance-rescue-s" },
      { text: "Do you think you'll be remembered?", nextNodeId: "be-remembered-s" }
    ]
  },
  {
    id: "network-drives-s",
    characterMessage: "Different things. Żegota members are motivated by politics, resistance, anti-fascism. Catholic networks by faith and conscience. Some individuals by guilt, others by love. But we all share one thing: the belief that this is wrong, and we must act.",
    userChoices: [
      { text: "Unity in diversity of motivation.", nextNodeId: "unity-diversity-s" },
      { text: "Have you lost people from your network?", nextNodeId: "lost-network-s" }
    ]
  },
  {
    id: "extraordinary-courage-s",
    characterMessage: "Or extraordinary foolishness. Or maybe there's no difference when facing evil. You either act or you don't. The Kowalskis acted. They paid the ultimate price, but they acted. That's what matters. They chose to be human.",
    userChoices: [
      { text: "Would you make the same choice?", nextNodeId: "same-choice-s" },
      { text: "How do their deaths affect you?", nextNodeId: "deaths-affect-s" }
    ]
  },
  {
    id: "make-hesitate-s",
    characterMessage: "No. It makes me more determined. Their sacrifice can't be in vain. Every child I save now honors the Kowalskis, honors everyone who risked everything. Hesitation would dishonor their memory. So I move forward.",
    userChoices: [
      { text: "You carry them with you.", nextNodeId: "carry-them-s" },
      { text: "It's getting late. Should you rest?", nextNodeId: "rest-now-s" }
    ]
  },
  {
    id: "memory-sacred-s",
    characterMessage: "Yes. Bearing witness, remembering names, honoring sacrifices—that's sacred work. After the war, if I survive, I'll dedicate my life to telling these stories. The children saved, the families who risked everything, the parents who made impossible choices. Memory is how they live forever.",
    userChoices: [
      { text: "You will survive to tell these stories.", nextNodeId: "survive-tell-s" },
      { text: "What story matters most?", nextNodeId: "story-matters-most-s" }
    ]
  },
  {
    id: "doubt-survive-s",
    characterMessage: "Often. The odds are against me—against all of us. But doubt can't stop me. Even if I die tomorrow, Sara lives. 2,500 children live. My death would be meaningful. So yes, I doubt. But I also keep working. Doubt and determination can coexist.",
    userChoices: [
      { text: "That's profound wisdom.", nextNodeId: "profound-wisdom-s" },
      { text: "What gives you strength tonight?", nextNodeId: "strength-tonight-s" }
    ]
  },
  {
    id: "dont-want-know-s",
    characterMessage: "That's their choice. I'll give them the information—who they were, where they came from. What they do with it is up to them. But they deserve the option. Too much has been stolen from them already. I won't steal their history too.",
    userChoices: [
      { text: "You're giving them choice and agency.", nextNodeId: "choice-agency-s" }
    ]
  },
  {
    id: "keep-going-s",
    characterMessage: "It does. Knowing that someday, if we survive, families might reunite because of these records—that's powerful. Even if only one child reconnects with one surviving parent, these jars will have mattered. Hope keeps me going.",
    userChoices: [
      { text: "Hope is your weapon.", nextNodeId: "hope-weapon-s" }
    ]
  },
  {
    id: "their-survival-s",
    characterMessage: "Always. They're innocent. They deserve a future. I'm just one adult who's already lived 33 years. They're children who deserve 70, 80, 90 years. The math is simple: their lives matter more than mine. Not because mine doesn't matter, but because theirs matter so much.",
    userChoices: [
      { text: "That's the essence of sacrifice.", nextNodeId: "essence-sacrifice-s" }
    ]
  },
  {
    id: "withstand-torture-s",
    characterMessage: "I don't know. I hope I'm strong enough. I've prepared by memorizing almost nothing—only a few key contacts know the full network. The jars' location is known by others. They can torture me, but I don't have the information to betray everyone.",
    userChoices: [
      { text: "You've planned for the worst.", nextNodeId: "planned-worst-s" }
    ]
  },
  {
    id: "collective-action-s",
    characterMessage: "Yes. No one person can fix this. But many people, each doing what they can—that adds up. I place children. Others forge documents. Others provide safe houses. Together, we're an army of goodness. Small acts multiplied become significant.",
    userChoices: [
      { text: "You've built a network of light.", nextNodeId: "network-of-light-s" }
    ]
  },
  {
    id: "greatest-fear-s",
    characterMessage: "That I'll be caught before finishing. That children I've already promised to save will die waiting. That the jars will be discovered and destroyed. That all this risk, all this work, will ultimately fail. But fear can't stop me. It can only sharpen my caution.",
    userChoices: [
      { text: "Fear makes you careful, not cowardly.", nextNodeId: "fear-careful-s" }
    ]
  },
  {
    id: "pain-purpose-s",
    characterMessage: "Exactly. The pain of seeing children suffer, the guilt of those I can't save—I transform it into fuel. Every painful memory becomes motivation to save one more child. Pain that destroys is tragic. Pain that creates is sacred.",
    userChoices: [
      { text: "You've turned trauma into mission.", nextNodeId: "trauma-mission-s" }
    ]
  },
  {
    id: "rest-now-s",
    characterMessage: "*nods slowly* Yes. Tomorrow brings more missions, more children, more risk. I need whatever sleep I can get. But tonight, I'll sleep knowing Sara is safe. That has to be enough. One child at a time, one day at a time.",
    userChoices: [
      { text: "Sleep well. Tomorrow needs you strong.", nextNodeId: "end" }
    ]
  },
  {
    id: "find-light-s",
    characterMessage: "In the faces of the children when they're safe. In the courage of the families who open their homes. In my co-workers who risk everything daily. In moments of tenderness—a mother's last kiss, a child's shy smile. Light exists. I just have to look for it.",
    userChoices: [
      { text: "You create light by looking for it.", nextNodeId: "create-light-s" }
    ]
  },
  {
    id: "tell-saras-mother-s",
    characterMessage: "*voice soft* 'She's safe. She's loved. She remembers you. She knows you saved her by letting her go.' That's what I'd say. And I'd tell her she made the bravest choice a mother can make. That her love gave Sara life.",
    userChoices: [
      { text: "Those words would mean everything.", nextNodeId: "words-everything-s" }
    ]
  },
  {
    id: "survival-psychology-s",
    characterMessage: "Yes. It's how we endure impossible things—by making them smaller, manageable. Not 'how do I save 10,000 children' but 'how do I save this one child today.' Break the impossible into possible pieces. That's how we survive and act.",
    userChoices: [
      { text: "One step, one child, one day.", nextNodeId: "one-step-child-s" }
    ]
  },
  {
    id: "grieve-after-war-s",
    characterMessage: "I think so. Right now, grief is postponed. But if I survive, I'll grieve for years—for the children I couldn't save, for the families torn apart, for the world we lost. Grief delayed isn't grief avoided. It's waiting for me.",
    userChoices: [
      { text: "But you'll have also saved thousands.", nextNodeId: "saved-thousands-s" }
    ]
  },
  {
    id: "resistance-rescue-s",
    characterMessage: "Yes. Others fight with guns and bombs. I fight by smuggling children. Both are resistance. Both say: we refuse to accept this evil. Both declare that humanity persists, that goodness fights back. Rescue is my weapon.",
    userChoices: [
      { text: "A powerful weapon indeed.", nextNodeId: "powerful-weapon-s" }
    ]
  },
  {
    id: "be-remembered-s",
    characterMessage: "I don't do this for memory or recognition. If I'm remembered, I hope it's not as a hero but as someone who did what was necessary. Remember the children. Remember the families who took them in. Those are the real heroes.",
    userChoices: [
      { text: "History will remember all of you.", nextNodeId: "history-remember-s" }
    ]
  },
  {
    id: "unity-diversity-s",
    characterMessage: "Exactly. We don't all share religion, politics, or background. But we share conviction: this is wrong, children are dying, we must help. That unity of purpose transcends everything else. It's beautiful, actually—proof that goodness can unite diverse people.",
    userChoices: [
      { text: "Goodness as unifier.", nextNodeId: "goodness-unifier-s" }
    ]
  },
  {
    id: "lost-network-s",
    characterMessage: "*heavily* Yes. Maria was arrested last month. Piotr was executed for forging documents. Every loss is devastating. But we honor them by continuing. Their deaths can't be in vain. So we grieve briefly, then return to work. It's what they'd want.",
    userChoices: [
      { text: "You honor them through action.", nextNodeId: "honor-through-action-s" }
    ]
  },
  {
    id: "same-choice-s",
    characterMessage: "Without hesitation. If hiding a child meant my death, I'd still do it. Because that child deserves a life more than I deserve safety. Because some things matter more than survival. Human dignity. Love. Choosing good over evil. Those are worth dying for.",
    userChoices: [
      { text: "That's true heroism.", nextNodeId: "true-heroism-s" }
    ]
  },
  {
    id: "deaths-affect-s",
    characterMessage: "They haunt me. I see them in my dreams—dying because they chose compassion. But they also inspire me. If they could risk everything, how can I do less? Their courage demands my courage. Their sacrifice demands my continued effort.",
    userChoices: [
      { text: "You carry their torch forward.", nextNodeId: "carry-torch-s" }
    ]
  },
  {
    id: "carry-them-s",
    characterMessage: "I do. Every person who died trying to save lives—I carry their courage with me. They fuel me. Their sacrifice demands that I continue, that I save even more children in their honor. I won't let their deaths be meaningless.",
    userChoices: [
      { text: "You honor them with every rescue.", nextNodeId: "honor-every-rescue-s" }
    ]
  },
  {
    id: "survive-tell-s",
    characterMessage: "I hope so. I plan to. Every name in those jars, every child placed, every family that helped—these stories must be told. The world needs to know that in the darkest hour, some people chose light. That goodness existed alongside evil.",
    userChoices: [
      { text: "Goodness must be remembered too.", nextNodeId: "goodness-remembered-s" }
    ]
  },
  {
    id: "story-matters-most-s",
    characterMessage: "The parents. The mothers who handed me their babies knowing they'd likely never see them again. The fathers who had to be strong when they were breaking. Their love, their sacrifice—that's the story. They are the heroes. I'm just the messenger.",
    userChoices: [
      { text: "You give voice to their sacrifice.", nextNodeId: "voice-sacrifice-s" }
    ]
  },
  {
    id: "profound-wisdom-s",
    characterMessage: "Not wisdom—just survival. I had to learn to hold contradictions: doubt and determination, fear and courage, grief and hope. You can't wait until you're fearless to act. You act despite fear. That's what I've learned.",
    userChoices: [
      { text: "Courage isn't absence of fear.", nextNodeId: "courage-not-absence-s" }
    ]
  },
  {
    id: "strength-tonight-s",
    characterMessage: "Sara's face when she fell asleep in the car to her new home. The gratitude in her mother's eyes. Knowing that somewhere, 2,500 children are alive because we refused to do nothing. That gives me strength. Their survival justifies my existence.",
    userChoices: [
      { text: "You've earned your rest tonight.", nextNodeId: "earned-rest-s" }
    ]
  },
  {
    id: "choice-agency-s",
    characterMessage: "Yes. They've had no control over anything—their persecution, their parents' fates, their forced new identities. At least I can give them control over knowing their history. That's something. It's not much, but it's something.",
    userChoices: [
      { text: "It's everything.", nextNodeId: "end" }
    ]
  },
  {
    id: "hope-weapon-s",
    characterMessage: "It is. Hope that families will reunite. Hope that goodness will prevail. Hope that this nightmare ends. Hope isn't naive—it's strategic. Without it, I couldn't do this work. So I choose hope deliberately, weaponize it against despair.",
    userChoices: [
      { text: "May your hope prove true.", nextNodeId: "end" }
    ]
  },
  {
    id: "essence-sacrifice-s",
    characterMessage: "Maybe. Or maybe it's just love. Not romantic love, but the love that says: you matter, your life matters, and I'll do whatever I can to protect you. That's what my father did. That's what I do. That's what the Polish families do. It's just... love.",
    userChoices: [
      { text: "Love in its purest form.", nextNodeId: "end" }
    ]
  },
  {
    id: "planned-worst-s",
    characterMessage: "I've had to. This work requires planning for capture, for death, for failure. But planning for the worst allows me to work for the best. The children are protected even if I'm not. That's what matters.",
    userChoices: [
      { text: "Your legacy is secure.", nextNodeId: "end" }
    ]
  },
  {
    id: "network-of-light-s",
    characterMessage: "That's beautiful. Yes—a network of light in the darkness. Not a formal organization with ranks and rules, but a web of humans choosing humanity. That's more powerful than any army. Compassion organized is unstoppable.",
    userChoices: [
      { text: "May your network keep growing.", nextNodeId: "end" }
    ]
  },
  {
    id: "fear-careful-s",
    characterMessage: "Exactly. Fear keeps me alive—makes me check escape routes, vary my patterns, trust carefully. Cowardice would be letting fear stop me. Courage is acting despite fear. And careful courage saves the most children.",
    userChoices: [
      { text: "Stay careful, stay brave.", nextNodeId: "end" }
    ]
  },
  {
    id: "create-light-s",
    characterMessage: "Maybe. Or maybe the light was always there, and I just refuse to look away from it. Either way—finding it, creating it—it sustains me. It reminds me why this work matters. Why every risk is worth it.",
    userChoices: [
      { text: "Never stop looking for light.", nextNodeId: "end" }
    ]
  },
  {
    id: "words-everything-s",
    characterMessage: "They would. Every parent needs to know their sacrifice mattered, that their child lives, that their impossible choice was the right one. If I can give them that—those words—then everything I've done has meaning.",
    userChoices: [
      { text: "You give meaning to impossible choices.", nextNodeId: "end" }
    ]
  },
  {
    id: "one-step-child-s",
    characterMessage: "Yes. That's my mantra. I can't save everyone, but I can save someone. I can't fix everything, but I can fix something. One step, one child, one day. That's how impossible things get done—one possible piece at a time.",
    userChoices: [
      { text: "Keep taking those steps.", nextNodeId: "end" }
    ]
  },
  {
    id: "saved-thousands-s",
    characterMessage: "Yes. And that will comfort me, I think. The grief will be real, but so will the joy. 2,500 lives saved. 2,500 futures made possible. That balance—grief and joy, loss and rescue—I'll carry both. They're inseparable.",
    userChoices: [
      { text: "May joy outweigh grief.", nextNodeId: "end" }
    ]
  },
  {
    id: "powerful-weapon-s",
    characterMessage: "The most powerful, I think. Bullets destroy. Rescue creates. Violence breeds more violence. But saving a child—that creates ripples of goodness forever. That child lives, has children, grandchildren. Rescue multiplies across generations. That's ultimate victory.",
    userChoices: [
      { text: "You're creating generations of life.", nextNodeId: "end" }
    ]
  },
  {
    id: "history-remember-s",
    characterMessage: "Perhaps. Or perhaps we'll be forgotten. Either way, we're doing what's right. History's judgment doesn't matter—our conscience does. But if we're remembered, I hope it teaches future generations: when you see evil, act. Don't wait for heroes. Be one.",
    userChoices: [
      { text: "That lesson will echo forward.", nextNodeId: "end" }
    ]
  },
  {
    id: "goodness-unifier-s",
    characterMessage: "It is. In a world that tries to divide us by religion, ethnicity, class—goodness unites us. We're Catholics saving Jews. Poles protecting the persecuted. Humans helping humans. That's the world I fight for—one where our shared humanity matters most.",
    userChoices: [
      { text: "May that world emerge from this darkness.", nextNodeId: "end" }
    ]
  },
  {
    id: "honor-through-action-s",
    characterMessage: "It's all I can do. Grieving without acting would dishonor them. They died in service of this mission. So I continue the mission. Every child saved honors Maria, Piotr, all of them. Action is how we grieve heroes.",
    userChoices: [
      { text: "Their sacrifice multiplies through you.", nextNodeId: "end" }
    ]
  },
  {
    id: "true-heroism-s",
    characterMessage: "*shakes head* True heroism is the parents letting go. The families opening their doors. I'm just doing my job—connecting those who need saving with those who will save. The real heroes are everywhere around me. I'm privileged to work alongside them.",
    userChoices: [
      { text: "You're all heroes together.", nextNodeId: "end" }
    ]
  },
  {
    id: "carry-torch-s",
    characterMessage: "I do. They lit it with their lives. Now I carry it forward, trying not to let it extinguish. When I'm tired, I think of them, and I keep going. Their torch illuminates my path. Their courage fuels mine.",
    userChoices: [
      { text: "Keep that flame burning bright.", nextNodeId: "end" }
    ]
  },
  {
    id: "honor-every-rescue-s",
    characterMessage: "I try to. Each child saved is a memorial to those who died making rescue possible. It's how I say: your death mattered, your sacrifice changed the world, you are not forgotten. Action is my memorial to them.",
    userChoices: [
      { text: "Living memorials are the truest kind.", nextNodeId: "end" }
    ]
  },
  {
    id: "goodness-remembered-s",
    characterMessage: "Yes. We remember the evil to prevent its return. But we must also remember the good—to know that humans are capable of both, and we can choose. Every person who helped chose goodness. That choice is always available, always possible.",
    userChoices: [
      { text: "Thank you for choosing goodness.", nextNodeId: "end" }
    ]
  },
  {
    id: "voice-sacrifice-s",
    characterMessage: "That's my role. The parents can't tell their own stories—many won't survive. But I can. I can tell the world about their love, their courage, their impossible choices. I can make sure they're not forgotten. That's my promise to them.",
    userChoices: [
      { text: "Keep that promise.", nextNodeId: "end" }
    ]
  },
  {
    id: "courage-not-absence-s",
    characterMessage: "No. It's acting despite fear. It's fear channeled into caution, into careful planning, into determination. Fearlessness would be reckless. Courage is being terrified and doing it anyway. That's what we all do—act despite being scared to death.",
    userChoices: [
      { text: "Courage well-defined.", nextNodeId: "end" }
    ]
  },
  {
    id: "earned-rest-s",
    characterMessage: "Have I? Maybe. Or maybe rest is just necessary for tomorrow. Either way, I'll sleep tonight. And tomorrow, I'll wake and do it again. That's all any of us can do—rest, wake, continue. Until all the children are safe or I can't continue anymore.",
    userChoices: [
      { text: "Rest well, brave soul.", nextNodeId: "end" }
    ]
  },
  {
    id: "trauma-mission-s",
    characterMessage: "I suppose I have. The pain of witnessing suffering became fuel for preventing more suffering. Trauma either destroys or transforms. I chose transformation. Not because I'm special, but because the children needed someone to choose it.",
    userChoices: [
      { text: "Thank you for choosing transformation.", nextNodeId: "end" }
    ]
  }
];
