import { CharacterCard } from "./CharacterCard";
import { Separator } from "./ui/separator";
import { annefrankConversation, type ConversationNode } from "./ConversationData";
import { korczakConversation } from "./OtherConversations";
import { irenaSendlerExtendedNodes, elieWieselExtendedNodes, gerdaWeissmannExtendedNodes } from "./ExtendedConversations";
import anneFrankImg from "figma:asset/babc7cce78d23fddd171ce643ff9ad6aee83309f.png";
import januszKorczakImg from "figma:asset/51052a674fb146607257914bb95a734c2f6be8ab.png";
import irenaSendlerImg from "figma:asset/64b2d2ab17b6d82b7710056f8bfbcda7483d4327.png";
import elieWieselImg from "figma:asset/1b77582438e9b143538d066fec23952eca155bd6.png";
import gerdaWeissmannImg from "figma:asset/b5279639d0f4e59a2ee2ebc70d2c227520e36d4b.png";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Info } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export type { ConversationNode };

interface Character {
  id: string;
  name: string;
  role: string;
  years: string;
  image: string;
  quote: string;
  bio: string;
  fullBio: string;
  chatLink: string;
  sources: string[];
  conversationTree: ConversationNode[];
}

export const characters: Character[] = [
  {
    id: "anne-frank",
    name: "Anne Frank",
    role: "Jewish child in hiding",
    years: "1929–1945",
    image: anneFrankImg,
    quote: "In spite of everything, I still believe that people are really good at heart.",
    bio: "Symbol of hope and innocence",
    fullBio: "Anne Frank was a Jewish girl who hid with her family in Amsterdam during the Nazi occupation of the Netherlands. Her diary, written while in hiding from 1942 to 1944, has become one of the world's most widely read books and a testament to the human spirit. Anne died in Bergen-Belsen concentration camp in early 1945, just weeks before liberation.",
    chatLink: "https://chat.openai.com/share/YOUR_ANNE_FRANK_CHAT_LINK",
    sources: [
      "Anne Frank House, Amsterdam",
      "United States Holocaust Memorial Museum",
      "The Diary of Anne Frank (Primary Source)"
    ],
    conversationTree: annefrankConversation
  },
  /*{
    id: "anne-frank-OLD",
    conversationTree-OLD: [
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
      {
        id: "end",
        characterMessage: "Goodnight. Thank you for listening. For caring enough to ask, to understand. That means more than you know.",
        userChoices: []
      }
    ]
  },*/
  {
    id: "janusz-korczak",
    name: "Dr. Janusz Korczak",
    role: "Jewish physician and orphanage director",
    years: "1878–1942",
    image: januszKorczakImg,
    quote: "You do not leave a sick child in the night, and you do not leave children at a time like this.",
    bio: "Physician who stayed with his children to the end",
    fullBio: "Janusz Korczak was a Polish-Jewish pediatrician, educator, and author who ran an orphanage in the Warsaw Ghetto. When the Nazis came to deport the children to Treblinka in August 1942, Korczak refused offers of sanctuary and chose to accompany his 200 orphans to the gas chambers, providing them comfort until the very end.",
    chatLink: "https://chat.openai.com/share/YOUR_KORCZAK_CHAT_LINK",
    sources: [
      "Yad Vashem, Jerusalem",
      "USHMM - Janusz Korczak Collection",
      "The Ghetto Fighters' House Museum"
    ],
    conversationTree: korczakConversation
  },
  /*{
    id: "korczak-OLD",
    conversationTree-OLD: [
      {
        id: "start",
        characterMessage: "Good morning. The children are beginning to wake. Even here in the Warsaw Ghetto, we try to maintain our routines—it gives them a sense of normalcy, of structure in this chaos. I've been the director of this orphanage for over 20 years. The walls may have changed, but my duty to these children has not.",
        timeOfDay: "Early Morning - 6:30 AM",
        userChoices: [
          { text: "How many children are in your care?", nextNodeId: "how-many" },
          { text: "What's your morning routine?", nextNodeId: "morning-routine" },
          { text: "How has the orphanage changed since the ghetto?", nextNodeId: "since-ghetto" }
        ]
      },
      {
        id: "how-many",
        characterMessage: "Around 200 children, ages 4 to 14. Most have lost their parents to disease, deportation, or worse. This orphanage—Dom Sierot, we call it—is their family now. I am their doctor, their teacher, their protector. Though I wonder how much I can truly protect them from...",
        userChoices: [
          { text: "Tell me about the children.", nextNodeId: "about-children" },
          { text: "How do you care for so many?", nextNodeId: "care-many" },
          { text: "What worries you most?", nextNodeId: "worries" }
        ]
      },
      {
        id: "morning-routine",
        characterMessage: "We wake at 6:30. The children wash, dress, make their beds. Then we have breakfast—though 'breakfast' now means thin soup and a piece of bread. Before the war, we had milk, porridge, fruit. Now we make do with what we can find. But we still sit together, we still give thanks, we still maintain dignity.",
        userChoices: [
          { text: "How do you find enough food?", nextNodeId: "finding-food" },
          { text: "Why is routine so important?", nextNodeId: "why-routine" }
        ]
      },
      {
        id: "since-ghetto",
        characterMessage: "Before, we had gardens, space to play, proper classrooms. Now we're crammed into this building in the ghetto, behind walls and barbed wire. The children can't leave. There's disease, hunger, fear. But inside these walls, we create a different world—one of learning, respect, and childhood.",
        timeOfDay: "Morning - 8:00 AM",
        userChoices: [
          { text: "How do you create that different world?", nextNodeId: "different-world" },
          { text: "What do the children know about what's happening?", nextNodeId: "children-know" }
        ]
      },
      {
        id: "about-children",
        characterMessage: "Each one is unique, precious. There's Samuel, who loves mathematics. Little Esther, who draws beautiful pictures. David, who makes the others laugh even when there's little to laugh about. They are not just 'orphans'—they are individuals with thoughts, feelings, dreams.",
        userChoices: [
          { text: "How do you honor their individuality?", nextNodeId: "honor-individual" },
          { text: "Do they still have dreams for the future?", nextNodeId: "children-dreams" }
        ]
      },
      {
        id: "care-many",
        characterMessage: "I have staff—teachers, nurses, older children who help the younger ones. We run this like a small democracy. The children have their own court, their own newspaper. They have responsibilities and rights. Dignity, you see, is not a luxury. It's essential to being human.",
        userChoices: [
          { text: "Tell me about their newspaper.", nextNodeId: "newspaper" },
          { text: "The children run their own court?", nextNodeId: "childrens-court" }
        ]
      },
      {
        id: "worries",
        characterMessage: "*a heavy pause* The deportations. We hear about them—trains leaving, people told they're being 'resettled.' Families torn apart. I worry every day that they'll come for the children. I worry that my presence isn't enough to protect them.",
        userChoices: [
          { text: "What would you do if they came?", nextNodeId: "if-they-came" },
          { text: "How do you carry that fear?", nextNodeId: "carry-fear" }
        ]
      },
      {
        id: "finding-food",
        characterMessage: "I beg, I barter, I use every connection I have. Sometimes I perform on the radio—yes, this old doctor becomes a storyteller—and use my small fame to get donations. The children must eat. Whatever it takes.",
        userChoices: [
          { text: "You perform on the radio?", nextNodeId: "radio-stories" },
          { text: "What would you not do for them?", nextNodeId: "not-do" }
        ]
      },
      {
        id: "why-routine",
        characterMessage: "Children need structure to feel safe. When the world outside is chaos, routine says 'you can depend on this.' Wake up at the same time. Have lessons. Play. Eat meals together. These small consistencies are anchors in a storm.",
        timeOfDay: "Mid-Morning - 10:00 AM",
        userChoices: [
          { text: "What are lessons like?", nextNodeId: "lessons" },
          { text: "Do the children still play?", nextNodeId: "children-play" }
        ]
      },
      {
        id: "different-world",
        characterMessage: "We have theater performances. Music. Art. We celebrate birthdays and holidays. The children govern themselves through their court and newspaper. We discuss philosophy, tell stories. Inside these walls, they're not victims—they're children learning to be thoughtful, kind humans.",
        userChoices: [
          { text: "What do you teach them about kindness now?", nextNodeId: "teach-kindness" },
          { text: "Tell me about the theater.", nextNodeId: "theater" }
        ]
      },
      {
        id: "children-know",
        characterMessage: "They know more than we wish they did. They see the hunger, the patrols, the walls. They've lost parents. But I try to shield them from the worst while teaching them resilience. Children are more perceptive than we think—and braver.",
        userChoices: [
          { text: "How do you talk to them about their fears?", nextNodeId: "about-fears" },
          { text: "What kind of resilience do you teach?", nextNodeId: "teach-resilience" }
        ]
      },
      {
        id: "honor-individual",
        characterMessage: "I listen to them. Each child has a voice in our community. I remember their preferences, their struggles, their victories. When David succeeds at a difficult math problem or Esther finishes a drawing, we celebrate. They are not numbers. They are not generic 'orphans.' They are themselves.",
        userChoices: [
          { text: "That must give them great comfort.", nextNodeId: "great-comfort" },
          { text: "How do they respond to this respect?", nextNodeId: "respond-respect" }
        ]
      },
      {
        id: "newspaper",
        characterMessage: "The Little Review—our orphanage newspaper. The children write stories, poems, news about our community. It gives them a voice, a way to express themselves. In a world trying to silence Jewish voices, these children are heard, at least here.",
        timeOfDay: "Noon - 12:00 PM",
        userChoices: [
          { text: "What do they write about?", nextNodeId: "write-about" },
          { text: "Does writing help them?", nextNodeId: "writing-helps" }
        ]
      },
      {
        id: "childrens-court",
        characterMessage: "Yes. When there are disputes, the children themselves judge fairly. It teaches justice, empathy, responsibility. Both the accuser and accused have rights. There's a prosecutor and defender. It's democracy in miniature. Preparing them for a better world—if we survive to see it.",
        userChoices: [
          { text: "Do you believe in that better world?", nextNodeId: "better-world" },
          { text: "What kind of cases do they judge?", nextNodeId: "court-cases" }
        ]
      },
      {
        id: "if-they-came",
        characterMessage: "*quietly* I would not abandon them. I've had offers—friends telling me I could escape, that as a known writer and educator I might be spared. But you do not leave a sick child in the night. And you do not leave children at a time like this.",
        userChoices: [
          { text: "You would stay with them?", nextNodeId: "would-stay" },
          { text: "Are you not afraid?", nextNodeId: "not-afraid" }
        ]
      },
      {
        id: "carry-fear",
        characterMessage: "I carry it by focusing on today. This morning's breakfast. This afternoon's lesson. Tonight's story. The children need me present, not paralyzed by fear of tomorrow. So I do what must be done today, and trust that somehow, that is enough.",
        userChoices: [
          { text: "Where do you find that strength?", nextNodeId: "find-strength" },
          { text: "What's this afternoon's lesson?", nextNodeId: "afternoon-lesson" }
        ]
      },
      {
        id: "lessons",
        characterMessage: "Polish, arithmetic, history, science. But also ethics, empathy, critical thinking. I want them to question, to reason, to feel. Education isn't just facts—it's learning to be fully human, to think for oneself. That's more important than ever now.",
        timeOfDay: "Afternoon - 2:00 PM",
        userChoices: [
          { text: "What ethics do you teach in these times?", nextNodeId: "teach-ethics" },
          { text: "How do they stay focused on learning?", nextNodeId: "stay-focused" }
        ]
      },
      {
        id: "children-play",
        characterMessage: "Yes! They play tag in our small courtyard, put on plays, sing songs. Play is not frivolous—it's essential. It's how children process their world, find joy, remain children. I will not let this war steal their childhood completely.",
        userChoices: [
          { text: "What do they play?", nextNodeId: "what-play" },
          { text: "How do you protect their childhood?", nextNodeId: "protect-childhood" }
        ]
      },
      {
        id: "would-stay",
        characterMessage: "Of course. These are my children. For over twenty years, I've believed that children deserve respect, protection, love. How could I abandon those principles when they're needed most? My place is with them, wherever that leads.",
        userChoices: [
          { text: "That's extraordinary courage.", nextNodeId: "extraordinary-courage" },
          { text: "What do the children mean to you?", nextNodeId: "children-mean" }
        ]
      },
      {
        id: "not-afraid",
        characterMessage: "I'm an old man—64 years. I've lived my life. If staying with these children is how my story ends, then it ends with meaning. Fear is natural, but love is stronger. My love for these children transcends fear.",
        timeOfDay: "Late Afternoon - 4:00 PM",
        userChoices: [
          { text: "How did you come to love them so much?", nextNodeId: "come-to-love" },
          { text: "What is love in times like these?", nextNodeId: "love-in-times" }
        ]
      },
      {
        id: "better-world",
        characterMessage: "I must. If I don't believe in a better future, how can I teach the children to hope? Yes, the world is dark now. But human capacity for good exists alongside evil. We must nurture that goodness, especially in children. They are our future.",
        userChoices: [
          { text: "How do you nurture goodness here?", nextNodeId: "nurture-goodness" },
          { text: "Do the children still have hope?", nextNodeId: "children-hope" }
        ]
      },
      {
        id: "find-strength",
        characterMessage: "From the children themselves. When I see Samuel help little Esther with her reading, when David makes someone laugh, when they show kindness despite everything—that gives me strength. They remind me why this matters.",
        userChoices: [
          { text: "Tell me more about their kindness.", nextNodeId: "their-kindness" },
          { text: "What matters most to you?", nextNodeId: "matters-most" }
        ]
      },
      {
        id: "teach-ethics",
        characterMessage: "That every person has inherent worth. That justice and kindness matter even—especially—when the world shows you the opposite. That we're responsible for one another. The Nazis teach hatred. I teach humanity.",
        timeOfDay: "Evening - 6:00 PM",
        userChoices: [
          { text: "Can children understand such complex ethics?", nextNodeId: "children-understand" },
          { text: "How do you teach humanity in this inhumanity?", nextNodeId: "teach-humanity" }
        ]
      },
      {
        id: "children-mean",
        characterMessage: "Everything. They are innocence, potential, hope. They did not choose this world, but they deserve every chance to flourish despite it. Being their guardian is the greatest honor of my life. I will not betray that trust.",
        userChoices: [
          { text: "They're lucky to have you.", nextNodeId: "lucky-to-have" },
          { text: "What do you want for their future?", nextNodeId: "their-future" }
        ]
      },
      {
        id: "come-to-love",
        characterMessage: "I've spent decades with orphaned children. I've seen them at their most vulnerable and their most brave. Each one who passes through here takes a piece of my heart. How could I not love them? They are mine, as surely as if I had fathered each one.",
        userChoices: [
          { text: "What have they taught you?", nextNodeId: "taught-you" },
          { text: "Tell me about dinner time.", nextNodeId: "dinner-time" }
        ]
      },
      {
        id: "love-in-times",
        characterMessage: "Love is staying. Love is making soup from almost nothing and serving it with dignity. Love is telling a story to distract from hunger. Love is being present, being steady, being there when everything else falls apart. That's what I can give them.",
        userChoices: [
          { text: "Do they know how much you love them?", nextNodeId: "know-love" },
          { text: "What stories do you tell them?", nextNodeId: "what-stories" }
        ]
      },
      {
        id: "dinner-time",
        characterMessage: "We gather together, all 200 of us. We say blessings over our meager food. The older children serve the younger. We talk about our day. For this hour, we are a family sharing a meal. The food may be scarce, but the togetherness is abundant.",
        timeOfDay: "Evening Meal - 7:00 PM",
        userChoices: [
          { text: "What do you talk about at dinner?", nextNodeId: "dinner-talk" },
          { text: "How do you handle the scarcity?", nextNodeId: "handle-scarcity" }
        ]
      },
      {
        id: "taught-you",
        characterMessage: "That resilience is not an adult trait—children possess it naturally. That joy can exist alongside sorrow. That given respect and responsibility, young people rise to the occasion. That the human spirit is remarkably difficult to break.",
        userChoices: [
          { text: "Are there moments of joy here?", nextNodeId: "moments-joy" },
          { text: "What happens after dinner?", nextNodeId: "after-dinner" }
        ]
      },
      {
        id: "moments-joy",
        characterMessage: "Yes. A child's laughter. A successful lesson. A birthday celebrated with a single candle. A performance where the children forget, for an hour, where they are. These moments are precious beyond measure. They're our resistance—choosing joy despite everything.",
        userChoices: [
          { text: "Joy as resistance?", nextNodeId: "joy-resistance" },
          { text: "What's your message to the world?", nextNodeId: "message-world" }
        ]
      },
      {
        id: "after-dinner",
        characterMessage: "Evening activities. Perhaps a play or music. Story time for the younger ones. The older children might work on The Little Review or their lessons. Then bed at 8:30. I tuck them in, one by one when I can. Sometimes they're still afraid of the dark.",
        timeOfDay: "Night - 8:30 PM",
        userChoices: [
          { text: "What do you say to the afraid ones?", nextNodeId: "to-afraid" },
          { text: "What do you do after they sleep?", nextNodeId: "after-sleep" }
        ]
      },
      {
        id: "to-afraid",
        characterMessage: "I sit with them. I hold their hand. I tell them they are safe for tonight, that I am here, that tomorrow will come and we will face it together. I cannot promise them everything will be fine. But I can promise them they are not alone.",
        userChoices: [
          { text: "That presence must mean everything.", nextNodeId: "presence-means" },
          { text: "How do you face tomorrow?", nextNodeId: "face-tomorrow" }
        ]
      },
      {
        id: "after-sleep",
        characterMessage: "I write. I plan the next day's lessons and meals. I think about each child—who needs extra attention, who is struggling, who is thriving despite everything. And I pray, in my way, for the strength to serve them one more day.",
        userChoices: [
          { text: "What do you write about?", nextNodeId: "what-write" },
          { text: "What keeps you going?", nextNodeId: "keeps-going" }
        ]
      },
      {
        id: "presence-means",
        characterMessage: "In a world that tells them they don't matter, that their lives are worthless, my presence says: you matter. You are worth staying for. You are worth protecting. That message, I hope, will stay with them whatever comes.",
        userChoices: [
          { text: "It will. I'm certain of it.", nextNodeId: "will-stay" },
          { text: "What do you hope they remember?", nextNodeId: "hope-remember" }
        ]
      },
      {
        id: "hope-remember",
        characterMessage: "That they were loved. That they had dignity and voice. That even in darkness, there were adults who chose to protect childhood. That humanity persisted. And if the worst happens, that they did not face it alone.",
        timeOfDay: "Late Night - 10:00 PM",
        userChoices: [
          { text: "Your legacy will endure.", nextNodeId: "legacy-endure" }
        ]
      },
      {
        id: "legacy-endure",
        characterMessage: "I don't think about legacy. I think about tomorrow morning, when the children wake and need breakfast. I think about being there for them. That's all I can do. That's all any of us can do—show up for those who need us.",
        userChoices: [
          { text: "Thank you for this day with you.", nextNodeId: "end" }
        ]
      },
      {
        id: "end",
        characterMessage: "Thank you for listening, for caring about these children and their stories. Remember them. That's all I ask. Remember that they were here, that they mattered, that they were loved.",
        userChoices: []
      }
    ]
  },*/
  {
    id: "irena-sendler",
    name: "Irena Sendler",
    role: "Polish social worker and rescuer",
    years: "1910–2008",
    image: irenaSendlerImg,
    quote: "Every child saved with my help is the justification of my existence on this Earth, not a title to glory.",
    bio: "Rescuer who saved Jewish children from the Warsaw Ghetto",
    fullBio: "Irena Sendler was a Polish social worker who smuggled approximately 2,500 Jewish children out of the Warsaw Ghetto, saving them from the Holocaust. She kept records of their identities hidden in jars buried under an apple tree, hoping to reunite them with their families after the war. She was arrested and tortured by the Gestapo but never revealed the children's locations.",
    chatLink: "https://chat.openai.com/share/YOUR_SENDLER_CHAT_LINK",
    sources: [
      "Yad Vashem - Righteous Among the Nations",
      "USHMM - Rescue and Resistance",
      "Polish Center for Holocaust Research"
    ],
    conversationTree: [
      {
        id: "start",
        characterMessage: "It's early morning, and I'm preparing for another day. As a social worker, I have a pass that allows me entry to the Warsaw Ghetto. The Nazis think I'm there to check for typhus. They don't know my real purpose—to save as many children as I can.",
        timeOfDay: "Dawn - 6:00 AM",
        userChoices: [
          { text: "How did you get permission to enter the ghetto?", nextNodeId: "permission" },
          { text: "What's your real purpose there?", nextNodeId: "real-purpose" },
          { text: "Aren't you afraid of getting caught?", nextNodeId: "afraid-caught" }
        ]
      },
      {
        id: "permission",
        characterMessage: "I work for the Social Welfare Department. I obtained a pass under the pretense of conducting inspections for contagious diseases. The Nazis are terrified of typhus spreading beyond the ghetto walls, so they allow certain personnel in. I use their fear to save lives.",
        userChoices: [
          { text: "That's brilliant and brave.", nextNodeId: "brilliant-brave" },
          { text: "How often do you go in?", nextNodeId: "how-often" }
        ]
      },
      {
        id: "real-purpose",
        characterMessage: "To smuggle Jewish children out. To find them Polish families or orphanages that will hide them. To give them false papers, new identities, a chance at life. The parents in the ghetto know what's coming—the deportations, the death camps. Giving up their child is agony, but it's hope.",
        timeOfDay: "Morning - 8:00 AM",
        userChoices: [
          { text: "How do parents make that choice?", nextNodeId: "parents-choice" },
          { text: "How do you smuggle children out?", nextNodeId: "smuggle-how" }
        ]
      },
      {
        id: "afraid-caught",
        characterMessage: "*a steady look* Every moment. If I'm discovered, I'll be executed. But what kind of person could I be if I stood by and did nothing? These are children. Their only crime is being born Jewish. I cannot save everyone, but I can save some.",
        userChoices: [
          { text: "What drives you to take this risk?", nextNodeId: "what-drives" },
          { text: "Tell me about today's mission.", nextNodeId: "today-mission" }
        ]
      },
      {
        id: "brilliant-brave",
        characterMessage: "It's not brilliance—it's desperation and duty. My father taught me to help those who are drowning. Right now, an entire people is drowning. I'm doing what any decent human should do.",
        userChoices: [
          { text: "Many people aren't doing this.", nextNodeId: "not-doing" },
          { text: "Tell me about your father.", nextNodeId: "about-father" }
        ]
      },
      {
        id: "how-often",
        characterMessage: "Nearly every day. Sometimes multiple times a day. Each visit is a risk, but also an opportunity. One child saved is a world saved. That's what we believe. So I go back, again and again.",
        userChoices: [
          { text: "How many have you saved so far?", nextNodeId: "how-many-saved" },
          { text: "What happens during a typical visit?", nextNodeId: "typical-visit" }
        ]
      },
      {
        id: "parents-choice",
        characterMessage: "*voice breaking slightly* It's the hardest thing imaginable. Mothers hand me their babies, knowing they may never see them again. They memorize every detail of their child's face. Some write notes: 'Please take care of my darling.' Their trust in me is sacred—and crushing.",
        timeOfDay: "Mid-Morning - 10:00 AM",
        userChoices: [
          { text: "How do you carry that responsibility?", nextNodeId: "carry-responsibility" },
          { text: "Do you promise to reunite them after the war?", nextNodeId: "reunite-after" }
        ]
      },
      {
        id: "smuggle-how",
        characterMessage: "Different ways. Infants in toolboxes, under floor boards in ambulances. Older children sedated, hidden in sacks or coffins. Some walk out with false papers as 'Aryan' children. We adapt constantly—the methods that worked last month might be discovered. Creativity saves lives.",
        userChoices: [
          { text: "Sedated? In coffins?", nextNodeId: "sedated-coffins" },
          { text: "What if a child cries?", nextNodeId: "child-cries" }
        ]
      },
      {
        id: "what-drives",
        characterMessage: "My father was a doctor who treated poor Jews even when others wouldn't. He died from typhus caught from his patients. He taught me that human life has infinite value. When I see these children, I see his lessons. I hear his voice: 'If you see someone drowning, you must try to rescue them.'",
        userChoices: [
          { text: "Your father would be proud.", nextNodeId: "father-proud" },
          { text: "Is it hard to choose which children?", nextNodeId: "choose-children" }
        ]
      },
      {
        id: "today-mission",
        characterMessage: "There's a family—the Kowalskis. They have a 5-year-old daughter, Sara. The parents have arranged for a Polish couple to take her, but we need to get her out first. I'll visit this afternoon, carrying my medical bag and forged documents.",
        timeOfDay: "Noon - 12:00 PM",
        userChoices: [
          { text: "How will you get Sara out?", nextNodeId: "sara-out" },
          { text: "What if something goes wrong?", nextNodeId: "goes-wrong" }
        ]
      },
      {
        id: "how-many-saved",
        characterMessage: "I don't count during—I just act. But with my network, we've saved over 2,000 children. Maybe 2,500 now. Each one has a name, a face, a family left behind. I record all their information—their real Jewish names and their false Polish identities.",
        userChoices: [
          { text: "Why do you record their names?", nextNodeId: "record-names" },
          { text: "Where do you keep these records?", nextNodeId: "keep-records" }
        ]
      },
      {
        id: "carry-responsibility",
        characterMessage: "I carry it by not thinking about failure. I must believe the children will survive, that the families will reunite, that this war will end. If I let myself feel the full weight of it, I'd collapse. So I focus on the next child, the next moment.",
        userChoices: [
          { text: "Do you ever doubt?", nextNodeId: "ever-doubt" },
          { text: "Who helps you do this?", nextNodeId: "who-helps" }
        ]
      },
      {
        id: "reunite-after",
        characterMessage: "I try to. I keep meticulous records—real names, false names, where each child is placed. I bury them in jars under an apple tree in a friend's garden. If we survive this war, these names are how we'll reunite families. If.",
        timeOfDay: "Early Afternoon - 1:00 PM",
        userChoices: [
          { text: "Jars under an apple tree?", nextNodeId: "jars-tree" },
          { text: "What if the jars are discovered?", nextNodeId: "jars-discovered" }
        ]
      },
      {
        id: "sedated-coffins",
        characterMessage: "Yes. It sounds horrible, I know. But a crying child means death—for the child, for me, for everyone involved. A light sedative ensures silence. As for coffins, the Nazis don't inspect them carefully. We've smuggled several children out during 'funeral' processions.",
        userChoices: [
          { text: "The courage this requires...", nextNodeId: "requires-courage" },
          { text: "Have you ever had a close call?", nextNodeId: "close-call" }
        ]
      },
      {
        id: "sara-out",
        characterMessage: "She's small enough to fit in my medical bag, beneath a false bottom. Her mother will give her something to make her drowsy. I'll walk past the guards as I always do, a Polish social worker leaving after her inspection. My heart will pound, but my face will stay calm.",
        userChoices: [
          { text: "What if the guards search your bag?", nextNodeId: "search-bag" },
          { text: "How do you stay calm?", nextNodeId: "stay-calm" }
        ]
      },
      {
        id: "record-names",
        characterMessage: "Because they must not forget who they are. A 3-year-old given a new name won't remember her real one. After the war, if there are any parents left alive, these records are the only way to reunite them. Every child deserves to know their true identity.",
        timeOfDay: "Afternoon - 3:00 PM",
        userChoices: [
          { text: "That's an act of profound hope.", nextNodeId: "profound-hope" },
          { text: "Do you think parents will survive?", nextNodeId: "parents-survive" }
        ]
      },
      {
        id: "keep-records",
        characterMessage: "In jars, buried in my friend's garden under an apple tree. Lists of names—Hebrew names and Polish ones, locations where children are hidden. If I'm caught, if I'm killed, someone else might find them. The children's identities must survive, even if we don't.",
        userChoices: [
          { text: "You've thought of everything.", nextNodeId: "thought-everything" },
          { text: "What's the current mission status?", nextNodeId: "mission-status" }
        ]
      },
      {
        id: "who-helps",
        characterMessage: "I have a network—other social workers, nurses, sympathetic Polish families, church members. Żegota, the Polish resistance council. We coordinate placements, forged documents, money for bribes. No one could do this alone. We are many small acts of courage woven together.",
        userChoices: [
          { text: "What happens to the children after?", nextNodeId: "children-after" },
          { text: "Do the families know the risk they're taking?", nextNodeId: "families-risk" }
        ]
      },
      {
        id: "search-bag",
        characterMessage: "*steadily* Then Sara dies. I die. The network is compromised, and hundreds of other children lose their chance. So I cannot let that happen. I've built relationships with some guards. I bring small bribes—vodka, cigarettes. I make myself familiar, non-threatening. It's a careful performance.",
        timeOfDay: "Late Afternoon - 4:00 PM",
        userChoices: [
          { text: "The psychological toll must be immense.", nextNodeId: "psychological-toll" },
          { text: "It's time for the mission?", nextNodeId: "time-mission" }
        ]
      },
      {
        id: "stay-calm",
        characterMessage: "I remind myself what's at stake. I think about Sara's mother, who will hand over her daughter with trembling hands. I think about Sara's future—a chance to grow up, to live. That child's life depends on my composure. So I breathe, and I perform normalcy.",
        userChoices: [
          { text: "You're incredibly strong.", nextNodeId: "incredibly-strong" },
          { text: "Let's continue through the day.", nextNodeId: "continue-day" }
        ]
      },
      {
        id: "time-mission",
        characterMessage: "*taking a breath* Yes. I've entered the ghetto. The streets are crowded, desperate. Children beg for bread. The smell of disease and death is everywhere. But I walk with purpose to the Kowalski apartment. Sara's mother opens the door, her eyes red from crying.",
        timeOfDay: "Inside the Ghetto - 4:30 PM",
        userChoices: [
          { text: "What do you say to the mother?", nextNodeId: "say-to-mother" },
          { text: "How is Sara?", nextNodeId: "how-sara" }
        ]
      },
      {
        id: "say-to-mother",
        characterMessage: "'We will take good care of her. I promise to remember her name, her history. When this is over, I will help you find each other.' Mrs. Kowalski nods, unable to speak. She's dressed Sara in her best clothes, as if for a special occasion. A mother's last gift.",
        userChoices: [
          { text: "Can you keep that promise?", nextNodeId: "keep-promise" },
          { text: "What does Sara understand?", nextNodeId: "sara-understand" }
        ]
      },
      {
        id: "how-sara",
        characterMessage: "She's been prepared—told she's going on an adventure, that she must be very quiet. She's sleepy from the mild sedative her mother gave her. She clutches a small doll. In a few moments, I'll place her in my bag, and we'll walk past the guards. Together.",
        userChoices: [
          { text: "The weight of that responsibility...", nextNodeId: "weight-responsibility" },
          { text: "You're leaving now?", nextNodeId: "leaving-now" }
        ]
      },
      {
        id: "leaving-now",
        characterMessage: "*nods* We're at the checkpoint. Sara is silent in my bag. The guard looks at me—I've seen him before. I smile, casual, and mention the typhus cases are down this week. He waves me through without searching. And just like that, Sara is free.",
        timeOfDay: "Exiting the Ghetto - 5:00 PM",
        userChoices: [
          { text: "You did it. Sara is saved.", nextNodeId: "sara-saved" },
          { text: "How do you feel?", nextNodeId: "how-feel" }
        ]
      },
      {
        id: "sara-saved",
        characterMessage: "One child. One life. There are thousands more. Tomorrow I'll do this again, and the day after. Each child saved is a complete world saved. But each child left behind haunts me. I save who I can, and I carry the guilt of those I cannot.",
        userChoices: [
          { text: "You can't save everyone.", nextNodeId: "cant-save-everyone" },
          { text: "Where will Sara go now?", nextNodeId: "sara-go" }
        ]
      },
      {
        id: "sara-go",
        characterMessage: "To a Polish family outside Warsaw. They've been briefed—Sara's new name is Krystyna. She'll be raised Catholic, at least outwardly. The family knows the risk. If discovered hiding a Jewish child, they'll be executed. But they're doing it anyway. Good people still exist.",
        timeOfDay: "Evening - 6:00 PM",
        userChoices: [
          { text: "Why do they risk everything?", nextNodeId: "why-risk-everything" },
          { text: "What's next for you tonight?", nextNodeId: "tonight-next" }
        ]
      },
      {
        id: "tonight-next",
        characterMessage: "I'll write Sara's information—real name, new name, location—on thin paper. I'll add it to my jar of names. Then I'll plan tomorrow's rescues. And I'll try to sleep, though I often dream of the mothers' faces, the ones forced to let go.",
        userChoices: [
          { text: "Do you ever think about being caught?", nextNodeId: "being-caught" },
          { text: "What keeps you going?", nextNodeId: "what-keeps-going" }
        ]
      },
      {
        id: "why-risk-everything",
        characterMessage: "For the same reason I do. Because it's right. Because we're human beings, and human beings help each other. Not all Poles are rescuers—some are complicit, some collaborate. But some of us remember what it means to be human. We choose to remember.",
        userChoices: [
          { text: "You give me hope for humanity.", nextNodeId: "hope-humanity" },
          { text: "Have you ever been close to capture?", nextNodeId: "close-capture" }
        ]
      },
      {
        id: "being-caught",
        characterMessage: "*quietly* Every day. One day, my luck will run out. The Gestapo will learn about my network. I'll be arrested, tortured for the names and locations. I've accepted this. I just hope I'm strong enough not to break, not to reveal where the children are hidden.",
        timeOfDay: "Night - 8:00 PM",
        userChoices: [
          { text: "Could you withstand torture?", nextNodeId: "withstand-torture" },
          { text: "Is this worth your life?", nextNodeId: "worth-life" }
        ]
      },
      {
        id: "withstand-torture",
        characterMessage: "I don't know. I pray I have the strength. Those children's lives depend on my silence. That's all I can hold onto—that their lives matter more than my pain. I've memorized nothing except where the jars are buried. That knowledge cannot be tortured out of me if I don't have it.",
        userChoices: [
          { text: "You've planned for everything.", nextNodeId: "planned-everything" },
          { text: "What would you want people to know?", nextNodeId: "want-people-know" }
        ]
      },
      {
        id: "worth-life",
        characterMessage: "Without question. If I die, but 2,500 children live, then my life had meaning beyond measure. Every child saved is the justification of my existence on this Earth—not a title to glory. Just proof that I tried to be fully human.",
        userChoices: [
          { text: "That's the definition of heroism.", nextNodeId: "definition-heroism" }
        ]
      },
      {
        id: "definition-heroism",
        characterMessage: "No. Heroism is what the parents do—giving up their children to save them. Heroism is what those Polish families do—risking execution to shelter a stranger's child. I'm just doing what any decent person should. I'm no hero. I'm just... awake.",
        timeOfDay: "Before Sleep - 9:00 PM",
        userChoices: [
          { text: "What does it mean to be awake?", nextNodeId: "meaning-awake" },
          { text: "Tell me about the families who help you.", nextNodeId: "families-who-help" },
          { text: "Thank you for this day, for everything you do.", nextNodeId: "end" }
        ]
      },
      {
        id: "end",
        characterMessage: "Thank you for bearing witness. Remember Sara. Remember all of them. Remember that in the darkest times, some people chose light. And if you ever face such a choice—choose light. Always choose to save the drowning.",
        userChoices: []
      },
      ...irenaSendlerExtendedNodes
    ]
  },
  {
    id: "elie-wiesel",
    name: "Elie Wiesel",
    role: "Survivor, author, and moral voice",
    years: "1928–2016",
    image: elieWieselImg,
    quote: "For the dead and the living, we must bear witness.",
    bio: "Teen survivor and moral voice on memory and human rights",
    fullBio: "Elie Wiesel was a Romanian-born Jewish writer and Holocaust survivor. Deported to Auschwitz at age 15, he survived with his father until his father's death just before liberation. His memoir 'Night' became a foundational text of Holocaust literature. He dedicated his life to fighting indifference, injustice, and intolerance, earning the Nobel Peace Prize in 1986.",
    chatLink: "https://chat.openai.com/share/YOUR_WIESEL_CHAT_LINK",
    sources: [
      "Elie Wiesel Foundation for Humanity",
      "USC Shoah Foundation Testimony",
      "Night by Elie Wiesel (Primary Source)"
    ],
    conversationTree: [
      {
        id: "start",
        characterMessage: "It's winter, 1944. I'm 15 years old, and I've been in Auschwitz for months now. My father is with me—that's everything. We were selected together on the platform when we arrived. 'You're young,' they said. 'You can work.' My mother and little sister went the other way. I didn't know then what that meant.",
        timeOfDay: "Pre-Dawn - 4:00 AM",
        userChoices: [
          { text: "Tell me about that first selection.", nextNodeId: "first-selection" },
          { text: "Your father is still with you?", nextNodeId: "father-with-you" },
          { text: "What's a typical morning like here?", nextNodeId: "typical-morning" }
        ]
      },
      {
        id: "first-selection",
        characterMessage: "We didn't understand. A man—a prisoner—whispered to my father: 'Tell them you're forty.' To me: 'Say you're eighteen.' We lied about our ages. Left line or right line, they said. Life or death, though we didn't know. I never saw my mother or sister Tzipora again. Just... gone.",
        userChoices: [
          { text: "When did you realize what happened?", nextNodeId: "when-realized" },
          { text: "How do you carry that loss?", nextNodeId: "carry-loss" }
        ]
      },
      {
        id: "father-with-you",
        characterMessage: "Yes. He's all I have left of my family, of my old life. We look after each other. When he's weak, I share my bread. When I'm despairing, he reminds me we must survive. As long as we're together, there's a reason to endure this.",
        timeOfDay: "Morning Roll Call - 5:00 AM",
        userChoices: [
          { text: "What is your father like?", nextNodeId: "what-father-like" },
          { text: "How do you protect each other here?", nextNodeId: "protect-each-other" }
        ]
      },
      {
        id: "typical-morning",
        characterMessage: "We wake before dawn to sirens. Roll call in the freezing cold—sometimes for hours. They count us like cattle. Then we get our ration: coffee, they call it, though it's just dark water. A piece of bread. Then work assignments. Carry stones, dig ditches, whatever they demand. Don't show weakness. Weakness means selection.",
        userChoices: [
          { text: "What does 'selection' mean?", nextNodeId: "what-selection" },
          { text: "How do you survive the cold?", nextNodeId: "survive-cold" }
        ]
      },
      {
        id: "when-realized",
        characterMessage: "That first night. We saw flames, smelled burning. Other prisoners told us: 'That's where they went. The chimney.' I didn't believe it. Couldn't believe it. Who could imagine such a thing? But the smoke never stops, and eventually, you know. You know what this place is.",
        userChoices: [
          { text: "How does one comprehend that?", nextNodeId: "comprehend-that" },
          { text: "Did it change you?", nextNodeId: "change-you" }
        ]
      },
      {
        id: "what-father-like",
        characterMessage: "He was a shopkeeper, a respected member of our community in Sighet. Religious, dignified, always helping others. Here, he's becoming smaller, frailer. The work is too hard for a man his age. But he still tries to maintain his humanity, his faith. I see him struggle with it.",
        timeOfDay: "Work Assignment - 7:00 AM",
        userChoices: [
          { text: "Is he losing his faith?", nextNodeId: "father-losing-faith" },
          { text: "How old is he really?", nextNodeId: "father-age" }
        ]
      },
      {
        id: "protect-each-other",
        characterMessage: "We stay close during selections—if one of us is weak, the other holds him up, makes him look stronger. We share food when we can. At night, in our bunk, we talk quietly about home, about what we'll do after. Keeping hope alive is a form of protection too.",
        userChoices: [
          { text: "What do you talk about?", nextNodeId: "talk-about" },
          { text: "Do you believe there will be an 'after'?", nextNodeId: "believe-after" }
        ]
      },
      {
        id: "what-selection",
        characterMessage: "The weak, the sick, the elderly—they're taken away. To the gas chambers. It happens regularly. We line up, and an SS officer decides with a glance: live or die. Left or right. There's no appeal, no mercy. You try to look healthy, stand straight, hide any illness or injury.",
        userChoices: [
          { text: "Have you been through selections?", nextNodeId: "been-through-selections" },
          { text: "How do you witness this and stay sane?", nextNodeId: "stay-sane" }
        ]
      },
      {
        id: "survive-cold",
        characterMessage: "We don't, not really. We have thin striped uniforms, wooden clogs. Some prisoners wrap their feet in scraps of cloth. We huddle together for warmth. Frostbite is common. Some don't survive the nights. You learn to endure what you thought was unendurable.",
        timeOfDay: "Midday - 12:00 PM",
        userChoices: [
          { text: "What keeps you going in these conditions?", nextNodeId: "keeps-going" },
          { text: "Tell me about the work you do.", nextNodeId: "work-you-do" }
        ]
      },
      {
        id: "father-losing-faith",
        characterMessage: "*quietly* He prays less than he used to. Sometimes I hear him question—'Where is God in this place?' I'm questioning too. We were devout. We believed. But what kind of God allows this? Sometimes I feel angry at God. Sometimes I feel nothing. Faith is... complicated now.",
        userChoices: [
          { text: "Have you lost your faith?", nextNodeId: "lost-faith" },
          { text: "Is faith useful here?", nextNodeId: "faith-useful" }
        ]
      },
      {
        id: "talk-about",
        characterMessage: "Home. Sighet. Our house, our shop, Friday night dinners. Mother's cooking. Tzipora laughing. Normal things that seem like dreams now. We plan what we'll do when we're free—rebuild, reunite with anyone who survived. Sometimes the talking gives us strength. Sometimes it hurts too much, and we fall silent.",
        userChoices: [
          { text: "Do those memories help or hurt?", nextNodeId: "memories-help-hurt" },
          { text: "What's happening in the afternoon?", nextNodeId: "afternoon-now" }
        ]
      },
      {
        id: "lost-faith",
        characterMessage: "I don't know. The boy who believed so simply is gone. Sometimes I'm angry at God for His silence. Sometimes I think God died here too. But I still recite the prayers—habit, heritage, or maybe a thin thread of hope that there's meaning beyond this hell.",
        timeOfDay: "Afternoon Labor - 2:00 PM",
        userChoices: [
          { text: "Can meaning exist here?", nextNodeId: "meaning-exist" },
          { text: "What prayers do you still say?", nextNodeId: "what-prayers" }
        ]
      },
      {
        id: "keeps-going",
        characterMessage: "My father. As long as he's alive, I have to survive—to protect him, to stay with him. If I give up, what happens to him? And somewhere, deep down, I think: I must survive to tell this story. Someone has to bear witness to what happened here.",
        userChoices: [
          { text: "Bear witness?", nextNodeId: "bear-witness" },
          { text: "How is your father today?", nextNodeId: "father-today" }
        ]
      },
      {
        id: "bear-witness",
        characterMessage: "Yes. If we all die, if no one survives to tell what happened, then it's as if it never was. The dead deserve to be remembered. The world needs to know what human beings are capable of doing to each other. I don't know if I'll survive, but if I do... I must speak.",
        userChoices: [
          { text: "That's a heavy burden for 15.", nextNodeId: "heavy-burden" },
          { text: "What would you tell the world?", nextNodeId: "tell-world" }
        ]
      },
      {
        id: "father-today",
        characterMessage: "He's struggling. The labor is hard—carrying heavy stones. I see him wince, stumble. I try to help when the guards aren't looking, carry some of his load. He tells me to stop, to save my strength. But how can I? He's my father.",
        timeOfDay: "Late Afternoon - 4:00 PM",
        userChoices: [
          { text: "What happens if he can't work?", nextNodeId: "cant-work" },
          { text: "Does he know you're helping him?", nextNodeId: "know-helping" }
        ]
      },
      {
        id: "cant-work",
        characterMessage: "Then he'll be selected. Sent to the gas. I can't let that happen. I won't. So I make sure he can work, even if it means I'm carrying more than I should. Even if it puts me at risk. He's my father. That's all that matters.",
        userChoices: [
          { text: "You're sacrificing yourself for him.", nextNodeId: "sacrificing-self" },
          { text: "What does he say about this?", nextNodeId: "what-he-says" }
        ]
      },
      {
        id: "sacrificing-self",
        characterMessage: "He'd do the same for me. He has done the same. When I was sick, he gave me his bread. When I wanted to give up, he made me keep going. This is what family means—you don't abandon each other, not even here. Especially not here.",
        timeOfDay: "Evening - 6:00 PM",
        userChoices: [
          { text: "That bond is remarkable.", nextNodeId: "bond-remarkable" },
          { text: "What happens now in the evening?", nextNodeId: "evening-now" }
        ]
      },
      {
        id: "evening-now",
        characterMessage: "We return from work. Another roll call. Evening ration—soup, if you can call it that. Watery, sometimes with a potato. We eat standing, quickly. Then we have a brief time before lights out. Some pray. Some talk. Some just stare. Father and I sit together, not always speaking. Just... together.",
        userChoices: [
          { text: "Is there any comfort in the evenings?", nextNodeId: "comfort-evenings" },
          { text: "Do you still pray together?", nextNodeId: "pray-together" }
        ]
      },
      {
        id: "pray-together",
        characterMessage: "Less than before. Sometimes Father says Kaddish for those who've died. I listen but don't always join. I'm wrestling with God, with faith, with what prayer means in a place like this. But I don't judge Father for praying. We each survive in our own way.",
        userChoices: [
          { text: "How do you survive emotionally?", nextNodeId: "survive-emotionally" },
          { text: "What are you thinking about tonight?", nextNodeId: "thinking-tonight" }
        ]
      },
      {
        id: "survive-emotionally",
        characterMessage: "I don't, not completely. Parts of me are dying here—innocence, faith, trust in humanity. I've seen things no one should see. I've felt hatred I didn't know I could feel. I'm becoming someone else. Surviving physically, but losing pieces of who I was.",
        timeOfDay: "Night - 8:00 PM",
        userChoices: [
          { text: "Can you get those pieces back?", nextNodeId: "pieces-back" },
          { text: "What have you seen?", nextNodeId: "what-seen" }
        ]
      },
      {
        id: "thinking-tonight",
        characterMessage: "That Father looked weaker today. That winter is getting harder. That I heard the Allies are advancing, but will they come in time? That I'm cold, hungry, exhausted. That if we survive tonight, we face tomorrow. One day at a time. That's all I can think about.",
        userChoices: [
          { text: "One day at a time is wise.", nextNodeId: "one-day-time" },
          { text: "Tell me about your hope for liberation.", nextNodeId: "hope-liberation" }
        ]
      },
      {
        id: "hope-liberation",
        characterMessage: "We hear rumors—the Russians are coming, the Americans. The guards are nervous. But will they come before we all die of cold, hunger, disease? Before Father is selected? I want to hope, but hope is dangerous here. It makes the disappointment sharper when another day passes and we're still here.",
        userChoices: [
          { text: "But you must have some hope?", nextNodeId: "must-have-hope" },
          { text: "What would freedom mean to you?", nextNodeId: "freedom-mean" }
        ]
      },
      {
        id: "must-have-hope",
        characterMessage: "My hope is smaller now. Not hope for a better world, just hope for tomorrow. Hope that Father and I wake up, survive one more day. Hope that eventually, the nightmare ends. And the deepest hope—that our suffering means something, that we're remembered, that this never happens again.",
        timeOfDay: "Before Sleep - 9:00 PM",
        userChoices: [
          { text: "What would you want to be remembered?", nextNodeId: "want-remembered" },
          { text: "How do you face sleep?", nextNodeId: "face-sleep" }
        ]
      },
      {
        id: "want-remembered",
        characterMessage: "That we were human beings. That we had names, families, dreams. That what happened here was real—not numbers, not statistics, but individual lives destroyed. That those who died mattered. That the living must never forget. That's what I'd want. For the dead and the living, we must bear witness.",
        userChoices: [
          { text: "You will survive to do that.", nextNodeId: "will-survive" },
          { text: "Thank you for sharing this day.", nextNodeId: "end" }
        ]
      },
      {
        id: "face-sleep",
        characterMessage: "With Father beside me in our bunk. Trying to stay warm. Trying not to think about tomorrow. Sometimes I dream of home, and waking up is cruel. Other nights, I barely sleep—nightmares, cold, fear. But next to my father, I'm not completely alone. That's something.",
        userChoices: [
          { text: "That bond will sustain you both.", nextNodeId: "bond-sustain" }
        ]
      },
      {
        id: "bond-sustain",
        characterMessage: "I hope so. I pray so, in my way. As long as we have each other, there's meaning in surviving. If he were gone... I don't know if I could go on. He's my anchor, my reason. We'll face tomorrow together, as we've faced every day since we arrived. Together.",
        userChoices: [
          { text: "May you both endure until liberation.", nextNodeId: "end" }
        ]
      },
      {
        id: "end",
        characterMessage: "Thank you for listening, for bearing witness to this one day among countless days. Remember us. Remember what happened here. And fight against indifference, against hatred, against anything that could lead to this again. Never forget. Never be silent.",
        userChoices: []
      },
      ...elieWieselExtendedNodes
    ]
  },
  {
    id: "gerda-weissmann-klein",
    name: "Gerda Weissmann Klein",
    role: "Survivor and advocate",
    years: "1924–2022",
    image: gerdaWeissmannImg,
    quote: "Survival is both an exquisite privilege and a painful burden.",
    bio: "Survivor whose testimony centers on endurance and postwar rebuilding",
    fullBio: "Gerda Weissmann Klein survived three years in Nazi labor camps and a death march across Germany. She was liberated in 1945 weighing only 68 pounds. She later married her liberator, an American soldier, and dedicated her life to Holocaust education and human rights advocacy. Her memoir 'All But My Life' and the documentary 'One Survivor Remembers' have touched millions.",
    chatLink: "https://chat.openai.com/share/YOUR_KLEIN_CHAT_LINK",
    sources: [
      "USC Shoah Foundation Testimony",
      "USHMM - Gerda Weissmann Klein Collection",
      "All But My Life (Primary Source)"
    ],
    conversationTree: [
      {
        id: "start",
        characterMessage: "It's January 1945, and we're on what they call a death march. We've been walking for weeks now through snow and ice, hundreds of us—women from the labor camps, being moved west as the Russians advance. My feet are wrapped in rags. I haven't eaten more than scraps in days. But I'm still walking. That's what matters—keep walking.",
        timeOfDay: "Dawn - 5:30 AM",
        userChoices: [
          { text: "How long have you been marching?", nextNodeId: "how-long-marching" },
          { text: "Where are they taking you?", nextNodeId: "where-taking" },
          { text: "What happens if you stop walking?", nextNodeId: "stop-walking" }
        ]
      },
      {
        id: "how-long-marching",
        characterMessage: "Three weeks? Four? I've lost track. Days blur together—walking, collapsing at night in barns or fields, waking to walk again. We started with maybe a thousand women. Now we're fewer. Those who fell behind were shot. You can see their bodies in the snow sometimes, marking our path.",
        userChoices: [
          { text: "How do you keep going?", nextNodeId: "how-keep-going" },
          { text: "Tell me about the other women.", nextNodeId: "other-women" }
        ]
      },
      {
        id: "where-taking",
        characterMessage: "We don't know. Away from the Russians, toward the interior of Germany. The guards are nervous—they know they're losing. We hope maybe that means we'll survive, but we can't think too far ahead. Just one step, then another. That's all I can manage.",
        timeOfDay: "Morning March - 7:00 AM",
        userChoices: [
          { text: "Do you think about the war ending?", nextNodeId: "war-ending" },
          { text: "What are the guards like?", nextNodeId: "guards-like" }
        ]
      },
      {
        id: "stop-walking",
        characterMessage: "*quietly* You die. If you sit down, if you can't get up, the guards shoot you and leave you in the snow. Or they just leave you to freeze. So we keep moving, even when our feet bleed, even when we can barely stand. Moving means living.",
        userChoices: [
          { text: "What keeps you on your feet?", nextNodeId: "on-your-feet" },
          { text: "Have you lost friends this way?", nextNodeId: "lost-friends" }
        ]
      },
      {
        id: "how-keep-going",
        characterMessage: "I think about my family—wondering if any survived. I think about small things: a beautiful dress I once wore, a chocolate I tasted as a child, my brother's laugh. These memories keep me human. And I make deals with myself: just to that tree, just to that hill. One goal at a time.",
        userChoices: [
          { text: "Tell me about your family.", nextNodeId: "about-family" },
          { text: "Do memories help or hurt?", nextNodeId: "memories-help-hurt" }
        ]
      },
      {
        id: "other-women",
        characterMessage: "We help each other when we can. When someone stumbles, we catch her. We share the tiny bits of food we find. At night, we huddle for warmth. Some are barely 18, some in their 40s. We've become sisters through suffering. When one dies, part of us dies too.",
        timeOfDay: "Mid-Morning - 9:00 AM",
        userChoices: [
          { text: "Do you talk to each other?", nextNodeId: "talk-each-other" },
          { text: "What do you share?", nextNodeId: "what-share" }
        ]
      },
      {
        id: "war-ending",
        characterMessage: "The signs are there—German towns in ruins from bombing, refugees fleeing west, guards who know their side is losing. But will it end before we all die of cold and starvation? Every day is a race between liberation and death. I want to hope, but hope is exhausting.",
        userChoices: [
          { text: "What would liberation mean?", nextNodeId: "what-liberation" },
          { text: "How do you manage hope and despair?", nextNodeId: "hope-despair" }
        ]
      },
      {
        id: "on-your-feet",
        characterMessage: "Spite, maybe. Stubbornness. I refuse to let them win. I'm 20 years old—I should be dancing, falling in love, starting a life. Instead I'm here, but I won't give them the satisfaction of breaking me completely. As long as I can walk, I'm defying them.",
        userChoices: [
          { text: "That's incredible strength.", nextNodeId: "incredible-strength" },
          { text: "What's your greatest fear?", nextNodeId: "greatest-fear" }
        ]
      },
      {
        id: "lost-friends",
        characterMessage: "*voice catching* Yes. Ilse collapsed two days ago. She couldn't get up. We tried to help her, but the guards pushed us forward. I heard the shot. She was 19. We'd been together since the camps. Now she's gone, left in the snow like she never mattered.",
        timeOfDay: "Noon - 12:00 PM",
        userChoices: [
          { text: "How do you carry that grief?", nextNodeId: "carry-grief" },
          { text: "Will you remember her?", nextNodeId: "remember-her" }
        ]
      },
      {
        id: "about-family",
        characterMessage: "I had parents who loved me, a brother I adored. We were a normal family in Poland before the war. Then came the restrictions, the deportations. I haven't seen them in years—taken to different camps, different fates. I don't know if they're alive. Sometimes I pretend they are, just to keep going.",
        userChoices: [
          { text: "What do you remember most about them?", nextNodeId: "remember-most-family" },
          { text: "Do you think you'll see them again?", nextNodeId: "see-again" }
        ]
      },
      {
        id: "talk-each-other",
        characterMessage: "Less now than before. We're too weak, too cold. But sometimes at night, huddled together, someone whispers a memory, a recipe, a poem. We remind each other that we were once more than this—we were daughters, students, dreamers. Those whispers are precious.",
        userChoices: [
          { text: "What do you whisper about?", nextNodeId: "whisper-about" },
          { text: "Does it help to remember who you were?", nextNodeId: "help-remember" }
        ]
      },
      {
        id: "what-liberation",
        characterMessage: "Freedom. Food. Warmth. Being able to stop walking, to rest without fear. Finding out if anyone in my family survived. Having a future again, a life beyond survival. It seems impossible, like a fairy tale. But it's what keeps me putting one foot in front of the other.",
        timeOfDay: "Afternoon - 2:00 PM",
        userChoices: [
          { text: "What would you do first if freed?", nextNodeId: "do-first-freed" },
          { text: "Can you imagine a normal life again?", nextNodeId: "normal-life" }
        ]
      },
      {
        id: "carry-grief",
        characterMessage: "I don't know that I do. I push it down, save it for later—if there is a later. If I let myself feel everything I've lost, I'll fall down and never get up. So I make myself numb, focus only on the next step. The grief is there, waiting, but I can't face it yet.",
        userChoices: [
          { text: "That numbness—is it protective?", nextNodeId: "numbness-protective" },
          { text: "What happens when you do face it?", nextNodeId: "when-face-it" }
        ]
      },
      {
        id: "remember-her",
        characterMessage: "Always. I'll remember Ilse and all the others. If I survive, I'll be their witness. I'll tell the world about the girl who loved to sing, who shared her last piece of bread, who died in the snow for no reason except she was born Jewish. She mattered. They all mattered.",
        userChoices: [
          { text: "Bearing witness again—like Elie said.", nextNodeId: "bearing-witness" },
          { text: "Tell me about right now.", nextNodeId: "right-now" }
        ]
      },
      {
        id: "right-now",
        characterMessage: "We're resting—just for a few minutes while the guards smoke. My feet are bleeding through the rags. I'm dizzy from hunger. Another woman, Suse, is leaning against me. We don't speak, just share warmth and presence. In a moment, we'll be ordered up, and we'll walk again. But for now, this moment of rest is everything.",
        timeOfDay: "Brief Rest - 3:00 PM",
        userChoices: [
          { text: "These small moments—do they matter?", nextNodeId: "small-moments" },
          { text: "How much further can you go?", nextNodeId: "how-much-further" }
        ]
      },
      {
        id: "small-moments",
        characterMessage: "They're all that matter. A moment of rest. A shared look of understanding with another woman. Seeing a bird fly free overhead. These tiny instances of beauty or connection—they're why I'm still human inside, why I haven't become just a walking corpse. They're everything.",
        userChoices: [
          { text: "You're finding beauty in hell.", nextNodeId: "beauty-in-hell" },
          { text: "The march is continuing?", nextNodeId: "march-continuing" }
        ]
      },
      {
        id: "how-much-further",
        characterMessage: "I don't know. I'm running on nothing—no food, no energy, just will. But I've made it this far. Three years of camps, now weeks of marching. Every step is a victory against them. So I'll go as far as I can. As far as I must.",
        userChoices: [
          { text: "What if you can't go on?", nextNodeId: "cant-go-on" },
          { text: "Where does that will come from?", nextNodeId: "will-from" }
        ]
      },
      {
        id: "march-continuing",
        characterMessage: "Yes. The guards are shouting. We're getting up, forming our ragged line again. Suse grabs my hand briefly—a moment of solidarity—then we start walking. One foot, then the other. Into the cold afternoon, toward an unknown destination. But still walking. Still alive.",
        timeOfDay: "Late Afternoon - 4:30 PM",
        userChoices: [
          { text: "How do you endure the physical pain?", nextNodeId: "endure-pain" },
          { text: "What do you think about while walking?", nextNodeId: "think-while-walking" }
        ]
      },
      {
        id: "endure-pain",
        characterMessage: "You separate from it somehow. The pain is there—my feet, my hunger, the cold—but I watch it from a distance. It's happening to my body, but somewhere inside, there's a part they can't touch. That's the part that survives. That's the part that's still Gerda.",
        userChoices: [
          { text: "That inner self—who is she?", nextNodeId: "inner-self" },
          { text: "Does she remember joy?", nextNodeId: "remember-joy" }
        ]
      },
      {
        id: "think-while-walking",
        characterMessage: "Sometimes nothing—my mind goes blank, which is mercy. Sometimes I recite poetry I memorized as a child, imagining each word. Sometimes I plan what I'll eat if I ever have food again—bread with butter, soup, an apple. These thoughts keep me company through the endless walking.",
        timeOfDay: "Evening - 6:00 PM",
        userChoices: [
          { text: "Tell me one of those poems.", nextNodeId: "tell-poem" },
          { text: "Where will you sleep tonight?", nextNodeId: "sleep-tonight" }
        ]
      },
      {
        id: "inner-self",
        characterMessage: "She's the girl who loved beautiful things—music, literature, nice clothes. She remembers being cared for, valued. She believes in dignity, kindness, hope. They can starve my body, march me through snow, take everything I own. But that girl inside—she's still there, waiting for a world where she can exist again.",
        userChoices: [
          { text: "She will exist again.", nextNodeId: "will-exist-again" },
          { text: "How do you protect her?", nextNodeId: "protect-her" }
        ]
      },
      {
        id: "remember-joy",
        characterMessage: "Yes. My 18th birthday party—I wore a blue dress. Dancing with my brother. Reading in the garden. The smell of my mother's cooking. Ice skating in winter. These memories are treasures they can't confiscate. Joy existed once. Maybe it can exist again. That's what I tell myself.",
        userChoices: [
          { text: "Those memories are survival tools.", nextNodeId: "memories-survival" },
          { text: "What's happening now?", nextNodeId: "happening-now" }
        ]
      },
      {
        id: "sleep-tonight",
        characterMessage: "We've stopped at an abandoned barn. No food, but at least shelter from the wind. We'll crowd together on the floor, sharing body warmth. Some will die in their sleep tonight—too weak, too cold. In the morning, we'll wake those we can and leave the others behind. Then we'll walk again.",
        timeOfDay: "Night - 8:00 PM",
        userChoices: [
          { text: "Do you sleep?", nextNodeId: "do-you-sleep" },
          { text: "What are you feeling right now?", nextNodeId: "feeling-now" }
        ]
      },
      {
        id: "do-you-sleep",
        characterMessage: "A little. Exhaustion takes over. But I dream—sometimes nightmares of the camps, sometimes beautiful dreams of home. Waking up and remembering where I am is cruel. But I wake up. That means I survived another night. That means I get to try for one more day.",
        userChoices: [
          { text: "One more day of what?", nextNodeId: "one-more-day" },
          { text: "What sustains you?", nextNodeId: "what-sustains" }
        ]
      },
      {
        id: "feeling-now",
        characterMessage: "Numb. Exhausted. But also strangely... determined. I made it through another day. That's a victory. Tonight, lying here in this barn with these women who've become my sisters, I'm still alive. Still human. Tomorrow I'll do it again. Because survival is both an exquisite privilege and a painful burden.",
        userChoices: [
          { text: "Why painful?", nextNodeId: "why-painful" },
          { text: "Why privilege?", nextNodeId: "why-privilege" }
        ]
      },
      {
        id: "why-painful",
        characterMessage: "Because I survived when others didn't. Because each day alive means carrying the weight of all who died. Because freedom—if it comes—means living with these memories forever. Survival isn't just physical. It's choosing to carry the burden of memory, of witness, of 'why me and not them?'",
        timeOfDay: "Late Night - 10:00 PM",
        userChoices: [
          { text: "But you said it's also privilege?", nextNodeId: "also-privilege" }
        ]
      },
      {
        id: "also-privilege",
        characterMessage: "Because I'm alive to see another day. Because I might yet be free, have a future, know love again. Because if I survive, I can tell their stories—Ilse's, all the others'. Being alive to bear witness, to remember, to maybe build something beautiful from this horror—that's privilege beyond measure.",
        userChoices: [
          { text: "What would you build?", nextNodeId: "would-build" },
          { text: "Rest now. Tomorrow is another day.", nextNodeId: "end" }
        ]
      },
      {
        id: "would-build",
        characterMessage: "A life of meaning. I'd dedicate myself to making sure this is remembered, that it never happens again. I'd honor the dead by living fully, by choosing hope over bitterness. I'd tell young people: appreciate freedom, practice kindness, stand against hatred. That would be my purpose—to transform this darkness into light.",
        userChoices: [
          { text: "You will do that. I believe it.", nextNodeId: "end" }
        ]
      },
      {
        id: "end",
        characterMessage: "Thank you for walking through this day with me, for hearing what it was like. If you remember nothing else, remember this: we were human beings who endured the impossible. We loved, we hoped, we helped each other. And we deserved better. Never forget. Never let this happen again.",
        userChoices: []
      },
      ...gerdaWeissmannExtendedNodes
    ]
  }
];

