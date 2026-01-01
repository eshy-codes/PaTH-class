import { ArrowLeft, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Card } from "./ui/card";
import { characters } from "./LandingPage";
import { ConversationInterface } from "./ConversationInterface";

interface CharacterPageProps {
  characterId: string;
  onBack: () => void;
  onReflect: () => void;
}

export function CharacterPage({ characterId, onBack, onReflect }: CharacterPageProps) {
  const character = characters.find(c => c.id === characterId);

  if (!character) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-stone-600">Character not found</p>
          <Button onClick={onBack} className="mt-4">Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-stone-100 border-b border-stone-200 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-stone-600 hover:text-stone-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Voices
          </Button>
          <Button 
            variant="outline" 
            onClick={onReflect}
            className="border-stone-300 text-stone-700 hover:bg-stone-200"
          >
            Share Your Reflection
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Portrait & Bio */}
          <div className="lg:col-span-2 space-y-6">
            {/* Portrait */}
            <Card className="overflow-hidden border-stone-200 bg-white">
              <div className="aspect-[3/4] bg-stone-200">
                <ImageWithFallback
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </Card>

            {/* Name & Years */}
            <div className="text-center space-y-2">
              <h1 className="text-stone-900">{character.name}</h1>
              <p className="text-stone-600">{character.role}</p>
              <p className="text-stone-500 text-sm">{character.years}</p>
            </div>

            {/* Quote */}
            <Card className="p-6 border-stone-200 bg-stone-50">
              <blockquote className="text-stone-700 italic text-center">
                "{character.quote}"
              </blockquote>
            </Card>

            {/* Sources */}
            <Card className="p-6 border-stone-200 bg-white">
              <h3 className="text-sm text-stone-900 mb-3">Historical Sources</h3>
              <ul className="space-y-2">
                {character.sources.map((source, index) => (
                  <li key={index} className="text-xs text-stone-600 flex items-start">
                    <span className="text-stone-400 mr-2">•</span>
                    <span>{source}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Right Column - Bio & Chat */}
          <div className="lg:col-span-3 space-y-8">
            {/* Biography */}
            <div className="space-y-4">
              <div>
                <h2 className="text-stone-900 mb-4">About {character.name}</h2>
                <Separator className="bg-stone-200" />
              </div>
              
              <p className="text-stone-700 leading-relaxed">
                {character.fullBio}
              </p>
            </div>

            {/* Conversation Interface */}
            <ConversationInterface
              characterName={character.name}
              characterImage={character.image}
              conversationTree={character.conversationTree}
              onReflect={onReflect}
            />

            {/* Guidelines */}
            <Card className="border-stone-200 bg-stone-50 p-6">
              <h3 className="text-sm text-stone-900 mb-3">Conversation Guidelines</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start">
                  <span className="text-stone-400 mr-2">•</span>
                  <span>Approach with empathy and an open heart</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-2">•</span>
                  <span>Ask genuine questions about their experiences and perspectives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-2">•</span>
                  <span>Remember this represents a real person's testimony and memory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-2">•</span>
                  <span>Take time to reflect on what you learn</span>
                </li>
              </ul>
            </Card>

            {/* Learn More */}
            <div className="text-center pt-4">
              <p className="text-sm text-stone-600 mb-4">
                Want to learn more from verified historical sources?
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-stone-300 text-stone-700"
                  onClick={() => window.open('https://www.ushmm.org', '_blank')}
                >
                  USHMM
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-stone-300 text-stone-700"
                  onClick={() => window.open('https://www.yadvashem.org', '_blank')}
                >
                  Yad Vashem
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-stone-300 text-stone-700"
                  onClick={() => window.open('https://sfi.usc.edu', '_blank')}
                >
                  USC Shoah Foundation
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
