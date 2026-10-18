"use client";
import { quests } from '@/src/data/site-content';
import { useAdventureContext } from '@/src/components/adventure/adventure-provider';
export function QuestJournal() {
  const { completed, xp, level } = useAdventureContext();
  return (<aside id="quests" className="quest-panel panel">
      <div className="panel-heading">
        <span className="eyebrow">SUA AVENTURA</span>
        <span className="gold">✧</span>
      </div>
      <div className="journey-level">
        <span className="level-shield">{level}</span>
        <div>
          <h2>{xp === 500 ? 'Lenda do portal' : 'Explorador de Atreia'}</h2>
          <p>Nível {level} · {xp === 500 ? 'Jornada completa' : 'Sua história começa aqui'}</p>
        </div>
      </div>
      <div className="xp-label">
        <span>Experiência total</span>
        <strong>{xp} / 500 XP</strong>
      </div>
      <progress value={xp} max={500} aria-label="Experiência total"/>
      <div className="quest-list-heading">
        <h3>Diário de missões</h3>
        <span>{completed.length}/4</span>
      </div>
      <div className="quest-list">{quests.map((q, i) => <a href={q.id === 'secret' ? '#footer' : `#${q.id}`} key={q.id} className={`quest ${completed.includes(q.id) ? 'is-complete' : ''}`}>
          <span className="quest-check">{completed.includes(q.id) ? '✓' : `0${i + 1}`}</span>
          <span>
            <strong>{q.title}</strong>
            <small>{q.description}</small>
            <b>+{q.xp} XP</b>
          </span>
        </a>)}</div>
      <div className="quest-tip">
        <span>ⓘ</span>
        <p>Explore as seções para completar missões e desbloquear conquistas.</p>
      </div>
    </aside>);
}
