import {
  Anchor,
  Asterisk,
  Ban,
  Circle,
  CircleDot,
  Filter,
  Fish,
  GitBranch,
  GitMerge,
  Grid2x2,
  Handshake,
  House,
  Layers,
  Mountain,
  Repeat,
  Share2,
  Sprout,
  Sun,
  Thermometer,
  Waves,
  Zap,
  type LucideIcon,
} from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  Anchor,
  Asterisk,
  Ban,
  Circle,
  CircleDot,
  Filter,
  Fish,
  GitBranch,
  GitMerge,
  Grid2x2,
  Handshake,
  House,
  Layers,
  Mountain,
  Repeat,
  Share2,
  Sprout,
  Sun,
  Thermometer,
  Waves,
  Zap,
};

export function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const Cmp = icons[name] ?? Circle;
  return <Cmp size={size} strokeWidth={1.75} aria-hidden="true" />;
}
