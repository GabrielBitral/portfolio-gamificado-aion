import { siteContent as content } from '@/src/data/site-content';
import { SectionHeading } from '@/src/components/section-heading';
export function WorldSection() {
  return (<section id="world" data-quest className="content-section">
      <SectionHeading number="02" label="SEU PRÓXIMO UNIVERSO" title="As asas de uma nova história" description="Um mundo de possibilidades espera por você."/>
      <div className="world-banner">
        <div>
          <p className="eyebrow">BEM-VINDO A ATREIA</p>
          <h3>O horizonte é só<br />o começo.</h3>
          <span className="tag">AION 2 · MMORPG · NCSOFT</span>
        </div>
      </div>
      <p className="world-description">{content.game.description}</p>
      <p className="world-objective">{content.game.objective}</p>
      <div className="feature-grid">{content.game.features.map(f => <article className="feature" key={f.title}>
          <span>{f.icon}</span>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </article>)}</div>
      <div className="world-links">
        <a className="text-link" href={content.game.url} target="_blank" rel="noopener noreferrer">Descobrir o site oficial &nbsp; ↗</a>
        <a className="source-link" href={content.game.source} target="_blank" rel="noopener noreferrer">Fonte: NCSOFT ↗</a>
      </div>
    </section>);
}
