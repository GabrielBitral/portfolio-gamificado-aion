import { siteContent as content } from '@/src/data/site-content';
import { SectionHeading } from '@/src/components/section-heading';
import { SkillAchievements } from '@/src/components/skill-achievements';
import Image from 'next/image';
import portrait from '@/src/img/Retrato Gabriel.png';
export function AboutSection() {
  return (<section id="about" data-quest className="content-section">
      <SectionHeading number="01" label="POR TRÁS DO PERSONAGEM" title="Conheça o aventureiro" description="Antes de qualquer missão, uma boa apresentação."/>
      <div className="character-card character-card--photo panel">
        <div className="adventurer-portrait">
          <div className="adventurer-photo-frame">
            <Image
              src={portrait}
              alt={`Retrato de ${content.name}`}
              className="adventurer-photo"
              sizes="(min-width: 640px) 200px, 240px"
              placeholder="blur"
            />
          </div>
          <span className="adventurer-photo-caption">✦ O AVENTUREIRO</span>
        </div>
        <div className="character-info">
          <span className="tag">FICHA DO AVENTUREIRO</span>
          <h3>{content.name}</h3>
          <p className="character-title">{content.title}</p>
          <p className="bio">{content.bio}</p>
          <div className="traits">{content.traits.map(t => <span key={t}>✧ {t}</span>)}</div>
        </div>
        <div className="character-skills">
          <SkillAchievements skills={content.skills}/>
        </div>
      </div>
    </section>);
}
