const categories = [
	{
		title: 'Languages',
		technologies: [
			'JavaScript',
			'TypeScript',
		],
	},

	{
		title: 'Frontend',
		technologies: [
			'React',
			'TailwindCSS',
			'Bootstrap',
		],
	},

	{
		title: 'Backend',
		technologies: [
			'Node.js',
			'Express',
			'REST APIs',
			'JWT',
		],
	},

	{
		title: 'Databases',
		technologies: [
			'PostgreSQL',
			'MySQL',
		],
	},

	{
		title: 'DevOps',
		technologies: [
			'Linux',
			'Docker',
			'Git',
			'GitHub',
			'SSH',
			'WireGuard',
		],
	},
]

export default function TechStack() {
	return (
		<section
			id="stack"
			className="mx-auto max-w-6xl px-6 py-32"
		>

			<div className="mb-12">

				<p className="font-mono text-sm text-cyan-400">
					07 / STACK
				</p>

				<h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
					Tools I work with.
				</h2>

			</div>

			<div className="grid gap-6 md:grid-cols-2">

				{categories.map((category) => (
					<div
						key={category.title}
						className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6"
					>

						<p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
							{category.title}
						</p>

						<div className="mt-5 flex flex-wrap gap-2">

							{category.technologies.map((technology) => (
								<span
									key={technology}
									className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-zinc-300"
								>
                  {technology}
                </span>
							))}

						</div>

					</div>
				))}

			</div>

		</section>
	)
}