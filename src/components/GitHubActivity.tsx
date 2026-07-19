import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Code2, ExternalLink } from 'lucide-react';

const username = 'LucasRenatoMelgaRios';
const profileUrl = `https://github.com/${username}`;
const currentYear = new Date().getFullYear();
const years = [currentYear, currentYear - 1, currentYear - 2];

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type ApiResponse = {
  contributions?: Contribution[];
};

type TooltipState = {
  contribution: Contribution;
  x: number;
  y: number;
};

const levelClasses = [
  'bg-ink/[0.06]',
  'bg-sky/55',
  'bg-sky',
  'bg-[#438fc3]',
  'bg-ink',
];

export default function GitHubActivity() {
  const [year, setYear] = useState(currentYear);
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(false);

    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error('No fue posible cargar la actividad');
        return response.json() as Promise<ApiResponse>;
      })
      .then((data) => setContributions(data.contributions ?? []))
      .catch((requestError) => {
        if (requestError instanceof Error && requestError.name === 'AbortError') return;
        setContributions([]);
        setError(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [year]);

  const total = useMemo(
    () => contributions.reduce((sum, contribution) => sum + contribution.count, 0),
    [contributions],
  );

  const leadingEmptyDays = contributions.length
    ? new Date(`${contributions[0].date}T00:00:00Z`).getUTCDay()
    : 0;

  const showTooltip = (contribution: Contribution, target: HTMLElement) => {
    const bounds = target.getBoundingClientRect();
    setTooltip({
      contribution,
      x: bounds.left + bounds.width / 2,
      y: bounds.top - 8,
    });
  };

  const tooltipDate = tooltip
    ? new Date(`${tooltip.contribution.date}T00:00:00Z`).toLocaleDateString('es-PE', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
      })
    : '';

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Seleccionar año de actividad">
        {years.map((availableYear) => (
          <button
            key={availableYear}
            type="button"
            onClick={() => setYear(availableYear)}
            aria-pressed={year === availableYear}
            className={`focus-ring rounded-full border-2 px-5 py-2 text-sm font-bold transition ${
              year === availableYear
                ? 'border-ink bg-lime text-ink shadow-[3px_3px_0_#173f5f]'
                : 'border-ink/20 bg-white/70 text-ink-soft hover:border-ink'
            }`}
          >
            {availableYear}
          </button>
        ))}
      </div>

      <div className="mt-7 grid gap-5 lg:grid-cols-[230px_1fr]">
        <article className="paper-card rough-border flex min-h-40 flex-col justify-between p-6">
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm font-bold text-ink-soft">Contribuciones en {year}</p>
            <Code2 className="size-5" aria-hidden="true" />
          </div>
          <p className="display mt-6 text-5xl" aria-live="polite">
            {loading ? '···' : error ? '—' : total.toLocaleString('es-PE')}
          </p>
        </article>

        <article className="paper-card rough-border min-w-0 p-5 md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-bold">Actividad pública · {year}</h3>
            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring nav-link inline-flex items-center gap-2 text-sm font-bold"
            >
              github.com/{username} <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </div>

          {error ? (
            <div className="mt-7 rounded-xl border-2 border-dashed border-coral/50 bg-coral/5 p-6">
              <p className="font-bold">La actividad no pudo cargarse ahora.</p>
              <p className="mt-2 text-sm text-ink-soft">Puedes consultar las contribuciones directamente en mi perfil de GitHub.</p>
            </div>
          ) : (
            <div className="mt-7 overflow-x-auto pb-3" aria-busy={loading}>
              <div className="mb-2 flex min-w-[730px] justify-between px-1 text-[10px] font-bold uppercase tracking-widest text-ink-soft/70" aria-hidden="true">
                {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map((month) => <span key={month}>{month}</span>)}
              </div>
              <div className="grid min-w-[730px] grid-flow-col grid-rows-7 gap-[3px]" aria-label={`Calendario de contribuciones de ${year}`}>
                {Array.from({ length: leadingEmptyDays }).map((_, index) => (
                  <span key={`empty-${index}`} className="size-[11px]" aria-hidden="true" />
                ))}
                {(loading ? Array.from({ length: 364 }, (_, index) => ({ date: '', count: 0, level: index % 17 === 0 ? 1 : 0 })) : contributions).map((contribution, index) => (
                  <span
                    key={contribution.date || index}
                    className={`size-[11px] cursor-crosshair rounded-[2px] border border-ink/[0.05] transition-transform hover:relative hover:z-10 hover:scale-150 hover:border-ink/30 ${levelClasses[Math.min(contribution.level, 4)]}`}
                    title={contribution.date ? `${contribution.date}: ${contribution.count} contribuciones` : undefined}
                    aria-label={contribution.date ? `${contribution.date}: ${contribution.count} contribuciones` : undefined}
                    onPointerEnter={(event) => contribution.date && showTooltip(contribution, event.currentTarget)}
                    onPointerLeave={() => setTooltip(null)}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-3 flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-ink/20 pt-4 text-xs text-ink-soft">
            <span>Datos públicos de GitHub</span>
            <div className="flex items-center gap-2" aria-label="Intensidad de contribuciones">
              <span>Menos</span>
              {levelClasses.map((levelClass) => <i key={levelClass} className={`size-3 rounded-[2px] ${levelClass}`} />)}
              <span>Más</span>
            </div>
          </div>
        </article>
      </div>

      {tooltip && createPortal(
        <div
          role="tooltip"
          className="pointer-events-none fixed z-[100] -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-lg border-2 border-ink bg-white px-3 py-2 text-xs font-semibold text-ink shadow-[3px_3px_0_rgba(23,63,95,.18)]"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <strong className="text-coral">{tooltip.contribution.count}</strong>{' '}
          {tooltip.contribution.count === 1 ? 'contribución' : 'contribuciones'} · {tooltipDate}
        </div>,
        document.body,
      )}
    </div>
  );
}
