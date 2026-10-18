import { AdventureProvider } from '@/src/components/adventure/adventure-provider';
import { AdventureToast } from '@/src/components/adventure/adventure-toast';
import { QuestJournal } from '@/src/components/adventure/quest-journal';
import { SiteHeader } from '@/src/components/layout/site-header';
import { SiteFooter } from '@/src/components/layout/site-footer';
import { HeroSection } from '@/src/components/sections/hero-section';
import { AboutSection } from '@/src/components/sections/about-section';
import { WorldSection } from '@/src/components/sections/world-section';
import { SocialSection } from '@/src/components/sections/social-section';
import { AchievementsSection } from '@/src/components/sections/achievements-section';

export default function AdventurerPortalPage() {
  return (
    <AdventureProvider>
      <a href="#main" className="skip-link">Pular para o conteúdo</a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <div className="container adventure-layout">
          <QuestJournal />
          <div className="main-sections">
            <AboutSection />
            <WorldSection />
            <SocialSection />
          </div>
        </div>
        <AchievementsSection />
      </main>
      <SiteFooter />
      <AdventureToast />
    </AdventureProvider>
  );
}
