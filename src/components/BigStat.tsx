import './BigStat.css';

export function BigStat({ pre, value, label, source, accent = 'cyan' }: { pre?: string; value: string; label: string; source: string; accent?: 'cyan' | 'coral' }) {
  return (
    <div className={`stat stat-${accent}`} role="note">
      <p className="stat-value">
        {pre && <span className="stat-pre">{pre}</span>} {value}
      </p>
      <p className="stat-label">{label}</p>
      <p className="stat-source">Fonte: {source}</p>
    </div>
  );
}
