import React, { createContext, useState } from "react";
import { MouseContextType, MouseContextProviderProps } from "./mouseContext.d";
import { CURSOR_TYPE } from "@/components/big-circle-cursor/cursor-type.helper";

export const MouseContext = createContext<MouseContextType>({
  cursorType: CURSOR_TYPE.DOTCURSOR,
  cursorChangeHandler: () => {},
});

const MouseContextProvider: React.FC<MouseContextProviderProps> = ({
  children,
}) => {
  const [cursorType, setCursorType] = useState<string>(CURSOR_TYPE.DOTCURSOR);

  const cursorChangeHandler = (cursorType: string) => {
    setCursorType(cursorType);
  };

  const contextValue: MouseContextType = {
    cursorType: cursorType,
    cursorChangeHandler: cursorChangeHandler,
  };

  return (
    <MouseContext.Provider value={contextValue}>
      {children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
