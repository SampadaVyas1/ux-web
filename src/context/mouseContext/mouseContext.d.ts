import { ReactNode } from "react";

export interface MouseContextType {
  cursorType: string;
  cursorChangeHandler: (cursorType: string) => void;
}

export interface MouseContextProviderProps {
  children: ReactNode;
}
