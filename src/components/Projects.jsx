const projects = [
	{
		number: '03',
		type: 'BACKEND',
		title: 'Inventory API',
		description:
			'Production-style REST API with authentication, authorization, validation and PostgreSQL.',
		stack: [
			'Node.js',
			'TypeScript',
			'PostgreSQL',
			'Docker',
		],
		github: '#',
	},

	{
		number: '04',
		type: 'DEVOPS',
		title: 'Production Deployment Lab',
		description:
			'Linux-based deployment environment demonstrating Docker, Nginx and PostgreSQL.',
		stack: [
			'Linux',
			'Docker',
			'Nginx',
			'PostgreSQL',
		],
		github: '#',
	},

	{
		number: '05',
		type: 'FRONTEND',
		title: 'Operations Dashboard',
		description:
			'Responsive React dashboard consuming a REST API with reusable components.',
		stack: [
			'React',
			'TypeScript',
			'Tailwind',
		],
		github: '#',
	},
]

export default function Projects() {
	return (
		<section className="mx-auto max-w-6xl px-6 pb-32">

			<div className="mb-12">

				<p className="font-mono text-sm text-cyan-400">
					SELECTED PROJECTS
				</p>

				<h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
					Things I've built.
				</h2>

			</div>

			<div className="grid gap-6 md:grid-cols-3">

				{projects.map((project) => (
					<article
						key={project.title}
						className="group rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-zinc-900/70"
					>

						<p className="font-mono text-xs text-zinc-600">
							{project.number}
						</p>

						<p className="mt-8 font-mono text-xs text-cyan-400">
							{project.type}
						</p>

						<h3 className="mt-3 text-2xl font-bold">
							{project.title}
						</h3>

						<p className="mt-4 text-sm leading-7 text-zinc-400">
							{project.description}
						</p>

						<div className="mt-8 flex flex-wrap gap-2">

							{project.stack.map((tech) => (
								<span
									key={tech}
									className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-zinc-400"
								>
                  {tech}
                </span>
							))}

						</div>

						<a
							href={project.github}
							className="mt-8 block text-sm text-white transition group-hover:text-cyan-300"
						>
							View project →
						</a>

					</article>
				))}

			</div>

		</section>
	)
}