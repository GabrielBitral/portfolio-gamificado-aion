"use client";
import { useAdventureContext } from '@/src/components/adventure/adventure-provider';
export function SiteFooter() {
  const { completed, complete } = useAdventureContext();
  return (<footer id="footer" className="container site-footer">
      <a href="#home" className="brand footer-brand">✦ <span>ATREIA</span>
      </a>
      <p>Um portal de fã, feito para explorar e conectar.<br />
        <span>Aion 2 e suas imagens pertencem à NCSOFT. Projeto sem vínculo oficial.</span>
      </p>
      <button className={`secret-star ${completed.includes('secret') ? 'found' : ''}`} onClick={() => complete('secret')} aria-label="Investigar a estrela misteriosa" title="Nem toda estrela está aqui por acaso…">✧</button>
      <a href="#home" className="back-top" aria-label="Voltar ao início">↑</a>
    </footer>);
}
