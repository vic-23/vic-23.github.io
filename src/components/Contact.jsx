export default function Contact() {
	return (
		<footer
			id="contact"
			className="border-t border-white/5"
		>

			<div className="mx-auto max-w-6xl px-6 py-32">

				<p className="font-mono text-sm text-cyan-400">
					10 / CONTACT
				</p>

				<h2 className="mt-5 max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
					Let's build something.
				</h2>

				<p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
					I'm interested in Backend, Full-Stack and DevOps opportunities.
				</p>

				<div className="mt-10 flex flex-wrap gap-4">

					<a
						href="mailto:es.victormedina@gmail.com"
						className="rounded-lg bg-white px-6 py-3 font-medium text-zinc-950 transition hover:bg-cyan-300"
					>
						Email me
					</a>

					<a
						href="https://www.linkedin.com/in/victor-medina-626b1127b/"
						target="_blank"
						rel="noreferrer"
						className="rounded-lg border border-white/10 px-6 py-3 font-medium text-white transition hover:border-cyan-400/50 hover:text-cyan-300"
					>
						LinkedIn ↗
					</a>

				</div>

				<div className="mt-24 flex flex-col justify-between gap-4 border-t border-white/5 pt-8 text-sm text-zinc-600 md:flex-row">

					<p>
						Víctor Medina
					</p>

					<p className="font-mono">
						Backend · Architecture · DevOps
					</p>

				</div>

			</div>

		</footer>
	)
}