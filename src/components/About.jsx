export default function About() {
	return (
		<section
			id="about"
			className="mx-auto max-w-6xl px-6 py-32"
		>

			<div className="grid gap-16 md:grid-cols-2">

				<div>

					<p className="font-mono text-sm text-cyan-400">
						01 / ABOUT
					</p>

					<h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
						I like solving problems that exist outside tutorials.
					</h2>

				</div>

				<div>

					<p className="text-lg leading-8 text-zinc-400">
						My work sits between software development,
						databases and infrastructure.
					</p>

					<p className="mt-6 text-lg leading-8 text-zinc-400">
						I enjoy taking complex or outdated systems,
						understanding how they work, and turning them
						into maintainable software.
					</p>

					<div className="mt-10 grid grid-cols-2 gap-3">

						{[
							'Reliable',
							'Maintainable',
							'Scalable',
							'Understandable',
						].map((item) => (
							<div
								key={item}
								className="rounded-xl border border-white/10 bg-white/[0.02] p-4 font-mono text-sm text-zinc-300"
							>
								{item}
							</div>
						))}

					</div>

				</div>

			</div>

		</section>
	)
}