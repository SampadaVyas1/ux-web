import { sanitizeHTML } from "@/utils/helpers/common";
import { ITextHighlighterProp } from "./text-highlighter";
import classes from "./text-highlighter.module.scss";

const TextHighlighter = ({
  text,
  textHighlighterKeys,
  className,
  isAnimate = false,
}: ITextHighlighterProp) => {
  const wrapTextInSpan = (text: string) => {
    const wordList = text.split(" ");
    wordList.map((word, index) => {
      wordList[
        index
      ] = `<span class="${classes.animatingText}"> ${word} </span>`;
    });
    return wordList.join(" ");
  };
  const replaceStringWithKeys = () => {
    let currentText = isAnimate ? wrapTextInSpan(text) : text;
    Object.keys(textHighlighterKeys).map(
      (_key: string) =>
        (currentText = currentText.replaceAll(
          `{{${_key}}}`,
          `<span class="${classes.highlightedText} ${className || ""}">${
            textHighlighterKeys[_key]
          }</span>`
        ))
    );
    return currentText;
  };

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: sanitizeHTML(replaceStringWithKeys()),
      }}
    />
  );
};

export default TextHighlighter;
