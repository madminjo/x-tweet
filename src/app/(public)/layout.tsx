import { Header } from '@/components/Header'
import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className="min-h-screen">
			<Header />
			<div className="w-full max-w-xl flex justify-center px-4 py-8">
				{children}
			</div>
		</div>
	)
}
