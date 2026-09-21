export default function FeaturedProject() {
	return (
		<section
			id="work"
			className="mx-auto max-w-6xl px-6 py-32"
		>

			<div className="mb-12">

				<p className="font-mono text-sm text-cyan-400">
					02 / FEATURED CASE STUDY
				</p>

				<h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
					Legacy System Modernization
				</h2>

				<p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
					Modernizing an institutional legacy platform from
					Visual Basic 6 and Access 97 toward a modern
					web architecture.
				</p>

			</div>

			<div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8 md:p-12">

				<div className="grid gap-12 md:grid-cols-2">

					<div className="flex flex-col justify-center">

						<div className="font-mono text-sm">

							<div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">

								<p className="text-xs uppercase tracking-widest text-red-300/70">
									Legacy
								</p>

								<p className="mt-3 text-zinc-200">
									Visual Basic 6
								</p>

								<p className="text-zinc-500">
									Access 97
								</p>

							</div>

							<div className="py-5 text-center text-cyan-400">
								↓ modernization
							</div>

							<div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">

								<p className="text-xs uppercase tracking-widest text-cyan-300/70">
									Modern stack
								</p>

								<p className="mt-3 text-zinc-200">
									Node.js
								</p>

								<p className="text-zinc-400">
									Express.js
								</p>

								<p className="text-zinc-400">
									PostgreSQL
								</p>

								<p className="text-zinc-400">
									React
								</p>

							</div>

						</div>

					</div>

					<div>

						<ProjectDetail
							title="Problem"
							text="An aging desktop application and database required a more maintainable foundation."
						/>

						<ProjectDetail
							title="Approach"
							text="Modern backend architecture, database restructuring and REST API development."
						/>

						<ProjectDetail
							title="Focus"
							text="Maintainability, scalability, performance and production deployment."
						/>

						<div className="mt-10 flex flex-wrap gap-2">

							{[
								'Node.js',
								'Express',
								'PostgreSQL',
								'React',
								'Docker',
								'Linux',
							].map((tech) => (
								<span
									key={tech}
									className="rounded-md bg-white/5 px-3 py-2 font-mono text-xs text-zinc-400"
								>
                  {tech}
                </span>
							))}

						</div>

					</div>

				</div>

			</div>

		</section>
	)
}

function ProjectDetail({ title, text }) {
	return (
		<div className="mb-8">

			<p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
				{title}
			</p>

			<p className="mt-2 leading-7 text-zinc-400">
				{text}
			</p>

		</div>
	)
}