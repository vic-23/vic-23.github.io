const stats = [
	{
		value: '2,000+',
		label: 'Users',
	},
	{
		value: '20',
		label: 'Departments',
	},
	{
		value: 'REST',
		label: 'APIs',
	},
	{
		value: 'Production',
		label: 'Environments',
	},
]

export default function Stats() {
	return (
		<section className="border-y border-white/5">

			<div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">

				{stats.map((stat) => (
					<div
						key={stat.label}
						className="border-r border-white/5 px-6 py-10 last:border-r-0"
					>

						<p className="text-2xl font-bold">
							{stat.value}
						</p>

						<p className="mt-2 font-mono text-xs uppercase tracking-wider text-zinc-500">
							{stat.label}
						</p>

					</div>
				))}

			</div>

		</section>
	)
}