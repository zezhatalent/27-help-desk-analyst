import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';
import { useEffect, useRef } from 'react';

const palette = [
  { id: 0, label: 'Open tickets', value: '148', tag: 'accent' },
  { id: 1, label: 'SLA compliance', value: '98%', tag: 'accent2' },
  { id: 2, label: 'First-contact fix', value: '86%', tag: 'accent' },
  { id: 3, label: 'Avg resolution', value: '45m', tag: 'accent2' },
];

function TicketIcon({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  const { theme } = useTheme();
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      animate={{ opacity: [0, 0.5, 0.3, 0.5], scale: [0, 1, 0.9, 1], rotate: [- 20, 0, 5, 0] }}
      transition={{ duration: 5, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <rect x="10" y="20" width="80" height="60" rx="8" fill="none" stroke={`${theme.accent}40`} strokeWidth="3" />
      <line x1="10" y1="40" x2="90" y2="40" stroke={`${theme.accent}30`} strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="50" cy="60" r="8" fill="none" stroke={`${theme.accent}50`} strokeWidth="2" />
      <path d="M47 60 L50 63 L55 57" fill="none" stroke={`${theme.accent}50`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}

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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    el.addEventListener('mousemove', handle);
    return () => el.removeEventListener('mousemove', handle);
  }, [mouseX, mouseY]);

  return (
    <section ref={sectionRef} id="hero" className="relative flex min-h-screen items-center overflow-hidden" style={{ background: theme.bg }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(650px circle at 25% 35%, ${theme.accent}12, transparent)` }}
      />

      <TicketIcon x={8} y={15} size={55} delay={0} />
      <TicketIcon x={88} y={25} size={40} delay={1.5} />
      <TicketIcon x={75} y={70} size={50} delay={0.8} />
      <TicketIcon x={12} y={75} size={35} delay={2.2} />
      <TicketIcon x={50} y={8} size={30} delay={3} />

      <motion.svg
        className="absolute bottom-10 left-10 opacity-10"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <motion.rect
          x="10"
          y="15"
          width="80"
          height="70"
          rx="10"
          fill="none"
          stroke={theme.accent}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
        <motion.line
          x1="10"
          y1="40"
          x2="90"
          y2="40"
          stroke={theme.accent}
          strokeWidth="1.5"
          strokeDasharray="5 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
        />
      </motion.svg>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <motion.div style={{ rotateX, rotateY, transformPerspective: 1000 }}>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: theme.accent }}
          >
            Help Desk · Support First Line
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 80 }}
            className="text-5xl font-extrabold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.04, duration: 0.5 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-3 text-xl font-light"
            style={{ color: theme.muted }}
          >
            {content.role} · {content.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <motion.a
              href="#skills"
              className="rounded px-7 py-3 font-semibold text-white"
              style={{ background: theme.accent }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${theme.accent}60` }}
              whileTap={{ scale: 0.95 }}
            >
              See metrics
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded border px-7 py-3 font-semibold"
              style={{ borderColor: theme.accent, color: theme.accent }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${theme.accent}30` }}
              whileTap={{ scale: 0.95 }}
            >
              Raise a ticket
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <CommandPalette />
        </motion.div>
      </div>
    </section>
  );
}
