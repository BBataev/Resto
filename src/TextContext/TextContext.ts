import { createContext } from "react";

type ContextParams = { filter: string, updateValue: string };

export const TextContext = createContext<ContextParams>({
  filter: "",
  updateValue: "",
});
