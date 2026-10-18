"use client";
import { createContext, useContext, type ReactNode } from 'react';
import { useAdventure } from '@/src/hooks/use-adventure';
type AdventureState = ReturnType<typeof useAdventure>;
const AdventureContext = createContext<AdventureState | null>(null);
export function AdventureProvider({ children }: {
  children: ReactNode;
}) {
  const adventure = useAdventure();
  return <AdventureContext.Provider value={adventure}>{children}</AdventureContext.Provider>;
}
export function useAdventureContext() {
  const adventure = useContext(AdventureContext);
  if (!adventure) {
      throw new Error('useAdventureContext deve ser usado dentro de AdventureProvider.');
  }
  return adventure;
}