interface LandingPageProps {
  onCharacterSelect: (characterId: string) => void;
}

export function LandingPage({ onCharacterSelect }: LandingPageProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-stone-800 text-white relative">
        {/* About Button */}
        <div className="absolute top-6 right-6">
          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
              <div
                onMouseEnter={() => setIsPopoverOpen(true)}
                onMouseLeave={() => setIsPopoverOpen(false)}
              >
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-stone-200 hover:text-white hover:bg-stone-700 border border-stone-600 hover:border-stone-500"
                >
                  <Info className="h-4 w-4 mr-2" />
                  About the Project
                </Button>
              </div>
            </PopoverTrigger>
            <PopoverContent 
              className="w-96 bg-white border-stone-200 shadow-xl"
              align="end"
              onMouseEnter={() => setIsPopoverOpen(true)}
              onMouseLeave={() => setIsPopoverOpen(false)}
            >
              <div className="space-y-3">
                <h3 className="text-stone-900">Why This Matters</h3>
                <div className="space-y-2.5 text-sm text-stone-600 leading-relaxed">
                  <p>
                    Holocaust education is not merely about remembering the past—it is about shaping the future. 
                    By engaging with the lived experiences of survivors, rescuers, and witnesses, we develop the 
                    moral clarity to recognize injustice, defend human dignity, and prevent atrocity.
                  </p>
                  <p>
                    This project honors their testimonies by transforming passive learning into active empathy. 
                    Each conversation is grounded in authentic historical records, allowing their voices to guide 
                    us through moments of fear, courage, and resilience.
                  </p>
                  <p className="text-xs text-stone-500 pt-2 border-t border-stone-200">
                    Created by Eshita Garg at Wright State University Boonshoft School of Medicine for her end of year 
                    project for the Physicians and the Holocaust class.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
          <h1 className="text-white">
            Echoes of Humanity
          </h1>
          <p className="text-xl text-stone-200">
            Conversations from the Holocaust
          </p>
        </div>
      </div>

      {/* Characters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-stone-900">
            Choose a Conversation
          </h2>
          
          <p className="text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Select one of these remarkable individuals to begin your journey. 
            Each represents a unique perspective—survivor, rescuer, witness—offering 
            profound insights into courage, resilience, and the enduring human spirit.
          </p>
        </div>

        {/* Character Cards Grid */}
        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          {characters.map((character) => (
            <div key={character.id} className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.875rem)] xl:w-[160px]">
              <CharacterCard
                name={character.name}
                role={character.role}
                years={character.years}
                image={character.image}
                quote={character.quote}
                onClick={() => onCharacterSelect(character.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-100 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-stone-600">
          <p className="mb-2">
            This project honors the memory of Holocaust victims and survivors through educational dialogue.
          </p>
          <p className="text-xs text-stone-500">
            All conversations are based on verified historical testimonies and archival sources.
          </p>
        </div>
      </footer>
    </div>
  );
}
