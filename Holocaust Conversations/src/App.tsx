import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { CharacterPage } from "./components/CharacterPage";
import { ReflectionPage } from "./components/ReflectionPage";

type Page = 
  | { type: "landing" }
  | { type: "character"; id: string }
  | { type: "reflection" };

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>({ type: "landing" });

  const handleCharacterSelect = (characterId: string) => {
    setCurrentPage({ type: "character", id: characterId });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentPage({ type: "landing" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReflect = () => {
    setCurrentPage({ type: "reflection" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {currentPage.type === "landing" && (
        <LandingPage onCharacterSelect={handleCharacterSelect} />
      )}

      {currentPage.type === "character" && (
        <CharacterPage
          characterId={currentPage.id}
          onBack={handleBackToHome}
          onReflect={handleReflect}
        />
      )}

      {currentPage.type === "reflection" && (
        <ReflectionPage onBack={handleBackToHome} />
      )}
    </div>
  );
}
