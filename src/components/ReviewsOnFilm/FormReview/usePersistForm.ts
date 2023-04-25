import { IInputs } from "@/src/types/CommentsType";
import { useEffect } from "react";

interface IusePersistForm {
  value: IInputs 
  localStorageKey: string
}
export const usePersistForm = ({ value, localStorageKey }: IusePersistForm) => {
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value))
  }, [value, localStorageKey])

  return
}