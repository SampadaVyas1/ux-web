import { useState, useEffect, useCallback } from "react";

const useTypewriter = (text: string, startTyping = true, delay = 50) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const typeNextCharacter = useCallback(() => {
    if (currentIndex < text.length) {
      setCurrentText(currentText + text[currentIndex]);
      setCurrentIndex(currentIndex + 1);
    }
  }, [text, currentIndex, currentText]);

  useEffect(() => {
    if (!startTyping) return;
    const typingInterval = setInterval(typeNextCharacter, delay);
    if (currentIndex >= text.length) {
      clearInterval(typingInterval);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, currentIndex, delay, startTyping, typeNextCharacter]);
  return currentText;
};

export default useTypewriter;
