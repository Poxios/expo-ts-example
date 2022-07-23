import React, { createContext, useState } from "react";

type AppContextType = {
  // ! Auth
  isLogined: boolean;
};
interface IContextHandlers {
  onLogin: () => void;
}

export interface IAppContext {
  data: AppContextType;
  handlers: IContextHandlers;
}

export const AppContext = createContext<IAppContext | null>(null);

export default function AppContextProvider(props: any) {
  const [appContext, setAppContext] = useState<AppContextType>({
    isLogined: false,
  });
  const handlers: IContextHandlers = {
    onLogin: () => {
      setAppContext((prev) => ({ ...prev, isLogined: true }));
    },
  };

  return <AppContext.Provider value={{ data: appContext, handlers }}>{props.children}</AppContext.Provider>;
}
