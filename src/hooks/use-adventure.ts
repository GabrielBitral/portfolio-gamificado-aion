"use client";
import { useCallback, useEffect, useRef, useState } from 'react';
import { quests, type QuestId } from '@/src/data/site-content';
const key = 'atreia-adventure-v1';
export function useAdventure() {
  const [completed, setCompleted] = useState<QuestId[]>([]);
  const [notice, setNotice] = useState('');
  const seen = useRef(new Set<QuestId>());
  const complete = useCallback((id: QuestId) => {
    if (seen.current.has(id)) return;
    seen.current.add(id);
    const next = [...seen.current];
    setCompleted(next);
    const quest = quests.find(q => q.id === id)!;
    setNotice(`${quest.badge} desbloqueada! +${quest.xp} XP${id === 'secret' ? ' · As menores luzes revelam grandes caminhos.' : ''}`);
    try { localStorage.setItem(key, JSON.stringify(next)); } catch { /* Continua sem persistência. */ }
  }, []);
  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem(key) || '[]');
      if (Array.isArray(saved)) {
        const valid = quests.filter(q => saved.includes(q.id)).map(q => q.id);
        seen.current = new Set(valid);
        queueMicrotask(() => setCompleted(valid));
      }
    } catch { /* Dados inválidos iniciam uma nova jornada. */ }
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) complete(entry.target.id as QuestId);
    }, { threshold: 0.25 });
    document.querySelectorAll('[data-quest]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [complete]);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(''), 5500);
    return () => clearTimeout(timer);
  }, [notice]);
  const xp = quests.filter(q => completed.includes(q.id)).reduce((sum, q) => sum + q.xp, 0);
  return { completed, complete, notice, xp, level: Math.min(5, Math.floor(xp / 100) + 1) };
}
