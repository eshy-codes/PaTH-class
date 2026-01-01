import { useState } from "react";
import { MessageCircle, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

interface ConversationNode {
  id: string;
  characterMessage: string;
  timeOfDay?: string;
  userChoices: {
    text: string;
    nextNodeId: string;
  }[];
}

interface Message {
  id: string;
  role: "user" | "character";
  content: string;
  timeOfDay?: string;
}

interface ConversationInterfaceProps {
  characterName: string;
  characterImage: string;
  conversationTree: ConversationNode[];
  onReflect: () => void;
}

export function ConversationInterface({ 
  characterName, 
  characterImage, 
  conversationTree,
  onReflect 
}: ConversationInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentNodeId, setCurrentNodeId] = useState<string>("start");
  const [conversationStarted, setConversationStarted] = useState(false);

  const currentNode = conversationTree.find(node => node.id === currentNodeId);
  const isConversationComplete = currentNode?.userChoices.length === 0;

  const handleStart = () => {
    setConversationStarted(true);
    if (currentNode) {
      const characterMessage: Message = {
        id: Date.now().toString(),
        role: "character",
        content: currentNode.characterMessage,
        timeOfDay: currentNode.timeOfDay,
      };
      setMessages([characterMessage]);
    }
  };

  const handleChoiceClick = (choice: { text: string; nextNodeId: string }) => {
    // Add user's choice to messages
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: choice.text,
    };
    setMessages(prev => [...prev, userMessage]);

    // Find next node and add character's response
    const nextNode = conversationTree.find(node => node.id === choice.nextNodeId);
    if (nextNode) {
      setTimeout(() => {
        const characterMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "character",
          content: nextNode.characterMessage,
          timeOfDay: nextNode.timeOfDay,
        };
        setMessages(prev => [...prev, characterMessage]);
        setCurrentNodeId(choice.nextNodeId);
      }, 600);
    } else {
      // Fallback if node doesn't exist - end conversation gracefully
      setTimeout(() => {
        const characterMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "character",
          content: "Thank you for this conversation. Your questions have helped me reflect on this day in my life. These memories and experiences are important to share, and I'm grateful you took the time to listen and understand.",
        };
        setMessages(prev => [...prev, characterMessage]);
        setCurrentNodeId("end");
      }, 600);
    }
  };

  const handleRestart = () => {
    setMessages([]);
    setCurrentNodeId("start");
    setConversationStarted(false);
  };

  const firstName = characterName.split(' ')[0];

  if (!conversationStarted) {
    return (
      <Card className="border-stone-300 bg-white p-12 text-center">
        <div className="max-w-lg mx-auto space-y-6">
          <div className="w-20 h-20 bg-stone-100 rounded-full mx-auto flex items-center justify-center">
            <MessageCircle className="h-10 w-10 text-stone-600" />
          </div>
          
          <div>
            <h3 className="text-stone-900 mb-3">A Day in {firstName}'s Life</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Experience a day through {firstName}'s eyes during the Holocaust. 
              You'll guide the conversation by choosing questions that reveal their 
              experiences, thoughts, and the reality of their daily life.
            </p>
          </div>

          <Button 
            onClick={handleStart}
            size="lg"
            className="bg-stone-700 hover:bg-stone-800 text-white"
          >
            Begin Conversation
          </Button>

          <p className="text-xs text-stone-500">
            This is a guided conversation based on historical testimony
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Chat Messages */}
      <Card className="border-stone-300 bg-white">
        <ScrollArea className="h-[500px] p-6">
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div key={message.id}>
                {/* Time of Day Label */}
                {message.timeOfDay && (
                  <div className="flex items-center gap-3 mb-4">
                    <Separator className="flex-1" />
                    <span className="text-xs text-stone-500 uppercase tracking-wider">
                      {message.timeOfDay}
                    </span>
                    <Separator className="flex-1" />
                  </div>
                )}

                <div
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "character" && (
                    <Avatar className="h-10 w-10 border-2 border-stone-200 flex-shrink-0">
                      <AvatarImage src={characterImage} className="grayscale" />
                      <AvatarFallback className="bg-stone-200 text-stone-600">
                        {characterName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div
                    className={`max-w-[85%] rounded-lg p-4 ${
                      message.role === "user"
                        ? "bg-stone-700 text-white"
                        : "bg-stone-50 text-stone-800 border border-stone-200"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>

                  {message.role === "user" && (
                    <Avatar className="h-10 w-10 bg-stone-700 border-2 border-stone-300 flex-shrink-0">
                      <AvatarFallback className="bg-stone-700 text-white text-xs">
                        You
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>

      {/* User Choices or Completion */}
      {!isConversationComplete ? (
        <Card className="border-stone-300 bg-stone-50 p-6">
          <p className="text-xs text-stone-600 mb-3 uppercase tracking-wider">
            Choose your next question:
          </p>
          <div className="space-y-2">
            {currentNode?.userChoices.map((choice, index) => (
              <Button
                key={index}
                onClick={() => handleChoiceClick(choice)}
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 px-4 border-stone-300 hover:bg-white hover:border-stone-400 text-stone-700"
              >
                <span className="text-sm">{choice.text}</span>
              </Button>
            ))}
          </div>
        </Card>
      ) : (
        <Card className="border-stone-300 bg-stone-50 p-6 text-center space-y-4">
          <div>
            <h4 className="text-stone-900 mb-2">End of Day</h4>
            <p className="text-sm text-stone-600">
              You've experienced a day through {firstName}'s eyes. Take a moment to reflect on what you've learned.
            </p>
          </div>
          
          <div className="flex gap-3 justify-center flex-wrap">
            <Button
              onClick={onReflect}
              className="bg-stone-700 hover:bg-stone-800 text-white"
            >
              Share Your Reflection
            </Button>
            <Button
              onClick={handleRestart}
              variant="outline"
              className="border-stone-400 text-stone-700"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Experience Again
            </Button>
          </div>
        </Card>
      )}

      {/* Progress Indicator */}
      <div className="text-center">
        <p className="text-xs text-stone-500">
          {messages.filter(m => m.role === "user").length} questions asked
        </p>
      </div>
    </div>
  );
}
