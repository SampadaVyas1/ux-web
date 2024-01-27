export interface ITextHighlighterKeys {
  [key: string]: string;
}

export interface ITextHighlighterProp {
  text: string;
  textHighlighterKeys: ITextHighlighterKeys;
  className?: string;
  isAnimate?: boolean;
}
