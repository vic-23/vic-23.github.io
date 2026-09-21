const steps = [
	{
		number: '01',
		title: 'Understand',
		description:
			'Requirements, constraints and existing systems.',
	},

	{
		number: '02',
		title: 'Model',
		description:
			'Data structures, architecture and system boundaries.',
	},

	{
		number: '03',
		title: 'Build',
		description:
			'APIs, business logic and interfaces.',
	},

	{
		number: '04',
		title: 'Deploy',
		description:
			'Containers, Linux and production environments.',
	},

	{
		number: '05',
		title: 'Improve',
		description:
			'Performance, reliability and maintainability.',
	},
]

export default function Workflow() {
	return (
		<section className="border-y border-white/5 bg-zinc-900/20">

			<div className="mx-auto max-w-6xl px-6 py-32">

				<div className="mb-16">

					<p className="font-mono text-sm text-cyan-400">
						08 / WORKFLOW
					</p>

					<h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
						How I approach problems.
					</h2>

				</div>

				<div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-5">

					{steps.map((step) => (
						<div
							key={step.number}
							className="bg-zinc-950 p-6"
						>

							<p className="font-mono text-xs text-cyan-400">
								{step.number}
							</p>

							<h3 className="mt-8 text-xl font-bold">
								{step.title}
							</h3>

							<p className="mt-3 text-sm leading-6 text-zinc-500">
								{step.description}
							</p>

						</div>
					))}

				</div>

			</div>

		</section>
	)
}