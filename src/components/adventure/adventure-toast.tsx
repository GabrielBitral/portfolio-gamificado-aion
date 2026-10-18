"use client";
import { useAdventureContext } from '@/src/components/adventure/adventure-provider';
export function AdventureToast() {
  const { notice } = useAdventureContext();
  return (<div className={`toast ${notice ? 'visible' : ''}`} role="status" aria-live="polite">{notice && <>
        <span>✦</span>
        <p>{notice}</p>
      </>}</div>);
}
