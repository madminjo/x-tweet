import { type Product, ProductCard } from '@/components/ProductCard'
import { API_URL } from '@/constants'

// export const revalidate = 300

export default async function ShopISRPage() {
	const response = await fetch(API_URL, {
		next: { revalidate: 300 }
	})
 if (!response.ok) throw new Error('Failed to fetch products');
	const products = (await response.json()) as Product[]
	console.log(products);
	
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
