import type { ReactNode } from 'react';

/**
 * EFFECT 4 — Sticky Narrative Layout.
 *
 * Asymmetric two-column layout: the left (narrative) column stays pinned
 * (position: sticky) while the right (media/detail) column scrolls freely.
 * On mobile it collapses to a single stacked column.
 *
 * Usage:
 *   <StickyNarrative
 *     left={<Heading/Nav/>}
 *     right={<TallMediaStack/>}
 *   />
 */

type Props = {
  left: ReactNode;
  right: ReactNode;
  /** Tailwind top offset class for the sticky column. Default 'top-28'. */
  stickyTop?: string;
  /** Left column width on desktop (fraction). Default 'lg:w-[38%]'. */
  leftWidth?: string;
  className?: string;
};

export function StickyNarrative({
  left,
  right,
  stickyTop = 'top-28',
  leftWidth = 'lg:w-[38%]',
  className = '',
}: Props) {
  return (
    <div className={`flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 ${className}`}>
      <div className={`w-full ${leftWidth} lg:shrink-0`}>
        <div className={`lg:sticky ${stickyTop}`}>{left}</div>
      </div>
      <div className="w-full lg:flex-1">{right}</div>
    </div>
  );
}
