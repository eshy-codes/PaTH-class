import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface CharacterCardProps {
  name: string;
  role: string;
  years: string;
  image: string;
  quote: string;
  onClick: () => void;
}

export function CharacterCard({ name, role, years, image, quote, onClick }: CharacterCardProps) {
  return (
    <Card 
      className="group overflow-hidden border-stone-200 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
      onClick={onClick}
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden bg-stone-200">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="p-3 space-y-2">
        <div className="text-center space-y-0.5">
          <h3 className="text-stone-900 text-sm">{name}</h3>
          <p className="text-stone-600 text-xs">{role}</p>
          <p className="text-stone-500 text-xs">{years}</p>
        </div>
        
        {/* Quote */}
        <blockquote className="text-stone-700 text-xs italic text-center leading-relaxed border-t border-b border-stone-200 py-2">
          "{quote}"
        </blockquote>
        
        {/* Button */}
        <Button 
          variant="outline" 
          size="sm"
          className="w-full border-stone-300 text-stone-700 hover:bg-stone-50 text-xs py-1 h-auto"
        >
          Begin Conversation
        </Button>
      </div>
    </Card>
  );
}
