'use client'

import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'
import { MENU } from './menu.data'
import { MenuItem } from './MenuItem'

export function Menu() {
	const pathname = usePathname()
	// const segment = useSelectedLayoutSegment()

	return (
		<nav className="flex gap-6">
			{MENU.map(menuItem => (
				<MenuItem
					key={menuItem.name}
					menuItem={menuItem}
					isActive={!!match(menuItem.href)(pathname)}
				/>
			))}
		</nav>
	)
}
