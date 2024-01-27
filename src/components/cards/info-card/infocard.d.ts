export interface IInfoCard {
  title: string;
  content: string;
  className?: string;
  onMouseLeave?: () => void;
  onMouseEnter?: () => void;
  onClick?: () => void;
}
