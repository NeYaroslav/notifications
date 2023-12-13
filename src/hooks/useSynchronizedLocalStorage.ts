import { useEffect } from "react";

export const useSynchronizedLocalStorage = (label: string, entity: unknown) => {
  useEffect(() => {
    localStorage.setItem(label, JSON.stringify(entity));
  }, [entity, label]);
};
