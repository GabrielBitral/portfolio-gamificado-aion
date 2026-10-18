"use client";
import { useState } from 'react';
import { useAdventureContext } from '@/src/components/adventure/adventure-provider';
const links = [{ href: '#home', label: 'Início' }, { href: '#about', label: 'O aventureiro' }, { href: '#world', label: 'O mundo' }, { href: '#social', label: 'Conexões' }];
export function SiteHeader() {
  const { level } = useAdventureContext();
  const [open, setOpen] = useState(false);
  return (<header className="site-header">
      <div className="header-inner">
        <a href="#home" className="brand" aria-label="Portal do aventureiro — início">
          <span className="brand-mark">✦</span>
          <span>ATREIA<small>PORTAL DO AVENTUREIRO</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">{links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}</nav>
        <a className="header-level" href="#quests">✧ <span>NÍVEL {level}</span>
          <i />
        </a>
        <button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Navegação no celular">{links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}</nav>}</header>);
}
