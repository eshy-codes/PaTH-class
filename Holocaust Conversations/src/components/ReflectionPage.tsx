import { useState, useEffect } from "react";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface ReflectionPageProps {
  onBack: () => void;
}

interface Reflection {
  id: string;
  text: string;
  timestamp: number;
}

// Helper function to format timestamp
function formatTimestamp(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  const weeks = Math.floor(diff / 604800000);
  
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  if (days < 7) return `${days} day${days === 1 ? '' : 's'} ago`;
  return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
}

export function ReflectionPage({ onBack }: ReflectionPageProps) {
  const [reflection, setReflection] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [reflections, setReflections] = useState<Reflection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const serverUrl = `https://${projectId}.supabase.co/functions/v1/make-server-ab9642a4`;

  // Fetch reflections on mount
  useEffect(() => {
    fetchReflections();
  }, []);

  const fetchReflections = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${serverUrl}/reflections`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch reflections');
      }
      
      const data = await response.json();
      setReflections(data.reflections || []);
    } catch (err) {
      console.error('Error fetching reflections:', err);
      setError('Unable to load reflections. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (reflection.trim()) {
      try {
        setError(null);
        const response = await fetch(`${serverUrl}/reflections`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ text: reflection }),
        });
        
        if (!response.ok) {
          throw new Error('Failed to submit reflection');
        }
        
        setSubmitted(true);
        setReflection("");
        
        // Refresh reflections list
        await fetchReflections();
        
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } catch (err) {
        console.error('Error submitting reflection:', err);
        setError('Unable to submit reflection. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-stone-100 border-b border-stone-200 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-stone-600 hover:text-stone-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="text-center mb-12 space-y-4">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center">
              <Heart className="h-8 w-8 text-stone-600" />
            </div>
          </div>
          <h1 className="text-stone-900">Your Reflection</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Take a moment to reflect on your conversation. What did you feel? What did you learn? 
            Your thoughts help preserve the impact of these stories.
          </p>
        </div>

        {/* Reflection Form */}
        <Card className="border-stone-200 bg-white p-8 mb-12">
          <div className="space-y-4">
            <label className="text-stone-900 block">
              What did you feel during your conversation?
            </label>
            <Textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="Share your thoughts, feelings, or insights from the conversation..."
              className="min-h-[200px] border-stone-300 focus:border-stone-400 resize-none"
            />
            <div className="flex items-center justify-between">
              <p className="text-xs text-stone-500">
                Your reflection will be shared anonymously to inspire others
              </p>
              <Button 
                onClick={handleSubmit}
                disabled={!reflection.trim() || submitted}
                className="bg-stone-700 hover:bg-stone-800 text-white"
              >
                {submitted ? "Thank you for sharing" : "Submit Reflection"}
              </Button>
            </div>
          </div>
        </Card>

        {/* Other Reflections */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-stone-900 mb-2">Reflections from Others</h2>
            <p className="text-sm text-stone-600">
              See how these conversations have touched other visitors
            </p>
          </div>

          <Separator className="bg-stone-200 my-8" />

          <div className="space-y-4">
            {loading ? (
              <p className="text-stone-500">Loading reflections...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : reflections.length > 0 ? (
              reflections.map((item) => (
                <Card 
                  key={item.id} 
                  className="border-stone-200 bg-stone-50 p-6 hover:shadow-md transition-shadow"
                >
                  <blockquote className="text-stone-700 italic mb-3">
                    "{item.text}"
                  </blockquote>
                  <p className="text-xs text-stone-500">— {formatTimestamp(item.timestamp)}</p>
                </Card>
              ))
            ) : (
              <p className="text-stone-500">No reflections yet. Be the first to share!</p>
            )}
          </div>

          <div className="text-center pt-8">
            <Button 
              variant="outline"
              onClick={onBack}
              className="border-stone-300 text-stone-700 hover:bg-stone-200"
            >
              Return to Conversations
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}