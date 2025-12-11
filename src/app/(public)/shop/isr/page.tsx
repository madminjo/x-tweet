import { type Product, ProductCard } from '@/components/ProductCard'
import { API_URL } from '@/constants'

// export const revalidate = 300

export default async function ShopISRPage() {
	const response = await fetch('http://localhost:3000/api/products', {
		next: { revalidate: 300 }
	})
console.log(response)

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
