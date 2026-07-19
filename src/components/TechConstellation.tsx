import { useEffect, useState } from 'react';

const technologies = [
  { name: 'Astro', icon: 'https://svgl.app/library/astro-icon-light.svg' },
  { name: 'React', icon: 'https://svgl.app/library/react_dark.svg' },
  { name: 'Laravel', icon: 'https://svgl.app/library/laravel.svg' },
  { name: 'Tailwind CSS', icon: 'https://svgl.app/library/tailwindcss.svg' },
  { name: 'HTML5', icon: 'https://svgl.app/library/html5.svg' },
  { name: 'CSS3', icon: 'https://svgl.app/library/css_old.svg' },
  { name: 'JavaScript', icon: 'https://svgl.app/library/javascript.svg' },
  { name: 'TypeScript', icon: 'https://svgl.app/library/typescript.svg' },
  { name: 'PHP', icon: 'https://svgl.app/library/php.svg' },
  { name: 'Redux Toolkit', icon: 'https://svgl.app/library/redux.svg' },
  { name: 'Supabase', icon: 'https://svgl.app/library/supabase.svg' },
  { name: 'ElectronJS', icon: 'https://svgl.app/library/electron.svg' },
  { name: 'MySQL', icon: 'https://svgl.app/library/mysql-icon-light.svg' },
];

export default function TechConstellation() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  useEffect(() => {
    const syncLanguage = () => setLanguage(document.documentElement.lang === 'en' ? 'en' : 'es');
    syncLanguage();
    window.addEventListener('portfolio-language-change', syncLanguage);
    return () => window.removeEventListener('portfolio-language-change', syncLanguage);
  }, []);

  return (
    <div className="paper-card rough-border tape p-5 md:p-8">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-dashed border-ink/25 pb-5">
        <div>
          <p className="hand text-2xl text-coral">{language === 'en' ? 'tools of the trade' : 'herramientas de trabajo'}</p>
          <h3 className="display mt-1 text-3xl md:text-4xl">{language === 'en' ? 'Technical skills' : 'Habilidades técnicas'}</h3>
        </div>
        <span className="rounded-full bg-lime px-3 py-1 text-xs font-bold">13 {language === 'en' ? 'technologies' : 'tecnologías'}</span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" role="list" aria-label={language === 'en' ? 'Core technologies' : 'Tecnologías principales'}>
        {technologies.map((technology, index) => (
          <div
            key={technology.name}
            role="listitem"
            className={`group flex min-h-31 flex-col items-center justify-center gap-3 rounded-[14px_9px_16px_11px] border border-ink/20 p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-ink/50 hover:shadow-[4px_5px_0_rgba(23,63,95,.1)] ${index % 3 === 0 ? 'bg-paper-deep/75' : 'bg-white/75'}`}
          >
            <img
              src={technology.icon}
              alt=""
              width="38"
              height="38"
              loading="lazy"
              decoding="async"
              className="size-9 object-contain transition duration-300 group-hover:scale-110"
              aria-hidden="true"
            />
            <span className="text-sm font-bold text-ink">{technology.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
