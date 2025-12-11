import { type Product, ProductCard } from '@/components/ProductCard'
import { API_URL } from '@/constants'

// export const dynamic = 'force-dynamic'

export default async function ShopPage() {
	const response = await fetch(API_URL, {
		cache: 'no-store'
	})
	const products = (await response.json()) as Product[]

	return (
		<div className="grid grid-cols-2 gap-4">
			{products.map(product => (
				<ProductCard
					key={product.id}
					{...product}
				/>
			))}
		</div>
	)
}
