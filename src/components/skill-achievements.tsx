import type { SkillAchievement } from '@/src/data/site-content';
export function SkillAchievements({ skills }: {
  skills: SkillAchievement[];
}) {
  return (<div className="skill-achievements">
      <h4 className="eyebrow">✦ Habilidades desbloqueadas</h4>
    {skills.length > 0 ? (<ul className="skill-list" aria-label="Linguagens e tecnologias do aventureiro">
        {skills.map((skill) => (<li key={skill.name} className="skill-seal" data-status={skill.status}>
          <span className="skill-emblem" aria-hidden="true">
              {skill.status === 'Desbloqueada' ? '✧' : '◈'}
          </span>
          <div>
            <strong>{skill.name}</strong>
            <span>{skill.category} · {skill.status}</span>
          </div>
        </li>))}
      </ul>) : (<p className="skills-empty">Cada tecnologia aprendida, uma nova conquista. Meu inventário de habilidades estará aqui em breve.</p>)}
    </div>);
}
