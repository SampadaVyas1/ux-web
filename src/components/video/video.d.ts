export interface IVideoProps {
  className?: string;
  customClassOnvideoPlayer?: string;
  src?: string;
  controls?: boolean;
  getPlayingInfo?: (boolean) => void;
}
