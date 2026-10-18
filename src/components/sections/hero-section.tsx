export function HeroSection() {
  return (<section id="home" className="hero">
      <div className="hero-art" aria-hidden="true"/>
      <div className="container hero-content">
        <p className="eyebrow">— &nbsp; UM NOVO MUNDO. A SUA HISTÓRIA.</p>
        <div className="game-logo">AION<span>2</span>
        </div>
        <h1>Toda lenda começa<br />com uma <em>jornada.</em>
        </h1>
        <p className="hero-description">Bem-vindo ao meu pequeno universo em Atreia.<br />Conheça o aventureiro, descubra Aion 2 e faça parte dessa história.</p>
        <div className="hero-actions">
          <a href="#world" className="button button-gold">✧ &nbsp; Explorar o mundo <span>↗</span>
          </a>
          <a href="#about" className="button button-outline">Conhecer o aventureiro <span>→</span>
          </a>
        </div>
        <p className="hero-note">✦ &nbsp; Explore. Descubra. Conquiste.</p>
      </div>
      <div className="container hero-bottom">
        <span>UM PORTAL FEITO DE HISTÓRIAS E CONEXÕES</span>
        <a href="#quests">ROLE PARA EXPLORAR &nbsp; ↓</a>
      </div>
    </section>);
}
