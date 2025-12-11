import dynamic from 'next/dynamic'

const DynamicProfileButton = dynamic(() =>
	import('./ProfileButton').then(mod => mod.ProfileButton)
)

export function ProfileFake() {
	return (
		<div>
			<h1 className="text-3xl font-bold mb-6">Profile fake</h1>

			<DynamicProfileButton />
		</div>
	)
}
