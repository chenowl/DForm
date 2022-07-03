import { createContext } from "react";

export interface IDFormContext {
  values: Record<string, any>,
  setValue: (name: string, value: string) => void
}

export const DFormContext = createContext<IDFormContext>({} as IDFormContext);
