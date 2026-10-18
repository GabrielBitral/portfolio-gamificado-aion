export type QuestId = 'about' | 'world' | 'social' | 'secret';
export type SkillAchievement = {
  name: string;
  category: 'Linguagem' | 'Frontend' | 'Backend' | 'Ferramenta' | 'Banco de dados';
  status: 'Desbloqueada' | 'Em evolução';
};
export const siteContent = {
  name: 'Gabriel F. Chaves',
  title: 'Legião/Guilda - Dev. FullStack',
  bio: 'Toda jornada começa com curiosidade. Este é meu cantinho para compartilhar um pouco sobre mim, minha paixão por novos mundos e as histórias que encontro pelo caminho.',
  skills: [
    { name: 'React', category: 'Frontend', status: 'Desbloqueada' },
    { name: 'Vue', category: 'Frontend', status: 'Desbloqueada' },
    { name: 'TypeScript', category: 'Linguagem', status: 'Desbloqueada' },
    { name: 'JavaScript', category: 'Linguagem', status: 'Desbloqueada' },
    { name: 'Laravel', category: 'Backend', status: 'Desbloqueada' },
    { name: 'MySQL', category: 'Banco de dados', status: 'Desbloqueada' },
    { name: 'Docker', category: 'Ferramenta', status: 'Desbloqueada' },
    { name: 'Figma', category: 'Ferramenta', status: 'Desbloqueada' },
    { name: 'Git', category: 'Ferramenta', status: 'Desbloqueada' },
    { name: 'GitHub', category: 'Ferramenta', status: 'Desbloqueada' },
  ] satisfies SkillAchievement[],
  traits: ['Novos mundos', 'Boas histórias', 'Conexões'],
  game: {
    description: 'Abra suas asas em Atreia. Aion 2 é o MMORPG da NCSOFT que leva você a um universo de fantasia, com exploração pelos céus, combates e aventuras em grupo.',
    objective: 'Crie seu personagem, desenvolva suas habilidades e encontre seu lugar em um mundo dividido entre Elyos e Asmodians. Enfrente masmorras, descubra territórios e construa sua própria jornada.',
    url: 'https://aion2.plaync.com/en-us/index',
    source: 'https://about.ncsoft.com/en/news/article/aion2-update-250530-2',
    features: [
      { icon: '✧', title: 'Um mundo sem limites', text: 'Explore Atreia por terra e pelos céus. A próxima descoberta está além do horizonte.' },
      { icon: '⚔', title: 'Sua própria jornada', text: 'Escolha entre oito classes e evolua seu personagem com seu jeito de jogar.' },
      { icon: '♜', title: 'Mais fortes juntos', text: 'Reúna seu grupo, encare masmorras e compartilhe grandes conquistas.' },
    ],
  },
  // Preencha as URLs abaixo para ativar os links dos seus perfis.
  socials: [
    { name: 'LinkedIn', label: 'Além do jogo', description: 'Conheça minha trajetória e vamos criar conexões profissionais.', url: 'https://www.linkedin.com/in/gabriel-fabiano-ch/', icon: 'in' },
    { name: 'GitHub', label: 'Meu inventário de projetos', description: 'Ideias que saem do papel e ganham vida em linhas de código.', url: 'https://github.com/GabrielBitral', icon: '</>' },
  ],
};
export const quests: { id: QuestId; title: string; description: string; xp: number; badge: string; icon: string }[] = [
  { id: 'about', title: 'Conheça o aventureiro', description: 'Descubra quem está por trás do portal.', xp: 100, badge: 'Primeiros passos', icon: '♙' },
  { id: 'world', title: 'Entre no mundo de Atreia', description: 'Explore o universo de Aion 2.', xp: 150, badge: 'Explorador de Atreia', icon: '♧' },
  { id: 'social', title: 'Encontre sua guilda', description: 'Visite a seção de conexões.', xp: 100, badge: 'Espírito de guilda', icon: '♜' },
  { id: 'secret', title: 'Um segredo entre as estrelas', description: 'Uma estrela guarda uma surpresa no fim da jornada.', xp: 150, badge: 'Olhar de Daeva', icon: '✧' },
];
