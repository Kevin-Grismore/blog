'use client';

import type { PageMapItem } from 'nextra'
import type { FC } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { normalizePages } from 'nextra/normalize-pages'

export const Navbar: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname();

  const { topLevelNavbarItems } = normalizePages({
    list: pageMap,
    route: pathname
  })

  const tabs: { [key: string]: any } = {
    about: 1
  };

  const pathStart = pathname.split('/')[1]

  return (
    <nav className="navbar" id="nav">
      <div className="navbarbackdrop">
        <div className="relative flex gap-2">
          <div
            className="navbarmotion"
            style={{
              left: `${tabs[pathStart] ? tabs[pathStart] * (100 + 8) : 0}px`,
            }}
          />
          {topLevelNavbarItems.map((item) => {
            const isActive = pathStart === item.route.split('/')[1];

            return (
              <Link
                key={item.route}
                href={item.route}
                className={`navitemtext border border-transparent transition-all duration-300 ${isActive ? '' : 'hover:border-white/50 hover:bg-gray/30'
                  }`}
                style={isActive ? { color: 'var(--color-nav-text-active)' } : undefined}
              >
                {item.title}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}