import { siteContent as content } from '@/src/data/site-content';
import { SectionHeading } from '@/src/components/section-heading';
export function SocialSection() {
  return (<section id="social" data-quest className="content-section">
      <SectionHeading number="03" label="CONEXÕES ALÉM DE ATREIA" title="Toda jornada fica melhor em grupo" description="Vamos nos encontrar em outros mundos também."/>
      <div className="social-grid">{content.socials.map(s => <article className="social-card panel" key={s.name}>
          <span className="social-icon">{s.icon}</span>
          <p className="eyebrow">{s.label}</p>
          <h3>{s.name}</h3>
          <p className="social-description">{s.description}</p>{s.url ? <a className="text-link" href={s.url} target="_blank" rel="noopener noreferrer">Visitar perfil ↗</a> : <span className="coming-soon">Perfil em breve <span>↗</span>
          </span>}</article>)}</div>
    </section>);
}
