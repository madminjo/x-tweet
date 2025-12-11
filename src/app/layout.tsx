import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	subsets: ['latin'],
	variable: '--font-geist-sans',
	display: 'swap'
})

export const metadata: Metadata = {
	title: {
		template: '%s - X App',
		default: ''
	},
	description: 'Front-end insights, styled like X.com'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${geistSans.className} antialiased`}>{children}</body>
		</html>
	)
}
