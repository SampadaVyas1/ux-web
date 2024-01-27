import TextHighlighter from "@/components/text-highlighter";
const withTextHighlighter = ({
  text,
  textHighlighterKeys = {},
  className = "",
  isAnimate = true,
}: {
  text: string;
  textHighlighterKeys?: any;
  className?: string;
  isAnimate?: boolean;
}) => {
  return (
    <TextHighlighter
      text={text}
      textHighlighterKeys={textHighlighterKeys}
      className={className}
      isAnimate={isAnimate}
    />
  );
};

export default withTextHighlighter;
