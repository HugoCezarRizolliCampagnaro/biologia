import { useEffect, useState } from 'react';
import { MAX_DEPTH } from '../data/nav';

/** Profundidade simbólica de cada seção, calculada pela posição real na página. */
export function useSectionDepths(ids: string[]) {
  const [depths, setDepths] = useState<Record<string, number>>({});
  useEffect(() => {
    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next: Record<string, number> = {};
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el || max <= 0) continue;
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        next[id] = Math.round(Math.min(1, Math.max(0, top / max)) * MAX_DEPTH);
      }
      setDepths(next);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener('load', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('load', measure);
    };
  }, [ids]);
  return depths;
}
