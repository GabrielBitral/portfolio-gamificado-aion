"use client";
import { quests } from '@/src/data/site-content';
import { useAdventureContext } from '@/src/components/adventure/adventure-provider';
export function AchievementsSection() {
  const { completed } = useAdventureContext();
  return (<section className="container achievements">
      <div>
        <p className="eyebrow">PEQUENAS DESCOBERTAS, GRANDES HISTÓRIAS</p>
        <h2>Seu salão de conquistas</h2>
        <p>Cada passo deixa uma marca na sua jornada.</p>
      </div>
      <div className="badges">{quests.map(q => <div className={`badge ${completed.includes(q.id) ? 'unlocked' : ''}`} key={q.id}>
          <span className="badge-icon">{completed.includes(q.id) ? q.icon : '◇'}</span>
          <strong>{q.badge}</strong>
          <small>{completed.includes(q.id) ? 'DESBLOQUEADA' : 'A DESCOBRIR'}</small>
        </div>)}</div>
    </section>);
}
