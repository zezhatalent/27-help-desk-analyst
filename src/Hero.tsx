import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';

const palette = [
  { id: 0, label: 'Open tickets', value: '148', tag: 'accent' },
  { id: 1, label: 'SLA compliance', value: '98%', tag: 'accent2' },
  { id: 2, label: 'First-contact fix', value: '86%', tag: 'accent' },
  { id: 3, label: 'Avg resolution', value: '45m', tag: 'accent2' },
];

function CommandPalette() {
  const { theme } = useTheme();
  return (
    <div
      className="w-full max-w-sm overflow-hidden rounded-xl"
      style={{ background: theme.surface, border: `1px solid ${theme.border}`, boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}
    >
      <div className="flex items-center gap-2 border-b px-4 py-3" style={{ borderColor: theme.border, background: theme.bg }}>
        <span className="flex h-5 w-5 items-center justify-center rounded bg-white/10 text-[11px] font-bold" style={{ color: theme.text }}>⌘</span>
        <span className="text-sm" style={{ color: theme.muted }}>helpdesk / status</span>
        <span className="ml-auto rounded bg-white/5 px-2 text-[10px] font-mono" style={{ color: theme.muted }}>ESC</span>
      </div>
      <div className="py-2">
        <motion.div
          className="py-2"
          animate={{ y: [-72, 0, -72] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          {[0, 1, 2, 3, 0, 1, 2, 3].map((idx, i) => {
            const it = palette[idx];
            const active = i % 4 === 0;
            return (
              <div
                key={i}
                className="mx-3 flex items-center justify-between rounded-lg px-3 py-2"
                style={{ background: active ? `${it.tag === 'accent' ? theme.accent : theme.accent2}18` : 'transparent' }}
              >
                <span className="text-sm" style={{ color: theme.text }}>{it.label}</span>
                <span className="font-mono text-sm font-bold" style={{ color: it.tag === 'accent' ? theme.accent : theme.accent2 }}>{it.value}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
      <div className="border-t px-4 py-2.5 text-[11px]" style={{ borderColor: theme.border, color: theme.muted }}>
        ↑↓ to navigate · all systems reporting
      </div>
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section id="hero" className="relative flex min-h-screen items-center" style={{ background: theme.bg }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(650px circle at 25% 35%, ${theme.accent}12, transparent)` }}
      />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: theme.accent }}
          >
            Help Desk · Support First Line
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl font-extrabold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-3 text-xl font-light"
            style={{ color: theme.muted }}
          >
            {content.role} · {content.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#skills"
              className="rounded px-7 py-3 font-semibold text-white"
              style={{ background: theme.accent }}
            >
              See metrics
            </a>
            <a
              href="#contact"
              className="rounded border px-7 py-3 font-semibold"
              style={{ borderColor: theme.accent, color: theme.accent }}
            >
              Raise a ticket
            </a>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <CommandPalette />
        </div>
      </div>
    </section>
  );
}
