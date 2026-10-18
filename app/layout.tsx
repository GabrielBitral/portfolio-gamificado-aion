import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Portal do Aventureiro — Gabriel',
  description: 'Conheça o aventureiro, explore Aion 2 e desbloqueie conquistas em uma jornada por Atreia.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
